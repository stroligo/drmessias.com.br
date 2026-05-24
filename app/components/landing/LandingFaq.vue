<script setup lang="ts">
import { site } from '~/data/site'

const { revealRoot, isVisible } = useRevealSection()
const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

function panelId(index: number) {
  return `faq-panel-${index}`
}

function triggerId(index: number) {
  return `faq-trigger-${index}`
}
</script>

<template>
  <section
    id="duvidas"
    ref="revealRoot"
    class="faq-section relative scroll-mt-24 overflow-hidden bg-surface py-20 md:py-24"
    :class="{ 'landing-section--visible': isVisible }"
  >
    <div
      class="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-gold-500/[0.07] blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-brand-900/[0.04] blur-2xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
        <!-- Cabeçalho -->
        <div class="landing-reveal-header lg:col-span-4 lg:self-start xl:col-span-5">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
            {{ site.faq.eyebrow }}
          </p>
          <h2 class="mt-3 font-display text-3xl font-medium tracking-tight text-brand-900 sm:text-[2rem]">
            {{ site.faq.title }}
          </h2>
          <p class="mt-5 text-base leading-relaxed text-brand-800/75">
            {{ site.faq.description }}
          </p>

          <div
            class="mt-8 hidden rounded-xl border border-gold-500/20 bg-gold-500/[0.06] px-4 py-3.5 text-sm leading-relaxed text-brand-800/70 lg:block"
          >
            <span class="font-medium text-brand-900">Importante:</span>
            as respostas abaixo são orientações gerais. O plano de tratamento é definido
            somente após avaliação médica.
          </div>
        </div>

        <!-- Acordeão -->
        <div class="landing-reveal-block space-y-3 lg:col-span-8 xl:col-span-7">
          <div
            v-for="(item, index) in site.faq.items"
            :key="item.question"
            class="faq-item overflow-hidden rounded-xl border bg-white shadow-soft transition-[border-color,box-shadow] duration-300"
            :class="
              openIndex === index
                ? 'border-gold-500/35 shadow-[0_12px_40px_rgb(6_38_59/0.08)]'
                : 'border-border/80 hover:border-gold-500/20'
            "
          >
            <h3 class="m-0">
              <button
                :id="triggerId(index)"
                type="button"
                class="faq-item__trigger flex w-full items-start gap-4 px-4 py-4 text-left sm:gap-5 sm:px-5 sm:py-5"
                :aria-expanded="openIndex === index"
                :aria-controls="panelId(index)"
                @click="toggle(index)"
              >
                <span
                  class="faq-item__index mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold tabular-nums transition-colors duration-300 sm:size-9 sm:text-sm"
                  :class="
                    openIndex === index
                      ? 'bg-brand-900 text-white'
                      : 'bg-surface-muted text-brand-800/55'
                  "
                  aria-hidden="true"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </span>

                <span class="min-w-0 flex-1 pt-0.5">
                  <span
                    class="block text-sm font-medium leading-snug text-brand-900 sm:text-base"
                  >
                    {{ item.question }}
                  </span>
                </span>

                <span
                  class="faq-item__chevron mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300"
                  :class="
                    openIndex === index
                      ? 'rotate-180 border-gold-500/30 bg-gold-500/10 text-gold-600'
                      : 'border-border bg-surface text-brand-800/50'
                  "
                  aria-hidden="true"
                >
                  <svg
                    class="size-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              :id="panelId(index)"
              role="region"
              :aria-labelledby="triggerId(index)"
              class="faq-item__panel grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
              :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <div
                  class="faq-item__answer border-t border-border/50 px-4 pb-5 pt-1 sm:px-5 sm:pb-6"
                >
                  <p class="text-sm leading-relaxed text-brand-800/78 sm:text-[0.9375rem]">
                    {{ item.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p class="mt-6 text-center text-xs text-brand-800/50 lg:hidden">
            Conteúdo informativo — não substitui consulta médica presencial.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-item__trigger {
  -webkit-tap-highlight-color: transparent;
}

.faq-item__trigger:focus-visible {
  outline: none;
}

.faq-item__trigger:focus-visible .faq-item__index {
  box-shadow: 0 0 0 2px var(--color-white), 0 0 0 4px var(--color-gold);
}

@media (prefers-reduced-motion: reduce) {
  .faq-item__panel {
    transition-duration: 0.01ms !important;
  }

  .faq-item__chevron {
    transition-duration: 0.01ms !important;
  }
}
</style>
