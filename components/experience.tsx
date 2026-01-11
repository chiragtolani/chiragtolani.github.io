"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown, Briefcase, Calendar, Building } from "lucide-react"
import { cn } from "@/lib/utils"

const experienceData = [
  {
    title: "Innovation Lead",
    company: "Digital Projects (Freelance)",
    period: "Sept 2025 - Present",
    description: [
      "Driving the build of Citizenly, an AI-powered citizen journalism platform enabling diverse public voices to contribute and publish structured weekly editions",
      "Building the PoC platform from scratch, including user workflows, article submission, and AI moderation powered by generative AI and plagiarism detection",
      "Focusing on lean, scalable delivery using open-source and cloud-native tools to rapidly prototype and launch the platform",
    ],
  },
  {
    title: "Senior Consultant - Engineering, Data & AI",
    company: "Deloitte & Touche (M.E.)",
    period: "Jun 2023 - Sept 2024",
    description: [
      "Advised 15+ clients across banking, public sector, and enterprise on cloud strategy, architecture, and governance, accelerating digital transformation",
      "Delivered a GenAI solution using Google Cloud (Vertex AI, Document AI), cutting insurance claim processing from 3 hours to under 60 seconds and reducing manual workload by 90%",
      "Led TCO and benchmarking analysis for a Saudi government cloud provider, identifying $1.3B+ in potential savings across onboarded ministries and public entities",
      "Designed an agile cloud operating model for a top KSA bank, improving service delivery speed, operational efficiency, and readiness for full cloud adoption",
    ],
  },
  {
    title: "Consultant - Engineering, Data & AI",
    company: "Deloitte & Touche (M.E.)",
    period: "Aug 2021 - Jun 2023",
    description: [
      "Conducted cloud landscape analysis of 200+ global banks to inform the regulatory strategy and competitive positioning of a leading Saudi bank",
      "Developed infrastructure and service delivery playbooks for government clients, boosting operational standardisation and SLA adherence",
      "Created eminence content, proposals, and thought leadership for 50+ clients, helping secure new business and strengthening the brand in the GCC cloud space",
      "Managed QA and project coordination for multiple cloud engagements, ensuring on-time delivery and client satisfaction",
    ],
  },
  {
    title: "Business Analyst - Engineering, Data & AI",
    company: "Deloitte & Touche (M.E.)",
    period: "Aug 2019 - July 2021",
    description: [
      "Drafted infrastructure blueprints and technical design documents for banks and ministries, enabling informed cloud migration decisions with clear risk mitigation",
      "Supported practice growth by developing cloud policy guidance, POVs, and articles, enhancing visibility and credibility across the Middle East",
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
