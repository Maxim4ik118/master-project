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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_11/lesson_11.js":
/*!************************************!*\
  !*** ./src/lesson_11/lesson_11.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_11.scss */ "./src/lesson_11/lesson_11.scss");
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/button */ "./src/lesson_11/scripts/button.js");
/* harmony import */ var _scripts_trafficLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/trafficLight */ "./src/lesson_11/scripts/trafficLight.js");
/* harmony import */ var _scripts_trafficLight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_trafficLight__WEBPACK_IMPORTED_MODULE_2__);



var test = [];

function showModal() {
  var str = prompt('Enter text');
  test.push(str);
}

var btn1 = new _scripts_button__WEBPACK_IMPORTED_MODULE_1__["Button"]('Hello ', showModal);

/***/ }),

/***/ "./src/lesson_11/lesson_11.scss":
/*!**************************************!*\
  !*** ./src/lesson_11/lesson_11.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_11/scripts/button.js":
/*!*****************************************!*\
  !*** ./src/lesson_11/scripts/button.js ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
function Button(text, clickHandler) {
  this.target = document.querySelector('body');
  this.btn = document.createElement('button'); // создание елемента дом дерева

  this.btn.classList.add('btn');
  this.btn.textContent = text;
  this.btn.onclick = clickHandler;
  this.target.appendChild(this.btn); // вставка елемента
}



/***/ }),

/***/ "./src/lesson_11/scripts/trafficLight.js":
/*!***********************************************!*\
  !*** ./src/lesson_11/scripts/trafficLight.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\homeworks-master\\src\\lesson_11\\scripts\\trafficLight.js: Unexpected token (17:1)\n\n\u001b[0m \u001b[90m 15 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 17 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Object.raise (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:3851:17)\n    at Object.unexpected (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:5167:16)\n    at Object.parseExprAtom (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:6328:20)\n    at Object.parseExprAtom (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:3570:20)\n    at Object.parseExprSubscripts (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:5914:23)\n    at Object.parseMaybeUnary (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:5894:21)\n    at Object.parseExprOps (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:5781:23)\n    at Object.parseMaybeConditional (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:5754:23)\n    at Object.parseMaybeAssign (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:5701:21)\n    at Object.parseExpression (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:5649:23)\n    at Object.parseStatementContent (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7420:23)\n    at Object.parseStatement (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7868:25)\n    at Object.parseBlockBody (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7855:10)\n    at Object.parseBlock (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7839:10)\n    at Object.parseFunctionBody (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:6909:24)\n    at Object.parseFunctionBodyAndFinish (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:6879:10)\n    at withTopicForbiddingContext (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:8006:12)\n    at Object.withTopicForbiddingContext (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7185:14)\n    at Object.parseFunction (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:8005:10)\n    at Object.parseFunctionStatement (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7639:17)\n    at Object.parseStatementContent (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7329:21)\n    at Object.parseStatement (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7868:25)\n    at Object.parseBlockBody (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7855:10)\n    at Object.parseTopLevel (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:7220:10)\n    at Object.parse (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:8863:17)\n    at parse (C:\\homeworks-master\\node_modules\\@babel\\parser\\lib\\index.js:11135:38)\n    at parser (C:\\homeworks-master\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:170:34)\n    at normalizeFile (C:\\homeworks-master\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:138:11)");

/***/ }),

/***/ 7:
/*!******************************************!*\
  !*** multi ./src/lesson_11/lesson_11.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_11/lesson_11.js */"./src/lesson_11/lesson_11.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_11.js.map