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
                description: "Senior Software Engineer and platform technical reference for iuviBANKING—iuvity's white-label banking SaaS deployed across regional financial institutions. Served as the quality certification gatekeeper for production handovers. Architected the AppShell web-to-native bridge contract, engineered React microfrontends, and authored secure Swift/Objective-C native modules for the React Native container.",
                imagePath: '/iuvity.jpeg',
                color: "text-green-600"
            },
            {
                id: "2020",
                year: "2020 - 2023",
                title: "Senior iOS Engineer",
                company: "iuvity (Todo1 Services Inc.)",
                description: "Engineered high-availability mobile banking solutions for Bancolombia (10M+ users). Achieved 99.9% crash-free session rates while meeting strict 99.5% system availability SLAs. Modernized codebase architectures from legacy MVC to VIPER and MVVM-C, reducing coupling and enforcing an 80%+ unit testing standard. Delivered secure, regulatory-compliant mobile features (FaceID, Apple Pay, freeRASP).",
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
                description: "Delivered mobile banking features for Banistmo Panama using UIKit and VIPER. Refactored legacy Objective-C modules to Swift and updated layout form factors for iPhone X (Safe Area). Coordinated code standards and pull reviews for a distributed external team while automating beta distribution via Fastlane and Jenkins.",
                imagePath: '/iuvity.jpeg',
                color: "text-green-700 dark:text-green-400"
            },
            {
                id: "2015",
                year: "2015 - 2017",
                title: "iOS Developer",
                company: "Bayteq Cia Ltda",
                description: "Built the Supercines Cinema App from concept to App Store, implementing custom seat-selection UI SDKs and PCI DSS-compliant payment integrations. Engineered white-label mobile banking blueprints for Produbanco and integrated biometric identity verification (FacePhi) for Banco Bolivariano.",
                imagePath: '/bayteq.jpeg',
                color: "text-sky-700 dark:text-sky-400"
            }
        ]
    }
}
