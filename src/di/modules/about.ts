import { GetAboutUseCase } from "@/src/application/use-cases/get-about"
import { InMemoryAboutRepository } from "@/src/infrastructure/repositories/in-memory-about-repository"
import { AboutController } from "@/src/interface-adapters/controllers/about-controller"

const aboutRepo = new InMemoryAboutRepository()
const getAboutUseCase = new GetAboutUseCase(aboutRepo)
export const aboutController = new AboutController(getAboutUseCase)
