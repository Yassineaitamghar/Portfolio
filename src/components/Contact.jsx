import { CONTACT } from "../contstants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-bold text-gradient"
      >
        Get In Touch
      </motion.h2>
      <div className="flex flex-col items-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="my-4 flex justify-center space-x-8"
        >
          <a
            href={CONTACT.linkdin}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin
              size={40}
              className="text-purple-600 hover:text-purple-800"
            />
          </a>
          <a
            href={CONTACT.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <FaGithub
              size={40}
              className="text-purple-600 hover:text-purple-800"
            />
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="my-4 flex justify-center space-x-8"
        >
          <a
            href={`tel:${CONTACT.PhoneNumber}`}
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <FaPhone
              size={40}
              className="text-purple-600 hover:text-purple-800"
            />
          </a>
          <a
            href={`mailto:${CONTACT.Email}`}
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <FaEnvelope
              size={40}
              className="text-purple-600 hover:text-purple-800"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
