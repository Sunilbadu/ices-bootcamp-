const btn = document.getElementById("btn")
const text = document.getElementById("texts")
function addTask() {
    
    const tasks = document.createElement("p")
    tasks.className = "task"
    tasks.textContent = text.value
    document.getElementById("tasks").appendChild(tasks)
    text.value = ""
}
    
btn.onclick = addTask;
text.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
})