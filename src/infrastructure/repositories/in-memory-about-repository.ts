import { About } from "../../entities/about"
import { AboutRepository } from "../../application/repositories/about-repository"

export class InMemoryAboutRepository implements AboutRepository {
    async getAbout(): Promise<About> {
        return {
            name: "Andrés Sánchez",
            heroDescription: [
                "Senior iOS Engineer with 8+ years of experience delivering resilient mobile banking apps (99.5% uptime) for millions of users.",
                "Specializing in Swift, Clean Architecture, and FinTech systems across Latin America.",
                "Full mobile stack: iOS native, React Native native modules, Cordova hybrid plugins, and React microfrontends.",
                "Endurance athlete, coffee enthusiast, ASOIAF/GOT maester.",
                "Structure creates freedom, details create intuition, discipline creates flow."
            ],
            bio: [
                "At Bancolombia — one of Latin America's largest banks — Andrés owned the iOS layer on a production app serving 10M+ active users at 99.5% availability. That meant driving architecture from MVC to state-driven patterns, owning security compliance end-to-end — SSL pinning, jailbreak detection, FaceID, Apple Pay — and being the last line before anything reached 10 million people. The iOS native layer is where he lives; everything else is built on top of it.",
                "At iuvity, he held technical ownership across the iuviBANKING platform — the iOS native layer, React Native, and React microfrontends — as production certification authority across teams. Throughout: OWASP MASVS, PCI DSS, and ISO 27001, validated through bi-annual external audits.",
                "He's drawn to the hard parts: the native layer, the compliance requirements, the failures that only surface under real load.",
                "He holds an MSc in Applied Computer Science from Vrije Universiteit Brussel (Belgium), completed with distinction and funded by an Ecuadorian Government scholarship. His thesis explored minimalistic AI architectures for language models. He also holds a BSc in Electronics Engineering, graduated valedictorian of his cohort, with a publication in IEEE Xplore.",
            ],
            stats: [
                { label: "Years of Experience", value: "8+" },
                { label: "App Uptime", value: "99.5%" },
                { label: "Active Users", value: "10M+" },
                { label: "Faster Deployments", value: "60%" },
            ],
            skills: [
                "Swift", "SwiftUI", "UIKit", "Combine",
                "Clean Architecture", "VIPER", "MVVM", "State-Driven Architecture", "Server-Driven UI",
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
