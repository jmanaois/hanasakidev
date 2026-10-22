import { photographs, photoMetadata } from './photo-data.js';

const grid = document.querySelector('#gallery-grid');
const filters = document.querySelector('#gallery-filters');
const count = document.querySelector('#gallery-count');
const dialog = document.querySelector('dialog');
const content = document.querySelector('#dialog-content');
let previousFocus;

for (const [index, [file, title, category, alt]] of photographs.entries()) {
  const collection = ['workspace', 'details'].includes(category) ? 'workspace' : 'travel';
  const button = document.createElement('button');
  button.className = 'photo';
  button.type = 'button';
  button.dataset.collection = collection;
  button.setAttribute('aria-label', `enlarge photograph: ${title}`);
  const image = document.createElement('img');
  image.src = `/assets/photography/${file}.webp`;
  image.alt = alt;
  image.width = file === 'dscf0962' ? 1200 : 1800;
  image.height = file === 'dscf0962' ? 1800 : 1200;
  image.loading = index < 6 ? 'eager' : 'lazy';
  const caption = document.createElement('span');
  caption.append(document.createElement('span'), document.createElement('span'));
  caption.children[0].textContent = title;
  caption.children[1].textContent = `${String(index + 1).padStart(2, '0')} / ${category}`;
  button.append(image, caption);
  button.addEventListener('click', () => {
    previousFocus = button;
    const fullImage = image.cloneNode();
    fullImage.removeAttribute('loading');
    const heading = document.createElement('h2');
    heading.id = 'dialog-title';
    heading.textContent = title;
    const label = document.createElement('p');
    label.textContent = caption.children[1].textContent;
    const metadata = document.createElement('dl');
    metadata.className = 'photo-metadata';
    for (const [key, term] of [['camera', 'camera'], ['lens', 'lens'], ['aperture', 'aperture'], ['shutter', 'shutter speed'], ['iso', 'iso'], ['focalLength', 'focal length']]) {
      const value = photoMetadata[file]?.[key];
      if (!value) continue;
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = term;
      dd.textContent = value;
      metadata.append(dt, dd);
    }
    content.replaceChildren(fullImage, heading, label, metadata);
    dialog.showModal();
    dialog.scrollTop = 0;
  });
  grid.append(button);
}

let activeCollection = 'all';
for (const collection of ['all', 'travel', 'workspace']) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = `${collection} (${[...grid.children].filter(card => collection === 'all' || card.dataset.collection === collection).length})`;
  button.dataset.collection = collection;
  button.addEventListener('click', () => {
    if (activeCollection === collection) return;
    activeCollection = collection;
    renderCollection();
  });
  filters.append(button);
}
function renderCollection() {
  let visible = 0;
  for (const card of grid.children) {
    card.hidden = activeCollection !== 'all' && card.dataset.collection !== activeCollection;
    if (!card.hidden) visible++;
  }
  for (const button of filters.children) button.setAttribute('aria-pressed', String(button.dataset.collection === activeCollection));
  count.textContent = `${visible} photographs · ${activeCollection}`;
}
renderCollection();

document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => previousFocus?.focus());
document.querySelector('#year').textContent = new Date().getFullYear();
