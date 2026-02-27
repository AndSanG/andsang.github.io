import { Project } from '@/src/entities/project'

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-accent/50 transition-colors">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-accent text-sm font-medium mb-4">{project.role}</p>

            <div className="space-y-4 text-gray-400 text-sm">
                <p>{project.description}</p>
                <div className="bg-zinc-100 dark:bg-zinc-950 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800/50">
                    <strong className="block text-zinc-600 dark:text-gray-300 mb-1 text-xs uppercase tracking-wider">Challenge</strong>
                    {project.challenge}
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-gray-300 border border-zinc-300 dark:border-zinc-700"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}
