import { ElementType } from "react"

// Note: In a strict clean architecture, we might avoid React dependencies like 'ElementType' in entities.
// However, since icons are part of the data model for this portfolio, we'll keep it simple for now,
// or we could store the icon name as a string and map it in the Presenter/Component.
// For strictness, let's use a string identifier or keep the import if we consider it a 'domain' concept for a UI portfolio.
// To follow the "Entities != DB Models" rule strictly, we should probably just store metadata here.
// But valid "Presentation Entities" can exist. Let's aim for purity:
// We will store the icon NAME here, and map it in the UI layer. This avoids 'react' import in entities.

export interface Experience {
    id: string
    year: string
    title: string
    company: string
    description: string
    iconName: string
    color: string
}
