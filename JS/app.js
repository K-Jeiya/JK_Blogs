// Login Function
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Logged in successfully!');
            window.location.href = '../HTML/index.html'; // Redirect to homepage
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Signup Function
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Account created successfully!');
            window.location.href = '../HTML/index.html'; // Redirect to homepage
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Google Authentication
document.getElementById('googleLogin').addEventListener('click', () => {
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Logged in with Google!');
            window.location.href = '../HTML/index.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Google Authentication for Signup Page
document.getElementById('googleSignup').addEventListener('click', () => {
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Signed up with Google!');
            window.location.href = '../HTML/index.html'; // Redirect to homepage
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Forgot Password
document.getElementById('forgotPassword').addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('Please enter your email:');

    if (email) {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    }
});