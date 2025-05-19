import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  image: string
  liveLink: string
  codeLink: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Student Housing Lancaster',
    description: 'A modern web app built with React interfacing with a PHP backend.',
    image: '/assets/SHLwebsite.png',
    liveLink: 'https://shl-website-frontend.vercel.app/',
    codeLink: '',
    tags: ['React', 'PHP', 'Web App', 'Front End', 'Back End'],
  },
  {
    id: 2,
    title: 'iLancaster',
    description: 'UI/UX work on the Lancaster University student app.',
    image: '/assets/iLancaster.png',
    liveLink: 'https://play.google.com/store/apps/details?id=uk.ac.lancaster.mobileapp',
    codeLink: '',
    tags: ['React Native', 'UI/UX', 'Mobile App'],
  },
  {
    id: 3,
    title: 'ConnectLU',
    description: 'Full stack work on ConnectLU providing a commercial space booking service. Built with React Native, TypeScript, and .NET 8 backend.',
    image: '/assets/ConnectLU3.png',
    liveLink: 'https://www.lancaster.ac.uk/iss/itpi/our-projects/commercial-app/',
    codeLink: '',
    tags: ['React Native', 'TypeScript', '.NET 8', 'Full Stack', 'Mobile App'],
  },
  {
    id: 4,
    title: 'Prototype Flutter CMS',
    description: 'Used Flutter and Firebase to create a modern solution for training management and alerting.',
    image: '/assets/Internship.PNG',
    liveLink: '',
    codeLink: 'https://github.com/AizenLT/flutter-cms',
    tags: ['Flutter', 'Firebase', 'Mobile App', 'CMS'],
  },
  {
    id: 5,
    title: 'Flood Detection ML',
    description: 'Python, PyTorch, and TensorFlow used to build an ML algorithm capable of adapting to new datasets via transfer learning.',
    image: '/assets/TYP.PNG',
    liveLink: '',
    codeLink: '',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'Machine Learning', 'Transfer Learning'],
  },
  {
    id: 6,
    title: 'Concurrency with Java',
    description: 'Java code to manage access and editing of a database with multiple concurrent client users.',
    image: '/assets/Concurrency.png',
    liveLink: '',
    codeLink: 'https://github.com/AizenLT/java-concurrency',
    tags: ['Java', 'Concurrency', 'Database', 'Back End'],
  },
  {
    id: 7,
    title: 'Cache Noisettes',
    description: 'Popular French game remade in Java featuring 99 levels.',
    image: '/assets/Cache.PNG',
    liveLink: '',
    codeLink: 'https://github.com/AizenLT/cache-noisettes',
    tags: ['Java', 'Game Development'],
  },
  {
    id: 8,
    title: 'Fitts Law Unity',
    description: 'Unity Project working as an aim trainer to demonstrate Fitts Law. Generates logs output of results.',
    image: '/assets/UnityFitts.png',
    liveLink: '',
    codeLink: 'https://github.com/AizenLT/Fitts-s-Law-Unity',
    tags: ['Game Development', 'Unity', 'C#', 'Scripting'],
  },
  {
    id: 9,
    title: 'DFS Maze Solver',
    description: 'Algorithm to find the shortest distance between any two points in a maze.',
    image: '/assets/DFS.png',
    liveLink: '',
    codeLink: 'https://github.com/AizenLT/Maze-Solver-DFS',
    tags: ['Java', 'Search Algorithms'],
  },
  {
    id: 10,
    title: 'Malloc',
    description: 'A low-level memory management implementation that replicates the functionality of the standard malloc and free in C.',
    image: '/assets/Malloc.png',
    liveLink: '',
    codeLink: 'https://github.com/AizenLT/malloc',
    tags: ['Memory Management', 'C', 'Linux'],
  },
]

const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState(false)
  const visibleProjects = showMore ? projects : projects.slice(0, 6)

  return (
    <motion.section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col border-4 border-indigo-500"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-contain" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 dark:bg-blue-700 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 mt-auto">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    Live
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="inline-flex items-center px-4 py-2 bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-4 h-4 mr-2" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors transform hover:scale-105"
        >
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </motion.section>
  )
}

export default Projects