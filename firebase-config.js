// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqaBl0kvgw2Ln3b_U1-B9JvRIjQZc0Z34",
  authDomain: "project-8905284055049500533.firebaseapp.com",
  projectId: "project-8905284055049500533",
  storageBucket: "project-8905284055049500533.firebasestorage.app",
  messagingSenderId: "1076323991393",
  appId: "1:1076323991393:web:3c00dde110548ddd63cf20",
  measurementId: "G-8BTSCRC6FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
