<script setup lang="ts">
import { site } from '~/data/site'

const open = ref(false)
const { generalLink, hasWhatsApp } = useWhatsApp()
const config = useRuntimeConfig()
const publicPath = usePublicPath()

const shellRef = ref<HTMLElement | null>(null)
const spacerHeight = ref(4.75 * 16)
const scrolled = ref(false)
const headerHidden = ref(false)

let lastScrollY = 0
let ticking = false

const links = site.nav
const SCROLL_TOP_ALWAYS_VISIBLE = 48
const SCROLL_DELTA = 4

function getScrollY() {
  if (!import.meta.client) return 0
  return window.scrollY ?? document.documentElement.scrollTop ?? 0
}

function measureShell() {
  if (!shellRef.value) return
  spacerHeight.value = shellRef.value.offsetHeight
}

function updateHeaderOnScroll() {
  ticking = false
  const y = Math.max(0, getScrollY())
  scrolled.value = y > 24

  if (open.value) {
    headerHidden.value = false
    lastScrollY = y
    return
  }

  if (y <= SCROLL_TOP_ALWAYS_VISIBLE) {
    headerHidden.value = false
  } else if (y > lastScrollY + SCROLL_DELTA) {
    headerHidden.value = true
  } else if (y < lastScrollY - SCROLL_DELTA) {
    headerHidden.value = false
  }

  lastScrollY = y
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(updateHeaderOnScroll)
}

function closeMenu() {
  open.value = false
}

let resizeObserver: ResizeObserver | undefined

onMounted(() => {
  lastScrollY = getScrollY()
  scrolled.value = lastScrollY > 24
  headerHidden.value = false

  nextTick(() => {
    measureShell()
    if (shellRef.value) {
      resizeObserver = new ResizeObserver(measureShell)
      resizeObserver.observe(shellRef.value)
    }
  })

  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('scroll', onScroll, { passive: true })
})

function onMenuEscape(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    e.preventDefault()
    open.value = false
  }
}

watch(open, (isOpen) => {
  headerHidden.value = false
  nextTick(measureShell)
  if (!import.meta.client) return
  document.body.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) document.addEventListener('keydown', onMenuEscape)
  else document.removeEventListener('keydown', onMenuEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('scroll', onScroll)
  resizeObserver?.disconnect()
  if (import.meta.client) {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', onMenuEscape)
  }
})

const compact = computed(() => scrolled.value && !open.value)
const barHidden = computed(() => headerHidden.value && !open.value)

const ctaHref = computed(() =>
  hasWhatsApp.value ? generalLink() : (config.public.doctoraliaUrl as string),
)
</script>

<template>
  <div class="landing-header-root">
    <header
      ref="shellRef"
      class="landing-header-bar fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-transparent bg-white/95 backdrop-blur-lg"
      :class="{
        'landing-header-bar--hidden': barHidden,
        'landing-header-bar--scrolled': scrolled && !barHidden,
      }"
    >
      <div
        class="mx-auto flex max-w-content items-center justify-between transition-[padding,gap] duration-300 ease-out"
        :class="
          compact
            ? 'gap-3 px-4 py-2 sm:px-5 lg:gap-5 lg:px-6 xl:gap-6'
            : 'gap-4 px-4 py-3.5 sm:px-6 lg:gap-8 lg:px-8 md:py-4'
        "
      >
        <a
          href="#inicio"
          class="flex shrink-0 items-center transition-opacity hover:opacity-90"
          @click="closeMenu"
        >
          <img
            :src="publicPath(site.brand.logo)"
            :alt="site.brand.logoAlt"
            class="w-auto object-contain transition-[height] duration-300 ease-out"
            :class="compact ? 'h-7 sm:h-8 md:h-[2.375rem]' : 'h-10 sm:h-11 md:h-[3.25rem]'"
            width="200"
            height="52"
            decoding="async"
          />
        </a>

        <nav
          class="hidden items-center font-medium text-brand-900 lg:flex"
          :class="compact ? 'gap-6 text-xs xl:gap-7' : 'gap-8 text-sm xl:gap-10'"
          aria-label="Navegação principal"
        >
          <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="rounded-md transition-colors hover:text-gold-600"
            :class="compact ? 'py-0.5' : 'py-1'"
          >
            {{ l.label }}
          </a>
        </nav>

        <div class="flex items-center" :class="compact ? 'gap-1.5 sm:gap-2' : 'gap-2 sm:gap-3'">
          <WhatsappButton
            v-if="hasWhatsApp"
            class="hidden sm:inline-flex"
            :dense="compact"
            :href="ctaHref"
            label="Agendar consulta"
            variant="primary"
          />
          <BaseButton
            v-else
            class="!hidden sm:!inline-flex"
            :href="ctaHref"
            :size="compact ? 'md' : 'lg'"
          >
            Agendar consulta
          </BaseButton>

          <button
            type="button"
            class="inline-flex shrink-0 rounded-full text-brand-900 transition-[transform,padding] duration-300 ease-out hover:scale-[0.94] active:scale-[0.88] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 lg:hidden"
            :class="compact ? 'p-1.5' : 'p-2'"
            :aria-expanded="open"
            aria-controls="mobile-menu"
            :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
            @click="open = !open"
          >
            <svg
              v-if="!open"
              class="transition-[width,height] duration-300"
              :class="compact ? 'size-6' : 'size-7'"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="transition-[width,height] duration-300"
              :class="compact ? 'size-6' : 'size-7'"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <div
          v-if="open"
          id="mobile-menu"
          class="border-t border-border/60 bg-white/90 px-4 py-5 backdrop-blur-lg lg:hidden"
        >
          <nav
            class="flex flex-col gap-4 text-base font-medium text-brand-900"
            aria-label="Menu móvel"
          >
            <a
              v-for="l in links"
              :key="l.href"
              :href="l.href"
              class="border-b border-border pb-3 transition-colors hover:text-gold-600 last:border-0"
              @click="closeMenu"
            >
              {{ l.label }}
            </a>
            <WhatsappButton
              v-if="hasWhatsApp"
              class="mt-2 w-full justify-center"
              :href="ctaHref"
              label="Agendar no WhatsApp"
              variant="outline"
            />
            <BaseButton
              v-else
              class="mt-2 w-full justify-center"
              :href="ctaHref"
            >
              Agendar consulta
            </BaseButton>
          </nav>
        </div>
      </Transition>
    </header>

    <div
      class="pointer-events-none w-full shrink-0"
      aria-hidden="true"
      :style="{ height: `${spacerHeight}px` }"
    />
  </div>
</template>

<style scoped>
.landing-header-bar {
  transform: translate3d(0, 0, 0);
  transition:
    transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  will-change: transform;
  box-shadow: none;
}

.landing-header-bar--scrolled {
  border-color: rgb(217 217 214 / 0.7);
  box-shadow: 0 8px 30px rgb(6 38 59 / 0.08);
}

.landing-header-bar--hidden {
  transform: translate3d(0, -100%, 0);
  box-shadow: none;
  border-color: transparent;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .landing-header-bar {
    transition-duration: 0.01ms;
  }
}
</style>
