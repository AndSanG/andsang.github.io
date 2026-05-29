import { Experience } from "../../entities/experience"
import { ExperienceRepository } from "../../application/repositories/experience-repository"

export class InMemoryExperienceRepository implements ExperienceRepository {
    async getExperiences(): Promise<Experience[]> {
        return [
            {
                id: "2023",
                year: "2023 - 2025",
                title: "Senior Software Engineer (iOS · React / React Native)",
                company: "iuvity (Todo1 Services Inc.)",
                description: "Senior technical reference and production certification authority for iuviBANKING — iuvity's white-label banking SaaS deployed for Financiera Comultrasan, Banco Mundo Mujer Retail, and BMM Corporate. All artifacts required sign-off before reaching operations. Owned the AppShell web-to-native bridge and Swift/Objective-C native modules for the React Native shell. Highest AWS developer access across all client accounts.",
                imagePath: '/iuvity.jpeg',
                color: "text-green-600"
            },
            {
                id: "2020",
                year: "2020 - 2023",
                title: "Senior iOS Engineer",
                company: "iuvity (Todo1 Services Inc.)",
                description: "Engineered resilient iOS banking apps for Bancolombia (10M+ active users) through iuvity's SaaS platform. Achieved 99.5% availability and 95% on-time SLA resolution. Drove architecture from MVC to VIPER and state-driven patterns, improving testability by 40%. Implemented Server-Driven UI, cutting deployment time by 60%. Delivered ISO 27001, OWASP MASVS, and PCI DSS compliance — FaceID, Apple Pay, SSL pinning, jailbreak detection.",
                imagePath: '/iuvity.jpeg',
                color: "text-green-700 dark:text-green-500"
            },
            {
                id: "2018",
                year: "2018 - 2020",
                title: "MSc Applied Computer Science",
                company: "Vrije Universiteit Brussel — Brussels, Belgium",
                description: "Government-funded scholarship. Graduated with Distinction. Thesis: Minimalistic AI Architectures for Language Models — developed a cognitive architecture for explainable AI bridging statistical language modeling and brain-inspired predictive processing.",
                imagePath: '/vub.jpeg',
                color: "text-sky-600"
            },
            {
                id: "2017",
                year: "2017 - 2018",
                title: "Mid-level iOS Developer",
                company: "iuvity (Todo1 Services Inc.)",
                description: "Delivered banking UI features for Banistmo (Panama) using VIPER architecture through iuvity's SaaS platform. Refactored legacy Objective-C codebases to Swift, migrated layouts to iPhone X (Safe Area, AutoLayout), and coordinated App Store releases via TestFlight, Fastlane, and Jenkins. Stepped up as de facto coordinator for a distributed team of external providers.",
                imagePath: '/iuvity.jpeg',
                color: "text-green-700 dark:text-green-400"
            },
            {
                id: "2015",
                year: "2015 - 2017",
                title: "iOS Developer",
                company: "Bayteq Cia Ltda",
                description: "Built Supercines Cinema App with a custom seat-selection SDK and PCI DSS-compliant payments. Developed white-label mobile banking for Produbanco and integrated FacePhi biometric verification for Banco Bolivariano. Developed a Points of Interest module (branches/ATMs) using MapKit. Contributed to a 20-week Agile transformation from concept to App Store.",
                imagePath: '/bayteq.jpeg',
                color: "text-sky-700 dark:text-sky-400"
            }
        ]
    }
}
