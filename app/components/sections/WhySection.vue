<script setup lang="ts">
import { site } from '~/data/site'

const { generalLink } = useWhatsApp()
</script>

<template>
  <section id="diferenciais" class="scroll-mt-20 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-start">
        <SectionHeader
          :eyebrow="site.why.eyebrow"
          :title="site.why.title"
          :description="site.why.description"
        />

        <div class="space-y-4 lg:mt-14">
          <article
            v-for="item in site.why.items"
            :key="item.title"
            class="rounded-2xl border border-brand-900/8 bg-white p-5"
          >
            <h3 class="font-medium text-brand-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-brand-800/75">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>

      <div class="mt-12 text-center">
        <BaseButton :href="generalLink('agendar minha consulta')">
          Agendar consulta
        </BaseButton>
      </div>
    </div>
  </section>
</template>
