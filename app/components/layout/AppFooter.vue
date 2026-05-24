<script setup lang="ts">
import { site } from '~/data/site'

const config = useRuntimeConfig()
// Ano fixo no bundle SSR/cliente (evita edge case de hidratação)
const year = 2026
</script>

<template>
  <footer class="border-t border-brand-900/10 bg-brand-950 text-white/80">
    <div class="mx-auto max-w-6xl px-5 py-12 lg:px-8">
      <div class="grid gap-10 md:grid-cols-3">
        <div>
          <div class="inline-block rounded-lg bg-white px-3 py-2.5">
            <AppLogo size="lg" />
          </div>
          <p class="mt-4 text-xs text-white/50">
            {{ site.doctor.crm }} · {{ site.doctor.rqe }}
          </p>
        </div>

        <div>
          <h3 class="text-sm font-medium uppercase tracking-wider text-gold-400">
            Consultórios
          </h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="loc in site.locations" :key="loc.name">
              <p class="text-white/90">{{ loc.name }}</p>
              <p class="text-white/55">{{ loc.address }}</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-medium uppercase tracking-wider text-gold-400">
            Links
          </h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <a
                :href="config.public.doctoraliaUrl"
                class="transition hover:text-gold-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Doctoralia
              </a>
            </li>
            <li>
              <a
                :href="config.public.instagramUrl"
                class="transition hover:text-gold-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @dr.josemessias
              </a>
            </li>
            <li>
              <a
                :href="config.public.ollivUrl"
                class="transition hover:text-gold-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                OLLIV Perícia Médica
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:justify-between"
      >
        <p>© {{ year }} {{ site.doctor.name }}. Todos os direitos reservados.</p>
        <p>drmessias.com.br · Brasília-DF</p>
      </div>
    </div>
  </footer>
</template>
