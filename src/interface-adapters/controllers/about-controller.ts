import { GetAboutUseCase } from "../../application/use-cases/get-about"
import { About } from "../../entities/about"

export class AboutController {
    constructor(private getAboutUseCase: GetAboutUseCase) { }

    async getAbout(): Promise<About> {
        return this.getAboutUseCase.execute()
    }
}
