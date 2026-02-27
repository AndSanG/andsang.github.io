import { Contact } from "../../entities/contact"
import { ContactRepository } from "../../application/repositories/contact-repository"

export class InMemoryContactRepository implements ContactRepository {
    async getContact(): Promise<Contact> {
        return {
            location: "Quito, Ecuador",
            timezone: "Remote (UTC-8 to -4)",
            email: "and_sg@outlook.com",
            linkedinUrl: "https://linkedin.com/in/andsangue",
            githubUrl: "https://github.com/AndSanG",
        }
    }
}
