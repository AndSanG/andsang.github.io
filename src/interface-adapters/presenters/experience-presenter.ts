import { Briefcase, Code, GraduationCap, LucideIcon, User } from "lucide-react"

export class ExperiencePresenter {
    static getIconComponent(iconName: string): LucideIcon {
        // this depends on a contract between presentation and the API
        // the API is responsible for providing the correct icon name according to LucideIcon
        switch (iconName) {
            case 'User':
                return User
            case 'Briefcase':
                return Briefcase
            case 'Code':
                return Code
            case 'GraduationCap':
                return GraduationCap
            default:
                return User
        }
    }
}
