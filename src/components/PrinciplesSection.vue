<script setup lang="ts">
import { t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section class="principles">
    <div class="container grid">
      <article v-for="(item, i) in t.principles" :key="item.title" v-reveal="i * 80" class="item">
        <span class="badge"><AppIcon :name="item.icon" /></span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.principles {
  padding-bottom: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.item {
  padding: 24px;
  border-radius: var(--radius-l);
  background: var(--surface-mid);
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
  font-size: 19px;
  font-weight: 800;
}

p {
  margin-top: 8px;
  color: var(--muted);
  font-size: 15px;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
