// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA3mzaReWfPixYTI0JWp7ql5Bet179S5k",
  authDomain: "jk-blogs.firebaseapp.com",
  projectId: "jk-blogs",
  storageBucket: "jk-blogs.firebasestorage.app",
  messagingSenderId: "239148219757",
  appId: "1:239148219757:web:d1340bbadbee52d42fee64",
  measurementId: "G-724RCKRZZY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app); // For Authentication
const provider = new firebase.auth.GoogleAuthProvider(); // For Google Login