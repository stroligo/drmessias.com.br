<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    dark?: boolean
    padding?: 'md' | 'lg'
    class?: string
  }>(),
  { padding: 'md', class: '' },
)
</script>

<template>
  <div
    :class="[
      'overflow-hidden rounded-2xl border',
      props.dark
        ? 'border-white/10 bg-brand-900 text-white'
        : 'border-border bg-white text-brand-900',
      props.padding === 'lg' ? 'p-8 sm:p-10' : 'p-6 sm:p-8',
      props.class,
    ]"
  >
    <header v-if="title || subtitle" class="mb-6">
      <p
        v-if="subtitle"
        :class="[
          'text-[11px] font-medium uppercase tracking-[0.18em]',
          props.dark ? 'text-gold-400' : 'text-gold-600',
        ]"
      >
        {{ subtitle }}
      </p>
      <h3
        v-if="title"
        :class="['mt-1 text-lg font-medium', props.dark ? 'text-white' : 'text-brand-900']"
      >
        {{ title }}
      </h3>
    </header>
    <slot />
  </div>
</template>
