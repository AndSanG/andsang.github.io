import Image from 'next/image'

export function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center bg-background dark:bg-black text-foreground dark:text-white overflow-hidden pt-20">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                {/* Text Column */}
                <div className="flex flex-col items-start gap-6 order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Andrés Sánchez
                    </h1>
                    <h1 className="text-4xl md:text-3xl font-bold leading-tight">
                        Developing <br />
                        <span className="text-accent">High-Availability</span> <br />
                        Mobile Apps
                    </h1>
                    <p className="text-zinc-500 dark:text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                        Senior iOS Engineer with 8+ years of experience delivering resilient mobile banking apps (99.5% uptime) for millions of users.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-black transition-all duration-300"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-xl border-2 border-transparent text-zinc-500 dark:text-gray-400 font-semibold hover:text-zinc-900 dark:hover:text-white transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Image Column */}
                <div className="relative h-[400px] md:h-[600px] w-full order-1 md:order-2">
                    {/* Gradient Mask to blend image into black background */}



                    <Image
                        src="/profile-cutout.png"
                        alt="Andres Sanchez"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7c3aed] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}
