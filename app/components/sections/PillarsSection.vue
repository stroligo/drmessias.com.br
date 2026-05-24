<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="border-b border-border bg-white py-16 lg:py-20">
    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="item in site.pillars"
          :key="item.title"
          class="rounded-2xl border border-brand-900/8 bg-surface p-6 transition hover:border-gold-500/30 hover:shadow-md hover:shadow-brand-900/5"
        >
          <h3 class="text-lg font-medium text-brand-900">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-brand-800/75">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
