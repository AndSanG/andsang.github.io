import { GetContactUseCase } from "../../application/use-cases/get-contact"
import { Contact } from "../../entities/contact"

export class ContactController {
    constructor(private getContactUseCase: GetContactUseCase) { }

    async getContact(): Promise<Contact> {
        return this.getContactUseCase.execute()
    }
}
