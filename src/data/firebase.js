// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "sellspage.firebaseapp.com",
  projectId: "sellspage",
  storageBucket: "sellspage.firebasestorage.app",
  messagingSenderId: "1013566035788",
  appId: "1:1013566035788:web:aa304b4bd87766447921e9",
  measurementId: "G-J1V4K22Q2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
