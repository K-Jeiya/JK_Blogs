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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// Set persistence
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);