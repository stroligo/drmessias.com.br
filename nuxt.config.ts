import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // layout/AppHeader.vue → <AppHeader>, sections/HeroSection.vue → <HeroSection>
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Dr. José Messias | Cirurgião Geral e Bariátrica — Brasília',
      meta: [
        {
          name: 'description',
          content:
            'Cirurgião geral em Brasília. Cirurgia bariátrica, tratamento da obesidade, videolaparoscopia e cirurgia do aparelho digestivo com atendimento humanizado.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Montserrat:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      whatsapp: '',
      doctoraliaUrl:
        'https://www.doctoralia.com.br/jose-messias-oliveira-junior/cirurgiao-geral/brasilia',
      instagramUrl: 'https://www.instagram.com/dr.josemessias/',
      ollivUrl: 'https://ollivpericias.com.br/',
    },
  },
})
