import { motion } from 'framer-motion'

const skillsData = {
  'Front-End': ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  'Back-End': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  'Tools': ['Git', 'Docker', 'Webpack', 'AWS', 'Vercel', 'Jest'],
}

const achievements = [
  {
    id: 1,
    title: 'Microsoft 365 PowerApps Onboarding Service',
    description:
      'Developed an automated onboarding service using Microsoft 365 PowerApps for Lancaster University, streamlining license and permission distribution for developers and stakeholders.',
  },
  {
    id: 2,
    title: 'Web Services Consulting for Lancaster SMEs',
    description:
      'Provided consulting services to small and medium enterprises in Lancaster, promoting web services and digital solutions, leading to freelance development projects for two local businesses.',
  },
  {
    id: 3,
    title: 'Emerald Rank in League of Legends',
    description:
      'Achieved Emerald rank in League of Legends, showcasing dedication, strategy, and teamwork in a competitive gaming environment. (Yes, I’m that good at balancing code and combos!)',
    link: 'https://op.gg/lol/summoners/euw/Aizen-0001',
  },
]

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-base text-gray-900 dark:text-white">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        <div className="flex flex-col gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (Object.keys(skillsData).length + index) * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{achievement.title}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">{achievement.description}</p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills