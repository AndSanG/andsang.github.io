import { Navbar } from '@/components/ui/navbar'
import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { ExperienceSection } from '@/components/sections/experience'
import { MoreAboutSection } from '@/components/sections/more-about'
import { ContactSection } from '@/components/sections/contact'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Navbar />
<Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <MoreAboutSection />
      <ContactSection />
    </main>
  )
}
