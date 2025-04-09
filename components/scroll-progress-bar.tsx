"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-400 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  )
}
