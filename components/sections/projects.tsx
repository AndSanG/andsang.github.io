import { ProjectList } from '@/components/ui/project-list'
import { projectController } from '@/src/di'

export async function ProjectsSection() {
    const projects = await projectController.getProjects()

    return (
        <section id="projects" className="bg-background py-16 border-t border-zinc-200 dark:border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">
                    Selected <span className="text-accent">Projects</span>
                </h2>

                <ProjectList projects={projects} />
            </div>
        </section>
    )
}
