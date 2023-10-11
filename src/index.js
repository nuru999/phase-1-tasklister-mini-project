document.addEventListener("DOMContentLoaded", () => {
  // your code here//
  const taskList = document.querySelector("#tasks");
  const taskForm = document.querySelector("#create-task-form");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const newTaskDescription = document.querySelector("#new-task-description").value;
    addNewTask(newTaskDescription);
    event.target.reset(); // Clear the form
});

function addNewTask(task) {
  const listItem = document.createElement("li");
  listItem.innerText = task;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
}
});