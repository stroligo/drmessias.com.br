<script setup lang="ts">
import { site } from '~/data/site'

const { generalLink } = useWhatsApp()
const config = useRuntimeConfig()
</script>

<template>
  <section id="contato" class="scroll-mt-20 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <div
        class="overflow-hidden rounded-3xl bg-brand-900 px-6 py-12 text-center text-white sm:px-12 lg:py-16"
      >
        <div class="mx-auto mb-6 inline-block rounded-lg bg-white px-4 py-3">
          <AppLogo size="lg" />
        </div>
        <h2 class="text-2xl font-medium sm:text-3xl">
          {{ site.cta.title }}
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          {{ site.cta.description }}
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <BaseButton
            :href="generalLink('agendar consulta')"
            variant="accent"
            size="lg"
          >
            Agendar consulta
          </BaseButton>
          <BaseButton
            :href="config.public.instagramUrl"
            variant="outline-light"
            size="lg"
          >
            Instagram
          </BaseButton>
        </div>

        <div class="mt-12 grid gap-6 text-left sm:grid-cols-3">
          <div
            v-for="loc in site.locations"
            :key="loc.name"
            class="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <p class="text-sm font-medium text-gold-400">{{ loc.name }}</p>
            <p class="mt-1 text-xs leading-relaxed text-white/65">{{ loc.address }}</p>
            <p class="text-xs text-white/45">CEP {{ loc.zip }}</p>
          </div>
        </div>

        <p class="mt-8 text-xs text-white/40">
          Conteúdo informativo. Consulte sempre um médico para diagnóstico e tratamento.
        </p>
      </div>
    </div>
  </section>
</template>
