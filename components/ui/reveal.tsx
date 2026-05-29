"use client"

import { useRef, useEffect, useState } from "react"

interface Props {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
}

export const Reveal = ({ children, width = "100%", delay = 0 }: Props) => {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted || !outerRef.current || !innerRef.current) return
    const inner = innerRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inner.style.animationDelay = `${delay}s`
          inner.classList.remove("reveal-hidden")
          inner.classList.add("reveal-visible")
          observer.disconnect()
        }
      },
      { rootMargin: "-50px" }
    )

    observer.observe(outerRef.current)
    return () => observer.disconnect()
  }, [mounted, delay])

  if (!mounted) {
    return <div style={{ position: "relative", width }}>{children}</div>
  }

  return (
    <div ref={outerRef} style={{ position: "relative", width }}>
      <div ref={innerRef} className="reveal-hidden">
        {children}
      </div>
    </div>
  )
}
