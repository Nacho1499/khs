"use client";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import Link from "next/link";
import { toast } from "sonner";

import { useState, FormEvent } from "react";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });
      toast.success("Account created successfully!");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch {
      toast.error("Signup failed ");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-indigo-900 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold  text-center mb-2">
          Create an account
        </h1>
        <p className="text-center mb-6">create an accout to login</p>
        <form onSubmit={handleSignup} className="space-y-4 ">
           <input
            type="text"
            placeholder="Enter username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          already have an account?{" "}
          <Link href="/login" className="text-blue-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
