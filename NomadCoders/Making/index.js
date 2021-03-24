// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const pendingForm = document.querySelector(".pendingForm"),
  pendingInput = pendingForm.querySelector("input"),
  pendingList = document.querySelector(".pendingList");
  finishedList = document.querySelector(".finishedList")

let pendingList = [],
  finishedList = [];

function saveTask() {
  localStorage.setItem(PENDING, JSON.stringify(pending));
  localStorage.setItem(FINISHED, JSON.stringify(finished));
}

function addTask(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pending.length + 1;
  //
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  ne3wId.appendChild(li);
  const pendingObj = {
    text: text,
    id: newId
  };
  pending.push(pendingObj);
  saveTask();
}

//function loadToDos(){}

function init() {
  //loadToDos();
  taskForm.addEventListener("keypress", function handleSubmit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const currentValue = taskInput.value;
      addTask(currentValue);
      taskInput.value = "";
    }
  });
}

init();
