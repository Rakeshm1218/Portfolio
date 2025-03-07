import { HERO_CONTENT, HERO_NAME } from "./../../constants";
import Profile from "../assets/Profile/Profile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:8xl text-white"
            >
              {HERO_NAME}
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-red-300 via-pink-400 to-red-500 bg-clip-text text-3xl  tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-white"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          className="flex items-center justify-center">
            <img className="rounded-2xl w-80" src={Profile} alt="about" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
