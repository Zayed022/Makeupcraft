// src/components/ContactUs.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/v1/users/contact-us', data);
      
      toast.success("Message sent seccussfully",response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      toast.error("Error while submitting the message!")
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <br />
      
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-blue-500">Name:</label>
          <input
            type="text"
            id="name"
            className="p-2 border border-gray-300 rounded-md"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="email" className="mb-1 font-medium text-blue-500">Email:</label>
          <input
            type="email"
            id="email"
            className="p-2 border border-gray-300 rounded-md"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-1 font-medium text-blue-500">Subject:</label>
          <input
            type="text"
            id="subject"
            className="p-2 border border-gray-300 rounded-md"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium text-blue-500">Message:</label>
          <textarea
            id="message"
            className="p-2 border border-gray-300 rounded-md h-28"
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message should be at least 10 characters long',
              },
            })}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
