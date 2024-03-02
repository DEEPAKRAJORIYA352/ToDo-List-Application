let newTask = document.getElementById("inp");
let taskBox = document.querySelector(".task-box");

function Add() {
  if (newTask.value == "") {
    alert("Please Enter task");
  } else {
    let newEle = document.createElement("li"); // <li> </li>
    newEle.innerHTML = `<span>${newTask.value}</span> <i class="fa-solid fa-trash"></i>`;

    taskBox.appendChild(newEle);
    newTask.value = "";

    storeTasks();
  }
}

newTask.addEventListener('keypress', (event) => {
  if(event.key === "Enter"){
    Add();
  }
});

taskBox.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    event.target.parentElement.remove();
    storeTasks();
  }
});

function storeTasks(){
    localStorage.setItem("tasks", taskBox.innerHTML);
}

function showTasks(){
    taskBox.innerHTML = localStorage.getItem("tasks");
}

showTasks();
