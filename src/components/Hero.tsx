import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm Donatas</h1>
        <p className="text-xl md:text-2xl mb-6">A passionate developer building modern web applications.</p>
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200"
        >
          Explore My Work
        </button>
      </motion.div>
    </section>
  )
}

export default Hero