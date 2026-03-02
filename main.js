/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage)\n/* harmony export */ });\nfunction createAboutPage() {\n    const section = document.createElement(\"section\");\n    section.classList.add(\"fade-in-content\");\n    section.setAttribute(\"aria-labelledby\", \"about-title\");\n\n    const title = document.createElement(\"h1\");\n    title.id = \"about-title\";\n    title.textContent = \"About Our Journey\";\n\n    const contentWrapper = document.createElement(\"div\");\n    contentWrapper.className = \"about-grid\";\n\n    const bio = document.createElement(\"p\");\n    bio.textContent = \"The Golden Spatula started as a small family dream. Today, it stands as a testament to the power of fresh ingredients and a welcoming atmosphere.\";\n\n    const contactInfo = document.createElement(\"address\");\n    contactInfo.innerHTML = `\n        <h3>Contact Us</h3>\n        <p>📍 123 Flavor Street, Culinary District</p>\n        <p>📞 <a href=\"tel:+15551234567\">(555) 123-4567</a></p>\n        <p>✉️ <a href=\"mailto:hello@goldenspatula.com\">hello@goldenspatula.com</a></p>\n    `;\n\n    contentWrapper.append(bio, contactInfo);\n    section.append(title, contentWrapper);\n\n    return section;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-page-load.js */ \"./src/initial-page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nconst contentArea = document.querySelector(\"#content\");\nconst navButtons = document.querySelectorAll(\"nav button\");\n\nconst routes = {\n    \"Home\": _initial_page_load_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage,\n    \"Menu\": _menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPage,\n    \"About\": _about_js__WEBPACK_IMPORTED_MODULE_3__.createAboutPage\n};\n\nfunction renderTab(tabName) {\n    contentArea.innerHTML = \"\";\n\n    if (routes[tabName]) {\n        const pageElement = routes[tabName]();\n        contentArea.appendChild(pageElement);\n    }\n\n    navButtons.forEach(btn => {\n        const isSelected = btn.textContent === tabName;\n        btn.setAttribute(\"aria-selected\", isSelected);\n        btn.classList.toggle(\"active\", isSelected);\n    });\n}\n\ndocument.querySelector(\"nav\").addEventListener(\"click\", (e) => {\n    if (e.target.tagName === \"BUTTON\") {\n        renderTab(e.target.textContent);\n    }\n});\n\nrenderTab(\"Home\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/initial-page-load.js"
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage() {\n    const section = document.createElement(\"section\");\n    section.classList.add(\"fade-in-content\");\n    section.setAttribute(\"aria-labelledby\", \"home-title\");\n\n    const headline = document.createElement(\"h1\");\n    headline.id = \"home-title\";\n    headline.textContent = \"The Golden Spatula\";\n\n    const imageContainer = document.createElement(\"div\");\n    imageContainer.className = \"hero-image-wrapper\";\n\n    const image = document.createElement(\"img\");\n    image.src = \"https://images.unsplash.com/photo-1765099271664-614c541196ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\";\n    image.alt = \"Cozy restaurant interior\";\n    image.setAttribute(\"loading\", \"eager\");\n    imageContainer.appendChild(image);\n\n    const description = document.createElement(\"p\");\n    description.className = \"load-text\";\n    description.textContent = \"Where every bite tells a story of flavor and tradition. Founded in 1998, we bring farm-to-table excellence to your neighborhood.\";\n\n    section.append(headline, imageContainer, description);\n\n    return section;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/initial-page-load.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\nfunction createMenuPage() {\n    const container = document.createElement(\"section\");\n    container.classList.add(\"fade-in-content\");\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Our Menu\";\n\n    const grid = document.createElement(\"div\");\n    grid.className = \"menu-grid\";\n\n    const items = [\n        { name: \"Golden Pancakes\", price: \"€12\", desc: \"Fluffy and bright.\" },\n        { name: \"Spatula Burger\", price: \"€15\", desc: \"Signature beef blend.\" }\n    ];\n\n    items.forEach(item => {\n        const card = document.createElement(\"article\");\n        card.innerHTML = `\n            <h3>${item.name}</h3>\n            <p>${item.desc}</p>\n            <span>${item.price}</span>\n        `;\n        grid.appendChild(card);\n    });\n\n    container.append(title, grid);\n    return container;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;