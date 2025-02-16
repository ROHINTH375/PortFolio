import React, { useState } from "react";
// import axios from "axios"; // Import axios
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
// import { API_BASE_URL } from "../config";

const Contact = () => {
  // const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status] = useState(""); // For showing success/error messages

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus(""); // Reset status before submission

  //   try {
  //     const res = await axios.post(`${API_BASE_URL}/api/contact`, formData, {
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     if (res.status === 201) {
  //       setStatus("Message sent successfully!");
  //       setFormData({ name: "", email: "", message: "" }); // Clear form
  //     }
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     setStatus("Failed to send message. Try again later.");
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Contact Me
      </motion.h1>

      {/* <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 mb-3 bg-gray-700 rounded text-white"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 mb-3 bg-gray-700 rounded text-white"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 mb-3 bg-gray-700 rounded text-white"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600">
          Send Message
        </button>
      </motion.form> */}

      {/* Display success/error messages */}
      {status && <p className="mt-3 text-lg">{status}</p>}

      {/* Additional Contact Methods */}
      <div className="mt-6 flex space-x-4">
        <a href="mailto:rohinth1904@gmail.com" className="text-blue-400 text-2xl hover:text-blue-500">
          <FaEnvelope />
        </a>
        <a href="tel:+9524707476" className="text-green-400 text-2xl hover:text-green-500">
          <FaPhone />
        </a>
        <a href="https://wa.me/919524707476" className="text-green-400 text-2xl hover:text-green-500" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/srohinth1904" className="text-blue-500 text-2xl hover:text-blue-600" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rohinth375" className="text-gray-400 text-2xl hover:text-gray-500" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
      </div>
    </div>
  );
};

export default Contact;
