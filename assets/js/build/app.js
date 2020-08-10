/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\njQuery(document).ready(function ($) {\n  $(document).ready(function () {\n    var curPage = 1;\n    var numOfPages = $(\".skw-page\").length;\n    var animTime = 1000;\n    var scrolling = false;\n    var pgPrefix = \".skw-page-\";\n\n    function pagination() {\n      scrolling = true;\n      $(pgPrefix + curPage).removeClass(\"inactive\").addClass(\"active\");\n      $(pgPrefix + (curPage - 1)).addClass(\"inactive\");\n      $(pgPrefix + (curPage + 1)).removeClass(\"active\");\n      setTimeout(function () {\n        scrolling = false;\n      }, animTime);\n    }\n\n    ;\n\n    function navigateUp() {\n      if (curPage === 1) return;\n      curPage--;\n      pagination();\n    }\n\n    ;\n\n    function navigateDown() {\n      if (curPage === numOfPages) return;\n      curPage++;\n      pagination();\n    }\n\n    ;\n    $(document).on(\"mousewheel DOMMouseScroll\", function (e) {\n      if (scrolling) return;\n\n      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {\n        navigateUp();\n      } else {\n        navigateDown();\n      }\n    });\n    $(document).on(\"keydown\", function (e) {\n      if (scrolling) return;\n\n      if (e.which === 38) {\n        navigateUp();\n      } else if (e.which === 40) {\n        navigateDown();\n      }\n    });\n    $(\"#btnnext\").click(function () {\n      navigateDown();\n    });\n    $(\"#btnprev\").click(function () {\n      navigateUp();\n    });\n  }); // First we get the viewport height and we multiple it by 1% to get a value for a vh unit\n\n  var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document\n\n  document.documentElement.style.setProperty('--vh', vh + \"px\"); // We listen to the resize event\n\n  window.addEventListener('resize', function () {\n    // We execute the same script as before\n    var vh = window.innerHeight * 0.01;\n    document.documentElement.style.setProperty('--vh', vh + \"px\");\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/scss/main.scss?");

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./assets/js/app.js ./assets/scss/main.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/app.js */\"./assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! ./assets/scss/main.scss */\"./assets/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/app.js_./assets/scss/main.scss?");

/***/ })

/******/ });