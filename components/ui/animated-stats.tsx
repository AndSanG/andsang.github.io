"use client"
import { motion } from "framer-motion"
import { AboutStat } from "@/src/entities/about"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

export function AnimatedStats({ stats }: { stats: AboutStat[] }) {
  return (
    <motion.div 
        className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-5 glass-card"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={item} className="flex flex-col gap-1">
            <span className="text-xs font-medium text-zinc-400 dark:text-gray-500 uppercase tracking-wider">{stat.label}</span>
            <span className="text-lg font-bold text-foreground dark:text-white">{stat.value}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
