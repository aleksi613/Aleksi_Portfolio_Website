import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

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
          alert("Message sent successfully!");
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
      {/* Contact Form Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center h-full gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/3"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-sm mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="p-3 rounded bg-gray-700 focus:outline-none"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                className="p-3 rounded bg-gray-700 focus:outline-none"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm mb-2">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="p-3 rounded bg-gray-700 focus:outline-none"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Animated 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 h-[300px] md:h-[500px]"
        >
          <Canvas>
            <ambientLight intensity={0.4} />
            <OrbitControls enableZoom={false} />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} />
            <Sphere visible args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#FF69B4"
                attach="material"
                distort={0.4} // Strength of the distortion
                speed={2} // Speed of the distortion
              />
            </Sphere>
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
