import {
  getAllTasks,
  loadFromLocal,
  removeFromLocal,
  saveToLocal,
  getTaskFromDB,
  updateStatus,
} from "./db";
import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from "./home";
import createElement, {
  createTask,
  convertDate,
  getTodayDate,
  tasksBoilerplate,
} from "./utility";

// Add new task to DOM
function addTaskToDOM(data) {
  const readableDate = convertDate(data.dueDate);
  const newTask = createTask(
    data.title,
    readableDate,
    data.priority,
    data.status,
    data.id
  );
  const taskContainer = document.querySelector(".tasks");

  taskContainer.appendChild(newTask);
}

function UpdateTaskOnDOM(data) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.id == data.id) {
      console.log("Updating DOM");
      if (data.title.length > 18) data.title = data.title.slice(0, 17) + "...";
      task.childNodes[1].textContent = data.title;
      const readableDate = convertDate(data.dueDate);
      task.childNodes[2].textContent = readableDate;
    }
  });
}

function extractFormData(form) {
  const title = form.title.value;
  const id = form.id.value;
  const desc = form.description.value;
  const dueDate = form.duedate.value;
  const priority = form.priority.value;
  return { title, desc, dueDate, priority, id };
}

function addData(event) {
  event.preventDefault();
  const data = extractFormData(event.target);
  data["status"] = false;

  const id = saveToLocal(data);
  const { title, dueDate, priority, status } = data;
  addTaskToDOM({ title, dueDate, priority, status, id });
}

function updateData(event) {
  event.preventDefault();
  const data = extractFormData(event.target);
  saveToLocal(data);
  document.querySelector(".close-edit").click();

  UpdateTaskOnDOM(data);
}

function removeTaskFromDOM(target) {
  const taskContainer = document.querySelector(".tasks");
  taskContainer.removeChild(target);
  removeFromLocal(target.id);
}

function loadTasks() {
  const taskContainer = document.querySelector(".tasks");
  taskContainer.innerHTML = "";
  const data = loadFromLocal();

  for (let d of data) {
    addTaskToDOM(d);
  }
}

function editTask(id) {
  const task = getTaskFromDB(id);
  const form = document.querySelector("div#id-modal-editTask form");
  form[0].value = id;
  form[1].value = task.title;
  form[2].value = task.desc;
  form[3].value = task.dueDate;
  form[4].value = task.priority;
}

function setupListeners() {
  const createTask = document.querySelector("div.tasks-toolbar > button");
  const editBtns = document.querySelectorAll(
    ".task > span > .bi-pencil-square"
  );
  const delBtns = document.querySelectorAll(".task > span > .bi-trash");
  const checkboxes = document.querySelectorAll(".task > input");
  const modal = document.querySelector("#id-modal-task");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const id = e.target.parentNode.id;
      const status = e.target.checked;
      updateStatus(id, status);
    });
  });

  editBtns.forEach((edit) =>
    edit.addEventListener("click", (e) => {
      modalEdit.style.display = "block";
      editTask(e.target.parentNode.parentNode.id);
    })
  );
  delBtns.forEach((del) =>
    del.addEventListener("click", (e) => {
      removeTaskFromDOM(e.target.parentNode.parentNode);
    })
  );

  createTask.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

function setupTodayScreen() {
  const content = document.querySelector(".content");
  content.style.opacity = 0;

  content.innerHTML = "";
  content.appendChild(tasksBoilerplate());

  const tasks = getAllTasks();
  const todayDate = getTodayDate();
  const todayTasks = tasks.filter((task) => task.dueDate == todayDate);
  todayTasks.map((task) => addTaskToDOM(task));
  content.style.opacity = 1;
  // addTaskToDOM(todayTasks);
}

function setupHome() {
  const content = document.querySelector(".content");
  content.style.opacity = 0;

  content.innerHTML = "";
  console.log("Setup");
  // Home section
  const section = createElement("section", ["home-container"]);
  section.append(createWelcomeDiv(), createButtonGroup(), createInsightsDiv());

  content.appendChild(section);
  content.style.opacity = 1;
}

// Initial Setup
function setupDOM() {
  setupHome();
  const modal = document.querySelector("#id-modal-task");
  const modalEdit = document.querySelector("#id-modal-editTask");

  // loadTasks();

  const close = document.querySelector(".close");
  const closeEdit = document.querySelector(".close-edit");

  const form = document.querySelector("div#id-modal-task form");
  const editForm = document.querySelector("div#id-modal-editTask form");

  const todayLink = document.querySelector(".today");
  const homeLink = document.querySelector(".home");

  todayLink.addEventListener("click", (e) => {
    e.preventDefault();
    setupTodayScreen();
    setupListeners();
  });

  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    setupHome();
  });

  form.addEventListener("submit", addData);
  editForm.addEventListener("submit", updateData);

  close.addEventListener("click", (e) => {
    modal.style.display = "none";
  });
  closeEdit.addEventListener("click", (e) => {
    modalEdit.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    } else if (e.target == modalEdit) {
      modalEdit.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", setupDOM);
