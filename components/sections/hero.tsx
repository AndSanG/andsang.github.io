import Image from 'next/image'

export function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center bg-black text-white overflow-hidden pt-20">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                {/* Text Column */}
                <div className="flex flex-col items-start gap-6">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Developing <br />
                        <span className="text-accent">High-Availability</span> <br />
                        IOS & Web Solutions
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                        Senior iOS Engineer with 8+ years of experience delivering resilient mobile banking apps (99.5% uptime) for millions of users.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <button className="px-8 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-black transition-all duration-300">
                            View Work
                        </button>
                        <button className="px-8 py-3 rounded-xl border-2 border-transparent text-gray-400 font-semibold hover:text-white transition-all duration-300">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Image Column */}
                <div className="relative h-[600px] w-full hidden md:block">
                    {/* Gradient Mask to blend image into black background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-20" />

                    <Image
                        src="/profile-cutout.png"
                        alt="Andres Sanchez"
                        fill
                        className="object-cover grayscale opacity-90"
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
