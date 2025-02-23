
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDqYydmWOGMy0pwSBCHcyI19rqBdu4H5-I",
            authDomain: "student-innovation-c1428.firebaseapp.com",
            projectId: "student-innovation-c1428",
            storageBucket: "student-innovation-c1428.appspot.com",
            messagingSenderId: "848651583026",
            appId: "1:848651583026:web:472c042fe45924d9fc462b",
            measurementId: "G-15QEJW0K3Y"
        };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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
            const userData = doc.data();
            onUserLogin({
                name: userData.name,
                profilePic: userData.profilePic || 'default-profile.png'
            });
            // Redirect to Home Page after login
            window.location.href = "home.html";
        } else {
            console.log("No user data found!");
        }
    }).catch((error) => {
        console.log("Error fetching user data: ", error);
    });
}
