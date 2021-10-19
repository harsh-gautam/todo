import { saveToLocal } from "./db";
import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from "./home";
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
function setupDOM() {
  const modal = document.querySelector("#id-modal-task");
  const createTask = document.querySelector("div.tasks-toolbar > button");
  const close = document.querySelector("div.modal-header > span");
  const form = document.querySelector("div.modal-body > form");

  form.addEventListener("submit", extractFormData);

  createTask.addEventListener("click", () => {
    modal.style.display = "block";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
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
