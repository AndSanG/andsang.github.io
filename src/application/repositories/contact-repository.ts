import { Contact } from "../../entities/contact"

export interface ContactRepository {
    getContact(): Promise<Contact>
}
