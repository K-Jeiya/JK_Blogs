// app.js - Corrected Full Code
document.addEventListener('DOMContentLoaded', function() {
    // 1. Login with Email/Password
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                alert('Login successful!');
                window.location.href = '../HTML/index.html';
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    });

    // 2. Signup with Email/Password
    document.getElementById('signupForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert('Account created!');
                window.location.href = '../HTML/index.html';
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    });

    // 3. Google Authentication (Both Login/Signup)
    const handleGoogleAuth = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(() => {
                alert('Google login successful!');
                window.location.href = '../HTML/index.html';
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    };

    // Login Page Google Button
    document.getElementById('googleLogin')?.addEventListener('click', handleGoogleAuth);

    // Signup Page Google Button
    document.getElementById('googleSignup')?.addEventListener('click', handleGoogleAuth);

    // 4. Forgot Password
    document.getElementById('forgotPassword')?.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Enter your email:');
        
        if(email) {
            firebase.auth().sendPasswordResetEmail(email)
                .then(() => alert('Password reset email sent!'))
                .catch(error => alert('Error: ' + error.message));
        }
    });
});