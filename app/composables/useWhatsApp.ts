export function useWhatsApp() {
  const config = useRuntimeConfig()

  const phone = computed(() =>
    String(config.public.whatsapp || '').replace(/\D/g, ''),
  )

  const hasWhatsApp = computed(() => phone.value.length >= 10)

  function buildUrl(message: string) {
    if (!hasWhatsApp.value) return config.public.doctoraliaUrl as string
    const text = encodeURIComponent(message)
    return `https://wa.me/${phone.value}?text=${text}`
  }

  function serviceLink(serviceName: string) {
    return buildUrl(
      `Olá! Vim pelo site drmessias.com.br e gostaria de informações sobre: ${serviceName}.`,
    )
  }

  function generalLink(context = 'agendar uma consulta') {
    return buildUrl(
      `Olá! Vim pelo site drmessias.com.br e gostaria de ${context}.`,
    )
  }

  return { hasWhatsApp, buildUrl, serviceLink, generalLink }
}
