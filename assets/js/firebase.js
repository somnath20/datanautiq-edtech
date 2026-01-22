// assets/js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";

// 🔥 Your Firebase config (SAFE to be public)
const firebaseConfig = {
  apiKey: "AIzaSyA2Fgptok0ZzqJhbNrEl0a8j_rCou9-ULk",
  authDomain: "datanautiq.firebaseapp.com",
  projectId: "datanautiq",
  storageBucket: "datanautiq.firebasestorage.app",
  messagingSenderId: "214896542682",
  appId: "1:214896542682:web:dc54d4f52b8ad33175f6e3",
  measurementId: "G-PRBDSYJTZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
