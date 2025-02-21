// Purpose: Handle user sign-up using email and password or Google Sign-In
        // Import Firebase SDKs
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
        import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

        // Firebase Configuration
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
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);
        const provider = new GoogleAuthProvider();

        document.addEventListener("DOMContentLoaded", () => {
            // Handle Email Sign-up
            document.getElementById("signup-form").addEventListener("submit", async (e) => {
                e.preventDefault();
                const username = document.getElementById("username").value;
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                const confirmPassword = document.getElementById("confirmPassword").value;

                if (password !== confirmPassword) {
                    alert("Passwords do not match!");
                    return;
                }
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;
                    await setDoc(doc(db, "users", user.uid), {
                        username: username,
                        email: user.email
                    });
                    alert("Account created successfully!");
                    window.location.href = "dashboard.html";
                } catch (error) {
                    console.error("Sign-up error:", error);
                    alert(error.message);
                }
            });

            // Handle Google Sign-in
            document.getElementById("google-signup").addEventListener("click", async () => {
                try {
                    const result = await signInWithPopup(auth, provider);
                    const user = result.user;
                    await setDoc(doc(db, "users", user.uid), {
                        username: user.displayName,
                        email: user.email
                    }, { merge: true });
                    alert("Google Sign-In successful!");
                    window.location.href = "dashboard.html";
                } catch (error) {
                    console.error("Google Sign-in error:", error);
                    alert(error.message);
                }
            });
        });
