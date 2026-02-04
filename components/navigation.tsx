"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-mono font-bold">{"<AM />"}</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              type="button"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              type="button"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              type="button"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              type="button"
            >
              Contact
            </button>
          </div>

          <Button onClick={() => scrollToSection("contact")} className="hidden md:inline-flex" size="sm" type="button">
            Get in touch
          </Button>
        </div>
      </div>
    </nav>
  )
}
