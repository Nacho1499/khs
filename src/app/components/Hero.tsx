"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
const images = ["/new1.jpg", "/new2.jpg", "/lab1.jpg"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto-scroll the images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="relative h-screen overflow-hidden ">
      {/* Image carousel with overlay */}
      <div className="relative w-full h-full ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out bg-fixed ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-50 z-10"></div>
      </div>

      {/* Hero Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-6 md:px-12">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4">
          Kuje Health-care Service (KHS)
        </h1>
        <p className="text-xl md:text-xl mb-8">
          Kuje Health-care Service provide compassionate online care for
          healthie <br /> lives and stronger communities.
        </p>
        {/* Action Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            href="/signup"
            className="inline-block  text-white text-white py-3 bg-white/10 backdrop-blur-md px-6 rounded-lg hover:shadow-lg transition-all"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="inline-block border-2  text-white py-3 px-6 bg-white/10 backdrop-blur-md rounded-lg hover:shadow-lg  transition-all"
          >
            Login Here
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
