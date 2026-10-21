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
  content.replaceChildren(image, heading(button.dataset.title), paragraph('Sample image from Unsplash. Personal photography coming soon.'));
  openDialog();
}));
document.querySelector('#year').textContent = new Date().getFullYear();

