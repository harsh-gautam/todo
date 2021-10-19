/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

<<<<<<< HEAD
/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {
=======
/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveToLocal": () => (/* binding */ saveToLocal)
/* harmony export */ });
function saveToLocal(data) {
  // @params: data object
  // @output: id
  console.log("Saving data...");
  const id = generateId();
  data.id = id;
  console.log(data);

  if (id === 1) {
    localStorage.setItem("tasks", JSON.stringify([data]));
  } else {
    let prev = JSON.parse(localStorage.getItem("tasks"));
    prev.push(data);
    localStorage.setItem("tasks", JSON.stringify(prev));
  }
}

function generateId() {
  let data = JSON.parse(localStorage.getItem("tasks"));
  if (data !== null) {
    return data.slice(-1)[0].id + 1;
  }
  return 1;
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWelcomeDiv": () => (/* binding */ createWelcomeDiv),
/* harmony export */   "createButtonGroup": () => (/* binding */ createButtonGroup),
/* harmony export */   "createInsightsDiv": () => (/* binding */ createInsightsDiv),
/* harmony export */   "createCard": () => (/* binding */ createCard)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


function createCard(title, subtext, classes = [], id = "") {
  const card = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["card", ...classes]);
  const cardTitle = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", []);
  cardTitle.textContent = title;
  const cardSubtext = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("p", []);
  cardSubtext.textContent = subtext;
  card.append(cardTitle, cardSubtext);

  return card;
}

function createWelcomeDiv() {
  // welcome div
  const h1 = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", []);
  h1.textContent = "Good Morning";

  const h2 = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", []);
  h2.textContent = "Harsh Gautam";

  const welcomeDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["welcome-text"]);
  welcomeDiv.append(h1, h2);

  return welcomeDiv;
}

function createButtonGroup() {
  const iTag = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("i", ["bi", "bi-plus-circle"]);

  //task button
  const btnTask = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("button", ["create-task"]);
  btnTask.append(iTag, "Task");

  //workspace button
  const btnWorkspace = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("button", ["create-workspace"]);
  btnWorkspace.append(iTag.cloneNode(), "Workspace");

  // buttons group
  const btnGroup = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["btn-group"]);
  btnGroup.append(btnTask, btnWorkspace);

  return btnGroup;
}

function createInsightsDiv() {
  // Insights div
  const todayCard = createCard("Today", "3 tasks pending");
  const weekCard = createCard("This Week", "12 tasks pending");
  const project1Card = createCard("Project 1", "21 tasks pending");
  const project2Card = createCard("Project 2", "13 tasks pending");

  const insightsDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["insights"]);
  insightsDiv.append(todayCard, weekCard, project1Card, project2Card);

  return insightsDiv;
}




/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "convertDate": () => (/* binding */ convertDate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createElement(type, classes = [], id = "") {
  const element = document.createElement(type);
  for (let cls of classes) {
    element.classList.add(cls);
  }
  if (id !== undefined || id !== "" || id !== null) {
    element.id = id;
  }
  return element;
}

function createTask(title, dueDate, pr) {
  // checkbox
  const checkbox = createElement("input", [], "task-complete");
  checkbox.name = "task-complete";
  checkbox.type = "checkbox";

  // title
  const titleElem = createElement("p", ["task-heading"]);

  if (title.length > 18) title = title.slice(0, 17) + "...";
  titleElem.textContent = title;

  // time stamp
  const timeElem = createElement("p", ["time-stamp"]);
  timeElem.textContent = dueDate;

  // edit button
  const editElem = createElement("span");
  const iEdit = createElement("i", ["bi", "bi-pencil-square"]);
  editElem.appendChild(iEdit);

  //delete button
  const delElem = createElement("span");
  const iDel = createElement("i", ["bi", "bi-trash"]);
  delElem.appendChild(iDel);

  const wrapper = createElement("div", ["task"]);
  wrapper.dataset.priority = pr;
  wrapper.append(checkbox, titleElem, timeElem, editElem, delElem);

  return wrapper;
}

function convertDate(date) {
  // date : yyyy-mm-dd, eg-> 2021-10-24
  // output: 24th Oct

  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let [year, month, day] = date.split("-");
  month = months[month - 1].slice(0, 3);

  if (day.slice(-1) == "1") {
    day = day + "st";
  } else if (day.slice(-1) == "2") {
    day = day + "nd";
  } else if (day.slice(-1) == "3") {
    day = day + "rd";
  } else {
    day = day + "th";
  }
  return `${day} ${month}`;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);
>>>>>>> backup

throw new Error("Module parse failed: Unexpected token (3:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| import { saveToLocal } from \"./db\";\n| import { createButtonGroup, createWelcomeDiv, createInsightsDiv } from \"./home\";\n> <<<<<<< HEAD\n| import createElement from \"./utility\";\n| ");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
<<<<<<< HEAD
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZG9lc24ndCB0ZWxsIGFib3V0IGl0J3MgdG9wLWxldmVsIGRlY2xhcmF0aW9ucyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luZGV4LmpzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
=======
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./src/db.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility */ "./src/utility.js");




// Add new task to DOM
function addTaskToDOM(data) {
  const readableDate = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.convertDate)(data.dueDate);
  const newTask = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.createTask)(data.title, readableDate, data.priority);
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

  (0,_db__WEBPACK_IMPORTED_MODULE_0__.saveToLocal)({ title, desc, dueDate, priority });
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
  const section = (0,_utility__WEBPACK_IMPORTED_MODULE_2__["default"])("section", ["home"]);
  section.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.createWelcomeDiv)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__.createButtonGroup)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__.createInsightsDiv)());

  const container = document.querySelector(".container");
  container.appendChild(section);
}

document.addEventListener("DOMContentLoaded", setupDOM);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTs7QUFFdEM7QUFDQSxlQUFlLG9EQUFhO0FBQzVCLG9CQUFvQixvREFBYTtBQUNqQztBQUNBLHNCQUFzQixvREFBYTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsb0RBQWE7QUFDMUI7O0FBRUEsYUFBYSxvREFBYTtBQUMxQjs7QUFFQSxxQkFBcUIsb0RBQWE7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsb0RBQWE7O0FBRTVCO0FBQ0Esa0JBQWtCLG9EQUFhO0FBQy9COztBQUVBO0FBQ0EsdUJBQXVCLG9EQUFhO0FBQ3BDOztBQUVBO0FBQ0EsbUJBQW1CLG9EQUFhO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixvREFBYTtBQUNuQzs7QUFFQTtBQUNBOztBQUU4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRDlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLFlBQVksS0FBSyxFQUFFLE1BQU07QUFDekI7O0FBRW1DO0FBQ25DLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQy9FN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQzZDO0FBQ2Q7O0FBRWxFO0FBQ0E7QUFDQSx1QkFBdUIscURBQVc7QUFDbEMsa0JBQWtCLG9EQUFVO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxnREFBVyxHQUFHLGdDQUFnQztBQUNoRCxpQkFBaUIsMEJBQTBCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQWE7QUFDL0IsaUJBQWlCLHVEQUFnQixJQUFJLHdEQUFpQixJQUFJLHdEQUFpQjs7QUFFM0U7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNhdmVUb0xvY2FsKGRhdGEpIHtcbiAgLy8gQHBhcmFtczogZGF0YSBvYmplY3RcbiAgLy8gQG91dHB1dDogaWRcbiAgY29uc29sZS5sb2coXCJTYXZpbmcgZGF0YS4uLlwiKTtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUlkKCk7XG4gIGRhdGEuaWQgPSBpZDtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgaWYgKGlkID09PSAxKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShbZGF0YV0pKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcHJldiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gICAgcHJldi5wdXNoKGRhdGEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkocHJldikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG4gIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZGF0YS5zbGljZSgtMSlbMF0uaWQgKyAxO1xuICB9XG4gIHJldHVybiAxO1xufVxuXG5leHBvcnQgeyBzYXZlVG9Mb2NhbCB9O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHRpdGxlLCBzdWJ0ZXh0LCBjbGFzc2VzID0gW10sIGlkID0gXCJcIikge1xuICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjYXJkXCIsIC4uLmNsYXNzZXNdKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gY3JlYXRlRWxlbWVudChcImgzXCIsIFtdKTtcbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGNvbnN0IGNhcmRTdWJ0ZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgW10pO1xuICBjYXJkU3VidGV4dC50ZXh0Q29udGVudCA9IHN1YnRleHQ7XG4gIGNhcmQuYXBwZW5kKGNhcmRUaXRsZSwgY2FyZFN1YnRleHQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lRGl2KCkge1xuICAvLyB3ZWxjb21lIGRpdlxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBbXSk7XG4gIGgxLnRleHRDb250ZW50ID0gXCJHb29kIE1vcm5pbmdcIjtcblxuICBjb25zdCBoMiA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbXSk7XG4gIGgyLnRleHRDb250ZW50ID0gXCJIYXJzaCBHYXV0YW1cIjtcblxuICBjb25zdCB3ZWxjb21lRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3ZWxjb21lLXRleHRcIl0pO1xuICB3ZWxjb21lRGl2LmFwcGVuZChoMSwgaDIpO1xuXG4gIHJldHVybiB3ZWxjb21lRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Hcm91cCgpIHtcbiAgY29uc3QgaVRhZyA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktcGx1cy1jaXJjbGVcIl0pO1xuXG4gIC8vdGFzayBidXR0b25cbiAgY29uc3QgYnRuVGFzayA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY3JlYXRlLXRhc2tcIl0pO1xuICBidG5UYXNrLmFwcGVuZChpVGFnLCBcIlRhc2tcIik7XG5cbiAgLy93b3Jrc3BhY2UgYnV0dG9uXG4gIGNvbnN0IGJ0bldvcmtzcGFjZSA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY3JlYXRlLXdvcmtzcGFjZVwiXSk7XG4gIGJ0bldvcmtzcGFjZS5hcHBlbmQoaVRhZy5jbG9uZU5vZGUoKSwgXCJXb3Jrc3BhY2VcIik7XG5cbiAgLy8gYnV0dG9ucyBncm91cFxuICBjb25zdCBidG5Hcm91cCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYnRuLWdyb3VwXCJdKTtcbiAgYnRuR3JvdXAuYXBwZW5kKGJ0blRhc2ssIGJ0bldvcmtzcGFjZSk7XG5cbiAgcmV0dXJuIGJ0bkdyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnNpZ2h0c0RpdigpIHtcbiAgLy8gSW5zaWdodHMgZGl2XG4gIGNvbnN0IHRvZGF5Q2FyZCA9IGNyZWF0ZUNhcmQoXCJUb2RheVwiLCBcIjMgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3Qgd2Vla0NhcmQgPSBjcmVhdGVDYXJkKFwiVGhpcyBXZWVrXCIsIFwiMTIgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3QgcHJvamVjdDFDYXJkID0gY3JlYXRlQ2FyZChcIlByb2plY3QgMVwiLCBcIjIxIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHByb2plY3QyQ2FyZCA9IGNyZWF0ZUNhcmQoXCJQcm9qZWN0IDJcIiwgXCIxMyB0YXNrcyBwZW5kaW5nXCIpO1xuXG4gIGNvbnN0IGluc2lnaHRzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJpbnNpZ2h0c1wiXSk7XG4gIGluc2lnaHRzRGl2LmFwcGVuZCh0b2RheUNhcmQsIHdlZWtDYXJkLCBwcm9qZWN0MUNhcmQsIHByb2plY3QyQ2FyZCk7XG5cbiAgcmV0dXJuIGluc2lnaHRzRGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVXZWxjb21lRGl2LCBjcmVhdGVCdXR0b25Hcm91cCwgY3JlYXRlSW5zaWdodHNEaXYsIGNyZWF0ZUNhcmQgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NlcyA9IFtdLCBpZCA9IFwiXCIpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAobGV0IGNscyBvZiBjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIH1cbiAgaWYgKGlkICE9PSB1bmRlZmluZWQgfHwgaWQgIT09IFwiXCIgfHwgaWQgIT09IG51bGwpIHtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIHByKSB7XG4gIC8vIGNoZWNrYm94XG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtdLCBcInRhc2stY29tcGxldGVcIik7XG4gIGNoZWNrYm94Lm5hbWUgPSBcInRhc2stY29tcGxldGVcIjtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAvLyB0aXRsZVxuICBjb25zdCB0aXRsZUVsZW0gPSBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0YXNrLWhlYWRpbmdcIl0pO1xuXG4gIGlmICh0aXRsZS5sZW5ndGggPiAxOCkgdGl0bGUgPSB0aXRsZS5zbGljZSgwLCAxNykgKyBcIi4uLlwiO1xuICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAvLyB0aW1lIHN0YW1wXG4gIGNvbnN0IHRpbWVFbGVtID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1widGltZS1zdGFtcFwiXSk7XG4gIHRpbWVFbGVtLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICAvLyBlZGl0IGJ1dHRvblxuICBjb25zdCBlZGl0RWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBpRWRpdCA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktcGVuY2lsLXNxdWFyZVwiXSk7XG4gIGVkaXRFbGVtLmFwcGVuZENoaWxkKGlFZGl0KTtcblxuICAvL2RlbGV0ZSBidXR0b25cbiAgY29uc3QgZGVsRWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBpRGVsID0gY3JlYXRlRWxlbWVudChcImlcIiwgW1wiYmlcIiwgXCJiaS10cmFzaFwiXSk7XG4gIGRlbEVsZW0uYXBwZW5kQ2hpbGQoaURlbCk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFza1wiXSk7XG4gIHdyYXBwZXIuZGF0YXNldC5wcmlvcml0eSA9IHByO1xuICB3cmFwcGVyLmFwcGVuZChjaGVja2JveCwgdGl0bGVFbGVtLCB0aW1lRWxlbSwgZWRpdEVsZW0sIGRlbEVsZW0pO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGF0ZShkYXRlKSB7XG4gIC8vIGRhdGUgOiB5eXl5LW1tLWRkLCBlZy0+IDIwMjEtMTAtMjRcbiAgLy8gb3V0cHV0OiAyNHRoIE9jdFxuXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF07XG5cbiAgbGV0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICBtb250aCA9IG1vbnRoc1ttb250aCAtIDFdLnNsaWNlKDAsIDMpO1xuXG4gIGlmIChkYXkuc2xpY2UoLTEpID09IFwiMVwiKSB7XG4gICAgZGF5ID0gZGF5ICsgXCJzdFwiO1xuICB9IGVsc2UgaWYgKGRheS5zbGljZSgtMSkgPT0gXCIyXCIpIHtcbiAgICBkYXkgPSBkYXkgKyBcIm5kXCI7XG4gIH0gZWxzZSBpZiAoZGF5LnNsaWNlKC0xKSA9PSBcIjNcIikge1xuICAgIGRheSA9IGRheSArIFwicmRcIjtcbiAgfSBlbHNlIHtcbiAgICBkYXkgPSBkYXkgKyBcInRoXCI7XG4gIH1cbiAgcmV0dXJuIGAke2RheX0gJHttb250aH1gO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjb252ZXJ0RGF0ZSB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2F2ZVRvTG9jYWwgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uR3JvdXAsIGNyZWF0ZVdlbGNvbWVEaXYsIGNyZWF0ZUluc2lnaHRzRGl2IH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQsIHtjcmVhdGVUYXNrLCBjb252ZXJ0RGF0ZSB9IGZyb20gXCIuL3V0aWxpdHlcIjtcblxuLy8gQWRkIG5ldyB0YXNrIHRvIERPTVxuZnVuY3Rpb24gYWRkVGFza1RvRE9NKGRhdGEpIHtcbiAgY29uc3QgcmVhZGFibGVEYXRlID0gY29udmVydERhdGUoZGF0YS5kdWVEYXRlKTtcbiAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soZGF0YS50aXRsZSwgcmVhZGFibGVEYXRlLCBkYXRhLnByaW9yaXR5KTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RGb3JtRGF0YShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBmb3JtRGF0YSA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS50aXRsZS52YWx1ZTtcbiAgY29uc3QgZGVzYyA9IGZvcm1EYXRhLmRlc2NyaXB0aW9uLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZm9ybURhdGEuZHVlZGF0ZS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmb3JtRGF0YS5wcmlvcml0eS52YWx1ZTtcblxuICBzYXZlVG9Mb2NhbCh7IHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSB9KTtcbiAgYWRkVGFza1RvRE9NKHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5IH0pO1xufVxuXG4vLyBJbml0aWFsIFNldHVwXG5mdW5jdGlvbiBzZXR1cERPTSgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lkLW1vZGFsLXRhc2tcIik7XG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnRhc2tzLXRvb2xiYXIgPiBidXR0b25cIik7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2RhbC1oZWFkZXIgPiBzcGFuXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tb2RhbC1ib2R5ID4gZm9ybVwiKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXh0cmFjdEZvcm1EYXRhKTtcblxuICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSk7XG5cbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cEhvbWUoKSB7XG4gIGNvbnNvbGUubG9nKFwiU2V0dXBcIik7XG4gIC8vIEhvbWUgc2VjdGlvblxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW1wiaG9tZVwiXSk7XG4gIHNlY3Rpb24uYXBwZW5kKGNyZWF0ZVdlbGNvbWVEaXYoKSwgY3JlYXRlQnV0dG9uR3JvdXAoKSwgY3JlYXRlSW5zaWdodHNEaXYoKSk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc2V0dXBET00pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> backup
