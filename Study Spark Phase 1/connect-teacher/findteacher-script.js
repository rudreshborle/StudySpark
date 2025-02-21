
            const teachers = Array.from({ length: 12 }, (_, i) => ({ name: `Teacher ${i + 1}`, status: i % 2 === 0 ? 'online' : 'offline' }));
            document.getElementById('teacher-list').innerHTML = teachers.map(t => `
                <div class="teacher-card">
                    <div class="status ${t.status}"></div>
                    <img src="teacher-placeholder.jpg" alt="${t.name}">
                    <h3>${t.name}</h3>
                    <button>Message</button>
                    <button>Book Appointment</button>
                </div>
            `).join('');
