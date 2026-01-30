import { ProjectCard } from '@/components/ui/project-card'
import { projectController } from '@/src/di'

export async function ProjectsSection() {
    const projects = await projectController.getProjects()

    return (
        <section id="projects" className="bg-black py-24 border-t border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                    Selected <span className="text-accent">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
