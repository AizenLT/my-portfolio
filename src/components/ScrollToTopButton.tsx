import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

interface ScrollToTopButtonProps {
  heroRef: React.RefObject<HTMLElement | null>
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ heroRef }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(heroRef.current)
      }
    }
  }, [heroRef])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      className={`fixed bottom-6 right-6 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors ${isVisible ? 'block' : 'hidden'}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-6 h-6" />
    </motion.button>
  )
}

export default ScrollToTopButton
