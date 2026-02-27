import { aboutController } from "@/src/di"
import { AboutStat } from "@/src/entities/about"

export async function AboutSection() {
    const about = await aboutController.getAbout()

    return (
        <section id="about" className="bg-background dark:bg-black py-24 border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-16 text-center">
                    About <span className="text-accent">Me</span>
                </h2>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {/* Bio */}
                    <div className="md:col-span-2 flex flex-col gap-5">
                        {about.bio.map((paragraph, i) => (
                            <p key={i} className="text-zinc-600 dark:text-gray-300 text-lg leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Quick Stats */}
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-5">
                        {about.stats.map((stat) => (
                            <StatItem key={stat.label} stat={stat} />
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="max-w-4xl mx-auto mt-16">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white mb-6">Core Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {about.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-gray-300 text-sm font-medium border border-zinc-200 dark:border-zinc-800"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#7c3aed] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}

function StatItem({ stat }: { stat: AboutStat }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-zinc-400 dark:text-gray-500 uppercase tracking-wider">{stat.label}</span>
            <span className="text-lg font-bold text-foreground dark:text-white">{stat.value}</span>
        </div>
    )
}
