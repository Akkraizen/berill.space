<script setup lang="ts">
import AssistantsSection from './components/AssistantsSection.vue'
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
import WorkspaceSection from './components/WorkspaceSection.vue'
import { page } from './content'
</script>

<template>
  <SiteHeader />
  <LegalPage v-if="page !== 'home'" :page="page" />
  <main v-else>
    <HeroSection />
    <PrinciplesSection />
    <ModulesSection />
    <WorkspaceSection />
    <AssistantsSection />
    <SyncSection />
    <PluginsSection />
    <DesktopSection />
    <StackSection />
    <FaqSection />
    <DownloadSection />
  </main>
  <SiteFooter />
</template>
