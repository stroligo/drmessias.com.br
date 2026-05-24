<script setup lang="ts">
import { HeartHandshake, ScanLine, ShieldCheck } from '@lucide/vue'
import { site } from '~/data/site'

const { revealRoot, isVisible } = useRevealSection()
const { generalLink, hasWhatsApp } = useWhatsApp()
const config = useRuntimeConfig()

const pillars = [
  { icon: ShieldCheck },
  { icon: HeartHandshake },
  { icon: ScanLine },
] as const

const ctaHref = computed(() =>
  hasWhatsApp.value ? generalLink('agendar consulta') : (config.public.doctoraliaUrl as string),
)
</script>

<template>
  <section
    id="diferenciais"
    ref="revealRoot"
    class="why-section relative scroll-mt-24 overflow-hidden bg-surface-muted py-20 md:py-24"
    :class="{ 'landing-section--visible': isVisible }"
  >
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold-500/[0.05] blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
        <!-- Texto + CTA -->
        <div class="landing-reveal-header lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
            {{ site.why.eyebrow }}
          </p>
          <h2
            class="mt-3 font-display text-3xl font-medium tracking-tight text-brand-900 sm:text-[2rem]"
          >
            {{ site.why.title }}
          </h2>
          <p class="mt-5 text-base leading-relaxed text-brand-800/75">
            {{ site.why.description }}
          </p>

          <div
            class="landing-reveal-block mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-col"
          >
            <WhatsappButton
              v-if="hasWhatsApp"
              :href="ctaHref"
              label="Agendar consulta"
              variant="primary"
            />
            <BaseButton v-else :href="ctaHref" size="lg">
              Agendar consulta
            </BaseButton>
          </div>

          <div
            class="landing-reveal-block mt-8 hidden rounded-xl border border-border/80 bg-white/80 p-5 backdrop-blur-sm lg:block"
          >
            <p class="text-2xl font-display font-medium text-brand-900">5,0</p>
            <p class="mt-1 text-sm text-brand-800/65">
              Avaliação na Doctoralia · 39 opiniões de pacientes
            </p>
          </div>
        </div>

        <!-- Pilares — timeline -->
        <ol class="landing-reveal-stagger--ltr relative lg:col-span-7">
          <div
            class="pointer-events-none absolute bottom-4 left-[1.125rem] top-4 hidden w-px bg-gradient-to-b from-gold-500/50 via-gold-500/25 to-transparent sm:block"
            aria-hidden="true"
          />

          <li
            v-for="(item, i) in site.why.items"
            :key="item.title"
            class="landing-reveal-item relative pb-10 last:pb-0 sm:pl-14"
            :style="{ '--rv-i': i }"
          >
            <span
              class="mb-4 flex size-9 items-center justify-center rounded-full bg-brand-900 text-sm font-semibold text-white shadow-soft sm:absolute sm:left-0 sm:top-0 sm:mb-0"
              aria-hidden="true"
            >
              <component
                :is="pillars[i]?.icon ?? ShieldCheck"
                class="size-4"
                stroke-width="1.75"
              />
            </span>

            <article
              class="rounded-xl border border-border/70 bg-white p-5 shadow-soft transition hover:border-gold-500/30 hover:shadow-[0_16px_44px_rgb(6_38_59/0.07)] sm:p-6"
            >
              <span
                class="text-xs font-semibold uppercase tracking-wider text-gold-600"
              >
                Diferencial {{ String(i + 1).padStart(2, '0') }}
              </span>
              <h3 class="mt-2 text-lg font-medium leading-snug text-brand-900">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-sm leading-relaxed text-brand-800/75">
                {{ item.description }}
              </p>
            </article>
          </li>
        </ol>
      </div>

      <p
        class="landing-reveal-block mt-10 text-center text-sm text-brand-800/55 lg:hidden"
      >
        5,0 na Doctoralia · 39 opiniões de pacientes
      </p>
    </div>
  </section>
</template>
