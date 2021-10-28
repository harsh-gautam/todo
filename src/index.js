import { loadFromLocal, removeFromLocal, saveToLocal } from "./db";
import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from "./home";
import createElement, { createTask, convertDate } from "./utility";

// Add new task to DOM
function addTaskToDOM(data) {
  const readableDate = convertDate(data.dueDate);
  const newTask = createTask(data.title, readableDate, data.priority, data.id);
  const taskContainer = document.querySelector(".tasks");

  taskContainer.appendChild(newTask);
}

function extractFormData(event) {
  event.preventDefault();
  const formData = event.target;
  const title = formData.title.value;
  const desc = formData.description.value;
  const dueDate = formData.duedate.value;
  const priority = formData.priority.value;

  id = saveToLocal({ title, desc, dueDate, priority });
  addTaskToDOM({ title, dueDate, priority, id });
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

// Initial Setup
function setupDOM() {
  const modal = document.querySelector("#id-modal-task");
  const modalEdit = document.querySelector("#id-modal-editTask");

  loadTasks();

  const createTask = document.querySelector("div.tasks-toolbar > button");
  const close = document.querySelector(".close");
  const closeEdit = document.querySelector(".close-edit");
  const editBtns = document.querySelectorAll(
    ".task > span > .bi-pencil-square"
  );
  const delBtns = document.querySelectorAll(".task > span > .bi-trash");

  editBtns.forEach((edit) =>
    edit.addEventListener("click", () => {
      modalEdit.style.display = "block";
    })
  );
  delBtns.forEach((del) =>
    del.addEventListener("click", (e) => {
      removeTaskFromDOM(e.target.parentNode.parentNode);
    })
  );

  const form = document.querySelector("div.modal-body > form");
  form.addEventListener("submit", extractFormData);

  createTask.addEventListener("click", () => {
    modal.style.display = "block";
  });

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

function setupHome() {
  console.log("Setup");
  // Home section
  const section = createElement("section", ["home"]);
  section.append(createWelcomeDiv(), createButtonGroup(), createInsightsDiv());

  const container = document.querySelector(".container");
  container.appendChild(section);
}

document.addEventListener("DOMContentLoaded", setupDOM);
