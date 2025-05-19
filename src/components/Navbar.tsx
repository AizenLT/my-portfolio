import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavbarProps {
  scrollToAbout: () => void
  scrollToSkills: () => void
  scrollToProjects: () => void
  scrollToContact: () => void
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
  isDarkMode,
  toggleDarkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white dark:bg-gray-800 bg-opacity-90 z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">Donatas Kareta</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={scrollToAbout}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={scrollToSkills}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={scrollToProjects}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
            >
              Contact
            </button>
            <a
              href="/Donatas Kareta Resume.pdf"
              download
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
            >
              Resume
            </a>
            <button
              onClick={toggleDarkMode}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors"
              aria-label="Navigation Options"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => { scrollToAbout(); setIsOpen(false); }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => { scrollToSkills(); setIsOpen(false); }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors w-full text-left"
            >
              Skills
            </button>
            <button
              onClick={() => { scrollToProjects(); setIsOpen(false); }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors w-full text-left"
            >
              Projects
            </button>
            <button
              onClick={() => { scrollToContact(); setIsOpen(false); }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors w-full text-left"
            >
              Contact
            </button>
            <a
              href="/Donatas Kareta Resume.pdf"
              download
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white transition-colors w-full text-left"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar