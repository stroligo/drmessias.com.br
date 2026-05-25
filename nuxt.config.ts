import tailwindcss from '@tailwindcss/vite'

const GA_MEASUREMENT_ID = 'G-61ZG4PKLJK'

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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Montserrat:wght@300;400;500;600&display=swap',
        },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
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
