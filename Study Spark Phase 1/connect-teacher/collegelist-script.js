function redirectToTeachers(collegeName) {
    window.location.href = `findteachers.html?college=${encodeURIComponent(collegeName)}`;
}

function searchColleges() {
    let input = document.getElementById('search').value.toLowerCase();
    let cards = document.querySelectorAll('.college-card');
    cards.forEach(card => {
        if (card.textContent.toLowerCase().includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}