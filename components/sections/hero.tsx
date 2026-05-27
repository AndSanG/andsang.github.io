import { getAbout } from '@/src/di'
import { CvDialog } from '@/components/ui/cv-dialog'
import { HeroImage } from '@/components/ui/hero-image'
import { TactileButton } from '@/components/ui/tactile-button'

export async function Hero() {
    const about = await getAbout()

    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center bg-background dark:bg-black text-foreground dark:text-white overflow-x-hidden pt-20">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                {/* Text Column */}
                <div className="flex flex-col items-start gap-6 order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        {about.name}
                    </h1>
                    <h2 className="text-4xl md:text-3xl font-bold leading-tight">
                        Developing <br />
                        <span className="text-accent">High-Availability</span> <br />
                        Mobile Apps
                    </h2>
                    <p className="text-zinc-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed w-full">
                        {about.heroDescription.map((line, i) => (
                            <span key={i} className="md:block">{line}{' '}</span>
                        ))}
                    </p>

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
                </div>

                {/* Image Column */}
                <div className="order-1 md:order-2 flex items-center justify-center">
                    <HeroImage />
                </div>

            </div>

            {/* Background Fluid Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="fluid-shape fluid-shape-1" />
                <div className="fluid-shape fluid-shape-2" />
                <div className="fluid-shape fluid-shape-3" />
            </div>
        </section>
    )
}
