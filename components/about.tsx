"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { User } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
          ref={ref}
        >
          <User className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/profile-photo.png"
                alt="Profile Photo"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            </motion.div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Designing Scalable AI for a Smarter Future</h3>

            <p className="text-muted-foreground mb-6">
              Consultant with over 5 years of industry experience and a MSc in Advanced Computer Science (Artificial Intelligence) from The University of Manchester. Skilled in building scalable, intelligent systems by combining AI, cloud-native architecture, and software engineering. Few achievements include:
            </p>

            <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-2">
              <li>
                Leading the development of POC for Citizenly, a citizen journalism platform with AI-based moderation pipeline
              </li>
              <li>
                Built a GenAI-powered POC automating insurance claims processing in under 60 seconds
              </li>
              <li>
                Advised clients across banking, public sector, and enterprise on cloud and AI transformation
              </li>
              <li>
                Identified $1.3B+ in potential savings through a TCO and benchmarking study for a Saudi government cloud platform
              </li>
              <li>
                Designed and deployed secure, high-performance cloud solutions across AWS, GCP, and OCI; led AWS upskilling initiatives for Deloitte Consulting & Risk Advisory
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Seeking for roles within data science and machine learning in the UAE market.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                <span>Based in Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                <span>5+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                <span>Available for Full Time Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
