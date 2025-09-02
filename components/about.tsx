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
              A results-driven consultant with 5+ years of experience in cloud strategy, software development, and
              artificial intelligence. I specialize in designing scalable cloud architectures, optimizing costs, and
              developing AI-driven solutions. Key achievements include:
            </p>

            <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-2">
              <li>
                Advised 15+ clients across banking, government, and enterprise sectors on cloud transformation and
                optimization.
              </li>
              <li>
                Certified in major cloud platforms (AWS, GCP, OCI) and led as a Learning Coordinator for AWS
                certification initiatives.
              </li>
              <li>
                Designed and deployed secure, high-performance cloud infrastructures, enhancing scalability and
                compliance.
              </li>
              <li>
                Good understanding of AI and ML models with expertise in Python, PyTorch, and deep learning frameworks.
              </li>
              <li>Built web-based applications and enterprise solutions, integrating cloud-native capabilities.</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Currently pursuing an MSc in Advanced Computer Science (Artificial Intelligence) at The University of
              Manchester, I am passionate about bridging AI, cloud, and software development to drive digital
              innovation.
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
