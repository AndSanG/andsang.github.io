import { useRef, useCallback } from "react"

export function useGlassTilt(intensity = 1) {
    const ref = useRef<HTMLDivElement>(null)

    const onMouseMove = useCallback((e: React.MouseEvent) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6 * intensity
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -3 * intensity
        el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg)`
    }, [intensity])

    const onMouseLeave = useCallback(() => {
        const el = ref.current
        if (el) el.style.transform = ""
    }, [])

    return { ref, onMouseMove, onMouseLeave }
}
