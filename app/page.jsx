import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Education from "@/components/education"
import CodingProfiles from "@/components/coding-profiles"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section id="about" className="min-h-screen py-20">
        <About />
      </section>

      <section id="tech-stack" className="min-h-screen py-20">
        <TechStack />
      </section>

      <section id="education" className="min-h-screen py-20">
        <Education />
      </section>

      <section id="coding-profiles" className="min-h-screen py-20">
        <CodingProfiles />
      </section>

      <section id="projects" className="min-h-screen py-20">
        <Projects />
      </section>
    </div>
  )
}
