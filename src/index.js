import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from "./home";
import createElement from "./htmlUtility";

function setupHome() {
  console.log("Setup");
  // Home section
  const section = createElement("section", ["home"]);
  section.append(createWelcomeDiv(), createButtonGroup(), createInsightsDiv());

  const container = document.querySelector(".container");
  container.appendChild(section);
}

// document.addEventListener("DOMContentLoaded", setupHome);
