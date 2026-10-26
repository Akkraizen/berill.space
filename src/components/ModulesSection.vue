<script setup lang="ts">
import { t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'

const tones = ['primary', 'tertiary', 'secondary'] as const
</script>

<template>
  <section id="modules" class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <h2>{{ t.modules.title }}</h2>
        <p>{{ t.modules.lead }}</p>
      </div>
      <div class="grid">
        <article
          v-for="(item, i) in t.modules.items"
          :key="item.icon"
          v-reveal="(i % 4) * 60"
          class="card module"
          :data-tone="tones[i % 3]"
        >
          <span class="badge"><AppIcon :name="item.icon" :size="26" /></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.module {
  padding: 24px;
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.module:hover {
  transform: translateY(-4px);
}

.badge {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 18px;
}

[data-tone='primary'] .badge {
  background: var(--primary-container);
  color: var(--on-primary-container);
}

[data-tone='tertiary'] .badge {
  background: var(--tertiary-container);
  color: var(--on-tertiary-container);
}

[data-tone='secondary'] .badge {
  background: var(--secondary-container);
  color: var(--on-secondary-container);
}

h3 {
  margin-top: 18px;
  font-size: 19px;
  font-weight: 800;
}

p {
  margin-top: 8px;
  color: var(--muted);
  font-size: 15px;
}

@media (max-width: 1040px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .module {
    padding: 18px;
  }
}

@media (max-width: 420px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
