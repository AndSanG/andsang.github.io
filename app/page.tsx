import { Hero } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ProjectsSection />
    </main>
  )
}
