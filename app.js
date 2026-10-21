const dialog = document.querySelector('dialog');
const content = document.querySelector('#dialog-content');
let previousFocus;
function openDialog() { previousFocus = document.activeElement; dialog.showModal(); }
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => previousFocus?.focus());
function heading(text) { const element = document.createElement('h2'); element.id = 'dialog-title'; element.textContent = text.toLowerCase(); return element; }
function paragraph(text) { const element = document.createElement('p'); element.textContent = text.toLowerCase(); return element; }

function projectJimDetails() {
  const featuresHeading = document.createElement('h3');
  featuresHeading.textContent = 'built for strength training';
  const features = document.createElement('ul');
  features.className = 'project-features';
  [
    'Automatic rep counting for curls, rows, and shoulder presses using Core Motion sampling and an arm-state machine, with more exercises planned.',
    'Manual rep corrections and explicit set completion, with audio and haptic feedback when a workout is complete.',
    'Multi-exercise routines with watch-side advancement and one-tap repeat of the latest workout.',
    'HealthKit workout sessions and a live heart-rate display on Apple Watch.',
    'Locally saved workout history and personal records for each exercise.',
    'A post-workout check-in with conservative recommendations for increasing weight.'
  ].forEach(text => {
    const item = document.createElement('li');
    item.textContent = text.toLowerCase();
    features.append(item);
  });
  return [
    paragraph('A strength-training app built in Swift for a paired iPhone and Apple Watch. It counts reps, guides routines, and tracks progress over time.'),
    paragraph('ProjectJim began as my university capstone project. I revived it when I started training in my company’s weight room. It was a chance to build something I could use in my own workouts and push my development skills further.'),
    featuresHeading,
    features
  ];
}
function grembotScreenshots() {
  const gallery = document.createElement('div');
  gallery.className = 'project-gallery';
  [
    ['card-query', 'start with /card and enter a card number or english name, with an optional rarity.', 'Discord /card query field with guidance for a card number, English name, and optional rarity.', 593, 97],
    ['card-output', 'card details, artwork, and available english market prices in one response.', 'Grembot response showing a Nakiri Ayame card with Japanese rules, card artwork, and USD prices.', 442, 848],
    ['card-variants', 'use dropdowns to switch between matching card numbers and rarities or art variants.', 'Grembot response for Kikirara Vivi with card and rarity selection dropdowns.', 442, 882]
  ].forEach(([file, caption, alt, width, height]) => {
    const figure = document.createElement('figure');
    const link = document.createElement('a');
    link.href = `assets/grembot/${file}.png`;
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', `${alt} Open full-size screenshot in a new tab.`);
    const image = document.createElement('img');
    image.src = link.href;
    image.alt = alt;
    image.width = width;
    image.height = height;
    image.loading = 'lazy';
    const label = document.createElement('figcaption');
    label.textContent = caption;
    link.append(image);
    figure.append(link, label);
    gallery.append(figure);
  });
  return gallery;
}

function grembotDetails() {
  const featuresHeading = document.createElement('h3');
  featuresHeading.textContent = 'card lookups, right in discord';
  const features = document.createElement('ul');
  features.className = 'project-features';
  [
    'Search hololive OFFICIAL CARD GAME cards by card number or English name.',
    'View official Japanese card images and information, with English-only cards supported through the Oshi Card API.',
    'Check USD market and low-listing prices for the matching English printing when available.',
    'Switch between matching card numbers, rarities, and art variants using dropdowns.'
  ].forEach(text => {
    const item = document.createElement('li');
    item.textContent = text.toLowerCase();
    features.append(item);
  });
  const sources = paragraph('The official Japanese catalogue is the preferred source for card details. The official English catalogue resolves English names, while the ');
  const apiLink = document.createElement('a');
  apiLink.href = 'https://github.com/LarveyOfficial/oshicardapi';
  apiLink.textContent = 'oshi card api';
  apiLink.style.textDecoration = 'underline';
  sources.append(apiLink, ' supplies english-only card details and images, plus market prices.');
  return [
    paragraph('A Discord bot that brings hololive OFFICIAL CARD GAME lookups into the conversation.'),
    paragraph('As a gamer who spends plenty of time on Discord, I wanted a bot for my own servers that could help my friends and me find useful information without leaving the chat.'),
    featuresHeading,
    features,
    sources,
    grembotScreenshots(),
    paragraph('Next up: more server administration tools.')
  ];
}

const projectDetails = { projectjim: projectJimDetails, grembot: grembotDetails };

document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const name = button.dataset.project;
  const link = document.createElement('a');
  link.className = 'contact-button';
  link.href = `mailto:jmanaois704@gmail.com?subject=${encodeURIComponent(`Let’s talk about ${name}`)}`;
  link.textContent = 'get in touch ↗';
  const details = projectDetails[name]
    ? projectDetails[name]()
    : [paragraph('The full story is coming soon. Project details, photographs, and links will be added here.')];
  const coverNote = name === 'grembot' ? [] : [paragraph('The cover is a placeholder illustration, not a screenshot of the project.')];
  content.replaceChildren(heading(name), ...details, ...coverNote, link);
  openDialog();
}));
document.querySelectorAll('.photo').forEach(button => button.addEventListener('click', () => {
  const image = button.querySelector('img').cloneNode();
  image.removeAttribute('loading');
  content.replaceChildren(image, heading(button.dataset.title), paragraph('Sample image from Unsplash. Personal photography coming soon.'));
  openDialog();
}));
document.querySelector('#year').textContent = new Date().getFullYear();

