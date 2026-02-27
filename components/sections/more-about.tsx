import Image from 'next/image'
import { aboutController } from "@/src/di"

export async function MoreAboutSection() {
    const about = await aboutController.getAbout()

    return (
        <section id="more-about" className="bg-background dark:bg-black py-24 border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div className="flex flex-col gap-6 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white">
                        More <span className="text-accent">About Me</span>
                    </h2>

                    {about.personalBio.map((paragraph, i) => (
                        <p key={i} className="text-zinc-600 dark:text-gray-300 text-lg leading-relaxed">
                            {paragraph}
                        </p>
                    ))}

                    <p className="text-zinc-600 dark:text-gray-300 text-lg leading-relaxed">
                        When I&apos;m not coding, I like:
                    </p>

                    {/* Swift-styled code snippet */}
                    <div className="rounded-2xl bg-zinc-950 border border-zinc-800 px-6 py-5 font-mono text-sm md:text-base w-full overflow-x-auto">
                        <span className="text-purple-400">let</span>
                        <span className="text-white"> hobbies</span>
                        <span className="text-zinc-400"> = </span>
                        <span className="text-zinc-400">[</span>
                        {about.hobbies.map((hobby, i) => (
                            <span key={hobby}>
                                <span className="text-orange-300">&quot;{hobby}&quot;</span>
                                {i < about.hobbies.length - 1 && (
                                    <span className="text-zinc-400">, </span>
                                )}
                            </span>
                        ))}
                        <span className="text-zinc-400">]</span>
                    </div>
                </div>

                {/* Image Column */}
                <div className="relative h-[400px] md:h-[600px] w-full order-1 md:order-2">
                    <Image
                        src="/about-me.webp"
                        alt="Andrés Sánchez"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7c3aed] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}
