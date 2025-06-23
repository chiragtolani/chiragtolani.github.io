"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail, Send, AlertCircle, MessageSquare, Phone, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import Link from "next/link"
import emailjs from '@emailjs/browser'

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (validateForm()) {
      setIsSubmitting(true)

      try {
        const EMAILJS_SERVICE_ID = "service_hlvg25x"
        const EMAILJS_TEMPLATE_ID = "template_tjjxosc"
        const EMAILJS_PUBLIC_KEY = "fLZZE77KbDDeuWxdi"

        const templateParams = {
          to_email: "chirag.tolani54@gmail.com",
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        }

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } catch (error) {
        setIsSubmitting(false)
        setSubmitError("Failed to send message. Please try again later.")
        console.error("EmailJS Error:", error)
      }
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
          ref={ref}
        >
          <MessageSquare className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm currently available for graduate and full-time positions. If you're looking to hire, feel free to
              reach out.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a href="mailto:chirag.tolani54@gmail.com" className="hover:text-primary transition-colors">
                  chirag.tolani54@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a href="tel:+447533904189" className="hover:text-primary transition-colors">
                  +44 7533 904189
                </a>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex flex-col space-y-3">
              <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://github.com/chiragtolani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                  <span className="text-base font-medium">GitHub</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://linkedin.com/in/chiragtolani97" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <span className="text-base font-medium">LinkedIn</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://www.credly.com/users/chirag-tolani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Award className="h-5 w-5" />
                  </Button>
                  <span className="text-base font-medium">Credly</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background rounded-lg p-6 border shadow-sm"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="flex items-center text-red-500 text-sm p-3 bg-red-50 rounded-md">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{submitError}</span>
                  </div>
                )}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={cn("transition-all", errors.name ? "border-red-500 focus-visible:ring-red-500" : "")}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={cn("transition-all", errors.email ? "border-red-500 focus-visible:ring-red-500" : "")}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className={cn(
                      "min-h-[120px] transition-all",
                      errors.message ? "border-red-500 focus-visible:ring-red-500" : "",
                    )}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <div className="flex items-center text-red-500 text-sm mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
