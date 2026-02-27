import { GetProjectsUseCase } from "./application/use-cases/get-projects"
import { GetExperiencesUseCase } from "./application/use-cases/get-experiences"
import { GetAboutUseCase } from "./application/use-cases/get-about"
import { GetContactUseCase } from "./application/use-cases/get-contact"
import { InMemoryProjectRepository } from "./infrastructure/repositories/in-memory-project-repository"
import { InMemoryExperienceRepository } from "./infrastructure/repositories/in-memory-experience-repository"
import { InMemoryAboutRepository } from "./infrastructure/repositories/in-memory-about-repository"
import { InMemoryContactRepository } from "./infrastructure/repositories/in-memory-contact-repository"
import { ProjectController } from "./interface-adapters/controllers/project-controller"
import { ExperienceController } from "./interface-adapters/controllers/experience-controller"
import { AboutController } from "./interface-adapters/controllers/about-controller"
import { ContactController } from "./interface-adapters/controllers/contact-controller"

// Repositories
const projectRepo = new InMemoryProjectRepository()
const experienceRepo = new InMemoryExperienceRepository()
const aboutRepo = new InMemoryAboutRepository()
const contactRepo = new InMemoryContactRepository()

// Use Cases
const getProjectsUseCase = new GetProjectsUseCase(projectRepo)
const getExperiencesUseCase = new GetExperiencesUseCase(experienceRepo)
const getAboutUseCase = new GetAboutUseCase(aboutRepo)
const getContactUseCase = new GetContactUseCase(contactRepo)

// Controllers
const projectController = new ProjectController(getProjectsUseCase)
const experienceController = new ExperienceController(getExperiencesUseCase)
const aboutController = new AboutController(getAboutUseCase)
const contactController = new ContactController(getContactUseCase)

export {
    projectController,
    experienceController,
    aboutController,
    contactController,
}
