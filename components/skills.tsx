import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "WebGL", "CSS-in-JS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "GraphQL", "REST APIs", "WebSocket", "Redis"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Storybook", "Jest", "Playwright"],
  },
  {
    title: "Concepts",
    skills: [
      "Design Systems",
      "Performance Optimization",
      "Accessibility",
      "Responsive Design",
      "User Experience",
      "Code Architecture",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Technologies & Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 border-0 bg-card/50">
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
