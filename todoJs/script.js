let inputText = document.getElementById("input-text");
let addTaskBtn = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");

let tasks = [];

addTaskBtn.addEventListener("click", () => {
  let inputValue = inputText.value.trim();

  if (inputValue == "") return;

  let taskObj = {
    id: Date.now(),
    name: inputValue,
    status: false,
  };

  tasks.push(taskObj);

  console.log(tasks);
});
