"use client";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import Link from "next/link";
import { toast } from "sonner";
import { useState, FormEvent } from "react";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch {
      toast.error("Invalid email or password. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
      style={{ backgroundImage: "url('/login.jpg')" }} // ⬅ Replace with your image path
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-50 z-10 bg-black/60"></div>

      {/* Form content */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md bg-white/10 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-white mb-2">Welcome Back</h1>
        <p className="text-center text-white mb-6">Login to your account</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-800 to-indigo-900 hover:bg-blue-700 text-white"
            }`}
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-700 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
