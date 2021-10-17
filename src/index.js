import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from "./home";
import { createElement, createTask, convertDate } from "./utility";

function addTaskToDOM(event) {
  event.preventDefault();
  const formData = event.target;
  const title = formData.title.value;
  const desc = formData.description.value;
  const dueDate = formData.duedate.value;
  const priority = formData.priority.value;

  // console.log({ title, desc, dueDate, priority });
  const readableDate = convertDate(dueDate);

  const newTask = createTask(title, readableDate, priority);
  const taskContainer = document.querySelector(".tasks-container");

  taskContainer.appendChild(newTask);
}

function setupDOM() {
  const modal = document.querySelector("#id-modal-task");
  const createTask = document.querySelector("div.tasks-toolbar > button");
  const close = document.querySelector("div.modal-header > span");
  const form = document.querySelector("div.modal-body > form");

  form.addEventListener("submit", addTaskToDOM);

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
