"use client"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

export function AnimatedSkills({ skills }: { skills: string[] }) {
  return (
    <motion.div 
        className="flex flex-wrap gap-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
    >
      {skills.map((skill) => (
        <motion.span
            key={skill}
            variants={item}
            className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-gray-300 text-sm font-medium border border-zinc-200 dark:border-zinc-800/50"
        >
            {skill}
        </motion.span>
      ))}
    </motion.div>
  )
}
