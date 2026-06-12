import { Project } from "../../entities/project"
import { ProjectRepository } from "../../application/repositories/project-repository"

export class InMemoryProjectRepository implements ProjectRepository {
    async getProjects(): Promise<Project[]> {
        const iuvibanking: Project = {
            id: 'iuvibanking',
            title: 'iuviBANKING Platform',
            role: 'Senior Software Engineer, Platform Ownership',
            description: 'Technical reference and quality certification gatekeeper across React microfrontends, React Native shells, and iOS native modules, responsible for stable production handovers.',
            challenge: 'Establishing zero-defect handoff protocols across independent product and operations teams, and resolving critical cross-layer failures through technical influence rather than formal authority.',
            techStack: ['React', 'React Native', 'Swift', 'TypeScript', 'AWS', 'Modyo DXP', 'OIDC', 'Server-Driven UI'],
            imagePath: '/projects/iuvibanking.webp',
        }

        const bancolombia: Project = {
            id: 'bancolombia',
            title: 'Bancolombia iOS App',
            role: 'Senior iOS Engineer',
            description: 'High-availability native iOS banking integrations serving 10M+ active users, with a 99.9% crash-free session rate under strict 99.5% system SLAs.',
            challenge: 'Modernizing a complex legacy MVC codebase to VIPER and MVVM-C architectures without introducing regressions or interrupting live transaction traffic.',
            techStack: ['Swift', 'VIPER', 'MVVM-C', 'Combine', 'Firebase', 'RASP'],
            imagePath: '/projects/bancolombia.webp',
        }

        const supercines: Project = {
            id: 'supercines',
            title: 'Supercines iOS App',
            role: 'iOS Developer',
            description: 'Cinema booking app with a custom seat-selection SDK, PCI DSS-compliant payment integrations, and offline persistence.',
            challenge: 'Building a high-performance interactive seat selection UI SDK using UIKit with custom touch handling, and securing transactional pipelines under strict PCI compliance.',
            techStack: ['Swift', 'Objective-C', 'UIKit', 'Core Data', 'MapKit', 'PCI DSS'],
            imagePath: '/projects/supercines.webp',
        }

        const personalSite: Project = {
            id: 'personal-site',
            title: 'Personal Website',
            role: 'Designer & Engineer',
            description: 'This site, a clean architecture Next.js portfolio with App Router, TypeScript, and Tailwind CSS, deployed to GitHub Pages.',
            challenge: 'Applying Clean Architecture principles (entities, use cases, repositories, interface adapters) to a static portfolio site, keeping presentation fully decoupled from data while working within GitHub Pages constraints.',
            techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Clean Architecture', 'GitHub Pages'],
            imagePath: '/projects/persona-site.webp',
        }

        const msThesis: Project = {
            id: 'msc-thesis-ppm-idyot',
            title: 'PPM★ vs IDyOT: Statistical Language Modeling',
            role: 'MSc Researcher, VUB AI Lab',
            description: 'MSc thesis at Vrije Universiteit Brussel comparing PPM★, a compression-based language model, against IDyOT, a cognitive architecture for hierarchical prediction. Implemented both algorithms in Python, validated against established benchmarks, and identified the optimal IDyOT configuration via KL divergence analysis.',
            challenge: 'PPM★ achieves high prediction accuracy as a descriptive black box but offers no cognitive explanation. The challenge was formally documenting IDyOT\'s within-layer interactions (implicit in prior literature), implementing a zero-probability smoothing fix, and connecting statistical accuracy to cognitive plausibility.',
            techStack: ['Python', 'PPM★', 'IDyOT', 'Word2Vec', 'Statistical NLP', 'Cognitive Architecture', 'Information Theory'],
            imagePath: '/projects/msc-thesis.webp',
        }

        const bscThesis: Project = {
            id: 'bsc-thesis-3d-printer',
            title: '3D Print Server with Web UI',
            role: 'BSc Researcher, Universidad Técnica de Ambato',
            description: 'BSc research paper building a RepRap-based 3D printer with an embedded Raspberry Pi print server and OctoPrint web interface for real-time control and video monitoring over LAN.',
            challenge: 'Replacing a full PC with a Raspberry Pi embedded inside the printer structure, integrating mjpg-streamer for live video streaming, and assembling a complete CAD-to-print pipeline using entirely open-source tools.',
            techStack: ['Raspberry Pi', 'OctoPrint', 'Raspbian', 'mjpg-streamer', 'RepRap', 'Arduino', 'G-code', 'FreeCAD'],
            imagePath: '/projects/bsc-thesis-3d-printer.webp',
        }

        const mlProjects: Project = {
            id: 'msc-ml-projects',
            title: 'AI/ML Projects at VUB',
            role: 'MSc Student — AI Lab, Vrije Universiteit Brussel',
            description: 'AI/ML projects at VUB: implemented ESPCN for image super-resolution in PyTorch (29.7 dB PSNR on BSD300), built logistic regression from scratch on three months of personal health data, and separately implemented kNN, CNNs, backpropagation from scratch, PCA, k-Means, DBSCAN, and collaborative filtering.',
            challenge: 'Reproducing ESPCN results with 800 training images against a paper trained on 50,000: the 2-3 dB gap traces back to center-crop-only sampling and missing Gaussian pre-blur on LR inputs. For logistic regression, the meaningful feature was not raw calorie intake but daily excess over budget.',
            techStack: ['Python', 'PyTorch', 'Keras', 'NumPy', 'scikit-learn'],
            imagePath: '/projects/msc-ml-projects.webp',
        }

        return [iuvibanking, bancolombia, personalSite, msThesis, mlProjects, supercines, bscThesis]
    }
}
