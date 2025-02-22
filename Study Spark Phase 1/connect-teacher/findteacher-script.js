
const teachers = [
{ name: 'Rajesh Kumar', status: 'online', email: 'rajesh.kumar@example.com', phone: '+91 9876543210', image: 'images/teacher1.jpg' },
{ name: 'Anita Sharma', status: 'offline', email: 'anita.sharma@example.com', phone: '+91 9123456789', image: 'images/teacher2.jpg' },
{ name: 'Vikram Patel', status: 'online', email: 'vikram.patel@example.com', phone: '+91 8765432109', image: 'images/teacher3.jpg' },
{ name: 'Pooja Singh', status: 'online', email: 'pooja.singh@example.com', phone: '+91 9988776655', image: 'images/teacher4.jpg' },
{ name: 'Suresh Iyer', status: 'offline', email: 'suresh.iyer@example.com', phone: '+91 9090909090', image: 'images/teacher5.jpg' }
];


const teacherList = document.getElementById('teacher-list');

function displayTeachers(data) {
teacherList.innerHTML = data.map(t => `
<div class="teacher-card">
    <div class="status ${t.status}"></div>
    <img src="${t.image}" alt="${t.name}">
    <h3>${t.name}</h3>
    <button onclick="showContact('${t.name}', '${t.email}', '${t.phone}')">Contact</button>
</div>
`).join('');
}

function showContact(name, email, phone) {
    document.getElementById('contactName').textContent = name;
    document.getElementById('contactEmail').textContent = `Email: ${email}`;
    document.getElementById('contactPhone').textContent = `Phone: ${phone}`;
    document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

displayTeachers(teachers);
