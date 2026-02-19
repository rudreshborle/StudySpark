// Firebase Configuration
// Extracted from dashboard.html to be shared across the app

const firebaseConfig = {
    apiKey: "AIzaSyDqYydmWOGMy0pwSBCHcyI19rqBdu4H5-I",
    authDomain: "student-innovation-c1428.firebaseapp.com",
    projectId: "student-innovation-c1428",
    storageBucket: "student-innovation-c1428.appspot.com",
    messagingSenderId: "848651583026",
    appId: "1:848651583026:web:472c042fe45924d9fc462b",
    measurementId: "G-15QEJW0K3Y"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const db = firebase.firestore();

// Export for module usage if using modules, but for now we are using global script tags
// So we just leave them on the window/global scope or just let them be defined consts
// which might not be accessible if this script is defer loaded/module.
// Given the current setup (Global Script Tags), these variables (auth, db) will be global
// IF this script is loaded simply via <script src="...">.
// To be safe and cleaner, let's attach them to window or just rely on them being top-level.
