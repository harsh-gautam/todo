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

function createInsightsDiv() {
  // Insights div
  const todayCard = createCard("Today", "3 tasks pending");
  const weekCard = createCard("This Week", "12 tasks pending");

  const insightsDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["insights"]);
  insightsDiv.append(todayCard, weekCard);

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
  const taskContainer = document.querySelector(".tasks-container");
  taskContainer.innerHTML = "";
  let data = (0,_db__WEBPACK_IMPORTED_MODULE_0__.loadFromLocal)();
  data = data.filter((d) => d.status == false);
  const tasks = (0,_utility__WEBPACK_IMPORTED_MODULE_2__["default"])("div", ["tasks"]);
  taskContainer.appendChild(tasks);
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
  // TODO: create only a single create task button on sidebar
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
  section.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.createWelcomeDiv)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__.createInsightsDiv)());

  content.appendChild(section);

  const sectionTasks = (0,_utility__WEBPACK_IMPORTED_MODULE_2__["default"])("section", ["tasks-container"]);
  content.appendChild(sectionTasks);
  loadTasks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvREFBYTtBQUMvQixpQkFBaUIsdURBQWdCLElBQUksd0RBQWlCOztBQUV0RDs7QUFFQSx1QkFBdUIsb0RBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZGIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUb0xvY2FsKGRhdGEpIHtcbiAgLy8gQHBhcmFtczogZGF0YSBvYmplY3RcbiAgLy8gQG91dHB1dDogaWRcbiAgY29uc29sZS5sb2coXCJTYXZpbmcgZGF0YS4uLlwiKTtcbiAgY29uc3Qgc2F2ZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUlkKHNhdmVkRGF0YSk7XG4gIGlmIChzYXZlZERhdGEgIT0gbnVsbCB8fCBzYXZlZERhdGEgIT0gdW5kZWZpbmVkIHx8IHNhdmVkRGF0YS5sZW5ndGggIT0gMCkge1xuICAgIC8vIElmIGRhdGEgYWxyZWFkeSBleGlzdHMgdXBkYXRlIGl0XG4gICAgbGV0IGRhdGFUb1VwZGF0ZSA9IHNhdmVkRGF0YS5maWx0ZXIoKGQpID0+IGQuaWQgPT0gZGF0YS5pZClbMF07XG4gICAgaWYgKGRhdGFUb1VwZGF0ZSAhPSBudWxsIHx8IGRhdGFUb1VwZGF0ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgZGF0YS4uLlwiKTtcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBzYXZlZERhdGEubWFwKChkKSA9PiB7XG4gICAgICAgIGlmICgoZC5pZCA9IGRhdGEuaWQpKSB7XG4gICAgICAgICAgZCA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmlkID0gaWQ7XG5cbiAgICAgIGlmIChzYXZlZERhdGEgIT0gbnVsbCB8fCBzYXZlZERhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNhdmVkRGF0YS5wdXNoKGRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHNhdmVkRGF0YSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkYXRhLmlkID0gaWQ7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShbZGF0YV0pKTtcbiAgfVxuICByZXR1cm4gaWQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoZGF0YSkge1xuICBpZiAoZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIDE7XG4gIHJldHVybiBkYXRhLnNsaWNlKC0xKVswXS5pZCArIDE7XG59XG5cbmZ1bmN0aW9uIGxvYWRGcm9tTG9jYWwoKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBpZiAoZGF0YSAhPSBudWxsIHx8IGRhdGEgIT0gdW5kZWZpbmVkIHx8IGRhdGEubGVuZ3RoICE9IDApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxvY2FsKGlkKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICBpZiAoZGF0YSAhPSBudWxsIHx8IGRhdGEgIT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IGlkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG5ld0RhdGEpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrRnJvbURCKGlkKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICByZXR1cm4gZGF0YS5maWx0ZXIoKGQpID0+IGQuaWQgPT0gaWQpWzBdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0dXMoaWQsIHN0YXR1cykge1xuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgY29uc3QgbmV3RGF0YSA9IGRhdGEubWFwKChkKSA9PiB7XG4gICAgaWYgKGQuaWQgPT0gaWQpIHtcbiAgICAgIGQuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cbiAgICByZXR1cm4gZDtcbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xufVxuXG5leHBvcnQge1xuICBnZXRBbGxUYXNrcyxcbiAgc2F2ZVRvTG9jYWwsXG4gIGxvYWRGcm9tTG9jYWwsXG4gIHJlbW92ZUZyb21Mb2NhbCxcbiAgZ2V0VGFza0Zyb21EQixcbiAgdXBkYXRlU3RhdHVzLFxufTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL3V0aWxpdHlcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZCh0aXRsZSwgc3VidGV4dCwgY2xhc3NlcyA9IFtdLCBpZCA9IFwiXCIpIHtcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2FyZFwiLCAuLi5jbGFzc2VzXSk7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBbXSk7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBjb25zdCBjYXJkU3VidGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtdKTtcbiAgY2FyZFN1YnRleHQudGV4dENvbnRlbnQgPSBzdWJ0ZXh0O1xuICBjYXJkLmFwcGVuZChjYXJkVGl0bGUsIGNhcmRTdWJ0ZXh0KTtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VsY29tZURpdigpIHtcbiAgLy8gd2VsY29tZSBkaXZcbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgW10pO1xuICBoMS50ZXh0Q29udGVudCA9IFwiR29vZCBNb3JuaW5nXCI7XG5cbiAgY29uc3QgaDIgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgW10pO1xuICBoMi50ZXh0Q29udGVudCA9IFwiSGFyc2ggR2F1dGFtXCI7XG5cbiAgY29uc3Qgd2VsY29tZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid2VsY29tZS10ZXh0XCJdKTtcbiAgd2VsY29tZURpdi5hcHBlbmQoaDEsIGgyKTtcblxuICByZXR1cm4gd2VsY29tZURpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5zaWdodHNEaXYoKSB7XG4gIC8vIEluc2lnaHRzIGRpdlxuICBjb25zdCB0b2RheUNhcmQgPSBjcmVhdGVDYXJkKFwiVG9kYXlcIiwgXCIzIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHdlZWtDYXJkID0gY3JlYXRlQ2FyZChcIlRoaXMgV2Vla1wiLCBcIjEyIHRhc2tzIHBlbmRpbmdcIik7XG5cbiAgY29uc3QgaW5zaWdodHNEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImluc2lnaHRzXCJdKTtcbiAgaW5zaWdodHNEaXYuYXBwZW5kKHRvZGF5Q2FyZCwgd2Vla0NhcmQpO1xuXG4gIHJldHVybiBpbnNpZ2h0c0Rpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlV2VsY29tZURpdiwgY3JlYXRlSW5zaWdodHNEaXYsIGNyZWF0ZUNhcmQgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NlcyA9IFtdLCBpZCA9IFwiXCIpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAobGV0IGNscyBvZiBjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIH1cbiAgaWYgKGlkICE9PSB1bmRlZmluZWQgfHwgaWQgIT09IFwiXCIgfHwgaWQgIT09IG51bGwpIHtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIHByLCBzdGF0dXMsIGlkKSB7XG4gIC8vIGNoZWNrYm94XG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFtdLCBcInRhc2stY29tcGxldGVcIik7XG4gIGNoZWNrYm94Lm5hbWUgPSBcInRhc2stY29tcGxldGVcIjtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IHN0YXR1cztcblxuICAvLyB0aXRsZVxuICBjb25zdCB0aXRsZUVsZW0gPSBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0YXNrLWhlYWRpbmdcIl0pO1xuXG4gIGlmICh0aXRsZS5sZW5ndGggPiAxOCkgdGl0bGUgPSB0aXRsZS5zbGljZSgwLCAxNykgKyBcIi4uLlwiO1xuICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAvLyB0aW1lIHN0YW1wXG4gIGNvbnN0IHRpbWVFbGVtID0gY3JlYXRlRWxlbWVudChcInBcIiwgW1widGltZS1zdGFtcFwiXSk7XG4gIHRpbWVFbGVtLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICAvLyBlZGl0IGJ1dHRvblxuICBjb25zdCBlZGl0RWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBpRWRpdCA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktcGVuY2lsLXNxdWFyZVwiXSk7XG4gIGVkaXRFbGVtLmFwcGVuZENoaWxkKGlFZGl0KTtcblxuICAvL2RlbGV0ZSBidXR0b25cbiAgY29uc3QgZGVsRWxlbSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBpRGVsID0gY3JlYXRlRWxlbWVudChcImlcIiwgW1wiYmlcIiwgXCJiaS10cmFzaFwiXSk7XG4gIGRlbEVsZW0uYXBwZW5kQ2hpbGQoaURlbCk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widGFza1wiXSk7XG4gIHdyYXBwZXIuZGF0YXNldC5wcmlvcml0eSA9IHByO1xuICB3cmFwcGVyLmlkID0gaWQ7XG4gIHdyYXBwZXIuYXBwZW5kKGNoZWNrYm94LCB0aXRsZUVsZW0sIHRpbWVFbGVtLCBlZGl0RWxlbSwgZGVsRWxlbSk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGUpIHtcbiAgLy8gZGF0ZSA6IHN0cmluZ1xuICAvLyBmb3JtYXQ6IHl5eXktbW0tZGQsIGVnLT4gMjAyMS0xMC0yNFxuICAvLyBvdXRwdXQ6IDI0dGggT2N0XG5cbiAgY29uc3QgbW9udGhzID0gW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVidWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXTtcblxuICBsZXQgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZS5zcGxpdChcIi1cIik7XG4gIG1vbnRoID0gbW9udGhzW21vbnRoIC0gMV0uc2xpY2UoMCwgMyk7XG5cbiAgaWYgKGRheS5zbGljZSgtMSkgPT0gXCIxXCIpIHtcbiAgICBkYXkgPSBkYXkgKyBcInN0XCI7XG4gIH0gZWxzZSBpZiAoZGF5LnNsaWNlKC0xKSA9PSBcIjJcIikge1xuICAgIGRheSA9IGRheSArIFwibmRcIjtcbiAgfSBlbHNlIGlmIChkYXkuc2xpY2UoLTEpID09IFwiM1wiKSB7XG4gICAgZGF5ID0gZGF5ICsgXCJyZFwiO1xuICB9IGVsc2Uge1xuICAgIGRheSA9IGRheSArIFwidGhcIjtcbiAgfVxuICByZXR1cm4gYCR7ZGF5fSAke21vbnRofWA7XG59XG5cbmZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy9KYW51YXJ5IGlzIDAhXG4gIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gIHJldHVybiBgJHt5eXl5fS0ke21tfS0ke2RkfWA7XG59XG5cbmZ1bmN0aW9uIGdldFRoaXNXZWVrKCkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgKCg2ICsgKDcgLSB0b2RheS5nZXREYXRlKCkpKSAlIDcpKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IGxhc3RNb24gPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpIC0gNSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvL0phbnVhcnkgaXMgMCFcbiAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIFtgJHt5eXl5fS0ke21tfS0ke2xhc3RNb259YCwgYCR7eXl5eX0tJHttbX0tJHtkZH1gXTtcbn1cblxuZnVuY3Rpb24gdGFza3NCb2lsZXJwbGF0ZSgpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcInRhc2tzLWNvbnRhaW5lclwiXSk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhc2tzLXRvb2xiYXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2stYnRuXCI+XG4gICAgICAgICAgTmV3IFRhc2s8aSBjbGFzcz1cImJpIGJpLXBsdXMtY2lyY2xlXCI+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNvcnRpbmdcIj5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzb3J0YnlcIiBpZD1cInNvcnRieVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5hbWVcIj5OYW1lPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhdGVcIj5EYXRlPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwic29ydHR5cGVcIiBpZD1cInNvcnR0eXBlXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+QXNjZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZHNjXCI+RGVzY2VuZGluZzwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxidXR0b24+U29ydDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2tzXCI+XG4gICAgICAgIFxuICAgICAgPC9kaXY+YDtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFzaywgY29udmVydERhdGUsIGdldFRvZGF5RGF0ZSwgZ2V0VGhpc1dlZWssIHRhc2tzQm9pbGVycGxhdGUgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGdldEFsbFRhc2tzLFxuICBsb2FkRnJvbUxvY2FsLFxuICByZW1vdmVGcm9tTG9jYWwsXG4gIHNhdmVUb0xvY2FsLFxuICBnZXRUYXNrRnJvbURCLFxuICB1cGRhdGVTdGF0dXMsXG59IGZyb20gXCIuL2RiXCI7XG5pbXBvcnQgeyBjcmVhdGVXZWxjb21lRGl2LCBjcmVhdGVJbnNpZ2h0c0RpdiB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50LCB7XG4gIGNyZWF0ZVRhc2ssXG4gIGNvbnZlcnREYXRlLFxuICBnZXRUb2RheURhdGUsXG4gIHRhc2tzQm9pbGVycGxhdGUsXG4gIGdldFRoaXNXZWVrLFxufSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIEFkZCBuZXcgdGFzayB0byBET01cbmZ1bmN0aW9uIGFkZFRhc2tUb0RPTShkYXRhKSB7XG4gIGNvbnN0IHJlYWRhYmxlRGF0ZSA9IGNvbnZlcnREYXRlKGRhdGEuZHVlRGF0ZSk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKFxuICAgIGRhdGEudGl0bGUsXG4gICAgcmVhZGFibGVEYXRlLFxuICAgIGRhdGEucHJpb3JpdHksXG4gICAgZGF0YS5zdGF0dXMsXG4gICAgZGF0YS5pZFxuICApO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xufVxuXG5mdW5jdGlvbiBVcGRhdGVUYXNrT25ET00oZGF0YSkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09IGRhdGEuaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgRE9NXCIpO1xuICAgICAgaWYgKGRhdGEudGl0bGUubGVuZ3RoID4gMTgpIGRhdGEudGl0bGUgPSBkYXRhLnRpdGxlLnNsaWNlKDAsIDE3KSArIFwiLi4uXCI7XG4gICAgICB0YXNrLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBkYXRhLnRpdGxlO1xuICAgICAgY29uc3QgcmVhZGFibGVEYXRlID0gY29udmVydERhdGUoZGF0YS5kdWVEYXRlKTtcbiAgICAgIHRhc2suY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudCA9IHJlYWRhYmxlRGF0ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Rm9ybURhdGEoZm9ybSkge1xuICBjb25zdCB0aXRsZSA9IGZvcm0udGl0bGUudmFsdWU7XG4gIGNvbnN0IGlkID0gZm9ybS5pZC52YWx1ZTtcbiAgY29uc3QgZGVzYyA9IGZvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmR1ZWRhdGUudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5wcmlvcml0eS52YWx1ZTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBpZCB9O1xufVxuXG5mdW5jdGlvbiBhZGREYXRhKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBleHRyYWN0Rm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgZGF0YVtcInN0YXR1c1wiXSA9IGZhbHNlO1xuXG4gIGNvbnN0IGlkID0gc2F2ZVRvTG9jYWwoZGF0YSk7XG4gIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMgfSA9IGRhdGE7XG4gIGFkZFRhc2tUb0RPTSh7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBpZCB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGF0YShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZXh0cmFjdEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gIHNhdmVUb0xvY2FsKGRhdGEpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWVkaXRcIikuY2xpY2soKTtcblxuICBVcGRhdGVUYXNrT25ET00oZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRE9NKHRhcmdldCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuXG4gIHJlbW92ZUZyb21Mb2NhbCh0YXJnZXQuaWQpO1xufVxuXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBsZXQgZGF0YSA9IGxvYWRGcm9tTG9jYWwoKTtcbiAgZGF0YSA9IGRhdGEuZmlsdGVyKChkKSA9PiBkLnN0YXR1cyA9PSBmYWxzZSk7XG4gIGNvbnN0IHRhc2tzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0YXNrc1wiXSk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3MpO1xuICBmb3IgKGxldCBkIG9mIGRhdGEpIHtcbiAgICBhZGRUYXNrVG9ET00oZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soaWQpIHtcbiAgY29uc3QgdGFzayA9IGdldFRhc2tGcm9tREIoaWQpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNpZC1tb2RhbC1lZGl0VGFzayBmb3JtXCIpO1xuICBmb3JtWzBdLnZhbHVlID0gaWQ7XG4gIGZvcm1bMV0udmFsdWUgPSB0YXNrLnRpdGxlO1xuICBmb3JtWzJdLnZhbHVlID0gdGFzay5kZXNjO1xuICBmb3JtWzNdLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICBmb3JtWzRdLnZhbHVlID0gdGFzay5wcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMoKSB7XG4gIC8vIFRPRE86IGNyZWF0ZSBvbmx5IGEgc2luZ2xlIGNyZWF0ZSB0YXNrIGJ1dHRvbiBvbiBzaWRlYmFyXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnRhc2tzLXRvb2xiYXIgPiBidXR0b25cIik7XG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi50YXNrID4gc3BhbiA+IC5iaS1wZW5jaWwtc3F1YXJlXCJcbiAgKTtcbiAgY29uc3QgZGVsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzayA+IHNwYW4gPiAuYmktdHJhc2hcIik7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2sgPiBpbnB1dFwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lkLW1vZGFsLXRhc2tcIik7XG5cbiAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuICAgICAgY29uc3Qgc3RhdHVzID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgIHVwZGF0ZVN0YXR1cyhpZCwgc3RhdHVzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZWRpdEJ0bnMuZm9yRWFjaCgoZWRpdCkgPT5cbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbW9kYWxFZGl0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBlZGl0VGFzayhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgIH0pXG4gICk7XG4gIGRlbEJ0bnMuZm9yRWFjaCgoZGVsKSA9PlxuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHJlbW92ZVRhc2tGcm9tRE9NKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgfSlcbiAgKTtcblxuICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwVG9kYXlTY3JlZW4oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzQm9pbGVycGxhdGUoKSk7XG5cbiAgY29uc3QgdGFza3MgPSBnZXRBbGxUYXNrcygpO1xuICBjb25zdCB0b2RheURhdGUgPSBnZXRUb2RheURhdGUoKTtcbiAgY29uc3QgdG9kYXlUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5kdWVEYXRlID09IHRvZGF5RGF0ZSk7XG4gIHRvZGF5VGFza3MubWFwKCh0YXNrKSA9PiBhZGRUYXNrVG9ET00odGFzaykpO1xuICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAvLyBhZGRUYXNrVG9ET00odG9kYXlUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIHNldHVwV2Vla2x5U2NyZWVuKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrc0JvaWxlcnBsYXRlKCkpO1xuXG4gIGNvbnN0IHRhc2tzID0gZ2V0QWxsVGFza3MoKTtcbiAgY29uc3QgW2xhc3RNb25kYXksIG5leHRTYXR1cmRheV0gPSBnZXRUaGlzV2VlaygpO1xuICBjb25zdCB3ZWVrbHlUYXNrcyA9IHRhc2tzLmZpbHRlcihcbiAgICAodGFzaykgPT4gdGFzay5kdWVEYXRlID49IGxhc3RNb25kYXkgJiYgdGFzay5kdWVEYXRlIDw9IG5leHRTYXR1cmRheVxuICApO1xuICB3ZWVrbHlUYXNrcy5tYXAoKHRhc2spID0+IGFkZFRhc2tUb0RPTSh0YXNrKSk7XG4gIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gIC8vIGFkZFRhc2tUb0RPTSh0b2RheVRhc2tzKTtcbiAgLy8gY29uc29sZS5sb2cobmV4dFNhdHVyZGF5KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBIb21lKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc29sZS5sb2coXCJTZXR1cFwiKTtcbiAgLy8gSG9tZSBzZWN0aW9uXG4gIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbXCJob21lLWNvbnRhaW5lclwiXSk7XG4gIHNlY3Rpb24uYXBwZW5kKGNyZWF0ZVdlbGNvbWVEaXYoKSwgY3JlYXRlSW5zaWdodHNEaXYoKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcblxuICBjb25zdCBzZWN0aW9uVGFza3MgPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbXCJ0YXNrcy1jb250YWluZXJcIl0pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb25UYXNrcyk7XG4gIGxvYWRUYXNrcygpO1xuICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG4vLyBJbml0aWFsIFNldHVwXG5mdW5jdGlvbiBzZXR1cERPTSgpIHtcbiAgc2V0dXBIb21lKCk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpZC1tb2RhbC10YXNrXCIpO1xuICBjb25zdCBtb2RhbEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lkLW1vZGFsLWVkaXRUYXNrXCIpO1xuXG4gIC8vIGxvYWRUYXNrcygpO1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcbiAgY29uc3QgY2xvc2VFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1lZGl0XCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2lkLW1vZGFsLXRhc2sgZm9ybVwiKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2lkLW1vZGFsLWVkaXRUYXNrIGZvcm1cIik7XG5cbiAgY29uc3QgdG9kYXlMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcbiAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGNvbnN0IHdlZWtMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrXCIpO1xuXG4gIHRvZGF5TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0dXBUb2RheVNjcmVlbigpO1xuICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gIH0pO1xuICB3ZWVrTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0dXBXZWVrbHlTY3JlZW4oKTtcbiAgICBzZXR1cExpc3RlbmVycygpO1xuICB9KTtcblxuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0dXBIb21lKCk7XG4gIH0pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGREYXRhKTtcbiAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB1cGRhdGVEYXRhKTtcblxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuICBjbG9zZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbW9kYWxFZGl0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT0gbW9kYWxFZGl0KSB7XG4gICAgICBtb2RhbEVkaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNldHVwRE9NKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==