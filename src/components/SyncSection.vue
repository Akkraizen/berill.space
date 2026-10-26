<script setup lang="ts">
import { t } from '../content'
import { vReveal } from '../reveal'
import AppIcon from './AppIcon.vue'
</script>

<template>
  <section id="sync" class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <h2>{{ t.sync.title }}</h2>
        <p>{{ t.sync.lead }}</p>
      </div>

      <div class="top">
        <div v-reveal class="diagram card" aria-hidden="true">
          <div class="node device pc">
            <AppIcon name="desktop" :size="26" />
            <span>{{ t.sync.devices.pc }}</span>
          </div>
          <div class="node server">
            <AppIcon name="server" :size="30" />
            <span>{{ t.sync.devices.server }}</span>
          </div>
          <div class="node device phone">
            <AppIcon name="phone" :size="26" />
            <span>{{ t.sync.devices.phone }}</span>
          </div>
          <svg class="links" viewBox="0 0 400 260">
            <path id="sync-link-pc" d="M90 70 C 160 70, 160 130, 200 130" />
            <path id="sync-link-phone" d="M310 190 C 240 190, 240 130, 200 130" />
            <rect class="packet" x="-6" y="-6" width="12" height="12" rx="4">
              <animateMotion dur="3.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                <mpath href="#sync-link-pc" />
              </animateMotion>
            </rect>
            <rect class="packet" x="-6" y="-6" width="12" height="12" rx="4">
              <animateMotion dur="3.2s" begin="1.6s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                <mpath href="#sync-link-phone" />
              </animateMotion>
            </rect>
          </svg>
          <span class="lock-chip"><AppIcon name="lock" :size="14" />{{ t.sync.devices.encrypted }}</span>
        </div>

        <ol class="steps">
          <li v-for="(step, i) in t.sync.steps" :key="step.title" v-reveal="i * 90" class="step">
            <span class="num">{{ i + 1 }}</span>
            <div class="step-body">
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
              <code v-if="step.code" class="cmd">{{ step.code }}</code>
            </div>
          </li>
        </ol>
      </div>

      <div class="points">
        <article v-for="(point, i) in t.sync.points" :key="point.title" v-reveal="(i % 3) * 70" class="point">
          <AppIcon :name="point.icon" :size="22" />
          <div>
            <h3>{{ point.title }}</h3>
            <p>{{ point.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.top {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
}

.diagram {
  position: relative;
  aspect-ratio: 400 / 260;
  align-self: center;
  width: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--primary-container) 60%, transparent), transparent 60%),
    var(--surface);
}

.links {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.links path {
  fill: none;
  stroke: var(--outline);
  stroke-width: 2;
  stroke-dasharray: 6 8;
  vector-effect: non-scaling-stroke;
  animation: dash 1.4s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: -28;
  }
}

.node {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  transform: translate(-50%, -50%);
}

.device {
  background: var(--secondary-container);
  color: var(--on-secondary-container);
}

.pc {
  left: 22.5%;
  top: 27%;
}

.phone {
  left: 77.5%;
  top: 73%;
}

.server {
  left: 50%;
  top: 50%;
  padding: 18px 22px;
  background: var(--primary);
  color: var(--on-primary);
  box-shadow: 0 16px 32px -14px color-mix(in srgb, var(--primary) 80%, transparent);
}

.packet {
  fill: var(--tertiary);
  stroke: none;
}

.lock-chip {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--tertiary-container);
  color: var(--on-tertiary-container);
  font-weight: 700;
  font-size: 13px;
}

.steps {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  min-width: 0;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.step {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: var(--radius-l);
  background: var(--surface-mid);
}

.num {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--on-primary);
  font-weight: 800;
  flex: none;
}

.step-body {
  min-width: 0;
}

.step h3 {
  font-size: 18px;
  font-weight: 800;
}

.step p {
  margin-top: 4px;
  color: var(--muted);
  font-size: 15px;
}

.cmd {
  display: block;
  margin-top: 10px;
  padding: 10px 14px;
  border-radius: var(--radius-s);
  background: var(--surface);
  overflow-wrap: anywhere;
  font-size: 13px;
}

.points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px 32px;
  margin-top: 56px;
}

.point {
  display: flex;
  gap: 14px;
}

.point :deep(.icon) {
  color: var(--primary);
  margin-top: 2px;
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

@media (max-width: 960px) {
  .top {
    grid-template-columns: minmax(0, 1fr);
  }

  .points {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .points {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 40px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .links path {
    animation: none;
  }

  .packet {
    display: none;
  }
}
</style>
