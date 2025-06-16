"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
 interface test{
    name:string,
    role:string,
    text:string,
    image:string,
 }
const testimonials:test[] = [
  {
    name: "Grace Adeola",
    role: "Patient",
    text: "KHS gave me a second chance at life. The doctors were not only professional but genuinely caring.",
    image: "/doc1.jpg",
  },
  {
    name: "Samuel Uche",
    role: "Father",
    text: "My daughter received the best care. I’m grateful for the swift and expert treatment she got.",
    image: "/doc2.jpg",
  },
  {
    name: "Chidinma Okoro",
    role: "Nurse",
    text: "I’ve worked in many hospitals, but KHS stands out for its compassion and dedication.",
    image: "/doc3.jpg",
  },
  {
    name: "James Nwankwo",
    role: "Recovered Patient",
    text: "From admission to discharge, everything was smooth and supportive. I highly recommend KHS.",
    image: "/doc4.jpg",
  },
];
const Testimonal = () => {
  const [index, setIndex] = useState<number>(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const itemsPerSlide = isMobile ? 1 : 2;

  const maxIndex = Math.ceil(testimonials.length / itemsPerSlide) - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const currentItems = testimonials.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );
  return (
    <div className="w-full bg-gray-100 mt-20">
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Users Says
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            {currentItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center w-full md:w-[45%] transition-all hover:shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-blue-700"
                  height={100}
                  width={200}
                />
                <p className="text-gray-600 italic">{item.text}</p>
                <h4 className="mt-4 font-semibold text-lg text-gray-800">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`h-3 w-3 rounded-full transition-all ${
                i === index
                  ? "bg-gradient-to-r from-blue-800 to-indigo-900 scale-125"
                  : "bg-gray-400"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
