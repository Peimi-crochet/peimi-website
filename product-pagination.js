(() => {
  const PAGE_SIZE = 12;
  const grid = document.querySelector('.products-grid');
  if (!grid) return;

  const cards = [...grid.querySelectorAll(':scope > .product-card')];
  if (cards.length <= PAGE_SIZE) return;

  const style = document.createElement('style');
  style.textContent = `
    .product-pagination{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:42px;flex-wrap:wrap}
    .product-page-btn{min-width:42px;height:42px;padding:0 14px;border:1px solid rgba(140,100,60,.28);background:#faf6f0;color:#3d2e22;font:600 12px Inter,sans-serif;letter-spacing:.5px;cursor:pointer;transition:.25s ease}
    .product-page-btn:hover:not(:disabled),.product-page-btn.active{background:#120e08;border-color:#120e08;color:#fff}
    .product-page-btn:disabled{opacity:.35;cursor:not-allowed}
    .product-page-status{width:100%;text-align:center;margin-top:10px;color:rgba(61,46,34,.62);font-size:12px;letter-spacing:1px}
    @media(max-width:520px){.product-page-btn{min-width:38px;height:38px;padding:0 10px}.product-pagination{gap:6px}}
  `;
  document.head.append(style);

  const section = grid.closest('.products-section') || grid.parentElement;
  const pagination = document.createElement('nav');
  pagination.className = 'product-pagination';
  pagination.setAttribute('aria-label', 'Product pages');
  const status = document.createElement('div');
  status.className = 'product-page-status';
  status.setAttribute('aria-live', 'polite');
  grid.parentElement.append(pagination, status);

  const headings = [...grid.querySelectorAll(':scope > .series-heading')];
  const seriesByCard = new Map();
  let activeHeading = null;
  [...grid.children].forEach(item => {
    if (item.classList.contains('series-heading')) activeHeading = item;
    if (item.classList.contains('product-card')) seriesByCard.set(item, activeHeading);
  });

  const totalPages = Math.ceil(cards.length / PAGE_SIZE);
  let currentPage = Math.min(Math.max(Number(new URLSearchParams(location.search).get('page')) || 1, 1), totalPages);

  function makeButton(text, page, options = {}) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `product-page-btn${options.active ? ' active' : ''}`;
    button.textContent = text;
    button.disabled = Boolean(options.disabled);
    button.setAttribute('aria-label', options.label || `Page ${page}`);
    if (options.active) button.setAttribute('aria-current', 'page');
    button.addEventListener('click', () => showPage(page, true));
    return button;
  }

  function showPage(page, shouldScroll = false) {
    currentPage = Math.min(Math.max(page, 1), totalPages);
    const start = (currentPage - 1) * PAGE_SIZE;
    const visibleCards = cards.slice(start, start + PAGE_SIZE);
    const visibleSet = new Set(visibleCards);
    const visibleHeadings = new Set(visibleCards.map(card => seriesByCard.get(card)).filter(Boolean));

    cards.forEach(card => { card.hidden = !visibleSet.has(card); });
    headings.forEach(heading => { heading.hidden = !visibleHeadings.has(heading); });

    pagination.replaceChildren(
      makeButton('Previous', currentPage - 1, {disabled: currentPage === 1, label: 'Previous page'}),
      ...Array.from({length: totalPages}, (_, index) => makeButton(String(index + 1), index + 1, {active: index + 1 === currentPage})),
      makeButton('Next', currentPage + 1, {disabled: currentPage === totalPages, label: 'Next page'})
    );

    status.textContent = `Page ${currentPage} of ${totalPages} · Showing ${start + 1}-${start + visibleCards.length} of ${cards.length} products`;
    const url = new URL(location.href);
    url.searchParams.set('page', currentPage);
    history.replaceState(null, '', url);
    if (shouldScroll) section.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  showPage(currentPage);
})();
