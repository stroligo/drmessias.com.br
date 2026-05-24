<script setup lang="ts">
import { site } from '~/data/site'

const { generalLink, hasWhatsApp } = useWhatsApp()
const config = useRuntimeConfig()
const publicPath = usePublicPath()

const heroSectionRef = ref<HTMLElement | null>(null)
const { styleAtDepth } = useHeroParallax(heroSectionRef)

const heroImageSrc = computed(() => publicPath('/images/messias-jaleco.png'))
const heroImageAlt = `${site.doctor.fullName} em jaleco cirúrgico.`

const ctaPrimary = computed(() =>
  hasWhatsApp.value ? generalLink() : (config.public.doctoraliaUrl as string),
)

/** Camadas do fundo abstrato — depth maior = mais movimento */
const parallaxMesh = styleAtDepth(0.12)
const parallaxOrbGold = styleAtDepth(0.38)
const parallaxOrbBrand = styleAtDepth(0.22)
const parallaxArc = styleAtDepth(0.3)
const parallaxLineA = styleAtDepth(0.18)
const parallaxLineB = styleAtDepth(0.26)

/** Conteúdo: movimento bem sutil */
const parallaxPortrait = styleAtDepth(0.06)
const parallaxOutlineGold = styleAtDepth(0.14)
const parallaxOutlineSoft = styleAtDepth(0.1)

const heroReady = ref(false)

onMounted(() => {
  if (prefersReducedMotion()) {
    heroReady.value = true
    return
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroReady.value = true
    })
  })
})

function prefersReducedMotion() {
  return (
    typeof window.matchMedia !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}
</script>

<template>
  <section
    id="inicio"
    ref="heroSectionRef"
    class="hero-light relative overflow-hidden border-b border-border/60 bg-surface"
    :class="{ 'hero-light--ready': heroReady }"
    aria-labelledby="hero-heading"
  >
    <!-- Textura abstrata com parallax por camada -->
    <div class="hero-abstract pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="hero-abstract__layer" :style="parallaxMesh">
        <svg
          class="hero-abstract__mesh absolute inset-0 size-full opacity-[0.35]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="hero-dots"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#06263b" fill-opacity="0.06" />
            </pattern>
            <linearGradient id="hero-fade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#c8a35d" stop-opacity="0.08" />
              <stop offset="100%" stop-color="#06263b" stop-opacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
          <path
            d="M-80 220 C120 80 280 360 520 200 S880 40 1100 180"
            fill="none"
            stroke="#c8a35d"
            stroke-opacity="0.12"
            stroke-width="1.5"
          />
          <path
            d="M-40 520 C200 420 360 640 600 500 S920 380 1200 560"
            fill="none"
            stroke="#06263b"
            stroke-opacity="0.06"
            stroke-width="2"
          />
          <ellipse cx="88%" cy="18%" rx="220" ry="160" fill="url(#hero-fade)" />
        </svg>
      </div>

      <div
        class="hero-abstract__layer hero-abstract__orb hero-abstract__orb--gold"
        :style="parallaxOrbGold"
      />
      <div
        class="hero-abstract__layer hero-abstract__orb hero-abstract__orb--brand"
        :style="parallaxOrbBrand"
      />
      <div class="hero-abstract__layer" :style="parallaxArc">
        <div class="hero-abstract__arc" />
      </div>
      <div class="hero-abstract__layer" :style="parallaxLineA">
        <div class="hero-abstract__line hero-abstract__line--a" />
      </div>
      <div class="hero-abstract__layer" :style="parallaxLineB">
        <div class="hero-abstract__line hero-abstract__line--b" />
      </div>
    </div>

    <div
      class="relative mx-auto grid max-w-content gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12 lg:px-8 lg:py-16 xl:gap-16"
    >
      <div class="hero-light__copy order-2 lg:order-1 lg:pb-4">
        <div class="hero-enter-item mb-5" style="--enter-i: 0">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-gold-500/35 bg-white/80 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-600 backdrop-blur-sm sm:text-xs"
          >
            <span class="size-1.5 rounded-full bg-gold-500" aria-hidden="true" />
            {{ site.hero.eyebrow }}
          </span>
        </div>

        <h1
          id="hero-heading"
          class="hero-enter-item font-display text-[2rem] font-medium leading-[1.12] tracking-tight text-brand-900 sm:text-[2.35rem] lg:text-[2.65rem] xl:text-[2.85rem]"
          style="--enter-i: 1"
        >
          {{ site.hero.title }}
        </h1>

        <p
          class="hero-enter-item mt-5 max-w-lg text-base leading-relaxed text-brand-800/78 sm:text-lg"
          style="--enter-i: 2"
        >
          {{ site.hero.description }}
        </p>

        <div
          class="hero-enter-item mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          style="--enter-i: 3"
        >
          <WhatsappButton
            v-if="hasWhatsApp"
            :href="ctaPrimary"
            label="Agendar consulta"
            variant="primary"
          />
          <BaseButton v-else :href="ctaPrimary" size="lg">
            Agendar consulta
          </BaseButton>
          <BaseButton
            :href="config.public.doctoraliaUrl"
            variant="outline"
            size="lg"
          >
            Ver perfil no Doctoralia
          </BaseButton>
        </div>

        <div
          class="hero-enter-item mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/90 pt-8 text-xs text-brand-800/55 sm:text-sm"
          style="--enter-i: 4"
        >
          <span>{{ site.doctor.crm }}</span>
          <span class="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
          <span>{{ site.doctor.rqe }}</span>
          <span class="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
          <span>{{ site.doctor.city }}</span>
        </div>
      </div>

      <div class="hero-light__visual order-1 lg:order-2">
        <div
          class="relative mx-auto w-full max-w-[min(100%,22rem)] sm:max-w-md lg:max-w-none lg:ml-auto"
        >
          <figure class="relative flex flex-col items-center lg:items-end">
            <div class="hero-portrait-frame relative w-full">
              <div
                class="hero-outline-parallax pointer-events-none absolute inset-0"
                :style="parallaxOutlineGold"
                aria-hidden="true"
              >
                <div class="hero-outline hero-outline--gold hero-enter-outline" />
              </div>
              <div
                class="hero-outline-parallax pointer-events-none absolute inset-0"
                :style="parallaxOutlineSoft"
                aria-hidden="true"
              >
                <div
                  class="hero-outline hero-outline--soft hero-enter-outline hero-enter-outline--delay"
                />
              </div>

              <div class="relative z-10" :style="parallaxPortrait">
                <div class="hero-enter-photo">
                  <img
                    :src="heroImageSrc"
                    :alt="heroImageAlt"
                    class="hero-light__photo mx-auto block w-full object-contain object-bottom drop-shadow-[0_24px_48px_rgba(6,38,59,0.14)]"
                    width="1152"
                    height="1221"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <figcaption
              class="hero-enter-caption relative z-20 mt-5 w-full max-w-[18rem] lg:absolute lg:-bottom-2 lg:left-0 lg:mt-0"
            >
              <div
                class="rounded-xl border border-gold-500/30 bg-white/90 px-4 py-3.5 shadow-soft backdrop-blur-sm"
              >
                <p class="font-display text-lg font-medium text-brand-900">
                  {{ site.doctor.fullName }}
                </p>
                <p class="mt-0.5 text-sm text-brand-800/65">
                  {{ site.doctor.titleExtended }}
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* —— Parallax layers —— */
.hero-abstract__layer {
  position: absolute;
  inset: 0;
  will-change: transform;
}

.hero-abstract__orb {
  inset: auto;
  border-radius: 50%;
  filter: blur(64px);
}

.hero-abstract__orb--gold {
  right: -8%;
  top: 8%;
  width: min(55vw, 28rem);
  height: min(55vw, 28rem);
  background: rgb(200 163 93 / 0.14);
}

.hero-abstract__orb--brand {
  left: -12%;
  bottom: 5%;
  width: min(45vw, 20rem);
  height: min(45vw, 20rem);
  background: rgb(6 38 59 / 0.05);
}

.hero-abstract__arc {
  position: absolute;
  right: 4%;
  top: 22%;
  width: min(42vw, 18rem);
  height: min(42vw, 18rem);
  border: 1px solid rgb(200 163 93 / 0.2);
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  transform: rotate(-18deg);
}

.hero-abstract__line {
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgb(200 163 93 / 0.35) 40%,
    rgb(200 163 93 / 0.35) 60%,
    transparent
  );
}

.hero-abstract__line--a {
  left: 8%;
  top: 28%;
  width: min(40%, 14rem);
  transform: rotate(-8deg);
}

.hero-abstract__line--b {
  right: 12%;
  bottom: 32%;
  width: min(35%, 11rem);
  transform: rotate(12deg);
}

/* —— Outlines —— */
.hero-outline-parallax {
  will-change: transform;
}

.hero-portrait-frame {
  min-height: 16rem;
}

.hero-outline {
  position: absolute;
  border-radius: var(--radius-premium);
}

.hero-outline--gold {
  right: -0.35rem;
  top: 1.75rem;
  bottom: 2.5rem;
  width: 38%;
  border: 2px solid rgb(200 163 93 / 0.42);
}

.hero-outline--soft {
  left: 0;
  top: 0.5rem;
  right: 12%;
  bottom: 3rem;
  border: 1px solid rgb(6 38 59 / 0.1);
}

.hero-light__photo {
  max-height: min(62svh, 38rem);
}

@media (min-width: 1024px) {
  .hero-light__photo {
    max-height: min(74vh, 42rem);
  }

  .hero-outline--gold {
    right: -0.5rem;
  }
}

/* —— Entrada: texto —— */
.hero-enter-item {
  opacity: 0;
  transform: translate3d(0, 1.35rem, 0);
}

.hero-light--ready .hero-enter-item {
  animation: hero-enter-up 0.9s cubic-bezier(0.22, 0.82, 0.12, 1) forwards;
  animation-delay: calc(0.08s + var(--enter-i, 0) * 0.075s);
}

/* —— Entrada: foto e molduras —— */
.hero-enter-outline {
  opacity: 0;
  transform: scale(0.96);
}

.hero-enter-outline--delay {
  animation-delay: 0.15s;
}

.hero-light--ready .hero-enter-outline {
  animation: hero-enter-outline 1s cubic-bezier(0.22, 0.82, 0.12, 1) 0.35s forwards;
}

.hero-light--ready .hero-enter-outline--delay {
  animation-delay: 0.48s;
}

.hero-enter-photo {
  opacity: 0;
  transform: translate3d(0, 2rem, 0) scale(0.98);
}

.hero-light--ready .hero-enter-photo {
  animation: hero-enter-photo 1.05s cubic-bezier(0.22, 0.82, 0.12, 1) 0.22s forwards;
}

.hero-enter-caption {
  opacity: 0;
  transform: translate3d(0, 1rem, 0);
}

.hero-light--ready .hero-enter-caption {
  animation: hero-enter-up 0.85s cubic-bezier(0.22, 0.82, 0.12, 1) 0.55s forwards;
}

@keyframes hero-enter-up {
  from {
    opacity: 0;
    transform: translate3d(0, 1.35rem, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes hero-enter-photo {
  from {
    opacity: 0;
    transform: translate3d(0, 2rem, 0) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes hero-enter-outline {
  from {
    opacity: 0;
    transform: scale(0.94);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-enter-item,
  .hero-enter-outline,
  .hero-enter-photo,
  .hero-enter-caption {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }

  .hero-abstract__layer,
  .hero-outline-parallax,
  .hero-portrait-frame > .relative {
    transform: none !important;
  }
}
</style>
