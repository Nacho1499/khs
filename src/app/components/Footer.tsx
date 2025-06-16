"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center py-4 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      &copy; {currentYear} KHS. All Right Reserved.
    </footer>
  );
};

export default Footer;
