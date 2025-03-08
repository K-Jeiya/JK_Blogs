// app.js

// Initialize Firebase Auth and Provider HERE
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Set persistence
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => console.log("Persistence set!"))
  .catch((error) => console.error("Persistence error:", error));

document.addEventListener('DOMContentLoaded', function() {
  // Common redirect function
  const redirectToHome = () => window.location.href = '../index.html';

  // 1. Email Login
  document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
      .then(redirectToHome)
      .catch((error) => alert('Error: ' + error.message));
  });

  // 2. Email Signup
  document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(redirectToHome)
      .catch((error) => alert('Error: ' + error.message));
  });

  // 3. Google Auth Handler
  auth.signInWithPopup(googleProvider)
  .then((userCredential) => {
    console.log("User:", userCredential.user); // ✅ Debug line
    redirectToHome();
  })
  .catch((error) => {
    console.error("Error Code:", error.code);  // 🔍 Log error code
    alert(error.message);
  });

  // Attach Google handlers
  document.getElementById('googleLogin')?.addEventListener('click', handleGoogleAuth);
  document.getElementById('googleSignup')?.addEventListener('click', handleGoogleAuth);

  // 4. Forgot Password
  document.getElementById('forgotPassword')?.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('Enter your email:');
    if(email) {
      auth.sendPasswordResetEmail(email)
        .then(() => alert('Password reset email sent!'))
        .catch(error => alert('Error: ' + error.message));
    }
  });
});