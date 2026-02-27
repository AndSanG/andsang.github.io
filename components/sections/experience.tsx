import { ExperienceCard } from "@/components/ui/experience-card"
import { experienceController } from "@/src/di"

export async function ExperienceSection() {
    const experiences = await experienceController.getExperiences()

    return (
        <section id="experience" className="bg-background dark:bg-black py-24 border-t border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-20 text-center">
                    Professional <span className="text-accent">Journey</span>
                </h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-zinc-300 dark:bg-zinc-800 md:-translate-x-1/2 rounded-full hidden md:block"></div>

                    {/* Mobile Line (Left aligned) */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-zinc-300 dark:bg-zinc-800 md:hidden rounded-full"></div>


                    <div className="space-y-12 md:space-y-0">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={exp.id}
                                experience={exp}
                                isEven={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
