import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Navbar() {
    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-white dark:focus:bg-zinc-900 focus:text-black dark:focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
                Skip to content
            </a>
            <nav
                aria-label="Main navigation"
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 dark:bg-black/50 border-b border-black/5 dark:border-white/10 transition-colors"
            >
                <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                    <a href="#hero" className="block hover:opacity-80 transition-opacity flex gap-4">
                        <Image
                            src="/apple-logo.png"
                            alt="Apple Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain invert dark:invert-0"
                        />
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
                        <a href="#about" className="text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">
                            About
                        </a>
                        <a href="#projects" className="text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">
                            Projects
                        </a>
                        <a href="#more-about" className="text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">
                            More
                        </a>
                        <a href="#contact" className="text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">
                            Contact
                        </a>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </>
    )
}
