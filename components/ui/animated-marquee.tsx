"use client"

import { motion } from "framer-motion"

interface AnimatedMarqueeProps {
  items: string[]
}

export function AnimatedMarquee({ items }: AnimatedMarqueeProps) {
  // Duplicate items to ensure smooth infinite loop
  const marqueeItems = [...items, ...items, ...items, ...items]

  return (
    <div 
        className="w-full overflow-hidden flex items-center py-4"
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {marqueeItems.map((item, i) => (
          <div
            key={i}
            className="text-zinc-500 dark:text-zinc-500 font-heading tracking-wider font-semibold text-sm uppercase flex items-center"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
