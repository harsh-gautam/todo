/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _htmlUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlUtility */ "./src/htmlUtility.js");


function createCard(title, subtext, classes = [], id = "") {
  const card = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["card", ...classes]);
  const cardTitle = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", []);
  cardTitle.textContent = title;
  const cardSubtext = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("p", []);
  cardSubtext.textContent = subtext;
  card.append(cardTitle, cardSubtext);

  return card;
}

function createWelcomeDiv() {
  // welcome div
  const h1 = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("h1", []);
  h1.textContent = "Good Morning";

  const h2 = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("h2", []);
  h2.textContent = "Harsh Gautam";

  const welcomeDiv = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["welcome-text"]);
  welcomeDiv.append(h1, h2);

  return welcomeDiv;
}

function createButtonGroup() {
  const iTag = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("i", ["bi", "bi-plus-circle"]);

  //task button
  const btnTask = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("button", ["create-task"]);
  btnTask.append(iTag, "Task");

  //workspace button
  const btnWorkspace = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("button", ["create-workspace"]);
  btnWorkspace.append(iTag.cloneNode(), "Workspace");

  // buttons group
  const btnGroup = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["btn-group"]);
  btnGroup.append(btnTask, btnWorkspace);

  return btnGroup;
}

function createInsightsDiv() {
  // Insights div
  const todayCard = createCard("Today", "3 tasks pending");
  const weekCard = createCard("This Week", "12 tasks pending");
  const project1Card = createCard("Project 1", "21 tasks pending");
  const project2Card = createCard("Project 2", "13 tasks pending");

  const insightsDiv = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", ["insights"]);
  insightsDiv.append(todayCard, weekCard, project1Card, project2Card);

  return insightsDiv;
}




/***/ }),

/***/ "./src/htmlUtility.js":
/*!****************************!*\
  !*** ./src/htmlUtility.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

function createFragment() {
  return document.createDocumentFragment();
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _htmlUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlUtility */ "./src/htmlUtility.js");



function showModal() {
  const modal = document.querySelector("#id-modal-task");
  modal.style.display = "block";
}

const createTask = document.querySelector("div.tasks-toolbar > button");
createTask.addEventListener("click", showModal);

function setupHome() {
  console.log("Setup");
  // Home section
  const section = (0,_htmlUtility__WEBPACK_IMPORTED_MODULE_1__["default"])("section", ["home"]);
  section.append((0,_home__WEBPACK_IMPORTED_MODULE_0__.createWelcomeDiv)(), (0,_home__WEBPACK_IMPORTED_MODULE_0__.createButtonGroup)(), (0,_home__WEBPACK_IMPORTED_MODULE_0__.createInsightsDiv)());

  const container = document.querySelector(".container");
  container.appendChild(section);
}

// document.addEventListener("DOMContentLoaded", setupHome);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQzs7QUFFMUM7QUFDQSxlQUFlLHdEQUFhO0FBQzVCLG9CQUFvQix3REFBYTtBQUNqQztBQUNBLHNCQUFzQix3REFBYTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsd0RBQWE7QUFDMUI7O0FBRUEsYUFBYSx3REFBYTtBQUMxQjs7QUFFQSxxQkFBcUIsd0RBQWE7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsd0RBQWE7O0FBRTVCO0FBQ0Esa0JBQWtCLHdEQUFhO0FBQy9COztBQUVBO0FBQ0EsdUJBQXVCLHdEQUFhO0FBQ3BDOztBQUVBO0FBQ0EsbUJBQW1CLHdEQUFhO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix3REFBYTtBQUNuQzs7QUFFQTtBQUNBOztBQUU4RTs7Ozs7Ozs7Ozs7Ozs7O0FDMUQ5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7O1VDZjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdGO0FBQ3RDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3REFBYTtBQUMvQixpQkFBaUIsdURBQWdCLElBQUksd0RBQWlCLElBQUksd0RBQWlCOztBQUUzRTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9odG1sVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9odG1sVXRpbGl0eVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHRpdGxlLCBzdWJ0ZXh0LCBjbGFzc2VzID0gW10sIGlkID0gXCJcIikge1xuICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjYXJkXCIsIC4uLmNsYXNzZXNdKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gY3JlYXRlRWxlbWVudChcImgzXCIsIFtdKTtcbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGNvbnN0IGNhcmRTdWJ0ZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgW10pO1xuICBjYXJkU3VidGV4dC50ZXh0Q29udGVudCA9IHN1YnRleHQ7XG4gIGNhcmQuYXBwZW5kKGNhcmRUaXRsZSwgY2FyZFN1YnRleHQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lRGl2KCkge1xuICAvLyB3ZWxjb21lIGRpdlxuICBjb25zdCBoMSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBbXSk7XG4gIGgxLnRleHRDb250ZW50ID0gXCJHb29kIE1vcm5pbmdcIjtcblxuICBjb25zdCBoMiA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbXSk7XG4gIGgyLnRleHRDb250ZW50ID0gXCJIYXJzaCBHYXV0YW1cIjtcblxuICBjb25zdCB3ZWxjb21lRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3ZWxjb21lLXRleHRcIl0pO1xuICB3ZWxjb21lRGl2LmFwcGVuZChoMSwgaDIpO1xuXG4gIHJldHVybiB3ZWxjb21lRGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Hcm91cCgpIHtcbiAgY29uc3QgaVRhZyA9IGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImJpXCIsIFwiYmktcGx1cy1jaXJjbGVcIl0pO1xuXG4gIC8vdGFzayBidXR0b25cbiAgY29uc3QgYnRuVGFzayA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY3JlYXRlLXRhc2tcIl0pO1xuICBidG5UYXNrLmFwcGVuZChpVGFnLCBcIlRhc2tcIik7XG5cbiAgLy93b3Jrc3BhY2UgYnV0dG9uXG4gIGNvbnN0IGJ0bldvcmtzcGFjZSA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiY3JlYXRlLXdvcmtzcGFjZVwiXSk7XG4gIGJ0bldvcmtzcGFjZS5hcHBlbmQoaVRhZy5jbG9uZU5vZGUoKSwgXCJXb3Jrc3BhY2VcIik7XG5cbiAgLy8gYnV0dG9ucyBncm91cFxuICBjb25zdCBidG5Hcm91cCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYnRuLWdyb3VwXCJdKTtcbiAgYnRuR3JvdXAuYXBwZW5kKGJ0blRhc2ssIGJ0bldvcmtzcGFjZSk7XG5cbiAgcmV0dXJuIGJ0bkdyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnNpZ2h0c0RpdigpIHtcbiAgLy8gSW5zaWdodHMgZGl2XG4gIGNvbnN0IHRvZGF5Q2FyZCA9IGNyZWF0ZUNhcmQoXCJUb2RheVwiLCBcIjMgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3Qgd2Vla0NhcmQgPSBjcmVhdGVDYXJkKFwiVGhpcyBXZWVrXCIsIFwiMTIgdGFza3MgcGVuZGluZ1wiKTtcbiAgY29uc3QgcHJvamVjdDFDYXJkID0gY3JlYXRlQ2FyZChcIlByb2plY3QgMVwiLCBcIjIxIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHByb2plY3QyQ2FyZCA9IGNyZWF0ZUNhcmQoXCJQcm9qZWN0IDJcIiwgXCIxMyB0YXNrcyBwZW5kaW5nXCIpO1xuXG4gIGNvbnN0IGluc2lnaHRzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJpbnNpZ2h0c1wiXSk7XG4gIGluc2lnaHRzRGl2LmFwcGVuZCh0b2RheUNhcmQsIHdlZWtDYXJkLCBwcm9qZWN0MUNhcmQsIHByb2plY3QyQ2FyZCk7XG5cbiAgcmV0dXJuIGluc2lnaHRzRGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVXZWxjb21lRGl2LCBjcmVhdGVCdXR0b25Hcm91cCwgY3JlYXRlSW5zaWdodHNEaXYsIGNyZWF0ZUNhcmQgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NlcyA9IFtdLCBpZCA9IFwiXCIpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAobGV0IGNscyBvZiBjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gIH1cbiAgaWYgKGlkICE9PSB1bmRlZmluZWQgfHwgaWQgIT09IFwiXCIgfHwgaWQgIT09IG51bGwpIHtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVCdXR0b25Hcm91cCwgY3JlYXRlV2VsY29tZURpdiwgY3JlYXRlSW5zaWdodHNEaXYgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9odG1sVXRpbGl0eVwiO1xuXG5mdW5jdGlvbiBzaG93TW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpZC1tb2RhbC10YXNrXCIpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5jb25zdCBjcmVhdGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi50YXNrcy10b29sYmFyID4gYnV0dG9uXCIpO1xuY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01vZGFsKTtcblxuZnVuY3Rpb24gc2V0dXBIb21lKCkge1xuICBjb25zb2xlLmxvZyhcIlNldHVwXCIpO1xuICAvLyBIb21lIHNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcImhvbWVcIl0pO1xuICBzZWN0aW9uLmFwcGVuZChjcmVhdGVXZWxjb21lRGl2KCksIGNyZWF0ZUJ1dHRvbkdyb3VwKCksIGNyZWF0ZUluc2lnaHRzRGl2KCkpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG59XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNldHVwSG9tZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=