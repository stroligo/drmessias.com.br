<script setup lang="ts">
import { site } from '~/data/site'

const { revealRoot, isVisible } = useRevealSection()
const { generalLink, hasWhatsApp } = useWhatsApp()
</script>

<template>
  <section
    ref="revealRoot"
    class="bg-brand-900 py-20 text-white md:py-24"
    :class="{ 'landing-section--visible': isVisible }"
  >
    <div class="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        :eyebrow="site.process.eyebrow"
        :title="site.process.title"
        :description="site.process.description"
        light
      />

      <ol class="landing-reveal-stagger--ltr mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="step in site.process.steps"
          :key="step.step"
          class="landing-reveal-item rounded-premium border border-white/10 bg-white/5 p-6"
          :style="{ '--rv-i': Number(step.step) - 1 }"
        >
          <span class="font-display text-4xl italic text-gold-500/90">{{ step.step }}</span>
          <h3 class="mt-4 font-medium text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-white/65">{{ step.description }}</p>
        </li>
      </ol>

      <div class="landing-reveal-block mt-12 flex flex-col items-center gap-4 text-center">
        <p class="max-w-xl text-sm text-white/60">
          O primeiro contato pode ser por WhatsApp ou Doctoralia — descreva sua situação e,
          se possível, tenha exames recentes em mãos.
        </p>
        <WhatsappButton
          v-if="hasWhatsApp"
          :href="generalLink('iniciar meu atendimento')"
          label="Iniciar atendimento"
          variant="accent"
          dark-offset
        />
        <BaseButton
          v-else
          :href="generalLink('iniciar meu atendimento')"
          variant="accent"
        >
          Iniciar atendimento
        </BaseButton>
      </div>
    </div>
  </section>
</template>
