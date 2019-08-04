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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_12/lesson_12.js":
/*!************************************!*\
  !*** ./src/lesson_12/lesson_12.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_12_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_12.scss */ "./src/lesson_12/lesson_12.scss");
/* harmony import */ var _lesson_12_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_12_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_treafficLighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/treafficLighter */ "./src/lesson_12/scripts/treafficLighter.js");


var test = [];
var lighter = new _scripts_treafficLighter__WEBPACK_IMPORTED_MODULE_1__["TrafficLighter"](document.querySelector('.container'));
var lighter2 = new _scripts_treafficLighter__WEBPACK_IMPORTED_MODULE_1__["TrafficLighter"](document.querySelector('.container'));
console.log(lighter);
window.lighter = lighter;

/***/ }),

/***/ "./src/lesson_12/lesson_12.scss":
/*!**************************************!*\
  !*** ./src/lesson_12/lesson_12.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_12/scripts/treafficLighter.js":
/*!**************************************************!*\
  !*** ./src/lesson_12/scripts/treafficLighter.js ***!
  \**************************************************/
/*! exports provided: TrafficLighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLighter", function() { return TrafficLighter; });
function TrafficLighter(targetElement) {
  this.targetElement = targetElement;
  this.colors = ['red', 'yellow', 'green'];
  this.lights = [];
  this.lighter;
  this.render();
  this.renderLights();
}

TrafficLighter.prototype.render = function render() {
  this.lighter = document.createElement('div');
  this.lighter.classList.add('traffic-lighter');
  this.lighter.id = 'lighter1';
  this.targetElement.appendChild(this.lighter);
};

TrafficLighter.prototype.renderLights = function renderLights() {
  var _this = this;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var color = _step.value;
      var light = document.createElement('button');
      light.classList.add('traffic-lighter__light', "traffic-lighter__light_".concat(color));
      var otherContext = _this;

      light.onclick = function () {
        console.log(_this);

        _this.toggleOffAll();

        light.classList.add('active');
      };

      _this.lights.push(light);

      _this.lighter.appendChild(light);
    };

    for (var _iterator = this.colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

TrafficLighter.prototype.toggleOffAll = function toggleOffAll() {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = this.lights[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var light = _step2.value;
      light.classList.remove('active');
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

TrafficLighter.prototype.toggle = function toggle(light) {};

TrafficLighter.prototype.disable = function disable() {
  this.toggleOffAll();
};



/***/ }),

/***/ 8:
/*!******************************************!*\
  !*** multi ./src/lesson_12/lesson_12.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_12/lesson_12.js */"./src/lesson_12/lesson_12.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_12.js.map