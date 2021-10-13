import createElement from "./htmlUtility";

function createCard(title, subtext, classes = [], id = "") {
  const card = createElement("div", ["card", ...classes]);
  const cardTitle = createElement("h3", []);
  cardTitle.textContent = title;
  const cardSubtext = createElement("p", []);
  cardSubtext.textContent = subtext;
  card.append(cardTitle, cardSubtext);

  return card;
}

function createWelcomeDiv() {
  // welcome div
  const h1 = createElement("h1", []);
  h1.textContent = "Good Morning";

  const h2 = createElement("h2", []);
  h2.textContent = "Harsh Gautam";

  const welcomeDiv = createElement("div", ["welcome-text"]);
  welcomeDiv.append(h1, h2);

  return welcomeDiv;
}

function createButtonGroup() {
  const iTag = createElement("i", ["bi", "bi-plus-circle"]);

  //task button
  const btnTask = createElement("button", ["create-task"]);
  btnTask.append(iTag, "Task");

  //workspace button
  const btnWorkspace = createElement("button", ["create-workspace"]);
  btnWorkspace.append(iTag.cloneNode(), "Workspace");

  // buttons group
  const btnGroup = createElement("div", ["btn-group"]);
  btnGroup.append(btnTask, btnWorkspace);

  return btnGroup;
}

function createInsightsDiv() {
  // Insights div
  const todayCard = createCard("Today", "3 tasks pending");
  const weekCard = createCard("This Week", "12 tasks pending");
  const project1Card = createCard("Project 1", "21 tasks pending");
  const project2Card = createCard("Project 2", "13 tasks pending");

  const insightsDiv = createElement("div", ["insights"]);
  insightsDiv.append(todayCard, weekCard, project1Card, project2Card);

  return insightsDiv;
}

export { createWelcomeDiv, createButtonGroup, createInsightsDiv, createCard };
