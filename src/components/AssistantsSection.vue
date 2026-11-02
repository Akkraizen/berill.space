<script setup lang="ts">
import { links, t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
import BerillLogo from './BerillLogo.vue'
</script>

<template>
  <section id="assistants" class="section">
    <div class="container layout">
      <div>
        <div v-reveal class="section-head">
          <h2>{{ t.assistants.title }}</h2>
          <p>{{ t.assistants.lead }}</p>
        </div>
        <div class="points">
          <article v-for="(point, i) in t.assistants.points" :key="point.title" v-reveal="i * 70" class="point">
            <span class="badge"><AppIcon :name="point.icon" :size="22" /></span>
            <div>
              <h3>{{ point.title }}</h3>
              <p>{{ point.text }}</p>
            </div>
          </article>
        </div>
      </div>

      <div v-reveal="120" class="side">
        <div class="chat" aria-hidden="true">
          <div class="bubble user">{{ t.assistants.chat.question }}</div>
          <div class="calls">
            <span v-for="tool in t.assistants.chat.tools" :key="tool" class="call">
              <BerillLogo :size="14" />
              {{ tool }}
              <AppIcon name="check" :size="14" />
            </span>
          </div>
          <div class="bubble assistant">
            <AppIcon name="ai" :size="18" />
            <span>{{ t.assistants.chat.answer }}</span>
          </div>
        </div>
        <div class="clients">
          <h3>{{ t.assistants.clientsTitle }}</h3>
          <ul>
            <li v-for="client in t.assistants.clients" :key="client">{{ client }}</li>
          </ul>
          <a class="link" :href="links.mcp" target="_blank" rel="noopener">
            {{ t.assistants.docs }}
            <AppIcon name="arrow" :size="18" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
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
  background: var(--tertiary-container);
  color: var(--on-tertiary-container);
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

.side {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chat {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px;
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.bubble {
  max-width: 88%;
  padding: 12px 16px;
  border-radius: 20px;
  font-size: 15px;
  line-height: 1.5;
}

.user {
  align-self: flex-end;
  border-bottom-right-radius: 6px;
  background: var(--primary);
  color: var(--on-primary);
}

.assistant {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  align-self: flex-start;
  border-bottom-left-radius: 6px;
  background: var(--surface-high);
}

.assistant :deep(.icon) {
  flex: none;
  margin-top: 2px;
  color: var(--tertiary);
}

.calls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.call {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1.5px dashed var(--outline);
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
}

.call :deep(.icon) {
  color: var(--primary);
}

.clients {
  padding: 22px;
  border-radius: var(--radius-l);
  background: var(--tertiary-container);
  color: var(--on-tertiary-container);
}

.clients h3 {
  font-size: 17px;
  font-weight: 800;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}

li {
  padding: 6px 12px;
  border-radius: 999px;
  background: color-mix(in srgb, currentColor 10%, transparent);
  font-size: 14px;
  font-weight: 600;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  font-weight: 700;
  border-bottom: 2px solid color-mix(in srgb, currentColor 40%, transparent);
  padding-bottom: 2px;
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

  .bubble {
    max-width: 100%;
  }
}
</style>
