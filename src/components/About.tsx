import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <motion.section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
      <div className="flex flex-col md:flex-row gap-20 flex items-center justify-center">
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            I'm a full-stack developer with a proven track record of shipping high-quality web and mobile applications that drive business value. From crafting intuitive front-ends with React and React Native to building robust back-ends with .NET, PHP, and Firebase, I thrive on delivering end-to-end solutions that meet user needs and exceed expectations. My experience in software architecture ensures scalable, maintainable systems that align with long-term goals.
          </p>
          <p className="text-lg">
            Beyond code, I excel at bridging technical and business worlds. I’ve negotiated with stakeholders and shareholders to align solutions with commercial objectives, ensuring projects deliver measurable impact. My collaborative approach, paired with a focus on clean architecture and agile delivery, makes me a versatile asset in fast-paced environments. Explore my projects below to see my work in action, or download my resume to learn more about my journey.
          </p>
          <div className="mt-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="/Donatas Kareta Resume.pdf"
                download
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Download My Resume
              </a>
              <p className="mt-4 text-gray-400">
                Discover how I can bring technical expertise and business insight to your team.
              </p>
            </motion.div>
          </div>
        </div>
        <div >
          <img src={"assets/location-map.svg"} alt={"project.title"} className="w-full  object-cover" />
        </div>
        {/* <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium">Front End</h4>
              <ul className="grid grid-cols-2 gap-4 mt-2">
                <li className="bg-gray-800 p-3 rounded-md">React</li>
                <li className="bg-gray-800 p-3 rounded-md">React Native</li>
                <li className="bg-gray-800 p-3 rounded-md">Flutter</li>
                <li className="bg-gray-800 p-3 rounded-md">TypeScript</li>
                <li className="bg-gray-800 p-3 rounded-md">Tailwind CSS</li>
                <li className="bg-gray-800 p-3 rounded-md">UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium">Back End</h4>
              <ul className="grid grid-cols-2 gap-4 mt-2">
                <li className="bg-gray-800 p-3 rounded-md">.NET 8</li>
                <li className="bg-gray-800 p-3 rounded-md">Node.js</li>
                <li className="bg-gray-800 p-3 rounded-md">Java</li>
                <li className="bg-gray-800 p-3 rounded-md">Python</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium">Database</h4>
              <ul className="grid grid-cols-2 gap-4 mt-2">
                <li className="bg-gray-800 p-3 rounded-md">Firebase</li>
                <li className="bg-gray-800 p-3 rounded-md">SQL</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium">Soft Skills</h4>
              <ul className="grid grid-cols-2 gap-4 mt-2">
                <li className="bg-gray-800 p-3 rounded-md">Problem-Solving</li>
                <li className="bg-gray-800 p-3 rounded-md">Teamwork</li>
                <li className="bg-gray-800 p-3 rounded-md">Adaptability</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium">Tools</h4>
              <ul className="grid grid-cols-2 gap-4 mt-2">
                <li className="bg-gray-800 p-3 rounded-md">Git</li>
                <li className="bg-gray-800 p-3 rounded-md">Firebase</li>
                <li className="bg-gray-800 p-3 rounded-md">Vite</li>
                <li className="bg-gray-800 p-3 rounded-md">TensorFlow</li>
                <li className="bg-gray-800 p-3 rounded-md">PyTorch</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </motion.section>
  )
}

export default About