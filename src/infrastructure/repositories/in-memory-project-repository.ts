import { Project } from "../../entities/project"
import { ProjectRepository } from "../../application/repositories/project-repository"

export class InMemoryProjectRepository implements ProjectRepository {
    async getProjects(): Promise<Project[]> {
        const iuvibanking: Project = {
            id: 'iuvibanking',
            title: 'iuviBANKING Platform',
            role: 'Senior iOS Engineer — Technical Coordinator',
            description: 'Production certification authority across React microfrontends, React Native, and the iOS native layer — cutting deployment time by 60% through Server-Driven UI.',
            challenge: 'Maintaining zero-defect handoffs across independent teams through certification gates, failure triage, and ownership routing — without people-management authority.',
            techStack: ['React', 'React Native', 'Swift', 'TypeScript', 'AWS', 'Modyo', 'OIDC', 'Server-Driven UI'],
            imagePath: '/projects/iuvibanking.webp',
        }

        const bancolombia: Project = {
            id: 'bancolombia',
            title: 'Bancolombia iOS App',
            role: 'Senior iOS Engineer',
            description: 'iOS banking app for 10M+ active users — 99.5% uptime, 95% on-time SLA, full security compliance stack.',
            challenge: 'Modernizing a legacy MVC codebase to VIPER and state-driven patterns without disrupting a live app under continuous high-volume traffic.',
            techStack: ['Swift', 'VIPER', 'MVVM', 'Combine', 'Firebase', 'freeRASP'],
            imagePath: '/projects/bancolombia.webp',
        }

        const supercines: Project = {
            id: 'supercines',
            title: 'Cinema & Entertainment Platform',
            role: 'iOS Developer',
            description: 'Cinema app for Supercines — custom seat-selection SDK, PCI DSS-compliant payments, and CoreData offline support.',
            challenge: 'Building a pixel-accurate interactive seat map SDK with custom touch handling, then wiring a compliant payment gateway under strict PCI DSS requirements.',
            techStack: ['Swift', 'Objective-C', 'UIKit', 'CoreData', 'MapKit', 'PCI DSS'],
            imagePath: '/projects/supercines.webp',
        }

        return [iuvibanking, bancolombia, supercines]
    }
}
