import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCib-i4J_QGKHLaXnHrWmZ6AkaHBUo5POE",
    authDomain: "social-web-cccfa.firebaseapp.com",
    projectId: "social-web-cccfa",
    storageBucket: "social-web-cccfa.appspot.com",
    messagingSenderId: "360386421681",
    appId: "1:360386421681:web:c47d5617fd8bbcf3ce5390",
    measurementId: "G-6LZRXMJLTQ"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  