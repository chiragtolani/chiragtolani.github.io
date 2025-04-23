"use client"

import { motion } from "framer-motion"
import { Download, Mail, Phone, Github, Linkedin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CV() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Chirag Tolani</h1>
            <h2 className="text-xl text-primary mb-4">AI/ML Engineer</h2>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:chirag.tolani54@gmail.com" className="hover:text-primary transition-colors">
                  chirag.tolani54@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+447533904189" className="hover:text-primary transition-colors">
                  +44 7533 904189
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/Chirag-Tolani-Resume-2025.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-primary">Professional Summary</h3>
          <p className="text-muted-foreground">
            A results-driven consultant with 5+ years of experience in cloud strategy, software development, and artificial intelligence. 
            Specializing in designing scalable cloud architectures, optimizing costs, and developing AI-driven solutions. Currently pursuing 
            an MSc in Advanced Computer Science (Artificial Intelligence) at The University of Manchester.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-primary">Work Experience</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">Senior Consultant - Cloud & Engineering</h4>
                  <p className="text-primary">Deloitte & Touche (M.E.)</p>
                </div>
                <span className="text-sm text-muted-foreground">Jun 2023 - Sept 2024</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Advised 15+ financial and public sector clients on cloud strategy & architecture</li>
                <li>Projected pricing estimates and conducted TCO analysis for major KSA government entities</li>
                <li>Developed proposals and thought leadership for 50+ clients</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">Consultant - Cloud & Engineering</h4>
                  <p className="text-primary">Deloitte & Touche (M.E.)</p>
                </div>
                <span className="text-sm text-muted-foreground">Aug 2021 - Jun 2023</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Prepared cloud market analysis reports for leading KSA banks</li>
                <li>Designed infrastructure architectures following best practices</li>
                <li>Managed quality assurance and project coordination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-primary">Education</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">MSc in Advanced Computer Science (AI)</h4>
                  <p className="text-primary">The University of Manchester</p>
                </div>
                <span className="text-sm text-muted-foreground">Sept 2024 - Present</span>
              </div>
              <p className="text-muted-foreground">Expecting Distinction</p>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">B.E. in Computer Engineering</h4>
                  <p className="text-primary">BITS Pilani Dubai Campus</p>
                </div>
                <span className="text-sm text-muted-foreground">Sept 2014 - Sept 2018</span>
              </div>
              <p className="text-muted-foreground">First Division</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-primary">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Programming Languages</h4>
              <p className="text-muted-foreground">Python, C++, JavaScript, SQL</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Machine Learning & AI</h4>
              <p className="text-muted-foreground">TensorFlow, PyTorch, Scikit-learn, Neural Networks, Computer Vision, NLP</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Cloud Platforms</h4>
              <p className="text-muted-foreground">AWS, Google Cloud, OCI, Azure</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Frameworks</h4>
              <p className="text-muted-foreground">Flask, Django, React, Next.js, FastAPI</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-primary">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">AWS Partner: Generative AI Essentials</h4>
                <p className="text-sm text-muted-foreground">Amazon Web Services (AWS) - Oct 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Azure AI Fundamentals</h4>
                <p className="text-sm text-muted-foreground">Microsoft - May 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Social Links */}
        <footer className="flex justify-center gap-4 pt-8 border-t">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/chiragtolani" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://linkedin.com/in/chiragtolani97" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://www.credly.com/users/chirag-tolani" target="_blank" rel="noopener noreferrer">
              <Award className="mr-2 h-4 w-4" />
              Credly
            </a>
          </Button>
        </footer>
      </div>
    </div>
  )
} 