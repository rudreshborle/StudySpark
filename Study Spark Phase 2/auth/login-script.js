
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
        const app = firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.firestore();

        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
            const googleLoginButton = document.getElementById('google-login');

            loginForm.addEventListener('submit', handleLoginFormSubmit);
            googleLoginButton.addEventListener('click', handleGoogleLogin);

            auth.onAuthStateChanged(handleAuthStateChange);
        });

        function handleLoginFormSubmit(e) {
            e.preventDefault();
            const email = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Login successful!");
                    window.location.href = "dashboard.html"; // Redirect to dashboard
                })
                .catch((error) => {
                    alert(error.message);
                });
        }

        function handleGoogleLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
                .then((result) => {
                    const user = result.user;
                    alert(`Welcome, ${user.displayName}`);
                    window.location.href = "dashboard.html"; // Redirect to dashboard
                })
                .catch((error) => {
                    alert(error.message);
                });
        }

        function handleAuthStateChange(user) {
            if (user) {
                window.location.href = "dashboard.html"; // Redirect if logged in
            }
        }
