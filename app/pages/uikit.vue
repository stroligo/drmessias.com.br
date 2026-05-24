<script setup lang="ts">
import {
  pillars,
  typeScale,
  uikitColors,
} from '~/data/uikit'

definePageMeta({ layout: 'uikit' })

useHead({
  title: 'UI Kit — Dr. José Messias',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const showBoard = ref(false)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-border bg-brand-900 text-white">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_80%_-20%,rgba(200,163,93,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-brand-800/40 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div class="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div class="max-w-2xl">
            <p class="text-xs font-medium uppercase tracking-[0.22em] text-gold-400">
              Design System
            </p>
            <h1 class="mt-4 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
              Identidade visual
            </h1>
            <p class="mt-2 text-lg text-white/60">Dr. José Messias</p>
            <p class="mt-6 text-base leading-relaxed text-white/70">
              Referência de marca para o site institucional — cores, tipografia,
              logo e componentes. Medicina premium contemporânea com acolhimento humano.
            </p>
            <p class="mt-8 font-display text-2xl italic text-gold-500 sm:text-3xl">
              Precisão cirúrgica com cuidado humano.
            </p>

            <dl class="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt class="text-[10px] uppercase tracking-wider text-white/40">Cores</dt>
                <dd class="mt-1 text-2xl font-medium text-gold-500">7</dd>
              </div>
              <div>
                <dt class="text-[10px] uppercase tracking-wider text-white/40">Fontes</dt>
                <dd class="mt-1 text-2xl font-medium text-gold-500">2</dd>
              </div>
              <div>
                <dt class="text-[10px] uppercase tracking-wider text-white/40">Pilares</dt>
                <dd class="mt-1 text-2xl font-medium text-gold-500">4</dd>
              </div>
            </dl>
          </div>

          <div
            class="hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:block lg:min-w-[280px]"
          >
            <p class="text-[11px] font-medium uppercase tracking-wider text-gold-400">
              Posicionamento
            </p>
            <ul class="mt-4 space-y-3 text-sm text-white/75">
              <li class="flex gap-2">
                <span class="text-gold-500">—</span>
                Excelência técnica
              </li>
              <li class="flex gap-2">
                <span class="text-gold-500">—</span>
                Sofisticação discreta
              </li>
              <li class="flex gap-2">
                <span class="text-gold-500">—</span>
                Acolhimento humano
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Conteúdo + nav -->
    <div class="mx-auto max-w-7xl px-5 py-12 lg:grid lg:grid-cols-[220px_1fr] lg:gap-16 lg:px-8 lg:py-16">
      <aside class="lg:sticky lg:top-28 lg:self-start">
        <UiKitNav />
      </aside>

      <div class="min-w-0 space-y-4">
        <!-- 01 Visão -->
        <UiKitSection
          id="visao"
          number="01"
          title="Visão geral"
          description="Painel consolidado da identidade. Use como referência mestra em novos materiais."
        >
          <UiKitPanel subtitle="Documento" title="Painel de identidade" padding="lg">
            <figure>
              <button
                type="button"
                class="group relative block w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                @click="showBoard = !showBoard"
              >
                <img
                  src="/images/identidade.png"
                  alt="Painel completo da identidade visual"
                  class="w-full transition duration-500"
                  :class="showBoard ? '' : 'max-h-[420px] object-cover object-top'"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
                <span
                  class="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-brand-900/80 to-transparent py-6 opacity-100 transition group-hover:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                >
                  <span
                    class="rounded-full bg-white/95 px-4 py-2 text-xs font-medium text-brand-900"
                  >
                    {{ showBoard ? 'Recolher' : 'Ver painel completo' }}
                  </span>
                </span>
              </button>
              <figcaption class="mt-4 text-center text-xs text-brand-800/50">
                Clique para expandir · Arquivo fonte: Arquivos/identidade.png
              </figcaption>
            </figure>
          </UiKitPanel>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <UiKitPanel
              v-for="pillar in pillars"
              :key="pillar.title"
              :title="pillar.title"
            >
              <p class="text-sm leading-relaxed text-brand-800/70">
                {{ pillar.desc }}
              </p>
            </UiKitPanel>
          </div>
        </UiKitSection>

        <!-- 02 Logo -->
        <UiKitSection
          id="logo"
          number="02"
          title="Logo"
          description="Monograma jm · divisor dourado · DR. JOSÉ MESSIAS · CIRURGIA GERAL. Área de respiro mínima = 1× altura do monograma."
        >
          <UiKitPanel
            subtitle="Versão principal"
            title="Logo horizontal"
            padding="lg"
            class="flex min-h-[200px] items-center justify-center bg-surface-muted"
          >
            <AppLogo size="xl" class="mx-auto" />
          </UiKitPanel>

          <div class="mt-6 grid gap-6 lg:grid-cols-2">
            <UiKitPanel subtitle="Aplicação" title="Sobre fundo claro">
              <div class="flex min-h-[120px] items-center rounded-xl bg-surface p-6">
                <AppLogo size="lg" />
              </div>
            </UiKitPanel>
            <UiKitPanel subtitle="Aplicação" title="Sobre fundo escuro" dark>
              <div class="flex min-h-[120px] items-center rounded-xl bg-brand-800/50 p-6">
                <div class="rounded-lg bg-white px-4 py-3">
                  <AppLogo size="lg" />
                </div>
              </div>
            </UiKitPanel>
          </div>

          <UiKitPanel subtitle="Escala" title="Tamanhos de uso" class="mt-6">
            <div class="grid gap-6 sm:grid-cols-4">
              <div
                v-for="size in (['sm', 'md', 'lg', 'xl'] as const)"
                :key="size"
                class="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface-muted py-8"
              >
                <AppLogo :size="size" />
                <span class="mt-4 font-mono text-[10px] uppercase text-brand-800/45">
                  {{ size }}
                </span>
              </div>
            </div>
          </UiKitPanel>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-5">
              <p class="text-xs font-medium uppercase tracking-wider text-emerald-800">
                ✓ Permitido
              </p>
              <ul class="mt-3 space-y-2 text-sm text-emerald-900/80">
                <li>Manter proporções originais</li>
                <li>Usar cores oficiais da marca</li>
                <li>Respeitar área de proteção</li>
              </ul>
            </div>
            <div class="rounded-2xl border border-red-200/80 bg-red-50/50 p-5">
              <p class="text-xs font-medium uppercase tracking-wider text-red-800">
                ✕ Evitar
              </p>
              <ul class="mt-3 space-y-2 text-sm text-red-900/80">
                <li>Distorcer ou rotacionar</li>
                <li>Alterar cores do logo</li>
                <li>Aplicar sombras ou contornos</li>
              </ul>
            </div>
          </div>
        </UiKitSection>

        <!-- 03 Cores -->
        <UiKitSection
          id="cores"
          number="03"
          title="Paleta de cores"
          description="Tokens em app/assets/css/tokens.css. Clique em um swatch para copiar o hex."
        >
          <p class="mb-4 text-xs font-medium uppercase tracking-wider text-brand-800/50">
            Primárias
          </p>
          <div class="grid gap-4 sm:grid-cols-3">
            <UiKitSwatch
              v-for="c in uikitColors.primary"
              :key="c.token"
              v-bind="c"
              large
            />
          </div>

          <p class="mb-4 mt-10 text-xs font-medium uppercase tracking-wider text-brand-800/50">
            Neutras & superfícies
          </p>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <UiKitSwatch
              v-for="c in uikitColors.neutral"
              :key="c.token"
              v-bind="c"
              :dark="c.dark"
              :ring="c.ring"
            />
          </div>

          <UiKitPanel subtitle="CSS" title="Variáveis raiz" class="mt-8">
            <pre
              class="overflow-x-auto rounded-xl bg-brand-900 p-5 font-mono text-xs leading-relaxed text-gold-400/90"
            ><code>:root {
  --color-primary: #06263b;
  --color-gold: #c8a35d;
  --color-background: #f7f5f2;
  --color-border: #d9d9d6;
}</code></pre>
          </UiKitPanel>
        </UiKitSection>

        <!-- 04 Tipografia -->
        <UiKitSection
          id="tipografia"
          number="04"
          title="Tipografia"
          description="Montserrat para UI e leitura · Cormorant Garamond para destaques editoriais."
        >
          <div class="space-y-3">
            <div
              v-for="row in typeScale"
              :key="row.name"
              class="grid gap-4 rounded-2xl border border-border bg-white p-5 sm:grid-cols-[100px_1fr] sm:items-center sm:p-6"
            >
              <div>
                <p class="font-mono text-[10px] uppercase tracking-wider text-gold-600">
                  {{ row.name }}
                </p>
                <p class="mt-1 text-[10px] text-brand-800/45">{{ row.meta }}</p>
              </div>
              <p :class="row.class">{{ row.sample }}</p>
            </div>
          </div>
        </UiKitSection>

        <!-- 05 Componentes -->
        <UiKitSection
          id="componentes"
          number="05"
          title="Componentes"
          description="Botões e padrões de interação usados na landing page."
        >
          <div class="grid gap-6 lg:grid-cols-2">
            <UiKitPanel subtitle="Light UI" title="Botões — fundo claro">
              <div class="flex flex-wrap gap-3">
                <BaseButton href="#" :external="false" variant="primary" size="lg">
                  Agendar consulta
                </BaseButton>
                <BaseButton href="#" :external="false" variant="outline">
                  Secundário
                </BaseButton>
                <BaseButton href="#" :external="false" variant="ghost">
                  Ghost link
                </BaseButton>
              </div>
              <p class="mt-6 text-xs text-brand-800/50">
                Primário · #06263B · hover #0B3653 · radius 999px
              </p>
            </UiKitPanel>

            <UiKitPanel subtitle="Dark UI" title="Botões — fundo escuro" dark>
              <div class="flex flex-wrap gap-3">
                <BaseButton href="#" :external="false" variant="accent" size="lg">
                  CTA dourado
                </BaseButton>
                <BaseButton href="#" :external="false" variant="outline-light">
                  Outline
                </BaseButton>
              </div>
              <p class="mt-6 text-xs text-white/45">
                Accent para hero e seções escuras · outline com borda clara
              </p>
            </UiKitPanel>
          </div>

          <UiKitPanel subtitle="Navegação" title="Header do site" class="mt-6">
            <div class="overflow-hidden rounded-xl border border-border">
              <div
                class="flex items-center justify-between gap-4 border-b border-border bg-surface px-5 py-4"
              >
                <AppLogo size="md" />
                <span
                  class="hidden rounded-full bg-brand-900 px-4 py-2 text-xs font-medium text-white sm:inline"
                >
                  Agendar consulta
                </span>
              </div>
              <p class="bg-surface-muted px-5 py-3 text-xs text-brand-800/50">
                Fundo off-white · logo horizontal · CTA azul petróleo
              </p>
            </div>
          </UiKitPanel>
        </UiKitSection>

        <!-- 06 Layout -->
        <UiKitSection
          id="layout"
          number="06"
          title="Layout & espaço"
          description="Grid de 8px · muito respiro · visual editorial."
        >
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="s in [
                { label: 'Surface', class: 'bg-surface border border-border' },
                { label: 'Muted', class: 'bg-surface-muted border border-border' },
                { label: 'Card', class: 'bg-white border border-border shadow-soft' },
                { label: 'Dark', class: 'bg-brand-900 text-white' },
              ]"
              :key="s.label"
              :class="['rounded-2xl p-6 text-sm', s.class]"
            >
              <p class="font-medium">{{ s.label }}</p>
              <p class="mt-2 opacity-60">Seções da landing</p>
            </div>
          </div>

          <UiKitPanel subtitle="Escala" title="Espaçamento (8px base)" class="mt-6">
            <div class="space-y-5">
              <div
                v-for="px in [8, 16, 24, 32, 48, 64, 96]"
                :key="px"
                class="flex items-center gap-6"
              >
                <span class="w-10 shrink-0 text-right font-mono text-xs text-brand-800/45">
                  {{ px }}
                </span>
                <div class="h-px flex-1 bg-border">
                  <div
                    class="h-3 -translate-y-1/2 rounded-sm bg-gold-500"
                    :style="{ width: `${px}px` }"
                  />
                </div>
              </div>
            </div>
          </UiKitPanel>
        </UiKitSection>

        <!-- 07 Marca -->
        <UiKitSection
          id="marca"
          number="07"
          title="Voz & princípios"
          description="Tom de comunicação e restrições visuais."
        >
          <div class="grid gap-4 lg:grid-cols-3">
            <blockquote
              v-for="(phrase, i) in [
                'Excelência técnica. Cuidado humano.',
                'Precisão cirúrgica com acolhimento individualizado.',
                'Segurança, experiência e transformação.',
              ]"
              :key="i"
              class="rounded-2xl border border-border bg-white p-6 font-display text-xl italic leading-snug text-brand-900 sm:text-2xl"
            >
              {{ phrase }}
            </blockquote>
          </div>

          <UiKitPanel subtitle="Restrições" title="Não utilizar" class="mt-6">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in [
                  'Vermelho médico',
                  'Gradientes exagerados',
                  'Efeitos 3D',
                  'Sombras pesadas',
                  'Azul hospital saturado',
                  'Serifas clássicas',
                ]"
                :key="item"
                class="rounded-full border border-red-200/80 bg-red-50 px-3 py-1.5 text-xs text-red-900/80"
              >
                {{ item }}
              </span>
            </div>
          </UiKitPanel>

          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="p in pillars"
              :key="p.title"
              class="group rounded-2xl border border-border bg-white p-5 transition hover:border-gold-500/30 hover:shadow-soft"
            >
              <span
                class="font-display text-2xl text-gold-500/80 transition group-hover:text-gold-500"
                aria-hidden="true"
              >{{ p.icon }}</span>
              <h3 class="mt-3 font-medium text-brand-900">{{ p.title }}</h3>
              <p class="mt-2 text-sm text-brand-800/65">{{ p.desc }}</p>
            </article>
          </div>
        </UiKitSection>
      </div>
    </div>
  </div>
</template>
