"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, User, LogOut, X } from "lucide-react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../lib/firebase";
import Link from "next/link";
import Image from "next/image";

interface top {
  id: number;
  Image: string;
  name: string;
}

const hospital: top[] = [
  {
    id: 1,
    name: "City Hospital",
    Image: "/hospital1.jpg",
  },
  {
    id: 2,
    name: "City Hospital",
    Image: "/hospital2.jpg",
  },
  {
    id: 3,
    name: "City Hospital",
    Image: "/hospital3.jpg",
  },
  {
    id: 4,
    name: "City Hospital",
    Image: "/hospital4.jpg",
  },
];
interface SidebarLink {
  name: string;
  href: string;
}

const sidebarLinks: SidebarLink[] = [
  { name: "Home", href: "#" },
  { name: "Hospitals", href: "#" },
  { name: "Doctors", href: "#" },
];

const Page = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to logout. Please try again.");
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track screen size for desktop vs mobile
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar automatically on desktop resize
  useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(false);
    }
  }, [isDesktop]);

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Close sidebar and dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setSidebarOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sidebarVisible = isDesktop || sidebarOpen;
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Overlay on mobile */}
      <AnimatePresence>
        {sidebarOpen && !isDesktop && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: sidebarVisible ? 0 : -280 }}
        transition={{ type: "spring", stiffness: 250, damping: 30 }}
        className="fixed top-0 left-0 z-20 w-64 bg-white  shadow-md h-screen p-6 flex flex-col overflow-y-auto md:relative"
      >
        <div className="text-2xl font-extrabold mb-8 text-blue-700">
          Kuje Health-care
        </div>
        <nav className="flex flex-col space-y-3 flex-1">
          {sidebarLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={() => {
                setActiveLink(name);
                setSidebarOpen(false);
              }}
              className={`block px-4 py-2 rounded-md font-medium transition-colors ${
                activeLink === name
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="text-xs text-gray-400 mt-auto">
          © 2025. All Rights Reserved
        </div>
      </motion.aside>

      {/* Content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-20 overflow-y-auto">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-3 sticky top-0 z-30">
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200"
            >
              <User className="h-6 w-6 text-gray-700" />
              <span className="font-medium text-gray-700">Profile</span>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md z-40"
                >
                  <button
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        {/* Page content */}
        <section className="bg-white dark:bg-gray-900 py-16 px-6 mt-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-700 mb-10">
              Top Hospitals
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {hospital.map((page) => (
                <div
                  key={page.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <Image src={page.Image} className="w-full h-52 object-cover" width={300} height={100} alt={page.Image}/>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {page.name}
                    </h3>
                    <Link href="/details">
                      <button className="bg-blue-700 w-[100px] p-2 mt-4 rounded text-white shadow-md cursor-pointer">
                        See More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
