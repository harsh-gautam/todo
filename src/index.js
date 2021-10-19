import { saveToLocal } from "./db";
import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from "./home";
<<<<<<< HEAD
import createElement from "./utility";

=======
import createElement, {createTask, convertDate } from "./utility";

// Add new task to DOM
function addTaskToDOM(data) {
  const readableDate = convertDate(data.dueDate);
  const newTask = createTask(data.title, readableDate, data.priority);
  const taskContainer = document.querySelector(".tasks-container");

  taskContainer.appendChild(newTask);
}

function extractFormData(event) {
  event.preventDefault();
  const formData = event.target;
  const title = formData.title.value;
  const desc = formData.description.value;
  const dueDate = formData.duedate.value;
  const priority = formData.priority.value;

  saveToLocal({ title, desc, dueDate, priority });
  addTaskToDOM({ title, dueDate, priority });
}

// Initial Setup
>>>>>>> feature/create-task
function setupDOM() {
  const modal = document.querySelector("#id-modal-task");
  const createTask = document.querySelector("div.tasks-toolbar > button");
  const close = document.querySelector("div.modal-header > span");
<<<<<<< HEAD
  console.log(close);
=======
  const form = document.querySelector("div.modal-body > form");

  form.addEventListener("submit", extractFormData);
>>>>>>> feature/create-task

  createTask.addEventListener("click", () => {
    modal.style.display = "block";
  });

  close.addEventListener("click", () => {
<<<<<<< HEAD
    console.log("clicked");
=======
>>>>>>> feature/create-task
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
<<<<<<< HEAD
    console.log("window clicked");
=======
>>>>>>> feature/create-task
    if (e.target == modal) {
      modal.style.display = "none";
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
