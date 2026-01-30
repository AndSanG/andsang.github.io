import { Experience } from "../../entities/experience"
import { ExperienceRepository } from "../../application/repositories/experience-repository"

export class InMemoryExperienceRepository implements ExperienceRepository {
    async getExperiences(): Promise<Experience[]> {
        return [
            {
                id: "2024",
                year: "2024 - Present",
                title: "Senior iOS Engineer",
                company: "Tech Giant Corp",
                description: "Leading the mobile architecture migration to SwiftUI and modularizing the codebase for faster build times.",
                iconName: 'User',
                color: "text-orange-500"
            },
            {
                id: "2022",
                year: "2022 - 2024",
                title: "Mobile Dept. Lead",
                company: "Innovative Startups Inc.",
                description: "Managed a team of 5 developers, established CI/CD pipelines, and reduced crash/error rates by 40%.",
                iconName: 'Briefcase',
                color: "text-blue-500"
            },
            {
                id: "2020",
                year: "2020 - 2022",
                title: "iOS Developer",
                company: "App Solutions Ltd.",
                description: "Developed and launched 3 major apps on the App Store, featuring real-time data synchronization.",
                iconName: 'Code',
                color: "text-green-500"
            },
            {
                id: "2018",
                year: "2018 - 2020",
                title: "Junior Developer",
                company: "Web & Mobile Studio",
                description: "Collaborated on cross-platform projects using React Native and assisted in backend API integration.",
                iconName: 'GraduationCap',
                color: "text-purple-500"
            }
        ]
    }
}
