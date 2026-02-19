document.addEventListener("DOMContentLoaded", loadTasks);

function openTool(toolUrl) {
    window.location.href = toolUrl;
}

function addTask() {
    let input = document.getElementById("todoInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    createTaskElement(taskText, false);
    saveTasks();
    input.value = "";
}

function createTaskElement(text, completed) {
    let li = document.createElement("li");
    if (completed) li.classList.add("completed");

    li.innerHTML = `<span onclick="toggleComplete(this)">${text}</span>
                            <button onclick="removeTask(this)">❌</button>`;
    document.getElementById("todoList").appendChild(li);
}

function removeTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function toggleComplete(task) {
    task.parentElement.classList.toggle("completed");
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#todoList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("studySparkTasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("studySparkTasks")) || [];
    tasks.forEach(task => createTaskElement(task.text, task.completed));
}

