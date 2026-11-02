<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { downloadUrl, links, t, type DownloadPlatform } from '../content'
import type { DownloadText, IconName } from '../content/types'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
import BerillLogo from './BerillLogo.vue'

interface LatestRelease {
  version: string
  windows?: string
  macos?: string
  linuxDeb?: string
  linuxRpm?: string
  android?: string
}

type Os = 'windows' | 'macos' | 'linux' | 'android'

const fields: Record<DownloadPlatform, keyof LatestRelease> = {
  windows: 'windows',
  macos: 'macos',
  'linux-deb': 'linuxDeb',
  'linux-rpm': 'linuxRpm',
  android: 'android',
}

const release = ref<LatestRelease | null>(null)
const loaded = ref(false)
const os = ref<Os>('windows')

function detectOs(): Os {
  const agent = navigator.userAgent.toLowerCase()
  if (agent.includes('android')) return 'android'
  if (agent.includes('mac os') || agent.includes('macintosh')) return 'macos'
  if (agent.includes('linux') || agent.includes('x11')) return 'linux'
  return 'windows'
}

onMounted(async () => {
  os.value = detectOs()
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

const available = (platform: DownloadPlatform) => !loaded.value || Boolean(release.value?.[fields[platform]])

const version = computed(() => (release.value ? t.value.download.version.replace('{version}', release.value.version) : null))

interface Option {
  os: Os
  icon: IconName
  text: DownloadText
  actions: { platform: DownloadPlatform; label: string }[]
}

const options = computed<Option[]>(() => [
  { os: 'windows', icon: 'desktop', text: t.value.download.windows, actions: [{ platform: 'windows', label: t.value.download.windows.action }] },
  { os: 'macos', icon: 'laptop', text: t.value.download.macos, actions: [{ platform: 'macos', label: t.value.download.macos.action }] },
  {
    os: 'linux',
    icon: 'terminal',
    text: t.value.download.linux,
    actions: [
      { platform: 'linux-deb', label: t.value.download.linux.action },
      { platform: 'linux-rpm', label: t.value.download.linux.rpm },
    ],
  },
  { os: 'android', icon: 'phone', text: t.value.download.android, actions: [{ platform: 'android', label: t.value.download.android.action }] },
])

const anyAvailable = (option: Option) => option.actions.some((action) => available(action.platform))
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
          :key="option.os"
          v-reveal="i * 70"
          class="option"
          :class="{ primary: option.os === os }"
        >
          <AppIcon :name="option.icon" :size="30" />
          <h3>{{ option.text.title }}</h3>
          <p>{{ option.text.text }}</p>
          <span v-if="version && anyAvailable(option)" class="version">{{ version }}</span>
          <div v-if="anyAvailable(option)" class="buttons">
            <template v-for="(action, j) in option.actions" :key="action.platform">
              <a
                v-if="available(action.platform)"
                class="btn"
                :class="j > 0 ? 'btn-outline' : option.os === os ? 'btn-primary' : 'btn-tonal'"
                :href="downloadUrl(action.platform)"
              >
                <AppIcon name="download" :size="20" />
                {{ action.label }}
              </a>
            </template>
          </div>
          <span v-else class="btn btn-outline disabled" aria-disabled="true">{{ t.download.unavailable }}</span>
        </article>
      </div>
      <article v-reveal="200" class="server">
        <span class="badge"><AppIcon name="server" :size="28" /></span>
        <div>
          <h3>{{ t.download.server.title }}</h3>
          <p>{{ t.download.server.text }}</p>
        </div>
        <a class="btn btn-outline" :href="links.deploy" target="_blank" rel="noopener">
          {{ t.download.server.action }}
          <AppIcon name="arrow" :size="20" />
        </a>
      </article>
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
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

.buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.option .btn {
  justify-content: center;
  padding: 0 18px;
}

.option > .btn {
  margin-top: 16px;
}

.version {
  margin-top: 8px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 600;
}

.version + .buttons {
  margin-top: 8px;
}

.server {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
  padding: 24px 28px;
  border-radius: var(--radius-l);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.server > div {
  flex: 1;
}

.server h3 {
  margin: 0;
}

.server p {
  margin-top: 4px;
  color: var(--muted);
}

.server .badge {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: var(--secondary-container);
  color: var(--on-secondary-container);
  flex: none;
}

.btn.disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

@media (max-width: 1080px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .server {
    flex-direction: column;
    align-items: flex-start;
  }

  .server .btn {
    align-self: stretch;
    justify-content: center;
  }
}
</style>
