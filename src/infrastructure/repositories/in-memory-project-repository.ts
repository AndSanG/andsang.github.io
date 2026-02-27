import { Project } from "../../entities/project"
import { ProjectRepository } from "../../application/repositories/project-repository"

export class InMemoryProjectRepository implements ProjectRepository {
    async getProjects(): Promise<Project[]> {
        // Simulate network delay
        // In a real app, this would query a DB or API

        const bancolombia: Project = {
            id: 'bancolombia',
            title: 'Tier-1 Mobile Banking App',
            role: 'Senior iOS Engineer',
            description: 'High-availability banking app serving 10M+ active users daily across Latin America. Engineered to withstand massive transaction loads while maintaining fluid UX under strict SLA and regulatory requirements.',
            challenge: 'Achieving 99.5% uptime and 95% on-time SLA resolution while modernizing a legacy MVC codebase to VIPER/TCA and maintaining ISO 27001 and OWASP MASVS compliance.',
            techStack: ['Swift', 'VIPER', 'TCA', 'Combine', 'Firebase', 'freeRASP']
        }

        const whiteLabel: Project = {
            id: 'whitelabel',
            title: 'Server-Driven UI Platform',
            role: 'Senior iOS Engineer',
            description: 'An adaptive white-label banking interface used by multiple regional financial institutions across Latin America, enabling remote UI updates without App Store releases. Utilized Combine to render backend-driven layouts at runtime.',
            challenge: 'Reducing feature deployment time by 60% by implementing backend-driven layout logic, enabling centralized UI management and eliminating per-client release cycles.',
            techStack: ['Swift', 'Combine', 'Server-Driven UI', 'GraphQL', 'AWS', 'Apollo']
        }

        const supercines: Project = {
            id: 'supercines',
            title: 'Cinema & Entertainment Platform',
            role: 'iOS Developer',
            description: 'Full-featured cinema app for a leading theater chain. Built a custom interactive seat-selection SDK from scratch and integrated PCI DSS-compliant payment processing with CoreData persistence for offline functionality.',
            challenge: 'Designing a reusable, pixel-accurate seat map SDK with custom touch handling, then integrating a compliant payment gateway under strict PCI DSS requirements.',
            techStack: ['Swift', 'Objective-C', 'UIKit', 'CoreData', 'MapKit', 'PCI DSS']
        }

        // Simulating parallel fetching delays from the original file
        await Promise.all([
            new Promise(resolve => setTimeout(resolve, 500)),
            new Promise(resolve => setTimeout(resolve, 800)),
            new Promise(resolve => setTimeout(resolve, 300))
        ])

        return [bancolombia, whiteLabel, supercines]
    }
}
