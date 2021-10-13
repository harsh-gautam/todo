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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQzs7QUFFMUM7QUFDQSxlQUFlLHdEQUFhO0FBQzVCLG9CQUFvQix3REFBYTtBQUNqQztBQUNBLHNCQUFzQix3REFBYTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsd0RBQWE7QUFDMUI7O0FBRUEsYUFBYSx3REFBYTtBQUMxQjs7QUFFQSxxQkFBcUIsd0RBQWE7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsd0RBQWE7O0FBRTVCO0FBQ0Esa0JBQWtCLHdEQUFhO0FBQy9COztBQUVBO0FBQ0EsdUJBQXVCLHdEQUFhO0FBQ3BDOztBQUVBO0FBQ0EsbUJBQW1CLHdEQUFhO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix3REFBYTtBQUNuQzs7QUFFQTtBQUNBOztBQUU4RTs7Ozs7Ozs7Ozs7Ozs7O0FDMUQ5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7O1VDZjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdGO0FBQ3RDOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQWE7QUFDL0IsaUJBQWlCLHVEQUFnQixJQUFJLHdEQUFpQixJQUFJLHdEQUFpQjs7QUFFM0U7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaHRtbFV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vaHRtbFV0aWxpdHlcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZCh0aXRsZSwgc3VidGV4dCwgY2xhc3NlcyA9IFtdLCBpZCA9IFwiXCIpIHtcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2FyZFwiLCAuLi5jbGFzc2VzXSk7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBbXSk7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBjb25zdCBjYXJkU3VidGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtdKTtcbiAgY2FyZFN1YnRleHQudGV4dENvbnRlbnQgPSBzdWJ0ZXh0O1xuICBjYXJkLmFwcGVuZChjYXJkVGl0bGUsIGNhcmRTdWJ0ZXh0KTtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VsY29tZURpdigpIHtcbiAgLy8gd2VsY29tZSBkaXZcbiAgY29uc3QgaDEgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgW10pO1xuICBoMS50ZXh0Q29udGVudCA9IFwiR29vZCBNb3JuaW5nXCI7XG5cbiAgY29uc3QgaDIgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgW10pO1xuICBoMi50ZXh0Q29udGVudCA9IFwiSGFyc2ggR2F1dGFtXCI7XG5cbiAgY29uc3Qgd2VsY29tZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid2VsY29tZS10ZXh0XCJdKTtcbiAgd2VsY29tZURpdi5hcHBlbmQoaDEsIGgyKTtcblxuICByZXR1cm4gd2VsY29tZURpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uR3JvdXAoKSB7XG4gIGNvbnN0IGlUYWcgPSBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJiaVwiLCBcImJpLXBsdXMtY2lyY2xlXCJdKTtcblxuICAvL3Rhc2sgYnV0dG9uXG4gIGNvbnN0IGJ0blRhc2sgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImNyZWF0ZS10YXNrXCJdKTtcbiAgYnRuVGFzay5hcHBlbmQoaVRhZywgXCJUYXNrXCIpO1xuXG4gIC8vd29ya3NwYWNlIGJ1dHRvblxuICBjb25zdCBidG5Xb3Jrc3BhY2UgPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImNyZWF0ZS13b3Jrc3BhY2VcIl0pO1xuICBidG5Xb3Jrc3BhY2UuYXBwZW5kKGlUYWcuY2xvbmVOb2RlKCksIFwiV29ya3NwYWNlXCIpO1xuXG4gIC8vIGJ1dHRvbnMgZ3JvdXBcbiAgY29uc3QgYnRuR3JvdXAgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJ0bi1ncm91cFwiXSk7XG4gIGJ0bkdyb3VwLmFwcGVuZChidG5UYXNrLCBidG5Xb3Jrc3BhY2UpO1xuXG4gIHJldHVybiBidG5Hcm91cDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5zaWdodHNEaXYoKSB7XG4gIC8vIEluc2lnaHRzIGRpdlxuICBjb25zdCB0b2RheUNhcmQgPSBjcmVhdGVDYXJkKFwiVG9kYXlcIiwgXCIzIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHdlZWtDYXJkID0gY3JlYXRlQ2FyZChcIlRoaXMgV2Vla1wiLCBcIjEyIHRhc2tzIHBlbmRpbmdcIik7XG4gIGNvbnN0IHByb2plY3QxQ2FyZCA9IGNyZWF0ZUNhcmQoXCJQcm9qZWN0IDFcIiwgXCIyMSB0YXNrcyBwZW5kaW5nXCIpO1xuICBjb25zdCBwcm9qZWN0MkNhcmQgPSBjcmVhdGVDYXJkKFwiUHJvamVjdCAyXCIsIFwiMTMgdGFza3MgcGVuZGluZ1wiKTtcblxuICBjb25zdCBpbnNpZ2h0c0RpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiaW5zaWdodHNcIl0pO1xuICBpbnNpZ2h0c0Rpdi5hcHBlbmQodG9kYXlDYXJkLCB3ZWVrQ2FyZCwgcHJvamVjdDFDYXJkLCBwcm9qZWN0MkNhcmQpO1xuXG4gIHJldHVybiBpbnNpZ2h0c0Rpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlV2VsY29tZURpdiwgY3JlYXRlQnV0dG9uR3JvdXAsIGNyZWF0ZUluc2lnaHRzRGl2LCBjcmVhdGVDYXJkIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzZXMgPSBbXSwgaWQgPSBcIlwiKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBmb3IgKGxldCBjbHMgb2YgY2xhc3Nlcykge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMpO1xuICB9XG4gIGlmIChpZCAhPT0gdW5kZWZpbmVkIHx8IGlkICE9PSBcIlwiIHx8IGlkICE9PSBudWxsKSB7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uR3JvdXAsIGNyZWF0ZVdlbGNvbWVEaXYsIGNyZWF0ZUluc2lnaHRzRGl2IH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vaHRtbFV0aWxpdHlcIjtcblxuZnVuY3Rpb24gc2V0dXBIb21lKCkge1xuICBjb25zb2xlLmxvZyhcIlNldHVwXCIpO1xuICAvLyBIb21lIHNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcImhvbWVcIl0pO1xuICBzZWN0aW9uLmFwcGVuZChjcmVhdGVXZWxjb21lRGl2KCksIGNyZWF0ZUJ1dHRvbkdyb3VwKCksIGNyZWF0ZUluc2lnaHRzRGl2KCkpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG59XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNldHVwSG9tZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=