// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaSun,
//   FaMoon,
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaDownload,
// } from "react-icons/fa";
// import {contact} from "../pages/Contact";
// export default function HomePage() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-blue-700 text-white transition-all">
//         {/* Navbar */}
//         <nav className="flex justify-between items-center p-5 shadow-md bg-gray-900 dark:bg-gray-800">
//           <h1 className="text-xl font-bold">Rohinth's Portfolio</h1>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-2xl focus:outline-none"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>
//         </nav>

//         {/* Hero Section */}
//         <motion.section
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center p-10"
//         >
//           <h2 className="text-4xl font-bold">Hi, I'm Rohinth S 👋</h2>
//           <p className="text-lg mt-2">A Passionate Full-Stack Developer 🚀</p>
//           <div className="mt-5 flex justify-center space-x-4">
//             <a
//               href="projects"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//             >
//               View My Work
//             </a>
//             <a
//               href="contact"
//               className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800"
//             >
//               Contact Me
//             </a>
//           </div>
//         </motion.section>

//         {/* Creative Resume Box */}
//         <motion.section
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="flex justify-center my-10"
//         >
//           <div className="relative bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg flex flex-col items-center text-center overflow-hidden">
//             {/* Floating Animation Elements */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
//               <motion.div
//                 className="w-40 h-40 bg-blue-500 rounded-full absolute -top-10 -left-10"
//                 animate={{ scale: [1, 1.5, 1], rotate: [0, 360] }}
//                 transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//               />
//               <motion.div
//                 className="w-28 h-28 bg-purple-500 rounded-full absolute bottom-0 right-0"
//                 animate={{ scale: [1, 1.3, 1], rotate: [0, -360] }}
//                 transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//               />
//             </div>

//             {/* Profile Image */}
//             <motion.img
//               src="/R1.jpg" // Replace with your image
//               alt="Profile"
//               className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             />

//             {/* Name & Title */}
//             <h2 className="text-2xl font-bold">Rohinth S</h2>
//             <p className="text-gray-400 mb-4">
//               Full-Stack Developer | MERN Stack
//             </p>

//             {/* Download Resume Button */}
//             <motion.a
//               href="/Rohinth.S.pdf" // Publicly accessible file path
//               download="Rohinth_S_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
//               whileHover={{ scale: 1.1 }}
//             >
//               <FaDownload className="mr-2" /> Download Resume
//             </motion.a>
//           </div>
//         </motion.section>

//         {/* Internship Experience */}
//         <section className="py-16 px-6 max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Internship Experience
//           </h2>
//           <div className="shadow-lg p-6 rounded-lg bg-gray-900 dark:bg-gray-800">
//             <h3 className="text-xl font-semibold">
//               Software Developer Intern - Bluestock Fintech
//             </h3>
//             <p className="mt-2">
//               Worked on building and optimizing user interfaces using React.js
//               and Tailwind CSS. Gained hands-on experience in API integrations,
//               component reusability, and improving website performance.
//               Collaborated with a team to develop responsive and accessible web
//               pages.
//             </p>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="p-5 text-center bg-gray-900 dark:bg-gray-800">
//           <p>&copy; 2025 Rohinth S</p>
//           <div className="flex justify-center space-x-4 mt-2">
//             {/* <a href="#" className="text-blue-400 hover:underline">
//               <FaGithub />
//             </a>
//             <a href="#" className="text-blue-400 hover:underline">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="text-blue-400 hover:underline">
//               <FaEnvelope />
//             </a> */}

//             <button
//               onClick={() => alert("Feature coming soon!")}
//               className="text-blue-400 hover:underline"
//             >
//               <FaGithub />
//             </button>
//             <button
//               onClick={() => alert("Feature coming soon!")}
//               className="text-blue-400 hover:underline"
//             >
//               <FaLinkedin />
//             </button>
//             <button
//               onClick={() => alert("Feature coming soon!")}
//               className="text-blue-400 hover:underline"
//             >
//               <FaEnvelope />
//             </button>
//           </div>
//           <div className="flex justify-center space-x-4 mt-2"></div>
//         </footer>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import ChatArea from "./ChatArea";
import { io } from "socket.io-client";
// Projects Data
// const projects = [
//   {
//     id: 1,
//     title: "College Placement Management System",
//     description: "A MERN stack project for managing student placements, applications, and interview scheduling.",
//     techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
//     link: "https://cool-daffodil-3885cb.netlify.app/",
//     github: "https://github.com/ROHINTH375/placement-app-backend.git",
//   },
//   {
//     id: 2,
//     title: "Movie Search App",
//     description: "A React application that integrates with the OMDB API to search and manage favorite movies.",
//     techStack: ["React", "OMDB API", "TailwindCSS"],
//     link: "https://lustrous-licorice-9654da.netlify.app/",
//     github: "https://github.com/ROHINTH375/movie-app.git",
//   },
//   {
//     id: 3,
//     title: "E-Commerce Platform",
//     description: "A full-stack MERN-based e-commerce platform with admin and user authentication.",
//     techStack: ["React", "Node.js", "MongoDB", "Express"],
//     link: "https://animated-toffee-ff2785.netlify.app/",
//     github: "https://github.com/ROHINTH375/rohinth-app.git",
//   },
//   {
//     id: 4,
//     title: "Landing Page Design",
//     description: "A responsive landing page design using HTML, CSS, and JavaScript.",
//     techStack: ["HTML", "CSS", "JavaScript"],
//     link: "https://effulgent-florentine-8c54db.netlify.app/",
//     github: "https://github.com/ROHINTH375/guvi-assignment-2.git",
//   },
// ];

const projects = [
  {
    id: 1,
    title: "College Placement Management System",
    description:
      "A MERN stack project for managing student placements, applications, and interviews.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    details: [
      "Developed a full-stack web app for managing student placements.",
      "Created dashboards for students and recruiters.",
      "Integrated interview scheduling and application tracking.",
    ],
    link: "https://cool-daffodil-3885cb.netlify.app/",
    github: "https://github.com/ROHINTH375/placement-app-backend.git",
  },
  {
    id: 2,
    title: "Movie Search App",
    description:
      "A React application that integrates with the OMDB API for movie searches.",
    techStack: ["React.js", "OMDB API", "TailwindCSS"],
    details: [
      "Search for movies by title and view detailed information.",
      "Implemented a favorites feature using local storage.",
      "Optimized API calls for better performance.",
    ],
    link: "https://lustrous-licorice-9654da.netlify.app/",
    github: "https://github.com/ROHINTH375/movie-app.git",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "A full-stack MERN-based e-commerce platform with admin authentication.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
    details: [
      "Developed a scalable e-commerce store with cart functionality.",
      "Implemented JWT authentication for users and admins.",
      "Integrated payment gateways and product management.",
    ],
    link: "https://animated-toffee-ff2785.netlify.app/",
    github: "https://github.com/ROHINTH375/rohinth-app.git",
  },
  {
    id: 4,
    title: "Landing Page Design",
    description:
      "A responsive landing page design using HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    details: [
      "Designed a modern, fully responsive landing page.",
      "Implemented smooth scrolling and animations.",
      "Optimized performance for better loading speed.",
    ],
    link: "https://effulgent-florentine-8c54db.netlify.app/",
    github: "https://github.com/ROHINTH375/guvi-assignment-2.git",
  },
];

const socket = io("https://portfolio-backend1-rcsm.onrender.com", {
  transports: ["websocket", "polling"],
  withCredentials: true
});

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const handleScrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-blue-700 text-white transition-all">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-900 p-5 flex justify-between items-center shadow-md z-50">
          <h1 className="text-xl font-bold">Rohinth's Portfolio</h1>
          <div className="space-x-6">
            <button
              onClick={() => handleScrollTo("projects")}
              className="hover:text-blue-400"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="hover:text-blue-400"
            >
              Contact
            </button>
            <button
              onClick={() => handleScrollTo("chat")}
              className="hover:text-blue-400"
            >
              Chat
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-20 pt-32"
        >
          <h2 className="text-4xl font-bold">Hi, I'm Rohinth S 👋</h2>
          <p className="text-lg mt-2">A Passionate Full-Stack Developer 🚀</p>
          <motion.a
            href="/Rohinth.S.pdf"
            download="Rohinth_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-2 mt-5 rounded-full hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaDownload className="inline mr-2" /> Download Resume
          </motion.a>
        </motion.section>

        {/* Projects Section */}
        {/* <section id="projects" className="p-10">
          <h2 className="text-3xl font-bold text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="mt-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mr-3">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}
        {/* Projects Section */}
        <section id="projects" className="p-10">
          <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
          <div className="flex flex-col space-y-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative p-6 bg-gray-800 rounded-lg shadow-lg cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 100, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.5)",
                }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className="text-2xl font-semibold relative z-10">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2 relative z-10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-2 relative z-10">
                  <h4 className="text-lg font-semibold text-blue-400">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-2 py-1 rounded text-white text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <ul className="list-disc list-inside text-gray-400 mt-2 relative z-10">
                  {project.details?.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className="mt-4 relative z-10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mr-3"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-10 bg-gray-900">
          <h2 className="text-3xl font-bold text-center">Contact Me</h2>
          <div className="mt-6 flex space-x-4 justify-center">
            <a
              href="mailto:rohinth1904@gmail.com"
              className="text-blue-400 text-2xl hover:text-blue-500"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+9524707476"
              className="text-green-400 text-2xl hover:text-green-500"
            >
              <FaPhone />
            </a>
            <a
              href="https://wa.me/919524707476"
              className="text-green-400 text-2xl hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/srohinth1904"
              className="text-blue-500 text-2xl hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rohinth375"
              className="text-gray-400 text-2xl hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </section>
        <section id="chat" className="p-10">
          <ChatArea />
        </section>

        {/* Footer */}
        <footer className="p-5 text-center bg-gray-900">
          <p>&copy; 2025 Rohinth S</p>
        </footer>
      </div>
    </div>
  );
}
