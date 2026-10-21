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
  const sections = [
    ['plan on iphone, start on watch', [
      'Choose an exercise and set your sets, reps, and weight on iPhone, then send the workout to Apple Watch.',
      'Build multi-exercise routines with watch-side advancement, or repeat your latest workout with one tap.'
    ], ['workout-setup', 'watch-ready']],
    ['stay with the set', [
      'Automatic rep counting for curls, rows, and shoulder presses using Core Motion sampling and an arm-state machine, with more exercises planned.',
      'HealthKit workout sessions and a live heart-rate display on Apple Watch.',
      'Manual rep corrections and explicit set completion, with audio and haptic feedback when a workout is complete.',
      'A rest timer between sets, with the option to skip ahead when you are ready.'
    ], ['workout-active', 'rest-timer']],
    ['see your progress', [
      'Locally saved workout history and personal records for each exercise.',
      'A post-workout check-in with conservative recommendations for increasing weight.'
    ], ['workout-history']]
  ].map(([title, items, screenshots]) => {
    const section = document.createElement('section');
    section.className = 'jim-feature-section';
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    const features = document.createElement('ul');
    features.className = 'project-features';
    items.forEach(text => {
      const item = document.createElement('li');
      item.textContent = text.toLowerCase();
      features.append(item);
    });
    section.append(titleElement, features, projectJimScreenshots(screenshots));
    return section;
  });
  return [
    paragraph('A strength-training app built in Swift for a paired iPhone and Apple Watch. It counts reps, guides routines, and tracks progress over time.'),
    paragraph('ProjectJim began as my university capstone project. I revived it when I started training in my company’s weight room. It was a chance to build something I could use in my own workouts and push my development skills further.'),
    ...sections
  ];
}
function projectJimScreenshots(files) {
  const gallery = document.createElement('div');
  gallery.className = 'project-gallery jim-gallery';
  [
    ['workout-setup', 'set the exercise, sets, reps, and weight on iphone, then send the workout to apple watch.', 'ProjectJim iPhone home screen for configuring a bicep curl workout with sets, reps, and weight.', 327, 648],
    ['watch-ready', 'review the workout on apple watch before starting.', 'ProjectJim Apple Watch screen showing a bicep curl workout ready to start.', 173, 187],
    ['workout-active', 'follow live reps, set progress, and heart rate during the workout.', 'ProjectJim Apple Watch screen showing a bicep curl workout in progress with rep count and heart rate.', 241, 247],
    ['rest-timer', 'recover between sets with a clear rest timer and skip control.', 'ProjectJim Apple Watch rest timer between workout sets.', 240, 241],
    ['workout-history', 'review completed workouts and personal records on iphone.', 'ProjectJim iPhone workout history screen showing a personal record and a completed bicep curl workout.', 347, 653]
  ].filter(([file]) => files.includes(file)).forEach(([file, caption, alt, width, height]) => {
    const figure = document.createElement('figure');
    figure.className = file.startsWith('workout-') && file !== 'workout-active' ? 'jim-phone' : 'jim-watch';
    const link = document.createElement('a');
    link.href = `assets/projectjim/${file}.png`;
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

function holowishDetails() {
  const featuresHeading = document.createElement('h3');
  featuresHeading.textContent = 'made for collectors';
  const features = document.createElement('ul');
  features.className = 'project-features';
  [
    'Keep a collection and wishlist, track multiple copies, and record optional purchase prices in Japanese yen.',
    'Search by Japanese or available official English names, card numbers, tags, and sets. Narrow results by rarity, type, color, bloom level, and parallel status.',
    'Track set completion and browse owned, missing, or wishlisted cards for your favorite talent.',
    'Follow your total recorded purchase cost over time with quantity-aware history charts, and look up current Japanese shop listings on Yuyutei from card details.',
    'Personalize an Oshi Hub with talent themes, outfit artwork, and collection progress, with light and dark appearances.',
    'Keep collection data on-device, browse bundled card metadata and downloaded artwork offline, and receive catalogue updates without an app release.'
  ].forEach(text => {
    const item = document.createElement('li');
    item.textContent = text.toLowerCase();
    features.append(item);
  });
  return [
    paragraph('An iOS app built in Swift for tracking a hololive OFFICIAL CARD GAME collection and planning what to collect next, with a focus on Japanese cards.'),
    paragraph('I had trouble finding a collection and wishlist tracker that fit the way I collect, especially for Japanese cards. Holowish grew out of wanting that tool for myself.'),
    featuresHeading,
    features,
    paragraph('Built for iPhone and iPad with SwiftUI, SwiftData, and Swift Charts. A custom catalogue importer brings together official Japanese card data and available English names.')
  ];
}

const projectDetails = { projectjim: projectJimDetails, grembot: grembotDetails, holowish: holowishDetails };

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

const photoGrid = document.querySelector('.photo-grid');
const photoCards = [];
photographs.forEach(([file, title, category, alt], index) => {
  const button = document.createElement('button');
  button.className = `photo${file === 'dscf0962' ? ' photo--portrait' : ''}`;
  button.dataset.title = title;
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

function photosPerPage() {
  if (mobilePhotos.matches) return 1;
  if (tabletPhotos.matches) return 2;
  return 3;
}

function showPhotoPage() {
  const pageSize = photosPerPage();
  const pageCount = Math.ceil(photoCards.length / pageSize);
  photoPage = Math.min(photoPage, pageCount - 1);
  const firstPhoto = photoPage * pageSize;
  const lastPhoto = Math.min(firstPhoto + pageSize, photoCards.length);

  photoCards.forEach((card, index) => { card.hidden = index < firstPhoto || index >= lastPhoto; });
  previousPhotos.disabled = photoTransitioning || photoPage === 0;
  nextPhotos.disabled = photoTransitioning || photoPage === pageCount - 1;
  photoPosition.textContent = `${firstPhoto + 1}–${lastPhoto} of ${photoCards.length}`;
}

function changePhotoPage(direction) {
  if (reducedMotion.matches) {
    photoPage += direction;
    showPhotoPage();
    return;
  }

  photoTransitioning = true;
  const directionName = direction > 0 ? 'next' : 'previous';
  const leavingClass = `is-leaving-${directionName}`;
  const enteringClass = `is-entering-${directionName}`;
  photoGrid.setAttribute('aria-busy', 'true');
  photoGrid.classList.add(leavingClass);
  showPhotoPage();
  window.setTimeout(() => {
    photoPage += direction;
    showPhotoPage();
    photoGrid.classList.remove(leavingClass);
    photoGrid.classList.add(enteringClass);
    window.setTimeout(() => {
      photoGrid.classList.remove(enteringClass);
      photoGrid.removeAttribute('aria-busy');
      photoTransitioning = false;
      showPhotoPage();
    }, 260);
  }, 160);
}

previousPhotos.addEventListener('click', () => changePhotoPage(-1));
nextPhotos.addEventListener('click', () => changePhotoPage(1));
[tabletPhotos, mobilePhotos].forEach(query => query.addEventListener('change', () => {
  const firstVisiblePhoto = photoCards.findIndex(card => !card.hidden);
  photoPage = Math.floor(Math.max(firstVisiblePhoto, 0) / photosPerPage());
  showPhotoPage();
}));
showPhotoPage();

document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const name = button.dataset.project;
  const link = document.createElement('a');
  link.className = 'contact-button';
  link.href = `mailto:jmanaois704@gmail.com?subject=${encodeURIComponent(`Let’s talk about ${name}`)}`;
  link.textContent = 'get in touch ↗';
  const details = projectDetails[name]
    ? projectDetails[name]()
    : [paragraph('The full story is coming soon. Project details, photographs, and links will be added here.')];
  const coverNote = name === 'holowish' ? [paragraph('The cover is a placeholder illustration, not a screenshot of the project.')] : [];
  content.replaceChildren(heading(name), ...details, ...coverNote, link);
  openDialog();
}));
document.querySelectorAll('.photo').forEach(button => button.addEventListener('click', () => {
  const image = button.querySelector('img').cloneNode();
  image.removeAttribute('loading');
  content.replaceChildren(image, heading(button.dataset.title), paragraph(button.dataset.caption));
  openDialog();
}));
document.querySelector('#year').textContent = new Date().getFullYear();

