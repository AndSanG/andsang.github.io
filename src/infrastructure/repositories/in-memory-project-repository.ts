import { Project } from "../../entities/project"
import { ProjectRepository } from "../../application/repositories/project-repository"

export class InMemoryProjectRepository implements ProjectRepository {
    async getProjects(): Promise<Project[]> {
        // Simulate network delay
        // In a real app, this would query a DB or API

        const bancolombia: Project = {
            id: 'bancolombia',
            title: 'Bancolombia Mobile Banking',
            role: 'Senior iOS Engineer',
            description: 'High-availability banking app serving 10M+ users daily. Engineered to withstand massive transaction loads while maintaining fluid UX.',
            challenge: 'Achieving 99.5% uptime and strict SLA adherence while modernizing legacy architecture to VIPER/TCA.',
            techStack: ['Swift', 'VIPER', 'AWS', 'Firebase', 'Security']
        }

        const whiteLabel: Project = {
            id: 'whitelabel',
            title: 'Server-Driven UI Platform',
            role: 'Architecture Lead',
            description: 'An adaptive banking interface system used by multiple regional financial institutions, allowing remote UI updates without app store releases.',
            challenge: 'Reduced feature deployment time by 60% by implementing detailed backend-driven layout logic.',
            techStack: ['Swift', 'Combine', 'Server-Driven UI', 'GraphQL']
        }

        const portfolio: Project = {
            id: 'portfolio',
            title: 'Next.js Performance Portfolio',
            role: 'Full Stack Developer',
            description: 'A dedicated showcase of Vercel\'s Agent Skills & React Best Practices, including waterfall elimination and zero-bundle actions.',
            challenge: 'Implementing advanced performance patterns like parallel fetching and static optimization from scratch.',
            techStack: ['Next.js 15', 'React Server Components', 'Tailwind', 'Vercel']
        }

        // Simulating parallel fetching delays from the original file
        await Promise.all([
            new Promise(resolve => setTimeout(resolve, 500)),
            new Promise(resolve => setTimeout(resolve, 800)),
            new Promise(resolve => setTimeout(resolve, 300))
        ])

        return [bancolombia, whiteLabel, portfolio]
    }
}
