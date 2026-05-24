<script setup lang="ts">
import { uikitNav } from '~/data/uikit'

const activeId = ref(uikitNav[0].id)

onMounted(() => {
  const sections = uikitNav
    .map((item) => document.getElementById(item.id))
    .filter(Boolean) as HTMLElement[]

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target?.id) activeId.value = visible.target.id
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
  )

  sections.forEach((el) => observer.observe(el))
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <nav aria-label="Seções do UI Kit">
    <!-- Mobile -->
    <div
      class="mb-8 flex gap-2 overflow-x-auto pb-2 lg:hidden"
      style="scrollbar-width: none"
    >
      <a
        v-for="item in uikitNav"
        :key="item.id"
        :href="`#${item.id}`"
        class="shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition"
        :class="
          activeId === item.id
            ? 'border-brand-900 bg-brand-900 text-white'
            : 'border-border bg-white text-brand-800/80'
        "
      >
        {{ item.label }}
      </a>
    </div>

    <!-- Desktop -->
    <ul class="hidden space-y-1 lg:block">
      <li v-for="item in uikitNav" :key="item.id">
        <a
          :href="`#${item.id}`"
          class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition"
          :class="
            activeId === item.id
              ? 'bg-brand-900 font-medium text-white'
              : 'text-brand-800/75 hover:bg-white hover:text-brand-900'
          "
        >
          <span
            class="size-1.5 shrink-0 rounded-full"
            :class="activeId === item.id ? 'bg-gold-500' : 'bg-border'"
          />
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
