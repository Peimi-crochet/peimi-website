(function(){
  var gaId='G-H0CXPFT4TM';
  var ga=document.createElement('script');
  ga.async=true;
  ga.src='https://www.googletagmanager.com/gtag/js?id='+gaId;
  document.head.appendChild(ga);
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config',gaId);

  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments);};
    t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,'clarity','script','y5cvknahr7');

  window.peimiTrack=function(eventName,params){
    if(typeof window.gtag==='function'){
      window.gtag('event',eventName,params||{});
    }
  };

  document.addEventListener('DOMContentLoaded',function(){
    var whatsappTarget='';
    var whatsappRouter=document.createElement('div');
    whatsappRouter.id='peimiWhatsappRouter';
    whatsappRouter.setAttribute('role','dialog');
    whatsappRouter.setAttribute('aria-modal','true');
    whatsappRouter.setAttribute('aria-hidden','true');
    whatsappRouter.setAttribute('aria-labelledby','peimiWhatsappRouterTitle');
    whatsappRouter.innerHTML='<div class="peimi-wa-panel"><button class="peimi-wa-close" type="button" aria-label="Close">&times;</button><div class="peimi-wa-kicker">PEIMI WHOLESALE SALES</div><h2 id="peimiWhatsappRouterTitle">Choose Your Sales Advisor</h2><p class="peimi-wa-intro">Select either advisor for wholesale pricing, samples, customization and order support.</p><div class="peimi-wa-options"><a class="peimi-wa-option" data-wa-number="8615089572877" target="_blank" rel="noopener"><span class="peimi-wa-avatar">F</span><span><strong>Fung</strong><small>Wholesale Sales · +86 150 8957 2877</small></span><b>Chat Now &rarr;</b></a><a class="peimi-wa-option" data-wa-number="8619860581805" target="_blank" rel="noopener"><span class="peimi-wa-avatar">M</span><span><strong>Maggie</strong><small>Wholesale Sales · +86 198 6058 1805</small></span><b>Chat Now &rarr;</b></a></div></div>';
    document.body.appendChild(whatsappRouter);

    var whatsappStyle=document.createElement('style');
    whatsappStyle.textContent='#peimiWhatsappRouter{position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(18,14,8,.76);backdrop-filter:blur(6px)}#peimiWhatsappRouter.is-open{display:flex}.peimi-wa-panel{position:relative;width:min(560px,100%);padding:38px;background:#faf6f0;border:1px solid rgba(176,141,87,.35);box-shadow:0 28px 80px rgba(0,0,0,.34)}.peimi-wa-close{position:absolute;top:12px;right:16px;border:0;background:transparent;color:#665345;font-size:30px;line-height:1;cursor:pointer}.peimi-wa-kicker{margin-bottom:12px;color:#9c7440;font:600 10px/1.4 Inter,sans-serif;letter-spacing:3px}.peimi-wa-panel h2{margin:0;color:#2c1f12;font:700 34px/1.1 "Playfair Display",serif}.peimi-wa-intro{margin:14px 0 24px;color:#786655;font:13px/1.7 Inter,sans-serif}.peimi-wa-options{display:grid;gap:12px}.peimi-wa-option{display:grid;grid-template-columns:48px 1fr auto;gap:14px;align-items:center;padding:16px;border:1px solid rgba(140,100,60,.2);background:#f5efe6;color:#2c1f12;text-decoration:none;transition:.2s ease}.peimi-wa-option:hover{border-color:#b08d57;transform:translateY(-2px);box-shadow:0 10px 24px rgba(61,46,34,.1)}.peimi-wa-avatar{display:grid;width:48px;height:48px;place-items:center;border-radius:50%;background:#b08d57;color:#fff;font:700 18px/1 Inter,sans-serif}.peimi-wa-option strong,.peimi-wa-option small{display:block}.peimi-wa-option strong{font:700 18px/1.3 "Playfair Display",serif}.peimi-wa-option small{margin-top:4px;color:#8c7a68;font:11px/1.4 Inter,sans-serif}.peimi-wa-option b{color:#7b5d34;font:700 10px/1.3 Inter,sans-serif;letter-spacing:1px;text-transform:uppercase}@media(max-width:560px){.peimi-wa-panel{padding:32px 20px 22px}.peimi-wa-panel h2{font-size:28px}.peimi-wa-option{grid-template-columns:42px 1fr;padding:14px}.peimi-wa-avatar{width:42px;height:42px}.peimi-wa-option b{grid-column:2}}';
    document.head.appendChild(whatsappStyle);

    function closeWhatsappRouter(){
      whatsappRouter.classList.remove('is-open');
      whatsappRouter.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
    }

    function openWhatsappRouter(href){
      whatsappTarget=href||'';
      var query='';
      try{query=new URL(whatsappTarget,window.location.href).search;}catch(error){}
      whatsappRouter.querySelectorAll('[data-wa-number]').forEach(function(option){
        option.href='https://wa.me/'+option.getAttribute('data-wa-number')+query;
      });
      whatsappRouter.classList.add('is-open');
      whatsappRouter.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
      whatsappRouter.querySelector('.peimi-wa-close').focus();
    }

    whatsappRouter.querySelector('.peimi-wa-close').addEventListener('click',closeWhatsappRouter);
    whatsappRouter.addEventListener('click',function(event){if(event.target===whatsappRouter) closeWhatsappRouter();});
    document.addEventListener('keydown',function(event){if(event.key==='Escape') closeWhatsappRouter();});
    whatsappRouter.querySelectorAll('[data-wa-number]').forEach(function(option){
      option.addEventListener('click',function(){
        window.peimiTrack('whatsapp_advisor_selected',{
          page_path:window.location.pathname,
          advisor:option.getAttribute('data-wa-number')==='8615089572877'?'Fung':'Maggie',
          source_link:whatsappTarget
        });
        closeWhatsappRouter();
      });
    });

    document.querySelectorAll('a[href*="wa.me/"]').forEach(function(link){
      link.addEventListener('click',function(event){
        if(event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        window.peimiTrack('whatsapp_click',{
          page_path:window.location.pathname,
          link_text:(link.textContent||'').trim(),
          destination:link.getAttribute('href')||''
        });
        openWhatsappRouter(link.getAttribute('href'));
      });
    });

    document.querySelectorAll('a[href*="#contact"]').forEach(function(link){
      link.addEventListener('click',function(){
        window.peimiTrack('contact_cta_click',{
          page_path:window.location.pathname,
          link_text:(link.textContent||'').trim(),
          destination:link.getAttribute('href')||''
        });
      });
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(function(link){
      link.addEventListener('click',function(){
        window.peimiTrack('email_click',{
          page_path:window.location.pathname,
          link_text:(link.textContent||'').trim(),
          destination:link.getAttribute('href')||''
        });
      });
    });
  });
})();
