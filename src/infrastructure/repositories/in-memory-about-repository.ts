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
                "Andrés has spent 8+ years building iOS banking apps for millions of users — at Bancolombia, at 99.5% availability, through bi-annual security audits, under real production load.",
                "His work spans the full mobile stack, but the iOS native layer is where he's always gone deepest — from MVC to state-driven architecture, from architecture patterns to security compliance and production observability.",
            ],
            stats: [
                { label: "Years of Experience", value: "8+" },
                { label: "App Uptime", value: "99.5%" },
                { label: "Active Users", value: "10M+" },
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
