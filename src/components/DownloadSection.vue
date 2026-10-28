<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { downloadUrl, links, t, type DownloadPlatform } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
import BerillLogo from './BerillLogo.vue'

interface LatestRelease {
  version: string
  windows?: string
  android?: string
}

const release = ref<LatestRelease | null>(null)
const loaded = ref(false)

onMounted(async () => {
  try {
    const response = await fetch(`${links.updates}/api/release`, { cache: 'no-store' })
    if (response.status === 204) {
      loaded.value = true
    } else if (response.ok) {
      release.value = await response.json()
      loaded.value = true
    }
  } catch {
    loaded.value = false
  }
})

const available = (platform: DownloadPlatform) => !loaded.value || Boolean(release.value?.[platform])

const version = computed(() => (release.value ? t.value.download.version.replace('{version}', release.value.version) : null))

const options = computed(() => [
  { platform: 'windows' as const, icon: 'desktop' as const, text: t.value.download.windows, style: 'btn-primary', primary: true },
  { platform: 'android' as const, icon: 'phone' as const, text: t.value.download.android, style: 'btn-tonal', primary: false },
])
</script>

<template>
  <section id="download" class="section download">
    <div class="container">
      <div v-reveal class="head">
        <BerillLogo :size="64" />
        <h2>{{ t.download.title }}</h2>
        <p>{{ t.download.lead }}</p>
      </div>
      <div class="grid">
        <article
          v-for="(option, i) in options"
          :key="option.platform"
          v-reveal="i * 80"
          class="option"
          :class="{ primary: option.primary }"
        >
          <AppIcon :name="option.icon" :size="30" />
          <h3>{{ option.text.title }}</h3>
          <p>{{ option.text.text }}</p>
          <span v-if="version && available(option.platform)" class="version">{{ version }}</span>
          <a v-if="available(option.platform)" class="btn" :class="option.style" :href="downloadUrl(option.platform)">
            <AppIcon name="download" :size="20" />
            {{ option.text.action }}
          </a>
          <span v-else class="btn btn-outline disabled" aria-disabled="true">{{ t.download.unavailable }}</span>
        </article>
        <article v-reveal="160" class="option">
          <AppIcon name="server" :size="30" />
          <h3>{{ t.download.server.title }}</h3>
          <p>{{ t.download.server.text }}</p>
          <a class="btn btn-outline" :href="links.deploy" target="_blank" rel="noopener">
            {{ t.download.server.action }}
            <AppIcon name="arrow" :size="20" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download {
  background:
    radial-gradient(50% 60% at 50% 0%, color-mix(in srgb, var(--primary-container) 55%, transparent), transparent 70%),
    var(--surface-low);
}

.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}

.head h2 {
  margin-top: 24px;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
}

.head p {
  margin-top: 14px;
  color: var(--muted);
  font-size: 19px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.option {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 28px;
  border-radius: var(--radius-l);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.option.primary {
  box-shadow:
    0 0 0 2px var(--primary),
    var(--shadow);
}

.option :deep(.icon) {
  color: var(--primary);
}

.option .btn :deep(.icon) {
  color: inherit;
}

h3 {
  margin-top: 8px;
  font-size: 22px;
  font-weight: 800;
}

.option p {
  color: var(--muted);
  flex: 1;
}

.option .btn {
  margin-top: 16px;
  justify-content: center;
}

.version {
  margin-top: 8px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 600;
}

.version + .btn {
  margin-top: 8px;
}

.btn.disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
