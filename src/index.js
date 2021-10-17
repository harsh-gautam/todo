import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from "./home";
import createElement from "./htmlUtility";

function showModal() {
  const modal = document.querySelector("#id-modal-task");
  modal.style.display = "block";
}

const createTask = document.querySelector("div.tasks-toolbar > button");
createTask.addEventListener("click", showModal);

function setupHome() {
  console.log("Setup");
  // Home section
  const section = createElement("section", ["home"]);
  section.append(createWelcomeDiv(), createButtonGroup(), createInsightsDiv());

  const container = document.querySelector(".container");
  container.appendChild(section);
}

// document.addEventListener("DOMContentLoaded", setupHome);
