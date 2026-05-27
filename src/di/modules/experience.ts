import { GetExperiencesUseCase } from "@/src/application/use-cases/get-experiences"
import { InMemoryExperienceRepository } from "@/src/infrastructure/repositories/in-memory-experience-repository"
import { ExperienceController } from "@/src/interface-adapters/controllers/experience-controller"

const experienceRepo = new InMemoryExperienceRepository()
const getExperiencesUseCase = new GetExperiencesUseCase(experienceRepo)
export const experienceController = new ExperienceController(getExperiencesUseCase)
