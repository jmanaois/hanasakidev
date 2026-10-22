function paragraph(text) { const p = document.createElement('p'); p.textContent = text.toLowerCase(); return p; }
function subheading(text) { const h = document.createElement('h2'); h.textContent = text.toLowerCase(); return h; }

function caseStudyFeatures(sections, mediaFactory) {
  const features = document.createElement('ol');
  features.className = 'case-study-features';
  sections.forEach(([title, details, media], index) => {
    const item = document.createElement('li');
    item.className = 'case-study-feature';
    const number = document.createElement('span');
    number.className = 'case-study-feature-number';
    number.textContent = String(index + 1).padStart(2, '0');
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    item.append(number, titleElement);
    if (Array.isArray(details)) {
      const points = document.createElement('ul');
      points.className = 'case-study-points';
      details.forEach(text => {
        const point = document.createElement('li');
        point.textContent = text.toLowerCase();
        points.append(point);
      });
      item.append(points);
    } else {
      const copy = paragraph(details);
      copy.className = 'case-study-feature-copy';
      item.append(copy);
    }
    if (media.length) item.append(mediaFactory(media));
    features.append(item);
  });
  return features;
}

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
  ];
  return [
    paragraph('A strength-training app built in Swift for a paired iPhone and Apple Watch. It counts reps, guides routines, and tracks progress over time.'),
    paragraph('ProjectJim began as my university capstone project. I revived it when I started training in my company’s weight room. It was a chance to build something I could use in my own workouts and push my development skills further.'),
    subheading('built for the workout'),
    caseStudyFeatures(sections, projectJimScreenshots)
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
    link.href = `/assets/projectjim/${file}.png`;
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
function grembotScreenshots(files) {
  const gallery = document.createElement('div');
  gallery.className = 'project-gallery grembot-gallery';
  [
    ['card-query', 'start with /card and enter a card number or english name, with an optional rarity.', 'Discord /card query field with guidance for a card number, English name, and optional rarity.', 593, 97],
    ['card-output', 'card details, artwork, and available english market prices in one response.', 'Grembot response showing a Nakiri Ayame card with Japanese rules, card artwork, and USD prices.', 442, 848],
    ['card-variants', 'use dropdowns to switch between matching card numbers and rarities or art variants.', 'Grembot response for Kikirara Vivi with card and rarity selection dropdowns.', 442, 882]
  ].filter(([file]) => files.includes(file)).forEach(([file, caption, alt, width, height]) => {
    const figure = document.createElement('figure');
    figure.className = file === 'card-query' ? 'grem-query' : 'grem-response';
    const link = document.createElement('a');
    link.href = `/assets/grembot/${file}.png`;
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
  const sections = [
    ['find the right card', ['Search by card number or available official English name.', 'Add an optional rarity when you already know the printing you want.'], ['card-query']],
    ['details in one response', ['View official Japanese card artwork and information without leaving Discord.', 'Check USD market and low-listing prices for matching English printings when available.'], ['card-output']],
    ['move between variants', ['Switch between matching card numbers, rarities, and art variants using dropdowns.'], ['card-variants']]
  ];
  const sources = paragraph('The official Japanese catalogue is the preferred source for card details. The official English catalogue resolves English names, while the ');
  const apiLink = document.createElement('a');
  apiLink.href = 'https://github.com/LarveyOfficial/oshicardapi';
  apiLink.textContent = 'oshi card api';
  apiLink.className = 'text-link';
  sources.append(apiLink, ' supplies english-only card details and images, plus market prices.');
  return [
    paragraph('A Discord bot that brings hololive OFFICIAL CARD GAME lookups into the conversation.'),
    paragraph('As a gamer who spends plenty of time on Discord, I wanted a bot for my own servers that could help my friends and me find useful information without leaving the chat.'),
    subheading('card lookups, right in discord'),
    caseStudyFeatures(sections, grembotScreenshots),
    sources,
    paragraph('Next up: more server administration tools.')
  ];
}

function holowishDetails() {
  const sections = [
    ['collection and wishlist', 'Track multiple copies and optional purchase prices in Japanese yen, whether a card is owned or still on your wishlist.', ['add-to-x.gif', 'wishlist.webp', 'collection.webp']],
    ['fast catalogue search', 'Search by Japanese or available official English names, card numbers, tags, and sets, then narrow results by card attributes.', ['card-filter.gif']],
    ['completion at a glance', 'Track set completion and browse owned, missing, or wishlisted cards for your favorite talent.', []],
    ['purchase history', 'Follow quantity-aware purchase totals over time and look up current Japanese shop listings on Yuyutei from card details.', ['collection-value.webp']],
    ['your oshi hub', 'Personalize talent themes, outfit artwork, collection progress, and light or dark appearances.', ['change-outfit.gif', 'change-theme.gif']],
    ['offline by design', 'Keep collection data on-device, browse downloaded artwork and bundled metadata offline, and receive catalogue updates without an app release.', []]
  ];
  return [
    paragraph('An iOS app built in Swift for tracking a hololive OFFICIAL CARD GAME collection and planning what to collect next, with a focus on Japanese cards.'),
    paragraph('I had trouble finding a collection and wishlist tracker that fit the way I collect, especially for Japanese cards. Holowish grew out of wanting that tool for myself.'),
    subheading('made for collectors'),
    caseStudyFeatures(sections, holowishDemos),
    paragraph('Built for iPhone and iPad with SwiftUI, SwiftData, and Swift Charts. A custom catalogue importer brings together official Japanese card data and available English names.')
  ];
}

function holowishDemos(files) {
  const gallery = document.createElement('div');
  gallery.className = 'project-gallery holowish-gallery';
  [
    ['add-to-x.gif', 'add a card', 'Holowish app demo adding a card to a collection or wishlist.'],
    ['card-filter.gif', 'filter cards', 'Holowish app demo filtering cards in the catalogue.'],
    ['change-outfit.gif', 'choose an outfit', 'Holowish app demo changing the featured talent outfit.'],
    ['change-theme.gif', 'switch themes', 'Holowish app demo changing the Oshi Hub theme.'],
    ['collection-value.webp', 'value history', 'Holowish home screen showing collection purchase value history and the most valuable cards.', 255, 519],
    ['wishlist.webp', 'wishlist', 'Holowish wishlist showing a grid of saved cards.', 246, 500],
    ['collection.webp', 'collection', 'Holowish collection showing value history and a grid of owned cards.', 247, 502]
  ].filter(([file]) => files.includes(file)).forEach(([file, caption, alt, width = 300, height = 652]) => {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = `/assets/holowish/${file}`;
    image.alt = alt;
    image.width = width;
    image.height = height;
    image.loading = 'lazy';
    const label = document.createElement('figcaption');
    label.textContent = caption;
    figure.append(image, label);
    gallery.append(figure);
  });
  return gallery;
}

const projectDetails = { projectjim: projectJimDetails, grembot: grembotDetails, holowish: holowishDetails };


export { projectDetails };
