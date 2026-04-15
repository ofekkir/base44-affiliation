export type AppSlug =
  | 'look-alike'
  | 'future-face'
  | 'gender-reveal'
  | 'shower-game'
  | 'monthly-collage'

export interface BabyApp {
  slug: AppSlug
  title: string
  tagline: string
  thumbTitle: string
  occasion: string
  spec: string[]
}

export const APPS: Record<AppSlug, BabyApp> = {
  'look-alike': {
    slug: 'look-alike',
    title: 'Who does my baby look like?',
    tagline:
      'Upload photos of baby, mom, and dad. The app scores the resemblance feature by feature and gives you a shareable verdict.',
    thumbTitle: 'Baby look-alike score',
    occasion: 'After birth',
    spec: [
      'Upload three photos: baby, mom, dad',
      'Analyze eyes, nose, mouth and face shape',
      'Output a percentage score (e.g. 62% Dad, 38% Mom)',
      'Feature-by-feature breakdown',
      'Shareable score card with social buttons',
    ],
  },
  'future-face': {
    slug: 'future-face',
    title: 'How will my baby look?',
    tagline:
      'Upload photos of mom and dad. The app previews your future baby — hair, eyes, smile — with a playful age slider.',
    thumbTitle: 'Future baby preview',
    occasion: 'Pregnancy',
    spec: [
      'Upload photos of mom and dad',
      'Generate a predicted baby face',
      'Age slider from newborn to 5 years old',
      'Toggle boy / girl / surprise',
      'Shareable preview card for the group chat',
    ],
  },
  'gender-reveal': {
    slug: 'gender-reveal',
    title: 'Make the gender reveal unforgettable',
    tagline:
      'A custom countdown page with a scratch-to-reveal card. Share the link and let family tap to find out together.',
    thumbTitle: 'Gender reveal',
    occasion: 'Pregnancy',
    spec: [
      'Countdown timer to the reveal date',
      'Tap-to-reveal card with confetti animation',
      'Pink or blue reveal with a custom message',
      'Shareable link with a rich social preview',
      'Optional guest guess-board before the reveal',
    ],
  },
  'shower-game': {
    slug: 'shower-game',
    title: 'The ultimate baby shower game',
    tagline:
      'Guests vote whether baby will take after mom or dad, guess the due date, and rank nursery names. Everyone plays on their phone.',
    thumbTitle: 'Baby shower game',
    occasion: 'Baby shower',
    spec: [
      'Mini-games: look-alike vote, due-date guess, name poll',
      'Guests join via a shared link — no account needed',
      'Live vote tallies on a shared leaderboard',
      'Host controls the round flow from one phone',
      'End-of-party results card to share',
    ],
  },
  'monthly-collage': {
    slug: 'monthly-collage',
    title: 'A photo collage for every month',
    tagline:
      'Upload one photo a month. The app builds a growing twelve-tile collage — perfect for the first-birthday slideshow.',
    thumbTitle: 'Monthly photo collage',
    occasion: 'First year',
    spec: [
      'One upload slot per month (twelve tiles)',
      'Auto-layout collage that grows over time',
      'Add a weight or milestone note per month',
      'Download as a printable poster',
      'Monthly email reminder to upload',
    ],
  },
}

// Chronological order — earliest baby moment first.
// Default focus is look-alike (the flagship, sits in the timeline at birth).
export const ALL_SLUGS: AppSlug[] = [
  'future-face',      // early pregnancy
  'gender-reveal',    // mid pregnancy
  'shower-game',      // late pregnancy (baby shower)
  'look-alike',       // at birth — default focus
  'monthly-collage',  // first year
]

export const DEFAULT_SLUG: AppSlug = 'look-alike'

export function resolveSlug(value: string | string[] | undefined): AppSlug {
  const v = Array.isArray(value) ? value[0] : value
  if (v && (v as AppSlug) in APPS) return v as AppSlug
  return DEFAULT_SLUG
}
