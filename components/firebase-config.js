// Firebase Configuration
// Reads from window.FIREBASE_CONFIG which is set by the root firebase-config.js (gitignored).
// Make sure your HTML loads firebase-config.js BEFORE this file.
// Copy firebase-config.example.js → firebase-config.js and fill in your credentials.

if (!window.FIREBASE_CONFIG) {
    console.error("Firebase config not found! Did you create firebase-config.js from the example template?");
}

const firebaseConfig = window.FIREBASE_CONFIG;

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
