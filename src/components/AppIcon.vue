<script setup lang="ts">
import type { IconName } from '../content/types'

defineProps<{ name: IconName; size?: number }>()

const paths: Record<IconName, string> = {
  notes: 'M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7M9 8h3',
  habits: 'M4 12l4 4 8-9M14 17l2 2 4-5',
  planner: 'M4 6h16v14H4zM4 10h16M8 3v5M16 3v5M8 14h3M8 17h6',
  workouts: 'M2 12h2M20 12h2M4 8v8M7 6v12M17 6v12M20 8v8M7 12h10',
  nutrition: 'M12 7c-3-3-8-1-7 5 1 5 4 9 7 8 3 1 6-3 7-8 1-6-4-8-7-5zM12 7c0-2 1-4 3-4',
  finance: 'M3 7h16a2 2 0 0 1 2 2v9H3zM3 7l12-4 2 4M16 13h2',
  books: 'M4 5c3-1 6-1 8 1v14c-2-2-5-2-8-1zM20 5c-3-1-6-1-8 1v14c2-2 5-2 8-1z',
  watching: 'M3 6h18v12H3zM10 9.5v5l4.5-2.5z',
  recipes: 'M5 11h14a7 7 0 0 1-14 0zM8 7c0-2 2-2 2-4M13 7c0-2 2-2 2-4M4 21h16',
  languages: 'M4 5h8M8 3v2M6 5c0 4 3 7 6 8M10 5c0 3-3 7-6 8M13 21l4-10 4 10M14.5 17h5',
  study: 'M2 9l10-5 10 5-10 5zM6 11v5c3 3 9 3 12 0v-5M22 9v6',
  projects: 'M3 4h5v16H3zM10 4h5v10h-5zM17 4h4v7h-4z',
  offline: 'M5 19h14a4 4 0 0 0 0-8 6 6 0 0 0-11.5-1.5A4.5 4.5 0 0 0 5 19zM9 14l2 2 4-4',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01M12 7h4M12 17h4',
  lock: 'M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3M12 15v2',
  puzzle: 'M9 4h3a2 2 0 1 1 4 0h3v5a2 2 0 1 1 0 4v6h-5a2 2 0 1 0-4 0H5v-6a2 2 0 1 0 0-4V4z',
  sync: 'M4 12a8 8 0 0 1 14-5l2 2M20 4v5h-5M20 12a8 8 0 0 1-14 5l-2-2M4 20v-5h5',
  status: 'M3 12h4l3-7 4 14 3-7h4',
  backup: 'M12 3v12M7 10l5 5 5-5M4 17v3h16v-3',
  update: 'M12 4v10M8 10l4 4 4-4M5 20h14M4 4h3M17 4h3',
  merge: 'M6 3v6a6 6 0 0 0 6 6h0a6 6 0 0 1 6 6M18 3v6a6 6 0 0 1-3 5M6 21v-3',
  tray: 'M3 13h5l2 3h4l2-3h5M5 5h14l2 8v6H3v-6z',
  power: 'M12 3v8M7 6a8 8 0 1 0 10 0',
  keyboard: 'M3 6h18v12H3zM7 10h.01M11 10h.01M15 10h.01M7 14h10',
  window: 'M3 5h18v14H3zM3 9h18M6 7h.01M9 7h.01',
  mouse: 'M7 9a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0zM12 4v5',
  phone: 'M7 2h10v20H7zM11 18h2',
  desktop: 'M3 4h18v12H3zM8 20h8M12 16v4',
  shield: 'M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6zM9 12l2 2 4-4',
  process: 'M4 4h7v7H4zM13 13h7v7h-7zM11 7h5a2 2 0 0 1 2 2v4M13 17H8a2 2 0 0 1-2-2v-4',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  download: 'M12 3v12M7 10l5 5 5-5M4 20h16',
  github:
    'M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  moon: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  check: 'M5 12l5 5 9-10',
}
</script>

<template>
  <svg
    class="icon"
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name]" />
  </svg>
</template>

<style scoped>
.icon {
  flex: none;
  display: block;
}
</style>
