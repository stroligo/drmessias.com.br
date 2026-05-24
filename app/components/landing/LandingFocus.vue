<script setup lang="ts">
import { Activity, MapPin, ScanLine } from '@lucide/vue'
import { site } from '~/data/site'

const { revealRoot, isVisible } = useRevealSection()

const cards = [
  { icon: Activity, accent: 'from-gold-500/12 to-transparent' },
  { icon: ScanLine, accent: 'from-brand-900/6 to-transparent' },
  { icon: MapPin, accent: 'from-gold-500/10 to-transparent' },
] as const
</script>

<template>
  <section
    ref="revealRoot"
    class="focus-section relative scroll-mt-24 overflow-hidden bg-surface py-20 md:py-24"
    :class="{ 'landing-section--visible': isVisible }"
  >
    <div
      class="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-gold-500/[0.06] blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center landing-reveal-header">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
          {{ site.focus.eyebrow }}
        </p>
        <h2
          class="mt-3 font-display text-3xl font-medium tracking-tight text-brand-900 sm:text-[2rem]"
        >
          {{ site.focus.title }}
        </h2>
        <p class="mt-5 text-base leading-relaxed text-brand-800/75">
          {{ site.focus.description }}
        </p>
      </div>

      <!-- Destaques em linha (desktop) -->
      <ul
        class="landing-reveal-block mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-3"
      >
        <li
          v-for="tag in site.focus.highlights"
          :key="tag"
          class="rounded-full border border-border/90 bg-white px-3.5 py-2 text-xs text-brand-800/80 shadow-sm sm:px-4 sm:text-sm"
        >
          {{ tag }}
        </li>
      </ul>

      <!-- Três pilares — cards claros uniformes -->
      <div
        class="landing-reveal-stagger--alt mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3 sm:gap-6"
      >
        <article
          v-for="(card, i) in site.focus.cards"
          :key="card.title"
          class="landing-reveal-item group relative flex flex-col overflow-hidden rounded-xl border border-border/80 bg-white p-6 shadow-soft transition hover:border-gold-500/35 hover:shadow-[0_20px_50px_rgb(6_38_59/0.08)] sm:p-7"
          :style="{ '--rv-i': i }"
        >
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80"
            :class="cards[i]?.accent"
            aria-hidden="true"
          />

          <div class="relative">
            <div
              class="mb-5 flex size-11 items-center justify-center rounded-xl bg-white text-gold-600 shadow-sm ring-1 ring-gold-500/20"
            >
              <component
                :is="cards[i]?.icon ?? Activity"
                class="size-5"
                stroke-width="1.75"
                aria-hidden="true"
              />
            </div>

            <h3 class="text-lg font-medium leading-snug text-brand-900">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-brand-800/75">
              {{ card.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
