import { GetProjectsUseCase } from "./application/use-cases/get-projects"
import { GetExperiencesUseCase } from "./application/use-cases/get-experiences"
import { GetAboutUseCase } from "./application/use-cases/get-about"
import { InMemoryProjectRepository } from "./infrastructure/repositories/in-memory-project-repository"
import { InMemoryExperienceRepository } from "./infrastructure/repositories/in-memory-experience-repository"
import { InMemoryAboutRepository } from "./infrastructure/repositories/in-memory-about-repository"
import { ProjectController } from "./interface-adapters/controllers/project-controller"
import { ExperienceController } from "./interface-adapters/controllers/experience-controller"
import { AboutController } from "./interface-adapters/controllers/about-controller"

// Repositories
const projectRepo = new InMemoryProjectRepository()
const experienceRepo = new InMemoryExperienceRepository()
const aboutRepo = new InMemoryAboutRepository()

// Use Cases
const getProjectsUseCase = new GetProjectsUseCase(projectRepo)
const getExperiencesUseCase = new GetExperiencesUseCase(experienceRepo)
const getAboutUseCase = new GetAboutUseCase(aboutRepo)

// Controllers
const projectController = new ProjectController(getProjectsUseCase)
const experienceController = new ExperienceController(getExperiencesUseCase)
const aboutController = new AboutController(getAboutUseCase)

export {
    projectController,
    experienceController,
    aboutController,
}
