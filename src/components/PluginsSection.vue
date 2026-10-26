<script setup lang="ts">
import { links, t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'

const manifest = `{
  "id": "counters",
  "name": "Counters",
  "permissions": {
    "network": ["api.example.com", "*.images.example.com"]
  }
}`
</script>

<template>
  <section id="plugins" class="section plugins">
    <div class="container layout">
      <div>
        <div v-reveal class="section-head">
          <h2>{{ t.plugins.title }}</h2>
          <p>{{ t.plugins.lead }}</p>
        </div>
        <div class="points">
          <article v-for="(point, i) in t.plugins.points" :key="point.title" v-reveal="i * 70" class="point">
            <span class="badge"><AppIcon :name="point.icon" :size="22" /></span>
            <div>
              <h3>{{ point.title }}</h3>
              <p>{{ point.text }}</p>
            </div>
          </article>
        </div>
        <a class="link" :href="links.plugins" target="_blank" rel="noopener">
          {{ t.plugins.docs }}
          <AppIcon name="arrow" :size="18" />
        </a>
      </div>

      <div v-reveal="120" class="sandbox" aria-hidden="true">
        <div class="host">
          <div class="label"><AppIcon name="window" :size="16" />Berill</div>
          <div class="process">
            <div class="label"><AppIcon name="process" :size="16" />plugin · counters</div>
            <pre>{{ manifest }}</pre>
          </div>
          <div class="gates">
            <span class="gate ok"><AppIcon name="check" :size="14" />api.example.com</span>
            <span class="gate no"><AppIcon name="close" :size="14" />evil.example</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  font-weight: 700;
  border-bottom: 2px solid color-mix(in srgb, currentColor 40%, transparent);
  padding-bottom: 2px;
}

.plugins {
  background: var(--surface-low);
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 56px;
  align-items: center;
}

.points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.point {
  display: flex;
  gap: 14px;
}

.badge {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: var(--secondary-container);
  color: var(--on-secondary-container);
  flex: none;
}

.point h3 {
  font-size: 17px;
  font-weight: 800;
}

.point p {
  margin-top: 4px;
  color: var(--muted);
  font-size: 15px;
}

.sandbox {
  padding: 18px;
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.host {
  padding: 18px;
  border-radius: var(--radius-l);
  border: 2px solid var(--outline);
}

.label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  color: var(--muted);
}

.process {
  margin-top: 14px;
  padding: 16px;
  border-radius: var(--radius-m);
  border: 2px dashed var(--primary);
  background: color-mix(in srgb, var(--primary-container) 35%, transparent);
}

.process .label {
  color: var(--primary);
}

pre {
  margin: 12px 0 0;
  font-family: var(--mono);
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

.gates {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.gate {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 600;
}

.gate.ok {
  background: var(--primary-container);
  color: var(--on-primary-container);
}

.gate.no {
  background: color-mix(in srgb, #ba1a1a 14%, transparent);
  color: #ba1a1a;
  text-decoration: line-through;
}

:root[data-theme='dark'] .gate.no {
  color: #ffb4ab;
}

@media (max-width: 960px) {
  .layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
}

@media (max-width: 560px) {
  .points {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
