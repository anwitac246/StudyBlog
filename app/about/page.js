'use client'
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link"
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-gray-300 transition-colors duration-500 mt-16">
        <div className="container mx-auto p-6">
          
         
          <motion.div
            className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">About StudyBlog</h1>
            <p className="text-lg mb-4 text-slate-700 dark:text-gray-300">
              Welcome to <strong>StudyBlog</strong>, your go-to resource for staying updated with the latest and evolving technologies. Founded by <strong>Anwita Chakraborty</strong> in October 2024, we aim to create a vibrant community where tech enthusiasts can learn, grow, and share.
            </p>
            <p className="text-lg mb-4 text-slate-700 dark:text-gray-300">
              Whether you're a beginner or a seasoned developer, StudyBlog offers high-quality tutorials, deep dives into cutting-edge technologies, and insightful articles that keep you ahead of the curve.
            </p>
            
              <Button><Link href="/blog">Explore Blog</Link></Button>
           
          </motion.div>

         
          <motion.div
            className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Meet the Founder</h2>
            <div className="flex items-center">
              <motion.img
                src="/pfp_resume.jpg" 
                alt="Anwita Chakraborty"
                className="w-24 h-24 rounded-full object-cover mr-4 shadow-md"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Anwita Chakraborty</h3>
                <p className="text-lg text-slate-700 dark:text-gray-300">
                  Anwita is a passionate technologist and educator. She loves sharing her knowledge and helping others navigate the tech world. Her expertise lies in web development, competitive programming, and emerging technologies.
                </p>
              </div>
            </div>
          </motion.div>

         
          <motion.div
            className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Vision</h2>
            <p className="text-lg mb-4 text-slate-700 dark:text-gray-300">
              At StudyBlog, we envision a world where technology is accessible to everyone. We strive to create content that inspires people to develop new skills, innovate, and build the future of tech.
            </p>
            <p className="text-lg text-slate-700 dark:text-gray-300">
              Our mission is to build a knowledge-sharing community where creators and learners come together to advance the field of technology.
            </p>
          </motion.div>

         
          <motion.div
            className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-lg hover:shadow-2xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Tech Tutorials</h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Step-by-step tutorials on the latest web development technologies, frameworks, and tools.
                </p>
              </motion.div>
              <motion.div
                className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-lg hover:shadow-2xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Coding Challenges</h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Participate in coding challenges to sharpen your competitive programming skills.
                </p>
              </motion.div>
              <motion.div
                className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-lg hover:shadow-2xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Career Advice</h3>
                <p className="text-slate-600 dark:text-gray-300">
                  Expert tips and advice for advancing your career in the tech industry.
                </p>
              </motion.div>
            </div>
          </motion.div>

         
          <motion.div
            className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Get in Touch</h2>
            <p className="text-lg mb-4 text-slate-700 dark:text-gray-300">
              We'd love to hear from you! Whether you have questions, feedback, or collaboration ideas, feel free to reach out.
            </p>
            <p>Fill out <Link href="/contact" className="font-bold underline">our form</Link> or contact via</p>
            <br/>
            <div className="flex justify-start gap-2">

            
            <a href="mailto:diyachakra.369@gmail.com" className="text-blue-600 dark:text-blue-400 underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="grey" fill="none">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
            </a>
            <a href="https://www.instagram.com/anwitac.795?igsh=YmdueHZuYTd3NHlq" className="text-blue-600 dark:text-blue-400 underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="grey" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
            </a>
            <a href="https://x.com/ThisisAnwita_C?t=kMJla6JC-R1FMdeYSTE9Sw&s=08" className="text-blue-600 dark:text-blue-400 underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="grey" fill="none">
    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
