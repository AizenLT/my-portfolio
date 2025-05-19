import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setStatus(null) // Clear status on input change
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('https://my-portfolio-backend-eiuj.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ message: 'Message sent successfully!', isError: false })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ message: data.message || 'Failed to send message. Please try again.', isError: true })
      }
    } catch (error) {
      console.log(error)
      setStatus({ message: 'Network error. Please try again.', isError: true })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Get in Touch</h2>
      <p className="text-lg mb-6 text-center text-gray-700 dark:text-gray-300">
        I'm always open to new opportunities and collaborations. Feel free to reach out using the form below.
      </p>
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md p-3 !text-gray-900 dark:!text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md p-3 !text-gray-900 dark:!text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md p-3 !text-gray-900 dark:!text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 bg-blue-600 rounded-full font-semibold text-white hover:bg-blue-700 transition-colors transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status && (
            <p
              className={`text-sm text-center ${status.isError ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}
              aria-live="polite"
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  )
}

export default Contact