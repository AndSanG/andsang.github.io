import { Navbar } from '@/components/ui/navbar'
import { Hero } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'
import { ContactSection } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
