import { About } from "../../entities/about"

export interface AboutRepository {
    getAbout(): Promise<About>
}
