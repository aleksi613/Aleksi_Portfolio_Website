import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import iconPS from "../assets/metalPS.png";
import iconBE from "../assets/metalBE.png";
import iconSphere from "../assets/metalSphere.png";
import iconFS from "../assets/metalFS.png";

const Overview = () => {
  const cards = [
    {
      title: "AI/ML Enthusiast",
      icon: (
        <img
          src={iconSphere}
          alt="Metal Icon"
          className="w-16 h-16 mx-auto"
        />
      ),
    },
    {
      title: "Creative Problem Solver",
      icon: (
        <img
          src={iconPS}
          alt="Metal Icon"
          className="w-16 h-16 mx-auto"
        />
      ),
    },
    {
      title: "Full-Stack Software Engineer",
      icon: (
        <img
          src={iconFS}
          alt="Metal Icon"
          className="w-16 h-16 mx-auto"
        />
      ),
    },
    {
      title: "Backend Software Engineer",
      icon: (
        <img
          src={iconBE}
          alt="Metal Icon"
          className="w-16 h-16 mx-auto"
        />
      ),
    },
  ];

  return (
    <div
      className="relative w-full h-screen bg-purple-1000 text-white"
      id="overview"
    >
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center h-full px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg uppercase text-purple-400 mb-4"
        >
          Introduction
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6"
        >
          Overview
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl leading-8 max-w-4xl mb-10"
        >
          Hey there 👋 I'm Aleksi. I am a dedicated and passionate aspiring
          software engineer currently pursuing a Bachelor's of Computer
          Science with a specialization in Software Engineering at Carleton
          University. My passion lies in leveraging technology to create
          impactful solutions, whether through full-stack and web
          development, exploring cutting-edge AI/ML advancements, or building
          scalable and efficient backend systems. I thrive in collaborative
          environments, constantly seeking to learn and innovate. Feel free
          to explore my work on GitHub or reach out—I’m always eager to
          connect, exchange ideas, and collaborate on exciting projects!
        </motion.p>

        {/* Card Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10"
        >
          {cards.map((card, index) => (
            <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 30px rgba(128, 90, 213, 0.7)", // Glow effect
                  transition: { duration: 0.2 },
                }}
                className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-[1px] rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="bg-gray-900 rounded-lg py-8 px-6 flex flex-col items-center">
                  <div className="text-5xl mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;