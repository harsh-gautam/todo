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
  const id = generateId(savedData);
  if (savedData != null || savedData != undefined || savedData.length != 0) {
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

function generateId(data) {
  if (data.length == 0) return 1;
  return data.slice(-1)[0].id + 1;
}

function loadFromLocal() {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (data != null || data != undefined || data.length != 0) {
    return data;
  } else {
    return [];
  }
}

function removeFromLocal(id) {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (data != null || data != undefined) {
    const newData = data.filter((item) => item.id != id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQWU7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrREFBYTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFhO0FBQy9CLGlCQUFpQix1REFBZ0IsSUFBSSx3REFBaUIsSUFBSSx3REFBaUI7O0FBRTNFO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzYXZlVG9Mb2NhbChkYXRhKSB7XG4gIC8vIEBwYXJhbXM6IGRhdGEgb2JqZWN0XG4gIC8vIEBvdXRwdXQ6IGlkXG4gIGNvbnNvbGUubG9nKFwiU2F2aW5nIGRhdGEuLi5cIik7XG4gIGNvbnN0IHNhdmVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVJZChzYXZlZERhdGEpO1xuICBpZiAoc2F2ZWREYXRhICE9IG51bGwgfHwgc2F2ZWREYXRhICE9IHVuZGVmaW5lZCB8fCBzYXZlZERhdGEubGVuZ3RoICE9IDApIHtcbiAgICAvLyBJZiBkYXRhIGFscmVhZHkgZXhpc3RzIHVwZGF0ZSBpdFxuICAgIGxldCBkYXRhVG9VcGRhdGUgPSBzYXZlZERhdGEuZmlsdGVyKChkKSA9PiBkLmlkID09IGRhdGEuaWQpWzBdO1xuICAgIGlmIChkYXRhVG9VcGRhdGUgIT0gbnVsbCB8fCBkYXRhVG9VcGRhdGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGRhdGEuLi5cIik7XG4gICAgICBjb25zdCBuZXdEYXRhID0gc2F2ZWREYXRhLm1hcCgoZCkgPT4ge1xuICAgICAgICBpZiAoKGQuaWQgPSBkYXRhLmlkKSkge1xuICAgICAgICAgIGQgPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5pZCA9IGlkO1xuXG4gICAgICBpZiAoc2F2ZWREYXRhICE9IG51bGwgfHwgc2F2ZWREYXRhICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBzYXZlZERhdGEucHVzaChkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShzYXZlZERhdGEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGF0YS5pZCA9IGlkO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoW2RhdGFdKSk7XG4gIH1cbiAgcmV0dXJuIGlkO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUlkKGRhdGEpIHtcbiAgaWYgKGRhdGEubGVuZ3RoID09IDApIHJldHVybiAxO1xuICByZXR1cm4gZGF0YS5zbGljZSgtMSlbMF0uaWQgKyAxO1xufVxuXG5mdW5jdGlvbiBsb2FkRnJvbUxvY2FsKCkge1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgaWYgKGRhdGEgIT0gbnVsbCB8fCBkYXRhICE9IHVuZGVmaW5lZCB8fCBkYXRhLmxlbmd0aCAhPSAwKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb21Mb2NhbChpZCkge1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgaWYgKGRhdGEgIT0gbnVsbCB8fCBkYXRhICE9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPSBpZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGFza0Zyb21EQihpZCkge1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgcmV0dXJuIGRhdGEuZmlsdGVyKChkKSA9PiBkLmlkID09IGlkKVswXTtcbn1cblxuZXhwb3J0IHsgc2F2ZVRvTG9jYWwsIGxvYWRGcm9tTG9jYWwsIHJlbW92ZUZyb21Mb2NhbCwgZ2V0VGFza0Zyb21EQiB9O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHRpdGxlLCBzdWJ0ZXh0LCBjbGFzc2VzID0gW10sIGlkID0gXCJcIikge1xuICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjYXJkXCIsIC4uLmNsYXNzZXNdKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gY3JlYXRlRWxlbWVudChcImgzXCIsIFtdKTtcbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGNvbnN0IGNhcmRTdWJ0ZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgW10pO1xuICBjYXJkU3VidGV4dC50ZXh0Q29udGVudCA9IHN1YnRleHQ7XG4gIGNhcmQuYXBwZW5kKGNhcmRUaXRsZSwgY2FyZFN1YnRleHQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lRGl2KCkge1xuICAvLyB3ZWxjb21lIGRpdlxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBbXSk7XG4gIGgxLnRleHRDb250ZW50ID0gXCJHb29kIE1vcm5pbmdcIjtcblxuICBjb25zdCBoMiA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbXSk7XG4gIGgyLnRleHRDb250ZW50ID0gXCJIYXJzaCBHYXV0YW1cIjtcblxuICBjb25zdCB3ZWxjb21lRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3ZWxjb21lLXRleHRcIl0pO1xuICB3ZWxjb21lRGl2LmFwcGVuZChoMSwgaDIpO1xuXG4gIHJldHVybiB3ZWxjb21lRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Hcm91cCgpIHtcbiAgY29uc3QgaVRhZyA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktcGx1cy1jaXJjbGVcIl0pO1xuXG4gIC8vdGFzayBidXR0b25cbiAgY29uc3QgYnRuVGFzayA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY3JlYXRlLXRhc2tcIl0pO1xuICBidG5UYXNrLmFwcGVuZChpVGFnLCBcIlRhc2tcIik7XG5cbiAgLy93b3Jrc3BhY2UgYnV0dG9uXG4gIGNvbnN0IGJ0bldvcmtzcGFjZSA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY3JlYXRlLXdvcmtzcGFjZVwiXSk7XG4gIGJ0bldvcmtzcGFjZS5hcHBlbmQoaVRhZy5jbG9uZU5vZGUoKSwgXCJXb3Jrc3BhY2VcIik7XG5cbiAgLy8gYnV0dG9ucyBncm91cFxuICBjb25zdCBidG5Hcm91cCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYnRuLWdyb3VwXCJdKTtcbiAgYnRuR3JvdXAuYXBwZW5kKGJ0blRhc2ssIGJ0bldvcmtzcGFjZSk7XG5cbiAgcmV0dXJuIGJ0bkdyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnNpZ2h0c0RpdigpIHtcbiAgLy8gSW5zaWdodHMgZGl2XG4gIGNvbnN0IHRvZGF5Q2FyZCA9IGNyZWF0ZUNhcmQoXCJUb2RheVwiLCBcIjMgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3Qgd2Vla0NhcmQgPSBjcmVhdGVDYXJkKFwiVGhpcyBXZWVrXCIsIFwiMTIgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3QgcHJvamVjdDFDYXJkID0gY3JlYXRlQ2FyZChcIlByb2plY3QgMVwiLCBcIjIxIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHByb2plY3QyQ2FyZCA9IGNyZWF0ZUNhcmQoXCJQcm9qZWN0IDJcIiwgXCIxMyB0YXNrcyBwZW5kaW5nXCIpO1xuXG4gIGNvbnN0IGluc2lnaHRzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJpbnNpZ2h0c1wiXSk7XG4gIGluc2lnaHRzRGl2LmFwcGVuZCh0b2RheUNhcmQsIHdlZWtDYXJkLCBwcm9qZWN0MUNhcmQsIHByb2plY3QyQ2FyZCk7XG5cbiAgcmV0dXJuIGluc2lnaHRzRGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVXZWxjb21lRGl2LCBjcmVhdGVCdXR0b25Hcm91cCwgY3JlYXRlSW5zaWdodHNEaXYsIGNyZWF0ZUNhcmQgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NlcyA9IFtdLCBpZCA9IFwiXCIpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAobGV0IGNscyBvZiBjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIH1cbiAgaWYgKGlkICE9PSB1bmRlZmluZWQgfHwgaWQgIT09IFwiXCIgfHwgaWQgIT09IG51bGwpIHtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIHByLCBpZCkge1xuICAvLyBjaGVja2JveFxuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXSwgXCJ0YXNrLWNvbXBsZXRlXCIpO1xuICBjaGVja2JveC5uYW1lID0gXCJ0YXNrLWNvbXBsZXRlXCI7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgLy8gdGl0bGVcbiAgY29uc3QgdGl0bGVFbGVtID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1widGFzay1oZWFkaW5nXCJdKTtcblxuICBpZiAodGl0bGUubGVuZ3RoID4gMTgpIHRpdGxlID0gdGl0bGUuc2xpY2UoMCwgMTcpICsgXCIuLi5cIjtcbiAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgLy8gdGltZSBzdGFtcFxuICBjb25zdCB0aW1lRWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpbWUtc3RhbXBcIl0pO1xuICB0aW1lRWxlbS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgLy8gZWRpdCBidXR0b25cbiAgY29uc3QgZWRpdEVsZW0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgaUVkaXQgPSBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJiaVwiLCBcImJpLXBlbmNpbC1zcXVhcmVcIl0pO1xuICBlZGl0RWxlbS5hcHBlbmRDaGlsZChpRWRpdCk7XG5cbiAgLy9kZWxldGUgYnV0dG9uXG4gIGNvbnN0IGRlbEVsZW0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgaURlbCA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktdHJhc2hcIl0pO1xuICBkZWxFbGVtLmFwcGVuZENoaWxkKGlEZWwpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRhc2tcIl0pO1xuICB3cmFwcGVyLmRhdGFzZXQucHJpb3JpdHkgPSBwcjtcbiAgd3JhcHBlci5pZCA9IGlkO1xuICB3cmFwcGVyLmFwcGVuZChjaGVja2JveCwgdGl0bGVFbGVtLCB0aW1lRWxlbSwgZWRpdEVsZW0sIGRlbEVsZW0pO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGF0ZShkYXRlKSB7XG4gIC8vIGRhdGUgOiB5eXl5LW1tLWRkLCBlZy0+IDIwMjEtMTAtMjRcbiAgLy8gb3V0cHV0OiAyNHRoIE9jdFxuXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF07XG5cbiAgbGV0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICBtb250aCA9IG1vbnRoc1ttb250aCAtIDFdLnNsaWNlKDAsIDMpO1xuXG4gIGlmIChkYXkuc2xpY2UoLTEpID09IFwiMVwiKSB7XG4gICAgZGF5ID0gZGF5ICsgXCJzdFwiO1xuICB9IGVsc2UgaWYgKGRheS5zbGljZSgtMSkgPT0gXCIyXCIpIHtcbiAgICBkYXkgPSBkYXkgKyBcIm5kXCI7XG4gIH0gZWxzZSBpZiAoZGF5LnNsaWNlKC0xKSA9PSBcIjNcIikge1xuICAgIGRheSA9IGRheSArIFwicmRcIjtcbiAgfSBlbHNlIHtcbiAgICBkYXkgPSBkYXkgKyBcInRoXCI7XG4gIH1cbiAgcmV0dXJuIGAke2RheX0gJHttb250aH1gO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUYXNrLCBjb252ZXJ0RGF0ZSB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgbG9hZEZyb21Mb2NhbCxcbiAgcmVtb3ZlRnJvbUxvY2FsLFxuICBzYXZlVG9Mb2NhbCxcbiAgZ2V0VGFza0Zyb21EQixcbn0gZnJvbSBcIi4vZGJcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbkdyb3VwLCBjcmVhdGVXZWxjb21lRGl2LCBjcmVhdGVJbnNpZ2h0c0RpdiB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50LCB7IGNyZWF0ZVRhc2ssIGNvbnZlcnREYXRlIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG4vLyBBZGQgbmV3IHRhc2sgdG8gRE9NXG5mdW5jdGlvbiBhZGRUYXNrVG9ET00oZGF0YSkge1xuICBjb25zdCByZWFkYWJsZURhdGUgPSBjb252ZXJ0RGF0ZShkYXRhLmR1ZURhdGUpO1xuICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhkYXRhLnRpdGxlLCByZWFkYWJsZURhdGUsIGRhdGEucHJpb3JpdHksIGRhdGEuaWQpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xufVxuXG5mdW5jdGlvbiBVcGRhdGVUYXNrT25ET00oZGF0YSkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09IGRhdGEuaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgRE9NXCIpO1xuICAgICAgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gMTgpIGRhdGEudGl0bGUgPSBkYXRhLnRpdGxlLnNsaWNlKDAsIDE3KSArIFwiLi4uXCI7XG4gICAgICB0YXNrLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBkYXRhLnRpdGxlO1xuICAgICAgY29uc3QgcmVhZGFibGVEYXRlID0gY29udmVydERhdGUoZGF0YS5kdWVEYXRlKTtcbiAgICAgIHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IHJlYWRhYmxlRGF0ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Rm9ybURhdGEoZm9ybSkge1xuICBjb25zdCB0aXRsZSA9IGZvcm0udGl0bGUudmFsdWU7XG4gIGNvbnN0IGlkID0gZm9ybS5pZC52YWx1ZTtcbiAgY29uc3QgZGVzYyA9IGZvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmR1ZWRhdGUudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5wcmlvcml0eS52YWx1ZTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBpZCB9O1xufVxuXG5mdW5jdGlvbiBhZGREYXRhKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBleHRyYWN0Rm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcblxuICBjb25zdCBpZCA9IHNhdmVUb0xvY2FsKGRhdGEpO1xuICBjb25zdCB7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSB9ID0gZGF0YTtcbiAgYWRkVGFza1RvRE9NKHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBpZCB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF0YShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZXh0cmFjdEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gIHNhdmVUb0xvY2FsKGRhdGEpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWVkaXRcIikuY2xpY2soKTtcblxuICBVcGRhdGVUYXNrT25ET00oZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRE9NKHRhcmdldCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICByZW1vdmVGcm9tTG9jYWwodGFyZ2V0LmlkKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBkYXRhID0gbG9hZEZyb21Mb2NhbCgpO1xuXG4gIGZvciAobGV0IGQgb2YgZGF0YSkge1xuICAgIGFkZFRhc2tUb0RPTShkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhpZCkge1xuICBjb25zdCB0YXNrID0gZ2V0VGFza0Zyb21EQihpZCk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2lkLW1vZGFsLWVkaXRUYXNrIGZvcm1cIik7XG4gIGZvcm1bMF0udmFsdWUgPSBpZDtcbiAgZm9ybVsxXS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIGZvcm1bMl0udmFsdWUgPSB0YXNrLmRlc2M7XG4gIGZvcm1bM10udmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIGZvcm1bNF0udmFsdWUgPSB0YXNrLnByaW9yaXR5O1xufVxuXG4vLyBJbml0aWFsIFNldHVwXG5mdW5jdGlvbiBzZXR1cERPTSgpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lkLW1vZGFsLXRhc2tcIik7XG4gIGNvbnN0IG1vZGFsRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWQtbW9kYWwtZWRpdFRhc2tcIik7XG5cbiAgbG9hZFRhc2tzKCk7XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYudGFza3MtdG9vbGJhciA+IGJ1dHRvblwiKTtcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xuICBjb25zdCBjbG9zZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWVkaXRcIik7XG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi50YXNrID4gc3BhbiA+IC5iaS1wZW5jaWwtc3F1YXJlXCJcbiAgKTtcbiAgY29uc3QgZGVsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayA+IHNwYW4gPiAuYmktdHJhc2hcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2lkLW1vZGFsLXRhc2sgZm9ybVwiKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2lkLW1vZGFsLWVkaXRUYXNrIGZvcm1cIik7XG5cbiAgZWRpdEJ0bnMuZm9yRWFjaCgoZWRpdCkgPT5cbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbW9kYWxFZGl0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBlZGl0VGFzayhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgIH0pXG4gICk7XG4gIGRlbEJ0bnMuZm9yRWFjaCgoZGVsKSA9PlxuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHJlbW92ZVRhc2tGcm9tRE9NKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgfSlcbiAgKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkRGF0YSk7XG4gIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdXBkYXRlRGF0YSk7XG5cbiAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0pO1xuXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG4gIGNsb3NlRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBtb2RhbEVkaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PSBtb2RhbEVkaXQpIHtcbiAgICAgIG1vZGFsRWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBIb21lKCkge1xuICBjb25zb2xlLmxvZyhcIlNldHVwXCIpO1xuICAvLyBIb21lIHNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcImhvbWVcIl0pO1xuICBzZWN0aW9uLmFwcGVuZChjcmVhdGVXZWxjb21lRGl2KCksIGNyZWF0ZUJ1dHRvbkdyb3VwKCksIGNyZWF0ZUluc2lnaHRzRGl2KCkpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNldHVwRE9NKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==