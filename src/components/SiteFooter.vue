<script setup lang="ts">
import { links, t } from '../content'
import BerillLogo from './BerillLogo.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container bar">
      <div class="brand">
        <BerillLogo :size="24" />
        <div>
          <strong>Berill</strong>
          <span>{{ t.footer.tagline }}</span>
        </div>
      </div>
      <nav class="links">
        <a :href="links.repo" target="_blank" rel="noopener">{{ t.footer.source }}</a>
        <a :href="links.releases" target="_blank" rel="noopener">{{ t.footer.releases }}</a>
        <a :href="links.deploy" target="_blank" rel="noopener">{{ t.footer.deploy }}</a>
        <a :href="links.releasing" target="_blank" rel="noopener">{{ t.footer.releasing }}</a>
        <a :href="links.plugins" target="_blank" rel="noopener">{{ t.footer.plugins }}</a>
        <a href="/#faq">{{ t.nav[t.nav.length - 1]?.label }}</a>
        <a href="/privacy">{{ t.footer.privacy }}</a>
        <a href="/terms">{{ t.footer.terms }}</a>
      </nav>
      <span class="copy">© {{ year }} {{ t.footer.rights }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 40px 0;
  border-top: 1px solid color-mix(in srgb, var(--outline) 60%, transparent);
}

.bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand div {
  display: flex;
  flex-direction: column;
}

.brand span {
  color: var(--muted);
  font-size: 14px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: auto;
  font-weight: 600;
  font-size: 15px;
}

.links a:hover {
  color: var(--primary);
}

.copy {
  color: var(--muted);
  font-size: 14px;
}

@media (max-width: 720px) {
  .links {
    margin-left: 0;
  }
}
</style>
