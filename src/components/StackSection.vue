<script setup lang="ts">
import { links, t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section class="section stack">
    <div v-reveal class="container panel">
      <div class="copy">
        <h2>{{ t.stack.title }}</h2>
        <p>{{ t.stack.lead }}</p>
        <a class="link" :href="links.deploy" target="_blank" rel="noopener">
          {{ t.stack.docs }}
          <AppIcon name="arrow" :size="18" />
        </a>
      </div>
      <ul class="chips">
        <li v-for="item in t.stack.items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.stack {
  padding-top: 0;
}

.panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 40px;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
  border-radius: var(--radius-xl);
  background: var(--primary);
  color: var(--on-primary);
  max-width: calc(var(--max) - 48px);
}

h2 {
  font-size: clamp(28px, 3.6vw, 40px);
  font-weight: 800;
}

.copy p {
  margin-top: 12px;
  opacity: 0.88;
  font-size: 18px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  font-weight: 700;
  border-bottom: 2px solid color-mix(in srgb, currentColor 40%, transparent);
  padding-bottom: 2px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.chips li {
  padding: 10px 16px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--on-primary) 14%, transparent);
  font-weight: 700;
  font-size: 15px;
}

@media (max-width: 860px) {
  .panel {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }
}

@media (max-width: 720px) {
  .panel {
    width: calc(100% - 32px);
    padding: 28px 20px;
    border-radius: var(--radius-l);
  }
}
</style>
