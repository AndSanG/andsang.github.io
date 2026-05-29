"use client"

import { useRef, useEffect, useState } from "react"
import { AboutStatViewModel } from "@/src/interface-adapters/presenters/about-presenter"

export function AnimatedStats({ stats }: { stats: AboutStatViewModel[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current!.querySelectorAll("[data-stat]").forEach((el, i) => {
            ;(el as HTMLElement).style.animationDelay = `${i * 0.1}s`
            el.classList.remove("stat-hidden")
            el.classList.add("stat-visible")
          })
          observer.disconnect()
        }
      },
      { rootMargin: "-50px" }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [mounted])

  return (
    <div ref={ref} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-5 glass-card">
      {stats.map((stat) => (
        <div
          key={stat.label}
          data-stat
          className={`flex flex-col gap-1 ${mounted ? "stat-hidden" : ""}`}
        >
          <span className="text-xs font-medium text-zinc-400 dark:text-gray-500 uppercase tracking-wider">{stat.label}</span>
          <span className="text-lg font-bold text-foreground dark:text-white">{stat.value}</span>
        </div>
      ))}
    </div>
  )
}
