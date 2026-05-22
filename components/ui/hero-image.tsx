"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroImage() {
    return (
        <motion.div 
            className="flex items-center justify-center w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
            <Image
                src="/profile-cutout.webp"
                alt="Andres Sanchez"
                width={800}
                height={926}
                className="w-auto h-auto max-h-[350px] md:max-h-[500px] object-contain"
                priority
            />
        </motion.div>
    )
}

