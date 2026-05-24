<script setup lang="ts">
import { Calendar, MapPin } from '@lucide/vue'
import { site } from '~/data/site'

const { revealRoot, isVisible } = useRevealSection()
const { generalLink, hasWhatsApp } = useWhatsApp()
const config = useRuntimeConfig()

const ctaHref = computed(() =>
  hasWhatsApp.value ? generalLink('agendar consulta') : (config.public.doctoraliaUrl as string),
)
</script>

<template>
  <section
    id="contato"
    ref="revealRoot"
    class="cta-section relative scroll-mt-24 overflow-hidden bg-surface-muted py-20 md:py-24"
    :class="{ 'landing-section--visible': isVisible }"
  >
    <div
      class="pointer-events-none absolute right-0 top-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-500/[0.06] blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
        <!-- Coluna principal: convite + ações -->
        <div class="landing-reveal-header lg:col-span-5 lg:self-center">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
            {{ site.cta.eyebrow }}
          </p>
          <h2
            class="mt-3 font-display text-3xl font-medium tracking-tight text-brand-900 sm:text-[2rem]"
          >
            {{ site.cta.title }}
          </h2>
          <p class="mt-5 text-base leading-relaxed text-brand-800/75">
            {{ site.cta.description }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsappButton
              v-if="hasWhatsApp"
              :href="ctaHref"
              label="Agendar consulta"
              variant="primary"
            />
            <BaseButton v-else :href="ctaHref" size="lg">
              Agendar consulta
            </BaseButton>
            <BaseButton
              :href="config.public.doctoraliaUrl"
              variant="outline"
              size="lg"
            >
              Doctoralia
            </BaseButton>
          </div>

          <div
            class="mt-8 flex flex-wrap items-center gap-4 border-t border-border/80 pt-8"
          >
            <a
              :href="config.public.doctoraliaUrl"
              class="group inline-flex items-center gap-2 text-sm font-medium text-brand-800/80 transition hover:text-gold-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="flex size-9 items-center justify-center rounded-full bg-white text-brand-900 shadow-soft ring-1 ring-border transition group-hover:ring-gold-500/40"
              >
                <Calendar class="size-4" aria-hidden="true" />
              </span>
              Agendar pelo Doctoralia
            </a>
            <a
              :href="config.public.instagramUrl"
              class="group inline-flex items-center gap-2 text-sm font-medium text-brand-800/80 transition hover:text-gold-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="flex size-9 items-center justify-center rounded-full bg-white text-brand-900 shadow-soft ring-1 ring-border transition group-hover:ring-gold-500/40"
              >
                <svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.512.012-4.743.068-1.038.047-1.603.218-1.978.363-.497.193-.85.423-1.222.795-.372.372-.602.725-.795 1.222-.145.375-.316.94-.363 1.978-.056 1.231-.068 1.593-.068 4.743s.012 3.512.068 4.743c.047 1.038.218 1.603.363 1.978.193.497.423.85.795 1.222.372.372.725.602 1.222.795.375.145.94.316 1.978.363 1.231.056 1.593.068 4.743.068s3.512-.012 4.743-.068c1.038-.047 1.603-.218 1.978-.363.497-.193.85-.423 1.222-.795.372-.372.602-.725.795-1.222.145-.375.316-.94.363-1.978.056-1.231.068-1.593.068-4.743s-.012-3.512-.068-4.743c-.047-1.038-.218-1.603-.363-1.978-.193-.497-.423-.85-.795-1.222-.372-.372-.725-.602-1.222-.795-.375-.145-.94-.316-1.978-.363-1.046-.048-1.386-.058-4.743-.058zm0 3.89a4.145 4.145 0 1 1 0 8.29 4.145 4.145 0 0 1 0-8.29zm0 1.802a2.343 2.343 0 1 0 0 4.686 2.343 2.343 0 0 0 0-4.686zm5.338-2.205a.97.97 0 1 1 0 1.94.97.97 0 0 1 0-1.94z"
                  />
                </svg>
              </span>
              @dr.josemessias
            </a>
          </div>

          <p class="mt-6 text-xs leading-relaxed text-brand-800/50">
            {{ site.doctor.crm }} · {{ site.doctor.rqe }}
          </p>
        </div>

        <!-- Consultórios -->
        <div class="landing-reveal-block lg:col-span-7">
          <p class="mb-5 text-sm font-semibold uppercase tracking-wider text-brand-800/55">
            {{ site.cta.locationsTitle }}
          </p>

          <ul class="space-y-3">
            <li
              v-for="(loc, i) in site.locations"
              :key="loc.name"
              class="landing-reveal-item"
              :style="{ '--rv-i': i }"
            >
              <article
                class="cta-location flex gap-4 rounded-xl border border-border/80 bg-white p-5 shadow-soft transition-[border-color,box-shadow,transform] duration-300 hover:border-gold-500/30 hover:shadow-[0_16px_48px_rgb(6_38_59/0.07)]"
              >
                <span
                  class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-gold-600 ring-1 ring-gold-500/15"
                  aria-hidden="true"
                >
                  <MapPin class="size-5" stroke-width="1.75" />
                </span>
                <div class="min-w-0 flex-1">
                  <h3 class="text-base font-medium text-brand-900">
                    {{ loc.name }}
                  </h3>
                  <p class="mt-1.5 text-sm leading-relaxed text-brand-800/70">
                    {{ loc.address }}
                  </p>
                  <p class="mt-1 text-xs text-brand-800/45">
                    CEP {{ loc.zip }}
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>

      <p
        class="landing-reveal-block mt-12 text-center text-xs leading-relaxed text-brand-800/45"
      >
        Conteúdo informativo. Consulte sempre um médico para diagnóstico e tratamento.
      </p>
    </div>
  </section>
</template>
