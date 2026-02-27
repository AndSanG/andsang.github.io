export interface AboutStat {
    label: string
    value: string
}

export interface About {
    name: string
    heroDescription: string[]
    bio: string[]
    stats: AboutStat[]
    skills: string[]
    personalBio: string[]
    hobbies: string[]
}
