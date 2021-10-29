/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveToLocal": () => (/* binding */ saveToLocal),
/* harmony export */   "loadFromLocal": () => (/* binding */ loadFromLocal),
/* harmony export */   "removeFromLocal": () => (/* binding */ removeFromLocal),
/* harmony export */   "getTaskFromDB": () => (/* binding */ getTaskFromDB)
/* harmony export */ });
function saveToLocal(data) {
  // @params: data object
  // @output: id
  console.log("Saving data...");
  const savedData = JSON.parse(localStorage.getItem("tasks"));
  const id = generateId();
  if (savedData != null || savedData != undefined) {
    // If data already exists update it
    let dataToUpdate = savedData.filter((d) => d.id == data.id)[0];
    if (dataToUpdate != null || dataToUpdate != undefined) {
      console.log("Updating data...");
      const newData = savedData.map((d) => {
        if ((d.id = data.id)) {
          d = data;
        }
        return d;
      });
      localStorage.setItem("tasks", JSON.stringify(newData));
      return;
    } else {
      data.id = id;

      if (savedData != null || savedData != undefined) {
        savedData.push(data);
        localStorage.setItem("tasks", JSON.stringify(savedData));
      }
    }
  } else {
    data.id = id;
    localStorage.setItem("tasks", JSON.stringify([data]));
  }
  return id;
}

function generateId() {
  let data = JSON.parse(localStorage.getItem("tasks"));
  if (data !== null) {
    return data.slice(-1)[0].id + 1;
  }
  return 1;
}

function loadFromLocal() {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (data != null || data != undefined) {
    return data;
  } else {
    return [];
  }
}

function removeFromLocal(id) {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (data !== null || data !== undefined) {
    const newData = data.filter((item) => item.id != id);
    // console.log(newData);
    localStorage.setItem("tasks", JSON.stringify(newData));
  }
}

function getTaskFromDB(id) {
  const data = JSON.parse(localStorage.getItem("tasks"));
  return data.filter((d) => d.id == id)[0];
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

function createTask(title, dueDate, pr, id) {
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
  wrapper.id = id;
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
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
  const newTask = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.createTask)(data.title, readableDate, data.priority, data.id);
  const taskContainer = document.querySelector(".tasks");

  taskContainer.appendChild(newTask);
}

function UpdateTaskOnDOM(data) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    if (task.id == data.id) {
      console.log("Updating DOM");
      if (data.title.length > 18) data.title = data.title.slice(0, 17) + "...";
      task.childNodes[1].textContent = data.title;
      const readableDate = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.convertDate)(data.dueDate);
      task.childNodes[2].textContent = readableDate;
    }
  });
}

function extractFormData(form) {
  const title = form.title.value;
  const id = form.id.value;
  const desc = form.description.value;
  const dueDate = form.duedate.value;
  const priority = form.priority.value;
  return { title, desc, dueDate, priority, id };
}

function addData(event) {
  event.preventDefault();
  const data = extractFormData(event.target);

  const id = (0,_db__WEBPACK_IMPORTED_MODULE_0__.saveToLocal)(data);
  const { title, dueDate, priority } = data;
  addTaskToDOM({ title, dueDate, priority, id });
}

function updateData(event) {
  event.preventDefault();
  const data = extractFormData(event.target);
  (0,_db__WEBPACK_IMPORTED_MODULE_0__.saveToLocal)(data);
  document.querySelector(".close-edit").click();

  UpdateTaskOnDOM(data);
}

function removeTaskFromDOM(target) {
  const taskContainer = document.querySelector(".tasks");
  taskContainer.removeChild(target);
  (0,_db__WEBPACK_IMPORTED_MODULE_0__.removeFromLocal)(target.id);
}

function loadTasks() {
  const taskContainer = document.querySelector(".tasks");
  taskContainer.innerHTML = "";
  const data = (0,_db__WEBPACK_IMPORTED_MODULE_0__.loadFromLocal)();

  for (let d of data) {
    addTaskToDOM(d);
  }
}

function editTask(id) {
  const task = (0,_db__WEBPACK_IMPORTED_MODULE_0__.getTaskFromDB)(id);
  const form = document.querySelector("div#id-modal-editTask form");
  form[0].value = id;
  form[1].value = task.title;
  form[2].value = task.desc;
  form[3].value = task.dueDate;
  form[4].value = task.priority;
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
  const form = document.querySelector("div#id-modal-task form");
  const editForm = document.querySelector("div#id-modal-editTask form");

  editBtns.forEach((edit) =>
    edit.addEventListener("click", (e) => {
      modalEdit.style.display = "block";
      editTask(e.target.parentNode.parentNode.id);
    })
  );
  delBtns.forEach((del) =>
    del.addEventListener("click", (e) => {
      removeTaskFromDOM(e.target.parentNode.parentNode);
    })
  );

  form.addEventListener("submit", addData);
  editForm.addEventListener("submit", updateData);

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
  const section = (0,_utility__WEBPACK_IMPORTED_MODULE_2__["default"])("section", ["home"]);
  section.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.createWelcomeDiv)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__.createButtonGroup)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__.createInsightsDiv)());

  const container = document.querySelector(".container");
  container.appendChild(section);
}

document.addEventListener("DOMContentLoaded", setupDOM);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBZTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtEQUFhOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQWE7QUFDL0IsaUJBQWlCLHVEQUFnQixJQUFJLHdEQUFpQixJQUFJLHdEQUFpQjs7QUFFM0U7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNhdmVUb0xvY2FsKGRhdGEpIHtcbiAgLy8gQHBhcmFtczogZGF0YSBvYmplY3RcbiAgLy8gQG91dHB1dDogaWRcbiAgY29uc29sZS5sb2coXCJTYXZpbmcgZGF0YS4uLlwiKTtcbiAgY29uc3Qgc2F2ZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUlkKCk7XG4gIGlmIChzYXZlZERhdGEgIT0gbnVsbCB8fCBzYXZlZERhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSWYgZGF0YSBhbHJlYWR5IGV4aXN0cyB1cGRhdGUgaXRcbiAgICBsZXQgZGF0YVRvVXBkYXRlID0gc2F2ZWREYXRhLmZpbHRlcigoZCkgPT4gZC5pZCA9PSBkYXRhLmlkKVswXTtcbiAgICBpZiAoZGF0YVRvVXBkYXRlICE9IG51bGwgfHwgZGF0YVRvVXBkYXRlICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBkYXRhLi4uXCIpO1xuICAgICAgY29uc3QgbmV3RGF0YSA9IHNhdmVkRGF0YS5tYXAoKGQpID0+IHtcbiAgICAgICAgaWYgKChkLmlkID0gZGF0YS5pZCkpIHtcbiAgICAgICAgICBkID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuaWQgPSBpZDtcblxuICAgICAgaWYgKHNhdmVkRGF0YSAhPSBudWxsIHx8IHNhdmVkRGF0YSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2F2ZWREYXRhLnB1c2goZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWREYXRhKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRhdGEuaWQgPSBpZDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KFtkYXRhXSkpO1xuICB9XG4gIHJldHVybiBpZDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcbiAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBkYXRhLnNsaWNlKC0xKVswXS5pZCArIDE7XG4gIH1cbiAgcmV0dXJuIDE7XG59XG5cbmZ1bmN0aW9uIGxvYWRGcm9tTG9jYWwoKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBpZiAoZGF0YSAhPSBudWxsIHx8IGRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21Mb2NhbChpZCkge1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgaWYgKGRhdGEgIT09IG51bGwgfHwgZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IGlkKTtcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdEYXRhKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrRnJvbURCKGlkKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICByZXR1cm4gZGF0YS5maWx0ZXIoKGQpID0+IGQuaWQgPT0gaWQpWzBdO1xufVxuXG5leHBvcnQgeyBzYXZlVG9Mb2NhbCwgbG9hZEZyb21Mb2NhbCwgcmVtb3ZlRnJvbUxvY2FsLCBnZXRUYXNrRnJvbURCIH07XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQodGl0bGUsIHN1YnRleHQsIGNsYXNzZXMgPSBbXSwgaWQgPSBcIlwiKSB7XG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNhcmRcIiwgLi4uY2xhc3Nlc10pO1xuICBjb25zdCBjYXJkVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDNcIiwgW10pO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY29uc3QgY2FyZFN1YnRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBbXSk7XG4gIGNhcmRTdWJ0ZXh0LnRleHRDb250ZW50ID0gc3VidGV4dDtcbiAgY2FyZC5hcHBlbmQoY2FyZFRpdGxlLCBjYXJkU3VidGV4dCk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlbGNvbWVEaXYoKSB7XG4gIC8vIHdlbGNvbWUgZGl2XG4gIGNvbnN0IGgxID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFtdKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkdvb2QgTW9ybmluZ1wiO1xuXG4gIGNvbnN0IGgyID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFtdKTtcbiAgaDIudGV4dENvbnRlbnQgPSBcIkhhcnNoIEdhdXRhbVwiO1xuXG4gIGNvbnN0IHdlbGNvbWVEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIndlbGNvbWUtdGV4dFwiXSk7XG4gIHdlbGNvbWVEaXYuYXBwZW5kKGgxLCBoMik7XG5cbiAgcmV0dXJuIHdlbGNvbWVEaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkdyb3VwKCkge1xuICBjb25zdCBpVGFnID0gY3JlYXRlRWxlbWVudChcImlcIiwgW1wiYmlcIiwgXCJiaS1wbHVzLWNpcmNsZVwiXSk7XG5cbiAgLy90YXNrIGJ1dHRvblxuICBjb25zdCBidG5UYXNrID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJjcmVhdGUtdGFza1wiXSk7XG4gIGJ0blRhc2suYXBwZW5kKGlUYWcsIFwiVGFza1wiKTtcblxuICAvL3dvcmtzcGFjZSBidXR0b25cbiAgY29uc3QgYnRuV29ya3NwYWNlID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJjcmVhdGUtd29ya3NwYWNlXCJdKTtcbiAgYnRuV29ya3NwYWNlLmFwcGVuZChpVGFnLmNsb25lTm9kZSgpLCBcIldvcmtzcGFjZVwiKTtcblxuICAvLyBidXR0b25zIGdyb3VwXG4gIGNvbnN0IGJ0bkdyb3VwID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJidG4tZ3JvdXBcIl0pO1xuICBidG5Hcm91cC5hcHBlbmQoYnRuVGFzaywgYnRuV29ya3NwYWNlKTtcblxuICByZXR1cm4gYnRuR3JvdXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluc2lnaHRzRGl2KCkge1xuICAvLyBJbnNpZ2h0cyBkaXZcbiAgY29uc3QgdG9kYXlDYXJkID0gY3JlYXRlQ2FyZChcIlRvZGF5XCIsIFwiMyB0YXNrcyBwZW5kaW5nXCIpO1xuICBjb25zdCB3ZWVrQ2FyZCA9IGNyZWF0ZUNhcmQoXCJUaGlzIFdlZWtcIiwgXCIxMiB0YXNrcyBwZW5kaW5nXCIpO1xuICBjb25zdCBwcm9qZWN0MUNhcmQgPSBjcmVhdGVDYXJkKFwiUHJvamVjdCAxXCIsIFwiMjEgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3QgcHJvamVjdDJDYXJkID0gY3JlYXRlQ2FyZChcIlByb2plY3QgMlwiLCBcIjEzIHRhc2tzIHBlbmRpbmdcIik7XG5cbiAgY29uc3QgaW5zaWdodHNEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImluc2lnaHRzXCJdKTtcbiAgaW5zaWdodHNEaXYuYXBwZW5kKHRvZGF5Q2FyZCwgd2Vla0NhcmQsIHByb2plY3QxQ2FyZCwgcHJvamVjdDJDYXJkKTtcblxuICByZXR1cm4gaW5zaWdodHNEaXY7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVdlbGNvbWVEaXYsIGNyZWF0ZUJ1dHRvbkdyb3VwLCBjcmVhdGVJbnNpZ2h0c0RpdiwgY3JlYXRlQ2FyZCB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjbGFzc2VzID0gW10sIGlkID0gXCJcIikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZm9yIChsZXQgY2xzIG9mIGNsYXNzZXMpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgfVxuICBpZiAoaWQgIT09IHVuZGVmaW5lZCB8fCBpZCAhPT0gXCJcIiB8fCBpZCAhPT0gbnVsbCkge1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHIsIGlkKSB7XG4gIC8vIGNoZWNrYm94XG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtdLCBcInRhc2stY29tcGxldGVcIik7XG4gIGNoZWNrYm94Lm5hbWUgPSBcInRhc2stY29tcGxldGVcIjtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAvLyB0aXRsZVxuICBjb25zdCB0aXRsZUVsZW0gPSBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0YXNrLWhlYWRpbmdcIl0pO1xuXG4gIGlmICh0aXRsZS5sZW5ndGggPiAxOCkgdGl0bGUgPSB0aXRsZS5zbGljZSgwLCAxNykgKyBcIi4uLlwiO1xuICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAvLyB0aW1lIHN0YW1wXG4gIGNvbnN0IHRpbWVFbGVtID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1widGltZS1zdGFtcFwiXSk7XG4gIHRpbWVFbGVtLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICAvLyBlZGl0IGJ1dHRvblxuICBjb25zdCBlZGl0RWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBpRWRpdCA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktcGVuY2lsLXNxdWFyZVwiXSk7XG4gIGVkaXRFbGVtLmFwcGVuZENoaWxkKGlFZGl0KTtcblxuICAvL2RlbGV0ZSBidXR0b25cbiAgY29uc3QgZGVsRWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBpRGVsID0gY3JlYXRlRWxlbWVudChcImlcIiwgW1wiYmlcIiwgXCJiaS10cmFzaFwiXSk7XG4gIGRlbEVsZW0uYXBwZW5kQ2hpbGQoaURlbCk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFza1wiXSk7XG4gIHdyYXBwZXIuZGF0YXNldC5wcmlvcml0eSA9IHByO1xuICB3cmFwcGVyLmlkID0gaWQ7XG4gIHdyYXBwZXIuYXBwZW5kKGNoZWNrYm94LCB0aXRsZUVsZW0sIHRpbWVFbGVtLCBlZGl0RWxlbSwgZGVsRWxlbSk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGUpIHtcbiAgLy8gZGF0ZSA6IHl5eXktbW0tZGQsIGVnLT4gMjAyMS0xMC0yNFxuICAvLyBvdXRwdXQ6IDI0dGggT2N0XG5cbiAgY29uc3QgbW9udGhzID0gW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVidWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXTtcblxuICBsZXQgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZS5zcGxpdChcIi1cIik7XG4gIG1vbnRoID0gbW9udGhzW21vbnRoIC0gMV0uc2xpY2UoMCwgMyk7XG5cbiAgaWYgKGRheS5zbGljZSgtMSkgPT0gXCIxXCIpIHtcbiAgICBkYXkgPSBkYXkgKyBcInN0XCI7XG4gIH0gZWxzZSBpZiAoZGF5LnNsaWNlKC0xKSA9PSBcIjJcIikge1xuICAgIGRheSA9IGRheSArIFwibmRcIjtcbiAgfSBlbHNlIGlmIChkYXkuc2xpY2UoLTEpID09IFwiM1wiKSB7XG4gICAgZGF5ID0gZGF5ICsgXCJyZFwiO1xuICB9IGVsc2Uge1xuICAgIGRheSA9IGRheSArIFwidGhcIjtcbiAgfVxuICByZXR1cm4gYCR7ZGF5fSAke21vbnRofWA7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2ssIGNvbnZlcnREYXRlIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBsb2FkRnJvbUxvY2FsLFxuICByZW1vdmVGcm9tTG9jYWwsXG4gIHNhdmVUb0xvY2FsLFxuICBnZXRUYXNrRnJvbURCLFxufSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uR3JvdXAsIGNyZWF0ZVdlbGNvbWVEaXYsIGNyZWF0ZUluc2lnaHRzRGl2IH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQsIHsgY3JlYXRlVGFzaywgY29udmVydERhdGUgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIEFkZCBuZXcgdGFzayB0byBET01cbmZ1bmN0aW9uIGFkZFRhc2tUb0RPTShkYXRhKSB7XG4gIGNvbnN0IHJlYWRhYmxlRGF0ZSA9IGNvbnZlcnREYXRlKGRhdGEuZHVlRGF0ZSk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKGRhdGEudGl0bGUsIHJlYWRhYmxlRGF0ZSwgZGF0YS5wcmlvcml0eSwgZGF0YS5pZCk7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIFVwZGF0ZVRhc2tPbkRPTShkYXRhKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT0gZGF0YS5pZCkge1xuICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBET01cIik7XG4gICAgICBpZiAoZGF0YS50aXRsZS5sZW5ndGggPiAxOCkgZGF0YS50aXRsZSA9IGRhdGEudGl0bGUuc2xpY2UoMCwgMTcpICsgXCIuLi5cIjtcbiAgICAgIHRhc2suY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XG4gICAgICBjb25zdCByZWFkYWJsZURhdGUgPSBjb252ZXJ0RGF0ZShkYXRhLmR1ZURhdGUpO1xuICAgICAgdGFzay5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gcmVhZGFibGVEYXRlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RGb3JtRGF0YShmb3JtKSB7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS50aXRsZS52YWx1ZTtcbiAgY29uc3QgaWQgPSBmb3JtLmlkLnZhbHVlO1xuICBjb25zdCBkZXNjID0gZm9ybS5kZXNjcmlwdGlvbi52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGZvcm0uZHVlZGF0ZS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnByaW9yaXR5LnZhbHVlO1xuICByZXR1cm4geyB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGlkIH07XG59XG5cbmZ1bmN0aW9uIGFkZERhdGEoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGV4dHJhY3RGb3JtRGF0YShldmVudC50YXJnZXQpO1xuXG4gIGNvbnN0IGlkID0gc2F2ZVRvTG9jYWwoZGF0YSk7XG4gIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5IH0gPSBkYXRhO1xuICBhZGRUYXNrVG9ET00oeyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGlkIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXRhKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBleHRyYWN0Rm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgc2F2ZVRvTG9jYWwoZGF0YSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtZWRpdFwiKS5jbGljaygpO1xuXG4gIFVwZGF0ZVRhc2tPbkRPTShkYXRhKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21ET00odGFyZ2V0KSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gIHJlbW92ZUZyb21Mb2NhbCh0YXJnZXQuaWQpO1xufVxuXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGRhdGEgPSBsb2FkRnJvbUxvY2FsKCk7XG5cbiAgZm9yIChsZXQgZCBvZiBkYXRhKSB7XG4gICAgYWRkVGFza1RvRE9NKGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGlkKSB7XG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrRnJvbURCKGlkKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjaWQtbW9kYWwtZWRpdFRhc2sgZm9ybVwiKTtcbiAgZm9ybVswXS52YWx1ZSA9IGlkO1xuICBmb3JtWzFdLnZhbHVlID0gdGFzay50aXRsZTtcbiAgZm9ybVsyXS52YWx1ZSA9IHRhc2suZGVzYztcbiAgZm9ybVszXS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgZm9ybVs0XS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG59XG5cbi8vIEluaXRpYWwgU2V0dXBcbmZ1bmN0aW9uIHNldHVwRE9NKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWQtbW9kYWwtdGFza1wiKTtcbiAgY29uc3QgbW9kYWxFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpZC1tb2RhbC1lZGl0VGFza1wiKTtcblxuICBsb2FkVGFza3MoKTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi50YXNrcy10b29sYmFyID4gYnV0dG9uXCIpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XG4gIGNvbnN0IGNsb3NlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtZWRpdFwiKTtcbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLnRhc2sgPiBzcGFuID4gLmJpLXBlbmNpbC1zcXVhcmVcIlxuICApO1xuICBjb25zdCBkZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gc3BhbiA+IC5iaS10cmFzaFwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjaWQtbW9kYWwtdGFzayBmb3JtXCIpO1xuICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjaWQtbW9kYWwtZWRpdFRhc2sgZm9ybVwiKTtcblxuICBlZGl0QnRucy5mb3JFYWNoKChlZGl0KSA9PlxuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBtb2RhbEVkaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGVkaXRUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgfSlcbiAgKTtcbiAgZGVsQnRucy5mb3JFYWNoKChkZWwpID0+XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgcmVtb3ZlVGFza0Zyb21ET00oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICB9KVxuICApO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGREYXRhKTtcbiAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB1cGRhdGVEYXRhKTtcblxuICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSk7XG5cbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG1vZGFsRWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09IG1vZGFsRWRpdCkge1xuICAgICAgbW9kYWxFZGl0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cEhvbWUoKSB7XG4gIGNvbnNvbGUubG9nKFwiU2V0dXBcIik7XG4gIC8vIEhvbWUgc2VjdGlvblxuICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW1wiaG9tZVwiXSk7XG4gIHNlY3Rpb24uYXBwZW5kKGNyZWF0ZVdlbGNvbWVEaXYoKSwgY3JlYXRlQnV0dG9uR3JvdXAoKSwgY3JlYXRlSW5zaWdodHNEaXYoKSk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc2V0dXBET00pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9