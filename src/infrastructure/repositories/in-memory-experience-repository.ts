import { Experience } from "../../entities/experience"
import { ExperienceRepository } from "../../application/repositories/experience-repository"

export class InMemoryExperienceRepository implements ExperienceRepository {
    async getExperiences(): Promise<Experience[]> {
        return [
            {
                id: "2020",
                year: "2020 - 2025",
                title: "Senior iOS Engineer",
                company: "iuvity (Todo1 Services Inc.)",
                description: "Engineered high-availability banking apps for a Tier-1 bank (10M+ users) and regional institutions. Drove architecture modernization from MVC/MVVM to VIPER/TCA, improving testability by 40%. Implemented Server-Driven UI, cutting feature deployment time by 60%.",
                iconName: 'User',
                color: "text-orange-500"
            },
            {
                id: "2018",
                year: "2018 - 2020",
                title: "MSc Applied Computer Science",
                company: "Vrije Universiteit Brussel — Brussels, Belgium",
                description: "Government-funded scholarship. Graduated with Distinction. Thesis: Minimalistic AI Architectures for Language Models — developed a cognitive architecture for explainable AI bridging statistical language modeling and brain-inspired predictive processing.",
                iconName: 'GraduationCap',
                color: "text-purple-500"
            },
            {
                id: "2017",
                year: "2017 - 2018",
                title: "Mid-level iOS Developer",
                company: "iuvity (Todo1 Services Inc.)",
                description: "Served as de facto team leader for a distributed team of providers. Refactored legacy Objective-C codebases to Swift, developed banking UI features for a regional bank in Panama, and managed App Store releases via TestFlight and early CI/CD pipelines with Fastlane and Jenkins.",
                iconName: 'Briefcase',
                color: "text-blue-500"
            },
            {
                id: "2015",
                year: "2015 - 2017",
                title: "iOS Developer",
                company: "Bayteq Cia Ltda",
                description: "Built a cinema app with a custom seat-selection SDK and PCI DSS-compliant payments. Developed white-label mobile banking for regional banks and integrated biometric identity verification for a financial client. Participated in a 20-week Agile transformation initiative.",
                iconName: 'Code',
                color: "text-green-500"
            }
        ]
    }
}
