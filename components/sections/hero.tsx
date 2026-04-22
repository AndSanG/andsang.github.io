import Image from 'next/image'
import { aboutController } from '@/src/di'
import { CvDialog } from '@/components/ui/cv-dialog'
import { HeroImage } from '@/components/ui/hero-image'
import { AnimatedMarquee } from '@/components/ui/animated-marquee'
import { TactileButton } from '@/components/ui/tactile-button'

export async function Hero() {
    const about = await aboutController.getAbout()

    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center bg-background dark:bg-black text-foreground dark:text-white overflow-hidden pt-20">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                {/* Text Column */}
                <div className="flex flex-col items-start gap-6 order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        {about.name}
                    </h1>
                    <h1 className="text-4xl md:text-3xl font-bold leading-tight">
                        Developing <br />
                        <span className="text-accent">High-Availability</span> <br />
                        Mobile Apps
                    </h1>
                    <div className="flex flex-col gap-3 text-zinc-500 dark:text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                        {about.heroDescription.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-4 items-center">
                        <TactileButton
                            href="#projects"
                            className="px-8 py-3 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-black transition-all duration-300"
                        >
                            View Work
                        </TactileButton>
                        <TactileButton
                            href="#contact"
                            className="px-8 py-3 rounded-xl border-2 border-transparent text-zinc-500 dark:text-gray-400 font-semibold hover:text-zinc-900 dark:hover:text-white transition-all duration-300"
                        >
                            Contact Me
                        </TactileButton>
                        <CvDialog />
                    </div>

                    <div className="mt-12 w-full max-w-lg">
                        <AnimatedMarquee items={about.skills} />
                    </div>
                </div>

                {/* Image Column */}
                <div className="order-1 md:order-2 flex items-center justify-center">
                    <HeroImage />
                </div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7c3aed] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}
