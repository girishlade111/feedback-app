"use client"

import Link from "next/link"
import { Instagram, Linkedin, Github, Code, Globe, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/girish_lade_/",
    icon: Instagram,
    color: "hover:text-[#E4405F]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/girish-lade-075bba201/",
    icon: Linkedin,
    color: "hover:text-[#0077B5]",
  },
  {
    name: "GitHub",
    url: "https://github.com/girishlade111",
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/Girish-Lade-the-looper",
    icon: Code,
    color: "hover:text-[#1B1B1B]",
  },
  {
    name: "Email",
    url: "mailto:admin@ladestack.in",
    icon: Mail,
    color: "hover:text-[#EA4335]",
  },
  {
    name: "Website",
    url: "https://ladestack.in",
    icon: Globe,
    color: "hover:text-[#4285F4]",
  },
]

const footerLinks = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Contact", href: "/contact" },
  { name: "Documentation", href: "/docs" },
]

export function SocialFooter() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InsightFlow. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-colors hover:scale-110 ${link.color}`}
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built by{" "}
            <a
              href="https://ladestack.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              LadeStack
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t flex flex-wrap justify-center gap-4 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}