<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { site } from '~/data/site'

const canonicalUrl = `${site.brand.url}/`

useSeoMeta({
  ogUrl: canonicalUrl,
  ogType: 'website',
  ogLocale: 'pt_BR',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})

const LandingTrustBar = defineAsyncComponent(
  () => import('~/components/landing/LandingTrustBar.vue'),
)
const LandingFocus = defineAsyncComponent(
  () => import('~/components/landing/LandingFocus.vue'),
)
const LandingServices = defineAsyncComponent(
  () => import('~/components/landing/LandingServices.vue'),
)
const LandingWhy = defineAsyncComponent(
  () => import('~/components/landing/LandingWhy.vue'),
)
const LandingProcess = defineAsyncComponent(
  () => import('~/components/landing/LandingProcess.vue'),
)
const LandingAbout = defineAsyncComponent(
  () => import('~/components/landing/LandingAbout.vue'),
)
const LandingFaq = defineAsyncComponent(
  () => import('~/components/landing/LandingFaq.vue'),
)
const LandingCta = defineAsyncComponent(
  () => import('~/components/landing/LandingCta.vue'),
)
const LandingFooter = defineAsyncComponent(
  () => import('~/components/landing/LandingFooter.vue'),
)
const LandingWhatsappFab = defineAsyncComponent(
  () => import('~/components/landing/LandingWhatsappFab.vue'),
)

function focusMainContent() {
  if (!import.meta.client) return
  nextTick(() => {
    document.getElementById('conteudo-principal')?.focus({ preventScroll: false })
  })
}
</script>

<template>
  <div class="min-h-screen bg-surface">
    <a href="#conteudo-principal" class="skip-to-main" @click="focusMainContent">
      Ir para o conteúdo principal
    </a>

    <LandingHeader />

    <main id="conteudo-principal" tabindex="-1">
      <LandingHero />
      <LandingTrustBar />
      <LandingFocus />
      <LandingServices />
      <LandingWhy />
      <LandingProcess />
      <LandingAbout />
      <LandingFaq />
      <LandingCta />
    </main>

    <LandingFooter />
    <LandingWhatsappFab />
  </div>
</template>
