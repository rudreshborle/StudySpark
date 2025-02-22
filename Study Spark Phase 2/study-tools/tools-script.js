
        function openTool(toolUrl) {
            window.location.href = toolUrl;
        }

        function addTask() {
            let input = document.getElementById("todoInput");
            let taskText = input.value.trim();
            if (taskText === "") return;
            let li = document.createElement("li");
            li.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span>
                            <button onclick="removeTask(this)">❌</button>`;
            document.getElementById("todoList").appendChild(li);
            input.value = "";
        }
        function removeTask(button) {
            button.parentElement.remove();
        }
        function toggleComplete(task) {
            task.parentElement.classList.toggle("completed");
        }

