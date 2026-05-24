import type { Ref } from 'vue'

export type HeroParallaxLayer = {
  /** 0–1 — quanto o layer se move em relação ao alvo */
  depth: number
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function prefersReducedMotion() {
  return (
    typeof window.matchMedia !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Parallax no hero (scroll + mouse) com interpolação suave.
 * Retorna função de estilo por profundidade do layer.
 */
export function useHeroParallax(sectionRef: Ref<HTMLElement | null>) {
  const targetX = ref(0)
  const targetY = ref(0)
  const currentX = ref(0)
  const currentY = ref(0)

  let mouseX = 0
  let mouseY = 0
  let rafId = 0
  let didInit = false
  let sectionEl: HTMLElement | null = null

  const LERP = 0.1
  const EPS = 0.25
  const MAX_SCROLL = 100
  const MAX_MOUSE = 56

  function computeTarget() {
    if (!sectionRef.value) return { x: 0, y: 0 }

    const pageY = window.scrollY ?? document.documentElement.scrollTop ?? 0
    const rect = sectionRef.value.getBoundingClientRect()

    let strength = 1
    if (rect.bottom < 0) strength = Math.max(0, 1 + rect.bottom / (rect.height * 0.4))
    else if (rect.top > window.innerHeight)
      strength = Math.max(0, 1 - (rect.top - window.innerHeight) / window.innerHeight)

    const scrollY = clamp(pageY * 0.14 * strength, -MAX_SCROLL, MAX_SCROLL)
    const scrollX = clamp(pageY * 0.05 * strength, -40, 40)

    const mx = clamp(mouseX * strength, -MAX_MOUSE, MAX_MOUSE)
    const my = clamp(mouseY * strength, -MAX_MOUSE, MAX_MOUSE)

    return {
      x: clamp(scrollX + mx, -120, 120),
      y: clamp(scrollY + my, -120, 120),
    }
  }

  function tick() {
    rafId = 0
    const err = Math.hypot(targetX.value - currentX.value, targetY.value - currentY.value)

    currentX.value += (targetX.value - currentX.value) * LERP
    currentY.value += (targetY.value - currentY.value) * LERP

    if (err > EPS) rafId = requestAnimationFrame(tick)
    else {
      currentX.value = targetX.value
      currentY.value = targetY.value
    }
  }

  function bump() {
    if (!sectionRef.value) return

    if (prefersReducedMotion()) {
      const t = computeTarget()
      targetX.value = t.x
      targetY.value = t.y
      currentX.value = t.x
      currentY.value = t.y
      return
    }

    const t = computeTarget()
    targetX.value = t.x
    targetY.value = t.y

    if (!didInit) {
      currentX.value = t.x
      currentY.value = t.y
      didInit = true
      return
    }

    if (!rafId) rafId = requestAnimationFrame(tick)
  }

  function onPointerMove(e: PointerEvent) {
    if (e.pointerType !== 'mouse' || !sectionRef.value) return
    const r = sectionRef.value.getBoundingClientRect()
    if (r.width < 1 || r.height < 1) return
    const nx = (e.clientX - r.left) / r.width - 0.5
    const ny = (e.clientY - r.top) / r.height - 0.5
    mouseX = nx * 2 * MAX_MOUSE
    mouseY = ny * 2 * MAX_MOUSE * 0.75
    bump()
  }

  function onPointerLeave() {
    mouseX = 0
    mouseY = 0
    bump()
  }

  /** Estilo inline para um depth fixo (uso no template) */
  function styleAtDepth(depth: number) {
    return computed(() => ({
      transform: `translate3d(${currentX.value * depth}px, ${currentY.value * depth}px, 0)`,
    }))
  }

  onMounted(() => {
    sectionEl = sectionRef.value
    bump()
    window.addEventListener('scroll', bump, { passive: true })
    sectionEl?.addEventListener('pointermove', onPointerMove, { passive: true })
    sectionEl?.addEventListener('pointerleave', onPointerLeave)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', bump)
    sectionEl?.removeEventListener('pointermove', onPointerMove)
    sectionEl?.removeEventListener('pointerleave', onPointerLeave)
    sectionEl = null
    if (rafId) cancelAnimationFrame(rafId)
    mouseX = 0
    mouseY = 0
  })

  return { styleAtDepth }
}
