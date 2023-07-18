/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/calculateAge.js":
/*!*************************************!*\
  !*** ./src/modules/calculateAge.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validatesDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validatesDate */ "./src/modules/validatesDate.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var today = new Date();
  var ageYears = today.getFullYear() - _validatesDate__WEBPACK_IMPORTED_MODULE_0__.dateUser.getFullYear();
  var ageMonths = today.getMonth() - _validatesDate__WEBPACK_IMPORTED_MODULE_0__.dateUser.getMonth();
  var ageDay = today.getDate() - _validatesDate__WEBPACK_IMPORTED_MODULE_0__.dateUser.getDate();
  if (ageMonths < 0 || ageMonths === 0 && ageDay < 0) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDay < 0) {
    var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    ageDay = lastMonth.getDate() - _validatesDate__WEBPACK_IMPORTED_MODULE_0__.dateUser.getDate() + today.getDate();
    ageMonths--;
  }
  var age = {
    years: ageYears,
    months: ageMonths,
    days: ageDay
  };
  function showAge() {
    var i = 0;
    var ageList = document.querySelectorAll('.dynamic-line');
    var ageArr = Object.values(age);
    console.log(ageArr);
    var _iterator = _createForOfIteratorHelper(ageList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _showAge = _step.value;
        _showAge.innerHTML = ageArr[i];
        _showAge.classList.add('result-color');
        i++;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  showAge();
}

/***/ }),

/***/ "./src/modules/handleErros.js":
/*!************************************!*\
  !*** ./src/modules/handleErros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   day: () => (/* binding */ day),
/* harmony export */   "default": () => (/* binding */ handleErrors),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   generatesError: () => (/* binding */ generatesError),
/* harmony export */   inputs: () => (/* binding */ inputs),
/* harmony export */   month: () => (/* binding */ month),
/* harmony export */   year: () => (/* binding */ year)
/* harmony export */ });
/* harmony import */ var _validatesDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validatesDate */ "./src/modules/validatesDate.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var day = document.querySelector('#day');
var month = document.querySelector('#month');
var year = document.querySelector('#year');
var inputs = document.querySelectorAll('.inputs');
var form = document.querySelector('.form');
function handleErrors() {
  var valid = true;
  var _iterator = _createForOfIteratorHelper(form.querySelectorAll('.error-text')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var errorTxt = _step.value;
      errorTxt.remove();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(inputs),
    _step2;
  try {
    var _loop = function _loop() {
      var field = _step2.value;
      var label = field.previousElementSibling.innerText;
      function invalidField() {
        if (field.value.length <= 0) {
          generatesError(field, "".concat(label, " is empty"));
          return valid = false;
        } else if (isNaN(parseInt(day.value)) || isNaN(parseInt(month.value)) || isNaN(parseInt(year.value))) {
          generatesError(field, "Enter a number");
          return valid = false;
        }
      }
      invalidField();
      function isDateInvalid() {
        if (field === inputs[2] && (parseInt(year.value) <= 0 || parseInt(year.value) > _validatesDate__WEBPACK_IMPORTED_MODULE_0__.currentDate)) {
          generatesError(field, "".concat(label, " invalid")); // ano deve estar entre 00 e 99
          return valid = false;
        }
        ;
        if (field === inputs[1] && (parseInt(month.value) < 1 || parseInt(month.value) > 12)) {
          generatesError(field, "".concat(label, " invalid")); // mês deve estar entre 01 e 12
          return valid = false;
        }
        ;
        if (field === inputs[0] && (parseInt(day.value) < 1 || parseInt(day.value) > 31)) {
          generatesError(field, "".concat(label, " invalid")); // dia deve estar entre 01 e 31
          return valid = false;
        }
        ;
        if (field === inputs[1] && (parseInt(month.value) === 4 || parseInt(month.value) === 6 || parseInt(month.value) === 9 || parseInt(month.value) === 11) && parseInt(day.value) > 30) {
          generatesError(field, "".concat(label, " Month with 30 days")); // meses com 30 dias
          return valid = false;
        }
        if (field === inputs[1] && parseInt(month.value) === 2) {
          var leapYear = parseInt(year.value) % 4 === 0 && (parseInt(year.value) % 100 !== 0 || parseInt(year.value) % 400 === 0);
          if (leapYear && parseInt(day.value) > 29) {
            generatesError(field, "".concat(label, " February with 29 days")); // fevereiro com 28 ou 29 dias
            return valid = false;
          }
          if (!leapYear && parseInt(day.value) > 28) {
            generatesError(field, "".concat(label, " February with 28 days"));
            return valid = false;
          }
        }
      }
      isDateInvalid();
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return valid;
}
function generatesError(field, text) {
  var div = document.createElement('div');
  div.classList.add('error-text');
  div.innerHTML = text;
  field.classList.add('error-inputs');
  field.insertAdjacentElement('afterend', div);
}

/***/ }),

/***/ "./src/modules/validatesDate.js":
/*!**************************************!*\
  !*** ./src/modules/validatesDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentDate: () => (/* binding */ currentDate),
/* harmony export */   dateUser: () => (/* binding */ dateUser),
/* harmony export */   validateAge: () => (/* binding */ validateAge)
/* harmony export */ });
/* harmony import */ var _handleErros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleErros */ "./src/modules/handleErros.js");
/* harmony import */ var _calculateAge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateAge */ "./src/modules/calculateAge.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//Criar um modulo para verificar se a data é valida, trabalhando com a data no formato aceito peloJS.

//Criar outro módulo que lançará os erros, ou seja, verificará o que cada input está recebendo e lançará um erro caso seja algo que não queremos.

// A variável dateUser é do tipo Date, e um objeto Date válido sempre será considerado "truthy" em uma expressão booleana, mesmo que a data seja inválida. Portanto, !dateUser nunca será avaliado como true, mesmo para datas inválidas.




var dateUser;
var currentDate;
function validateAge(year, month, day) {
  dateUser = new Date("".concat(year, "-").concat(month, "-").concat(day, "T00:00:00-03:00"));
  console.log(dateUser);
  currentDate = new Date().getFullYear();
  var _iterator = _createForOfIteratorHelper(_handleErros__WEBPACK_IMPORTED_MODULE_0__.form.querySelectorAll('.error-text')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var errorTxt = _step.value;
      errorTxt.remove();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(_handleErros__WEBPACK_IMPORTED_MODULE_0__.form.querySelectorAll('.error-inputs')),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var errorInput = _step2.value;
      errorInput.classList.remove('error-inputs');
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (_handleErros__WEBPACK_IMPORTED_MODULE_0__.day.value.length < 2 || _handleErros__WEBPACK_IMPORTED_MODULE_0__.day.value.length > 2) {
    return (0,_handleErros__WEBPACK_IMPORTED_MODULE_0__.generatesError)(_handleErros__WEBPACK_IMPORTED_MODULE_0__.day, "Day invalid");
  }
  if (_handleErros__WEBPACK_IMPORTED_MODULE_0__.month.value.length < 2 || _handleErros__WEBPACK_IMPORTED_MODULE_0__.month.value.length > 2) {
    return (0,_handleErros__WEBPACK_IMPORTED_MODULE_0__.generatesError)(_handleErros__WEBPACK_IMPORTED_MODULE_0__.month, "Month invalid");
  }
  if (_handleErros__WEBPACK_IMPORTED_MODULE_0__.year.value.length < 4 || _handleErros__WEBPACK_IMPORTED_MODULE_0__.year.value.length > 4) {
    return (0,_handleErros__WEBPACK_IMPORTED_MODULE_0__.generatesError)(_handleErros__WEBPACK_IMPORTED_MODULE_0__.year, "Year invalid");
  }
  var errors = (0,_handleErros__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (errors === true) {
    (0,_calculateAge__WEBPACK_IMPORTED_MODULE_1__["default"])(); //criar metodo para calcular a idade
  }
}

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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_validatesDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/validatesDate */ "./src/modules/validatesDate.js");

var day = document.querySelector('#day');
var month = document.querySelector('#month');
var year = document.querySelector('#year');
//const errorTxt = document.querySelector('.error-text');

document.addEventListener('click', function (e) {
  var el = e.target;
  if (el.classList.contains('arrow') || el.classList.contains('arrow-image')) {
    (0,_modules_validatesDate__WEBPACK_IMPORTED_MODULE_0__.validateAge)(year.value, month.value, day.value);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map