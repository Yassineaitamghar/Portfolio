import { PROJECTS } from "../contstants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-bold text-gradient"
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="mb-8 w-full max-w-xs"
          >
            <motion.div
              className="rounded-lg shadow-lg overflow-hidden border border-neutral-800 relative transition-transform duration-300 hover:scale-110" // Increased scale for pop-up effect
              whileHover={{ scale: 1.15 }} // More pronounced scaling on hover
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-500 transition-colors duration-300 hover:bg-purple-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
