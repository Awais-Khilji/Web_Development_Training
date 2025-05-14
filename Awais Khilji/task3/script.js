
let editingTask = null;

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    if (editingTask) {
        editingTask.querySelector(".task-text").textContent = taskText;
        editingTask = null;
    } else {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = taskText;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editTask(li);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => li.remove();

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        document.getElementById("taskList").appendChild(li);
    }

    input.value = "";
}

function editTask(taskItem) {
    const text = taskItem.querySelector(".task-text").textContent;
    document.getElementById("taskInput").value = text;
    editingTask = taskItem;
}
