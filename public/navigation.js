const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const mobileNavigation = window.matchMedia('(max-width: 760px)');
const gear = document.querySelector('.gear-details');

function closeMenu(returnFocus = false) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.querySelector('span').textContent = '+';
  navigation.classList.remove('is-open');
  if (returnFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.querySelector('span').textContent = open ? '−' : '+';
  navigation.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('header')) closeMenu();
});
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  if (mobileNavigation.matches) {
    const section = document.querySelector(link.getAttribute('href'));
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
});
function setResponsiveDetails() {
  closeMenu();
  gear.open = !mobileNavigation.matches;
}
mobileNavigation.addEventListener('change', setResponsiveDetails);
setResponsiveDetails();

const links = [...navigation.querySelectorAll('a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
let pending = false;
function updateCurrentSection() {
  pending = false;
  const threshold = document.querySelector('header').offsetHeight + 100;
  let current = null;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
  links.forEach(link => {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', () => {
  if (!pending) { pending = true; requestAnimationFrame(updateCurrentSection); }
}, { passive: true });
window.addEventListener('resize', updateCurrentSection);
updateCurrentSection();
