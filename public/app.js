import { photographs, photoMetadata } from './photo-data.js';
const dialog = document.querySelector('dialog');
const content = document.querySelector('#dialog-content');
let previousFocus;
let dialogClosing = false;
let dialogCloseTimer;
function openDialog() {
  previousFocus = document.activeElement;
  dialog.classList.remove('is-closing');
  dialog.showModal();
  dialog.scrollTop = 0;
}
function closeDialog() {
  if (!dialog.open || dialogClosing) return;
  if (reducedMotion.matches) { dialog.close(); return; }
  dialogClosing = true;
  dialog.classList.add('is-closing');
  const finish = () => {
    window.clearTimeout(dialogCloseTimer);
    dialog.removeEventListener('animationend', handleAnimationEnd);
    if (dialog.open) dialog.close();
  };
  const handleAnimationEnd = event => {
    if (event.target === dialog && event.animationName === 'dialog-out') finish();
  };
  dialog.addEventListener('animationend', handleAnimationEnd);
  dialogCloseTimer = window.setTimeout(finish, 250);
}
document.querySelector('.close-dialog').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
});
dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(); });
dialog.addEventListener('close', () => {
  window.clearTimeout(dialogCloseTimer);
  dialog.classList.remove('is-closing');
  dialogClosing = false;
  previousFocus?.focus();
});
function heading(text) { const element = document.createElement('h2'); element.id = 'dialog-title'; element.textContent = text.toLowerCase(); return element; }
function paragraph(text) { const element = document.createElement('p'); element.textContent = text.toLowerCase(); return element; }
function subheading(text) { const element = document.createElement('h3'); element.textContent = text.toLowerCase(); return element; }

const photoGrid = document.querySelector('.photo-grid');
const photoViewport = document.createElement('div');
photoViewport.className = 'photo-viewport';
photoGrid.before(photoViewport);
photoViewport.append(photoGrid);
const photoCards = [];
photographs.forEach(([file, title, category, alt], index) => {
  const button = document.createElement('button');
  button.className = `photo${file === 'dscf0962' ? ' photo--portrait' : ''}`;
  button.dataset.title = title;
  button.dataset.file = file;
  button.dataset.collection = ['workspace', 'details'].includes(category) ? 'workspace' : 'travel';
  button.dataset.caption = `${String(index + 1).padStart(2, '0')} / ${category}`;
  button.setAttribute('aria-label', `enlarge photograph: ${title}`);

  const image = document.createElement('img');
  image.src = `assets/photography/${file}.webp`;
  image.alt = alt;
  image.width = file === 'dscf0962' ? 1200 : 1800;
  image.height = file === 'dscf0962' ? 1800 : 1200;
  image.loading = index === 0 ? 'eager' : 'lazy';
  image.decoding = 'async';

  const caption = document.createElement('span');
  const titleText = document.createElement('span');
  const categoryText = document.createElement('span');
  titleText.textContent = title;
  categoryText.textContent = button.dataset.caption;
  caption.append(titleText, categoryText);
  button.append(image, caption);
  photoGrid.append(button);
  photoCards.push(button);
});

const previousPhotos = document.querySelector('#previous-photos');
const nextPhotos = document.querySelector('#next-photos');
const photoPosition = document.querySelector('#photo-position');
const tabletPhotos = window.matchMedia('(max-width: 900px)');
const mobilePhotos = window.matchMedia('(max-width: 600px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let photoPage = 0;
let photoTransitioning = false;
let activeCollection = 'all';
const collectionControls = document.createElement('div');
collectionControls.className = 'photo-collections';
collectionControls.setAttribute('role', 'group');
collectionControls.setAttribute('aria-label', 'photo collections');
const collectionButtons = ['all', 'travel', 'workspace'].map(collection => {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.collection = collection;
  const count = photoCards.filter(card => collection === 'all' || card.dataset.collection === collection).length;
  button.textContent = `${collection} (${count})`;
  button.addEventListener('click', () => {
    if (photoTransitioning || activeCollection === collection) return;
    transitionPhotos(0, collection, 0);
  });
  collectionControls.append(button);
  return button;
});
photoViewport.before(collectionControls);


// Keep vertical scrolling native; only a deliberate horizontal drag changes photos.
let swipeStart;
let suppressPhotoClick = false;
photoViewport.addEventListener('pointerdown', event => {
  if (!event.isPrimary || event.button !== 0) return;
  swipeStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  suppressPhotoClick = false;
});
photoViewport.addEventListener('dragstart', event => event.preventDefault());
window.addEventListener('pointerup', event => {
  if (!swipeStart || swipeStart.id !== event.pointerId) return;
  const dx = event.clientX - swipeStart.x;
  const dy = event.clientY - swipeStart.y;
  swipeStart = null;
  if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
  suppressPhotoClick = true;
  changePhotoPage(dx < 0 ? 1 : -1);
  setTimeout(() => { suppressPhotoClick = false; }, 0);
});
window.addEventListener('pointercancel', () => { swipeStart = null; });
photoViewport.addEventListener('click', event => {
  if (suppressPhotoClick) { event.preventDefault(); event.stopImmediatePropagation(); }
}, true);


function collectionPhotos(collection = activeCollection) {
  return photoCards.filter(card => collection === 'all' || card.dataset.collection === collection);
}

function photosPerPage() {
  if (mobilePhotos.matches) return 1;
  if (tabletPhotos.matches) return 2;
  return 3;
}

function showPhotoPage() {
  const cards = collectionPhotos();
  const pageSize = photosPerPage();
  const pageCount = Math.ceil(cards.length / pageSize);
  photoPage = Math.min(photoPage, pageCount - 1);
  const firstPhoto = photoPage * pageSize;
  const lastPhoto = Math.min(firstPhoto + pageSize, cards.length);

  const visibleCards = new Set(cards.slice(firstPhoto, lastPhoto));
  photoCards.forEach(card => { card.hidden = !visibleCards.has(card); });
  collectionButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.collection === activeCollection));
    button.disabled = photoTransitioning;
  });
  previousPhotos.disabled = photoTransitioning || photoPage === 0;
  nextPhotos.disabled = photoTransitioning || photoPage === pageCount - 1;
  photoPosition.textContent = mobilePhotos.matches
    ? `${firstPhoto + 1} / ${cards.length}`
    : `${firstPhoto + 1}–${lastPhoto} of ${cards.length} · ${activeCollection}`;
}

function changePhotoPage(direction) {
  if (photoTransitioning) return;
  const targetPage = photoPage + direction;
  if (targetPage < 0 || targetPage >= Math.ceil(collectionPhotos().length / photosPerPage())) return;
  return transitionPhotos(targetPage, activeCollection, direction);
}

async function transitionPhotos(targetPage, targetCollection, direction) {
  if (photoTransitioning) return;
  if (reducedMotion.matches) {
    activeCollection = targetCollection;
    photoPage = targetPage;
    showPhotoPage();
    return;
  }
  photoTransitioning = true;
  photoGrid.setAttribute('aria-busy', 'true');
  showPhotoPage();
  let outgoing;
  const animations = [];
  try {
    const first = targetPage * photosPerPage();
    await Promise.all(collectionPhotos(targetCollection).slice(first, first + photosPerPage()).map(card => {
      const image = card.querySelector('img');
      image.loading = 'eager';
      return image.decode().catch(() => {});
    }));
    outgoing = photoGrid.cloneNode(true);
    outgoing.classList.add('photo-grid--outgoing');
    outgoing.removeAttribute('aria-busy');
    outgoing.setAttribute('aria-hidden', 'true');
    outgoing.inert = true;
    photoGrid.parentElement.append(outgoing);
    activeCollection = targetCollection;
    photoPage = targetPage;
    showPhotoPage();
    if (!reducedMotion.matches) {
      const timing = { duration: 360, easing: 'cubic-bezier(.25,.1,.25,1)', fill: 'both' };
      animations.push(
        outgoing.animate([{ opacity: 1, transform: 'translateX(0)' }, { opacity: 0, transform: `translateX(${-direction * 12}px)` }], timing),
        photoGrid.animate([{ opacity: 0, transform: `translateX(${direction * 12}px)` }, { opacity: 1, transform: 'translateX(0)' }], timing)
      );
      await Promise.all(animations.map(animation => animation.finished));
    }
  } finally {
    animations.forEach(animation => animation.cancel());
    outgoing?.remove();
    photoGrid.removeAttribute('aria-busy');
    photoTransitioning = false;
    showPhotoPage();
  }
}

previousPhotos.addEventListener('click', () => changePhotoPage(-1));
nextPhotos.addEventListener('click', () => changePhotoPage(1));
[tabletPhotos, mobilePhotos].forEach(query => query.addEventListener('change', () => {
  const firstVisiblePhoto = collectionPhotos().findIndex(card => !card.hidden);
  photoPage = Math.floor(Math.max(firstVisiblePhoto, 0) / photosPerPage());
  showPhotoPage();
}));
showPhotoPage();

document.querySelectorAll('.photo').forEach(button => button.addEventListener('click', () => {
  const image = button.querySelector('img').cloneNode();
  image.removeAttribute('loading');
  const details = document.createElement('dl');
  details.className = 'photo-metadata';
  const metadata = photoMetadata[button.dataset.file] || {};
  for (const [key, label] of [['camera', 'camera'], ['lens', 'lens'], ['aperture', 'aperture'], ['shutter', 'shutter speed'], ['iso', 'ISO'], ['focalLength', 'focal length']]) {
    if (!metadata[key]) continue;
    const term = document.createElement('dt');
    const value = document.createElement('dd');
    term.textContent = label;
    value.textContent = metadata[key];
    details.append(term, value);
  }
  content.replaceChildren(image, heading(button.dataset.title), paragraph(button.dataset.caption), details);
  openDialog();
}));
document.querySelector('#year').textContent = new Date().getFullYear();

