(function(){
  var btn=document.querySelector('.menubtn'),menu=document.getElementById('mobilemenu');
  if(btn&&menu){btn.addEventListener('click',function(){
    var open=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    document.documentElement.style.overflow=open?'hidden':'';
  });}
  var tops=document.querySelectorAll('.navtop');
  tops.forEach(function(t){t.addEventListener('click',function(e){
    var item=t.parentNode,open=item.classList.toggle('open');
    t.setAttribute('aria-expanded',open?'true':'false');
  });});
  document.addEventListener('click',function(e){
    if(!e.target.closest('.navitem')){document.querySelectorAll('.navitem.open').forEach(function(i){i.classList.remove('open');});}
  });
  window.addEventListener('resize',function(){
    if(window.innerWidth>900&&menu&&menu.classList.contains('open')){menu.classList.remove('open');document.documentElement.style.overflow='';}
  });
})();
