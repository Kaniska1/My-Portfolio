import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "Coordina",
    description: "A project management tool",
    image: "/placeholder.svg",
  },
  {
    name: "SealiX",
    description: "A secure document signing platform",
    image: "/placeholder.svg",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio website",
    image: "/placeholder.svg",
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="section-title text-accent">MY PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="w-1/3 border-r border-text">
              <div className="h-full flex items-center justify-center">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-2/3 p-6">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <Button variant="outline" className="border-text text-text hover:text-background hover:bg-text">
                View Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
