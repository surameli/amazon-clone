// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Use getFirestore instead of app.firestore()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoscey7SkpyqQEEZYzrri2464cVDqubmo",
  authDomain: "clone-be8e9.firebaseapp.com",
  projectId: "clone-be8e9",
  storageBucket: "clone-be8e9.appspot.com",
  messagingSenderId: "241417289985",
  appId: "1:241417289985:web:5d258000594df220a19b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app); // Use getFirestore to initialize Firestore

// Export Firebase modules
export { auth, db };
