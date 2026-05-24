<script setup lang="ts">
import { site } from '~/data/site'

const config = useRuntimeConfig()
const publicPath = usePublicPath()
const year = 2026

const externalLinks = [
  {
    label: 'Doctoralia',
    href: config.public.doctoraliaUrl as string,
  },
  {
    label: 'Instagram',
    href: config.public.instagramUrl as string,
  },
  {
    label: 'OLLIV Perícia Médica',
    href: config.public.ollivUrl as string,
  },
]
</script>

<template>
  <footer class="site-footer border-t border-brand-900/10 bg-brand-950 text-white/75">
    <!-- Faixa dourada superior -->
    <div
      class="h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <!-- Marca -->
        <div class="lg:col-span-4">
          <a href="#inicio" class="inline-block transition-opacity hover:opacity-90">
            <span class="inline-block rounded-lg bg-white px-3 py-2.5">
              <img
                :src="publicPath(site.brand.logo)"
                :alt="site.brand.logoAlt"
                class="h-10 w-auto object-contain sm:h-11"
                width="200"
                height="52"
                decoding="async"
              />
            </span>
          </a>
          <p class="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {{ site.doctor.titleExtended }} · atendimento em Brasília com foco em cirurgia
            bariátrica e aparelho digestivo.
          </p>
          <p class="mt-4 text-xs text-white/40">
            {{ site.doctor.crm }} · {{ site.doctor.rqe }}
          </p>
        </div>

        <!-- Navegação -->
        <div class="lg:col-span-3">
          <h3 class="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
            Navegação
          </h3>
          <ul class="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
            <li v-for="link in site.nav" :key="link.href">
              <a
                :href="link.href"
                class="text-sm text-white/70 transition hover:text-gold-400"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Links externos -->
        <div class="lg:col-span-2">
          <h3 class="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
            Links
          </h3>
          <ul class="mt-5 space-y-2.5">
            <li v-for="link in externalLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-white/70 transition hover:text-gold-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Consultórios (resumo) -->
        <div class="lg:col-span-3">
          <h3 class="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
            Consultórios
          </h3>
          <ul class="mt-5 space-y-4">
            <li v-for="loc in site.locations" :key="loc.name">
              <p class="text-sm font-medium text-white/85">{{ loc.name }}</p>
              <p class="mt-0.5 text-xs leading-relaxed text-white/45">
                {{ loc.address }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Barra inferior -->
      <div
        class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
      >
        <p>
          © {{ year }} {{ site.doctor.fullName }}. Todos os direitos reservados.
        </p>

        <p class="text-white/35">
          {{ site.brand.domain }} · {{ site.doctor.city }}
        </p>

        <p>
          Desenvolvido por:
          <a
            :href="site.developer.url"
            class="font-medium text-gold-400/90 transition hover:text-gold-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ site.developer.label }}
          </a>
        </p>
      </div>

      <p class="mt-6 text-center text-[0.65rem] leading-relaxed text-white/30 sm:text-left">
        Conteúdo informativo. Não substitui consulta, diagnóstico ou tratamento médico.
      </p>
    </div>
  </footer>
</template>
