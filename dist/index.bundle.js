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
/* harmony export */   "getNextSaturday": () => (/* binding */ getNextSaturday),
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

function getNextSaturday() {
  const today = new Date();
  today.setDate(today.getDate() + ((6 + (7 - today.getDate())) % 7));
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
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
  const nextSaturday = (0,_utility__WEBPACK_IMPORTED_MODULE_2__.getNextSaturday)();
  const weeklyTasks = tasks.filter((task) => task.dueDate < nextSaturday);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzNCLHVCQUF1Qix5REFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvREFBYTtBQUMvQixpQkFBaUIsdURBQWdCLElBQUksd0RBQWlCLElBQUksd0RBQWlCOztBQUUzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUb0xvY2FsKGRhdGEpIHtcbiAgLy8gQHBhcmFtczogZGF0YSBvYmplY3RcbiAgLy8gQG91dHB1dDogaWRcbiAgY29uc29sZS5sb2coXCJTYXZpbmcgZGF0YS4uLlwiKTtcbiAgY29uc3Qgc2F2ZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUlkKHNhdmVkRGF0YSk7XG4gIGlmIChzYXZlZERhdGEgIT0gbnVsbCB8fCBzYXZlZERhdGEgIT0gdW5kZWZpbmVkIHx8IHNhdmVkRGF0YS5sZW5ndGggIT0gMCkge1xuICAgIC8vIElmIGRhdGEgYWxyZWFkeSBleGlzdHMgdXBkYXRlIGl0XG4gICAgbGV0IGRhdGFUb1VwZGF0ZSA9IHNhdmVkRGF0YS5maWx0ZXIoKGQpID0+IGQuaWQgPT0gZGF0YS5pZClbMF07XG4gICAgaWYgKGRhdGFUb1VwZGF0ZSAhPSBudWxsIHx8IGRhdGFUb1VwZGF0ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgZGF0YS4uLlwiKTtcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBzYXZlZERhdGEubWFwKChkKSA9PiB7XG4gICAgICAgIGlmICgoZC5pZCA9IGRhdGEuaWQpKSB7XG4gICAgICAgICAgZCA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmlkID0gaWQ7XG5cbiAgICAgIGlmIChzYXZlZERhdGEgIT0gbnVsbCB8fCBzYXZlZERhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNhdmVkRGF0YS5wdXNoKGRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHNhdmVkRGF0YSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkYXRhLmlkID0gaWQ7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShbZGF0YV0pKTtcbiAgfVxuICByZXR1cm4gaWQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoZGF0YSkge1xuICBpZiAoZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIDE7XG4gIHJldHVybiBkYXRhLnNsaWNlKC0xKVswXS5pZCArIDE7XG59XG5cbmZ1bmN0aW9uIGxvYWRGcm9tTG9jYWwoKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBpZiAoZGF0YSAhPSBudWxsIHx8IGRhdGEgIT0gdW5kZWZpbmVkIHx8IGRhdGEubGVuZ3RoICE9IDApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxvY2FsKGlkKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBpZiAoZGF0YSAhPSBudWxsIHx8IGRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IGlkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrRnJvbURCKGlkKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICByZXR1cm4gZGF0YS5maWx0ZXIoKGQpID0+IGQuaWQgPT0gaWQpWzBdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0dXMoaWQsIHN0YXR1cykge1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgY29uc3QgbmV3RGF0YSA9IGRhdGEubWFwKChkKSA9PiB7XG4gICAgaWYgKGQuaWQgPT0gaWQpIHtcbiAgICAgIGQuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbiAgICByZXR1cm4gZDtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xufVxuXG5leHBvcnQge1xuICBnZXRBbGxUYXNrcyxcbiAgc2F2ZVRvTG9jYWwsXG4gIGxvYWRGcm9tTG9jYWwsXG4gIHJlbW92ZUZyb21Mb2NhbCxcbiAgZ2V0VGFza0Zyb21EQixcbiAgdXBkYXRlU3RhdHVzLFxufTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL3V0aWxpdHlcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZCh0aXRsZSwgc3VidGV4dCwgY2xhc3NlcyA9IFtdLCBpZCA9IFwiXCIpIHtcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2FyZFwiLCAuLi5jbGFzc2VzXSk7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBbXSk7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBjb25zdCBjYXJkU3VidGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtdKTtcbiAgY2FyZFN1YnRleHQudGV4dENvbnRlbnQgPSBzdWJ0ZXh0O1xuICBjYXJkLmFwcGVuZChjYXJkVGl0bGUsIGNhcmRTdWJ0ZXh0KTtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VsY29tZURpdigpIHtcbiAgLy8gd2VsY29tZSBkaXZcbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgW10pO1xuICBoMS50ZXh0Q29udGVudCA9IFwiR29vZCBNb3JuaW5nXCI7XG5cbiAgY29uc3QgaDIgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgW10pO1xuICBoMi50ZXh0Q29udGVudCA9IFwiSGFyc2ggR2F1dGFtXCI7XG5cbiAgY29uc3Qgd2VsY29tZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid2VsY29tZS10ZXh0XCJdKTtcbiAgd2VsY29tZURpdi5hcHBlbmQoaDEsIGgyKTtcblxuICByZXR1cm4gd2VsY29tZURpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uR3JvdXAoKSB7XG4gIGNvbnN0IGlUYWcgPSBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJiaVwiLCBcImJpLXBsdXMtY2lyY2xlXCJdKTtcblxuICAvL3Rhc2sgYnV0dG9uXG4gIGNvbnN0IGJ0blRhc2sgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImNyZWF0ZS10YXNrXCJdKTtcbiAgYnRuVGFzay5hcHBlbmQoaVRhZywgXCJUYXNrXCIpO1xuXG4gIC8vd29ya3NwYWNlIGJ1dHRvblxuICBjb25zdCBidG5Xb3Jrc3BhY2UgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImNyZWF0ZS13b3Jrc3BhY2VcIl0pO1xuICBidG5Xb3Jrc3BhY2UuYXBwZW5kKGlUYWcuY2xvbmVOb2RlKCksIFwiV29ya3NwYWNlXCIpO1xuXG4gIC8vIGJ1dHRvbnMgZ3JvdXBcbiAgY29uc3QgYnRuR3JvdXAgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJ0bi1ncm91cFwiXSk7XG4gIGJ0bkdyb3VwLmFwcGVuZChidG5UYXNrLCBidG5Xb3Jrc3BhY2UpO1xuXG4gIHJldHVybiBidG5Hcm91cDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5zaWdodHNEaXYoKSB7XG4gIC8vIEluc2lnaHRzIGRpdlxuICBjb25zdCB0b2RheUNhcmQgPSBjcmVhdGVDYXJkKFwiVG9kYXlcIiwgXCIzIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHdlZWtDYXJkID0gY3JlYXRlQ2FyZChcIlRoaXMgV2Vla1wiLCBcIjEyIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHByb2plY3QxQ2FyZCA9IGNyZWF0ZUNhcmQoXCJQcm9qZWN0IDFcIiwgXCIyMSB0YXNrcyBwZW5kaW5nXCIpO1xuICBjb25zdCBwcm9qZWN0MkNhcmQgPSBjcmVhdGVDYXJkKFwiUHJvamVjdCAyXCIsIFwiMTMgdGFza3MgcGVuZGluZ1wiKTtcblxuICBjb25zdCBpbnNpZ2h0c0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiaW5zaWdodHNcIl0pO1xuICBpbnNpZ2h0c0Rpdi5hcHBlbmQodG9kYXlDYXJkLCB3ZWVrQ2FyZCwgcHJvamVjdDFDYXJkLCBwcm9qZWN0MkNhcmQpO1xuXG4gIHJldHVybiBpbnNpZ2h0c0Rpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlV2VsY29tZURpdiwgY3JlYXRlQnV0dG9uR3JvdXAsIGNyZWF0ZUluc2lnaHRzRGl2LCBjcmVhdGVDYXJkIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzZXMgPSBbXSwgaWQgPSBcIlwiKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBmb3IgKGxldCBjbHMgb2YgY2xhc3Nlcykge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMpO1xuICB9XG4gIGlmIChpZCAhPT0gdW5kZWZpbmVkIHx8IGlkICE9PSBcIlwiIHx8IGlkICE9PSBudWxsKSB7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBwciwgc3RhdHVzLCBpZCkge1xuICAvLyBjaGVja2JveFxuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXSwgXCJ0YXNrLWNvbXBsZXRlXCIpO1xuICBjaGVja2JveC5uYW1lID0gXCJ0YXNrLWNvbXBsZXRlXCI7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBzdGF0dXM7XG5cbiAgLy8gdGl0bGVcbiAgY29uc3QgdGl0bGVFbGVtID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1widGFzay1oZWFkaW5nXCJdKTtcblxuICBpZiAodGl0bGUubGVuZ3RoID4gMTgpIHRpdGxlID0gdGl0bGUuc2xpY2UoMCwgMTcpICsgXCIuLi5cIjtcbiAgdGl0bGVFbGVtLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgLy8gdGltZSBzdGFtcFxuICBjb25zdCB0aW1lRWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRpbWUtc3RhbXBcIl0pO1xuICB0aW1lRWxlbS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgLy8gZWRpdCBidXR0b25cbiAgY29uc3QgZWRpdEVsZW0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgaUVkaXQgPSBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJiaVwiLCBcImJpLXBlbmNpbC1zcXVhcmVcIl0pO1xuICBlZGl0RWxlbS5hcHBlbmRDaGlsZChpRWRpdCk7XG5cbiAgLy9kZWxldGUgYnV0dG9uXG4gIGNvbnN0IGRlbEVsZW0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgaURlbCA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktdHJhc2hcIl0pO1xuICBkZWxFbGVtLmFwcGVuZENoaWxkKGlEZWwpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRhc2tcIl0pO1xuICB3cmFwcGVyLmRhdGFzZXQucHJpb3JpdHkgPSBwcjtcbiAgd3JhcHBlci5pZCA9IGlkO1xuICB3cmFwcGVyLmFwcGVuZChjaGVja2JveCwgdGl0bGVFbGVtLCB0aW1lRWxlbSwgZWRpdEVsZW0sIGRlbEVsZW0pO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGF0ZShkYXRlKSB7XG4gIC8vIGRhdGUgOiBzdHJpbmdcbiAgLy8gZm9ybWF0OiB5eXl5LW1tLWRkLCBlZy0+IDIwMjEtMTAtMjRcbiAgLy8gb3V0cHV0OiAyNHRoIE9jdFxuXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF07XG5cbiAgbGV0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICBtb250aCA9IG1vbnRoc1ttb250aCAtIDFdLnNsaWNlKDAsIDMpO1xuXG4gIGlmIChkYXkuc2xpY2UoLTEpID09IFwiMVwiKSB7XG4gICAgZGF5ID0gZGF5ICsgXCJzdFwiO1xuICB9IGVsc2UgaWYgKGRheS5zbGljZSgtMSkgPT0gXCIyXCIpIHtcbiAgICBkYXkgPSBkYXkgKyBcIm5kXCI7XG4gIH0gZWxzZSBpZiAoZGF5LnNsaWNlKC0xKSA9PSBcIjNcIikge1xuICAgIGRheSA9IGRheSArIFwicmRcIjtcbiAgfSBlbHNlIHtcbiAgICBkYXkgPSBkYXkgKyBcInRoXCI7XG4gIH1cbiAgcmV0dXJuIGAke2RheX0gJHttb250aH1gO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RheURhdGUoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICByZXR1cm4gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2F0dXJkYXkoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgdG9kYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAoKDYgKyAoNyAtIHRvZGF5LmdldERhdGUoKSkpICUgNykpO1xuICBjb25zdCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy9KYW51YXJ5IGlzIDAhXG4gIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gIHJldHVybiBgJHt5eXl5fS0ke21tfS0ke2RkfWA7XG59XG5cbmZ1bmN0aW9uIHRhc2tzQm9pbGVycGxhdGUoKSB7XG4gIGxldCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbXCJ0YXNrcy1jb250YWluZXJcIl0pO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YXNrcy10b29sYmFyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWJ0blwiPlxuICAgICAgICAgIE5ldyBUYXNrPGkgY2xhc3M9XCJiaSBiaS1wbHVzLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzb3J0aW5nXCI+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwic29ydGJ5XCIgaWQ9XCJzb3J0YnlcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lXCI+TmFtZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5XCI+UHJpb3JpdHk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXRlXCI+RGF0ZTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNvcnR0eXBlXCIgaWQ9XCJzb3J0dHlwZVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFzY1wiPkFzY2VuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRzY1wiPkRlc2NlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnV0dG9uPlNvcnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrc1wiPlxuICAgICAgICBcbiAgICAgIDwvZGl2PmA7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVRhc2ssXG4gIGNvbnZlcnREYXRlLFxuICBnZXRUb2RheURhdGUsXG4gIGdldE5leHRTYXR1cmRheSxcbiAgdGFza3NCb2lsZXJwbGF0ZSxcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBnZXRBbGxUYXNrcyxcbiAgbG9hZEZyb21Mb2NhbCxcbiAgcmVtb3ZlRnJvbUxvY2FsLFxuICBzYXZlVG9Mb2NhbCxcbiAgZ2V0VGFza0Zyb21EQixcbiAgdXBkYXRlU3RhdHVzLFxufSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uR3JvdXAsIGNyZWF0ZVdlbGNvbWVEaXYsIGNyZWF0ZUluc2lnaHRzRGl2IH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQsIHtcbiAgY3JlYXRlVGFzayxcbiAgY29udmVydERhdGUsXG4gIGdldFRvZGF5RGF0ZSxcbiAgdGFza3NCb2lsZXJwbGF0ZSxcbiAgZ2V0TmV4dFNhdHVyZGF5LFxufSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIEFkZCBuZXcgdGFzayB0byBET01cbmZ1bmN0aW9uIGFkZFRhc2tUb0RPTShkYXRhKSB7XG4gIGNvbnN0IHJlYWRhYmxlRGF0ZSA9IGNvbnZlcnREYXRlKGRhdGEuZHVlRGF0ZSk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKFxuICAgIGRhdGEudGl0bGUsXG4gICAgcmVhZGFibGVEYXRlLFxuICAgIGRhdGEucHJpb3JpdHksXG4gICAgZGF0YS5zdGF0dXMsXG4gICAgZGF0YS5pZFxuICApO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xufVxuXG5mdW5jdGlvbiBVcGRhdGVUYXNrT25ET00oZGF0YSkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09IGRhdGEuaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgRE9NXCIpO1xuICAgICAgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gMTgpIGRhdGEudGl0bGUgPSBkYXRhLnRpdGxlLnNsaWNlKDAsIDE3KSArIFwiLi4uXCI7XG4gICAgICB0YXNrLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBkYXRhLnRpdGxlO1xuICAgICAgY29uc3QgcmVhZGFibGVEYXRlID0gY29udmVydERhdGUoZGF0YS5kdWVEYXRlKTtcbiAgICAgIHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IHJlYWRhYmxlRGF0ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Rm9ybURhdGEoZm9ybSkge1xuICBjb25zdCB0aXRsZSA9IGZvcm0udGl0bGUudmFsdWU7XG4gIGNvbnN0IGlkID0gZm9ybS5pZC52YWx1ZTtcbiAgY29uc3QgZGVzYyA9IGZvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmR1ZWRhdGUudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5wcmlvcml0eS52YWx1ZTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBpZCB9O1xufVxuXG5mdW5jdGlvbiBhZGREYXRhKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBleHRyYWN0Rm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgZGF0YVtcInN0YXR1c1wiXSA9IGZhbHNlO1xuXG4gIGNvbnN0IGlkID0gc2F2ZVRvTG9jYWwoZGF0YSk7XG4gIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMgfSA9IGRhdGE7XG4gIGFkZFRhc2tUb0RPTSh7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBpZCB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF0YShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZXh0cmFjdEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gIHNhdmVUb0xvY2FsKGRhdGEpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWVkaXRcIikuY2xpY2soKTtcblxuICBVcGRhdGVUYXNrT25ET00oZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRE9NKHRhcmdldCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICByZW1vdmVGcm9tTG9jYWwodGFyZ2V0LmlkKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBkYXRhID0gbG9hZEZyb21Mb2NhbCgpO1xuXG4gIGZvciAobGV0IGQgb2YgZGF0YSkge1xuICAgIGFkZFRhc2tUb0RPTShkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhpZCkge1xuICBjb25zdCB0YXNrID0gZ2V0VGFza0Zyb21EQihpZCk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2lkLW1vZGFsLWVkaXRUYXNrIGZvcm1cIik7XG4gIGZvcm1bMF0udmFsdWUgPSBpZDtcbiAgZm9ybVsxXS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIGZvcm1bMl0udmFsdWUgPSB0YXNrLmRlc2M7XG4gIGZvcm1bM10udmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIGZvcm1bNF0udmFsdWUgPSB0YXNrLnByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBzZXR1cExpc3RlbmVycygpIHtcbiAgY29uc3QgY3JlYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYudGFza3MtdG9vbGJhciA+IGJ1dHRvblwiKTtcbiAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLnRhc2sgPiBzcGFuID4gLmJpLXBlbmNpbC1zcXVhcmVcIlxuICApO1xuICBjb25zdCBkZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrID4gc3BhbiA+IC5iaS10cmFzaFwiKTtcbiAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayA+IGlucHV0XCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWQtbW9kYWwtdGFza1wiKTtcblxuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gICAgICBjb25zdCBzdGF0dXMgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgdXBkYXRlU3RhdHVzKGlkLCBzdGF0dXMpO1xuICAgIH0pO1xuICB9KTtcblxuICBlZGl0QnRucy5mb3JFYWNoKChlZGl0KSA9PlxuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBtb2RhbEVkaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGVkaXRUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgfSlcbiAgKTtcbiAgZGVsQnRucy5mb3JFYWNoKChkZWwpID0+XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgcmVtb3ZlVGFza0Zyb21ET00oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICB9KVxuICApO1xuXG4gIGNyZWF0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBUb2RheVNjcmVlbigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NCb2lsZXJwbGF0ZSgpKTtcblxuICBjb25zdCB0YXNrcyA9IGdldEFsbFRhc2tzKCk7XG4gIGNvbnN0IHRvZGF5RGF0ZSA9IGdldFRvZGF5RGF0ZSgpO1xuICBjb25zdCB0b2RheVRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmR1ZURhdGUgPT0gdG9kYXlEYXRlKTtcbiAgdG9kYXlUYXNrcy5tYXAoKHRhc2spID0+IGFkZFRhc2tUb0RPTSh0YXNrKSk7XG4gIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gIC8vIGFkZFRhc2tUb0RPTSh0b2RheVRhc2tzKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBXZWVrbHlTY3JlZW4oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzQm9pbGVycGxhdGUoKSk7XG5cbiAgY29uc3QgdGFza3MgPSBnZXRBbGxUYXNrcygpO1xuICBjb25zdCBuZXh0U2F0dXJkYXkgPSBnZXROZXh0U2F0dXJkYXkoKTtcbiAgY29uc3Qgd2Vla2x5VGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZHVlRGF0ZSA8IG5leHRTYXR1cmRheSk7XG4gIHdlZWtseVRhc2tzLm1hcCgodGFzaykgPT4gYWRkVGFza1RvRE9NKHRhc2spKTtcbiAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgLy8gYWRkVGFza1RvRE9NKHRvZGF5VGFza3MpO1xuICAvLyBjb25zb2xlLmxvZyhuZXh0U2F0dXJkYXkpO1xufVxuXG5mdW5jdGlvbiBzZXR1cEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zb2xlLmxvZyhcIlNldHVwXCIpO1xuICAvLyBIb21lIHNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcImhvbWUtY29udGFpbmVyXCJdKTtcbiAgc2VjdGlvbi5hcHBlbmQoY3JlYXRlV2VsY29tZURpdigpLCBjcmVhdGVCdXR0b25Hcm91cCgpLCBjcmVhdGVJbnNpZ2h0c0RpdigpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG4vLyBJbml0aWFsIFNldHVwXG5mdW5jdGlvbiBzZXR1cERPTSgpIHtcbiAgc2V0dXBIb21lKCk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpZC1tb2RhbC10YXNrXCIpO1xuICBjb25zdCBtb2RhbEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lkLW1vZGFsLWVkaXRUYXNrXCIpO1xuXG4gIC8vIGxvYWRUYXNrcygpO1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcbiAgY29uc3QgY2xvc2VFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1lZGl0XCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2lkLW1vZGFsLXRhc2sgZm9ybVwiKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2lkLW1vZGFsLWVkaXRUYXNrIGZvcm1cIik7XG5cbiAgY29uc3QgdG9kYXlMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcbiAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGNvbnN0IHdlZWtMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrXCIpO1xuXG4gIHRvZGF5TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0dXBUb2RheVNjcmVlbigpO1xuICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gIH0pO1xuICB3ZWVrTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0dXBXZWVrbHlTY3JlZW4oKTtcbiAgICBzZXR1cExpc3RlbmVycygpO1xuICB9KTtcblxuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0dXBIb21lKCk7XG4gIH0pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGREYXRhKTtcbiAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB1cGRhdGVEYXRhKTtcblxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuICBjbG9zZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbW9kYWxFZGl0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT0gbW9kYWxFZGl0KSB7XG4gICAgICBtb2RhbEVkaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNldHVwRE9NKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==