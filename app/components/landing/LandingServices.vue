<script setup lang="ts">
import {
  Activity,
  ScanLine,
  Stethoscope,
  Syringe,
  Video,
} from '@lucide/vue'
import { site } from '~/data/site'

const { revealRoot, isVisible } = useRevealSection()
const { serviceLink, hasWhatsApp } = useWhatsApp()
const config = useRuntimeConfig()

const serviceIcons = [
  Stethoscope,
  Activity,
  Syringe,
  Stethoscope,
  ScanLine,
  ScanLine,
  Video,
] as const

const ctaHref = computed(() =>
  hasWhatsApp.value
    ? serviceLink('agendar consulta')
    : (config.public.doctoraliaUrl as string),
)
</script>

<template>
  <section
    id="servicos"
    ref="revealRoot"
    class="services-section relative scroll-mt-24 overflow-hidden bg-surface-muted py-20 md:py-24"
    :class="{ 'landing-section--visible': isVisible }"
    aria-labelledby="servicos-heading"
  >
    <div
      class="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-brand-900/[0.04] blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
        <!-- Cabeçalho -->
        <div class="landing-reveal-header lg:col-span-4 xl:col-span-4">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
            {{ site.services.eyebrow }}
          </p>
          <h2
            id="servicos-heading"
            class="mt-3 font-display text-3xl font-medium tracking-tight text-brand-900 sm:text-[2rem]"
          >
            {{ site.services.title }}
          </h2>
          <p class="mt-5 text-base leading-relaxed text-brand-800/75">
            {{ site.services.description }}
          </p>

          <div class="landing-reveal-block mt-8 hidden lg:block">
            <div
              class="rounded-xl border border-gold-500/25 bg-white p-5 shadow-soft"
            >
              <p class="text-sm font-medium text-brand-900">
                Próximo passo
              </p>
              <p class="mt-2 text-sm leading-relaxed text-brand-800/65">
                Agende uma consulta para avaliar indicação, exames e plano
                individualizado.
              </p>
              <BaseButton :href="ctaHref" class="mt-4 w-full justify-center" size="md">
                Agendar consulta
              </BaseButton>
            </div>
          </div>
        </div>

        <!-- Lista de serviços -->
        <div class="lg:col-span-8 xl:col-span-8">
          <ul
            class="landing-reveal-stagger--alt overflow-hidden rounded-xl border border-border/80 bg-white shadow-soft"
          >
            <li
              v-for="(service, i) in site.services.items"
              :key="service.title"
              class="landing-reveal-item group"
              :style="{ '--rv-i': i }"
            >
              <article
                class="flex flex-col gap-4 border-b border-border/70 p-5 transition-colors last:border-b-0 hover:bg-surface/60 sm:flex-row sm:items-start sm:gap-5 sm:p-6"
              >
                <div class="flex items-start gap-4 sm:gap-5">
                  <span
                    class="font-display text-2xl font-medium leading-none tabular-nums text-gold-500/35"
                    aria-hidden="true"
                  >
                    {{ String(i + 1).padStart(2, '0') }}
                  </span>

                  <span
                    class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-gold-600 ring-1 ring-gold-500/15 transition group-hover:bg-gold-500/10"
                    aria-hidden="true"
                  >
                    <component
                      :is="serviceIcons[i] ?? Stethoscope"
                      class="size-[1.125rem]"
                      stroke-width="1.75"
                    />
                  </span>

                  <div class="min-w-0 flex-1 pt-0.5">
                    <h3 class="text-base font-medium leading-snug text-brand-900 sm:text-lg">
                      {{ service.title }}
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-brand-800/72">
                      {{ service.description }}
                    </p>
                  </div>
                </div>

                <a
                  :href="serviceLink(service.title)"
                  class="btn-press inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-medium text-gold-600 transition hover:text-gold-500 sm:ml-auto sm:self-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="sm:hidden">Solicitar informações</span>
                  <span class="hidden sm:inline">Informações</span>
                  <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </article>
            </li>
          </ul>

          <p class="landing-reveal-block mt-8 text-center text-sm text-brand-800/60 lg:hidden">
            Agende uma consulta para avaliar indicação, exames e plano individualizado.
          </p>

          <div class="landing-reveal-block mt-6 flex justify-center lg:hidden">
            <BaseButton :href="ctaHref" size="lg">
              Agendar consulta
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
