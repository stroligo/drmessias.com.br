<script setup lang="ts">
import { site } from '~/data/site'

const { generalLink } = useWhatsApp()
const config = useRuntimeConfig()
</script>

<template>
  <section
    id="inicio"
    class="relative overflow-hidden bg-brand-900 text-white"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(11,54,83,0.5),transparent_65%)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-24 top-20 size-96 rounded-full bg-gold-500/10 blur-3xl"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24"
    >
      <div>
        <p
          class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold-400"
        >
          {{ site.hero.eyebrow }}
        </p>

        <h1
          class="text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
        >
          {{ site.hero.title }}
        </h1>

        <p class="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          {{ site.hero.description }}
        </p>

        <ul class="mt-8 space-y-2.5">
          <li
            v-for="item in site.hero.bullets"
            :key="item"
            class="flex items-start gap-3 text-sm text-white/80 sm:text-base"
          >
            <span
              class="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-500"
              aria-hidden="true"
            />
            {{ item }}
          </li>
        </ul>

        <div class="mt-10 flex flex-wrap gap-3">
          <BaseButton :href="generalLink()" variant="accent" size="lg">
            Agendar consulta
          </BaseButton>
          <BaseButton
            :href="config.public.doctoraliaUrl"
            variant="outline-light"
            size="lg"
          >
            Ver no Doctoralia
          </BaseButton>
        </div>

        <p class="mt-6 text-xs text-white/45">
          {{ site.doctor.crm }} · {{ site.doctor.rqe }} · {{ site.doctor.city }}
        </p>
      </div>

      <div class="relative">
        <div
          class="overflow-hidden rounded-2xl border border-white/10 bg-brand-800/40 shadow-2xl shadow-black/30"
        >
          <img
            src="/images/dr-messias.jpg"
            :alt="`${site.doctor.name}, cirurgião geral em jaleco`"
            class="aspect-[4/5] w-full object-cover object-top"
            width="640"
            height="800"
            loading="eager"
          />
        </div>
        <div
          class="absolute -bottom-4 -left-4 max-w-[min(100%,16rem)] rounded-xl border border-gold-500/25 bg-white px-4 py-3 shadow-xl sm:-left-6"
        >
          <AppLogo size="sm" />
        </div>
      </div>
    </div>
  </section>
</template>
