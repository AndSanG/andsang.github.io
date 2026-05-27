import { GetContactUseCase } from "../../application/use-cases/get-contact"
import { ContactViewModel, presentContact } from "../presenters/contact-presenter"

export class ContactController {
    constructor(private getContactUseCase: GetContactUseCase) { }

    async getContact(): Promise<ContactViewModel> {
        const contact = await this.getContactUseCase.execute()
        return presentContact(contact)
    }
}
