// assets/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA2Fgptok0ZzqJhbNrEl0a8j_rCou9-ULk",
    authDomain: "datanautiq.firebaseapp.com",
    projectId: "datanautiq",
    storageBucket: "datanautiq.firebasestorage.app",
    messagingSenderId: "214896542682",
    appId: "1:214896542682:web:dc54d4f52b8ad33175f6e3",
    measurementId: "G-PRBDSYJTZS"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
