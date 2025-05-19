import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-800 dark:to-blue-900 pt-16 md:pt-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 sm:px-6 md:px-8">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">Donatas Kareta</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Full-Stack Developer</h2>
          <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
            Crafting innovative web and mobile solutions that drive business impact.
          </p>
          <div className="flex space-x-4">
            <a
              href="/Donatas Kareta Resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors transform hover:scale-105"
            >
              Download Resume
            </a>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-colors transform hover:scale-105"
            >
              Explore Work
            </button>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="https://www.linkedin.com/in/donatas-kareta-78b331232" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Link">
              <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" />
            </a>
            <a href="https://github.com/AizenLT" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
              <FaGithub className="w-6 h-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/hero1.jpeg"
            alt="Donatas Kareta"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero