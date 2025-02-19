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
    description: "A MERN stack project for managing student placements, applications, and interviews.",
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
    description: "A React application that integrates with the OMDB API for movie searches.",
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
    description: "A full-stack MERN-based e-commerce platform with admin authentication.",
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
    description: "A responsive landing page design using HTML, CSS, and JavaScript.",
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
            <button onClick={() => handleScrollTo("projects")} className="hover:text-blue-400">
              Projects
            </button>
            <button onClick={() => handleScrollTo("contact")} className="hover:text-blue-400">
              Contact
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
          <img src="../R1.jpg" alt="Rohinth's Profile" className="w-40 h-40 rounded-full border-4 border-blue-500 mx-auto mt-6" />
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

        {/* Journey into Full-Stack Development */}
        <motion.section
          className="max-w-4xl mx-auto p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">🔹 My Journey into Full-Stack Development</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            During my <strong>internship at Bluestock Fintech</strong>, I worked on <strong>React.js and TailwindCSS</strong>, where I built interactive and optimized UI components. 
            This experience solidified my passion for front-end development. However, I wanted to expand my expertise, so I started working on the backend 
            (<strong>Node.js, Express.js, MongoDB</strong>) to understand how data flows in a web application.
          </p>
        </motion.section>
        


        <motion.section
          className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">🛤 Experience Roadmap</h2>
          <div className="border-l-4 border-blue-400 pl-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">🔹 Full-Stack Development Intern - Cognifyz Technologies</h3>
              
            <li> Worked on front-end development using React.js and TailwindCSS.</li>
            <li> Optimized UI/UX components for better responsiveness and accessibility.</li>
            <li> Integrated third-party APIs to enhance application functionality.</li>
            <li>Assisted in debugging and improving website performance.</li> 
          
              <p className="text-gray-300">Built web applications using MERN stack, implemented APIs, and developed UI/UX components.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🔹 Software Development Intern - Bluestock Fintech</h3>
              <li> Worked on front-end development using React.js and TailwindCSS.</li>
            <li> Optimized UI/UX components for better responsiveness and accessibility.</li>
            <li> Integrated third-party APIs to enhance application functionality.</li>
            <li> Assisted in debugging and improving website performance.</li>
              <p className="text-gray-300">Optimized UI/UX, integrated third-party APIs, and improved website performance.</p>
            </div>
          </div>
        </motion.section>

         {/* Why Join a Software Development Team */}
         <motion.section
          className="max-w-4xl mx-auto p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow-400">💡 Why I Want to Join a Software Development Team</h2>
          <ul className="text-lg text-gray-300 space-y-2">
            <li>✅ Solve complex problems using software engineering principles.</li>
            <li>✅ Work with experienced developers and learn from real-world projects.</li>
            <li>✅ Develop <strong>scalable</strong> and <strong>innovative applications</strong> that make an impact.</li>
            <li>✅ Grow professionally by continuously expanding my technical expertise.</li>
          </ul>
        </motion.section>

         {/* Passion for Software Development */}
         <motion.section
          className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-400">🚀 My Passion in Action</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Software development is not just a career choice for me—it is a <strong>passion</strong> that drives me to <strong>innovate, learn,</strong> and <strong>build better solutions every day.</strong>  
          </p>
        </motion.section>
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
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.5)" }}
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

                <h3 className="text-2xl font-semibold relative z-10">{project.title}</h3>
                <p className="text-gray-300 mt-2 relative z-10">{project.description}</p>

                {/* Tech Stack */}
                <div className="mt-2 relative z-10">
                  <h4 className="text-lg font-semibold text-blue-400">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 rounded text-white text-sm">
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
        </section>

        <motion.section
          className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">🛠 Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript",
              "HTML & CSS",
              "TailwindCSS",
              "Git & GitHub",
              "REST APIs",
              "JWT Authentication",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-700 rounded-lg shadow-md"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], backgroundColor: "#1E40AF" }}
                transition={{ duration: 0.5 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>



        {/* Contact Section */}
        <section id="contact" className="p-10 bg-gray-900">
          <h2 className="text-3xl font-bold text-center">Contact Me</h2>
          <div className="mt-6 flex space-x-4 justify-center">
            <a href="mailto:rohinth1904@gmail.com" className="text-blue-400 text-2xl hover:text-blue-500">
              <FaEnvelope />
            </a>
            <a href="tel:+9524707476" className="text-green-400 text-2xl hover:text-green-500">
              <FaPhone />
            </a>
            <a href="https://wa.me/919524707476" className="text-green-400 text-2xl hover:text-green-500" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/rohinths1904" className="text-blue-500 text-2xl hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Rohinth375" className="text-gray-400 text-2xl hover:text-gray-500" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </section>
        <section>
          <div>
            
          </div>
        </section>

        {/* Footer */}
        <footer className="p-5 text-center bg-gray-900">
          <p>&copy; 2025 Rohinth S</p>
        </footer>
      </div>
    </div>
  );
}
