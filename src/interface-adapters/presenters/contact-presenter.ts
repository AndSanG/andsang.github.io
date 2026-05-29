import { Contact } from "@/src/entities/contact"

export interface ContactViewModel {
    location: string
    timezone: string
    email: string
    linkedinUrl: string
    githubUrl: string
}

export function presentContact(contact: Contact): ContactViewModel {
    return contact
}
