import { GetAboutUseCase } from "../../application/use-cases/get-about"
import { AboutViewModel, presentAbout } from "../presenters/about-presenter"

export class AboutController {
    constructor(private getAboutUseCase: GetAboutUseCase) { }

    async getAbout(): Promise<AboutViewModel> {
        const about = await this.getAboutUseCase.execute()
        return presentAbout(about)
    }
}
