import Image from 'next/image'

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
            <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <a href="#hero" className="block hover:opacity-80 transition-opacity flex gap-4">
                    <Image
                        src="/apple-logo.png"
                        alt="Apple Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                    />
                    <Image
                        src="/swift-logo.png"
                        alt="Swift Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                    />
                </a>

                <div className="flex gap-8">
                    <a href="#hero" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
                        About
                    </a>
                    <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
                        Projects
                    </a>
                    <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}
