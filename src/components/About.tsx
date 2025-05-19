import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <motion.section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 mx-auto">
          <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
            I'm a full-stack developer with a proven track record of shipping high-quality web and mobile applications that drive business value. From crafting intuitive front-ends with React and React Native to building robust back-ends with .NET, PHP, and Firebase, I thrive on delivering end-to-end solutions that meet user needs and exceed expectations. My expertise in software architecture ensures scalable, maintainable systems that align with long-term business goals.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Beyond code, I excel at bridging technical and business worlds. I’ve negotiated with stakeholders and shareholders to align solutions with commercial objectives, ensuring projects deliver measurable impact. My collaborative approach, paired with a focus on clean architecture and agile delivery, makes me a versatile asset in fast-paced environments. Explore my projects to see how I bring technical excellence and business insight to every challenge.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default About