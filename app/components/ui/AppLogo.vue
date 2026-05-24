<script setup lang="ts">
import { site } from '~/data/site'

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg' | 'xl'
    class?: string
  }>(),
  { size: 'md', class: '' },
)

const heightClass = computed(
  () =>
    ({
      sm: 'h-8',
      md: 'h-10 sm:h-11',
      lg: 'h-12 sm:h-14',
      xl: 'h-14 sm:h-[4.25rem]',
    })[props.size],
)
</script>

<template>
  <img
    :src="site.brand.logo"
    :alt="site.brand.logoAlt"
    :class="[heightClass, 'w-auto max-w-full object-contain object-left', props.class]"
    width="1694"
    height="395"
    decoding="async"
  />
</template>
