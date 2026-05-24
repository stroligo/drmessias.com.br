export const uikitNav = [
  { id: 'visao', label: 'Visão geral' },
  { id: 'logo', label: 'Logo' },
  { id: 'cores', label: 'Cores' },
  { id: 'tipografia', label: 'Tipografia' },
  { id: 'componentes', label: 'Componentes' },
  { id: 'layout', label: 'Layout' },
  { id: 'marca', label: 'Marca' },
] as const

export const uikitColors = {
  primary: [
    {
      name: 'Azul Petróleo',
      hex: '#06263B',
      rgb: '6, 38, 59',
      token: '--color-primary',
      tw: 'brand-900',
      role: 'Cor principal da marca',
    },
    {
      name: 'Azul Hover',
      hex: '#0B3653',
      rgb: '11, 54, 83',
      token: '--color-primary-hover',
      tw: 'brand-800',
      role: 'Estados hover e profundidade',
    },
    {
      name: 'Dourado Fosco',
      hex: '#C8A35D',
      rgb: '200, 163, 93',
      token: '--color-gold',
      tw: 'gold-500',
      role: 'Acentos, linhas e detalhes premium',
    },
  ],
  neutral: [
    {
      name: 'Off White',
      hex: '#F7F5F2',
      token: '--color-background',
      tw: 'surface',
      role: 'Fundo principal do site',
      dark: true,
    },
    {
      name: 'Muted',
      hex: '#EFECE8',
      token: '--color-background-muted',
      tw: 'surface-muted',
      role: 'Seções alternadas',
      dark: true,
    },
    {
      name: 'Cinza',
      hex: '#D9D9D6',
      token: '--color-border',
      tw: 'border',
      role: 'Bordas e divisores',
      dark: true,
    },
    {
      name: 'Branco',
      hex: '#FFFFFF',
      token: '--color-white',
      tw: 'white',
      role: 'Cards e superfícies',
      dark: true,
      ring: true,
    },
  ],
} as const

export const typeScale = [
  { name: 'Display', sample: 'Cirurgia com precisão', class: 'font-display text-4xl italic sm:text-5xl', meta: 'Cormorant · 36–48px · Italic' },
  { name: 'H1', sample: 'Tratamento da obesidade', class: 'text-3xl font-medium tracking-tight sm:text-4xl', meta: 'Montserrat Medium · 36px' },
  { name: 'H2', sample: 'Nossos serviços', class: 'text-2xl font-medium sm:text-3xl', meta: 'Montserrat Medium · 24–30px' },
  { name: 'H3', sample: 'Cirurgia bariátrica', class: 'text-lg font-medium', meta: 'Montserrat Medium · 18px' },
  { name: 'Body', sample: 'Consultas e procedimentos com atendimento humanizado e indicação individualizada para cada paciente.', class: 'text-base leading-relaxed text-brand-800/80', meta: 'Montserrat Regular · 16px · 150%' },
  { name: 'Eyebrow', sample: 'Cirurgia com precisão', class: 'text-xs font-medium uppercase tracking-[0.2em] text-gold-600', meta: 'Montserrat Medium · 12px · caps' },
  { name: 'Caption', sample: 'CRM-DF 19679 · RQE 14246', class: 'text-xs text-brand-800/55', meta: 'Montserrat Regular · 12px' },
] as const

export const pillars = [
  { title: 'Confiança', desc: 'Segurança e autoridade na relação com o paciente', icon: '◆' },
  { title: 'Experiência', desc: 'Trajetória em urgência, público e privado', icon: '◇' },
  { title: 'Precisão', desc: 'Técnica cirúrgica e indicação responsável', icon: '○' },
  { title: 'Humanização', desc: 'Acolhimento e linguagem clara', icon: '◎' },
] as const
