import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-blue-700 text-white transition-all">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-5 shadow-md bg-gray-900 dark:bg-gray-800">
          <h1 className="text-xl font-bold">Rohinth's Portfolio</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl focus:outline-none"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-10"
        >
          <h2 className="text-4xl font-bold">Hi, I'm Rohinth S 👋</h2>
          <p className="text-lg mt-2">A Passionate Full-Stack Developer 🚀</p>
          <div className="mt-5 flex justify-center space-x-4">
            <a
              href="projects"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              View My Work
            </a>
            <a
              href="contact"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>
        </motion.section>

        {/* Creative Resume Box */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center my-10"
        >
          <div className="relative bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg flex flex-col items-center text-center overflow-hidden">
            {/* Floating Animation Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <motion.div
                className="w-40 h-40 bg-blue-500 rounded-full absolute -top-10 -left-10"
                animate={{ scale: [1, 1.5, 1], rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              />
              <motion.div
                className="w-28 h-28 bg-purple-500 rounded-full absolute bottom-0 right-0"
                animate={{ scale: [1, 1.3, 1], rotate: [0, -360] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
            </div>

            {/* Profile Image */}
            <motion.img
              src="/R1.jpg" // Replace with your image
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Name & Title */}
            <h2 className="text-2xl font-bold">Rohinth S</h2>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer | MERN Stack
            </p>

            {/* Download Resume Button */}
            <motion.a
              href="/Rohinth.S.pdf" // Publicly accessible file path
              download="Rohinth_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <FaDownload className="mr-2" /> Download Resume
            </motion.a>
          </div>
        </motion.section>

        {/* Internship Experience */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Internship Experience
          </h2>
          <div className="shadow-lg p-6 rounded-lg bg-gray-900 dark:bg-gray-800">
            <h3 className="text-xl font-semibold">
              Software Developer Intern - Bluestock Fintech
            </h3>
            <p className="mt-2">
              Worked on building and optimizing user interfaces using React.js
              and Tailwind CSS. Gained hands-on experience in API integrations,
              component reusability, and improving website performance.
              Collaborated with a team to develop responsive and accessible web
              pages.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-5 text-center bg-gray-900 dark:bg-gray-800">
          <p>&copy; 2025 Rohinth S</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-xl">
              <FaGithub />
            </a>
            <a href="#" className="text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-xl">
              <FaEnvelope />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
