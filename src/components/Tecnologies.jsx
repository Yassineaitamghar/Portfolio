import { RiReactjsLine } from "react-icons/ri";
import { TbBrandHtml5 } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiJava, DiNodejs } from "react-icons/di";
import { FaAngular } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-5xl font-bold text-gradient">
        Technologies
      </h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {[
          {
            icon: <RiReactjsLine className="text-6xl text-cyan-400" />,
            duration: 2.5,
          },
          {
            icon: <TbBrandHtml5 className="text-6xl text-orange-600" />,
            duration: 3,
          },
          {
            icon: <SiMongodb className="text-6xl text-green-600" />,
            duration: 5,
          },
          {
            icon: <FaAngular className="text-6xl text-red-400" />,
            duration: 2,
          },
          {
            icon: <DiJava className="text-6xl text-orange-600" />,
            duration: 6,
          },
          {
            icon: <DiNodejs className="text-6xl text-green-600" />,
            duration: 4,
          },
        ].map(({ icon, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-6 flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
