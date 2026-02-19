// Study Resources Data & Logic

const studyData = {
    "Computer Engineering": {
        "1st Year": {
            "Mathematics": ["Previous Papers", "Lecture Notes", "Textbooks"],
            "Physics": ["Lab Manuals", "Theory Notes"],
            "Chemistry": ["Organic Chem Notes", "Periodic Table"],
            "Basic Electrical Engineering": ["Circuit Diagrams", "Formula Sheets"]
        },
        "2nd Year": {
            "Data Structures": ["Algorithms Cheat Sheet", "Code Examples"],
            "Digital Electronics": ["Logic Gate Diagrams"],
            "OOPS": ["Java/C++ Notes", "Design Patterns"],
            "Discrete Mathematics": ["Graph Theory Notes"]
        },
        "3rd Year": {
            "Operating Systems": ["Process Scheduling Notes"],
            "DBMS": ["SQL Queries", "Normalization Guide"],
            "Computer Networks": ["OSI Model Diagram"],
            "Software Engineering": ["SDLC Models"]
        },
        "4th Year": {
            "Machine Learning": ["Model Training Guide"],
            "Cyber Security": ["Ethical Hacking 101"],
            "Cloud Computing": ["AWS Basics"],
            "AI": ["Neural Networks Intro"]
        }
    },
    // Placeholder for other branches to prevent errors if clicked
    "Mechanical Engineering": {},
    "Electrical Engineering": {},
    "Civil Engineering": {}
};

function showYears(branch) {
    const container = document.getElementById('years-container');
    container.innerHTML = `<h3>${branch} - Select Your Year</h3>`;

    // Clear subsequent containers
    document.getElementById('subjects-container').innerHTML = '';
    document.getElementById('materials-container').innerHTML = '';

    ["1st Year", "2nd Year", "3rd Year", "4th Year"].forEach(year => {
        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerText = year;
        btn.onclick = () => showSubjects(branch, year);
        container.appendChild(btn);
    });
}

function showSubjects(branch, year) {
    const container = document.getElementById('subjects-container');
    container.innerHTML = `<h3>${branch} - ${year} Subjects</h3>`;

    document.getElementById('materials-container').innerHTML = '';

    const subjects = studyData[branch]?.[year] || {};
    const subjectList = Object.keys(subjects);

    if (subjectList.length === 0) {
        container.innerHTML += "<p>No subjects found for this selection.</p>";
        return;
    }

    subjectList.forEach(subject => {
        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerText = subject;
        btn.onclick = () => showMaterials(branch, year, subject);
        container.appendChild(btn);
    });
}

function showMaterials(branch, year, subject) {
    const container = document.getElementById('materials-container');
    container.innerHTML = `<h3>${subject} Materials</h3>`;

    const materials = studyData[branch][year][subject] || [];

    if (materials.length === 0) {
        container.innerHTML += "<p>No materials available yet.</p>";
        return;
    }

    materials.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h4>${item}</h4><p>Downloadable resources</p>`;
        // For now, simulate a download link or open a generic placeholder
        card.onclick = () => {
            alert(`Opening ${item} for ${subject}... (Placeholder: Implement real file links here)`);
            // real implementation: window.open(url, '_blank');
        };
        container.appendChild(card);
    });
}
