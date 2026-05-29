"use client"
import { ReactNode } from "react"

interface Props {
  href?: string
  onClick?: () => void
  className?: string
  children: ReactNode
}

export function TactileButton({ href, onClick, className = "", children }: Props) {
  const base = `relative overflow-hidden group flex items-center justify-center active:scale-95 transition-transform duration-100 ${className}`
  const shine = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 dark:via-white/30 to-transparent skew-x-[-20deg]"
    />
  )

  if (href !== undefined) {
    return (
      <a href={href} className={base}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {shine}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={base}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {shine}
    </button>
  )
}
