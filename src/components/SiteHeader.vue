<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { locale, setLocale, t } from '../content'
import { theme, toggleTheme } from '../theme'
import AppIcon from './AppIcon.vue'
import BerillLogo from './BerillLogo.vue'

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled, open }">
    <div class="container bar">
      <a href="/#top" class="brand" @click="open = false">
        <BerillLogo :size="28" />
        <span>Berill</span>
      </a>

      <nav class="nav" :aria-label="t.header.menu">
        <a v-for="item in t.nav" :key="item.id" :href="`/#${item.id}`" @click="open = false">{{ item.label }}</a>
      </nav>

      <div class="actions">
        <div class="lang" role="group" :aria-label="t.header.language">
          <button :class="{ active: locale === 'ru' }" :aria-pressed="locale === 'ru'" @click="setLocale('ru')">RU</button>
          <button :class="{ active: locale === 'en' }" :aria-pressed="locale === 'en'" @click="setLocale('en')">EN</button>
        </div>
        <button class="icon-btn" :aria-label="t.header.theme" :title="t.header.theme" @click="toggleTheme">
          <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" :size="20" />
        </button>
        <a class="btn btn-primary cta" href="/#download">{{ t.header.download }}</a>
        <button class="icon-btn burger" :aria-label="t.header.menu" :aria-expanded="open" @click="open = !open">
          <AppIcon :name="open ? 'close' : 'menu'" :size="22" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  transition: box-shadow 0.3s;
}

.header.scrolled,
.header.open {
  box-shadow: 0 1px 0 color-mix(in srgb, var(--outline) 60%, transparent);
}

.bar {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 21px;
  letter-spacing: -0.02em;
}

.nav {
  display: flex;
  gap: 4px;
  margin-left: 12px;
}

.nav a {
  padding: 8px 14px;
  border-radius: 999px;
  color: var(--muted);
  font-weight: 600;
  font-size: 15px;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.nav a:hover {
  background: var(--surface-high);
  color: var(--text);
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.lang {
  display: flex;
  padding: 3px;
  border-radius: 999px;
  background: var(--surface-high);
}

.lang button {
  border: 0;
  background: transparent;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  color: var(--muted);
  cursor: pointer;
}

.lang button.active {
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%);
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--text);
  cursor: pointer;
}

.icon-btn:hover {
  background: var(--surface-high);
}

.cta {
  height: 42px;
  padding: 0 20px;
  font-size: 15px;
}

.burger {
  display: none;
}

@media (max-width: 960px) {
  .nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 2px;
    margin: 0;
    padding: 8px 16px 20px;
    background: var(--bg);
    box-shadow: 0 12px 24px -16px rgb(0 0 0 / 30%);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 0.2s,
      transform 0.2s;
  }

  .open .nav {
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }

  .nav a {
    padding: 12px 14px;
    font-size: 17px;
  }

  .burger {
    display: grid;
  }
}

@media (max-width: 560px) {
  .bar {
    gap: 8px;
  }

  .cta {
    display: none;
  }
}
</style>
