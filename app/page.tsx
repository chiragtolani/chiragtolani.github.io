import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import ScrollProgressBar from "@/components/scroll-progress-bar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
