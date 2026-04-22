"use client"
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

export function Navbar() {
    const { scrollYProgress } = useScroll()
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: "-20% 0px -80% 0px" }
        )

        const sections = document.querySelectorAll("section[id]")
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "More", href: "#more-about" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-white dark:focus:bg-zinc-900 focus:text-black dark:focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
                Skip to content
            </a>
            
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            <nav
                aria-label="Main navigation"
                className="fixed top-0 left-0 right-0 z-50 glass-card !rounded-none !border-x-0 !border-t-0 transition-colors"
            >
                <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                    <a href="#hero" className="block hover:opacity-80 transition-opacity flex gap-4">
                        <Image
                            src="/swift-logo.png"
                            alt="Swift Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                        />
                        <Image
                            src="/tri.png"
                            alt="Triathlon"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain dark:invert"
                        />
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href} 
                                className={`text-sm font-medium transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500
                                ${activeSection === link.href.substring(1) 
                                    ? "text-accent dark:text-accent" 
                                    : "text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"}`
                                }
                            >
                                {link.name}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </>
    )
}
