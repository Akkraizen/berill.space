import { computed, ref, watch } from 'vue'
import { en } from './en'
import { ru } from './ru'
import type { Content } from './types'

export type Locale = 'ru' | 'en'

export const links = {
  repo: 'https://github.com/Akkraizen/Berill',
  releases: 'https://github.com/Akkraizen/Berill/releases/latest',
  deploy: 'https://github.com/Akkraizen/Berill/blob/master/docs/DEPLOY.md',
  releasing: 'https://github.com/Akkraizen/Berill/blob/master/docs/RELEASES.md',
  plugins: 'https://github.com/Akkraizen/Berill/blob/master/docs/EXTERNAL_PLUGINS.md',
  updates: 'https://updates.berill.space',
}

export type Page = 'home' | 'privacy' | 'terms'

function currentPage(): Page {
  if (typeof window === 'undefined') return 'home'
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/privacy') return 'privacy'
  if (path === '/terms') return 'terms'
  return 'home'
}

export const page: Page = currentPage()

export type DownloadPlatform = 'windows' | 'android'

export const downloadUrl = (platform: DownloadPlatform) => `${links.updates}/download/latest/${platform}`

const dictionaries: Record<Locale, Content> = { ru, en }
const STORAGE_KEY = 'berill.locale'

function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ru' || saved === 'en') return saved
  } catch {
    return fallbackLocale()
  }
  return fallbackLocale()
}

function fallbackLocale(): Locale {
  const browser = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'ru'
  return browser.startsWith('ru') || browser.startsWith('uk') || browser.startsWith('be') ? 'ru' : 'en'
}

export const locale = ref<Locale>(initialLocale())

export const t = computed<Content>(() => dictionaries[locale.value])

export function setLocale(value: Locale) {
  locale.value = value
}

watch(
  locale,
  (value) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = value
      const content = dictionaries[value]
      document.title = page === 'home' ? content.meta.title : `${content.legal[page].title} — Berill`
      document.querySelector('meta[name="description"]')?.setAttribute('content', dictionaries[value].meta.description)
    }
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      return
    }
  },
  { immediate: true },
)
