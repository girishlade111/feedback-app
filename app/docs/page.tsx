"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Rocket, 
  Shield, 
  Database, 
  Code, 
  Palette, 
  Bell, 
  Download, 
  Search,
  ChevronRight,
  CheckCircle,
  ExternalLink
} from "lucide-react"

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    description: "Learn how to set up and run InsightFlow",
    articles: [
      { title: "Quick Start Guide", description: "Get up and running in 5 minutes" },
      { title: "Installation", description: "Step-by-step installation process" },
      { title: "Configuration", description: "Configure your environment" },
    ],
  },
  {
    id: "features",
    title: "Features",
    icon: BookOpen,
    description: "Explore all the features InsightFlow offers",
    articles: [
      { title: "Feedback Submission", description: "How to submit feedback" },
      { title: "Admin Dashboard", description: "Managing feedback" },
      { title: "Analytics", description: "Understanding your data" },
    ],
  },
  {
    id: "api",
    title: "API Reference",
    icon: Code,
    description: "Technical documentation for developers",
    articles: [
      { title: "Authentication", description: "API authentication methods" },
      { title: "Endpoints", description: "Available API endpoints" },
      { title: "Webhooks", description: "Real-time updates" },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    description: "Security best practices and policies",
    articles: [
      { title: "Data Protection", description: "How we protect your data" },
      { title: "Privacy Policy", description: "Our privacy commitment" },
      { title: "Terms of Service", description: "Usage terms" },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: Database,
    description: "Connect with your favorite tools",
    articles: [
      { title: "Supabase", description: "Database setup" },
      { title: "Vercel", description: "Deployment guide" },
      { title: "Analytics", description: "Data tracking" },
    ],
  },
  {
    id: "theming",
    title: "Theming & Customization",
    icon: Palette,
    description: "Customize the look and feel",
    articles: [
      { title: "Dark Mode", description: "Theme configuration" },
      { title: "Colors", description: "Custom color schemes" },
      { title: "Branding", description: "Add your logo" },
    ],
  },
]

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' on the login page and follow the reset instructions sent to your email.",
  },
  {
    question: "Can I export my data?",
    answer: "Yes, go to the Admin Dashboard and click on 'Export' to download your data in CSV, JSON, or PDF format.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Currently, InsightFlow is a web application but is fully responsive and works on mobile browsers.",
  },
  {
    question: "How do I report a bug?",
    answer: "You can submit a bug report through the Contact page or email us directly at admin@ladestack.in.",
  },
  {
    question: "Can I integrate with other services?",
    answer: "Yes, we support integrations with Supabase, Vercel, and offer API access for custom integrations.",
  },
  {
    question: "Is my data secure?",
    answer: "We use industry-standard security practices including encryption, secure authentication, and regular security audits.",
  },
]

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("getting-started")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to know about InsightFlow. Get started, explore features, and make the most of our platform.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Card 
              key={section.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${activeSection === section.id ? 'border-primary' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <CardHeader className="pb-2">
                <Icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{section.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Common tasks and resources</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Rocket className="mr-2 h-4 w-4" />
              Quick Start Guide
              <ChevronRight className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Download className="mr-2 h-4 w-4" />
              Download User Guide
              <ChevronRight className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Search className="mr-2 h-4 w-4" />
              Troubleshooting
              <ChevronRight className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Code className="mr-2 h-4 w-4" />
              API Documentation
              <ExternalLink className="ml-auto h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system availability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>API Services</span>
              </div>
              <Badge variant="outline" className="text-green-500">Operational</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Database</span>
              </div>
              <Badge variant="outline" className="text-green-500">Operational</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Authentication</span>
              </div>
              <Badge variant="outline" className="text-green-500">Operational</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>File Storage</span>
              </div>
              <Badge variant="outline" className="text-green-500">Operational</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader 
                className="cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <ChevronRight className={`h-5 w-5 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </div>
              </CardHeader>
              {openFaq === index && (
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
        <p className="text-muted-foreground mb-6">
          Our support team is here to help. Reach out and we&apos;ll get back to you as soon as possible.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="/contact">Contact Support</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:admin@ladestack.in">Email Us</a>
          </Button>
        </div>
      </div>
    </div>
  )
}