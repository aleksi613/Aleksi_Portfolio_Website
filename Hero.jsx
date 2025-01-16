import React from "react";
import WaveCanvas from "./Wave";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative bg-cover bg-center min-h-screen px-4 md:px-10">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Problem Solver",
              1000,
              "Tech Enthusiast",
              1000,
              "CompSci Student",
              1000,
              "Lifelong Learner",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hey, I am <br />
            <span className="text-purple-500">Aleksi Valioghli</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
              href="/Aleksi_Valioghli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer" // for security
              download="Aleksi_Valioghli_Resume.pdf"
            >
              Download CV
            </motion.a>
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/aleksi613"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/aleksivalioghli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="
            relative
            w-full  
            h-[450px]
            overflow-visible
        "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <WaveCanvas />
        </motion.div>
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;