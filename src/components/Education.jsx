import { EDUCATION } from "../contstants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-bold text-gradient"
      >
        Education
      </motion.h2>
      <div className="relative">
        {EDUCATION.map((education, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="mb-10 flex flex-col items-start lg:flex-row lg:justify-start"
          >
            <div className="absolute left-0 w-1 bg-purple-600 h-full" />
            <div className="ml-10 lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </div>
            <div className="lg:w-3/4 lg:ml-8">
              <h6 className="mb-2 font-semibold text-xl">
                {education.role} -
                <span className="text-sm text-purple-100">
                  {education.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
              <div className="flex flex-wrap">
                {education.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-500 transition-colors duration-300 hover:bg-purple-600"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
