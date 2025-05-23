import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "Coordina",
    description: "Coordina is a smart collaboration platform that streamlines inter-departmental coordination in Indian urban governance to prevent delays and resource waste. We were selected for the finals of the Smart India Hackathon 2024 for this project.",
    image: "/Coordina.png",
    link: "https://github.com/Prayas-35/Coordina-v1", // Replace with actual link
  },
  {
    name: "SealiX",
    description: "A skill passport blockchain-powered Skill Passport verify, protect, and upgrade learners' credentials with privacy and trust. We were selected for the finals of the Smart Bengal Hackathon 2025 for this project.",
    image: "/Sealix.png",
    link: "https://github.com/Prayas-35/SealiX", // Replace with actual link
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio website",
    image: "/portfolio.png",
    link: "https://github.com/Kaniska1/My-Portfolio", // Replace with actual link
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-text text-text hover:text-background hover:bg-text">
                  View Project
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
