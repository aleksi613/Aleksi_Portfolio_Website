import React from "react";
import { motion } from "framer-motion";
// React Icons for a polished look
import {
  FaDesktop,
  FaBook,
  FaGlobe,
  FaPuzzlePiece,
  FaLaptopCode,
} from "react-icons/fa";

const courses = [
  { name: "Operating Systems Programming", grade: "A+", icon: <FaDesktop /> },
  { name: "Abstract Data Types/Algorithms", grade: "A", icon: <FaBook /> },
  { name: "Fundamental Web Applications", grade: "A+", icon: <FaGlobe /> },
  { name: "Discrete Structures", grade: "A+", icon: <FaPuzzlePiece /> },
  { name: "Introduction to Computer Science II", grade: "A+", icon: <FaLaptopCode /> },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full min-h-screen bg-purple-1000 text-white py-32 px-6"
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-wide mb-4">Education</h2>
          <p className="text-lg mb-2">
            Bachelor of Computer Science, Specialization in Software Engineering
          </p>
          <p className="text-md mb-1">Carleton University, Ottawa, Canada</p>
          <p className="text-md">
            <span className="font-semibold">CGPA:</span> 3.9/4.0
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              // Initial fade-up
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              // Scale + border glow on hover
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(107,33,168,0.4)", // Purple glow effect
              }}
              className="relative flex flex-col items-center text-center
                         p-6 rounded-xl shadow-lg 
                         bg-white/5 backdrop-blur-xl
                         border border-transparent
                         hover:border-gradient
                         hover:border-transparent
                         transition-all duration-300
                         cursor-pointer group"
            >
              {/* Neon Border (pseudo-element trick) */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none
                           border-2 border-transparent
                           group-hover:border-gradient
                           transition-all duration-300"
              />

              {/* Icon Container */}
              <motion.div
                className="text-5xl mb-4 text-gray-200
                           p-4 rounded-full bg-white/10
                           transition-colors duration-300
                           group-hover:text-white
                           group-hover:bg-purple-600/20"
                whileHover={{ rotate: [0, 2, -2, 0], scale: [1, 1.05, 1] }}
              >
                {course.icon}
              </motion.div>

              {/* Course Name */}
              <h3 className="text-xl font-semibold mb-2">
                {course.name}
              </h3>

              {/* Grade Reveal on Hover */}
              <motion.div
                className="absolute inset-0 flex justify-center items-center
                           bg-black bg-opacity-75 rounded-xl
                           text-3xl font-bold
                           opacity-0 group-hover:opacity-100
                           transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {course.grade}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
