"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Download } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const fullText = "Hi, I'm Chirag Tolani, an AI/ML Engineer"

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
        const timeout = setTimeout(() => {
          setIsTyping(true)
          setText("")
        }, 3000)
        return () => clearTimeout(timeout)
      }
    }
  }, [text, isTyping])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-teal-500/20 dark:bg-teal-400/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {text}
            <span className="inline-block w-1 h-8 md:h-12 bg-primary ml-1 animate-blink"></span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            I am passionate about bridging AI, cloud, and software development to drive digital innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                Explore Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/resume.pdf" target="_blank">
                Get My Resume
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link href="#about">
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="h-6 w-6 text-primary" />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </section>
  )
}
