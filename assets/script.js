
// Mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const open = nav.style.display === 'block';
    nav.style.display = open ? 'none' : 'block';
    hamburger.setAttribute('aria-expanded', String(!open));
  });
}

// Active nav
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('header nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href && href.endsWith(path)) a.style.fontWeight = '800';
});

// Language switcher (links exist in header)
document.querySelectorAll('.lang-switch').forEach(el => {
  el.addEventListener('click', e => {
    const target = e.target.closest('a');
    if (!target) return;
    // Let the link navigate normally
  });
});
