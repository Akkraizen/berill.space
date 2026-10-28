<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { t, type Page } from '../content'
import AppIcon from './AppIcon.vue'

const props = defineProps<{ page: Exclude<Page, 'home'> }>()

const doc = computed(() => t.value.legal[props.page])

onMounted(() => window.scrollTo(0, 0))
</script>

<template>
  <main class="legal">
    <div class="container narrow">
      <a href="/" class="back">
        <AppIcon name="arrow" :size="18" class="back-icon" />
        {{ t.legal.back }}
      </a>
      <h1>{{ doc.title }}</h1>
      <p class="updated">{{ t.legal.updated }}</p>
      <p class="intro">{{ doc.intro }}</p>
      <section v-for="section in doc.sections" :key="section.title">
        <h2>{{ section.title }}</h2>
        <p v-for="(paragraph, i) in section.paragraphs" :key="i">{{ paragraph }}</p>
        <ul v-if="section.list">
          <li v-for="item in section.list" :key="item">{{ item }}</li>
        </ul>
      </section>
      <p class="contact">{{ t.legal.contact }}</p>
    </div>
  </main>
</template>

<style scoped>
.legal {
  padding: 48px 0 80px;
}

.narrow {
  max-width: 760px;
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--muted);
}

.back:hover {
  color: var(--primary);
}

.back-icon {
  transform: rotate(180deg);
}

h1 {
  margin: 24px 0 8px;
  font-size: clamp(32px, 5vw, 44px);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.updated {
  margin: 0 0 24px;
  color: var(--muted);
  font-size: 15px;
}

.intro {
  font-size: 18px;
}

section {
  margin-top: 32px;
}

h2 {
  margin: 0 0 12px;
  font-size: 22px;
  letter-spacing: -0.01em;
}

p,
li {
  line-height: 1.65;
  color: var(--text);
}

p {
  margin: 0 0 12px;
}

ul {
  margin: 0;
  padding-left: 22px;
}

li {
  margin-bottom: 6px;
}

.contact {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid color-mix(in srgb, var(--outline) 60%, transparent);
  font-weight: 600;
}
</style>
