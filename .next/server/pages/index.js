module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/font-hooks.js":
/*!***************************!*\
  !*** ./lib/font-hooks.js ***!
  \***************************/
/*! exports provided: useGoogleFontLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleFontLoader", function() { return useGoogleFontLoader; });
/**
 * A simple hook to Load self-hosted Google Fonts famalies
 *
 * We are use Font Face Observer npm package to load the
 *
 * Fonts need to be served from /public/static
 *
 * @see : https://github.com/bramstein/fontfaceobserver
 *
 */
const FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "fontfaceobserver");

const useGoogleFontLoader = () => {
  const debug = true;
  const baseFontOne = !debug ? "/{sub-domain-goes-here}/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf" : "/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf";
  const baseFontTwo = !debug ? "/{sub-domain-goes-here}/static/fonts/google/oswald/Oswald-VariableFont_wght.ttf" : "/static/fonts/google/oswald/Oswald-VariableFont_wght.ttf";
  console.log(`Font Preload path ${baseFontOne}`);
  const linkOne = document.createElement("link");
  linkOne.href = baseFontOne;
  linkOne.rel = "preload";
  linkOne.as = "font";
  linkOne.type = "font/ttf";
  linkOne.crossOrigin = "anonymous";
  document.head.appendChild(linkOne);
  const linkTwo = document.createElement("link");
  linkTwo.href = baseFontTwo;
  linkTwo.rel = "preload";
  linkTwo.as = "font";
  linkTwo.type = "font/ttf";
  linkTwo.crossOrigin = "anonymous";
  document.head.appendChild(linkTwo);
  LoadTheFonts();
};

const LoadTheFonts = () => {
  var one = new FontFaceObserver("Grandstander Variable");
  var two = new FontFaceObserver("Oswald Variable");
  Promise.all([one.load(), two.load()]).then(() => {
    console.log("The critical fonts are have loaded");
  }).catch(err => {
    console.warn("Some critical font are not available:", err);
  });
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_font_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/font-hooks.js */ "./lib/font-hooks.js");

var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-tailwind-storybook-starter\\pages\\index.js";



const Home = () => {
  const {
    0: isMounted,
    1: setIsMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); //   const googleLicenseInfo = licenseInfo;

  if (isMounted) {
    Object(_lib_font_hooks_js__WEBPACK_IMPORTED_MODULE_2__["useGoogleFontLoader"])();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIsMounted(true); // Set to true when the component is mounted
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      role: "heading",
      "aria-level": "3",
      className: "font-sans p-3 text-2xl text-center text-blue-900 font-bold",
      children: "Welcome Initial Starter Template!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      role: "heading",
      "aria-level": "3",
      className: "italic font-Grandstander-VariableFont p-3 text-center text-blue-900 font-bold",
      children: "Grandstander Fonts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      role: "heading",
      "aria-level": "3",
      className: "font-sans p-3 text-center text-blue-900 font-bold",
      children: "Oswald Fonts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      role: "heading",
      "aria-level": "3",
      className: "font-serif p-3 text-center text-blue-900 font-bold",
      children: "Merriweather Sans Fonts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "fontfaceobserver":
/*!***********************************!*\
  !*** external "fontfaceobserver" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZvbnQtaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9udGZhY2VvYnNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm9udEZhY2VPYnNlcnZlciIsInJlcXVpcmUiLCJ1c2VHb29nbGVGb250TG9hZGVyIiwiZGVidWciLCJiYXNlRm9udE9uZSIsImJhc2VGb250VHdvIiwiY29uc29sZSIsImxvZyIsImxpbmtPbmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwicmVsIiwiYXMiLCJ0eXBlIiwiY3Jvc3NPcmlnaW4iLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJsaW5rVHdvIiwiTG9hZFRoZUZvbnRzIiwib25lIiwidHdvIiwiUHJvbWlzZSIsImFsbCIsImxvYWQiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJ3YXJuIiwiSG9tZSIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7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RTtBQUNFLFVBQUksRUFBQyxTQURQO0FBRUUsb0JBQVcsR0FGYjtBQUdFLGVBQVMsRUFBQyw0REFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQ0UsVUFBSSxFQUFDLFNBRFA7QUFFRSxvQkFBVyxHQUZiO0FBR0UsZUFBUyxFQUFDLCtFQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBZUU7QUFDRSxVQUFJLEVBQUMsU0FEUDtBQUVFLG9CQUFXLEdBRmI7QUFHRSxlQUFTLEVBQUMsbURBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFzQkU7QUFDRSxVQUFJLEVBQUMsU0FEUDtBQUVFLG9CQUFXLEdBRmI7QUFHRSxlQUFTLEVBQUMsb0RBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0NELENBNUNEOztBQThDZUYsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqREEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiLyoqXHJcbiAqIEEgc2ltcGxlIGhvb2sgdG8gTG9hZCBzZWxmLWhvc3RlZCBHb29nbGUgRm9udHMgZmFtYWxpZXNcclxuICpcclxuICogV2UgYXJlIHVzZSBGb250IEZhY2UgT2JzZXJ2ZXIgbnBtIHBhY2thZ2UgdG8gbG9hZCB0aGVcclxuICpcclxuICogRm9udHMgbmVlZCB0byBiZSBzZXJ2ZWQgZnJvbSAvcHVibGljL3N0YXRpY1xyXG4gKlxyXG4gKiBAc2VlIDogaHR0cHM6Ly9naXRodWIuY29tL2JyYW1zdGVpbi9mb250ZmFjZW9ic2VydmVyXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBGb250RmFjZU9ic2VydmVyID0gcmVxdWlyZShcImZvbnRmYWNlb2JzZXJ2ZXJcIik7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR29vZ2xlRm9udExvYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIjtcclxuXHJcbiAgY29uc3QgYmFzZUZvbnRPbmUgPSAhZGVidWdcclxuICAgID8gXCIve3N1Yi1kb21haW4tZ29lcy1oZXJlfS9zdGF0aWMvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci9HcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmXCJcclxuICAgIDogXCIvc3RhdGljL2ZvbnRzL2dvb2dsZS9ncmFuZHN0YW5kZXIvR3JhbmRzdGFuZGVyLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiO1xyXG5cclxuICBjb25zdCBiYXNlRm9udFR3byA9ICFkZWJ1Z1xyXG4gICAgPyBcIi97c3ViLWRvbWFpbi1nb2VzLWhlcmV9L3N0YXRpYy9mb250cy9nb29nbGUvb3N3YWxkL09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIlxyXG4gICAgOiBcIi9zdGF0aWMvZm9udHMvZ29vZ2xlL29zd2FsZC9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmXCI7XHJcblxyXG4gIGNvbnNvbGUubG9nKGBGb250IFByZWxvYWQgcGF0aCAke2Jhc2VGb250T25lfWApO1xyXG5cclxuICBjb25zdCBsaW5rT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgbGlua09uZS5ocmVmID0gYmFzZUZvbnRPbmU7XHJcbiAgbGlua09uZS5yZWwgPSBcInByZWxvYWRcIjtcclxuICBsaW5rT25lLmFzID0gXCJmb250XCI7XHJcbiAgbGlua09uZS50eXBlID0gXCJmb250L3R0ZlwiO1xyXG4gIGxpbmtPbmUuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xyXG5cclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtPbmUpO1xyXG5cclxuICBjb25zdCBsaW5rVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgbGlua1R3by5ocmVmID0gYmFzZUZvbnRUd287XHJcbiAgbGlua1R3by5yZWwgPSBcInByZWxvYWRcIjtcclxuICBsaW5rVHdvLmFzID0gXCJmb250XCI7XHJcbiAgbGlua1R3by50eXBlID0gXCJmb250L3R0ZlwiO1xyXG4gIGxpbmtUd28uY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xyXG5cclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUd28pO1xyXG5cclxuICBMb2FkVGhlRm9udHMoKTtcclxufTtcclxuXHJcbmNvbnN0IExvYWRUaGVGb250cyA9ICgpID0+IHtcclxuICB2YXIgb25lID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoXCJHcmFuZHN0YW5kZXIgVmFyaWFibGVcIik7XHJcbiAgdmFyIHR3byA9IG5ldyBGb250RmFjZU9ic2VydmVyKFwiT3N3YWxkIFZhcmlhYmxlXCIpO1xyXG5cclxuICBQcm9taXNlLmFsbChbb25lLmxvYWQoKSwgdHdvLmxvYWQoKV0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGNyaXRpY2FsIGZvbnRzIGFyZSBoYXZlIGxvYWRlZFwiKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJTb21lIGNyaXRpY2FsIGZvbnQgYXJlIG5vdCBhdmFpbGFibGU6XCIsIGVycik7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VHb29nbGVGb250TG9hZGVyIH0gZnJvbSBcIi4uL2xpYi9mb250LWhvb2tzLmpzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gICBjb25zdCBnb29nbGVMaWNlbnNlSW5mbyA9IGxpY2Vuc2VJbmZvO1xyXG5cclxuICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICB1c2VHb29nbGVGb250TG9hZGVyKCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNNb3VudGVkKHRydWUpOyAvLyBTZXQgdG8gdHJ1ZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgPGgxXHJcbiAgICAgICAgcm9sZT1cImhlYWRpbmdcIlxyXG4gICAgICAgIGFyaWEtbGV2ZWw9XCIzXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJmb250LXNhbnMgcC0zIHRleHQtMnhsIHRleHQtY2VudGVyIHRleHQtYmx1ZS05MDAgZm9udC1ib2xkXCJcclxuICAgICAgPlxyXG4gICAgICAgIFdlbGNvbWUgSW5pdGlhbCBTdGFydGVyIFRlbXBsYXRlIVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8aDNcclxuICAgICAgICByb2xlPVwiaGVhZGluZ1wiXHJcbiAgICAgICAgYXJpYS1sZXZlbD1cIjNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIml0YWxpYyBmb250LUdyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnQgcC0zIHRleHQtY2VudGVyIHRleHQtYmx1ZS05MDAgZm9udC1ib2xkXCJcclxuICAgICAgPlxyXG4gICAgICAgIEdyYW5kc3RhbmRlciBGb250c1xyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDNcclxuICAgICAgICByb2xlPVwiaGVhZGluZ1wiXHJcbiAgICAgICAgYXJpYS1sZXZlbD1cIjNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2FucyBwLTMgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTkwMCBmb250LWJvbGRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgT3N3YWxkIEZvbnRzXHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoM1xyXG4gICAgICAgIHJvbGU9XCJoZWFkaW5nXCJcclxuICAgICAgICBhcmlhLWxldmVsPVwiM1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiBwLTMgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTkwMCBmb250LWJvbGRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTWVycml3ZWF0aGVyIFNhbnMgRm9udHNcclxuICAgICAgPC9oMz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb250ZmFjZW9ic2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9