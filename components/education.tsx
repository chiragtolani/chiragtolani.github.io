"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "./ui/button"

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
    achievements: [
      "Specialized in Computer Science and Engineering",
      "Graduated with First Division honors",
      "Led multiple technical projects",
      "Active member of technical societies",
    ],
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

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

          {/* First Education Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
          >
            <div className="absolute left-0 md:left-1/2 w-7 h-7 bg-background border-2 border-primary rounded-full -ml-3 md:-ml-3.5 flex items-center justify-center">
              <GraduationCap className="h-3 w-3 text-primary" />
            </div>

            <div className="md:text-right md:pr-10">
              <h3 className="text-xl font-bold">{educationData[0].degree}</h3>
              <h4 className="text-primary font-medium mb-2">{educationData[0].institution}</h4>
              <div className="flex items-center text-sm text-muted-foreground mb-4 md:justify-end">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{educationData[0].year}</span>
              </div>
            </div>

            <div className="pl-10 md:pl-0 md:order-2 md:pl-10">
              <p className="text-muted-foreground">{educationData[0].description}</p>
            </div>
          </motion.div>

          {/* Middle Education Item with Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
          >
            <div className="absolute left-0 md:left-1/2 w-7 h-7 bg-background border-2 border-primary rounded-full -ml-3 md:-ml-3.5 flex items-center justify-center">
              <GraduationCap className="h-3 w-3 text-primary" />
            </div>

            <div className="md:order-2 md:pl-10 md:text-left">
              <h3 className="text-xl font-bold">{educationData[1].degree}</h3>
              <h4 className="text-primary font-medium mb-2">{educationData[1].institution}</h4>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{educationData[1].year}</span>
              </div>
            </div>

            <div className="pl-10 md:pl-0 md:pr-10 relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {educationData[1].achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex-[0_0_100%] min-w-0 pl-2 relative"
                    >
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollPrev}
                  className="h-8 w-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollNext}
                  className="h-8 w-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Last Education Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <div className="absolute left-0 md:left-1/2 w-7 h-7 bg-background border-2 border-primary rounded-full -ml-3 md:-ml-3.5 flex items-center justify-center">
              <GraduationCap className="h-3 w-3 text-primary" />
            </div>

            <div className="md:text-right md:pr-10">
              <h3 className="text-xl font-bold">{educationData[2].degree}</h3>
              <h4 className="text-primary font-medium mb-2">{educationData[2].institution}</h4>
              <div className="flex items-center text-sm text-muted-foreground mb-4 md:justify-end">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{educationData[2].year}</span>
              </div>
            </div>

            <div className="pl-10 md:pl-0 md:order-2 md:pl-10">
              <p className="text-muted-foreground">{educationData[2].description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
