// Check Auth State
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User is logged in:", user.email);
        const welcomeEl = document.querySelector('.user-welcome');
        if (welcomeEl) {
            welcomeEl.textContent = `Welcome, ${user.displayName || user.email}`;
        }
    } else {
        console.log("User is not logged in, redirecting...");
        window.location.href = 'auth/login.html';
    }
});

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'homepage.html';
    }).catch((error) => {
        console.error("Logout failed: ", error);
    });
}
