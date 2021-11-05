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
/* harmony export */   "getAllTasks": () => (/* binding */ getAllTasks),
/* harmony export */   "saveToLocal": () => (/* binding */ saveToLocal),
/* harmony export */   "loadFromLocal": () => (/* binding */ loadFromLocal),
/* harmony export */   "removeFromLocal": () => (/* binding */ removeFromLocal),
/* harmony export */   "getTaskFromDB": () => (/* binding */ getTaskFromDB),
/* harmony export */   "updateStatus": () => (/* binding */ updateStatus)
/* harmony export */ });
function getAllTasks() {
  return JSON.parse(localStorage.getItem("tasks"));
}

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

function updateStatus(id, status) {
  const data = JSON.parse(localStorage.getItem("tasks"));
  const newData = data.map((d) => {
    if (d.id == id) {
      d.status = status;
    }
    return d;
  });
  localStorage.setItem("tasks", JSON.stringify(newData));
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
/* harmony export */   "getTodayDate": () => (/* binding */ getTodayDate),
/* harmony export */   "getThisWeek": () => (/* binding */ getThisWeek),
/* harmony export */   "tasksBoilerplate": () => (/* binding */ tasksBoilerplate),
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

function createTask(title, dueDate, pr, status, id) {
  // checkbox
  const checkbox = createElement("input", [], "task-complete");
  checkbox.name = "task-complete";
  checkbox.type = "checkbox";
  checkbox.checked = status;

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
  // date : string
  // format: yyyy-mm-dd, eg-> 2021-10-24
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

function getTodayDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

function getThisWeek() {
  const today = new Date();
  today.setDate(today.getDate() + ((6 + (7 - today.getDate())) % 7));
  const dd = String(today.getDate()).padStart(2, "0");
  const lastMon = String(today.getDate() - 5).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return [`${yyyy}-${mm}-${lastMon}`, `${yyyy}-${mm}-${dd}`];
}

function tasksBoilerplate() {
  let container = createElement("section", ["tasks-container"]);
  container.innerHTML = `<div class="tasks-toolbar">
        <button class="task-btn">
          New Task<i class="bi bi-plus-circle"></i>
        </button>
        <div class="sorting">
          <select name="sortby" id="sortby">
            <option value="name">Name</option>
            <option value="priority">Priority</option>
            <option value="date">Date</option>
          </select>
          <select name="sorttype" id="sorttype">
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
          <button>Sort</button>
        </div>
      </div>
      <div class="tasks">
        
      </div>`;
  return container;
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
  const newTask = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.createTask)(
    data.title,
    readableDate,
    data.priority,
    data.status,
    data.id
  );
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
  data["status"] = false;

  const id = (0,_db__WEBPACK_IMPORTED_MODULE_0__.saveToLocal)(data);
  const { title, dueDate, priority, status } = data;
  addTaskToDOM({ title, dueDate, priority, status, id });
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

function setupListeners() {
  const createTask = document.querySelector("div.tasks-toolbar > button");
  const editBtns = document.querySelectorAll(
    ".task > span > .bi-pencil-square"
  );
  const delBtns = document.querySelectorAll(".task > span > .bi-trash");
  const checkboxes = document.querySelectorAll(".task > input");
  const modal = document.querySelector("#id-modal-task");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const id = e.target.parentNode.id;
      const status = e.target.checked;
      (0,_db__WEBPACK_IMPORTED_MODULE_0__.updateStatus)(id, status);
    });
  });

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

  createTask.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

function setupTodayScreen() {
  const content = document.querySelector(".content");
  content.style.opacity = 0;

  content.innerHTML = "";
  content.appendChild((0,_utility__WEBPACK_IMPORTED_MODULE_2__.tasksBoilerplate)());

  const tasks = (0,_db__WEBPACK_IMPORTED_MODULE_0__.getAllTasks)();
  const todayDate = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getTodayDate)();
  const todayTasks = tasks.filter((task) => task.dueDate == todayDate);
  todayTasks.map((task) => addTaskToDOM(task));
  content.style.opacity = 1;
  // addTaskToDOM(todayTasks);
}

function setupWeeklyScreen() {
  const content = document.querySelector(".content");
  content.style.opacity = 0;

  content.innerHTML = "";
  content.appendChild((0,_utility__WEBPACK_IMPORTED_MODULE_2__.tasksBoilerplate)());

  const tasks = (0,_db__WEBPACK_IMPORTED_MODULE_0__.getAllTasks)();
  const [lastMonday, nextSaturday] = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getThisWeek)();
  const weeklyTasks = tasks.filter(
    (task) => task.dueDate >= lastMonday && task.dueDate <= nextSaturday
  );
  weeklyTasks.map((task) => addTaskToDOM(task));
  content.style.opacity = 1;
  // addTaskToDOM(todayTasks);
  // console.log(nextSaturday);
}

function setupHome() {
  const content = document.querySelector(".content");
  content.style.opacity = 0;

  content.innerHTML = "";
  console.log("Setup");
  // Home section
  const section = (0,_utility__WEBPACK_IMPORTED_MODULE_2__["default"])("section", ["home-container"]);
  section.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.createWelcomeDiv)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__.createButtonGroup)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__.createInsightsDiv)());

  content.appendChild(section);
  content.style.opacity = 1;
}

// Initial Setup
function setupDOM() {
  setupHome();
  const modal = document.querySelector("#id-modal-task");
  const modalEdit = document.querySelector("#id-modal-editTask");

  // loadTasks();

  const close = document.querySelector(".close");
  const closeEdit = document.querySelector(".close-edit");

  const form = document.querySelector("div#id-modal-task form");
  const editForm = document.querySelector("div#id-modal-editTask form");

  const todayLink = document.querySelector(".today");
  const homeLink = document.querySelector(".home");
  const weekLink = document.querySelector(".week");

  todayLink.addEventListener("click", (e) => {
    e.preventDefault();
    setupTodayScreen();
    setupListeners();
  });
  weekLink.addEventListener("click", (e) => {
    e.preventDefault();
    setupWeeklyScreen();
    setupListeners();
  });

  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    setupHome();
  });

  form.addEventListener("submit", addData);
  editForm.addEventListener("submit", updateData);

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

document.addEventListener("DOMContentLoaded", setupDOM);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHNCQUFzQiwwREFBZ0I7O0FBRXRDLGdCQUFnQixnREFBVztBQUMzQixxQ0FBcUMscURBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFhO0FBQy9CLGlCQUFpQix1REFBZ0IsSUFBSSx3REFBaUIsSUFBSSx3REFBaUI7O0FBRTNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kYi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRvTG9jYWwoZGF0YSkge1xuICAvLyBAcGFyYW1zOiBkYXRhIG9iamVjdFxuICAvLyBAb3V0cHV0OiBpZFxuICBjb25zb2xlLmxvZyhcIlNhdmluZyBkYXRhLi4uXCIpO1xuICBjb25zdCBzYXZlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBjb25zdCBpZCA9IGdlbmVyYXRlSWQoc2F2ZWREYXRhKTtcbiAgaWYgKHNhdmVkRGF0YSAhPSBudWxsIHx8IHNhdmVkRGF0YSAhPSB1bmRlZmluZWQgfHwgc2F2ZWREYXRhLmxlbmd0aCAhPSAwKSB7XG4gICAgLy8gSWYgZGF0YSBhbHJlYWR5IGV4aXN0cyB1cGRhdGUgaXRcbiAgICBsZXQgZGF0YVRvVXBkYXRlID0gc2F2ZWREYXRhLmZpbHRlcigoZCkgPT4gZC5pZCA9PSBkYXRhLmlkKVswXTtcbiAgICBpZiAoZGF0YVRvVXBkYXRlICE9IG51bGwgfHwgZGF0YVRvVXBkYXRlICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBkYXRhLi4uXCIpO1xuICAgICAgY29uc3QgbmV3RGF0YSA9IHNhdmVkRGF0YS5tYXAoKGQpID0+IHtcbiAgICAgICAgaWYgKChkLmlkID0gZGF0YS5pZCkpIHtcbiAgICAgICAgICBkID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuaWQgPSBpZDtcblxuICAgICAgaWYgKHNhdmVkRGF0YSAhPSBudWxsIHx8IHNhdmVkRGF0YSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2F2ZWREYXRhLnB1c2goZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWREYXRhKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRhdGEuaWQgPSBpZDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KFtkYXRhXSkpO1xuICB9XG4gIHJldHVybiBpZDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJZChkYXRhKSB7XG4gIGlmIChkYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIGRhdGEuc2xpY2UoLTEpWzBdLmlkICsgMTtcbn1cblxuZnVuY3Rpb24gbG9hZEZyb21Mb2NhbCgpIHtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gIGlmIChkYXRhICE9IG51bGwgfHwgZGF0YSAhPSB1bmRlZmluZWQgfHwgZGF0YS5sZW5ndGggIT0gMCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tTG9jYWwoaWQpIHtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gIGlmIChkYXRhICE9IG51bGwgfHwgZGF0YSAhPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gaWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tGcm9tREIoaWQpIHtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gIHJldHVybiBkYXRhLmZpbHRlcigoZCkgPT4gZC5pZCA9PSBpZClbMF07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhpZCwgc3RhdHVzKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoKGQpID0+IHtcbiAgICBpZiAoZC5pZCA9PSBpZCkge1xuICAgICAgZC5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuICAgIHJldHVybiBkO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSk7XG59XG5cbmV4cG9ydCB7XG4gIGdldEFsbFRhc2tzLFxuICBzYXZlVG9Mb2NhbCxcbiAgbG9hZEZyb21Mb2NhbCxcbiAgcmVtb3ZlRnJvbUxvY2FsLFxuICBnZXRUYXNrRnJvbURCLFxuICB1cGRhdGVTdGF0dXMsXG59O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHRpdGxlLCBzdWJ0ZXh0LCBjbGFzc2VzID0gW10sIGlkID0gXCJcIikge1xuICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjYXJkXCIsIC4uLmNsYXNzZXNdKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gY3JlYXRlRWxlbWVudChcImgzXCIsIFtdKTtcbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGNvbnN0IGNhcmRTdWJ0ZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgW10pO1xuICBjYXJkU3VidGV4dC50ZXh0Q29udGVudCA9IHN1YnRleHQ7XG4gIGNhcmQuYXBwZW5kKGNhcmRUaXRsZSwgY2FyZFN1YnRleHQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lRGl2KCkge1xuICAvLyB3ZWxjb21lIGRpdlxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBbXSk7XG4gIGgxLnRleHRDb250ZW50ID0gXCJHb29kIE1vcm5pbmdcIjtcblxuICBjb25zdCBoMiA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbXSk7XG4gIGgyLnRleHRDb250ZW50ID0gXCJIYXJzaCBHYXV0YW1cIjtcblxuICBjb25zdCB3ZWxjb21lRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3ZWxjb21lLXRleHRcIl0pO1xuICB3ZWxjb21lRGl2LmFwcGVuZChoMSwgaDIpO1xuXG4gIHJldHVybiB3ZWxjb21lRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Hcm91cCgpIHtcbiAgY29uc3QgaVRhZyA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktcGx1cy1jaXJjbGVcIl0pO1xuXG4gIC8vdGFzayBidXR0b25cbiAgY29uc3QgYnRuVGFzayA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY3JlYXRlLXRhc2tcIl0pO1xuICBidG5UYXNrLmFwcGVuZChpVGFnLCBcIlRhc2tcIik7XG5cbiAgLy93b3Jrc3BhY2UgYnV0dG9uXG4gIGNvbnN0IGJ0bldvcmtzcGFjZSA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY3JlYXRlLXdvcmtzcGFjZVwiXSk7XG4gIGJ0bldvcmtzcGFjZS5hcHBlbmQoaVRhZy5jbG9uZU5vZGUoKSwgXCJXb3Jrc3BhY2VcIik7XG5cbiAgLy8gYnV0dG9ucyBncm91cFxuICBjb25zdCBidG5Hcm91cCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYnRuLWdyb3VwXCJdKTtcbiAgYnRuR3JvdXAuYXBwZW5kKGJ0blRhc2ssIGJ0bldvcmtzcGFjZSk7XG5cbiAgcmV0dXJuIGJ0bkdyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnNpZ2h0c0RpdigpIHtcbiAgLy8gSW5zaWdodHMgZGl2XG4gIGNvbnN0IHRvZGF5Q2FyZCA9IGNyZWF0ZUNhcmQoXCJUb2RheVwiLCBcIjMgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3Qgd2Vla0NhcmQgPSBjcmVhdGVDYXJkKFwiVGhpcyBXZWVrXCIsIFwiMTIgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3QgcHJvamVjdDFDYXJkID0gY3JlYXRlQ2FyZChcIlByb2plY3QgMVwiLCBcIjIxIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHByb2plY3QyQ2FyZCA9IGNyZWF0ZUNhcmQoXCJQcm9qZWN0IDJcIiwgXCIxMyB0YXNrcyBwZW5kaW5nXCIpO1xuXG4gIGNvbnN0IGluc2lnaHRzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJpbnNpZ2h0c1wiXSk7XG4gIGluc2lnaHRzRGl2LmFwcGVuZCh0b2RheUNhcmQsIHdlZWtDYXJkLCBwcm9qZWN0MUNhcmQsIHByb2plY3QyQ2FyZCk7XG5cbiAgcmV0dXJuIGluc2lnaHRzRGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVXZWxjb21lRGl2LCBjcmVhdGVCdXR0b25Hcm91cCwgY3JlYXRlSW5zaWdodHNEaXYsIGNyZWF0ZUNhcmQgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NlcyA9IFtdLCBpZCA9IFwiXCIpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAobGV0IGNscyBvZiBjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIH1cbiAgaWYgKGlkICE9PSB1bmRlZmluZWQgfHwgaWQgIT09IFwiXCIgfHwgaWQgIT09IG51bGwpIHtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIHByLCBzdGF0dXMsIGlkKSB7XG4gIC8vIGNoZWNrYm94XG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtdLCBcInRhc2stY29tcGxldGVcIik7XG4gIGNoZWNrYm94Lm5hbWUgPSBcInRhc2stY29tcGxldGVcIjtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IHN0YXR1cztcblxuICAvLyB0aXRsZVxuICBjb25zdCB0aXRsZUVsZW0gPSBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0YXNrLWhlYWRpbmdcIl0pO1xuXG4gIGlmICh0aXRsZS5sZW5ndGggPiAxOCkgdGl0bGUgPSB0aXRsZS5zbGljZSgwLCAxNykgKyBcIi4uLlwiO1xuICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAvLyB0aW1lIHN0YW1wXG4gIGNvbnN0IHRpbWVFbGVtID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1widGltZS1zdGFtcFwiXSk7XG4gIHRpbWVFbGVtLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICAvLyBlZGl0IGJ1dHRvblxuICBjb25zdCBlZGl0RWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBpRWRpdCA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktcGVuY2lsLXNxdWFyZVwiXSk7XG4gIGVkaXRFbGVtLmFwcGVuZENoaWxkKGlFZGl0KTtcblxuICAvL2RlbGV0ZSBidXR0b25cbiAgY29uc3QgZGVsRWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBpRGVsID0gY3JlYXRlRWxlbWVudChcImlcIiwgW1wiYmlcIiwgXCJiaS10cmFzaFwiXSk7XG4gIGRlbEVsZW0uYXBwZW5kQ2hpbGQoaURlbCk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFza1wiXSk7XG4gIHdyYXBwZXIuZGF0YXNldC5wcmlvcml0eSA9IHByO1xuICB3cmFwcGVyLmlkID0gaWQ7XG4gIHdyYXBwZXIuYXBwZW5kKGNoZWNrYm94LCB0aXRsZUVsZW0sIHRpbWVFbGVtLCBlZGl0RWxlbSwgZGVsRWxlbSk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGUpIHtcbiAgLy8gZGF0ZSA6IHN0cmluZ1xuICAvLyBmb3JtYXQ6IHl5eXktbW0tZGQsIGVnLT4gMjAyMS0xMC0yNFxuICAvLyBvdXRwdXQ6IDI0dGggT2N0XG5cbiAgY29uc3QgbW9udGhzID0gW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVidWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXTtcblxuICBsZXQgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZS5zcGxpdChcIi1cIik7XG4gIG1vbnRoID0gbW9udGhzW21vbnRoIC0gMV0uc2xpY2UoMCwgMyk7XG5cbiAgaWYgKGRheS5zbGljZSgtMSkgPT0gXCIxXCIpIHtcbiAgICBkYXkgPSBkYXkgKyBcInN0XCI7XG4gIH0gZWxzZSBpZiAoZGF5LnNsaWNlKC0xKSA9PSBcIjJcIikge1xuICAgIGRheSA9IGRheSArIFwibmRcIjtcbiAgfSBlbHNlIGlmIChkYXkuc2xpY2UoLTEpID09IFwiM1wiKSB7XG4gICAgZGF5ID0gZGF5ICsgXCJyZFwiO1xuICB9IGVsc2Uge1xuICAgIGRheSA9IGRheSArIFwidGhcIjtcbiAgfVxuICByZXR1cm4gYCR7ZGF5fSAke21vbnRofWA7XG59XG5cbmZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy9KYW51YXJ5IGlzIDAhXG4gIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gIHJldHVybiBgJHt5eXl5fS0ke21tfS0ke2RkfWA7XG59XG5cbmZ1bmN0aW9uIGdldFRoaXNXZWVrKCkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgKCg2ICsgKDcgLSB0b2RheS5nZXREYXRlKCkpKSAlIDcpKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IGxhc3RNb24gPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpIC0gNSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvL0phbnVhcnkgaXMgMCFcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIFtgJHt5eXl5fS0ke21tfS0ke2xhc3RNb259YCwgYCR7eXl5eX0tJHttbX0tJHtkZH1gXTtcbn1cblxuZnVuY3Rpb24gdGFza3NCb2lsZXJwbGF0ZSgpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcInRhc2tzLWNvbnRhaW5lclwiXSk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhc2tzLXRvb2xiYXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2stYnRuXCI+XG4gICAgICAgICAgTmV3IFRhc2s8aSBjbGFzcz1cImJpIGJpLXBsdXMtY2lyY2xlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNvcnRpbmdcIj5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzb3J0YnlcIiBpZD1cInNvcnRieVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5hbWVcIj5OYW1lPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhdGVcIj5EYXRlPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwic29ydHR5cGVcIiBpZD1cInNvcnR0eXBlXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+QXNjZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZHNjXCI+RGVzY2VuZGluZzwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxidXR0b24+U29ydDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tzXCI+XG4gICAgICAgIFxuICAgICAgPC9kaXY+YDtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFzaywgY29udmVydERhdGUsIGdldFRvZGF5RGF0ZSwgZ2V0VGhpc1dlZWssIHRhc2tzQm9pbGVycGxhdGUgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGdldEFsbFRhc2tzLFxuICBsb2FkRnJvbUxvY2FsLFxuICByZW1vdmVGcm9tTG9jYWwsXG4gIHNhdmVUb0xvY2FsLFxuICBnZXRUYXNrRnJvbURCLFxuICB1cGRhdGVTdGF0dXMsXG59IGZyb20gXCIuL2RiXCI7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b25Hcm91cCwgY3JlYXRlV2VsY29tZURpdiwgY3JlYXRlSW5zaWdodHNEaXYgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCwge1xuICBjcmVhdGVUYXNrLFxuICBjb252ZXJ0RGF0ZSxcbiAgZ2V0VG9kYXlEYXRlLFxuICB0YXNrc0JvaWxlcnBsYXRlLFxuICBnZXRUaGlzV2Vlayxcbn0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG4vLyBBZGQgbmV3IHRhc2sgdG8gRE9NXG5mdW5jdGlvbiBhZGRUYXNrVG9ET00oZGF0YSkge1xuICBjb25zdCByZWFkYWJsZURhdGUgPSBjb252ZXJ0RGF0ZShkYXRhLmR1ZURhdGUpO1xuICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhcbiAgICBkYXRhLnRpdGxlLFxuICAgIHJlYWRhYmxlRGF0ZSxcbiAgICBkYXRhLnByaW9yaXR5LFxuICAgIGRhdGEuc3RhdHVzLFxuICAgIGRhdGEuaWRcbiAgKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbn1cblxuZnVuY3Rpb24gVXBkYXRlVGFza09uRE9NKGRhdGEpIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PSBkYXRhLmlkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIERPTVwiKTtcbiAgICAgIGlmIChkYXRhLnRpdGxlLmxlbmd0aCA+IDE4KSBkYXRhLnRpdGxlID0gZGF0YS50aXRsZS5zbGljZSgwLCAxNykgKyBcIi4uLlwiO1xuICAgICAgdGFzay5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gZGF0YS50aXRsZTtcbiAgICAgIGNvbnN0IHJlYWRhYmxlRGF0ZSA9IGNvbnZlcnREYXRlKGRhdGEuZHVlRGF0ZSk7XG4gICAgICB0YXNrLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSByZWFkYWJsZURhdGU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEZvcm1EYXRhKGZvcm0pIHtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLnRpdGxlLnZhbHVlO1xuICBjb25zdCBpZCA9IGZvcm0uaWQudmFsdWU7XG4gIGNvbnN0IGRlc2MgPSBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZm9ybS5kdWVkYXRlLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucHJpb3JpdHkudmFsdWU7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgaWQgfTtcbn1cblxuZnVuY3Rpb24gYWRkRGF0YShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZXh0cmFjdEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gIGRhdGFbXCJzdGF0dXNcIl0gPSBmYWxzZTtcblxuICBjb25zdCBpZCA9IHNhdmVUb0xvY2FsKGRhdGEpO1xuICBjb25zdCB7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzIH0gPSBkYXRhO1xuICBhZGRUYXNrVG9ET00oeyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgaWQgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGEoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGV4dHJhY3RGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICBzYXZlVG9Mb2NhbChkYXRhKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1lZGl0XCIpLmNsaWNrKCk7XG5cbiAgVXBkYXRlVGFza09uRE9NKGRhdGEpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrRnJvbURPTSh0YXJnZXQpIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgcmVtb3ZlRnJvbUxvY2FsKHRhcmdldC5pZCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgZGF0YSA9IGxvYWRGcm9tTG9jYWwoKTtcblxuICBmb3IgKGxldCBkIG9mIGRhdGEpIHtcbiAgICBhZGRUYXNrVG9ET00oZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soaWQpIHtcbiAgY29uc3QgdGFzayA9IGdldFRhc2tGcm9tREIoaWQpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNpZC1tb2RhbC1lZGl0VGFzayBmb3JtXCIpO1xuICBmb3JtWzBdLnZhbHVlID0gaWQ7XG4gIGZvcm1bMV0udmFsdWUgPSB0YXNrLnRpdGxlO1xuICBmb3JtWzJdLnZhbHVlID0gdGFzay5kZXNjO1xuICBmb3JtWzNdLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICBmb3JtWzRdLnZhbHVlID0gdGFzay5wcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnRhc2tzLXRvb2xiYXIgPiBidXR0b25cIik7XG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi50YXNrID4gc3BhbiA+IC5iaS1wZW5jaWwtc3F1YXJlXCJcbiAgKTtcbiAgY29uc3QgZGVsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayA+IHNwYW4gPiAuYmktdHJhc2hcIik7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBpbnB1dFwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lkLW1vZGFsLXRhc2tcIik7XG5cbiAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuICAgICAgY29uc3Qgc3RhdHVzID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgIHVwZGF0ZVN0YXR1cyhpZCwgc3RhdHVzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZWRpdEJ0bnMuZm9yRWFjaCgoZWRpdCkgPT5cbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbW9kYWxFZGl0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBlZGl0VGFzayhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgIH0pXG4gICk7XG4gIGRlbEJ0bnMuZm9yRWFjaCgoZGVsKSA9PlxuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHJlbW92ZVRhc2tGcm9tRE9NKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgfSlcbiAgKTtcblxuICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwVG9kYXlTY3JlZW4oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzQm9pbGVycGxhdGUoKSk7XG5cbiAgY29uc3QgdGFza3MgPSBnZXRBbGxUYXNrcygpO1xuICBjb25zdCB0b2RheURhdGUgPSBnZXRUb2RheURhdGUoKTtcbiAgY29uc3QgdG9kYXlUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5kdWVEYXRlID09IHRvZGF5RGF0ZSk7XG4gIHRvZGF5VGFza3MubWFwKCh0YXNrKSA9PiBhZGRUYXNrVG9ET00odGFzaykpO1xuICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAvLyBhZGRUYXNrVG9ET00odG9kYXlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIHNldHVwV2Vla2x5U2NyZWVuKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrc0JvaWxlcnBsYXRlKCkpO1xuXG4gIGNvbnN0IHRhc2tzID0gZ2V0QWxsVGFza3MoKTtcbiAgY29uc3QgW2xhc3RNb25kYXksIG5leHRTYXR1cmRheV0gPSBnZXRUaGlzV2VlaygpO1xuICBjb25zdCB3ZWVrbHlUYXNrcyA9IHRhc2tzLmZpbHRlcihcbiAgICAodGFzaykgPT4gdGFzay5kdWVEYXRlID49IGxhc3RNb25kYXkgJiYgdGFzay5kdWVEYXRlIDw9IG5leHRTYXR1cmRheVxuICApO1xuICB3ZWVrbHlUYXNrcy5tYXAoKHRhc2spID0+IGFkZFRhc2tUb0RPTSh0YXNrKSk7XG4gIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gIC8vIGFkZFRhc2tUb0RPTSh0b2RheVRhc2tzKTtcbiAgLy8gY29uc29sZS5sb2cobmV4dFNhdHVyZGF5KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBIb21lKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc29sZS5sb2coXCJTZXR1cFwiKTtcbiAgLy8gSG9tZSBzZWN0aW9uXG4gIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbXCJob21lLWNvbnRhaW5lclwiXSk7XG4gIHNlY3Rpb24uYXBwZW5kKGNyZWF0ZVdlbGNvbWVEaXYoKSwgY3JlYXRlQnV0dG9uR3JvdXAoKSwgY3JlYXRlSW5zaWdodHNEaXYoKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuLy8gSW5pdGlhbCBTZXR1cFxuZnVuY3Rpb24gc2V0dXBET00oKSB7XG4gIHNldHVwSG9tZSgpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWQtbW9kYWwtdGFza1wiKTtcbiAgY29uc3QgbW9kYWxFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpZC1tb2RhbC1lZGl0VGFza1wiKTtcblxuICAvLyBsb2FkVGFza3MoKTtcblxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XG4gIGNvbnN0IGNsb3NlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtZWRpdFwiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNpZC1tb2RhbC10YXNrIGZvcm1cIik7XG4gIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNpZC1tb2RhbC1lZGl0VGFzayBmb3JtXCIpO1xuXG4gIGNvbnN0IHRvZGF5TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICBjb25zdCB3ZWVrTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vla1wiKTtcblxuICB0b2RheUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldHVwVG9kYXlTY3JlZW4oKTtcbiAgICBzZXR1cExpc3RlbmVycygpO1xuICB9KTtcbiAgd2Vla0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldHVwV2Vla2x5U2NyZWVuKCk7XG4gICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgfSk7XG5cbiAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldHVwSG9tZSgpO1xuICB9KTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkRGF0YSk7XG4gIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdXBkYXRlRGF0YSk7XG5cbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIG1vZGFsRWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09IG1vZGFsRWRpdCkge1xuICAgICAgbW9kYWxFZGl0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzZXR1cERPTSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=