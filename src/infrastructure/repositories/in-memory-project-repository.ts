import { Project } from "../../entities/project"
import { ProjectRepository } from "../../application/repositories/project-repository"

export class InMemoryProjectRepository implements ProjectRepository {
    async getProjects(): Promise<Project[]> {
        const iuvibanking: Project = {
            id: 'iuvibanking',
            title: 'iuviBANKING Platform',
            role: 'Senior iOS Engineer — Technical Coordinator',
            description: 'Multi-client banking SaaS platform deployed for Financiera Comultrasan, Banco Mundo Mujer Retail, and BMM Corporate. Held production certification authority — all artifacts required sign-off before reaching operations. Implemented Server-Driven UI to enable remote layout updates without App Store releases, cutting deployment time by 60%. Cross-cutting visibility across product, UI/UX, implementation, functional, and ops teams.',
            challenge: 'Maintaining zero-defect production handoffs across independent teams — through certification gates, failure triage, and ownership routing — while owning the AppShell web-to-native bridge and Swift/Objective-C native modules for the React Native shell.',
            techStack: ['React', 'React Native', 'Swift', 'TypeScript', 'AWS', 'Modyo', 'OIDC', 'Server-Driven UI']
        }

        const bancolombia: Project = {
            id: 'bancolombia',
            title: 'Bancolombia iOS App',
            role: 'Senior iOS Engineer',
            description: 'High-availability iOS banking app for Bancolombia (10M+ active users), delivered through iuvity\'s SaaS platform. Engineered to withstand massive transaction loads while maintaining fluid UX under strict SLA and regulatory requirements.',
            challenge: 'Achieving 99.5% uptime and 95% on-time SLA resolution while modernizing a legacy MVC codebase to VIPER and state-driven patterns and maintaining ISO 27001 and OWASP MASVS compliance.',
            techStack: ['Swift', 'VIPER', 'MVVM', 'Combine', 'Firebase', 'freeRASP']
        }

        const supercines: Project = {
            id: 'supercines',
            title: 'Cinema & Entertainment Platform',
            role: 'iOS Developer',
            description: 'Full-featured cinema app for Supercines, a leading theater chain in Ecuador, delivered through Bayteq. Built a custom interactive seat-selection SDK from scratch and integrated PCI DSS-compliant payment processing with CoreData persistence for offline functionality.',
            challenge: 'Designing a reusable, pixel-accurate seat map SDK with custom touch handling, then integrating a compliant payment gateway under strict PCI DSS requirements.',
            techStack: ['Swift', 'Objective-C', 'UIKit', 'CoreData', 'MapKit', 'PCI DSS']
        }

        return [iuvibanking, bancolombia, supercines]
    }
}
