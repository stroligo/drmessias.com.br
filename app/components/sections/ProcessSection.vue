<script setup lang="ts">
import { site } from '~/data/site'

const { generalLink } = useWhatsApp()
</script>

<template>
  <section class="bg-brand-900 py-16 text-white lg:py-24">
    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <SectionHeader
        :eyebrow="site.process.eyebrow"
        :title="site.process.title"
        :description="site.process.description"
        light
      />

      <ol class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="step in site.process.steps"
          :key="step.step"
          class="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <span
            class="font-display text-4xl italic text-gold-500/90"
            aria-hidden="true"
          >{{ step.step }}</span>
          <h3 class="mt-4 font-medium text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-white/65">
            {{ step.description }}
          </p>
        </li>
      </ol>

      <div class="mt-12 flex flex-col items-center gap-4 text-center">
        <p class="max-w-xl text-sm text-white/60">
          O primeiro contato pode ser por WhatsApp ou Doctoralia — descreva sua
          situação e, se possível, tenha exames recentes em mãos.
        </p>
        <BaseButton
          :href="generalLink('iniciar meu atendimento')"
          variant="accent"
        >
          Iniciar atendimento
        </BaseButton>
      </div>
    </div>
  </section>
</template>
