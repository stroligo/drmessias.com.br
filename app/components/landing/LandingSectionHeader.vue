<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  titleId?: string
  description?: string
  light?: boolean
}>()
</script>

<template>
  <div class="landing-reveal-header max-w-3xl">
    <p
      v-if="eyebrow"
      class="text-xs font-semibold uppercase tracking-[0.18em]"
      :class="light ? 'text-gold-400' : 'text-gold-600'"
    >
      {{ eyebrow }}
    </p>
    <h2
      :id="titleId"
      class="mt-3 text-2xl font-medium tracking-tight sm:text-3xl"
      :class="light ? 'text-white' : 'text-brand-900'"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-5 text-base leading-relaxed"
      :class="light ? 'text-white/70' : 'text-brand-800/75'"
    >
      {{ description }}
    </p>
  </div>
</template>
