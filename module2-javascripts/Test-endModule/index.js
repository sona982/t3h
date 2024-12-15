
// Global variables
const authSection = document.getElementById("auth-section");
const todoSection = document.getElementById("todo-section");
const authTitle = document.getElementById("auth-title");
const authButton = document.getElementById("auth-button");
const toggleAuthLink = document.getElementById("toggle-auth-link");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

let isRegisterMode = false;

// User data from local storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Toggle between login and register
toggleAuthLink.addEventListener("click", () => {
  isRegisterMode = !isRegisterMode;
  authTitle.textContent = isRegisterMode ? "Register" : "Login";
  authButton.textContent = isRegisterMode ? "Register" : "Login";
  toggleAuthLink.textContent = isRegisterMode
    ? "Already have an account? Login here"
    : "Don't have an account? Register here";
});

// Handle authentication (login/register)
authButton.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  if (isRegisterMode) {
    // Registration logic
    if (users.some(user => user.email === email)) {
      alert("This email is already registered.");
      return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful. Please log in.");
    isRegisterMode = false;
    toggleAuthLink.click();
  } else {
    // Login logic
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      alert(`Welcome back, ${email}!`);
      authSection.style.display = "none";
      todoSection.style.display = "block";
    } else {
      alert("Invalid email or password.");
    }
  }
});

// To-Do App logic (reuse code from previous implementation)
const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const filterButtons = {
  all: document.getElementById("filter-all"),
  active: document.getElementById("filter-active"),
  complete: document.getElementById("filter-complete"),
};
const clearAllButton = document.getElementById("clear-all");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks
    .filter(task => {
      if (filter === "active") return !task.completed;
      if (filter === "complete") return task.completed;
      return true;
    })
    .forEach(task => {
      const li = document.createElement("li");
      li.classList.toggle("completed", task.completed);

      li.innerHTML = `
        <span>${task.text}</span>
        <div>
          <button onclick="toggleTask(${task.id})">✔</button>
          <button onclick="deleteTask(${task.id})">✖</button>
        </div>
      `;
      taskList.appendChild(li);
    });
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return alert("Task cannot be empty!");
  tasks.push({ id: Date.now(), text, completed: false });
  taskInput.value = "";
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

addTaskButton.addEventListener("click", addTask);
clearAllButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all tasks?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
});

filterButtons.all.addEventListener("click", () => {
  filter = "all";
  renderTasks();
});

filterButtons.active.addEventListener("click", () => {
  filter = "active";
  renderTasks();
});

filterButtons.complete.addEventListener("click", () => {
  filter = "complete";
  renderTasks();
});

renderTasks();
