// Initialize Firebase
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', function() {
    // Common function for redirect
    const redirectToHome = () => {
        // Use absolute path for GitHub Pages
        window.location.href = '/index.html'; 
    };

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

    // 3. Google Auth
    const handleGoogleAuth = () => {
        auth.signInWithPopup(googleProvider)
            .then(redirectToHome)
            .catch((error) => alert('Error: ' + error.message));
    };

    // Attach handlers
    document.getElementById('googleLogin')?.addEventListener('click', handleGoogleAuth);
    document.getElementById('googleSignup')?.addEventListener('click', handleGoogleAuth);

    // 4. Forgot Password
    document.getElementById('forgotPassword')?.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Enter your email:');
        if(email) auth.sendPasswordResetEmail(email)
            .then(() => alert('Password reset email sent!'))
            .catch(error => alert('Error: ' + error.message));
    });
});