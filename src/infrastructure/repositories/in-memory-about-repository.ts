import { About } from "../../entities/about"
import { AboutRepository } from "../../application/repositories/about-repository"

export class InMemoryAboutRepository implements AboutRepository {
    async getAbout(): Promise<About> {
        return {
            name: "Andrés Sánchez",
            heroDescription: [
                "Senior Mobile & Frontend Engineer with 8+ years of experience delivering secure, high-performance banking platforms for millions of users.",
                "Specializing in iOS native architecture, React Native bridges, and React microfrontends.",
                "Proven track record in FinTech security compliance, CI/CD automation, and high-volume mobile systems.",
                "Endurance athlete and coffee enthusiast.",
                "Structure creates freedom, details create intuition, discipline creates flow."
            ],
            bio: [
                "Andrés has spent 8+ years building resilient mobile banking apps and frontend platforms for millions of users—maintaining high-stability operations under strict SLAs and high-volume production loads.",
                "His work spans the full mobile and hybrid stack, with deep expertise in Swift/iOS native module development, React Native, and React microfrontends. He focuses on clean architecture, security compliance (PCI DSS, OWASP MASVS, ISO 27001), and end-to-end telemetry observability.",
            ],
            stats: [
                { label: "Years of Experience", value: "8+" },
                { label: "Crash-Free Sessions", value: "99.9%" },
                { label: "Active Users", value: "10M+" },
            ],
            skills: [
                "Swift", "SwiftUI", "UIKit", "Combine",
                "React 18", "TypeScript", "React Native", "Cordova",
                "Clean Architecture", "VIPER", "MVVM-C", "Server-Driven UI", "Microfrontends",
                "Jest", "XCTest", "TDD",
                "Fastlane", "CI/CD", "GitHub Actions",
                "OWASP MASVS", "ISO 27001", "PCI DSS", "SSL Pinning"
            ],
            personalBio: [
                "For as long as I can remember, I have loved running. For the last 10 years it has been the third leg of my stool — it gives me balance, discipline, focus, and determination. This passion has grown into becoming an endurance athlete: long hours running through mountains, Gran Fondo cycling, and marathons. The most obvious next goal was triathlon, so I finally learned to swim properly and I am now preparing for my first tri race.",
                "I'm a bottom-up learner who goes down the rabbit hole, builds from first principles, and trusts that the discipline of going deep creates the freedom to execute with intuition and flow.",
                "All of this fueled by my passion for coffee. Living in Ecuador is a blessing — having access to some of the best coffee in the world. The thing I enjoy most is grinding and brewing my coffee every morning. I sleep just so I can have my first cup the next morning.",
            ],
            hobbies: ["Endurance Sports", "Running", "Trail", "Bicycle", "Swimming", "Coffee", "Music", "Languages"],
        }
    }
}
