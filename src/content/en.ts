import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Berill — notes, plans, health and workouts in one app',
    description:
      'A personal workspace for Windows, macOS, Linux and Android: notes, a planner with a calendar, habits, workouts, nutrition, health, finance and collections. Local-first data, synced through your own server with end-to-end encryption, and available to AI assistants over MCP.',
  },
  nav: [
    { id: 'modules', label: 'Sections' },
    { id: 'workspace', label: 'Features' },
    { id: 'assistants', label: 'AI' },
    { id: 'sync', label: 'Sync' },
    { id: 'desktop', label: 'Platforms' },
    { id: 'faq', label: 'FAQ' },
  ],
  header: { download: 'Download', theme: 'Toggle theme', language: 'Language', menu: 'Menu' },
  hero: {
    eyebrow: 'Windows · macOS · Linux · Android',
    title: 'Your whole personal system',
    accent: 'in one app',
    lead:
      'Berill brings notes, plans, habits, workouts, nutrition, health and collections into one workspace. Everything lives on your device, syncs through your own server and, if you want, is available to your AI assistant.',
    primary: 'Download Berill',
    secondary: 'Source code',
    chips: ['Works offline', 'End-to-end encryption', 'MCP for AI assistants', 'English and Russian'],
  },
  mockup: {
    greeting: 'Good evening',
    date: 'Tuesday, November 3',
    nav: ['Home', 'Notes', 'Habits', 'Planner', 'Workouts', 'Health', 'Nutrition', 'Finance'],
    habitsTitle: 'Habits today',
    habits: [
      ['Water 2 l', true],
      ['Read 30 min', true],
      ['Stretching', false],
    ],
    kcalTitle: 'Calories',
    kcalValue: '1,640',
    kcalHint: 'of 2,300 kcal',
    planTitle: "Today's plan",
    plan: [
      ['Submit the network report', true],
      ['Buy groceries', false],
      ['Call my parents', false],
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
      title: 'Local first',
      text: 'Everything is edited in a local SQLite database. The internet is only needed to sync and to search online catalogs.',
    },
    {
      icon: 'server',
      title: 'Your own server',
      text: 'Sync goes through a server you own: Ktor and PostgreSQL in Docker Compose, with attachments on disk or in S3.',
    },
    {
      icon: 'lock',
      title: 'End-to-end encryption',
      text: 'Records and attachments can be encrypted with a password — the server stores only ciphertext.',
    },
    {
      icon: 'puzzle',
      title: 'Sections are modules',
      text: 'Each section is a separate module. Turn on only what you need: a disabled one stays out of the way and keeps its data.',
    },
  ],
  modules: {
    title: 'Thirteen sections instead of a dozen apps',
    lead: 'Home collects cards and quick actions from the enabled sections, and each section keeps its records and statistics on neighboring tabs.',
    items: [
      { icon: 'notes', title: 'Notes', text: 'Markdown with live preview, wiki links and backlinks, focus mode and a daily note template.' },
      { icon: 'habits', title: 'Habits', text: 'Daily check-offs, streaks, a weekly strip and statistics for every habit.' },
      { icon: 'planner', title: 'Planner', text: 'Tasks and goals, a month and hour calendar, recurring events, birthdays and two-way Google Calendar sync.' },
      { icon: 'workouts', title: 'Workouts', text: 'Programs and cycles, a set journal, rest timer, suggested weights and a muscle-load radar.' },
      { icon: 'health', title: 'Health', text: 'Medications and supplements with reminders, blood pressure, pulse and glucose charts, wellbeing, sleep and steps.' },
      { icon: 'nutrition', title: 'Nutrition', text: 'A food diary with barcodes, calories and macros, water and body weight with charts.' },
      { icon: 'finance', title: 'Finance', text: 'Income, expenses and accounts, recurring operations and category budgets.' },
      { icon: 'books', title: 'Books', text: 'A to-read, reading and finished board with draggable cards and Google Books search.' },
      { icon: 'watching', title: 'Watching', text: 'Anime, movies and series with episode progress and Shikimori and Kinopoisk search.' },
      { icon: 'recipes', title: 'Recipes', text: 'A cookbook with photos, categories and favorites.' },
      { icon: 'languages', title: 'Languages', text: 'A personal dictionary and flashcards with SM-2 spaced repetition for any number of languages.' },
      { icon: 'study', title: 'Study', text: 'Subjects, credits, assignments and deadlines with what is urgent highlighted.' },
      { icon: 'projects', title: 'Projects', text: 'A four-column board for ideas and projects, and checklists with progress.' },
    ],
  },
  workspace: {
    title: 'Sections work as one',
    lead: 'Search, the daily overview, reminders and quick entry are not tied to a single section — they bring together everything you have enabled.',
    items: [
      { icon: 'search', title: 'Search everything', text: 'Ctrl+K opens search and a command palette. A full-text index matches word prefixes in any language.' },
      { icon: 'layout', title: 'Your own Home', text: 'Drag cards and quick actions right on the page and hide what you do not need with one button.' },
      { icon: 'calendar', title: 'Daily overview', text: 'Habits, workouts, nutrition, weight, expenses, plans and a daily note with mood — on one screen.' },
      { icon: 'check', title: 'Quick entry', text: 'Log an expense, a meal, a task, a workout or a blood pressure reading in a dialog over Home, with templates and undo.' },
      { icon: 'bell', title: 'Reminders', text: 'A notification center, per-section settings, sounds and quiet hours, even across midnight.' },
      { icon: 'widget', title: '22 Android widgets', text: 'Habits, plans, calendar, water, weight, workouts and notes on the home screen, plus Quick Settings tiles and sharing.' },
      { icon: 'archive', title: 'Scheduled export', text: 'A ZIP with JSON, Markdown and attachments — on demand or daily or weekly into a folder you choose.' },
      { icon: 'merge', title: 'Visible conflicts', text: 'When one field changes on two devices, both versions are kept and you choose field by field.' },
    ],
  },
  assistants: {
    title: 'Your records, for your AI assistant',
    lead: 'Berill works as an MCP server. Claude, Codex, Cursor and other agents can search and read your records and, if you allow it, create and edit them.',
    points: [
      { icon: 'desktop', title: 'Built into the app', text: 'The server listens only on 127.0.0.1, requires a token and is off by default. Turn it on with one switch in the settings.' },
      { icon: 'shield', title: 'Read or write', text: 'A read-only mode, record version checks before changes and confirmation before deleting.' },
      { icon: 'server', title: 'Standalone berill-mcp', text: 'For a machine without the app — a separate server that syncs as one more device and supports end-to-end encryption.' },
      { icon: 'health', title: 'Every section', text: 'The assistant can use notes and every enabled section, from finance and plans to medications and workouts.' },
    ],
    clients: ['Claude Desktop', 'Claude Code', 'OpenAI Codex', 'Cursor', 'VS Code', 'Windsurf', 'Gemini CLI', 'Zed', 'opencode', 'Cline', 'JetBrains AI'],
    clientsTitle: 'Ready-made settings for clients',
    chat: {
      question: 'How much did I spend on cafés in October, and how was my blood pressure this week?',
      tools: ['berill_finance_read', 'berill_health_read'],
      answer: 'Cafés took $86 in October, 12% less than in September. Your blood pressure averaged 121/79 this week and never went above normal.',
    },
    docs: 'How to connect an assistant',
  },
  sync: {
    title: 'Sync you are in control of',
    lead: 'The server is set up in a couple of minutes and stores only what you allow. Edits from different devices merge field by field instead of overwriting each other.',
    steps: [
      { title: 'Start the server', text: 'Docker Compose runs the server, PostgreSQL and daily backups.', code: 'docker compose up -d' },
      { title: 'Issue a token', text: 'Each device gets its own token, which you can revoke.', code: 'docker compose run --rm server token create igor --name phone' },
      { title: 'Connect your devices', text: 'Enter the address and token in the settings, and your data appears everywhere.' },
    ],
    points: [
      { icon: 'merge', title: 'Field-level merge', text: 'Hybrid logical clocks on every field: edits from phone and PC combine, and disputed ones keep both versions.' },
      { icon: 'lock', title: 'End-to-end encryption', text: 'Only your devices know the password. Without it, neither records nor attachments on the server can be read.' },
      { icon: 'archive', title: 'Attachments apart', text: 'Photos and files download on demand, live on the server disk or in S3, and the cache on each device is capped.' },
      { icon: 'backup', title: 'Backups', text: 'A daily dump of PostgreSQL and attachments, plus an optional encrypted restic copy on separate storage.' },
      { icon: 'sync', title: 'Resilience', text: 'Devices recover on their own after the server database is recreated, and a clock running ahead cannot spoil other devices.' },
      { icon: 'status', title: 'Status page', text: '/status shows records, devices and when each of them last synced.' },
    ],
    devices: { pc: 'PC', phone: 'Phone', server: 'Your server', encrypted: 'encrypted' },
  },
  plugins: {
    title: 'Extensible — and still under control',
    lead: 'Built-in sections work through a shared API and never touch the database directly. Third-party plugins run in a separate process and get only what you allow.',
    points: [
      { icon: 'process', title: 'Separate process', text: 'Its own process with a class filter on desktop, an isolated service on Android.' },
      { icon: 'shield', title: 'Explicit permissions', text: 'Network and image access is granted per host, as listed in the plugin manifest.' },
      { icon: 'check', title: 'Checked before install', text: 'Bytecode is scanned for forbidden APIs before the first launch.' },
      { icon: 'code', title: 'Kotlin SDK', text: 'Plugins are written in Kotlin Multiplatform with the same set of interfaces.' },
    ],
    docs: 'Plugin development guide',
  },
  desktop: {
    title: 'On any computer and in your pocket',
    lead: 'One codebase for Windows, macOS, Linux and Android — and on each system Berill behaves like a native app.',
    points: [
      { icon: 'tray', title: 'Tray and menu bar', text: 'A closed window goes to the tray or the macOS menu bar, and sync keeps running in the background.' },
      { icon: 'power', title: 'Autostart', text: 'On Windows and macOS, Berill can start at sign-in straight into the background.' },
      { icon: 'keyboard', title: 'Global shortcut', text: 'Ctrl+Alt+B on Windows, Ctrl+Option+B on macOS or your own combination opens Berill from any app.' },
      { icon: 'desktop', title: 'Windows', text: 'An installer with a Start menu shortcut, a window with rounded corners and updates with a restart.' },
      { icon: 'laptop', title: 'macOS', text: 'A DMG for macOS 12 and newer, ⌘Q and Dock support, secrets in the Keychain.' },
      { icon: 'terminal', title: 'Linux', text: '.deb and .rpm packages with a bundled Java runtime and an application menu entry.' },
    ],
    android: { icon: 'phone', title: 'Android 8.0 and newer', text: 'Widgets, Quick Settings tiles, sharing into Berill and steps, sleep and weight from Health Connect.' },
    updates: { icon: 'update', title: 'Updates itself', text: 'The update center downloads the new version, checks its signature and installs it without losing drafts.' },
  },
  stack: {
    title: 'Under the hood',
    lead: 'One codebase for four platforms, a Kotlin server and honest release automation.',
    items: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Material 3 Expressive', 'SQLDelight', 'Ktor', 'PostgreSQL', 'Exposed', 'MCP Kotlin SDK', 'Jetpack Glance', 'Docker Compose', 'GitHub Actions'],
    docs: 'Deployment documentation',
  },
  faq: {
    title: 'FAQ',
    items: [
      { q: 'Do I have to run a server?', a: 'No. Without a server, Berill works fully on a single device. You only need a server to sync several devices.' },
      { q: 'Which devices are supported?', a: 'Windows, macOS 12 and newer, Linux with .deb or .rpm packages and Android 8.0 and newer. All clients are built from one codebase and work with the same data.' },
      { q: 'Where is my data stored?', a: 'In a local SQLite database: on a computer, in the .berill folder of your user profile; on Android, in the app’s internal storage. You can export it to a ZIP at any time.' },
      { q: 'Can the server read my records?', a: 'With end-to-end encryption on, no: the server receives only encrypted records and attachments. You should still set up HTTPS to protect the connection.' },
      { q: 'What does an AI assistant see?', a: 'Only what you connect it to. The MCP server is off by default, runs only on your computer, requires a token and can be read-only. Berill itself sends your records nowhere — the client you choose talks to the model.' },
      { q: 'Where does health data go?', a: 'Where your other records go: to your devices and your sync server. Health Connect is optional, and Berill only reads steps, sleep and weight from it.' },
      { q: 'Can I turn off sections I do not need?', a: 'Yes. A disabled section disappears from the menu and stops sending reminders, while its data is kept and keeps syncing.' },
      { q: 'Can I write my own section?', a: 'Yes. Third-party plugins have a Kotlin Multiplatform SDK. A plugin runs in a separate process and gets only the access you grant.' },
    ],
  },
  download: {
    title: 'Start with one device',
    lead: 'Install Berill and add a server when you want sync.',
    windows: { title: 'Windows', text: 'An installer with in-app updates.', action: 'Download for Windows' },
    macos: { title: 'macOS', text: 'A DMG image for macOS 12 and newer.', action: 'Download for macOS' },
    linux: { title: 'Linux', text: 'A package for Debian, Ubuntu, Fedora and their relatives.', action: 'Download .deb', rpm: 'Download .rpm' },
    android: { title: 'Android', text: 'An APK for Android 8.0 and newer.', action: 'Download APK' },
    server: { title: 'Server', text: 'Docker images of the sync and update servers with backups.', action: 'How to deploy' },
    version: 'Version {version}',
    unavailable: 'Coming soon',
  },
  footer: {
    tagline: 'A personal space that stays yours.',
    source: 'Source code',
    releases: 'Releases',
    deploy: 'Deployment',
    changelog: "What's new",
    plugins: 'Plugin guide',
    mcp: 'AI assistants',
    privacy: 'Privacy',
    terms: 'Terms',
    rights: 'Akkraizen',
  },
  legal: {
    updated: 'Effective November 3, 2026',
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
            'calendar — Google Calendar, if you connect a Google account;',
            'steps, sleep and weight — Health Connect on Android, if you grant permission.',
          ],
        },
        {
          title: 'Health data',
          paragraphs: [
            'The Health section stores medications, intakes, readings such as blood pressure and pulse, wellbeing, sleep and steps together with your other records: on your devices and on your sync server. The developer does not receive them.',
            'Health Connect import is turned on separately in the settings and asks only for permission to read steps, sleep and weight. Berill writes nothing to Health Connect and does not share this data with third parties, use it for advertising or use it to train models. You can revoke access in the Health Connect settings or by turning off the import in Berill.',
            'Berill is not a medical device and does not diagnose anything. Medication reminders are a convenience and do not replace instructions from your doctor.',
          ],
        },
        {
          title: 'AI assistants (MCP)',
          paragraphs: [
            'The built-in MCP server is off by default. When you turn it on, it accepts connections only from your computer and only with a token you issued. The standalone berill-mcp server runs wherever you start it, as one more of your sync devices.',
            'Records an assistant reads over MCP are processed by the client and model service you chose, under their own terms. Berill itself does not send your data to any AI service.',
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
            "Some features use third-party services such as Google Calendar, Google Books, Open Food Facts or Health Connect, as well as AI assistants you connect over MCP. Their use is governed by those services' terms. By connecting a Google account, you also agree to Google's terms.",
          ],
        },
        {
          title: 'Not a medical device',
          paragraphs: ['The Health section helps you keep records and does not replace medical advice. Do not make medical decisions based only on data and reminders in Berill.'],
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
