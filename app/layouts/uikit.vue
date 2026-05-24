<template>
  <div class="min-h-screen bg-surface">
    <header
      class="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-lg"
    >
      <div
        class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8"
      >
        <NuxtLink to="/uikit" class="shrink-0 opacity-95 transition hover:opacity-100">
          <AppLogo size="sm" />
        </NuxtLink>

        <div class="flex items-center gap-4">
          <span
            class="hidden rounded-full border border-border bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-800/55 sm:inline"
          >
            v1.0 · interno
          </span>
          <NuxtLink
            to="/"
            class="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-brand-900 transition hover:border-gold-500/50 hover:bg-white"
          >
            Voltar ao site
          </NuxtLink>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-border bg-white py-10">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-left lg:px-8"
      >
        <p class="text-xs text-brand-800/50">
          Design System · Dr. José Messias · Uso interno
        </p>
        <p class="font-mono text-[10px] text-brand-800/40">
          tokens.css · designsystem.md
        </p>
      </div>
    </footer>
  </div>
</template>
