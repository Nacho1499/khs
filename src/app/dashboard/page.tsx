"use client"
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   useEffect(() => {
    if (isLargeScreen) setSidebarOpen(false);
  }, [isLargeScreen]);

  return (
       <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow fixed top-0 left-0 right-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center space-x-4">
            {/* Toggle hamburger/close button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 bg-white shadow-md z-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {sidebarOpen ? (
                // Close (X) icon with black stroke for visibility
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <h1 className="text-2xl font-semibold text-indigo-600 select-none">
              MyDashboard
            </h1>
          </div>

          {/* Right: User Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
            >
              <span className="sr-only">Open user menu</span>
              <img
                src="https://i.pravatar.cc/32"
                alt="User Avatar"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="hidden sm:block">Jane Doe</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40"
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Logout
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || isLargeScreen) && (
            <motion.aside
              key="sidebar"
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -250, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-40 lg:static lg:translate-x-0 lg:flex-shrink-0"
            >
              <nav className="h-full flex flex-col p-6 space-y-2 text-gray-700">
                <Link
                  href="/overview"
                  className="rounded-md px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  Overview
                </Link>
                <Link
                  href="/reports"
                  className="rounded-md px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  Reports
                </Link>
                <Link
                  href="/settings"
                  className="rounded-md px-4 py-2 hover:bg-indigo-100 hover:text-indigo-700 transition font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  Settings
                </Link>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6 lg:ml-64 container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Total Users</h3>
              <p className="text-indigo-600 text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Sales</h3>
              <p className="text-indigo-600 text-3xl font-bold">$56,789</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Active Sessions</h3>
              <p className="text-indigo-600 text-3xl font-bold">345</p>
            </div>
          </div>

          <section className="mt-10 bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <ul className="divide-y divide-gray-200 text-gray-700">
              <li className="py-3 flex justify-between">
                <span>User John Doe signed up</span>
                <time className="text-gray-400 text-sm">2 hours ago</time>
              </li>
              <li className="py-3 flex justify-between">
                <span>New order received (#1234)</span>
                <time className="text-gray-400 text-sm">5 hours ago</time>
              </li>
              <li className="py-3 flex justify-between">
                <span>System update completed</span>
                <time className="text-gray-400 text-sm">1 day ago</time>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
