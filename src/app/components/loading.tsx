"use client"
import React, { useEffect,useState } from 'react';

const Loading = () => {
     const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (!isLoading) {
    return null;
  }
  return (
    <div className="flex items-center justify-center space-x-2 h-32">
  <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0s]"></span>
  <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
  <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
</div>
  )
};

export default Loading