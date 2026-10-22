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

export { photographs, photoMetadata };
