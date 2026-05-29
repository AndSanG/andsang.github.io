"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Props {
  href?: string
  onClick?: () => void
  className?: string
  children: ReactNode
}

export function TactileButton({ href, onClick, className = "", children }: Props) {
  const base = `relative overflow-hidden group flex items-center justify-center ${className}`
  const shine = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 dark:via-white/30 to-transparent skew-x-[-20deg]"
    />
  )

  if (href !== undefined) {
    return (
      <motion.a href={href} className={base} whileTap={{ scale: 0.95 }}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {shine}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={base} whileTap={{ scale: 0.95 }}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {shine}
    </motion.button>
  )
}
