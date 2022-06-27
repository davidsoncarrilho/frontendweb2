// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5fOGqF7ICdKgEVd0zJWdgVS1h82bLGds",
  authDomain: "miniblog-bbeb9.firebaseapp.com",
  projectId: "miniblog-bbeb9",
  storageBucket: "miniblog-bbeb9.appspot.com",
  messagingSenderId: "991143746420",
  appId: "1:991143746420:web:6e78ba470e7d8b314caa21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
