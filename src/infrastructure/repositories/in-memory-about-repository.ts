import { About } from "../../entities/about"
import { AboutRepository } from "../../application/repositories/about-repository"

export class InMemoryAboutRepository implements AboutRepository {
    async getAbout(): Promise<About> {
        return {
            name: "Andrés Sánchez",
            heroDescription: [
                "Senior iOS Engineer with 8+ years of experience delivering resilient mobile banking apps (99.5% uptime) for millions of users.",
                "Specializing in Swift, Clean Architecture, and FinTech systems across Latin America.",
                "Endurance athlete, coffee enthusiast, ASOIAF/GOT maester.",
                "Structure creates freedom, details create intuition, discipline creates flow."
            ],
            bio: [
                "Andrés Sánchez is a Senior iOS Engineer with 8+ years building mobile banking software that millions of people depend on. Based in Quito, Ecuador, he specializes in Swift, modern iOS architectures (MVVM, TCA, Clean Architecture), and FinTech systems operating under strict security and regulatory requirements. His work has powered banking applications across Latin America — including Tier-1 client with 10M+ active users — maintaining 99.5% availability under SLA-governed delivery.",
                "He holds an MSc in Applied Computer Science from Vrije Universiteit Brussel (Belgium), completed with distinction and funded by an Ecuadorian Government scholarship. His thesis explored minimalistic AI architectures for language models. He also holds a BSc in Electronics Engineering, graduated valedictorian of his cohort, with a publication in IEEE Xplore.",
            ],
            stats: [
                { label: "Years of Experience", value: "8+" },
                { label: "App Uptime", value: "99.5%" },
                { label: "Primary Stack", value: "Swift / SwiftUI" },
                { label: "Focus", value: "iOS & Mobile Banking" },
            ],
            skills: [
                "Swift", "SwiftUI", "UIKit",
                "Clean Architecture", "VIPER", "MVVM",
                "XCTest", "TDD", "BDD",
                "Fastlane", "CI/CD", "GitHub Actions",
                "OWASP MASVS", "ISO 27001", "PCI DSS", "SSL Pinning",
            ],
            personalBio: [
                "For as long as I can remember, I have loved running. For the last 10 years it has been the third leg of my stool — it gives me balance, discipline, focus, and determination. This passion has grown into becoming an endurance athlete: long hours running through mountains, Gran Fondo cycling, and marathons. The most obvious next goal was triathlon, so I finally learned to swim properly and I am now preparing for my first tri race.",
                "I'm a bottom-up learner who goes down the rabbit hole, builds from first principles, and trusts that the discipline of going deep creates the freedom to execute with intuition and flow.",
                "All of this fueled by my passion for coffee. Living in Ecuador is a blessing — having access to some of the best coffee in the world. The thing I enjoy most is grinding and brewing my coffee every morning. I sleep just so I can have my first cup the next morning.",
            ],
            hobbies: ["Endurance Sports", "Running", "Trail", "Bicycle", "Swimming", "Coffee", "Music", "Game of Thrones", "Languages"],
        }
    }
}
