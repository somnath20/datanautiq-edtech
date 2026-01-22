
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

