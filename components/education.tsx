"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "Master of Science in Advanced Computer Science",
    institution: "The University of Manchester",
    year: "Sept 2024 - Sept 2025",
    description: "Specialized in Artificial Intelligence. Graduated with Merit",
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
    <section id="education" className="py-12 md:py-20 bg-muted/50 overflow-hidden">
      <div className="container px-4 mx-auto max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12 md:mb-16"
          ref={ref}
        >
          <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          <h2 className="text-2xl md:text-4xl font-bold text-center">Education</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative grid grid-cols-[1fr] md:grid-cols-2 gap-4 md:gap-10 mb-8 md:mb-16 last:mb-0 pl-16 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-7 md:left-1/2 top-1 md:top-0 w-3 h-3 md:w-7 md:h-7 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                <GraduationCap className="hidden md:block h-3 w-3 text-primary" />
              </div>

              {/* Content for left side (on desktop) or top (on mobile) */}
              <div className={`${index % 2 === 0 ? "md:text-right md:pr-10" : "md:order-2 md:pl-10"}`}>
                <h3 className="text-lg md:text-xl font-bold">{item.degree}</h3>
                <h4 className="text-primary font-medium mb-2">{item.institution}</h4>
                <div className={`flex items-center text-sm text-muted-foreground mb-2 md:mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>{item.year}</span>
                </div>
              </div>

              {/* Content for right side (on desktop) or bottom (on mobile) */}
              <div className={`${index % 2 === 0 ? "md:order-2 md:pl-10" : "md:pr-10"}`}>
                <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
