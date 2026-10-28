import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Berill — notes, plans, habits and workouts in one app',
    description:
      'A personal workspace for Windows and Android: notes, planner, habits, workouts, nutrition, finance and collections. Local-first data, synced through your own server with end-to-end encryption.',
  },
  nav: [
    { id: 'modules', label: 'Sections' },
    { id: 'sync', label: 'Sync' },
    { id: 'plugins', label: 'Plugins' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'faq', label: 'FAQ' },
  ],
  header: { download: 'Download', theme: 'Toggle theme', language: 'Language', menu: 'Menu' },
  hero: {
    eyebrow: 'Windows · Android · self-hosted',
    title: 'Your whole personal system',
    accent: 'in one app',
    lead:
      'Berill brings notes, plans, habits, workouts, nutrition and collections into one workspace. Everything lives on your device and syncs between devices through a server you own.',
    primary: 'Download Berill',
    secondary: 'Source code',
    chips: ['Works offline', 'End-to-end encryption', 'English and Russian'],
  },
  mockup: {
    greeting: 'Good evening',
    date: 'Monday, October 26',
    nav: ['Home', 'Notes', 'Habits', 'Planner', 'Workouts', 'Nutrition', 'Finance'],
    habitsTitle: 'Habits today',
    habits: [
      ['Water 2 L', true],
      ['Read 30 min', true],
      ['Stretching', false],
    ],
    kcalTitle: 'Calories',
    kcalValue: '1,640',
    kcalHint: 'of 2,300 kcal',
    planTitle: 'Today',
    plan: [
      ['Send the network report', true],
      ['Buy groceries', false],
      ['Call parents', false],
    ],
    workoutTitle: 'Workout · day B',
    workout: [
      ['Squat', '4 × 5 · 80 kg'],
      ['Bench press', '4 × 6 · 75% 1RM'],
      ['Lat pulldown', '3 × 10'],
    ],
    syncState: 'Synced',
    phoneTitle: 'Journal',
    phoneExercise: 'Bench press',
    phoneSets: [
      ['1', '60 kg × 6', true],
      ['2', '60 kg × 6', true],
      ['3', '60 kg × 6', false],
      ['4', '60 kg × 6', false],
    ],
    phoneRest: 'Rest 1:45',
  },
  principles: [
    {
      icon: 'offline',
      title: 'Local-first',
      text: 'Everything is edited in a local SQLite database. The internet is only needed for sync and online catalog search.',
    },
    {
      icon: 'server',
      title: 'Your own server',
      text: 'Sync goes through a server you own: Ktor and PostgreSQL in Docker Compose.',
    },
    {
      icon: 'lock',
      title: 'End-to-end encryption',
      text: 'Record content can be encrypted with a password — the server only stores ciphertext.',
    },
    {
      icon: 'puzzle',
      title: 'Sections are modules',
      text: 'Every section is a separate module. Turn on what you need, the rest stays out of the way.',
    },
  ],
  modules: {
    title: 'Twelve sections instead of a dozen apps',
    lead: 'Home gathers cards and quick actions from enabled sections, and every section has its own statistics.',
    items: [
      { icon: 'notes', title: 'Notes', text: 'Markdown with an Obsidian-style live preview, wiki links, task checkboxes, callouts and tables.' },
      { icon: 'habits', title: 'Habits', text: 'Daily check-ins, streaks, a weekly strip and statistics for every habit.' },
      { icon: 'planner', title: 'Planner', text: 'Tasks for each day of the week and weekly goals with a summary.' },
      { icon: 'workouts', title: 'Workouts', text: 'Programs, multi-week cycles, a set journal, timers and weight calculations.' },
      { icon: 'nutrition', title: 'Nutrition', text: 'Food diary, calories and macros, water and body weight with charts.' },
      { icon: 'finance', title: 'Finance', text: 'Income, expenses and savings accounts, spending by category for the month.' },
      { icon: 'books', title: 'Books', text: 'A reading journal: a want — reading — done board and Google Books search.' },
      { icon: 'watching', title: 'Watching', text: 'Anime, movies and series with episode progress, search via Shikimori and Kinopoisk.' },
      { icon: 'recipes', title: 'Recipes', text: 'A cookbook with photos, categories and favorites.' },
      { icon: 'languages', title: 'Languages', text: 'A personal dictionary, flashcards and lessons — for any number of languages.' },
      { icon: 'study', title: 'Study', text: 'Subjects, assignments and deadlines that highlight what is due.' },
      { icon: 'projects', title: 'Projects', text: 'A four-column board for ideas and projects, with progress checklists.' },
    ],
  },
  sync: {
    title: 'Sync you are in charge of',
    lead: 'The server takes a couple of minutes to deploy and stores only what you allow. Edits from different devices merge field by field instead of overwriting each other.',
    steps: [
      { title: 'Start the server', text: 'Docker Compose runs the server, PostgreSQL and daily backups.', code: 'docker compose up -d' },
      { title: 'Issue a token', text: 'One token per device, revocable at any time.', code: 'docker compose run --rm server token create igor --name phone' },
      { title: 'Connect devices', text: 'Enter the address and token in settings — your data shows up everywhere.' },
    ],
    points: [
      { icon: 'merge', title: 'Field-level merge', text: 'Hybrid logical clocks on every field: phone and desktop edits combine without conflicts.' },
      { icon: 'lock', title: 'End-to-end encryption', text: 'Only your devices know the password. Without it, content on the server is unreadable.' },
      { icon: 'status', title: 'Status page', text: '/status shows records, devices and when each one last synced.' },
      { icon: 'backup', title: 'Backups', text: 'A daily pg_dump is kept for 14 days in a plain folder — wiping a volume is not a disaster.' },
      { icon: 'sync', title: 'Self-healing', text: 'If the server database is recreated, devices resend all their records automatically.' },
      { icon: 'update', title: 'Updates', text: 'The same server hosts new app versions — Berill tells you when to update.' },
    ],
    devices: { pc: 'Desktop', phone: 'Phone', server: 'Your server', encrypted: 'encrypted' },
  },
  plugins: {
    title: 'Extensible — and still under control',
    lead: 'Built-in sections work through a shared API and never touch the database directly. Third-party plugins run in a separate process and get only what you allow.',
    points: [
      { icon: 'process', title: 'Separate process', text: 'A dedicated process with a class filter on desktop, an isolated service on Android.' },
      { icon: 'shield', title: 'Explicit permissions', text: 'Network and image access is granted per host listed in the plugin manifest.' },
      { icon: 'check', title: 'Checked before install', text: 'Bytecode is scanned for forbidden APIs before the first run.' },
      { icon: 'code', title: 'Kotlin SDK', text: 'Plugins are written in Kotlin Multiplatform against the same set of interfaces.' },
    ],
    docs: 'Plugin development guide',
  },
  desktop: {
    title: 'At home on your desk and in your pocket',
    lead: 'The Windows client behaves like a proper desktop app.',
    points: [
      { icon: 'tray', title: 'Lives in the tray', text: 'Closing the window hides it to the tray while sync keeps running.' },
      { icon: 'power', title: 'Autostart', text: 'Starts in the background when you sign in to Windows.' },
      { icon: 'keyboard', title: 'Global shortcut', text: 'Ctrl+Alt+B or another combination opens Berill from any app.' },
    ],
    android: { icon: 'phone', title: 'Android 8.0 and newer', text: 'Mobile layout, system back gesture and the same set of sections.' },
    updates: { icon: 'update', title: 'Tells you about updates', text: 'A link to the Windows installer or the Android APK, right on the home screen.' },
  },
  stack: {
    title: 'Under the hood',
    lead: 'One codebase for Windows and Android, a Kotlin server and automated releases.',
    items: ['Kotlin Multiplatform', 'Compose Multiplatform', 'SQLDelight', 'Ktor', 'PostgreSQL', 'Exposed', 'Docker Compose', 'GitHub Actions'],
    docs: 'Deployment guide',
  },
  faq: {
    title: 'Questions',
    items: [
      { q: 'Do I need to run a server?', a: 'No. Without a server Berill works fully on a single device. The server is only needed to sync your desktop and phone.' },
      { q: 'Where is my data stored?', a: 'In a local SQLite database: on Windows in the .berill folder of your user profile, on Android in the app’s internal storage.' },
      { q: 'Can the server read my records?', a: 'With end-to-end encryption on — no, it only receives encrypted data. You should still set up HTTPS to protect the connection.' },
      { q: 'Which devices are supported?', a: 'Windows and Android 8.0 or newer. Both clients are built from the same code and work with the same data.' },
      { q: 'Can I turn off sections I do not use?', a: 'Yes. A disabled section disappears from the menu while its data is kept and keeps syncing. A removed section returns to the catalog.' },
      { q: 'Can I build my own section?', a: 'Yes. There is a Kotlin Multiplatform SDK for third-party plugins. A plugin runs in a separate process with only the access you grant.' },
    ],
  },
  download: {
    title: 'Start with one device',
    lead: 'Install Berill, and add a server whenever you want sync.',
    windows: { title: 'Windows', text: 'Installer with updates delivered by your server.', action: 'Download for Windows' },
    android: { title: 'Android', text: 'APK for Android 8.0 and newer.', action: 'Download APK' },
    server: { title: 'Server', text: 'Docker image of the sync and update server.', action: 'How to deploy' },
    version: 'Version {version}',
    unavailable: 'Coming soon',
  },
  footer: {
    tagline: 'A personal space that stays yours.',
    source: 'Source code',
    releases: 'Releases',
    deploy: 'Deployment',
    releasing: 'Release guide',
    plugins: 'Plugin guide',
    privacy: 'Privacy',
    terms: 'Terms',
    rights: 'Akkraizen',
  },
  legal: {
    updated: 'Effective October 28, 2026',
    back: 'Back to home',
    contact: 'Questions and requests: akkraizen@gmail.com',
    privacy: {
      title: 'Privacy Policy',
      intro:
        'Berill is a personal app for notes, habits, plans, and other records, developed by Akkraizen. This page explains what data the app handles, where it is stored, and how you control it.',
      sections: [
        {
          title: 'Where your data lives',
          paragraphs: [
            'Everything you create in Berill is stored on your devices. The developer does not receive a copy of your records and has no access to them.',
            'If you turn on sync, data is sent to the sync server you set in the settings, usually your own server. With end-to-end encryption enabled, the server stores records only in encrypted form.',
          ],
        },
        {
          title: 'What Berill does not do',
          paragraphs: ['The app has no ads, analytics, or trackers. We do not sell your data or share it with third parties.'],
        },
        {
          title: 'External services',
          paragraphs: ['Berill contacts external services only for features you use:'],
          list: [
            'checking and downloading updates — updates.berill.space;',
            'book search — Google Books;',
            'food and barcode search — Open Food Facts;',
            'movie, series, and anime search — Shikimori and Kinopoisk API;',
            'exercise catalog — an open exercise database;',
            'calendar — Google Calendar, if you connect a Google account.',
          ],
        },
        {
          title: 'Technical logs',
          paragraphs: [
            'Like any web server, the update server may record the IP address, request time, and app version. These logs are used only to operate and protect the service.',
          ],
        },
        {
          title: 'Google Calendar data',
          paragraphs: [
            'When you press "Sign in with Google", Berill asks for access to your calendar list and to the events in your calendars (the calendar.calendarlist.readonly and calendar.events scopes). This access is used only to show events in the Berill planner and to sync the changes you make in both directions.',
            'The access token is kept in the secure storage of your device and never leaves it. Events are stored together with your other records and reach only your devices and your sync server. The developer does not receive this data. It is not used for advertising, is not sold, is not shared with third parties, and is not used to train artificial intelligence models.',
            "Berill's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
            'You can revoke access with the "Disconnect" button in the planner settings or at myaccount.google.com/permissions. Events already saved in Berill can be deleted in the app.',
          ],
        },
        {
          title: 'Deleting data',
          paragraphs: [
            'You can delete any record in the app, uninstall the app together with its data, and clear the data on your sync server. Since the developer does not store your data, there is nothing to delete on the developer side.',
          ],
        },
        {
          title: 'Children',
          paragraphs: ['Berill is not intended for children under 13 and does not knowingly collect their data.'],
        },
        {
          title: 'Changes',
          paragraphs: ['If this policy changes, we will update this page and the date at the top.'],
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      intro: 'These terms govern the use of the Berill app and the berill.space website. By using them, you accept these terms.',
      sections: [
        {
          title: 'The app',
          paragraphs: ['Berill is provided free of charge. Its source code is published on GitHub. You may use the app for personal purposes.'],
        },
        {
          title: 'Your data and your server',
          paragraphs: [
            'You are responsible for your records, backups, and sync server if you use one. Keep passwords and encryption keys safe: encrypted data cannot be recovered without them.',
          ],
        },
        {
          title: 'Third-party services',
          paragraphs: [
            "Some features use third-party services such as Google Calendar, Google Books, or Open Food Facts. Their use is governed by those services' terms. By connecting a Google account, you also agree to Google's terms.",
          ],
        },
        {
          title: 'Acceptable use',
          paragraphs: ['Do not use Berill or the update server for unlawful activities and do not try to disrupt the service.'],
        },
        {
          title: 'No warranty',
          paragraphs: ['The app is provided "as is", without warranties of any kind. The developer does not guarantee uninterrupted or error-free operation.'],
        },
        {
          title: 'Limitation of liability',
          paragraphs: [
            'To the extent permitted by law, the developer is not liable for data loss, lost profits, or any other damages related to the use of the app.',
          ],
        },
        {
          title: 'Changes',
          paragraphs: ['These terms may change. The current version is always published on this page.'],
        },
      ],
    },
  },
}
