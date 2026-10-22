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

const photographs = [
  ['dscf0195', 'double take', 'everyday', 'Two white and orange cats resting together in a patch of sunlight.'],
  ['dscf0248', 'passing through', 'travel', 'A person walking through a bright park lined with flowering trees.'],
  ['dscf0301', 'afternoon pause', 'travel', 'A person seated on a bench beneath spreading trees in a quiet garden.'],
  ['dscf0434', 'the threshold', 'travel', 'A narrow wooded path leading toward a vivid red shrine gate.'],
  ['dscf0450', 'lakeside', 'landscape', 'Visitors sitting on a bench beside a blue lake framed by mountains.'],
  ['dscf0460', 'edge of town', 'street', 'Two people standing at a coastal intersection facing the open sea.'],
  ['dscf0474', 'coastal route', 'street', 'A bus traveling along a seaside road with an island on the horizon.'],
  ['dscf0478', 'next train', 'street', 'A coastal railway crossing with a green train passing beside the ocean.'],
  ['dscf0520', 'waterline', 'landscape', 'A lone figure standing on dark rocks as waves break along the coast.'],
  ['dscf0597', 'the overlook', 'travel', 'A person looking across green hills from a vermilion bridge.'],
  ['dscf0599', 'picture perfect', 'travel', 'Visitors crossing a curved red bridge surrounded by spring greenery.'],
  ['dscf0730', 'uphill', 'travel', 'Stone steps climbing toward a traditional building in the hills.'],
  ['dscf0790', 'field notes', 'landscape', 'A person standing in a golden field beneath a green mountainside.'],
  ['dscf0860', 'low tide', 'landscape', 'Two small figures walking along a quiet gray shoreline.'],
  ['dscf0962', 'vermilion lines', 'architecture', 'A person walking through a long corridor of vermilion shrine columns.'],
  ['dscf1068', 'through the gates', 'travel', 'A visitor walking beneath a dense passage of red torii gates.'],
  ['dscf1400', 'small inscription', 'details', 'A slim framed inscription resting in a beam of warm light.'],
  ['dscf1462', 'blue type', 'workspace', 'Close view of blue and white mechanical keyboard keys.'],
  ['dscf1747', 'soft setup', 'workspace', 'A bright desktop with flowers, keyboards, and an illustrated desk mat.'],
  ['dscf1763', 'within reach', 'workspace', 'A keyboard, framed inscription, and small desk objects arranged in soft light.'],
  ['dscf1782', 'side by side', 'workspace', 'Two mechanical keyboards displayed together across an illustrated desktop.'],
  ['dscf1835', 'after dark', 'workspace', 'A compact black and white keyboard lit against a dark textured surface.'],
  ['dscf1839', 'framed', 'details', 'A reflective keyboard case mirroring trees and open sky.'],
  ['dscf1845', 'reflected', 'details', 'A pale mechanical keyboard paired with an illustrated character keychain.'],
  ['dscf1881', 'snowfall', 'details', 'A keyboard with red accents beside illustrated collectible cards.'],
  ['dscf1903', 'ojou', 'workspace', 'A red and white mechanical keyboard arranged on a pink desk mat.'],
  ['dscf1916', 'ishtar', 'details', 'A softly focused desktop scene with a small figure beyond the keyboard.'],
  ['dscf2009', 'floral drink', 'workspace', 'A wide multi-monitor desk setup with keyboards and collected figures.'],
  ['dscf2114', 'maid cafe', 'workspace', 'An angled view across a personal computer and mechanical keyboard setup.'],
  ['dscf2122', 'the archive', 'workspace', 'A desk with multiple displays, headphones, and a red-accent keyboard.'],
  ['dscf2136', 'tea time', 'workspace', 'A framed inscription and keyboard set against a warm illustrated desk mat.'],
  ['dscf2145', 'outreach', 'workspace', 'A dual-monitor setup showing bright blue skies above a decorated desk.'],
  ['dscf2147', 'glow', 'workspace', 'A keyboard and collected figures beneath the glow of two monitors.'],
  ['dscf2152', 'wide angle', 'workspace', 'A broad view of a multi-monitor desk and its carefully arranged accessories.'],
  ['dscf2164', 'daily driver', 'workspace', 'A cream mechanical keyboard centered in a bright personal workspace.']
];

const photoMetadata = {
  "dscf0195": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/2.8",
    "shutter": "1/200 sec",
    "iso": "400",
    "focalLength": "23 mm"
  },
  "dscf0248": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/16",
    "shutter": "1/180 sec",
    "iso": "2500",
    "focalLength": "23 mm"
  },
  "dscf0301": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/14",
    "shutter": "1/180 sec",
    "iso": "640",
    "focalLength": "23 mm"
  },
  "dscf0434": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/2.8",
    "shutter": "1/1000 sec",
    "iso": "10000",
    "focalLength": "23 mm"
  },
  "dscf0450": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/2.8",
    "shutter": "1/1000 sec",
    "iso": "125",
    "focalLength": "23 mm"
  },
  "dscf0460": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/5",
    "shutter": "1/1000 sec",
    "iso": "250",
    "focalLength": "23 mm"
  },
  "dscf0474": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/3.6",
    "shutter": "1/1000 sec",
    "iso": "125",
    "focalLength": "23 mm"
  },
  "dscf0478": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/3.6",
    "shutter": "1/1000 sec",
    "iso": "125",
    "focalLength": "23 mm"
  },
  "dscf0520": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/2.8",
    "shutter": "1/1000 sec",
    "iso": "80",
    "focalLength": "23 mm"
  },
  "dscf0597": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/5.6",
    "shutter": "1/340 sec",
    "iso": "250",
    "focalLength": "23 mm"
  },
  "dscf0599": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/5.6",
    "shutter": "1/320 sec",
    "iso": "250",
    "focalLength": "23 mm"
  },
  "dscf0730": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/5.6",
    "shutter": "1/210 sec",
    "iso": "250",
    "focalLength": "23 mm"
  },
  "dscf0790": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/5.6",
    "shutter": "1/500 sec",
    "iso": "250",
    "focalLength": "23 mm"
  },
  "dscf0860": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/7.1",
    "shutter": "1/1800 sec",
    "iso": "800",
    "focalLength": "23 mm"
  },
  "dscf0962": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/5.6",
    "shutter": "1/500 sec",
    "iso": "400",
    "focalLength": "23 mm"
  },
  "dscf1068": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/2.8",
    "shutter": "1/30 sec",
    "iso": "1600",
    "focalLength": "23 mm"
  },
  "dscf1400": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/2.8",
    "shutter": "1/250 sec",
    "iso": "500",
    "focalLength": "23 mm"
  },
  "dscf1462": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/2.8",
    "shutter": "1/250 sec",
    "iso": "320",
    "focalLength": "23 mm"
  },
  "dscf1747": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/4",
    "shutter": "1/125 sec",
    "iso": "320",
    "focalLength": "23 mm"
  },
  "dscf1763": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "TTARTISAN 35mm F1.8 X",
    "aperture": "f/2",
    "shutter": "1/80 sec",
    "iso": "200",
    "focalLength": "35 mm"
  },
  "dscf1782": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "TTARTISAN 35mm F1.8 X",
    "aperture": "f/2.2",
    "shutter": "1/120 sec",
    "iso": "320",
    "focalLength": "35 mm"
  },
  "dscf1835": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "TTARTISAN 35mm F1.8 X",
    "aperture": "f/2",
    "shutter": "1/105 sec",
    "iso": "320",
    "focalLength": "35 mm"
  },
  "dscf1839": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "TTARTISAN 35mm F1.8 X",
    "aperture": "f/5",
    "shutter": "1/680 sec",
    "iso": "200",
    "focalLength": "35 mm"
  },
  "dscf1845": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "TTARTISAN 35mm F1.8 X",
    "aperture": "f/1.8",
    "shutter": "1/60 sec",
    "iso": "200",
    "focalLength": "35 mm"
  },
  "dscf1881": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/4",
    "shutter": "1/120 sec",
    "iso": "320",
    "focalLength": "23 mm"
  },
  "dscf1903": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/3.2",
    "shutter": "1/100 sec",
    "iso": "400",
    "focalLength": "23 mm"
  },
  "dscf1916": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF23mmF2.8 R WR",
    "aperture": "f/3.2",
    "shutter": "1/75 sec",
    "iso": "200",
    "focalLength": "23 mm"
  },
  "dscf2009": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF33mmF1.4 R LM WR",
    "aperture": "f/1.4",
    "shutter": "1/60 sec",
    "iso": "200",
    "focalLength": "33 mm"
  },
  "dscf2114": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF33mmF1.4 R LM WR",
    "aperture": "f/1.4",
    "shutter": "1/60 sec",
    "iso": "2500",
    "focalLength": "33 mm"
  },
  "dscf2122": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF33mmF1.4 R LM WR",
    "aperture": "f/1.4",
    "shutter": "1/60 sec",
    "iso": "3200",
    "focalLength": "33 mm"
  },
  "dscf2136": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF33mmF1.4 R LM WR",
    "aperture": "f/1.4",
    "shutter": "1/60 sec",
    "iso": "2500",
    "focalLength": "33 mm"
  },
  "dscf2145": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF33mmF1.4 R LM WR",
    "aperture": "f/1.4",
    "shutter": "1/60 sec",
    "iso": "4000",
    "focalLength": "33 mm"
  },
  "dscf2147": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF33mmF1.4 R LM WR",
    "aperture": "f/1.4",
    "shutter": "1/60 sec",
    "iso": "1600",
    "focalLength": "33 mm"
  },
  "dscf2152": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF33mmF1.4 R LM WR",
    "aperture": "f/1.4",
    "shutter": "1/60 sec",
    "iso": "3200",
    "focalLength": "33 mm"
  },
  "dscf2164": {
    "camera": "FUJIFILM X-T30 III",
    "lens": "XF33mmF1.4 R LM WR",
    "aperture": "f/1.4",
    "shutter": "1/60 sec",
    "iso": "2500",
    "focalLength": "33 mm"
  }
};

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
let galleryView = false;
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

const galleryToggle = document.createElement('button');
galleryToggle.className = 'gallery-toggle';
galleryToggle.type = 'button';
galleryToggle.textContent = 'view all photographs';
galleryToggle.setAttribute('aria-pressed', 'false');
galleryToggle.addEventListener('click', () => {
  if (photoTransitioning) return;
  galleryView = !galleryView;
  galleryToggle.textContent = galleryView ? 'back to slideshow' : 'view all photographs';
  galleryToggle.setAttribute('aria-pressed', String(galleryView));
  showPhotoPage();
});
collectionControls.append(galleryToggle);

// Keep vertical scrolling native; only a deliberate horizontal drag changes photos.
let swipeStart;
let suppressPhotoClick = false;
photoViewport.addEventListener('pointerdown', event => {
  if (galleryView || !event.isPrimary || event.button !== 0) return;
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

  const visibleCards = new Set(galleryView ? cards : cards.slice(firstPhoto, lastPhoto));
  photoGrid.classList.toggle("photo-grid--all", galleryView);
  previousPhotos.hidden = galleryView;
  nextPhotos.hidden = galleryView;
  galleryToggle.disabled = photoTransitioning;
  photoCards.forEach(card => { card.hidden = !visibleCards.has(card); });
  collectionButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.collection === activeCollection));
    button.disabled = photoTransitioning;
  });
  previousPhotos.disabled = photoTransitioning || photoPage === 0;
  nextPhotos.disabled = photoTransitioning || photoPage === pageCount - 1;
  photoPosition.textContent = galleryView ? `${cards.length} photographs · ${activeCollection}` : mobilePhotos.matches
    ? `${firstPhoto + 1} / ${cards.length}`
    : `${firstPhoto + 1}–${lastPhoto} of ${cards.length} · ${activeCollection}`;
}

function changePhotoPage(direction) {
  if (photoTransitioning || galleryView) return;
  const targetPage = photoPage + direction;
  if (targetPage < 0 || targetPage >= Math.ceil(collectionPhotos().length / photosPerPage())) return;
  return transitionPhotos(targetPage, activeCollection, direction);
}

async function transitionPhotos(targetPage, targetCollection, direction) {
  if (photoTransitioning) return;
  if (reducedMotion.matches || galleryView) {
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

