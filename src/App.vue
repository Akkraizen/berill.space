<script setup lang="ts">
import DesktopSection from './components/DesktopSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import FaqSection from './components/FaqSection.vue'
import HeroSection from './components/HeroSection.vue'
import LegalPage from './components/LegalPage.vue'
import ModulesSection from './components/ModulesSection.vue'
import PluginsSection from './components/PluginsSection.vue'
import PrinciplesSection from './components/PrinciplesSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import StackSection from './components/StackSection.vue'
import SyncSection from './components/SyncSection.vue'
import { page } from './content'
</script>

<template>
  <SiteHeader />
  <LegalPage v-if="page !== 'home'" :page="page" />
  <main v-else>
    <HeroSection />
    <PrinciplesSection />
    <ModulesSection />
    <SyncSection />
    <PluginsSection />
    <DesktopSection />
    <StackSection />
    <FaqSection />
    <DownloadSection />
  </main>
  <SiteFooter />
</template>
