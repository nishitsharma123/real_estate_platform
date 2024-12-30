// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-4f87b.firebaseapp.com",
  projectId: "real-estate-4f87b",
  storageBucket: "real-estate-4f87b.firebasestorage.app",
  messagingSenderId: "478642625565",
  appId: "1:478642625565:web:7926da14e2e9bb02637af4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);