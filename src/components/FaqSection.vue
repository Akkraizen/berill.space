<script setup lang="ts">
import { t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section id="faq" class="section">
    <div class="container layout">
      <div v-reveal class="section-head">
        <h2>{{ t.faq.title }}</h2>
      </div>
      <div class="list">
        <details v-for="(item, i) in t.faq.items" :key="item.q" v-reveal="i * 50" class="item" :open="i === 0">
          <summary>
            <span>{{ item.q }}</span>
            <AppIcon name="arrow" :size="20" />
          </summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
  gap: 48px;
}

.list {
  display: grid;
  gap: 10px;
}

.item {
  border-radius: var(--radius-m);
  background: var(--surface-mid);
}

summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary :deep(.icon) {
  transform: rotate(90deg);
  transition: transform 0.25s;
  color: var(--primary);
}

.item[open] summary :deep(.icon) {
  transform: rotate(-90deg);
}

.item p {
  padding: 0 20px 20px;
  color: var(--muted);
}

@media (max-width: 860px) {
  .layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }
}
</style>
