<script setup lang="ts">
const props = defineProps<{
  name: string
  hex: string
  token?: string
  tw?: string
  role?: string
  rgb?: string
  dark?: boolean
  ring?: boolean
  large?: boolean
}>()

const copied = ref(false)

async function copyHex() {
  try {
    await navigator.clipboard.writeText(props.hex)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1600)
  } catch {
    /* clipboard indisponível */
  }
}
</script>

<template>
  <button
    type="button"
    class="group w-full overflow-hidden rounded-2xl border border-border bg-white text-left transition hover:border-gold-500/40 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
    @click="copyHex"
  >
    <div
      class="relative flex flex-col justify-end transition group-hover:brightness-[1.02]"
      :class="large ? 'h-36 sm:h-44' : 'h-24'"
      :style="{ backgroundColor: hex }"
    >
      <div
        v-if="ring"
        class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brand-900/8"
      />
      <div class="flex items-end justify-between gap-2 p-4">
        <span
          class="font-mono text-sm font-medium"
          :class="dark ? 'text-brand-900' : 'text-white'"
        >
          {{ hex }}
        </span>
        <span
          class="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider opacity-0 transition group-hover:opacity-100"
          :class="dark ? 'bg-brand-900/10 text-brand-900' : 'bg-white/20 text-white'"
        >
          {{ copied ? 'Copiado' : 'Copiar' }}
        </span>
      </div>
    </div>
    <div class="space-y-1 p-4">
      <p class="font-medium text-brand-900">{{ name }}</p>
      <p v-if="role" class="text-sm text-brand-800/65">{{ role }}</p>
      <div class="flex flex-wrap gap-2 pt-2 font-mono text-[10px] text-gold-600">
        <span v-if="token">{{ token }}</span>
        <span v-if="tw" class="text-brand-800/45">· {{ tw }}</span>
        <span v-if="rgb" class="text-brand-800/45">· rgb({{ rgb }})</span>
      </div>
    </div>
  </button>
</template>
