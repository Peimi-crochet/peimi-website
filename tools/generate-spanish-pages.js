const fs=require('fs');
const path=require('path');

const root=path.resolve(__dirname,'..');
const out=path.join(root,'es');
fs.mkdirSync(out,{recursive:true});

const categories=[
  ['bags.html','Bolsos de crochet','/assets/bags/bag_5.jpg'],
  ['bouquets.html','Ramos de flores de crochet','/assets/bouquets/bouquet_01.jpg'],
  ['dolls.html','Amigurumi y muñecos','/assets/dolls/doll_1.jpg'],
  ['accessories.html','Regalos de apoyo emocional','/assets/emotional-support/emo_7.jpg'],
  ['micro-accessories.html','Joyería de micro crochet','/assets/micro-accessories/jewelry_2.png'],
  ['crochet-keychains.html','Llaveros y charms','/assets/keychains/generated/strawberry-clean.webp'],
  ['crochet-car-hangers.html','Adornos para coche','/assets/car-hangers/generated/pastel-rainbow.webp'],
  ['crochet-home-decor.html','Decoración de hogar en crochet','/assets/home-decor/storage-baskets.webp'],
  ['christmas.html','Colección de Navidad','/assets/christmas/xmas_1.png']
];

const pages={
  'index.html':{
    path:'',title:'Fabricante de crochet al por mayor | PEIMI',
    description:'Fabricante OEM y ODM de bolsos, ramos, amigurumi, regalos, llaveros y accesorios de crochet para compradores mayoristas.',
    eyebrow:'FABRICANTE OEM / ODM DE CROCHET',h1:'Colecciones de crochet al por mayor para marcas y tiendas',
    intro:'Desarrollamos productos de crochet personalizados para boutiques, floristerías, tiendas de regalos y programas de marca privada. Desde la muestra hasta el embalaje, PEIMI ofrece una gestión clara para compradores internacionales.',
    image:'/assets/factory/factory-audit-production.webp',
    points:['MOQ estándar desde 200 unidades por modelo','Muestras y colores personalizados','Etiquetas, tarjetas y embalaje de marca','Producción y envío internacional'],
    heading:'Encuentre la categoría adecuada para su programa minorista',
    body:'Compare categorías, seleccione estilos y envíe su briefing. Nuestro equipo comercial le ayudará a confirmar cantidades, materiales, colores, fechas y presentación para retail.',
    cards:categories.map(([href,name,image])=>({href:'/es/'+href,name,image,copy:'Ver colección mayorista y opciones de personalización.'}))
  },
  'bags.html':{
    path:'bags.html',title:'Bolsos de crochet al por mayor y marca privada | PEIMI',description:'Fabricante de bolsos de crochet personalizados para boutiques, resorts y tiendas de regalos. MOQ desde 200 unidades por modelo.',
    eyebrow:'BOLSOS OEM / ODM PARA RETAIL',h1:'Fabricante de bolsos de crochet al por mayor',intro:'Cree colecciones de bolsos para boutiques, tiendas de resort y comercios de regalos con colores, forros, asas, etiquetas y embalaje personalizados.',image:'/assets/bags/bag_5.jpg',
    points:['MOQ estándar: 200 unidades por modelo','Algodón, rafia y mezclas de hilo','Colores, asas, forros y etiquetas a medida','Muestra previa a la producción'],heading:'Bolsos pensados para compradores mayoristas',body:'Defina la silueta, el uso, el material, la paleta y el precio objetivo. Confirmamos los detalles mediante muestra antes de iniciar la producción a granel.',
    cards:[['/assets/bags/bag_1.jpg','Bolso floral de crochet'],['/assets/bags/bag_5.jpg','Tote granny square'],['/assets/bags/bag_17.jpg','Bolso estilo rafia'],['/assets/bags/bag_20.jpg','Tote jardín de tulipanes']]
  },
  'bouquets.html':{
    path:'bouquets.html',title:'Ramos de crochet al por mayor para floristerías | PEIMI',description:'Ramos de flores de crochet hechos a mano para floristerías, regalos, bodas y marca privada. Personalización OEM y ODM.',
    eyebrow:'FLORES DURADERAS PARA REGALO',h1:'Ramos de flores de crochet al por mayor',intro:'Ramos hechos a mano para floristerías, bodas, graduaciones, regalos y programas de marca privada, con combinaciones, envoltorios y tarjetas personalizables.',image:'/assets/bouquets/bouquet_01.jpg',
    points:['MOQ estándar: 200 unidades por modelo','Mezclas florales y colores personalizados','Envoltorio, cinta y tarjeta de marca','Alternativa duradera a la flor fresca'],heading:'Programas florales listos para retail',body:'Seleccione flores, tamaño, colores y ocasión. Podemos coordinar el ramo, la envoltura y la presentación para diferentes temporadas y niveles de precio.',
    cards:[['/assets/bouquets/bouquet_01.jpg','Ramo cosecha de sol'],['/assets/bouquets/bouquet_02.jpg','Ramo floral romántico'],['/assets/bouquets/bouquet_03.jpg','Ramo pastel'],['/assets/bouquets/bouquet_04.jpg','Ramo para regalo']]
  },
  'dolls.html':{
    path:'dolls.html',title:'Fabricante de amigurumi personalizados al por mayor | PEIMI',description:'Desarrollo y fabricación de muñecos amigurumi personalizados para marcas de juguetes, regalos y colecciones promocionales.',
    eyebrow:'DESARROLLO DE PERSONAJES OEM / ODM',h1:'Amigurumi y muñecos de crochet personalizados',intro:'Convertimos bocetos, mascotas y conceptos de marca en amigurumi para tiendas de regalos, marcas infantiles, campañas y colecciones privadas.',image:'/assets/dolls/doll_1.jpg',
    points:['Desarrollo desde dibujo o referencia','Colores, ropa y accesorios personalizados','Muestra y aprobación antes del pedido','Etiquetas y embalaje para retail'],heading:'Del concepto a un personaje producido en serie',body:'Para cotizar, comparta vistas del diseño, tamaño, colores, accesorios, cantidad y fecha objetivo. Revisamos construcción, seguridad y presentación durante el muestreo.',
    cards:[['/assets/dolls/doll_1.jpg','Muñeco amigurumi personalizado'],['/assets/dolls/doll_4.jpg','Conejo clásico de crochet'],['/assets/dolls/doll_6.jpg','Colección de animales'],['/assets/dolls/doll_10.jpg','Personaje para regalo']]
  },
  'accessories.html':{
    path:'accessories.html',title:'Regalos de apoyo emocional de crochet al por mayor | PEIMI',description:'Regalos positivos y personajes de apoyo emocional de crochet para tiendas, cajas de cuidado y programas personalizados.',
    eyebrow:'REGALOS POSITIVOS Y PERSONALIZABLES',h1:'Regalos de apoyo emocional de crochet',intro:'Personajes pequeños con mensajes positivos para librerías, tiendas de regalos, cajas de cuidado, eventos y programas de bienestar.',image:'/assets/emotional-support/emo_7.jpg',
    points:['Personajes y mensajes personalizables','Tarjetas y embalaje de marca','Colecciones para bienestar y regalo','MOQ estándar: 200 unidades por modelo'],heading:'Pequeños regalos con un mensaje claro',body:'Combine personaje, color y mensaje para crear una colección coherente. Confirmamos el texto, la tarjeta, el idioma y el embalaje antes de producir.',
    cards:[['/assets/emotional-support/emo_1.jpg','Tortuga de apoyo emocional'],['/assets/emotional-support/emo_7.jpg','Abeja de ánimo'],['/assets/emotional-support/emo_12.jpg','Capibara de apoyo'],['/assets/emotional-support/emo_15.jpg','Regalo con mensaje positivo']]
  },
  'micro-accessories.html':{
    path:'micro-accessories.html',title:'Joyería y accesorios de micro crochet al por mayor | PEIMI',description:'Pendientes, broches, colgantes y accesorios de micro crochet personalizados para boutiques y tiendas de regalos.',
    eyebrow:'DETALLE ARTESANAL PARA BOUTIQUES',h1:'Joyería y accesorios de micro crochet al por mayor',intro:'Pendientes, broches, colgantes y pequeños accesorios florales desarrollados para boutiques, museos, tiendas de jardín y colecciones de regalo.',image:'/assets/micro-accessories/jewelry_2.png',
    points:['Ganchos, cierres y acabados personalizados','Colores y motivos coordinados','Tarjetas expositoras de marca','Producción artesanal con control de calidad'],heading:'Detalles ligeros para una presentación premium',body:'Confirme tamaño, peso, herrajes, colores y tipo de expositor. La muestra final permite revisar comodidad, proporción y acabado antes del pedido.',
    cards:[['/assets/micro-accessories/jewelry_1.jpg','Pendientes florales de encaje'],['/assets/micro-accessories/jewelry_2.png','Pendientes de girasol'],['/assets/micro-accessories/jewelry_3.jpg','Pendientes florales de alambre'],['/assets/micro-accessories/jewelry_4.png','Pendientes de flor colgante']]
  },
  'christmas.html':{
    path:'christmas.html',title:'Adornos de Navidad de crochet al por mayor | PEIMI',description:'Adornos navideños de crochet, regalos y decoración estacional personalizados para tiendas y programas de marca privada.',
    eyebrow:'PLANIFICACIÓN ESTACIONAL PARA RETAIL',h1:'Adornos de Navidad de crochet al por mayor',intro:'Colecciones navideñas de Santa, muñecos de nieve, árboles, calcetines y personajes para tiendas de regalos, decoración y campañas corporativas.',image:'/assets/christmas/xmas_1.png',
    points:['Colores y surtidos estacionales','Etiquetas y cajas de regalo personalizadas','Planificación anticipada de producción','MOQ estándar: 200 unidades por modelo'],heading:'Prepare la temporada con antelación',body:'Comparta su fecha de lanzamiento, surtido, cantidades y requisitos de embalaje. Recomendamos aprobar muestras con suficiente margen antes de la temporada alta.',
    cards:[['/assets/christmas/xmas_1.png','Santa artesanal'],['/assets/christmas/xmas_2.png','Muñeco de nieve'],['/assets/christmas/xmas_4.jpg','Calcetín navideño'],['/assets/christmas/xmas_10.jpg','Set de adornos de invierno']]
  },
  'crochet-keychains.html':{
    path:'crochet-keychains.html',title:'Llaveros de crochet y charms al por mayor | PEIMI',description:'Llaveros y charms de crochet personalizados para boutiques, regalos y comercio social. Frutas, animales, flores y mini accesorios.',
    eyebrow:'COLECCIÓN VISUAL PARA SOCIAL COMMERCE',h1:'Llaveros y charms de crochet al por mayor',intro:'Diseños pequeños y llamativos para boutiques, tiendas de regalos y vendedores sociales: frutas, animales, flores, comida y mini bolsos.',image:'/assets/keychains/generated/strawberry-clean.webp',
    points:['Anillas, mosquetones y cordones a medida','Motivos y colores personalizados','Tarjetas y embalaje para retail','MOQ estándar: 200 unidades por modelo'],heading:'Productos compactos y fáciles de mostrar',body:'Desarrolle series coleccionables con un lenguaje visual consistente. Confirmamos tamaño, herrajes, colores y surtido durante el muestreo.',
    cards:[['/assets/keychains/generated/strawberry-clean.webp','Llavero de fresa'],['/assets/keychains/generated/cherries-clean.webp','Charm de cerezas'],['/assets/keychains/generated/frog.webp','Llavero de rana'],['/assets/keychains/generated/mini-tote-pouch.webp','Mini bolso granny square']]
  },
  'crochet-car-hangers.html':{
    path:'crochet-car-hangers.html',title:'Adornos de crochet para coche al por mayor | PEIMI',description:'Adornos colgantes de crochet personalizados para tiendas de automóvil, regalos y lifestyle. Lazos, cuentas y borlas a medida.',
    eyebrow:'REGALOS LIGEROS PARA INTERIORES',h1:'Adornos colgantes de crochet para coche',intro:'Diseños decorativos ligeros para tiendas de accesorios de automóvil, regalos y lifestyle, con lazos, cuentas, borlas y colores personalizables.',image:'/assets/car-hangers/generated/pastel-rainbow.webp',
    points:['Largo del cordón y nudos personalizados','Cuentas, borlas y paletas a medida','Tarjetas con instrucciones y marca','Revisión de peso y dimensiones en muestra'],heading:'Una nueva categoría para regalo y lifestyle',body:'La colocación final debe cumplir las normas locales y no obstruir la visión del conductor. Confirmamos peso, dimensiones y presentación durante el muestreo.',
    cards:[['/assets/car-hangers/generated/pastel-rainbow.webp','Arcoíris pastel'],['/assets/car-hangers/generated/daisy-bouquet.webp','Ramo de margaritas'],['/assets/car-hangers/generated/moon-stars.webp','Luna y estrellas'],['/assets/car-hangers/generated/sun-cloud.webp','Sol y nube']]
  },
  'crochet-home-decor.html':{
    path:'crochet-home-decor.html',title:'Decoración de hogar de crochet al por mayor | PEIMI',description:'Fabricante de decoración de hogar de crochet personalizada: cestas, posavasos, cubremacetas, tapices y cojines para compradores mayoristas.',
    eyebrow:'COLECCIÓN DE HOGAR Y LIFESTYLE',h1:'Decoración de hogar de crochet al por mayor',intro:'Cestas, juegos de mesa, cubremacetas y acentos textiles personalizados para tiendas de regalos, hogar, jardín y colecciones de marca privada.',image:'/assets/home-decor/wall-hanging-cushion.webp',
    points:['MOQ desde 200 unidades por modelo','Tamaños y colores personalizados','Etiquetas y embalaje de marca privada','Muestra aprobada antes de producción'],heading:'Cree una colección coordinada para el hogar',body:'Alineamos materiales, dimensiones, paletas, etiquetas y presentación para que cada producto funcione dentro del mismo programa minorista.',
    cards:[['/assets/home-decor/storage-baskets.webp','Set de cestas de crochet'],['/assets/home-decor/coaster-placemat-set.webp','Posavasos y manteles individuales'],['/assets/home-decor/plant-pot-covers.webp','Cubremacetas de crochet'],['/assets/home-decor/wall-hanging-cushion.webp','Tapiz y cojín decorativo']]
  },
  'market-hot-picks.html':{
    path:'market-hot-picks.html',title:'Productos de crochet de tendencia al por mayor | PEIMI',description:'Selección B2B de productos de crochet para compradores de regalos, boutiques, floristerías y marcas privadas.',
    eyebrow:'SELECCIÓN B2B MULTICATEGORÍA',h1:'Productos de crochet con potencial para retail',intro:'Una selección para comparar bolsos, ramos, amigurumi, regalos positivos, llaveros y accesorios según su capacidad de personalización y presentación.',image:'/assets/factory/factory-audit-production.webp',
    points:['Selección para tiendas y compradores B2B','Categorías permanentes y estacionales','Opciones OEM / ODM','Recomendaciones según canal y precio'],heading:'Cree una selección adaptada a su mercado',body:'No existe un producto ganador garantizado. Nuestro equipo puede recomendar categorías según país, canal de venta, cliente objetivo, temporada y presupuesto.',
    cards:categories.map(([href,name,image])=>({href:'/es/'+href,name,image,copy:'Explorar opciones de compra y personalización.'}))
  }
};

const css=`:root{--ink:#1e160e;--cream:#f5efe6;--paper:#fffaf4;--gold:#b38a51;--muted:#766655}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,sans-serif}a{color:inherit}#nav{position:sticky;top:0;z-index:1000;display:flex;align-items:center;justify-content:space-between;padding:16px 4vw;background:#100d09;color:#fff}.logo{text-decoration:none;font:bold 24px/1 Arial;letter-spacing:3px}.logo em{color:var(--gold);font-style:normal}.menu-toggle{display:none}.nav-menu{display:flex;align-items:center;gap:25px;margin:0;padding:0;list-style:none}.nav-menu a{text-decoration:none;font-size:11px;letter-spacing:1.5px;text-transform:uppercase}.nav-btn{padding:11px 16px;background:var(--gold)}.hero{min-height:610px;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(320px,.95fr);background:#17120d;color:#fff}.hero-copy{padding:88px 7vw;align-self:center}.eyebrow{color:#d4af77;font-size:11px;font-weight:bold;letter-spacing:3px}.hero h1{max-width:780px;margin:20px 0;font-family:Georgia,serif;font-size:clamp(44px,6vw,82px);line-height:1.02}.hero p.intro{max-width:720px;color:#d6cec4;font-size:16px;line-height:1.75}.hero-media{min-height:480px;overflow:hidden}.hero-media img{width:100%;height:100%;object-fit:cover}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}.button{display:inline-block;padding:15px 22px;text-decoration:none;text-transform:uppercase;font-size:11px;font-weight:bold;letter-spacing:1.2px;background:var(--gold);color:#fff}.button.alt{border:1px solid #8b7a68;background:transparent}.trust{display:grid;grid-template-columns:repeat(4,1fr);background:#fff}.trust div{padding:28px;border-right:1px solid #e5d9ca;text-align:center;font-size:13px;line-height:1.45}.section{max-width:1240px;margin:auto;padding:80px 28px}.section h2{max-width:850px;margin:0 0 16px;font-family:Georgia,serif;font-size:clamp(34px,4vw,55px)}.lead{max-width:850px;color:var(--muted);font-size:16px;line-height:1.8}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px}.card{overflow:hidden;background:var(--paper);border:1px solid #e3d6c7}.card img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block}.card-copy{padding:18px}.card h3{margin:0 0 8px;font-family:Georgia,serif;font-size:21px}.card p{min-height:42px;margin:0;color:var(--muted);font-size:13px;line-height:1.55}.card a{display:inline-block;margin-top:14px;color:#8e642e;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase}.buyer{background:#21180f;color:#fff}.buyer-inner{max-width:1240px;margin:auto;padding:72px 28px;display:grid;grid-template-columns:1fr auto;gap:35px;align-items:center}.buyer h2{margin:0 0 12px;font-family:Georgia,serif;font-size:42px}.buyer p{max-width:720px;margin:0;color:#cbbfb1;line-height:1.7}.footer{padding:30px;text-align:center;background:#100d09;color:#9f9181;font-size:12px}@media(max-width:900px){.hero{grid-template-columns:1fr}.hero-copy{padding:70px 28px}.hero-media{min-height:360px}.trust,.grid{grid-template-columns:repeat(2,1fr)}.nav-menu{gap:12px}.nav-menu>li:not(.peimi-language-item):not(:last-child){display:none}.buyer-inner{grid-template-columns:1fr}}@media(max-width:560px){.hero h1{font-size:45px}.trust,.grid{grid-template-columns:1fr}.trust div{text-align:left}.buyer h2{font-size:34px}}`;
const multilingualCss=`html[lang=ja] body,html[lang=ko] body{font-family:"Yu Gothic","Meiryo","Noto Sans JP","Malgun Gothic","Noto Sans KR",Arial,sans-serif}html[lang=ja] .hero h1,html[lang=ko] .hero h1{font-family:inherit;font-size:clamp(40px,5vw,68px);line-height:1.18;letter-spacing:.01em}html[lang=ja] .section h2,html[lang=ko] .section h2,html[lang=ja] .card h3,html[lang=ko] .card h3,html[lang=ja] .buyer h2,html[lang=ko] .buyer h2{font-family:inherit;line-height:1.35}@media(max-width:900px){#nav{flex-wrap:wrap}.nav-menu{width:100%;justify-content:flex-start;overflow-x:auto;padding-top:12px;border-top:1px solid rgba(176,141,87,.22);scrollbar-width:thin}.nav-menu>li:not(.peimi-language-item):not(:last-child){display:block}.nav-menu a{white-space:nowrap}.peimi-language-item{margin-left:auto}}@media(max-width:560px){html[lang=ja] .hero h1,html[lang=ko] .hero h1{font-size:38px}}`;
fs.writeFileSync(path.join(out,'es.css'),css+multilingualCss);

function normalizeCards(cards){return cards.map(card=>Array.isArray(card)?{image:card[0],name:card[1],copy:'Consulte colores, materiales, cantidades y embalaje personalizado.',href:'https://wa.me/8619860581805?text='+encodeURIComponent('Hola PEIMI, necesito una cotización para '+card[1]+'.')}:card)}
function html(file,page){
  const spanishUrl='https://peimicrochet.com/es/'+page.path;
  const englishUrl='https://peimicrochet.com/'+page.path;
  const cards=normalizeCards(page.cards);
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script src="/site-analytics.js" defer></script><title>${page.title}</title><meta name="description" content="${page.description}"><link rel="canonical" href="${spanishUrl}"><link rel="alternate" hreflang="en" href="${englishUrl}"><link rel="alternate" hreflang="es" href="${spanishUrl}"><link rel="alternate" hreflang="fr" href="https://peimicrochet.com/fr/${page.path}"><link rel="alternate" hreflang="ja" href="https://peimicrochet.com/ja/${page.path}"><link rel="alternate" hreflang="ko" href="https://peimicrochet.com/ko/${page.path}"><link rel="alternate" hreflang="x-default" href="${englishUrl}"><link rel="stylesheet" href="/es/es.css?v=20261014-3"></head><body><nav id="nav"><a class="logo" href="/es/">PEI<em>MI</em></a><button class="menu-toggle" type="button" aria-label="Abrir navegaci&oacute;n">&#9776;</button><ul class="nav-menu"><li><a href="/es/">Inicio</a></li><li><a href="/es/#categorias">Productos</a></li><li><a href="/es/market-hot-picks.html">Tendencias B2B</a></li><li><a href="/#story">Nosotros</a></li><li><a class="nav-btn" href="https://wa.me/8619860581805?text=${encodeURIComponent('Hola PEIMI, necesito una cotización mayorista.')}">Solicitar cotizaci&oacute;n</a></li></ul></nav><main><header class="hero"><div class="hero-copy"><div class="eyebrow">${page.eyebrow}</div><h1>${page.h1}</h1><p class="intro">${page.intro}</p><div class="actions"><a class="button" href="#coleccion">Ver colecci&oacute;n</a><a class="button alt" href="https://wa.me/8619860581805?text=${encodeURIComponent('Hola PEIMI, necesito información y una cotización mayorista.')}">Hablar con ventas</a></div></div><div class="hero-media"><img src="${page.image}" alt="${page.h1}"></div></header><div class="trust">${page.points.map(x=>`<div>${x}</div>`).join('')}</div><section class="section" id="coleccion"><div class="eyebrow">COMPRA MAYORISTA</div><h2>${page.heading}</h2><p class="lead">${page.body}</p><div class="grid" id="categorias">${cards.map(c=>`<article class="card"><img loading="lazy" src="${c.image}" alt="${c.name}"><div class="card-copy"><h3>${c.name}</h3><p>${c.copy}</p><a href="${c.href}">${c.href.startsWith('/es/')?'Ver categoría':'Solicitar cotización'} &rarr;</a></div></article>`).join('')}</div></section><section class="buyer"><div class="buyer-inner"><div><h2>Cuéntenos qué necesita comprar</h2><p>Envíe categoría, cantidad, colores, embalaje, mercado de destino y fecha deseada. Fung o Maggie responderán con los siguientes pasos para muestra y cotización.</p></div><a class="button" href="https://wa.me/8619860581805?text=${encodeURIComponent('Hola PEIMI, quiero preparar un pedido mayorista.')}">Elegir asesora comercial</a></div></section></main><footer class="footer">PEIMI Crochet · Fabricaci&oacute;n OEM / ODM · Venta mayorista internacional</footer></body></html>`;
}

for(const [file,page] of Object.entries(pages)) fs.writeFileSync(path.join(out,file),html(file,page));

for(const [file,page] of Object.entries(pages)){
  const englishFile=path.join(root,file);
  let source=fs.readFileSync(englishFile,'utf8');
  if(!source.includes(`hreflang="es" href="https://peimicrochet.com/es/${page.path}"`)){
    const alternates=`<link rel="alternate" hreflang="en" href="https://peimicrochet.com/${page.path}"><link rel="alternate" hreflang="es" href="https://peimicrochet.com/es/${page.path}"><link rel="alternate" hreflang="fr" href="https://peimicrochet.com/fr/${page.path}"><link rel="alternate" hreflang="ja" href="https://peimicrochet.com/ja/${page.path}"><link rel="alternate" hreflang="ko" href="https://peimicrochet.com/ko/${page.path}"><link rel="alternate" hreflang="x-default" href="https://peimicrochet.com/${page.path}">`;
    source=source.replace(/<\/title>/i,`</title>${alternates}`);
    fs.writeFileSync(englishFile,source);
  }
}

const sitemapFile=path.join(root,'sitemap.xml');
let sitemap=fs.readFileSync(sitemapFile,'utf8');
for(const page of Object.values(pages)){
  const url=`https://peimicrochet.com/es/${page.path}`;
  if(!sitemap.includes(`<loc>${url}</loc>`)){
    const entry=`  <url><loc>${url}</loc><lastmod>2026-10-14</lastmod><changefreq>weekly</changefreq><priority>${page.path?'0.8':'0.9'}</priority></url>`;
    sitemap=sitemap.replace('</urlset>',`${entry}\n</urlset>`);
  }
}
fs.writeFileSync(sitemapFile,sitemap);

console.log(`Generated ${Object.keys(pages).length} Spanish pages and updated language SEO links.`);
