"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "Master of Science in Advanced Computer Science",
    institution: "The University of Manchester",
    year: "Sept 2024 - Present",
    description: "Specialized in Artificial Intelligence. Expecting Distinction",
  },
  {
    degree: "Bachelor of Engineering (Hons.) in Computer Engineering",
    institution: "BITS Pilani Dubai Campus",
    year: "Sept 2014 - Sept 2018",
    description: "Specialized in Computer Science. Graduated with First Division",
  },
  {
    degree: "All India Senior School Certificate (High School)",
    institution: "The Indian High School",
    year: "Apr 2012 - Apr 2014",
    description: "Specialized in Computer Science. Graduated with 91% percentile",
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
          ref={ref}
        >
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Education</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-7 h-7 bg-background border-2 border-primary rounded-full -ml-3 md:-ml-3.5 flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-primary" />
              </div>

              {/* Content for left side (on desktop) or top (on mobile) */}
              <div className={`md:text-right ${index % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10 md:text-left"}`}>
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <h4 className="text-primary font-medium mb-2">{item.institution}</h4>
                <div className="flex items-center text-sm text-muted-foreground mb-4 md:justify-end">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.year}</span>
                </div>
              </div>

              {/* Content for right side (on desktop) or bottom (on mobile) */}
              <div className={`pl-10 md:pl-0 ${index % 2 === 0 ? "md:order-2 md:pl-10" : "md:pr-10"}`}>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
