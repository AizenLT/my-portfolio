// components/Contact.tsx
import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const res = await fetch('https://my-portfolio-backend-eiuj.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setFormData({ name: '', email: '', message: '' })
        setStatus('Message sent!')
      } else {
        setStatus('Failed to send message.')
      }
    } catch (err) {
      console.log(err)
      setStatus('Error sending message.')
    }
  }

  return (
    <section className="py-20 max-w-2xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-3 bg-gray-800 rounded-md text-white" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-3 bg-gray-800 rounded-md text-white" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={4} required className="w-full p-3 bg-gray-800 rounded-md text-white" />
        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold">Send Message</button>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>

      <div className="flex justify-center mt-10 gap-6 text-2xl text-white">
        <a href="https://www.linkedin.com/in/donatas-kareta-78b331232" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/AizenLT" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:donataskaretalt@email.com"><FaEnvelope /></a>
      </div>
    </section>
  )
}

export default Contact
