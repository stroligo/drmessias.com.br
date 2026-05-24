<script setup lang="ts">
import { HeartHandshake, Shield, Sparkles, Stethoscope } from '@lucide/vue'
import { site } from '~/data/site'

const { revealRoot, isVisible } = useRevealSection()

const icons = [Shield, Stethoscope, Sparkles, HeartHandshake]
</script>

<template>
  <section
    ref="revealRoot"
    class="border-y border-border bg-white py-14 md:py-16"
    :class="{ 'landing-section--visible': isVisible }"
    aria-labelledby="trust-heading"
  >
    <div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <h2 id="trust-heading" class="sr-only">Pilares da marca</h2>
      <div class="landing-reveal-stagger--ltr grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <article
          v-for="(item, i) in site.pillars"
          :key="item.title"
          class="landing-reveal-item group flex flex-col rounded-premium border border-border/80 bg-gradient-to-br from-white to-surface px-7 pb-8 pt-9 shadow-soft hover:border-gold-500/35 hover:shadow-premium"
          :style="{ '--rv-i': i }"
        >
          <div
            class="mx-auto mb-6 flex size-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/20 via-gold-500/10 to-transparent text-gold-600 transition-transform duration-300 group-hover:scale-[1.04]"
          >
            <component :is="icons[i]" class="size-9 stroke-[1.35]" aria-hidden="true" />
          </div>
          <h3 class="text-center text-lg font-medium text-brand-900">{{ item.title }}</h3>
          <p class="mt-3 text-center text-sm leading-relaxed text-brand-800/70">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
