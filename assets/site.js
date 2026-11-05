document.querySelectorAll('a.mail').forEach(a=>{const e=a.dataset.u+'@'+a.dataset.d;a.href='mailto:'+e;if(a.textContent.includes('[at]'))a.textContent=e;});
const fb=[...document.querySelectorAll('.filters button')];
function pick(t){fb.forEach(x=>x.classList.toggle('on',(x.dataset.f||'')===t));document.querySelectorAll('.grid .ep').forEach(c=>c.style.display=(!t||c.dataset.topic===t)?'':'none');}
fb.forEach(b=>b.addEventListener('click',()=>{pick(b.dataset.f||'');history.replaceState(null,'',b.dataset.f?'#'+encodeURIComponent(b.dataset.f):location.pathname);}));
if(fb.length&&location.hash)pick(decodeURIComponent(location.hash.slice(1)));
