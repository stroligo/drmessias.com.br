<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    light?: boolean
    align?: 'left' | 'center'
  }>(),
  { align: 'left' },
)
</script>

<template>
  <div
    :class="[
      'max-w-3xl',
      align === 'center' ? 'mx-auto text-center' : '',
    ]"
  >
    <p
      v-if="eyebrow"
      :class="[
        'mb-3 text-xs font-medium uppercase tracking-[0.2em]',
        light ? 'text-gold-400' : 'text-gold-600',
      ]"
    >
      {{ eyebrow }}
    </p>
    <h2
      :class="[
        'text-3xl font-medium tracking-tight sm:text-4xl',
        light ? 'text-white' : 'text-brand-900',
      ]"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      :class="[
        'mt-4 text-base leading-relaxed sm:text-lg',
        light ? 'text-white/70' : 'text-brand-800/80',
      ]"
    >
      {{ description }}
    </p>
  </div>
</template>
