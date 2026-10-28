export type IconName =
  | 'notes'
  | 'habits'
  | 'planner'
  | 'workouts'
  | 'nutrition'
  | 'finance'
  | 'books'
  | 'watching'
  | 'recipes'
  | 'languages'
  | 'study'
  | 'projects'
  | 'offline'
  | 'server'
  | 'lock'
  | 'puzzle'
  | 'sync'
  | 'status'
  | 'backup'
  | 'update'
  | 'merge'
  | 'tray'
  | 'power'
  | 'keyboard'
  | 'window'
  | 'mouse'
  | 'phone'
  | 'desktop'
  | 'shield'
  | 'process'
  | 'code'
  | 'download'
  | 'github'
  | 'arrow'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'check'

export interface Feature {
  icon: IconName
  title: string
  text: string
}

export interface Step {
  title: string
  text: string
  code?: string
}

export interface Faq {
  q: string
  a: string
}

export interface MockupText {
  greeting: string
  date: string
  nav: string[]
  habitsTitle: string
  habits: [string, boolean][]
  kcalTitle: string
  kcalValue: string
  kcalHint: string
  planTitle: string
  plan: [string, boolean][]
  workoutTitle: string
  workout: [string, string][]
  syncState: string
  phoneTitle: string
  phoneExercise: string
  phoneSets: [string, string, boolean][]
  phoneRest: string
}

export interface LegalSection {
  title: string
  paragraphs: string[]
  list?: string[]
}

export interface LegalDoc {
  title: string
  intro: string
  sections: LegalSection[]
}

export interface Content {
  meta: { title: string; description: string }
  nav: { id: string; label: string }[]
  header: { download: string; theme: string; language: string; menu: string }
  hero: {
    eyebrow: string
    title: string
    accent: string
    lead: string
    primary: string
    secondary: string
    chips: string[]
  }
  mockup: MockupText
  principles: Feature[]
  modules: { title: string; lead: string; items: Feature[] }
  sync: {
    title: string
    lead: string
    steps: Step[]
    points: Feature[]
    devices: { pc: string; phone: string; server: string; encrypted: string }
  }
  plugins: { title: string; lead: string; points: Feature[]; docs: string }
  desktop: { title: string; lead: string; points: Feature[]; android: Feature; updates: Feature }
  stack: { title: string; lead: string; items: string[]; docs: string }
  faq: { title: string; items: Faq[] }
  download: {
    title: string
    lead: string
    windows: { title: string; text: string; action: string }
    android: { title: string; text: string; action: string }
    server: { title: string; text: string; action: string }
    version: string
    unavailable: string
  }
  footer: {
    tagline: string
    source: string
    releases: string
    deploy: string
    releasing: string
    plugins: string
    privacy: string
    terms: string
    rights: string
  }
  legal: { updated: string; back: string; contact: string; privacy: LegalDoc; terms: LegalDoc }
}
