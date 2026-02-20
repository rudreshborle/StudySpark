
// Firebase is initialized by firebase-config.js loaded in the HTML.
// auth and db are set as globals there via window.auth / window.db,
// or we read them from the already-initialized Firebase app.
const auth = firebase.auth();
const db = firebase.firestore();

// Login Function
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            fetchUserProfile(user.uid);
        })
        .catch((error) => {
            alert("Login Failed: " + error.message);
        });
});

// Fetch user profile from Firestore
function fetchUserProfile(uid) {
    db.collection('users').doc(uid).get().then((doc) => {
        if (doc.exists) {
            // Redirect to Dashboard after login
            window.location.href = "../dashboard.html";
        } else {
            // No profile yet — still redirect to dashboard
            window.location.href = "../dashboard.html";
        }
    }).catch((error) => {
        console.log("Error fetching user data: ", error);
    });
}
