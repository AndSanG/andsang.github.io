import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 dark:bg-black/50 border-b border-black/5 dark:border-white/10 transition-colors">
            <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <a href="#hero" className="block hover:opacity-80 transition-opacity flex gap-4">
                    <Image
                        src="/apple-logo.png"
                        alt="Apple Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain dark:invert"
                    />
                    <Image
                        src="/swift-logo.png"
                        alt="Swift Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                    />
                </a>

                <div className="flex gap-6 items-center">
                    <div className="hidden md:flex gap-8">
                        <a href="#about" className="text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
                            About
                        </a>
                        <a href="#projects" className="text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
                            Projects
                        </a>
                        <a href="#contact" className="text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
                            Contact
                        </a>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
