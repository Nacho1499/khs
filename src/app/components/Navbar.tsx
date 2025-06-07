"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-white p-4 sticky top-0 left-0 right-0 z-40 w-full opacity-80 bg-gradient-to-r from-blue-800 to-indigo-900 bg-white/10 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-400">KHS</span>
          <hr className="text-blue-400" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
         
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gradient-to-r from-blue-800 to-indigo-900  mt-2  text-white p-4 space-y-4 rounded`}
      >
        <Link
          href="/"
          onClick={toggleMenu}
          className="block hover:text-blue-400"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={toggleMenu}
          className="block hover:text-blue-400"
        >
          About
        </Link>
       
      </div>
    </nav>
  );
};
