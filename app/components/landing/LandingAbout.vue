<script setup lang="ts">
import { site } from '~/data/site'

const { revealRoot, isVisible } = useRevealSection()
</script>

<template>
  <section
    id="sobre"
    ref="revealRoot"
    class="scroll-mt-24 bg-surface py-20 md:py-24"
    :class="{ 'landing-section--visible': isVisible }"
  >
    <div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <LandingSectionHeader
            :eyebrow="site.about.eyebrow"
            :title="site.about.title"
          />
          <div class="landing-reveal-block mt-6 space-y-4 text-base leading-relaxed text-brand-800/80">
            <p v-for="(p, i) in site.about.paragraphs" :key="i">{{ p }}</p>
          </div>
          <div class="landing-reveal-stagger--ltr mt-10 grid gap-4 sm:grid-cols-3">
            <div
              v-for="(stat, i) in site.about.stats"
              :key="stat.label"
              class="landing-reveal-item rounded-premium border border-border bg-white px-4 py-3"
              :style="{ '--rv-i': i }"
            >
              <p class="text-xs uppercase tracking-wide text-brand-800/55">{{ stat.label }}</p>
              <p class="mt-1 text-sm font-medium text-brand-900">{{ stat.value }}</p>
            </div>
          </div>
        </div>

        <div class="landing-reveal-block space-y-10">
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider text-gold-600">Experiência</h3>
            <ul class="mt-4 space-y-3">
              <li
                v-for="item in site.about.experience"
                :key="item"
                class="flex gap-3 text-sm text-brand-800/80"
              >
                <span class="mt-2 size-1 shrink-0 rounded-full bg-gold-500" />
                {{ item }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-medium uppercase tracking-wider text-gold-600">Formação</h3>
            <ul class="mt-4 space-y-3">
              <li
                v-for="item in site.about.education"
                :key="item"
                class="flex gap-3 text-sm text-brand-800/80"
              >
                <span class="mt-2 size-1 shrink-0 rounded-full bg-gold-500" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
