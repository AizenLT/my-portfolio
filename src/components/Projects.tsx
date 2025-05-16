import { useState } from 'react'
import { motion } from 'framer-motion'
interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Student Housing Lancaster',
    description: 'A modern web app built with React interfacing with a PHP backend.',
    image: '/assets/SHLwebsite.png',
    link: 'https://shl-website-frontend.vercel.app/',
    tags: ['React', 'TypeScript', 'Javascript', 'Front End', 'Node'],
  },
  {
    id: 2,
    title: 'iLancaster',
    description: 'UI/UX work on the Lancaster University student app.',
    image: '/assets/iLancaster.png',
    link: 'https://play.google.com/store/apps/details?id=uk.ac.lancaster.mobileapp',
    tags: ['React Native', 'TypeScript', 'JQuery', 'UI/UX', 'Mobile App'],
  },
  {
    id: 3,
    title: 'ConnectLU',
    description: 'Full stack work on ConnectLU providing a commercial space booking service. Built with React Native, TypeScript, and .NET 8 backend.',
    image: '/assets/ConnectLU.png',
    link: 'https://www.lancaster.ac.uk/iss/itpi/our-projects/commercial-app/',
    tags: ['React Native', 'TypeScript', 'Redux' ,'.NET 8', 'JSON', 'Mobile App'],
  },
  {
    id: 4,
    title: 'Prototype Flutter CMS',
    description: 'Used Flutter and Firebase to create a modern solution for training management and alerting.',
    image: '/assets/Internship.PNG',
    link: '',
    tags: ['Flutter', 'Firebase', 'Mobile App', 'CMS'],
  },
  {
    id: 5,
    title: 'Flood Detection ML',
    description: 'Python, PyTorch, and TensorFlow used to build an ML algorithm capable of adapting to new datasets via transfer learning.',
    image: '/assets/TYP.PNG',
    link: '#',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'Machine Learning', 'Transfer Learning'],
  },
  {
    id: 6,
    title: 'Fitts Law Unity',
    description: 'Unity Project working as a Aim trainer to demonstrate Fitts Law. Generates Logs output of results',
    image: '/assets/UnityFitts.png',
    link: 'https://github.com/AizenLT/Fitts-s-Law-Unity',
    tags: ['Game Development', 'Unity', 'C', 'Scripting'],
  },
  {
    id: 7,
    title: 'Concurrency with Java',
    description: 'Java code to manage access and editing of a database with multiple concurrent client users.',
    image: '/assets/Concurrency.png',
    link: 'https://github.com/AizenLT/Threads-Concurrency',
    tags: ['Java', 'Concurrency', 'Database', 'Back End'],
  },
  {
    id: 8,
    title: 'Cache Noisettes',
    description: 'Popular French game remade in Java featuring 99 levels.',
    image: '/assets/Cache.PNG',
    link: 'https://github.com/AizenLT/Cache-Noisettes',
    tags: ['Java', 'Game Development'],
  },
  {
    id: 9,
    title: 'DFS Maze Solver',
    description: 'Algo to find the shortest distance between any two points in a maze',
    image: '/assets/DFS.png',
    link: 'https://github.com/AizenLT/Maze-Solver-DFS',
    tags: ['Java', 'Search Algorithms'],
  },
  {
    id: 10,
    title: 'Malloc',
    description: 'A low-level memory management implementation that replicates the functionality of the standard malloc and free in C.',
    image: '/assets/Malloc.png',
    link: 'https://github.com/AizenLT/Maze-Solver-DFS',
    tags: ['Memory Management', 'C', 'Linux'],
  },
]

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200"
          >
            View More
          </button>
        )}
        <div className="flex row justify-center">
        <a
          href="https://github.com/AizenLT"
          className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore All Projects
        </a>
        
        </div>

      </div>
    </section>
  )
}

export default Projects
