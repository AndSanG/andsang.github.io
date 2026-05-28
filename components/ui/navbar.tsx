"use client"
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { useGlassTilt } from '@/hooks/use-glass-tilt'

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "More", href: "#more-about" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const { scrollYProgress } = useScroll()
    const [activeSection, setActiveSection] = useState("")
    const [menuOpen, setMenuOpen] = useState(false)
    const { ref: pillRef, tilt, onMouseMove, onMouseLeave } = useGlassTilt(0.8)

    const breadTopOpenRef    = useRef<SVGAnimateElement>(null)
    const breadTopCloseRef   = useRef<SVGAnimateElement>(null)
    const breadBotOpenRef    = useRef<SVGAnimateElement>(null)
    const breadBotCloseRef   = useRef<SVGAnimateElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { rootMargin: "-20% 0px -80% 0px" }
        )
        const sections = document.querySelectorAll("section[id]")
        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    // Close menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
        window.addEventListener("resize", onResize, { passive: true })
        return () => window.removeEventListener("resize", onResize)
    }, [])

    function toggleMenu() {
        const opening = !menuOpen
        setMenuOpen(opening)
        if (opening) {
            breadTopOpenRef.current?.beginElement()
            breadBotOpenRef.current?.beginElement()
        } else {
            breadTopCloseRef.current?.beginElement()
            breadBotCloseRef.current?.beginElement()
        }
    }

    function closeMenu() {
        if (!menuOpen) return
        setMenuOpen(false)
        breadTopCloseRef.current?.beginElement()
        breadBotCloseRef.current?.beginElement()
    }

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
                className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 px-4 md:px-8"
                style={{ perspective: "800px" }}
            >
                <motion.div
                    ref={pillRef}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    animate={{ rotateY: tilt.x, rotateX: tilt.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="max-w-3xl mx-auto pointer-events-auto rounded-2xl bg-white/70 dark:bg-zinc-900/50 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 dark:border-white/10 shadow-lg shadow-black/8 dark:shadow-black/30 ring-1 ring-inset ring-white/40 dark:ring-white/5 transition-colors"
                >
                <div className="px-5 h-14 flex items-center justify-between">
                    <a href="#hero" className="block hover:opacity-80 transition-opacity flex gap-4">
                        <Image src="/swift-logo.png" alt="Swift Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                        <Image src="/tri.png" alt="Triathlon" width={40} height={40} className="w-10 h-10 object-contain dark:invert" />
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500
                                    ${activeSection === link.href.substring(1)
                                        ? "text-accent"
                                        : "text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile: theme toggle + hamburger */}
                    <div className="flex md:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={toggleMenu}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className="text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent transition-colors p-1"
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                                <polyline fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12">
                                    <animate ref={breadBotOpenRef}  attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42,0,1,1;0,0,0.58,1" values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5" />
                                    <animate ref={breadBotCloseRef} attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42,0,1,1;0,0,0.58,1" values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12" />
                                </polyline>
                                <polyline fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5">
                                    <animate ref={breadTopOpenRef}  attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42,0,1,1;0,0,0.58,1" values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15" />
                                    <animate ref={breadTopCloseRef} attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42,0,1,1;0,0,0.58,1" values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5" />
                                </polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden md:hidden border-t border-white/30 dark:border-white/5"
                        >
                            <div className="px-5 py-4 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className={`text-sm font-medium transition-colors py-1
                                            ${activeSection === link.href.substring(1)
                                                ? "text-accent"
                                                : "text-zinc-600 dark:text-gray-300"}`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                </motion.div>
            </nav>
        </>
    )
}
