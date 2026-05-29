import { About } from "@/src/entities/about"

export interface AboutStatViewModel {
    label: string
    value: string
}

export interface AboutViewModel {
    name: string
    heroDescription: string[]
    bio: string[]
    stats: AboutStatViewModel[]
    skills: string[]
    personalBio: string[]
    hobbies: string[]
}

export function presentAbout(about: About): AboutViewModel {
    return about
}
