<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href: string
    variant?: 'primary' | 'accent' | 'outline' | 'outline-light' | 'ghost'
    external?: boolean
    size?: 'md' | 'lg'
    class?: string
  }>(),
  {
    variant: 'primary',
    external: true,
    size: 'md',
    class: '',
  },
)

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500'

  const sizes = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm sm:text-base',
  }

  const variants = {
    primary:
      'bg-brand-900 text-white hover:bg-brand-800 shadow-soft',
    accent:
      'bg-gold-500 text-brand-900 hover:bg-gold-400 shadow-soft',
    outline:
      'border border-gold-500 text-gold-500 bg-transparent hover:bg-gold-500/10',
    'outline-light':
      'border border-white/30 text-white bg-transparent hover:border-gold-500/60 hover:bg-white/5',
    ghost:
      'text-brand-800 hover:text-brand-900 underline-offset-4 hover:underline',
  }

  return [base, sizes[props.size], variants[props.variant], props.class]
    .filter(Boolean)
    .join(' ')
})
</script>

<template>
  <a
    :href="href"
    :class="classes"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>
