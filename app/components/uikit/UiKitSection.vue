<script setup lang="ts">
defineProps<{
  id: string
  number: string
  title: string
  description?: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-28 pb-20 last:pb-0">
    <header class="mb-8 flex gap-5 border-b border-border pb-8">
      <span
        class="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 font-mono text-sm text-gold-600"
        aria-hidden="true"
      >
        {{ number }}
      </span>
      <div class="max-w-2xl">
        <h2 class="text-2xl font-medium tracking-tight text-brand-900 sm:text-[1.75rem]">
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="mt-2 text-sm leading-relaxed text-brand-800/70 sm:text-base"
        >
          {{ description }}
        </p>
      </div>
    </header>
    <slot />
  </section>
</template>
