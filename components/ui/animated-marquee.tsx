interface AnimatedMarqueeProps {
  items: string[]
}

export function AnimatedMarquee({ items }: AnimatedMarqueeProps) {
  const marqueeItems = [...items, ...items, ...items, ...items]

  return (
    <div
        className="w-full overflow-hidden flex items-center py-4"
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div className="flex gap-12 whitespace-nowrap min-w-max marquee-track">
        {marqueeItems.map((item, i) => (
          <div
            key={i}
            className="text-zinc-500 dark:text-zinc-500 font-heading tracking-wider font-semibold text-sm uppercase flex items-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
