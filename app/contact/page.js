'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const ContactSection = () => {
  // Form state for name, email, and message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update form state when input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission by triggering mailto link
  const handleSendEmail = () => {
    const { name, email, message } = formData;
    const mailtoLink = `mailto:diyachakra.369@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 dark:from-slate-900 dark:to-slate-900 flex items-center justify-center p-6">
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button type="button" className="w-full" onClick={handleSendEmail}>
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
