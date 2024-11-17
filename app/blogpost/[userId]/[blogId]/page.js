"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase-config";
import Navbar from "@/components/Navbar";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { userId, blogId } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId && blogId) {
      const blogRef = ref(db, `blogs/${userId}/${blogId}`);
      get(blogRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setBlog(snapshot.val());
          } else {
            setBlog(null);
          }
        })
        .catch((error) => console.error("Error fetching blog:", error))
        .finally(() => setLoading(false));
    }
  }, [userId, blogId]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  if (!blog) return <div className="text-center mt-20">Blog not found!</div>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-4xl font-bold mb-4">{blog.title || "Untitled"}</h1>
        <p className="text-lg text-gray-700 mb-6">{blog.description || "No description provided."}</p>
        <p className="text-gray-500 mb-4">
          By <span className="font-semibold">{blog.author || "Unknown Author"}</span> on{" "}
          {blog.timestamp ? new Date(blog.timestamp).toLocaleDateString() : "Unknown Date"}
        </p>
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{blog.content?.trim() || "No content available."}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
