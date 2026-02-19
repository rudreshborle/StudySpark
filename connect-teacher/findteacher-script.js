// Uses global 'db' from components/firebase-config.js
// No imports needed as we use the Compat SDK loaded in HTML

async function fetchAndDisplayTeachers() {
    const teacherList = document.getElementById("teacher-list");
    teacherList.innerHTML = "<p>Loading...</p>";

    try {
        const querySnapshot = await getDocs(collection(db, "teachers"));
        let teachers = [];

        querySnapshot.forEach((doc) => {
            teachers.push({ id: doc.id, ...doc.data() });
        });

        if (teachers.length === 0) {
            teacherList.innerHTML = "<p>No teachers available right now.</p>";
            return;
        }

        teacherList.innerHTML = teachers.map(t => `
                    <div class="teacher-card">
                        <h3>${t.name}</h3>
                        <p><strong>Subject:</strong> ${t.subject}</p>
                        <button onclick="showContact('${t.name}', '${t.email}', '${t.phone || "Not Available"}')">Contact</button>
                    </div>
                `).join('');
    } catch (error) {
        console.error("Error fetching teachers: ", error);
        teacherList.innerHTML = "<p>Error loading teachers. Please try again later.</p>";
    }
}

window.showContact = (name, email, phone) => {
    document.getElementById("contactName").innerText = name;
    document.getElementById("contactEmail").innerText = `Email: ${email}`;
    document.getElementById("contactPhone").innerText = `Phone: ${phone}`;
    document.getElementById("contactModal").style.display = "flex";
};

window.closeModal = () => {
    document.getElementById("contactModal").style.display = "none";
};

document.addEventListener("DOMContentLoaded", fetchAndDisplayTeachers);
