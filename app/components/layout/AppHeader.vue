<script setup lang="ts">
import { site } from '~/data/site'

const open = ref(false)
const { generalLink } = useWhatsApp()

const closeMenu = () => {
  open.value = false
}

onMounted(() => {
  window.addEventListener('hashchange', closeMenu)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', closeMenu)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8"
    >
      <a href="#inicio" class="group shrink-0 transition opacity-95 hover:opacity-100">
        <AppLogo size="md" />
      </a>

      <nav class="hidden items-center gap-6 lg:flex" aria-label="Principal">
        <a
          v-for="item in site.nav"
          :key="item.href"
          :href="item.href"
          class="text-sm text-brand-800/80 transition hover:text-brand-900"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <BaseButton
          :href="generalLink()"
          class="!hidden sm:!inline-flex"
          size="md"
        >
          Agendar consulta
        </BaseButton>

        <button
          type="button"
          class="inline-flex rounded-lg p-2 text-brand-800 lg:hidden"
          :aria-expanded="open"
          aria-controls="menu-mobile"
          @click="open = !open"
        >
          <span class="sr-only">Menu</span>
          <svg
            v-if="!open"
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
          <svg
            v-else
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              d="M6 6l12 12M18 6L6 18"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-show="open"
      id="menu-mobile"
      class="border-t border-border bg-surface px-5 py-4 lg:hidden"
    >
      <nav class="flex flex-col gap-3" aria-label="Mobile">
        <a
          v-for="item in site.nav"
          :key="item.href"
          :href="item.href"
          class="py-1 text-sm text-brand-800"
          @click="open = false"
        >
          {{ item.label }}
        </a>
        <BaseButton :href="generalLink()" class="mt-2 w-full text-center">
          Agendar consulta
        </BaseButton>
      </nav>
    </div>
  </header>
</template>
