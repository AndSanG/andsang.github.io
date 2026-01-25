export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
            <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold tracking-tight text-white hover:text-accent transition-colors">
                    Andres Sanchez
                </a>

                <div className="flex gap-8">
                    <a href="#hero" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
                        About
                    </a>
                    <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
                        Projects
                    </a>
                    {/* Future link for Contact or CV */}
                </div>
            </div>
        </nav>
    )
}
