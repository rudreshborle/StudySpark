
        const blogData = {
            scholarship: [
                { title: "Scholarship A", description: "Details about Scholarship A.", content: "Full information about Scholarship A, including eligibility, benefits, and application process." },
                { title: "Scholarship B", description: "Details about Scholarship B.", content: "Comprehensive guide on Scholarship B." }
            ],
            sports: [
                { title: "Upcoming Sports Events", description: "Check out the upcoming matches.", content: "Detailed schedule and highlights of upcoming sports events." },
                { title: "Training Tips", description: "Best ways to improve your fitness.", content: "Step-by-step guide to boost your athletic performance." }
            ],
            internships: [
                { title: "Internship Opportunities", description: "Best internships available for students.", content: "A guide to finding and applying for the best internship programs." },
                { title: "How to Land an Internship", description: "Steps to secure an internship.", content: "Tips on building a strong resume, writing a cover letter, and acing the interview." }
            ],
            exams: [
                { title: "Upcoming Exam Dates", description: "Important exam schedules.", content: "A comprehensive list of upcoming exams and registration details." }
            ],
            updates: [
                { title: "Campus Updates", description: "Latest news from the university.", content: "Recent updates on events, policies, and more." }
            ],
            clglist: [
                { title: "Top Colleges", description: "Updated list of best colleges.", content: "Ranking and details of top colleges for various courses." }
            ]
        };
        function showBlogs(section) {
            const blogsContainer = document.getElementById("blogs");
            blogsContainer.innerHTML = "";
            if (blogData[section]) {
                blogData[section].forEach(blog => {
                    const blogCard = document.createElement("div");
                    blogCard.classList.add("blog-card");
                    blogCard.innerHTML = `<h3>${blog.title}</h3><p>${blog.description}</p><div class='full-content'><p>${blog.content}</p></div>`;
                    blogCard.addEventListener("click", function() {
                        this.classList.toggle("expanded");
                    });
                    blogsContainer.appendChild(blogCard);
                });
            }
        }
