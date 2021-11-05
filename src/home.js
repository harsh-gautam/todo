import createElement from "./utility";

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

function createInsightsDiv() {
  // Insights div
  const todayCard = createCard("Today", "3 tasks pending");
  const weekCard = createCard("This Week", "12 tasks pending");

  const insightsDiv = createElement("div", ["insights"]);
  insightsDiv.append(todayCard, weekCard);

  return insightsDiv;
}

export { createWelcomeDiv, createInsightsDiv, createCard };
