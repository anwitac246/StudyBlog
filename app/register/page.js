'use client'
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import {Button} from "@/components/ui/button";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('components/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      const result = await response.text();
      setMessage(result); 
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

     
      <div className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-slate-800">
        <form
          onSubmit={handleSubmit}
          
          className={`w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg transform transition-all duration-700 ease-out
          ${showForm ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
          `}
        >
          
          <h2 className="text-2xl font-semibold text-center text-slate-900 dark:text-gray-200 mb-6">
            Register
          </h2>

          
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-900 dark:text-gray-200 mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

         
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-900 dark:text-gray-200 mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

         
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-900 dark:text-gray-200 mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        
          <Button
            type="submit" className='w-full'
          >
            Register
          </Button>

          

        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
