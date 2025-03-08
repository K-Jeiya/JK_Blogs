// firebase-config.js
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
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized!"); // Debug line

// Add after initialization
if (window.location.hostname === "localhost") {
  console.log("Localhost detected: Firebase auth OK");
} else {
  console.log("Production domain:", window.location.hostname);
}