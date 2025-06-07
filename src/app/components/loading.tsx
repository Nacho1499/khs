"use client";
import React, { useState,useEffect } from "react";
const Loading = () => {
  const letters = ['K', 'H', 'S'];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (!isLoading) {
    return null;
  }
  return (
    <div className="w-full h-[100vh] fixed top-0 z-50 bg-white">
      <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
      <div className="flex space-x-3">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white font-bold shadow-lg animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Loading