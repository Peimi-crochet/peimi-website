import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const htmlFiles = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === '.dedupe_external') continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolute);
    else if (entry.name.endsWith('.html')) htmlFiles.push(absolute);
  }
}
walk(root);

const localFailures = [];
for (const file of htmlFiles) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); }
    catch (error) { localFailures.push({ file: relative, issue: `Invalid JSON-LD: ${error.message}` }); }
  }
  if (/\?category=/i.test(html)) localFailures.push({ file: relative, issue: 'Crawlable category query link remains' });
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] || '';
  const language = html.match(/<html[^>]+lang=["']([^"']+)/i)?.[1] || '';
  const alternates = [...html.matchAll(/<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["'][^>]+href=["']([^"']+)/gi)];
  if (alternates.length && !alternates.some((alternate) => alternate[1] === language && alternate[2] === canonical)) {
    localFailures.push({ file: relative, issue: 'Missing self-referencing hreflang' });
  }
}

async function inspect(url) {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'PEIMI-SEO-Audit/1.0' },
    });
    const html = await response.text();
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] || '';
    const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)/i)?.[1] || '';
    return {
      url,
      status: response.status,
      finalUrl: response.url,
      canonical,
      robots,
      ok: response.status === 200 && response.url === url && canonical === url && !/noindex/i.test(robots),
    };
  } catch (error) {
    return { url, error: error.message, ok: false };
  }
}

const results = [];
for (let index = 0; index < urls.length; index += 8) {
  results.push(...await Promise.all(urls.slice(index, index + 8).map(inspect)));
}

const failures = results.filter((result) => !result.ok);
console.log(JSON.stringify({
  localHtmlChecked: htmlFiles.length,
  localFailed: localFailures.length,
  localFailures,
  liveSitemapChecked: results.length,
  liveFailed: failures.length,
  liveFailures: failures,
}, null, 2));
process.exitCode = failures.length || localFailures.length ? 1 : 0;
