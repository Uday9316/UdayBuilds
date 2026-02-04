"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="opacity-0 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance">Uday Dhorajiya</h1>
        </div>

        <div className="opacity-0 animate-fade-in-up animate-delay-100">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            <em>Crafting interfaces.</em> Building polished software and web experiences.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up animate-delay-200">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Experimenting with magical details in user interfaces. Full stack developer specializing in React, Next.js,
            and modern web technologies.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up animate-delay-300">
          <div className="flex items-center justify-center gap-6 mb-16">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="opacity-0 animate-fade-in-up animate-delay-400">
          <Button
            onClick={() => scrollToSection("about")}
            variant="ghost"
            size="icon"
            className="animate-bounce"
            type="button"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
