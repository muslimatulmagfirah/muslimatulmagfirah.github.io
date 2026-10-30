var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');
menuBtn.addEventListener('click', function () {
  var open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', function () { menu.classList.remove('open'); });


var topBtn = document.getElementById('top-btn');
window.addEventListener('scroll', function () {
  topBtn.classList.toggle('show', window.scrollY > 500);
});
topBtn.addEventListener('click', function () { window.scrollTo({ top: 0 }); });

document.querySelectorAll('a[data-needs-link]').forEach(function (a) {
  if (a.getAttribute('href').indexOf('GANTI_') !== -1) {
    a.removeAttribute('href');
    a.removeAttribute('target');
    a.classList.add('disabled');
    a.setAttribute('aria-disabled', 'true');
    a.title = 'Tautan belum diisi';
  }
});

function showPlaceholder(img) {
  var box = document.createElement('div');
  box.className = 'ph';
  box.textContent = 'Letakkan tangkapan layar asli di ' + img.getAttribute('src');
  img.replaceWith(box);
}
document.querySelectorAll('.shots img').forEach(function (img) {
  if (img.complete && img.naturalWidth === 0) { showPlaceholder(img); }
  else { img.addEventListener('error', function () { showPlaceholder(img); }); }
});

document.getElementById('year').textContent = new Date().getFullYear();
