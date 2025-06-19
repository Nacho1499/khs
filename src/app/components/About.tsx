"use client";
import Animation from "./Animation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className=" mt-20 bg-white px-6 md:px-16 py-12 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/abt.jpg" //
            alt="About KHS"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
          <Animation/>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About KHS</h1>
          <p className=" text-gray-600 mb-4">
            KHS is a forward-thinking platform dedicated to transforming
            healthcare delivery and access. Our mission is to connect
            communities with reliable, affordable, and high-quality hospital
            services.
          </p>
          <p className="text-md text-gray-500 mb-6">
            With a user-centered approach and modern tools, we help patients
            easily find the care they need, while supporting hospitals with
            tools to manage services and reach more people. At KHS, we believe
            in innovation, accessibility, and trust.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-3">
              <span className="text-gradient-to-r from-blue-800 to-indigo-900 text-xl font-bold">
                ✓
              </span>
              <p className="text-gray-700">Health care blogs</p>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-3">
              <span className="text-gradient-to-r from-blue-800 to-indigo-900 text-xl font-bold">
                ✓
              </span>
              <p className="text-gray-700">Book appointment</p>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-3">
              <span className="text-gradient-to-r from-blue-800 to-indigo-900 text-xl font-bold">
                ✓
              </span>
              <p className="text-gray-700">
                find verified hospitals and doctors
              </p>
            </li>
            <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-3">
              <span className="text-gradient-to-r from-blue-800 to-indigo-900 text-xl font-bold">
                ✓
              </span>
              <p className="text-gray-700">
                Easy access to contact info & directions
              </p>
            </li>
          </ul>

          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-blue-800 to-indigo-900 text-white font-medium hover:bg-blue-700 transition duration-300 mt-10"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
