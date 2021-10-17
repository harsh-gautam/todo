import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from "./home";
import createElement, { createTask } from "./utility";

function addTaskToDOM() {
  const newTask = createTask("Prepare for infosys", "24 Oct", "high");
  const taskContainer = document.querySelector(".tasks-container");

  taskContainer.appendChild(newTask);
}

function setupDOM() {
  const modal = document.querySelector("#id-modal-task");
  const createTask = document.querySelector("div.tasks-toolbar > button");
  const close = document.querySelector("div.modal-header > span");
  const addTask = document.querySelector("div.modal-body > button");

  addTask.addEventListener("click", addTaskToDOM);

  createTask.addEventListener("click", () => {
    modal.style.display = "block";
  });

  close.addEventListener("click", () => {
    console.log("clicked");
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    console.log("window clicked");
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
