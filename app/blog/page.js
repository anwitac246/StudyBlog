"use client";

import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/lib/firebase-config";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const defaultImage = "https://dummyimage.com/720x400";

  useEffect(() => {
    const blogsRef = ref(db, "blogs");
    onValue(blogsRef, (snapshot) => {
      if (snapshot.exists()) {
        const blogsData = [];
        snapshot.forEach((userSnapshot) => {
          const userId = userSnapshot.key;
          const userBlogs = userSnapshot.val();
          Object.keys(userBlogs).forEach((blogId) => {
            blogsData.push({ userId, blogId, ...userBlogs[blogId] });
          });
        });
        setBlogs(blogsData);
      } else {
        setBlogs([]);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.length > 0 ? (
              blogs.map((post) => (
                <div key={post.blogId} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                    {post.imageUrl && (
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={post.imageUrl || defaultImage}
                        alt={post.title || "Blog Image"}
                      />
                    )}

                    <div className="p-6">
                      <h1 className="title-font text-lg text-slate-900 font-bold dark:text-white mb-3">
                        {post.title || "Untitled"}
                      </h1>

                      <span className="text-gray-500 text-sm">
                        By {post.author || "Unknown Author"} |{" "}
                        {new Date(post.timestamp).toLocaleDateString()}
                      </span>

                      <p className="leading-relaxed mt-2 mb-3">
                        {post.description || "No description available."}
                      </p>
                      <Link href={`/blogpost/${post.userId}/${post.blogId}`}>
                        <Button className="flex items-center flex-wrap">
                          Read More
                        </Button>
                      </Link>

                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No blogs found!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
