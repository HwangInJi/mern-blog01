// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog01.firebaseapp.com",
  projectId: "mern-blog01",
  storageBucket: "mern-blog01.appspot.com",
  messagingSenderId: "641388914045",
  appId: "1:641388914045:web:a17a4ffb1fb76429fdd814",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
