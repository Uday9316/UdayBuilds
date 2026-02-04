import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "TaskFlow",
    description:
      "A modern task management application with real-time collaboration, built with Next.js and WebSocket integration.",
    image: "/modern-task-management-dashboard-interface.jpg",
    tags: ["Next.js", "TypeScript", "WebSocket", "Prisma"],
    year: "2024",
  },
  {
    title: "DevTools Pro",
    description:
      "Enhanced developer tools for React applications with advanced debugging capabilities and performance monitoring.",
    image: "/developer-tools-interface-with-code-debugging.jpg",
    tags: ["React", "Chrome Extension", "Performance", "DevTools"],
    year: "2024",
  },
  {
    title: "Design System",
    description:
      "Comprehensive component library and design system used across multiple products, with Storybook documentation.",
    image: "/design-system-component-library-interface.jpg",
    tags: ["React", "Storybook", "Design Tokens", "TypeScript"],
    year: "2023",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization for business intelligence.",
    image: "/analytics-dashboard.png",
    tags: ["React", "D3.js", "WebSocket", "Node.js"],
    year: "2023",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground mb-4">Selected work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Projects that push boundaries</h2>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden border-0 bg-card/50">
              <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-accent rounded-md transition-colors" type="button">
                        <Github className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-accent rounded-md transition-colors" type="button">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
