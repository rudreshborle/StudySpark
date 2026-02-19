// Study Group Logic

// State
let selectedBranch = '';
let selectedYear = '';
let selectedSubject = '';

// DOM Elements
const branchSection = document.getElementById("branchSelection");
const yearSection = document.getElementById("yearSelection");
const subjectSection = document.getElementById("subjectSelection");
const groupOptions = document.getElementById("groupOptions");
const groupsList = document.getElementById("groups-list");
const availableGroupsSection = document.getElementById("available-groups");
const createGroupModal = document.getElementById("createGroupModal");

document.addEventListener("DOMContentLoaded", function () {
    // Navigation Listeners
    document.querySelectorAll(".branch-selection button").forEach(btn => {
        btn.addEventListener("click", () => {
            selectedBranch = btn.getAttribute("data-branch");
            branchSection.style.display = "none";
            yearSection.style.display = "block";
        });
    });

    document.querySelectorAll(".years button").forEach(btn => {
        btn.addEventListener("click", () => {
            selectedYear = btn.getAttribute("data-year");
            yearSection.style.display = "none";
            subjectSection.style.display = "block";
        });
    });

    document.querySelectorAll(".subjects button").forEach(btn => {
        btn.addEventListener("click", () => {
            selectedSubject = btn.getAttribute("data-subject");
            subjectSection.style.display = "none";
            groupOptions.style.display = "block";
            availableGroupsSection.style.display = "block";
            loadGroups(); // Load groups for this selection
        });
    });
});

// Modal Functions
window.showCreateGroupModal = function () {
    createGroupModal.style.display = "flex";
}

window.closeCreateGroupModal = function () {
    createGroupModal.style.display = "none";
}

// Firestore Functions
window.createGroup = function () {
    const name = document.getElementById("groupName").value.trim();
    const link = document.getElementById("groupLink").value.trim();

    if (!name || !link) return alert("Please fill in all fields");

    const user = auth.currentUser;
    if (!user) return alert("You must be logged in to create a group");

    db.collection("study-groups").add({
        name: name,
        link: link,
        branch: selectedBranch,
        year: selectedYear,
        subject: selectedSubject,
        createdBy: user.displayName || user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        members: [user.uid]
    })
        .then(() => {
            alert("Group created successfully!");
            closeCreateGroupModal();
            loadGroups(); // Refresh list
        })
        .catch(error => {
            console.error("Error creating group: ", error);
            alert("Failed to create group");
        });
}

window.loadGroups = function () {
    groupsList.innerHTML = "<p>Loading groups...</p>";

    db.collection("study-groups")
        .where("branch", "==", selectedBranch)
        .where("year", "==", selectedYear)
        .where("subject", "==", selectedSubject)
        .orderBy("createdAt", "desc")
        .get()
        .then((querySnapshot) => {
            groupsList.innerHTML = "";
            if (querySnapshot.empty) {
                groupsList.innerHTML = "<p>No groups found for this subject. Create one!</p>";
                return;
            }

            querySnapshot.forEach((doc) => {
                const group = doc.data();
                const card = document.createElement("div");
                card.className = "dashboard-card"; // Reuse dashboard card style
                card.innerHTML = `
                    <h3>${escapeHtml(group.name)}</h3>
                    <p>Created by: ${escapeHtml(group.createdBy)}</p>
                    <a href="${escapeHtml(group.link)}" target="_blank" class="btn">Join Meet</a>
                `;
                groupsList.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error loading groups: ", error);
            groupsList.innerHTML = "<p>Error loading groups.</p>";
        });
}

function escapeHtml(text) {
    if (!text) return text;
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
