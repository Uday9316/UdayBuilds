export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-muted-foreground mb-4">About</p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            In the past I've developed design systems, built scalable web applications, and crafted user experiences for
            companies ranging from startups to Fortune 500s. Currently focused on pushing the boundaries of what's
            possible with modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Building</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Craft</h4>
                <p className="text-sm text-muted-foreground">
                  Implementing interfaces and interactions with attention to detail and performance.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  TaskFlow
                  <span className="text-xs text-muted-foreground">↗</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Modern task management app with real-time collaboration features.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  DevTools Pro
                  <span className="text-xs text-muted-foreground">↗</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Enhanced developer tools for debugging React applications.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  Design System
                  <span className="text-xs text-muted-foreground">↗</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive component library used across multiple products.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Writing</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">React Performance Patterns</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced techniques for optimizing React applications at scale.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Modern CSS Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  Building maintainable styles with CSS-in-JS and design tokens.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">All writing</h4>
                <p className="text-sm text-muted-foreground">
                  Thoughts on design, development, and the intersection of both.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
