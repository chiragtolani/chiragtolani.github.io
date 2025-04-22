"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown, Briefcase, Calendar, Building } from "lucide-react"
import { cn } from "@/lib/utils"

const experienceData = [
  {
    title: "Senior Consultant - Cloud & Engineering",
    company: "Deloitte & Touche (M.E.)",
    period: "Jun 2023 - Sept 2024",
    description: [
      "Advised 15+ financial and public sector clients on cloud strategy & architecture, service operations, and target operating models to accelerate and optimize cloud transformation",
      "Projected pricing estimates and conducted TCO analysis for a major KSA government entity, identifying over 5 billion SAR in potential cost savings on cloud offerings",
      "Developed proposals, eminence and thought leadership for 50+ clients and delivered trainings to the internal team on latest cloud trends",
    ],
  },
  {
    title: "Consultant - Cloud & Engineering",
    company: "Deloitte & Touche (M.E.)",
    period: "Aug 2021 - Jun 2023",
    description: [
      "Prepared a cloud market analysis report for a leading KSA bank, covering trends, regulations, and insights from 200+ banks to guide the bank's cloud strategy and decision-making",
      "Designed infrastructure architectures following best practices for banks and government organizations in the region, enhancing scalability, security, and compliance",
      "Supporting in the quality assurance of the deliverables as well as managing and coordinating the project management activities involved in cloud projects",
    ],
  },
  {
    title: "Business Analyst - Cloud & Engineering",
    company: "Deloitte & Touche (M.E.)",
    period: "Aug 2019 - July 2021",
    description: [
      "Prepared detailed infrastructure design documents and architectures for various banks and government entities in order to help them in the decision making of moving on-premises or cloud",
      "Developed analysis reports for organizations to understand the current cloud landscape as well as providers available in the market",
      "Developed strategy documents for cloud and data centers detailing the vision, objectives as well as analysis of their current landscape and their operating model in order to enable them to cloud",
      "Supported in the practice development of the team to help grow their business (e.g. developed POVs and eminence for cloud policies and presence in the Middle East)",
    ],
  },
]

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
          ref={ref}
        >
          <Building className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Work Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-6 last:mb-0"
            >
              <div
                className={cn(
                  "border rounded-lg overflow-hidden transition-all",
                  activeIndex === index ? "shadow-md" : "",
                )}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <h4 className="text-primary font-medium">{item.company}</h4>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn("h-5 w-5 transition-transform", activeIndex === index ? "rotate-180" : "")}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t">
                        <ul className="space-y-2">
                          {item.description.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                              <span className="text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
