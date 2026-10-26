<script setup lang="ts">
import { links, t } from '../content'
import AppIcon from './AppIcon.vue'
import AppMockup from './AppMockup.vue'
import BerillLogo from './BerillLogo.vue'
</script>

<template>
  <section id="top" class="hero">
    <div class="glow" aria-hidden="true" />
    <div class="container layout">
      <div class="copy">
        <div class="eyebrow">
          <BerillLogo :size="18" />
          {{ t.hero.eyebrow }}
        </div>
        <h1>
          {{ t.hero.title }}
          <span class="accent">{{ t.hero.accent }}</span>
        </h1>
        <p class="lead">{{ t.hero.lead }}</p>
        <div class="buttons">
          <a class="btn btn-primary" href="#download">
            <AppIcon name="download" :size="20" />
            {{ t.hero.primary }}
          </a>
          <a class="btn btn-outline" :href="links.repo" target="_blank" rel="noopener">
            <AppIcon name="github" :size="20" />
            {{ t.hero.secondary }}
          </a>
        </div>
        <ul class="chips">
          <li v-for="chip in t.hero.chips" :key="chip">
            <AppIcon name="check" :size="16" />
            {{ chip }}
          </li>
        </ul>
      </div>
      <div class="visual">
        <AppMockup />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 56px 0 96px;
  overflow: hidden;
}

.glow {
  position: absolute;
  inset: -20% -10% auto;
  height: 720px;
  background:
    radial-gradient(40% 50% at 78% 30%, color-mix(in srgb, var(--primary-container) 75%, transparent), transparent 70%),
    radial-gradient(30% 40% at 15% 10%, color-mix(in srgb, var(--tertiary-container) 70%, transparent), transparent 70%);
  pointer-events: none;
  opacity: 0.9;
}

.layout {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.08fr);
  align-items: center;
  gap: 56px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 10px;
  border-radius: 999px;
  background: var(--surface);
  box-shadow: var(--shadow);
  font-weight: 700;
  font-size: 14px;
  color: var(--muted);
}

h1 {
  margin-top: 24px;
  font-size: clamp(40px, 6.2vw, 72px);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.02;
}

.accent {
  display: block;
  background: linear-gradient(100deg, var(--primary), var(--tertiary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  margin-top: 24px;
  max-width: 560px;
  font-size: 19px;
  color: var(--muted);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
  font-weight: 600;
  font-size: 15px;
  color: var(--muted);
}

.chips li {
  display: flex;
  align-items: center;
  gap: 6px;
}

.chips :deep(.icon) {
  color: var(--primary);
}

.visual {
  min-width: 0;
  padding-right: 18px;
}

@media (max-width: 960px) {
  .layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
  }
}

@media (max-width: 720px) {
  .hero {
    padding: 32px 0 56px;
  }

  .lead {
    font-size: 17px;
  }

  .buttons .btn {
    flex: 1 1 auto;
    justify-content: center;
  }

  .visual {
    padding-right: 6px;
  }
}
</style>
