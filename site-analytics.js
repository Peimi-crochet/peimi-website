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
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function(link){
      link.addEventListener('click',function(){
        window.peimiTrack('whatsapp_click',{
          page_path:window.location.pathname,
          link_text:(link.textContent||'').trim(),
          destination:link.getAttribute('href')||''
        });
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
