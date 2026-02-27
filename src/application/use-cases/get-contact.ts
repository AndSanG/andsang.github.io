import { ContactRepository } from "../repositories/contact-repository"
import { Contact } from "../../entities/contact"

export class GetContactUseCase {
    constructor(private contactRepository: ContactRepository) { }

    async execute(): Promise<Contact> {
        return this.contactRepository.getContact()
    }
}
