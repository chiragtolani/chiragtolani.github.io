"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, FolderKanban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that generates blog posts, social media content, and marketing copy.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management Dashboard",
    description: "A collaborative task management tool with real-time updates, file sharing, and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile-responsive application for tracking workouts, nutrition, and fitness goals.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Express", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Real Estate Listing Platform",
    description: "A platform for property listings with search, filtering, and virtual tour capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Django", "PostgreSQL", "Google Maps API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Social Media Analytics Tool",
    description: "A dashboard for tracking and analyzing social media performance across multiple platforms.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Python", "FastAPI", "D3.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

const filterCategories = ["All", "React", "Next.js", "Node.js", "MongoDB", "Firebase", "Python"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeFilter === "All" ? projectsData : projectsData.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
          ref={ref}
        >
          <FolderKanban className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-background rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full bg-background/20 backdrop-blur-sm border-white/20"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full bg-background/20 backdrop-blur-sm border-white/20"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span className="sr-only">Live Demo</span>
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          activeFilter === tag ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground",
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
