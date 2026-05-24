<script setup lang="ts">
import { site } from '~/data/site'

const { serviceLink } = useWhatsApp()
</script>

<template>
  <section id="servicos" class="scroll-mt-20 bg-surface-muted py-16 lg:py-24">
    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <SectionHeader
        :eyebrow="site.services.eyebrow"
        :title="site.services.title"
        :description="site.services.description"
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in site.services.items"
          :key="service.title"
          class="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
        >
          <h3 class="text-lg font-medium text-brand-900">{{ service.title }}</h3>
          <p class="mt-3 flex-1 text-sm leading-relaxed text-brand-800/75">
            {{ service.description }}
          </p>
          <BaseButton
            :href="serviceLink(service.title)"
            variant="ghost"
            class="mt-6 !px-0 !text-gold-600"
          >
            Solicitar informações →
          </BaseButton>
        </article>
      </div>

      <p class="mt-10 text-center text-sm text-brand-800/60">
        Próximo passo: agende uma consulta para avaliar indicação, exames e plano
        individualizado.
      </p>
    </div>
  </section>
</template>
