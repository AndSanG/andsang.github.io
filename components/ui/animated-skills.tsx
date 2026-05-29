"use client"

import { useRef, useEffect, useState } from "react"

export function AnimatedSkills({ skills }: { skills: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current!.querySelectorAll("[data-skill]").forEach((el, i) => {
            ;(el as HTMLElement).style.animationDelay = `${i * 0.05}s`
            el.classList.remove("skill-hidden")
            el.classList.add("skill-visible")
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
    <div ref={ref} className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          data-skill
          className={`px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-gray-300 text-sm font-medium border border-zinc-200 dark:border-zinc-800/50 ${mounted ? "skill-hidden" : ""}`}
        >
          {skill}
        </span>
      ))}
    </div>
  )
}
