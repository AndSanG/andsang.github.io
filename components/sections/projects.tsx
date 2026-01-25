import { Project, ProjectCard } from '@/components/ui/project-card'

// Mock Data Fetchers
async function getBancolombiaProject(): Promise<Project> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return {
        id: 'bancolombia',
        title: 'Bancolombia Mobile Banking',
        role: 'Senior iOS Engineer',
        description: 'High-availability banking app serving 10M+ users daily. Engineered to withstand massive transaction loads while maintaining fluid UX.',
        challenge: 'Achieving 99.5% uptime and strict SLA adherence while modernizing legacy architecture to VIPER/TCA.',
        techStack: ['Swift', 'VIPER', 'AWS', 'Firebase', 'Security']
    }
}

async function getWhiteLabelProject(): Promise<Project> {
    // Simulate different network delay
    await new Promise(resolve => setTimeout(resolve, 800))
    return {
        id: 'whitelabel',
        title: 'Server-Driven UI Platform',
        role: 'Architecture Lead',
        description: 'An adaptive banking interface system used by multiple regional financial institutions, allowing remote UI updates without app store releases.',
        challenge: 'Reduced feature deployment time by 60% by implementing detailed backend-driven layout logic.',
        techStack: ['Swift', 'Combine', 'Server-Driven UI', 'GraphQL']
    }
}

async function getPortfolioProject(): Promise<Project> {
    await new Promise(resolve => setTimeout(resolve, 300))
    return {
        id: 'portfolio',
        title: 'Next.js Performance Portfolio',
        role: 'Full Stack Developer',
        description: 'A dedicated showcase of Vercel\'s Agent Skills & React Best Practices, including waterfall elimination and zero-bundle actions.',
        challenge: 'Implementing advanced performance patterns like parallel fetching and static optimization from scratch.',
        techStack: ['Next.js 15', 'React Server Components', 'Tailwind', 'Vercel']
    }
}

export async function ProjectsSection() {
    // PARALLEL DATA FETCHING (Eliminating Waterfalls)
    // We initiate all fetches efficiently
    const bancolombiaData = getBancolombiaProject()
    const whiteLabelData = getWhiteLabelProject()
    const portfolioData = getPortfolioProject()

    // And await them all together
    const projects = await Promise.all([bancolombiaData, whiteLabelData, portfolioData])

    return (
        <section className="bg-black py-24 border-t border-zinc-900">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                    Selected <span className="text-[#0abefb]">Projects</span>
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
