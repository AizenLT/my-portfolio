import { motion } from 'framer-motion'

interface NavbarProps {
  scrollToAbout: () => void
  scrollToProjects: () => void
  scrollToContact: () => void
}

const Navbar: React.FC<NavbarProps> = ({ scrollToAbout, scrollToProjects, scrollToContact }) => {
  return (
    <motion.nav
      className="fixed top-0 w-full bg-gray-800 bg-opacity-90 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">D.Kareta Portfolio</span>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={scrollToAbout}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              About
            </button>
            <button
              onClick={scrollToProjects}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar