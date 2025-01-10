import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/Earth";
import StarsCanvas from "./canvas/Stars";
import { FaPaperPlane } from "react-icons/fa";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_32egc7w",
        "template_fo9rgfv",
        {
          from_name: form.name,
          to_name: "Aleksi",
          from_email: form.email,
          message: form.message,
        },
        "GKYbKIp444bHsJzjM"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative w-full h-screen bg-purple-1000 text-white" id="contact">
      {/* Stars Background */}
      <div className="absolute inset-0 z-[-1]">
        <StarsCanvas />
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center h-full gap-10 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-6 rounded-lg shadow-lg w-full md:w-[45%] ml-10"
        >
          <div className="text-white">
            {/* "Get in touch" small heading */}
            <p className="text-sm text-purple-500 tracking-wider mb-2 uppercase">
              Get in Touch
            </p>

            {/* Big "Contact." heading */}
            <h1 className="text-5xl font-bold tracking-wide mb-6">Contact.</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="w-full p-3 bg-gray-800 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-500">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="w-full p-3 bg-gray-800 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-500">Your Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="w-full p-3 bg-gray-800 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center"
                variants={slideIn("right", "tween", 0.2, 1)}
                whileHover="show"
              >
                {loading ? "Sending..." : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Earth Canvas */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[55%] flex items-center justify-center p-4 md:p-8"
        >
          {/* The EarthCanvas component might need a bigger scale or adjusted camera. */}
          <div className="w-full h-[400px] md:h-[600px]">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;