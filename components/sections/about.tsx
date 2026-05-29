import { getAbout } from "@/src/di"
import { Reveal } from "@/components/ui/reveal"
import { AnimatedStats } from "@/components/ui/animated-stats"
import { AnimatedMarquee } from '@/components/ui/animated-marquee'

export async function AboutSection() {
    const about = await getAbout()

    return (
        <section id="about" className="bg-background dark:bg-black py-8 border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-8 text-center">
                        About <span className="text-accent">Me</span>
                    </h2>
                </Reveal>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {/* Bio */}
                    <div className="md:col-span-2 flex flex-col gap-5">
                        <Reveal delay={0.2}>
                            <div className="flex flex-col gap-5">
                                {about.bio.map((paragraph, i) => (
                                    <p key={i} className="text-zinc-600 dark:text-gray-300 text-lg leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Quick Stats */}
                    <AnimatedStats stats={about.stats} />
                </div>

                {/* Skills Marquee */}
                <div className="w-full mt-16">
                    <AnimatedMarquee items={about.skills} />
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#7c3aed] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}
