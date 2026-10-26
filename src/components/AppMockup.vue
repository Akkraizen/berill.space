<script setup lang="ts">
import { t } from '../content'
import type { IconName } from '../content/types'
import AppIcon from './AppIcon.vue'
import BerillLogo from './BerillLogo.vue'

const navIcons: IconName[] = ['desktop', 'notes', 'habits', 'planner', 'workouts', 'nutrition', 'finance']
</script>

<template>
  <div class="scene" aria-hidden="true">
    <div class="window">
      <div class="titlebar">
        <span class="dots"><i /><i /><i /></span>
        <span class="title">Berill</span>
        <span class="sync"><AppIcon name="sync" :size="13" />{{ t.mockup.syncState }}</span>
      </div>
      <div class="body">
        <aside class="sidebar">
          <div class="side-brand"><BerillLogo :size="20" /> Berill</div>
          <div v-for="(item, i) in t.mockup.nav" :key="item" class="side-item" :class="{ active: i === 0 }">
            <AppIcon :name="navIcons[i] ?? 'notes'" :size="15" />
            <span>{{ item }}</span>
          </div>
        </aside>
        <main class="main">
          <div class="greeting">{{ t.mockup.greeting }}</div>
          <div class="date">{{ t.mockup.date }}</div>
          <div class="grid">
            <section class="tile">
              <h4><AppIcon name="habits" :size="14" />{{ t.mockup.habitsTitle }}</h4>
              <div v-for="[label, done] in t.mockup.habits" :key="label" class="row">
                <span class="check" :class="{ done }"><AppIcon v-if="done" name="check" :size="11" /></span>
                <span :class="{ struck: done }">{{ label }}</span>
              </div>
            </section>
            <section class="tile kcal">
              <h4><AppIcon name="nutrition" :size="14" />{{ t.mockup.kcalTitle }}</h4>
              <div class="ring">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" class="track" />
                  <circle cx="50" cy="50" r="40" class="value" />
                </svg>
                <div class="ring-text">
                  <strong>{{ t.mockup.kcalValue }}</strong>
                  <span>{{ t.mockup.kcalHint }}</span>
                </div>
              </div>
            </section>
            <section class="tile">
              <h4><AppIcon name="planner" :size="14" />{{ t.mockup.planTitle }}</h4>
              <div v-for="[label, done] in t.mockup.plan" :key="label" class="row">
                <span class="check round" :class="{ done }"><AppIcon v-if="done" name="check" :size="11" /></span>
                <span :class="{ struck: done }">{{ label }}</span>
              </div>
            </section>
            <section class="tile">
              <h4><AppIcon name="workouts" :size="14" />{{ t.mockup.workoutTitle }}</h4>
              <div v-for="[name, plan] in t.mockup.workout" :key="name" class="row split">
                <span>{{ name }}</span>
                <span class="muted">{{ plan }}</span>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>

    <div class="phone">
      <div class="notch" />
      <div class="phone-bar">
        <span>{{ t.mockup.phoneTitle }}</span>
        <small>{{ t.mockup.workoutTitle }}</small>
      </div>
      <div class="phone-card">
        <strong>{{ t.mockup.phoneExercise }}</strong>
        <div v-for="[n, set, done] in t.mockup.phoneSets" :key="n" class="set" :class="{ done }">
          <span class="num">{{ n }}</span>
          <span>{{ set }}</span>
          <span class="check" :class="{ done }"><AppIcon v-if="done" name="check" :size="11" /></span>
        </div>
      </div>
      <div class="rest">
        <span class="pulse" />
        {{ t.mockup.phoneRest }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene {
  position: relative;
  padding: 0 0 48px;
  font-size: 12px;
  line-height: 1.4;
  user-select: none;
}

.window {
  border-radius: 18px;
  background: var(--surface-low);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--outline) 60%, transparent),
    0 40px 80px -30px rgb(0 0 0 / 35%);
  overflow: hidden;
}

.titlebar {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 34px;
  padding: 0 14px;
  background: var(--surface-mid);
}

.dots {
  display: flex;
  gap: 6px;
}

.dots i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--outline);
}

.title {
  font-weight: 700;
  color: var(--muted);
}

.sync {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: var(--primary);
  font-weight: 600;
  font-size: 11px;
}

.body {
  display: grid;
  grid-template-columns: 150px 1fr;
  min-height: 330px;
}

.sidebar {
  padding: 14px 10px;
  background: var(--surface-low);
  border-right: 1px solid color-mix(in srgb, var(--outline) 45%, transparent);
}

.side-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 14px;
  margin: 0 6px 14px;
}

.side-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 8px;
  border-radius: 999px;
  color: var(--muted);
  font-weight: 600;
}

.side-item.active {
  background: var(--secondary-container);
  color: var(--on-secondary-container);
}

.main {
  padding: 18px 18px 20px;
  background: var(--bg);
}

.greeting {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.date {
  color: var(--muted);
  margin-bottom: 14px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.tile {
  background: var(--surface);
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%);
}

.tile h4 {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 8px;
  font-size: 12px;
  color: var(--primary);
}

.row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
}

.row.split {
  justify-content: space-between;
}

.muted {
  color: var(--muted);
}

.struck {
  color: var(--muted);
  text-decoration: line-through;
}

.check {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 1.5px var(--outline);
  color: var(--on-primary);
  flex: none;
}

.check.round {
  border-radius: 50%;
}

.check.done {
  background: var(--primary);
  box-shadow: none;
}

.kcal .ring {
  position: relative;
  width: 108px;
  height: 108px;
  margin: 0 auto;
}

.ring svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.ring circle {
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
}

.ring .track {
  stroke: var(--surface-high);
}

.ring .value {
  stroke: var(--primary);
  stroke-dasharray: 251;
  stroke-dashoffset: 72;
  animation: fill 1.6s cubic-bezier(0.2, 0.8, 0.2, 1) both 0.4s;
}

@keyframes fill {
  from {
    stroke-dashoffset: 251;
  }
}

.ring-text {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  text-align: center;
}

.ring-text strong {
  font-size: 18px;
}

.ring-text span {
  color: var(--muted);
  font-size: 10px;
}

.phone {
  position: absolute;
  right: -18px;
  bottom: 0;
  width: 190px;
  padding: 26px 12px 14px;
  border-radius: 30px;
  background: var(--bg);
  box-shadow:
    0 0 0 6px var(--surface-high),
    0 0 0 7px color-mix(in srgb, var(--outline) 70%, transparent),
    0 30px 60px -20px rgb(0 0 0 / 45%);
  animation: float 6s ease-in-out infinite;
}

.notch {
  position: absolute;
  top: 9px;
  left: 50%;
  width: 54px;
  height: 8px;
  border-radius: 999px;
  background: var(--surface-high);
  transform: translateX(-50%);
}

.phone-bar {
  display: flex;
  flex-direction: column;
  margin: 0 4px 10px;
}

.phone-bar span {
  font-weight: 800;
  font-size: 15px;
}

.phone-bar small {
  color: var(--muted);
  font-size: 10px;
}

.phone-card {
  background: var(--surface);
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%);
}

.phone-card strong {
  display: block;
  margin-bottom: 6px;
}

.set {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
}

.set .num {
  color: var(--muted);
  font-weight: 700;
}

.set.done span:nth-child(2) {
  color: var(--muted);
}

.rest {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  padding: 8px;
  border-radius: 999px;
  background: var(--primary-container);
  color: var(--on-primary-container);
  font-weight: 700;
}

.pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  50% {
    transform: scale(1.6);
    opacity: 0.4;
  }
}

@keyframes float {
  50% {
    transform: translateY(-8px);
  }
}

@media (max-width: 720px) {
  .body {
    grid-template-columns: minmax(0, 1fr);
  }

  .sidebar {
    display: none;
  }

  .grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .tile:nth-child(n + 3) {
    display: none;
  }

  .phone {
    right: -6px;
    width: 150px;
    font-size: 11px;
  }

  .scene {
    padding-bottom: 72px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .phone,
  .pulse,
  .ring .value {
    animation: none;
  }
}
</style>
