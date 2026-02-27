import { Navbar } from '@/components/ui/navbar'
import { Hero } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'
import { ExperienceSection } from '@/components/sections/experience'
import { ContactSection } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
