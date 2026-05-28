import { useRef, useState, useCallback } from "react"

export function useGlassTilt(intensity = 1) {
    const ref = useRef<HTMLDivElement>(null)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })

    const onMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6 * intensity
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -3 * intensity
        setTilt({ x, y })
    }, [intensity])

    const onMouseLeave = useCallback(() => {
        setTilt({ x: 0, y: 0 })
    }, [])

    return { ref, tilt, onMouseMove, onMouseLeave }
}
