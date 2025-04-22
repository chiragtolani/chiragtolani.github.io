"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Code, BarChart, Database, Layers, Cloud, Lightbulb } from "lucide-react"

const skillsData = {
  "Machine Learning & AI": {
    icon: <Brain className="h-5 w-5" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "Computer Vision", "NLP"],
  },
  "Programming Languages": {
    icon: <Code className="h-5 w-5" />,
    skills: ["Python", "C++", "JavaScript", "SQL"],
  },
  "Data Science": {
    icon: <BarChart className="h-5 w-5" />,
    skills: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis", "Feature Engineering"],
  },
  "Databases & Tools": {
    icon: <Database className="h-5 w-5" />,
    skills: ["MySQL", "Git", "Docker", "Jupyter"],
  },
  Frameworks: {
    icon: <Layers className="h-5 w-5" />,
    skills: ["Flask", "Django", "React", "Next.js", "FastAPI"],
  },
  "Cloud": {
    icon: <Cloud className="h-5 w-5" />,
    skills: ["AWS", "Google Cloud", "OCI", "Azure"],
  },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
          ref={ref}
        >
          <Lightbulb className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, { icon, skills }], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-sm border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">{icon}</div>
                <h3 className="text-xl font-bold">{category}</h3>
              </div>

              <div className="flex flex-col space-y-3">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
