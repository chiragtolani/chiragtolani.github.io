"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { 
  Github, 
  ExternalLink, 
  FolderKanban,
  Zap, // For ReNewTrade
  Brain, // For AI Research Assistant
  CloudCog, // For Cloud Cost Optimizer
  Server, // For ML Model Deployment
  ShoppingCart, // For E-Commerce
  Bot, // For AI Content Generator
  LayoutDashboard, // For Task Management
  Activity, // For Fitness Tracking
  Home, // For Real Estate
  BarChart, // For Analytics
  Sparkles, // For Zora API
  Leaf, // For ReNewTrade
  Network, // For AI Content Creator
  BrainCircuit, // For Multi-Model Approach
  ChevronDown,
  Download,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projectsData = [
  {
    title: "ReNewTrade",
    description:
      "An innovative decentralized platform that enables individuals generating surplus solar energy at home to trade their excess energy with factories and companies, while also earning carbon credits and monetary rewards.",
    tags: ["Next.js", "React", "Blockchain", "Gemini", "Reinforcement Learning", "Python", "Prompt Engineering"],
    github: "https://github.com/chiragtolani/ReNewTrade",
    demo: "https://v0-p2-p-renewable-energy-project-25.vercel.app",
    icon: Leaf
  },
  {
    title: "Multi-Model Approach to Relation Extraction",
    description: "This project focuses on Relation Extraction, comparing two major approaches: a traditional machine learning model and a graph-based neural network. We implement XGBoost as our traditional model and Graph Convolutional Networks (GCN) as our graph-based approach, utilizing the re-DOCRED dataset. For both models, the input data is pre-processed and converted into BERT embeddings to capture rich contextual features.",
    tags: ["Python", "PyTorch", "Jupyter Notebook", "BERT"],
    github: "https://github.com/chiragtolani/DocRed-RE",
    demo: "https://github.com/chiragtolani/DocRed-RE/blob/main/RE-paper-final.pdf",
    icon: BrainCircuit
  },
  {
    title: "Industry Project - AI Strategy",
    description: "Windō, a platform connecting Gen Z talent with purpose-driven employers, tasked us with addressing their manual data scraping challenges and scaling needs to support employers globally. Their mission is to empower young professionals with transparent CSR, sustainability, and DEI data, and our team developed an AI strategy report detailing their pain points, key AI trends and use cases within the sector, what tools could be utilized to extract them, several AI opportunities that can be leveraged and finally an implementation roadmap.",
    tags: ["AI Strategy", "Project Management"],
    demo: "https://www.linkedin.com/in/chiragtolani97/",
    icon: Globe
  }
]

const filterCategories = ["All", "Next.js", "React", "Python", "Blockchain", "PyTorch", "Jupyter Notebook", "BERT", "ZoraCoin", "Gemini", "Reinforcement Learning", "Prompt Engineering"]

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
                <div className="relative h-48 bg-muted flex items-center justify-center group-hover:bg-black/60 transition-colors duration-300">
                  <div className="text-6xl text-primary/40 group-hover:opacity-0 transition-opacity duration-300">
                    {project.icon && <project.icon size={64} />}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                    {project.demo && (
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 hover:bg-background/30"
                          >
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">Live Demo</span>
                          </Button>
                        </Link>
                      </motion.div>
                    )}
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
