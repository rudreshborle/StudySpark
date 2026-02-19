// Q&A Functionality with Firestore

const questionInput = document.getElementById('questionInput');
const questionsList = document.getElementById('questions-list');

// Listen for questions
document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
});

function submitQuestion() {
    const text = questionInput.value.trim();
    if (!text) return alert("Please type a question!");

    const user = auth.currentUser;
    if (!user) return alert("You must be logged in to ask a question!");

    db.collection("questions").add({
        text: text,
        author: user.displayName || user.email,
        authorId: user.uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(() => {
            alert("Question submitted!");
            questionInput.value = "";
            // Reload or wait for Snapshot listener? 
            // We'll use snapshot listener in loadQuestions so it updates auto.
        })
        .catch((error) => {
            console.error("Error adding question: ", error);
            alert("Failed to submit question.");
        });
}

function loadQuestions() {
    // Real-time listener
    db.collection("questions").orderBy("timestamp", "desc").limit(20)
        .onSnapshot((snapshot) => {
            questionsList.innerHTML = "";
            snapshot.forEach((doc) => {
                const q = doc.data();
                const div = document.createElement("div");
                div.className = "question-card"; // Need to ensure styles exist or add inline
                div.style.background = "var(--surface)";
                div.style.padding = "15px";
                div.style.marginBottom = "10px";
                div.style.borderRadius = "8px";
                div.style.border = "1px solid var(--border)";

                div.innerHTML = `
                    <p style="font-size: 1.1em; margin-bottom: 5px;">${escapeHtml(q.text)}</p>
                    <small style="color: var(--muted);">Asked by ${escapeHtml(q.author || 'Anonymous')}</small>
                `;
                questionsList.appendChild(div);
            });
            if (snapshot.empty) {
                questionsList.innerHTML = "<p>No questions yet. Be the first to ask!</p>";
            }
        });
}

// Simple XSS protection
function escapeHtml(text) {
    if (!text) return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function toggleDarkMode() {
    // This function is now likely redundant if layout.js handles it, 
    // but kept for backward compatibility if button onclicks still reference it.
    // However, the global header toggle uses its own logic in layout.js.
    // If there is a local button calling this, we might want to update it.
    // But since we replaced the header, the local toggle button is gone.
    // We can remove this or leave it as a no-op / helper.
    document.body.classList.toggle('light-mode');
    // note: global.css uses .light-mode now, not .dark-mode, based on my previous edit step.
}
