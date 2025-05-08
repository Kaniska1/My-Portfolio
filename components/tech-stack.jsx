import {
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiJquery,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiScikitlearn,
  SiPlotly,
} from "react-icons/si"
import { RiJavascriptFill } from "react-icons/ri"
import { DiJava } from "react-icons/di"

const techStacks = [
  { name: "Python", icon: <SiPython className="h-8 w-8" /> },
  { name: "JavaScript", icon: <RiJavascriptFill className="h-8 w-8" /> },
  { name: "Node.js", icon: <SiNodedotjs className="h-8 w-8" /> },
  { name: "Express.js", icon: <SiExpress className="h-8 w-8" /> },
  { name: "React JS", icon: <SiReact className="h-8 w-8" /> },
  { name: "Java", icon: <DiJava className="h-8 w-8" /> },
  { name: "C", icon: <SiCplusplus className="h-8 w-8" /> },
  { name: "HTML", icon: <SiHtml5 className="h-8 w-8" /> },
  { name: "CSS", icon: <SiCss3 className="h-8 w-8" /> },
  { name: "MySQL", icon: <SiMysql className="h-8 w-8" /> },
  { name: "JQuery", icon: <SiJquery className="h-8 w-8" /> },
  { name: "Pandas", icon: <SiPandas className="h-8 w-8" /> },
  { name: "Numpy", icon: <SiNumpy className="h-8 w-8" /> },
  { name: "Flask", icon: <SiFlask className="h-8 w-8" /> },
  { name: "Sci-Kit Learn", icon: <SiScikitlearn className="h-8 w-8" /> },
  { name: "Matplotlib", icon: <SiPlotly className="h-8 w-8" /> }, // Using Plotly icon as visual substitute
]

export default function TechStack() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-5xl font-bold text-accent mb-12">MY TECH STACK</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {techStacks.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl p-6 bg-[#282828] dark:bg-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#333333]"
            >
              <div className="text-secondary mb-3">{tech.icon}</div>
              <span className="font-medium text-text">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
