<script setup lang="ts">
import { t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section id="desktop" class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <h2>{{ t.desktop.title }}</h2>
        <p>{{ t.desktop.lead }}</p>
      </div>
      <div class="grid">
        <article v-for="(point, i) in t.desktop.points" :key="point.title" v-reveal="(i % 3) * 70" class="card item">
          <AppIcon :name="point.icon" :size="26" />
          <h3>{{ point.title }}</h3>
          <p>{{ point.text }}</p>
          <div v-if="point.icon === 'keyboard'" class="keys" aria-hidden="true">
            <kbd>Ctrl</kbd><span>+</span><kbd>Alt</kbd><span>+</span><kbd>B</kbd>
          </div>
        </article>
      </div>
      <div class="wide">
        <article v-for="point in [t.desktop.android, t.desktop.updates]" :key="point.title" v-reveal class="banner">
          <span class="badge"><AppIcon :name="point.icon" :size="26" /></span>
          <div>
            <h3>{{ point.title }}</h3>
            <p>{{ point.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.item {
  padding: 24px;
}

.item :deep(.icon) {
  color: var(--primary);
}

h3 {
  margin-top: 14px;
  font-size: 18px;
  font-weight: 800;
}

p {
  margin-top: 6px;
  color: var(--muted);
  font-size: 15px;
}

.keys {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  color: var(--muted);
}

kbd {
  padding: 4px 10px;
  border-radius: 8px;
  background: var(--surface-high);
  box-shadow: inset 0 -2px 0 var(--outline);
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
}

.wide {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.banner {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 24px;
  border-radius: var(--radius-l);
  background: var(--secondary-container);
  color: var(--on-secondary-container);
}

.banner h3 {
  margin: 0;
}

.banner p {
  color: inherit;
  opacity: 0.85;
}

.badge {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: color-mix(in srgb, currentColor 12%, transparent);
  flex: none;
}

@media (max-width: 960px) {
  .wide {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 720px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 560px) {
  .banner {
    align-items: flex-start;
  }
}
</style>
