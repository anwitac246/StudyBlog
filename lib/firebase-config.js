// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaPhDZ2A61AL28fPIF40meJrYtnXG2E-I",
  authDomain: "studyblog-9ff94.firebaseapp.com",
  databaseURL: "https://studyblog-9ff94-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "studyblog-9ff94",
  storageBucket: "studyblog-9ff94.firebasestorage.app",
  messagingSenderId: "483816626283",
  appId: "1:483816626283:web:6d4d26a9b2b7368328f92e",
  measurementId: "G-S1Q9YYX31L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

