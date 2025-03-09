const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .catch(error => console.error("Persistence error:", error));

const handleGoogleAuth = () => {
  auth.signInWithPopup(googleProvider)
    .then(() => {
      if (window.location.pathname.includes('login') || 
          window.location.pathname.includes('signup')) {
        window.location.href = '/index.html';
      }
    })
    .catch((error) => {
      const errorMap = {
        'auth/popup-closed-by-user': 'Popup closed before authentication',
        'auth/cancelled-popup-request': 'Multiple popup attempts detected',
        'auth/popup-blocked': 'Please allow popups for this site'
      };
      alert(errorMap[error.code] || `Google Auth Error: ${error.message}`);
    });
};

const handleLogout = () => {
  auth.signOut()
    .then(() => window.location.href = '/index.html')
    .catch(error => alert(`Logout failed: ${error.message}`));
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.logout-btn')) {
      e.preventDefault();
      handleLogout();
    }
  });

  document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => window.location.href = '/index.html')
      .catch(error => alert(`Error: ${error.message}`));
  });

  document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    
    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => window.location.href = '/index.html')
      .catch(error => alert(`Error: ${error.message}`));
  });

  document.getElementById('googleLogin')?.addEventListener('click', handleGoogleAuth);
  document.getElementById('googleSignup')?.addEventListener('click', handleGoogleAuth);

  document.getElementById('forgotPassword')?.addEventListener('click', (e) => {
    e.preventDefault();
    const email = prompt('Enter your email:');
    email && auth.sendPasswordResetEmail(email)
      .then(() => alert('Password reset email sent!'))
      .catch(error => alert(`Error: ${error.message}`));
  });
});

auth.onAuthStateChanged(user => {
  const authLinks = document.getElementById('authLinks');
  const logoutLink = document.getElementById('logoutLink');
  
  if (user) {
    authLinks?.classList.add('d-none');
    logoutLink?.classList.remove('d-none');
  } else {
    authLinks?.classList.remove('d-none');
    logoutLink?.classList.add('d-none');
  }
});