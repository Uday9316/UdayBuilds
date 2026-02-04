import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageCircle, Calendar } from "lucide-react"

export function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm font-mono text-muted-foreground mb-4">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
            {"Let's build something amazing together"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            If you would like to discuss a project or just say hi, {"I'm"} always down to chat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-0 bg-card/50 text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">For project inquiries and collaborations</p>
            <Button variant="outline" size="sm" type="button">
              Send Email
            </Button>
          </Card>

          <Card className="p-6 border-0 bg-card/50 text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-semibold mb-2">Message</h3>
            <p className="text-sm text-muted-foreground mb-4">Quick questions and casual conversations</p>
            <Button variant="outline" size="sm" type="button">
              Send Message
            </Button>
          </Card>

          <Card className="p-6 border-0 bg-card/50 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-semibold mb-2">Schedule</h3>
            <p className="text-sm text-muted-foreground mb-4">Book a call to discuss your project</p>
            <Button variant="outline" size="sm" type="button">
              Book Call
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" type="button">
            Start a conversation
          </Button>
        </div>

        <footer className="mt-32 pt-8 border-t border-border text-center">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© {currentYear}. Crafted by Uday Dhorajiya</p>
            <div className="flex items-center gap-4">
              <button className="hover:text-foreground transition-colors" type="button">
                LinkedIn
              </button>
              <button className="hover:text-foreground transition-colors" type="button">
                GitHub
              </button>
              <button className="hover:text-foreground transition-colors" type="button">
                Twitter
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
