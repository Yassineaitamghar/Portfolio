import AboutMePic from "../assets/IMG5646.jpg";
import { ABOUT_TEXT } from "../contstants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-5xl font-bold text-gradient">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center"
        >
          <img
            src={AboutMePic}
            alt="Rayan Cooray Profile Pic"
            className="h-87 w-80 rounded-2xl"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-start"
        >
          <p className="my-2 max-w-xl py-6 text-lg font-semibold text-white-800 tracking-normal">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
