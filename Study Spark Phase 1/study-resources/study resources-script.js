
        function showYears(branch) {
            const container = document.getElementById('years-container');
            container.innerHTML = `<h3>${branch} - Select Your Year</h3>`;
            ["1st Year", "2nd Year", "3rd Year", "4th Year"].forEach(year => {
                const btn = document.createElement('button');
                btn.classList.add('button');
                btn.innerText = year;
                btn.onclick = () => showSubjects(branch, year);
                container.appendChild(btn);
            });
        }

        const subjects = {
            "1st Year": ["Mathematics", "Physics", "Chemistry", "Basic Electrical Engineering"],
            "2nd Year": ["Data Structures", "Digital Electronics", "OOPS", "Discrete Mathematics"],
            "3rd Year": ["Operating Systems", "DBMS", "Computer Networks", "Software Engineering"],
            "4th Year": ["Machine Learning", "Cyber Security", "Cloud Computing", "AI"]
        };

        function showSubjects(branch, year) {
            const container = document.getElementById('subjects-container');
            container.innerHTML = `<h3>${branch} - ${year} Subjects</h3>`;
            subjects[year].forEach(subject => {
                const btn = document.createElement('button');
                btn.classList.add('button');
                btn.innerText = subject;
                btn.onclick = () => showMaterials(subject);
                container.appendChild(btn);
            });
        }

        function showMaterials(subject) {
            const container = document.getElementById('materials-container');
            container.innerHTML = `<h3>${subject} Materials</h3>`;
            const materials = ["Previous Papers", "Study Material", "Lecture Notes", "Reference Books"];
            materials.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `<h4>${item}</h4><p>Resources for ${subject}</p>`;
                card.onclick = () => showPDFs(subject, item);
                container.appendChild(card);
            });
        }

        function showPDFs(subject, type) {
            const container = document.getElementById('materials-container');
            container.innerHTML = `<h3>${subject} - ${type}</h3>`;
            const pdfs = ["Paper 1", "Paper 2", "Paper 3"];
            pdfs.forEach(pdf => {
                const link = document.createElement('a');
                link.href = `pdfs/${subject.toLowerCase().replace(/ /g, '_')}_${pdf.toLowerCase().replace(/ /g, '_')}.pdf`;
                link.innerText = pdf;
                link.classList.add('button');
                link.target = "_blank";
                container.appendChild(link);
                container.appendChild(document.createElement('br'));
            });
        }
