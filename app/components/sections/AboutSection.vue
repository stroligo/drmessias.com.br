<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="sobre" class="scroll-mt-20 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeader
            :eyebrow="site.about.eyebrow"
            :title="site.about.title"
          />
          <div class="mt-6 space-y-4 text-sm leading-relaxed text-brand-800/80 sm:text-base">
            <p v-for="(p, i) in site.about.paragraphs" :key="i">{{ p }}</p>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <div
              v-for="stat in site.about.stats"
              :key="stat.label"
              class="rounded-xl border border-brand-900/8 bg-surface-muted px-4 py-3"
            >
              <p class="text-xs uppercase tracking-wide text-brand-800/55">
                {{ stat.label }}
              </p>
              <p class="mt-1 text-sm font-medium text-brand-900">{{ stat.value }}</p>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider text-gold-600">
              Experiência
            </h3>
            <ul class="mt-4 space-y-3">
              <li
                v-for="item in site.about.experience"
                :key="item"
                class="flex gap-3 text-sm text-brand-800/80"
              >
                <span
                  class="mt-2 size-1 shrink-0 rounded-full bg-gold-500"
                  aria-hidden="true"
                />
                {{ item }}
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider text-gold-600">
              Formação
            </h3>
            <ul class="mt-4 space-y-3">
              <li
                v-for="item in site.about.education"
                :key="item"
                class="flex gap-3 text-sm text-brand-800/80"
              >
                <span
                  class="mt-2 size-1 shrink-0 rounded-full bg-gold-500"
                  aria-hidden="true"
                />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
