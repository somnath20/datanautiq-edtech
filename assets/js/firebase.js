// assets/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  // 🔴 your real config here
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
