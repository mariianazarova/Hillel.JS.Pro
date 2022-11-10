window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listEl = document.querySelector('#tasks');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Please fill out the task");
            return;
        }
        const taskEl = document.createElement("div");
        taskEl.classList.add("task");
        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");
        taskEl.appendChild(taskContentEl);
        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");
        taskContentEl.appendChild(taskInputEl);

        const taskActionsEl = document.createElement("div");
        taskActionsEl.classList.add("actions");
        const taskDeleteEl = document.createElement("button");
        taskDeleteEl.classList.add("delete");
        taskDeleteEl.innerHTML = "Delete";
        taskActionsEl.appendChild(taskDeleteEl);
        taskEl.appendChild(taskActionsEl);
        listEl.appendChild(taskEl);
        input.value = "";

        taskDeleteEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        });
    });
});