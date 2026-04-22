"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroImage() {
    return (
        <motion.div 
            className="relative h-[400px] md:h-[600px] w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
            <Image
                src="/profile-cutout.webp"
                alt="Andres Sanchez"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </motion.div>
    )
}
