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
  const isLink = href !== undefined
  
  const baseClasses = `relative overflow-hidden group flex items-center justify-center ${className}`

  const shineElement = (
    <span className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out] bg-gradient-to-r from-transparent via-white/20 dark:via-white/30 to-transparent skew-x-[-20deg]" />
  )

  if (isLink) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{children}</span>
        {shineElement}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      {shineElement}
    </motion.button>
  )
}
