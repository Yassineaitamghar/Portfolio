import profilePic from "../assets/DSC09418.jpg";
import { HERO_CONTENT } from "../contstants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-9 text-4xl font-thin tracking-tight lg:mt-8
              lg:text-6xl"
            >
              Yassine Ait Amghar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500  to-purple-500
              bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-lg font-semibold text-white-900 tracking-normal"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Yassine Ait Amghar Profile Pic"
              className="h-87 w-80 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
