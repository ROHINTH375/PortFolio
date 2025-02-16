import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "College Placement Management System",
    description: "A MERN stack project for managing student placements, interviews, and recruitment processes.",
    techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    link: "https://cool-daffodil-3885cb.netlify.app/",
    github: "https://github.com/ROHINTH375/placement-app-backend.git",
  },
  {
    id: 2,
    title: "Movie Search App",
    description: "A React application that integrates with the OMDB API to search and manage favorite movies.",
    techStack: ["React", "OMDB API", "TailwindCSS"],
    link: "https://lustrous-licorice-9654da.netlify.app/",
    github: "https://github.com/ROHINTH375/movie-app.git",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A full-stack MERN-based e-commerce platform with admin and user authentication.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://animated-toffee-ff2785.netlify.app/",
    github: "https://github.com/ROHINTH375/rohinth-app.git",
  },
  {
    id: 4,
    title: "Landing Page Design",
    description: "A responsive landing page design using HTML, CSS, and JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://effulgent-florentine-8c54db.netlify.app/",
    github: "https://github.com/ROHINTH375/guvi-assignment-2.git",
  },
];

const Projects = () => {
  return (
    <section className="container mx-auto p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="p-4 border rounded-lg shadow-lg bg-gray-900 hover:bg-gray-800 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-gray-700 px-2 py-1 rounded text-white">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={project.link}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
