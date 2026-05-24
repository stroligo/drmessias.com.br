<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="py-16 lg:py-24">
    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <SectionHeader
        :eyebrow="site.focus.eyebrow"
        :title="site.focus.title"
        :description="site.focus.description"
      />

      <ul class="mt-10 flex flex-wrap gap-2">
        <li
          v-for="tag in site.focus.highlights"
          :key="tag"
          class="rounded-full border border-brand-800/15 bg-white px-4 py-2 text-sm text-brand-800"
        >
          {{ tag }}
        </li>
      </ul>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="card in site.focus.cards"
          :key="card.title"
          class="rounded-2xl bg-brand-900 p-6 text-white"
        >
          <h3 class="text-lg font-medium text-gold-400">{{ card.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-white/70">
            {{ card.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
