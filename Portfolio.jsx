import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    img: project1,
    title: "Chatsphere AI Project",
    description:
      "A Java-based real-time chat server featuring multi-client support, chat rooms, and persistent chat history with SQLite. Integrated with OpenAI's GPT API, the AI enhances user experience by assisting with program navigation, resolving issues, and executing tailored commands based on natural language requests, like creating chat rooms or retrieving chat history. The GUI includes a private sidebar for personal AI interactions and an option for public AI responses. Features include dual chat areas, theme toggling, user status displays, and commands for managing chat rooms and forwarding AI responses. Built with Maven using technologies like OkHttp and Gson for seamless API integration.",
    tags: ["#Java", "#SocketProgramming", "#Concurrency", "#SQLite", "#AI", "#API", "#GUI", "#Swing", "#Maven", "#DataStructures"],
    links: {
      github: "#",
    },
  },
  {
    img: project2,
    title: "Gym Management System",
    description:
      "A terminal-based system in C designed to manage gym members, equipment, and generate detailed reports. It features dynamic memory allocation for scalability, file handling for persistent data storage, and custom data structures to streamline member and equipment management. Key functionalities include adding, updating, deleting, and searching members; tracking equipment statuses with repair ETAs; and generating real-time reports on operational and broken equipment.",
    tags: ["#C", "#DynamicMemoryAllocation", "#FileHandling", "#DataStructures", "#Pointers"],
    links: {
      github: "#",
    },
  },
  {
    img: project3,
    title: "Weather Forecasting App",
    description:
      "A Python-based Weather Forecasting App that retrieves real-time weather data from the OpenWeatherMap API for any city or the user's current location using IP-based geolocation via the IPInfo API. The app supports functionality to compare weather conditions (temperature, humidity, wind speed, pressure) between two cities or between Metric (°C, m/s) and Imperial (°F, mph) units. It includes robust error handling to manage invalid inputs, API issues, and connectivity errors, ensuring a seamless user experience. Features include fetching weather by city name or current location, comparing weather data, and toggling between units.",
    tags: ["#Python", "#API", "#ErrorHandling", "#JSON"],
    links: {
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12 auto-rows-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
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
            {/* Project Content */}
            <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col h-full">
              {/* GitHub Button */}
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.304 3.495.997.108-.776.418-1.304.763-1.604-2.665-.304-5.467-1.333-5.467-5.93 0-1.31.469-2.382 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.478 5.922.429.369.823 1.096.823 2.21 0 1.594-.014 2.875-.014 3.265 0 .322.217.694.824.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[200px] object-cover"
              />
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-200 mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-500 text-white px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;