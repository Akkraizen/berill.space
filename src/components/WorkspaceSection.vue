<script setup lang="ts">
import { t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section id="workspace" class="section workspace">
    <div class="container">
      <div v-reveal class="section-head">
        <h2>{{ t.workspace.title }}</h2>
        <p>{{ t.workspace.lead }}</p>
      </div>
      <div class="grid">
        <article v-for="(item, i) in t.workspace.items" :key="item.title" v-reveal="(i % 4) * 60" class="item">
          <span class="badge"><AppIcon :name="item.icon" :size="24" /></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <div v-if="item.icon === 'search'" class="keys" aria-hidden="true">
            <kbd>Ctrl</kbd><span>+</span><kbd>K</kbd>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.workspace {
  background: var(--surface-low);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.item {
  padding: 24px;
  border-radius: var(--radius-l);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.badge {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: var(--primary);
  color: var(--on-primary);
}

h3 {
  margin-top: 18px;
  font-size: 18px;
  font-weight: 800;
}

p {
  margin-top: 8px;
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

@media (max-width: 1040px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .item {
    padding: 20px;
  }
}
</style>
