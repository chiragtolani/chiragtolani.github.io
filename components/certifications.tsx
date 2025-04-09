"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink, Medal } from "lucide-react"
import Link from "next/link"

const certificationsData = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Apr 2025",
    credentialLink: "https://learn.nvidia.com/certificates?id",
  },
  {
    title: "AWS Partner: Generative AI Essentials (Business)",
    issuer: "Amazon Web Services (AWS)",
    date: "Oct 2023",
    credentialLink: "https://www.credly.com/badges/65917c73-2321-4ff1-88cd-5e9dc2e68b56/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "May 2021",
    credentialLink: "https://www.credly.com/badges/482af29c-b64e-4623-adca-fcdd5f4a3071?source=linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "May 2021",
    credentialLink: "https://www.credly.com/badges/f9fbd41e-4876-4789-9349-b3d03535ffb9?source=linked_in_profile",
  },
  {
    title: "Oracle Cloud Infrastructure 2021 Foundations Associate",
    issuer: "Oracle",
    date: "Jan 2022",
    credentialLink:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FCC8CDA57749C73851C41BC2F3C8055B321A01FA04E025E9D781B73CD9D4FF38",
  },
  {
    title: "Google Cloud Certified - Associate Cloud Engineer",
    issuer: "Google",
    date: "Mar 2022",
    credentialLink: "https://www.credential.net/a80f9e2a-2a81-4f87-bd2f-e850aeb40376",
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
          ref={ref}
        >
          <Medal className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-background rounded-lg p-6 border shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -mt-4 -mr-4 transition-all duration-300 group-hover:bg-primary/20"></div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-1 mb-3">{cert.date}</p>

                  <Link
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View Credential
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
