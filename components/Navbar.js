"use client";

import React, { useState, useEffect } from "react";
import { ModeToggle } from "./DarkMode";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { auth, provider, db } from "../lib/firebase-config";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // Track logged-in user
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        name: user.displayName,
        username: user.email.split("@")[0],
        bio: "",
        profilePhoto: user.photoURL || "/default-avatar.png",
      };

      // Write to Realtime Database
      const userRef = ref(db, "users/" + user.uid);
      await set(userRef, userData);

      // Navigate to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="blog-logo">
          <h1 className="dark:text-white text-xl font-bold logo-head">StudyBlog</h1>
        </div>

        <div className="md:hidden">
          <ModeToggle /> &nbsp; &nbsp; &nbsp;
          <button onClick={toggleMenu} className="text-black dark:text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4 nav-buttons">
          <span className="dark:text-white text-lg hover:underline">
            <Link href="/">Home</Link>
          </span>
          <span className="dark:text-white text-lg hover:underline">
            <Link href="/about">About</Link>
          </span>
          <span className="dark:text-white text-lg hover:underline">
            <Link href="/blog">Blog</Link>
          </span>
          <span className="dark:text-white text-lg hover:underline">
            <Link href="/contact">Contact</Link>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-4 registration-login">
          {user ? (
            <>
              <Button onClick={() => router.push("/dashboard")}>Profile</Button>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={handleGoogleLogin}>Login</Button>
          )}
          <ModeToggle />
        </div>
      </div>

      {isOpen && (
        <div>
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center space-y-4 options">
              <span className="dark:text-white text-lg hover:underline">
                <Link href="/">Home</Link>
              </span>
              <span className="dark:text-white text-lg hover:underline">
                <Link href="/about">About</Link>
              </span>
              <span className="dark:text-white text-lg hover:underline">
                <Link href="/blog">Blog</Link>
              </span>
              <span className="dark:text-white text-lg hover:underline">
                <Link href="/contact">Contact</Link>
              </span>
              {user ? (
                <>
                  <Button onClick={() => router.push("/dashboard")}>Profile</Button>
                  <Button onClick={handleLogout} variant="outline">
                    Logout
                  </Button>
                </>
              ) : (
                <Button onClick={handleGoogleLogin}>Login</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
