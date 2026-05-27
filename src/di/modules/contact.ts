import { GetContactUseCase } from "@/src/application/use-cases/get-contact"
import { InMemoryContactRepository } from "@/src/infrastructure/repositories/in-memory-contact-repository"
import { ContactController } from "@/src/interface-adapters/controllers/contact-controller"

const contactRepo = new InMemoryContactRepository()
const getContactUseCase = new GetContactUseCase(contactRepo)
export const contactController = new ContactController(getContactUseCase)
