'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'syaiful@example.com',
      link: 'mailto:syaiful@example.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+62 812 3456 7890',
      link: 'tel:+6281234567890',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Indonesia',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind? Let&apos;s create something amazing together
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg glass-effect bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg glass-effect bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg glass-effect bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="w-full px-8 py-4 bg-accent text-primary rounded-lg font-bold text-lg hover:bg-cyan-500 transition"
                onClick={(e) => handleSubmit(e as any)}
              >
                Send Message
              </button>
            </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <div key={idx}>
                  <a
                    href={info.link}
                    className="flex items-center gap-4 glass-effect p-4 rounded-lg cursor-pointer group hover:bg-white/20 transition"
                  >
                    <div className="text-accent text-2xl group-hover:scale-125 transition">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                </div>
              )
            })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
