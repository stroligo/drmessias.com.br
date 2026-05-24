<script setup lang="ts">
import { site } from '~/data/site'

// null no SSR evita mismatch de hidratação no acordeão
const openIndex = ref<number | null>(null)
</script>

<template>
  <section id="duvidas" class="scroll-mt-20 bg-surface-muted py-16 lg:py-24">
    <div class="mx-auto max-w-3xl px-5 lg:px-8">
      <SectionHeader
        :eyebrow="site.faq.eyebrow"
        :title="site.faq.title"
        :description="site.faq.description"
        align="center"
      />

      <div class="mt-10 divide-y divide-brand-900/10 rounded-2xl border border-brand-900/8 bg-white">
        <div
          v-for="(item, index) in site.faq.items"
          :key="item.question"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-brand-900 sm:px-6 sm:text-base"
            :aria-expanded="openIndex === index"
            @click="openIndex = openIndex === index ? null : index"
          >
            {{ item.question }}
            <span
              class="shrink-0 text-gold-600 transition"
              :class="openIndex === index ? 'rotate-45' : ''"
              aria-hidden="true"
            >+</span>
          </button>
          <div
            v-show="openIndex === index"
            class="px-5 pb-4 text-sm leading-relaxed text-brand-800/75 sm:px-6"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
