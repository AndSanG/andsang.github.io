import { ExperienceList } from "@/components/ui/experience-list"
import { experienceController } from "@/src/di"

export async function ExperienceSection() {
    const experiences = await experienceController.getExperiences()

    return (
        <section id="experience" className="bg-background dark:bg-black py-8 border-t border-zinc-200 dark:border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-8">
                    Professional <span className="text-accent">Journey</span>
                </h2>

                <ExperienceList experiences={experiences} />
            </div>
        </section>
    )
}
