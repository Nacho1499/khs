"use client";

import React, { useEffect, useState } from "react";
import { Users, Hospital, Stethoscope, TrendingUp, TrendingDown } from "lucide-react";
import type { JSX } from "react";

interface StatItem {
  title: string;
  count: number;
  duration: number;
  icon: JSX.Element;
  trend: "up" | "down";
  change: number;
}

interface AnimatedCountProps {
  target: number;
  duration?: number;
}

const AnimatedCount: React.FC<AnimatedCountProps> = ({ target, duration = 1000 }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const increment = Math.max(1, Math.floor(end / 100));
    const stepTime = Math.abs(Math.floor(duration / (end / increment)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Animation: React.FC = () => {
  const stats: StatItem[] = [
    {
      title: "Total Users",
      count: 245,
      duration: 1200,
      icon: <Users />,
      trend: "up",
      change: 12,
    },
    {
      title: "Total Doctors",
      count: 38,
      duration: 800,
      icon: <Stethoscope />,
      trend: "down",
      change: 4,
    },
    {
      title: "Total Hospitals",
      count: 12,
      duration: 600,
      icon: <Hospital />,
      trend: "up",
      change: 6,
    },
  ];

  const colorMap: Record<string, string> = {
    "Total Users": "bg-blue-100 text-blue-600",
    "Total Doctors": "bg-green-100 text-green-600",
    "Total Hospitals": "bg-red-100 text-red-600",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3 max-w-screen-sm mx-auto mt-5">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className={`rounded-full w-8 h-8 flex items-center justify-center text-xs ${colorMap[item.title]}`}>
            {React.cloneElement(item.icon, { className: "w-4 h-4" })}
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs text-gray-500 font-medium mb-0.5">{item.title}</h4>
            <div className="flex items-center gap-1">
              <p className="text-xl font-extrabold text-gray-900 leading-tight">
                <AnimatedCount target={item.count} duration={item.duration} />
              </p>
              {item.trend === "up" ? (
                <div className="flex items-center text-green-500 text-xs animate-bounce">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="ml-0.5">+{item.change}%</span>
                </div>
              ) : (
                <div className="flex items-center text-red-500 text-xs animate-bounce">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span className="ml-0.5">-{item.change}%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animation;
