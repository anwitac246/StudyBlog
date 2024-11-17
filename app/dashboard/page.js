"use client";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get, set } from "firebase/database";
import { auth, db } from "../../lib/firebase-config"; 
import Navbar from "@/components/Navbar";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    bio: "",
    profilePhoto: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserProfile(currentUser.uid);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserProfile = async (userId) => {
    const userRef = ref(db, "users/" + userId);
    try {
      const userSnap = await get(userRef);
      if (userSnap.exists()) {
        setProfile(userSnap.val());
      } else {
        setProfile({
          name: user.displayName || "",
          username: user.email.split("@")[0],
          bio: "",
          profilePhoto: user.photoURL || "/default-avatar.png",
        });
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveProfile = async () => {
    const userRef = ref(db, "users/" + user.uid);
    await set(userRef, profile);
    setIsEditing(false);
  };

  const handleAddBlog = async () => {
    if (!blogTitle.trim() || !blogDescription.trim() || !blogContent.trim()) {
      alert("Title, description, and content are required!");
      return;
    }
    const blogId = Date.now();
    const blogRef = ref(db, `blogs/${user.uid}/${blogId}`);
    await set(blogRef, {
      title: blogTitle,
      description: blogDescription,
      content: blogContent,
      author: profile.name || "Anonymous",
      profilePhoto: profile.profilePhoto || "/default-avatar.png",
      username: profile.username || "unknown",
      timestamp: Date.now(),
    });

    setBlogTitle("");
    setBlogDescription("");
    setBlogContent("");

    alert("Blog added successfully!");
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl shadow-lg mt-12">
        <h1 className="text-3xl font-bold text-center mb-8">Your Dashboard</h1>

        {user && (
          <div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium">Profile</h3>
              <div className="mt-4">
                <img
                  src={profile.profilePhoto || "/default-avatar.png"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
                />
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      name="username"
                      value={profile.username}
                      onChange={handleInputChange}
                      className="border px-2 rounded-md w-full mb-4"
                      placeholder="Username"
                    />
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md bg-transparent text-slate-900 dark:text-white border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Write something about yourself..."
                      rows="4"
                    />
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-semibold">{profile.username || "No username set"}</h2>
                    <p className="mt-2 text-gray-600">{profile.bio || "No bio available"}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                {isEditing ? (
                  <Button
                    onClick={handleSaveProfile}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                  >
                    Save Changes
                  </Button>
                ) : (
                  <Button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 transition"
                  >
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>

           
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Add a Blog</h2>

              
              <input
                type="text"
                className="w-full p-2 border rounded-md my-2"
                placeholder="Blog Title"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />

             
              <textarea
                className="w-full p-2 border rounded-md my-2"
                placeholder="Blog Description"
                rows="3"
                value={blogDescription}
                onChange={(e) => setBlogDescription(e.target.value)}
              />

              
              <MdEditor
                style={{ height: "500px" }}
                renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
                onChange={({ text }) => setBlogContent(text)}
                value={blogContent}
              />

              <Button
                onClick={handleAddBlog}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Publish Blog
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
