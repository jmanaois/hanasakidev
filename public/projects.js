function paragraph(text) { const p = document.createElement('p'); p.textContent = text.toLowerCase(); return p; }
function subheading(text) { const h = document.createElement('h2'); h.textContent = text.toLowerCase(); return h; }

function caseStudyFeatures(sections, mediaFactory, start = 1) {
  const features = document.createElement('ol');
  features.className = 'case-study-features';
  if (start !== 1) features.start = start;
  sections.forEach(([title, details, media], index) => {
    const item = document.createElement('li');
    item.className = 'case-study-feature';
    const number = document.createElement('span');
    number.className = 'case-study-feature-number';
    number.textContent = String(start + index).padStart(2, '0');
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
    ['card-variants', 'use dropdowns to switch between matching card numbers and rarities or art variants.', 'Grembot response for Kikirara Vivi with card and rarity selection dropdowns.', 442, 882],
    ['random-card-query', 'use /randomcard on its own, or narrow the pull by rarity and color.', 'Discord /randomcard command with the rarity set to SEC and the color set to Blue.', 815, 108],
    ['card-mention', 'mention a card in double brackets and grembot replies with it.', 'A Discord message asking about [[shiori ur]] and the Grembot reply showing the Shiori Novella UR card with prices.', 797, 878],
    ['daily-card', 'the card of the day, with the same details as any other lookup.', 'Grembot card of the day for 2026-10-22 showing Koseki Bijou with Japanese rules, artwork, and USD prices.', 737, 786],
    ['open-pack-query', 'start typing to pick any japanese booster or extra booster set.', 'Discord /openpack command with a list of booster sets from Blooming Radiance (hBP01) to Summer Hologram (hEB01).', 806, 513],
    ['open-pack', 'every card in the pack, with artwork for all eight and the best pull called out.', 'Grembot pack opening for Bouncer Bound (hBP08) listing eight cards by rarity with a grid of their artwork, and the Mizumiya Su SR shown as the best pull.', 605, 648],
    ['collection', 'packs opened, set completion, and the rarest cards pulled.', 'Grembot collection summary showing packs opened, cards pulled, set completion, and the rarest cards.', 534, 462],
    ['binder', 'flip through a set 20 cards at a time, with collected cards checked off.', 'Grembot binder for Bouncer Bound (hBP08) showing 16 of 182 cards collected, a checklist of cards, and page and filter buttons.', 573, 631],
    ['leaderboard', 'see who leads the server.', 'Grembot leaderboard showing the most unique cards in the server, with hanasaki first at 40 unique cards.', 400, 162]
  ].filter(([file]) => files.includes(file)).forEach(([file, caption, alt, width, height]) => {
    const figure = document.createElement('figure');
    figure.className = ['open-pack-query', 'open-pack', 'binder'].includes(file) ? 'grem-wide' : file.endsWith('query') ? 'grem-query' : 'grem-response';
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
  const lookupSections = [
    ['find the right card', ['Search by card number or available official English name.', 'Add an optional rarity when you already know the printing you want.'], ['card-query']],
    ['details in one response', ['View official Japanese card artwork and information without leaving Discord.', 'Check USD market and low-listing prices for matching English printings when available.'], ['card-output']],
    ['move between variants', ['Switch between matching card numbers, rarities, and art variants using dropdowns.'], ['card-variants']],
    ['pull a random card', ['Use /randomcard to pull a random card, with optional rarity and color filters.', 'See the Japanese version when one exists, otherwise the English one, with the same artwork dropdown as /card.'], ['random-card-query']],
    ['look up cards mid-conversation', ['Write a card in double brackets, like [[ayame sec]], in any message and grembot replies with it.', 'Look up to three cards in a single message.'], ['card-mention']],
    ['card of the day', ['Use /dailycard to see the day’s card. Everyone gets the same card for a given UTC date.', 'Optionally post it automatically to a chosen channel at a set hour.', 'Before posting, grembot checks the channel’s recent messages, so a restart never posts the same day twice.'], ['daily-card']]
  ];
  const packSections = [
    ['open booster packs', ['Use /openpack to open an 8-card booster pack, see artwork for every card pulled, and save them to your collection.', 'Pick a set by its English or Japanese name. Packs come from the Japanese catalogue, so every Japanese booster and extra booster is available, including sets not yet released in English.', 'Members with Manage Server can use /packcooldown to set how long people wait between packs. It is off by default.'], ['open-pack-query', 'open-pack']],
    ['track your collection', ['Use /collection to see packs opened, unique cards, completion for each set, and the rarest cards pulled, for yourself or another member.'], ['collection']],
    ['flip through a binder', ['Use /binder to page through every card in a set, 20 at a time, with collected cards and copy counts marked.', 'Switch pages and toggle between all, owned, and missing cards using buttons.', 'Leave out the set to open the one with the most cards collected, or choose another member to browse theirs.'], ['binder']],
    ['server leaderboards', ['Use /leaderboard to rank the server by unique cards, packs opened, or UR, OUR, and SEC pulls.', 'See your own rank even when you are outside the top ten.'], ['leaderboard']]
  ];
  const sources = paragraph('The official Japanese catalogue is the preferred source for card details. The official English catalogue resolves English names, while the ');
  const apiLink = document.createElement('a');
  apiLink.href = 'https://github.com/LarveyOfficial/oshicardapi';
  apiLink.textContent = 'oshi card api';
  apiLink.className = 'text-link';
  sources.append(apiLink, ' supplies english-only card details and images, plus market prices.');
  return [
    paragraph('A Discord bot that brings hololive OFFICIAL CARD GAME lookups, booster packs, and collections into the conversation.'),
    paragraph('As a gamer who spends plenty of time on Discord, I wanted a bot for my own servers that could help my friends and me find useful information without leaving the chat.'),
    subheading('card lookups, right in discord'),
    caseStudyFeatures(lookupSections, grembotScreenshots),
    subheading('packs and collections'),
    caseStudyFeatures(packSections, grembotScreenshots, lookupSections.length + 1),
    sources
  ];
}

function holowishDetails() {
  const sections = [
    ['collection and wishlist', 'Track multiple copies and optional purchase prices in Japanese yen, whether a card is owned or still on your wishlist.', ['add-to-x.gif', 'wishlist.webp', 'collection.webp']],
    ['fast catalogue search', 'Search by Japanese or available official English names, card numbers, tags, and sets, then narrow results by card attributes.', ['card-filter.gif']],
    ['completion at a glance', 'Track set completion and browse owned, missing, or wishlisted cards for your favorite talent.', ['set-completion.webp']],
    ['purchase history', 'Follow quantity-aware purchase totals over time and look up current Japanese shop listings on Yuyutei from card details.', ['collection-value.webp', 'yuyutei-listing.webp']],
    ['your oshi hub', 'Personalize talent themes, outfit artwork, collection progress, and light or dark appearances.', ['change-outfit.gif', 'change-theme.gif']],
    ['offline by design', 'Keep collection data on-device, browse downloaded artwork and bundled metadata offline, and receive catalogue updates without an app release.', ['offline-artwork.webp']]
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
    ['collection.webp', 'collection', 'Holowish collection showing value history and a grid of owned cards.', 247, 502],
    ['set-completion.webp', 'set completion', 'Holowish set browser showing completion progress for each booster set.'],
    ['yuyutei-listing.webp', 'shop listings', 'Holowish card details showing a current Yuyutei shop listing and price in yen.'],
    ['offline-artwork.webp', 'offline artwork', 'Holowish settings showing catalogue sync status and downloaded artwork for offline use.']
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

function kotoDetails() {
  const chatSections = [
    ['chat like you text a friend', [
      'こと replies in casual Japanese, usually a few short sentences, and keeps the conversation going with a question.',
      'Grammar and vocabulary stay around JLPT N4 to N3, with at most one or two new casual words per reply, shown as chips under the message.',
      'Furigana appear over kanji automatically, using the everyday reading checked against the dictionary, and chat history is saved on device.'
    ], ['chat']],
    ['pick who you are talking to', [
      'Tap the chat title to switch between a close friend, a senpai at work, a group chat, or Discord- and X-style internet slang.',
      'Each mode has its own persona and conversation, and its own idea of the right politeness: with a senpai, too-casual タメ口 gets flagged instead.',
      'In the group chat, ゆい, たくみ, and はるか each reply in their own bubbles.'
    ], ['conversation-modes', 'mode-menu', 'group-chat']],
    ['from textbook to real life', [
      'In ドリル mode, こと先生 gives one polite, Genki-style textbook sentence at a time, and you rewrite it the way you would text a friend.',
      'Each reply comes with a verdict, a natural casual version, a short note on the key change, and the next sentence, built from your due words and weak spots.'
    ], ['drill-mode']],
    ['corrections without the nitpicking', [
      'Each message you send is checked for grammar, naturalness, and register, with up to three fixes, most important first.',
      'Open a fix to see what you wrote, a natural casual rewrite, and a short explanation in English.',
      'Choose how strict corrections are: gentle for only real mistakes, balanced, or strict, which flags every stray です and ます with a friend.',
      'Every correction is tagged with its grammar point and logged in a mistakes list, most frequent first, and こと looks for chances to practice your weak spots.'
    ], ['grammar-correction', 'settings']],
    ['grammar in every reply', [
      'こと can point out one grammar pattern per reply, like 〜ちゃう or 〜じゃん, shown as a purple chip under the message.',
      'Open it for the meaning, the textbook form it comes from, notes, and examples, then add it to my grammar.'
    ], ['grammar-chip-save', 'grammar-chip']],
    ['tap or highlight any word', [
      'Tap a word, or hold and drag across a phrase to highlight it, and look it up in a bundled JMdict dictionary.',
      'Listen to or copy the highlighted text, and add the word to my words along with the sentence it came from.'
    ], ['highlight-translate-breakdown', 'highlight-lookup']],
    ['translate and see the structure', [
      'Tap Translate under any of こと’s messages for an English translation.',
      'The structure view splits the sentence into color-coded parts, like topic, object, verb, and ending, with a legend.',
      'A phrase-by-phrase breakdown explains each piece, from conjugations to the tone a casual ending adds.'
    ], ['translation-structure', 'breakdown']],
    ['hear it out loud', [
      'Tap the speaker under any of こと’s messages, on word lookups, or on flashcards, using the iPhone’s built-in Japanese voice. It is free and works offline.',
      'Words are read from their kana, so the voice never picks the wrong kanji reading, and slower speech is on by default.'
    ], ['furigana-and-pronunciation', 'message-speaking']]
  ];
  const reviewSections = [
    ['words and grammar decks', [
      'My words has tabs for words, grammar, and mistakes, each showing when it is next due.',
      'Reviews are scheduled with the FSRS spaced-repetition algorithm, tuned for 95% retention.',
      'The back of each word card shows the chat sentence it was saved from, with the word highlighted, even when conjugated.',
      'こと works due words and grammar into the conversation, and using one correctly in a reply counts as a review.'
    ], ['grammar-deck-and-review', 'grammar-deck', 'grammar-review-card']],
    ['furigana that fades out', [
      'Once you know a word well, about four or five good reviews in a row, its reading disappears in chat, translations, and flashcards, conjugated forms included.',
      'You gradually practice reading kanji on your own, and furigana can be turned off entirely in settings.'
    ], ['furigana-off']]
  ];
  const learnSections = [
    ['a course in textbook order', [
      'A separate Learn tab covers 106 lessons in 17 units, starting with N5 grammar in Genki order from は and です through the て-form.',
      'Each lesson starts with an explainer card and example sentences, then exercises: fill in the blank, build the sentence from tiles, and type the Japanese.',
      'Built sentences show their color-coded structure. Typed answers in kanji or kana are checked on device when they match, and by こと when they do not.'
    ], ['learn-daily-lesson', 'lesson-detail', 'fill-blank', 'build-sentence', 'typed-answer']],
    ['conjugate any verb', [
      'A verb conjugation unit covers the ない and た forms, potential, volitional, ば, imperative, passive, causative, and causative-passive, then mixes them.',
      'Type the conjugated verb in kanji or kana. Answers are checked on your phone, with no connection needed.',
      'Right or wrong, you see the answer and the rule behind it, like 泳ぐ is an う-verb, so ぐ becomes げる.'
    ], ['conjugation-lesson', 'potential-lesson', 'conjugation-wrong']],
    ['a conjugation drill', [
      'The conjugation drill quizzes random verbs on the forms you pick, from ます through causative-passive, for as many questions as you want.',
      'Turn on chaining to stack a potential, passive, or causative form with an ending, like 働く to 働かれなかった, with each step explained.'
    ], ['conjugation-drill', 'drill-chaining', 'chained-explanation']],
    ['onward to N4 and N3', [
      '66 harder lessons continue through N4 (units 7 to 13) and N3 (units 14 to 17), from 〜てしまう and 〜たら to 〜はずだ and っけ.',
      'Units are grouped by JLPT level, each with its progress, and fold open to show their lessons. The unit with your next lesson starts open.',
      'Harder exercises bring four-choice picks with near misses, longer multi-clause sentences to build, and longer translations.'
    ], ['n4-n3-lesson-plans', 'n3-units', 'hazuda-lesson', 'near-miss', 'multi-clause-build']],
    ['a daily lesson', [
      'Each day starts with due course grammar, then up to two weak spots from the mistakes list, then two new lessons.',
      'Wrong answers come back at the end and are logged as mistakes, and finished lessons join the grammar deck.',
      'Keep a streak, learn one more lesson when you want, and set an optional daily reminder that is skipped once the day’s lesson is done.'
    ], ['learn-overview', 'try-again', 'session-summary']],
    ['test out of what you know', [
      'Each unit has a test out option that skips the lessons you already get fully right.'
    ], ['learn-lesson-detail-and-test-out', 'course-path']]
  ];
  const themeSections = [
    ['four color themes', [
      'Pick Classic, Blue-grey, Lavender, or Salmon pink in settings to recolor the chat background, message bubbles, the こと avatar, and the app accent.',
      'Right and wrong answers keep the same green and red in every theme.'
    ], ['theme-colors', 'theme-bluegrey-chat', 'theme-lavender-learn', 'theme-salmon-settings']]
  ];
  const learnStart = chatSections.length + reviewSections.length + 1;
  return [
    paragraph('An iOS app built in Swift for learning casual Japanese by chatting with こと, a bot that texts like a friend your age, with a daily grammar course alongside.'),
    paragraph('I want to be conversational in Japanese without sounding like all I know is textbook Japanese. With more friends in Japan to connect with, now is a great time to lock in on learning the language.'),
    paragraph('こと is made for learners around JLPT N4 reaching toward N3 who want to get comfortable with the Japanese people actually speak and send.'),
    subheading('learn by chatting'),
    caseStudyFeatures(chatSections, kotoMedia),
    subheading('review what you save'),
    caseStudyFeatures(reviewSections, kotoMedia, chatSections.length + 1),
    subheading('a daily grammar course'),
    caseStudyFeatures(learnSections, kotoMedia, learnStart),
    subheading('make it yours'),
    caseStudyFeatures(themeSections, kotoMedia, learnStart + learnSections.length),
    paragraph('Built for iPhone with SwiftUI and SwiftData. Replies, corrections, translations, and answer checks come from Claude (Haiku 5.5) as structured output, while conjugations are checked by an on-device conjugation engine. Backups export words, grammar, mistakes, chats, and course progress to a file and merge them back in. Dictionary: JMdict by EDRDG, CC BY-SA 4.0.')
  ];
}

function kotoMedia(files) {
  const gallery = document.createElement('div');
  gallery.className = 'project-gallery koto-gallery';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  [
    ['chat', 'casual replies with furigana, word and grammar chips, translate, and listen.', 'こと chat about action movies with furigana over kanji, vocabulary and grammar chips, and a reviewed 〜じゃん badge.'],
    ['conversation-modes', 'switch modes and pick up a different conversation.', 'Screen recording of switching between こと conversation modes.', true],
    ['mode-menu', 'five modes, each with its own chat.', 'こと mode menu listing close friend, senpai at work, group chat, Discord / X, and the Genki to real life drill, plus Clear this chat.'],
    ['group-chat', 'a group chat with three friends.', 'こと group chat where ゆい, たくみ, and はるか welcome you in separate bubbles.'],
    ['drill-mode', 'rewrite a textbook sentence, then get the next one.', 'こと先生 in drill mode marking a rewritten sentence almost right, with the natural casual version, an explanation, and the next sentence.'],
    ['grammar-correction', 'a grammar fix, with a natural rewrite and the reason.', 'こと grammar correction suggesting 見に行った instead of 見る, with an English explanation.'],
    ['settings', 'correction strictness, furigana, and speech settings.', 'こと settings with gentle, balanced, and strict corrections, furigana toggles, and slower speech.'],
    ['grammar-chip-save', 'open a grammar chip and add it to my grammar.', 'Screen recording of opening a grammar chip in こと and adding the pattern to the grammar deck.', true],
    ['grammar-chip', 'the 〜ちゃう pattern, with examples.', 'こと grammar sheet for 〜ちゃう, the casual form of 〜てしまう, with a meaning, notes, examples, and an Add to my grammar button.'],
    ['highlight-translate-breakdown', 'highlight a phrase, then translate the message.', 'Screen recording of highlighting words in a こと message, looking them up, and opening the translation and breakdown.', true],
    ['highlight-lookup', 'a highlighted phrase and its dictionary entry.', 'こと lookup sheet for a highlighted phrase, 絶対ハマっちゃいそう, with listen and copy buttons and the dictionary entry for 絶対.'],
    ['translation-structure', 'the translation and color-coded structure.', 'こと translation sheet showing a message, its English translation, and the sentence split into color-coded parts.'],
    ['breakdown', 'the legend, then each phrase explained.', 'こと structure legend and a phrase-by-phrase breakdown of a casual message.'],
    ['furigana-and-pronunciation', 'furigana settings and pronunciation in action.', 'Screen recording of turning furigana settings on and off in こと and playing messages aloud.', true],
    ['message-speaking', 'a message being read aloud.', 'こと chat with a message being read aloud, its speaker button showing a stop control.'],
    ['grammar-deck-and-review', 'the grammar deck, then a review.', 'Screen recording of opening the こと grammar deck and reviewing a grammar card.', true],
    ['grammar-deck', 'saved grammar and when each is due.', 'こと grammar tab listing saved patterns such as 〜ちゃう, 〜じゃないです, and 〜じゃん with due times.'],
    ['grammar-review-card', 'a grammar card, with the chat sentence it came from.', 'こと review card for 〜ちゃう with its meaning, notes, and the chat sentence it was saved from, plus Again, Hard, Good, and Easy buttons.'],
    ['furigana-off', 'the same chat with furigana turned off.', 'こと chat with furigana turned off, so kanji appear without readings.'],
    ['learn-daily-lesson', 'a daily lesson from start to finish.', 'Screen recording of a daily lesson in the こと Learn tab.', true],
    ['lesson-detail', 'the explainer for 〜で.', 'こと lesson for 〜で explaining how to use it, with example sentences and a Learn this lesson button.'],
    ['fill-blank', 'fill in the blank.', 'こと fill in the blank exercise answered correctly with この.'],
    ['build-sentence', 'build the sentence from tiles.', 'こと build the sentence exercise for “How much is this watch?” with この, 時計, は, いくら, です, and か placed in order.'],
    ['typed-answer', 'type the japanese.', 'こと exercise asking you to say “What is this?” in Japanese, with これはなんですか typed in.'],
    ['conjugation-lesson', 'a conjugation lesson, then a right and a wrong answer.', 'Screen recording of opening the こと verb conjugation unit, reading the potential form lesson, and typing one right and one wrong answer.', true],
    ['potential-lesson', 'the potential form, with how to make it.', 'こと lesson for the potential form explaining how to make it for る-verbs, う-verbs, する, and 来る, with example sentences.'],
    ['conjugation-wrong', 'a wrong answer, with the rule explained.', 'こと conjugation exercise marked not quite for 泳げられる, showing the correct 泳げる and the rule that ぐ becomes げる.'],
    ['conjugation-drill', 'pick forms, turn on chaining, then drill.', 'Screen recording of choosing forms in the こと conjugation drill, turning on chaining, and answering a normal and a chained question.', true],
    ['drill-chaining', 'choose forms, chaining, and how many questions.', 'こと conjugation drill settings with N4 forms toggled, chain forms turned on, and 15 questions.'],
    ['chained-explanation', 'a chained form, explained step by step.', 'こと chained conjugation of 働く through passive and past negative, answered 働かれなかった and marked correct with each step explained.'],
    ['n4-n3-lesson-plans', 'scroll the levels, then open a unit and a lesson.', 'Screen recording of scrolling through the こと N5, N4, and N3 units, opening unit 10, and answering a 〜てしまう question.', true],
    ['n3-units', 'N4 and N3 units, each with its progress.', 'こと Learn tab showing N4 units 11 to 13 and N3 units 14 to 17 with their grammar and progress.'],
    ['hazuda-lesson', 'the explainer for 〜はずだ.', 'こと lesson for 〜はずだ explaining how to make it and how it differs from べきだ and でしょう, with example sentences.'],
    ['near-miss', 'a near miss in a four-choice question.', 'こと fill in the blank marked not quite after choosing べきだった over はずだった.'],
    ['multi-clause-build', 'a longer sentence, built and color-coded.', 'こと build the sentence exercise for “I put it in there this morning, so the key should be in the drawer,” marked correct with its color-coded structure.'],
    ['learn-overview', 'the day’s lesson, the drill, and units by level.', 'こと Learn tab showing the streak, Start today’s lesson, the conjugation drill, and N5 units folded up.'],
    ['try-again', 'missed questions come back at the end.', 'こと fill in the blank exercise marked try again.'],
    ['session-summary', 'a summary, with new grammar added to the deck.', 'こと lesson summary reading お疲れさま, 4 of 5 right on the first try, with これ／この added to the grammar deck.'],
    ['learn-lesson-detail-and-test-out', 'open a lesson, then test out of a unit.', 'Screen recording of opening a こと lesson and testing out of a unit.', true],
    ['course-path', 'an open unit, with the test out option.', 'こと Learn tab with N3 unit 14 open, listing lessons from 〜ために to 〜ばかり and an Already know this? Test out option.'],
    ['theme-colors', 'switch themes in settings.', 'Screen recording of switching between the four こと color themes in settings, then viewing the Chat and Learn tabs.', true],
    ['theme-bluegrey-chat', 'chat in blue-grey.', 'こと chat in the blue-grey theme, with a blue-grey avatar and accent.'],
    ['theme-lavender-learn', 'the Learn tab in lavender.', 'こと Learn tab in the lavender theme, with a lavender Start today’s lesson button.'],
    ['theme-salmon-settings', 'the theme picker, set to salmon pink.', 'こと settings with Salmon pink checked in the theme picker and salmon pink toggles.']
  ].filter(([file]) => files.includes(file)).forEach(([file, caption, alt, isVideo]) => {
    const figure = document.createElement('figure');
    let media;
    if (isVideo) {
      media = document.createElement('video');
      media.src = `/assets/koto/${file}.mp4`;
      media.poster = `/assets/koto/${file}-poster.webp`;
      media.muted = true;
      media.loop = true;
      media.playsInline = true;
      media.preload = 'metadata';
      // Respect reduced motion: show the first frame with controls instead of autoplaying.
      if (reducedMotion) media.controls = true;
      else media.autoplay = true;
      media.setAttribute('aria-label', alt);
    } else {
      media = document.createElement('img');
      media.src = `/assets/koto/${file}.webp`;
      media.alt = alt;
      media.loading = 'lazy';
    }
    media.width = 600;
    media.height = 1304;
    const label = document.createElement('figcaption');
    label.textContent = caption;
    figure.append(media, label);
    gallery.append(figure);
  });
  return gallery;
}

const projectDetails = { koto: kotoDetails, projectjim: projectJimDetails, grembot: grembotDetails, holowish: holowishDetails };


export { projectDetails };
