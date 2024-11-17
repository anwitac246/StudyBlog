"use client"
import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../lib/firebase-config"; 
const Profile = () => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;
      setUser(loggedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!user ? (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      ) : (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      )}
    </div>
  );
};

export default Profile;
