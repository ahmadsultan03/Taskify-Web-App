const taskList = document.getElementById("taskList");
const clearAllBtn = document.querySelector(".clear-all-btn");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please Enter a Task");
    return;
  }

  const listItem = document.createElement("li");

  // Create the task text span
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  // Mark as completed button
  const completeButton = document.createElement("button");
  completeButton.className = "complete-btn";
  completeButton.innerHTML = '<i class="fas fa-check icon"></i>';
  completeButton.title = "Mark as Completed";

  completeButton.onclick = function () {
    if (!listItem.classList.contains("completed")) {
      listItem.classList.add("completed");
      completeButton.innerHTML = '<i class="fas fa-undo icon"></i>';
      completeButton.title = "Mark as Incomplete";
    } else {
      listItem.classList.remove("completed");
      completeButton.innerHTML = '<i class="fas fa-check icon"></i>';
      completeButton.title = "Mark as Completed";
    }
  };

  // Individual delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.innerHTML = '<i class="fas fa-trash icon"></i>Delete';
  deleteButton.onclick = function () {
    listItem.remove();
    toggleClearButton();
  };

  // Update button
  const updateButton = document.createElement("button");
  updateButton.className = "update-btn";
  updateButton.innerHTML = '<i class="fas fa-edit icon"></i>Update';
  updateButton.onclick = function () {
    const newText = prompt("Edit your task:", textSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
      textSpan.textContent = newText.trim();
    }
  };

  // Append buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonContainer.appendChild(completeButton);
  buttonContainer.appendChild(updateButton);
  buttonContainer.appendChild(deleteButton);

  listItem.appendChild(textSpan);
  listItem.appendChild(buttonContainer);

  taskList.appendChild(listItem);

  taskInput.value = "";

  toggleClearButton();
}

// Clear all tasks
function clearAllTasks() {
  taskList.innerHTML = "";
  toggleClearButton();
}

function toggleClearButton() {
  clearAllBtn.style.display = taskList.children.length > 0 ? "inline-block" : "none";
}

// Initialize button visibility on page load
document.addEventListener("DOMContentLoaded", toggleClearButton);