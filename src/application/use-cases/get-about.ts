import { AboutRepository } from "../repositories/about-repository"
import { About } from "../../entities/about"

export class GetAboutUseCase {
    constructor(private aboutRepository: AboutRepository) { }

    async execute(): Promise<About> {
        return this.aboutRepository.getAbout()
    }
}
