// ==UserScript==
// @name         Instagram: not mutual followers
// @version      0.1.5.2020.4.12.17.21
// @description  With this script you will detect which people you follow do not follow you mutually. And vice-versa, which your followers don't you follow.
// @author       goodwin64
// @match        *://instagram.com/*
// @match        *://www.instagram.com/*
// @namespace    instagram.com
// @run-at       document-start
// ==/UserScript==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@typed/compose/lib.es2015/compose.js":
/*!***********************************************************!*\
  !*** ./node_modules/@typed/compose/lib.es2015/compose.js ***!
  \***********************************************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\nfunction compose() {\n    switch (arguments.length) {\n        case 1: return _compose1(arguments[0]);\n        case 2: return _compose2(arguments[0], arguments[1]);\n        case 3: return _compose3(arguments[0], arguments[1], arguments[2]);\n        case 4: return _compose4(arguments[0], arguments[1], arguments[2], arguments[3]);\n        case 5: return _compose5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);\n    }\n    ;\n}\nfunction _compose1(f) {\n    return function compose1Fn(a) {\n        return f(a);\n    };\n}\nfunction _compose2(g, f) {\n    return function compose2Fn(a) {\n        return g(f(a));\n    };\n}\nfunction _compose3(h, g, f) {\n    return function compose3Fn(a) {\n        return h(g(f(a)));\n    };\n}\nfunction _compose4(i, h, g, f) {\n    return function compose3Fn(a) {\n        return i(h(g(f(a))));\n    };\n}\nfunction _compose5(j, i, h, g, f) {\n    return function compose5Fn(a) {\n        return j(i(h(g(f(a)))));\n    };\n}\n//# sourceMappingURL=compose.js.map\n\n//# sourceURL=webpack:///./node_modules/@typed/compose/lib.es2015/compose.js?");

/***/ }),

/***/ "./node_modules/@typed/compose/lib.es2015/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@typed/compose/lib.es2015/index.js ***!
  \*********************************************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ \"./node_modules/@typed/compose/lib.es2015/compose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"]; });\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@typed/compose/lib.es2015/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/mutualFollowersBotStyles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/styles/mutualFollowersBotStyles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#bot-control-button {\\n  width: 24px;\\n  height: 24px;\\n  cursor: pointer; }\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"bot-control-button\": \"bot-control-button\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/mutualFollowersBotStyles.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/lines-unlines/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/lines-unlines/dist/index.mjs ***!
  \***************************************************/
/*! exports provided: lines, unlines */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lines\", function() { return lines; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unlines\", function() { return unlines; });\nfunction lines(s) {\n    return s === \"\" ? [] : s.replace(/\\n$/, \"\").split(\"\\n\");\n}\nfunction unlines(ls) {\n    return ls.map(line => line + \"\\n\").join(\"\");\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/lines-unlines/dist/index.mjs?");

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/array.mjs":
/*!****************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/array.mjs ***!
  \****************************************************/
/*! exports provided: isArrayOfBooleans, isArrayOfNumbers, isArrayOfStrings, isArrayOfSymbols, isArrayOfNulls, isArrayOfUndefineds, isArrayOfPrimitives, isArrayOfObjects, isArrayOf, isArrayOfLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfBooleans\", function() { return isArrayOfBooleans; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfNumbers\", function() { return isArrayOfNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfStrings\", function() { return isArrayOfStrings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfSymbols\", function() { return isArrayOfSymbols; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfNulls\", function() { return isArrayOfNulls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfUndefineds\", function() { return isArrayOfUndefineds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfPrimitives\", function() { return isArrayOfPrimitives; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfObjects\", function() { return isArrayOfObjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOf\", function() { return isArrayOf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfLike\", function() { return isArrayOfLike; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./node_modules/ts-type-guards/dist/is.mjs\");\n\nfunction isArrayOfBooleans(x) {\n    return isArrayOfLike(true)(x);\n}\nfunction isArrayOfNumbers(x) {\n    return isArrayOfLike(1)(x);\n}\nfunction isArrayOfStrings(x) {\n    return isArrayOfLike(\"\")(x);\n}\nfunction isArrayOfSymbols(x) {\n    return isArrayOfLike(Symbol())(x);\n}\nfunction isArrayOfNulls(x) {\n    return isArrayOfLike(null)(x);\n}\nfunction isArrayOfUndefineds(x) {\n    return isArrayOfLike(undefined)(x);\n}\nfunction isArrayOfPrimitives(x) {\n    return Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"is\"])(Array)(x) && x.every(_is__WEBPACK_IMPORTED_MODULE_0__[\"isPrimitive\"]);\n}\nfunction isArrayOfObjects(x) {\n    return Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"is\"])(Array)(x) && x.every(_is__WEBPACK_IMPORTED_MODULE_0__[\"isNonPrimitive\"]);\n}\nfunction isArrayOf(type) {\n    return (xs) => Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"is\"])(Array)(xs) && xs.every(Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"is\"])(type));\n}\nfunction isArrayOfLike(reference) {\n    return (x) => Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"is\"])(Array)(x) && x.every(Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"isLike\"])(reference));\n}\n//# sourceMappingURL=array.js.map\n\n//# sourceURL=webpack:///./node_modules/ts-type-guards/dist/array.mjs?");

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/index.mjs ***!
  \****************************************************/
/*! exports provided: isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isPrimitive, isNonPrimitive, is, isLike, isArrayOfBooleans, isArrayOfNumbers, isArrayOfStrings, isArrayOfSymbols, isArrayOfNulls, isArrayOfUndefineds, isArrayOfPrimitives, isArrayOfObjects, isArrayOf, isArrayOfLike, onlyBooleans, onlyNumbers, onlyStrings, onlySymbols, onlyNulls, onlyUndefineds, onlyPrimitives, onlyObjects, only, onlyLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./node_modules/ts-type-guards/dist/is.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isBoolean\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isNumber\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSymbol\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isSymbol\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isNull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPrimitive\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isPrimitive\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNonPrimitive\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isNonPrimitive\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"is\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"is\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isLike\", function() { return _is__WEBPACK_IMPORTED_MODULE_0__[\"isLike\"]; });\n\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ \"./node_modules/ts-type-guards/dist/array.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfBooleans\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfBooleans\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfNumbers\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfNumbers\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfStrings\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfStrings\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfSymbols\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfSymbols\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfNulls\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfNulls\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfUndefineds\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfUndefineds\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfPrimitives\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfPrimitives\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfObjects\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfObjects\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOf\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOf\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArrayOfLike\", function() { return _array__WEBPACK_IMPORTED_MODULE_1__[\"isArrayOfLike\"]; });\n\n/* harmony import */ var _only__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./only */ \"./node_modules/ts-type-guards/dist/only.mjs\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlyBooleans\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlyBooleans\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlyNumbers\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlyNumbers\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlyStrings\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlyStrings\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlySymbols\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlySymbols\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlyNulls\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlyNulls\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlyUndefineds\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlyUndefineds\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlyPrimitives\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlyPrimitives\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlyObjects\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlyObjects\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"only\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"only\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"onlyLike\", function() { return _only__WEBPACK_IMPORTED_MODULE_2__[\"onlyLike\"]; });\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/ts-type-guards/dist/index.mjs?");

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/is.mjs":
/*!*************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/is.mjs ***!
  \*************************************************/
/*! exports provided: isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isPrimitive, isNonPrimitive, is, isLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return isBoolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSymbol\", function() { return isSymbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNull\", function() { return isNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return isUndefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPrimitive\", function() { return isPrimitive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNonPrimitive\", function() { return isNonPrimitive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"is\", function() { return is; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLike\", function() { return isLike; });\nconst TYPE_GUARDS_PRIMITIVE = [isBoolean, isNumber, isString, isSymbol, isNull, isUndefined];\nfunction isBoolean(x) {\n    return typeof x === \"boolean\";\n}\nfunction isNumber(x) {\n    return typeof x === \"number\";\n}\nfunction isString(x) {\n    return typeof x === \"string\";\n}\nfunction isSymbol(x) {\n    return typeof x === \"symbol\";\n}\nfunction isNull(x) {\n    return x === null;\n}\nfunction isUndefined(x) {\n    return x === undefined;\n}\nfunction isPrimitive(x) {\n    return TYPE_GUARDS_PRIMITIVE.some(f => f(x));\n}\nfunction isNonPrimitive(x) {\n    return !isPrimitive(x);\n}\nfunction namedFunction(name, fun) {\n    return Object.defineProperty(fun, \"name\", { value: name, writable: false });\n}\nfunction namedTypeGuard(creator, type, typeGuard) {\n    return namedFunction(`${creator.name}(${type.name})`, typeGuard);\n}\nfunction is(type) {\n    if (isPrimitive(type)) {\n        return (_) => false;\n    }\n    return namedTypeGuard(is, type, (x) => x instanceof type);\n}\nfunction isLike(reference) {\n    for (const f of TYPE_GUARDS_PRIMITIVE) {\n        if (f(reference)) {\n            return (x) => f(x);\n        }\n    }\n    if (is(Array)(reference)) {\n        const referenceAsArray = reference;\n        return (x) => is(Array)(x) && (referenceAsArray.length > 0 ? x.every(isLike(referenceAsArray[0])) : true);\n    }\n    if (reference.constructor === Object) {\n        return (x) => (![undefined, null].includes(x)\n            &&\n                Object.keys(reference).every(k => isLike(reference[k])(x[k])));\n    }\n    if (reference.constructor instanceof Function) {\n        return is(reference.constructor);\n    }\n    throw new TypeError(isLike.name + ` cannot use this object as reference because it has no constructor: ` + JSON.stringify(reference));\n}\n//# sourceMappingURL=is.js.map\n\n//# sourceURL=webpack:///./node_modules/ts-type-guards/dist/is.mjs?");

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/only.mjs":
/*!***************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/only.mjs ***!
  \***************************************************/
/*! exports provided: onlyBooleans, onlyNumbers, onlyStrings, onlySymbols, onlyNulls, onlyUndefineds, onlyPrimitives, onlyObjects, only, onlyLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyBooleans\", function() { return onlyBooleans; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyNumbers\", function() { return onlyNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyStrings\", function() { return onlyStrings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlySymbols\", function() { return onlySymbols; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyNulls\", function() { return onlyNulls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyUndefineds\", function() { return onlyUndefineds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyPrimitives\", function() { return onlyPrimitives; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyObjects\", function() { return onlyObjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"only\", function() { return only; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyLike\", function() { return onlyLike; });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./node_modules/ts-type-guards/dist/is.mjs\");\n\nfunction onlyBooleans(xs) {\n    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__[\"isBoolean\"]);\n}\nfunction onlyNumbers(xs) {\n    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__[\"isNumber\"]);\n}\nfunction onlyStrings(xs) {\n    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__[\"isString\"]);\n}\nfunction onlySymbols(xs) {\n    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__[\"isSymbol\"]);\n}\nfunction onlyNulls(xs) {\n    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__[\"isNull\"]);\n}\nfunction onlyUndefineds(xs) {\n    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"]);\n}\nfunction onlyPrimitives(xs) {\n    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__[\"isPrimitive\"]);\n}\nfunction onlyObjects(xs) {\n    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__[\"isNonPrimitive\"]);\n}\nfunction only(type) {\n    return (xs) => xs.filter(Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"is\"])(type));\n}\nfunction onlyLike(reference) {\n    return (xs) => xs.filter(Object(_is__WEBPACK_IMPORTED_MODULE_0__[\"isLike\"])(reference));\n}\n//# sourceMappingURL=only.js.map\n\n//# sourceURL=webpack:///./node_modules/ts-type-guards/dist/only.mjs?");

/***/ }),

/***/ "./node_modules/userscripter/lib/environment.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/environment.mjs ***!
  \*******************************************************/
/*! exports provided: ALWAYS, NEVER, DOMCONTENTLOADED, LOAD */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALWAYS\", function() { return ALWAYS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEVER\", function() { return NEVER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMCONTENTLOADED\", function() { return DOMCONTENTLOADED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD\", function() { return LOAD; });\nconst ALWAYS = () => true;\nconst NEVER = () => false;\nconst DOMCONTENTLOADED = (state) => state !== \"loading\";\nconst LOAD = (state) => state === \"complete\";\n\n\n//# sourceURL=webpack:///./node_modules/userscripter/lib/environment.mjs?");

/***/ }),

/***/ "./node_modules/userscripter/lib/errors.mjs":
/*!**************************************************!*\
  !*** ./node_modules/userscripter/lib/errors.mjs ***!
  \**************************************************/
/*! exports provided: explanation, failureDescriber */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"explanation\", function() { return explanation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"failureDescriber\", function() { return failureDescriber; });\n/* harmony import */ var lines_unlines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lines-unlines */ \"./node_modules/lines-unlines/dist/index.mjs\");\n\nconst INDENTATION = \"  \";\nfunction formatDependency(d) {\n    return INDENTATION + d.key + \": \" + d.selector;\n}\nfunction explanation(failure) {\n    switch (failure.result.reason) {\n        case 0:\n            return Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__[\"unlines\"])([\n                `These dependencies were not found:`,\n                ``,\n                Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__[\"unlines\"])(failure.result.dependencies.map(formatDependency)),\n            ]);\n        case 1:\n            return Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__[\"unlines\"])([\n                `The operation failed with this error:`,\n                ``,\n                failure.result.message,\n            ]);\n    }\n}\nfunction failureDescriber(context) {\n    return failure => Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__[\"unlines\"])([\n        `Could not ${failure.operation.description} on this page:`,\n        ``,\n        INDENTATION + location.href,\n        ``,\n        explanation(failure).trim(),\n        ``,\n        `This problem might be caused by ${context.siteName} changing its content/structure, in which case ${context.extensionName} needs to be updated accordingly. Otherwise, it's probably a bug in ${context.extensionName}.`,\n        ``,\n        `If you file a bug report, please include this message.`,\n    ]);\n}\n\n\n//# sourceURL=webpack:///./node_modules/userscripter/lib/errors.mjs?");

/***/ }),

/***/ "./node_modules/userscripter/lib/index.mjs":
/*!*************************************************!*\
  !*** ./node_modules/userscripter/lib/index.mjs ***!
  \*************************************************/
/*! exports provided: environment, errors, log, operations, preferences, stylesheets, userscripter */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ \"./node_modules/userscripter/lib/environment.mjs\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ \"./node_modules/userscripter/lib/errors.mjs\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"errors\", function() { return _errors__WEBPACK_IMPORTED_MODULE_1__; });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ \"./node_modules/userscripter/lib/log.mjs\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return _log__WEBPACK_IMPORTED_MODULE_2__; });\n/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations */ \"./node_modules/userscripter/lib/operations.mjs\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"operations\", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__; });\n/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preferences */ \"./node_modules/userscripter/lib/preferences.mjs\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"preferences\", function() { return _preferences__WEBPACK_IMPORTED_MODULE_4__; });\n/* harmony import */ var _stylesheets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylesheets */ \"./node_modules/userscripter/lib/stylesheets.mjs\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"stylesheets\", function() { return _stylesheets__WEBPACK_IMPORTED_MODULE_5__; });\n/* harmony import */ var _userscripter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userscripter */ \"./node_modules/userscripter/lib/userscripter.mjs\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"userscripter\", function() { return _userscripter__WEBPACK_IMPORTED_MODULE_6__; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/userscripter/lib/index.mjs?");

/***/ }),

/***/ "./node_modules/userscripter/lib/log.mjs":
/*!***********************************************!*\
  !*** ./node_modules/userscripter/lib/log.mjs ***!
  \***********************************************/
/*! exports provided: setPrefix, setLogger, log, info, warning, error */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPrefix\", function() { return setPrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLogger\", function() { return setLogger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"info\", function() { return info; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return warning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\nlet prefix = \"\";\nlet logger = console;\nfunction setPrefix(p) {\n    prefix = p;\n}\nfunction setLogger(l) {\n    logger = l;\n}\nfunction log(str) {\n    logger.log(prefix, str);\n}\nfunction info(str) {\n    logger.info(prefix, str);\n}\nfunction warning(str) {\n    logger.warn(prefix, str);\n}\nfunction error(str) {\n    logger.error(prefix, str);\n}\n\n\n//# sourceURL=webpack:///./node_modules/userscripter/lib/log.mjs?");

/***/ }),

/***/ "./node_modules/userscripter/lib/operations.mjs":
/*!******************************************************!*\
  !*** ./node_modules/userscripter/lib/operations.mjs ***!
  \******************************************************/
/*! exports provided: operation, run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"operation\", function() { return operation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony import */ var ts_type_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-type-guards */ \"./node_modules/ts-type-guards/dist/index.mjs\");\n\nconst SUCCESS = undefined;\nfunction operation(spec) {\n    return spec;\n}\nfunction run(plan) {\n    function recurse(operations, failures, triesLeft) {\n        const lastTry = Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__[\"isNumber\"])(triesLeft) && triesLeft <= 0;\n        const operationsToRunNow = [];\n        const remaining = [];\n        const readyState = document.readyState;\n        for (const o of operations) {\n            const shouldRunNow = o.deferUntil === undefined || o.deferUntil(readyState);\n            (shouldRunNow ? operationsToRunNow : remaining).push(o);\n        }\n        for (const o of operationsToRunNow) {\n            const result = tryToPerform(o);\n            if (result !== SUCCESS) {\n                switch (result.reason) {\n                    case 0:\n                        lastTry ? failures.push({ result, operation: o }) : remaining.push(o);\n                        break;\n                    case 1:\n                        failures.push({ result, operation: o });\n                        break;\n                }\n            }\n        }\n        if (remaining.length > 0) {\n            setTimeout(() => recurse(remaining, failures, (Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__[\"isNumber\"])(triesLeft)\n                ? triesLeft - 1\n                : plan.tryUntil(readyState) ? plan.extraTries : undefined)), plan.interval);\n        }\n        else if (failures.length > 0) {\n            plan.handleFailures(failures);\n        }\n    }\n    recurse(plan.operations.filter(o => o.condition(window)), []);\n}\nfunction tryToPerform(o) {\n    const dependencies = o.dependencies === undefined ? {} : o.dependencies;\n    const queryResults = Object.entries(dependencies).map(([key, selector]) => ({\n        key, selector, element: document.querySelector(selector),\n    }));\n    const missingDependencies = queryResults.filter(x => Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__[\"isNull\"])(x.element));\n    if (missingDependencies.length > 0) {\n        return { reason: 0, dependencies: missingDependencies };\n    }\n    const e = queryResults.reduce((acc, x) => Object.defineProperty(acc, x.key, { value: x.element }), {});\n    return fromActionResult(o.action(e));\n}\nfunction fromActionResult(r) {\n    return Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(r) ? { reason: 1, message: r } : SUCCESS;\n}\n\n\n//# sourceURL=webpack:///./node_modules/userscripter/lib/operations.mjs?");

/***/ }),

/***/ "./node_modules/userscripter/lib/preferences.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/preferences.mjs ***!
  \*******************************************************/
/*! exports provided: subscriptable, loggingResponseHandler, noopResponseHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscriptable\", function() { return subscriptable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loggingResponseHandler\", function() { return loggingResponseHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noopResponseHandler\", function() { return noopResponseHandler; });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ \"./node_modules/userscripter/lib/log.mjs\");\n\nfunction subscriptable(handler) {\n    const changeListeners = new Set();\n    return {\n        subscribe: (listener) => { changeListeners.add(listener); },\n        unsubscribe: (listener) => { changeListeners.delete(listener); },\n        handler: (summary, preferences) => {\n            if (summary.action === \"set\") {\n                changeListeners.forEach(f => f(summary.preference));\n            }\n            return handler(summary, preferences);\n        },\n    };\n}\nfunction loggingResponseHandler(summary, preferences) {\n    const response = summary.response;\n    switch (response.status) {\n        case 0:\n            return response;\n        case 1:\n            if (summary.action === \"get\") {\n                _log__WEBPACK_IMPORTED_MODULE_0__[\"warning\"](`The saved value for preference '${summary.preference.key}' (${JSON.stringify(response.saved)}) was invalid. Replacing it with ${JSON.stringify(response.value)}.`);\n                preferences.set(summary.preference, response.value);\n            }\n            if (summary.action === \"set\") {\n                _log__WEBPACK_IMPORTED_MODULE_0__[\"warning\"](`Could not set value ${JSON.stringify(response.value)} for preference '${summary.preference.key}' because it was invalid.`);\n            }\n            return response;\n        case 2:\n            if (summary.action === \"get\") {\n                _log__WEBPACK_IMPORTED_MODULE_0__[\"warning\"](`The saved value for preference '${summary.preference.key}' had the wrong type. Replacing it with ${JSON.stringify(response.value)}.`);\n                preferences.set(summary.preference, response.value);\n            }\n            return response;\n        case 3:\n            if (summary.action === \"get\") {\n                _log__WEBPACK_IMPORTED_MODULE_0__[\"warning\"](`The saved value for preference '${summary.preference.key}' could not be parsed. Replacing it with ${JSON.stringify(response.value)}.`);\n                preferences.set(summary.preference, response.value);\n            }\n            return response;\n        case 4:\n            switch (summary.action) {\n                case \"get\":\n                    _log__WEBPACK_IMPORTED_MODULE_0__[\"error\"](`Could not read preference '${summary.preference.key}' because localStorage could not be accessed. Using value ${JSON.stringify(summary.preference.default)}.`);\n                    break;\n                case \"set\":\n                    _log__WEBPACK_IMPORTED_MODULE_0__[\"error\"](`Could not save value ${JSON.stringify(summary.response.value)} for preference '${summary.preference.key}' because localStorage could not be accessed.`);\n                    break;\n                default:\n                    assertUnreachable(summary.action);\n            }\n            return response;\n        default:\n            return assertUnreachable(response.status);\n    }\n}\nfunction noopResponseHandler(summary, _) {\n    return summary.response;\n}\nfunction assertUnreachable(x) {\n    throw new Error(\"assertUnreachable: \" + x);\n}\n\n\n//# sourceURL=webpack:///./node_modules/userscripter/lib/preferences.mjs?");

/***/ }),

/***/ "./node_modules/userscripter/lib/stylesheets.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/stylesheets.mjs ***!
  \*******************************************************/
/*! exports provided: stylesheet, insert, enable, disable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stylesheet\", function() { return stylesheet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return insert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enable\", function() { return enable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disable\", function() { return disable; });\nconst MATCH_ALL = \"all\";\nconst MATCH_NONE = \"not all\";\nfunction stylesheet(spec) {\n    return spec;\n}\nfunction insert(stylesheets) {\n    const fragment = document.createDocumentFragment();\n    Object.entries(stylesheets).forEach(([_, sheet]) => {\n        const style = document.createElement(\"style\");\n        if (sheet.id !== undefined)\n            style.id = sheet.id;\n        style.textContent = sheet.css;\n        style.media = sheet.condition(window) ? MATCH_ALL : MATCH_NONE;\n        fragment.appendChild(style);\n    });\n    document.documentElement.appendChild(fragment);\n}\nconst setMediaQuery = (m) => (s) => {\n    const element = document.getElementById(s.id);\n    if (element !== null) {\n        element.setAttribute(\"media\", m);\n    }\n};\nconst enable = setMediaQuery(MATCH_ALL);\nconst disable = setMediaQuery(MATCH_NONE);\n\n\n//# sourceURL=webpack:///./node_modules/userscripter/lib/stylesheets.mjs?");

/***/ }),

/***/ "./node_modules/userscripter/lib/userscripter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/userscripter/lib/userscripter.mjs ***!
  \********************************************************/
/*! exports provided: run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ \"./node_modules/userscripter/lib/log.mjs\");\n/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations */ \"./node_modules/userscripter/lib/operations.mjs\");\n/* harmony import */ var _stylesheets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets */ \"./node_modules/userscripter/lib/stylesheets.mjs\");\n\n\n\nfunction run(userscript) {\n    _log__WEBPACK_IMPORTED_MODULE_0__[\"setPrefix\"](`[${userscript.name}]`);\n    const attr = attribute(userscript.id);\n    if (document.documentElement.hasAttribute(attr)) {\n        _log__WEBPACK_IMPORTED_MODULE_0__[\"warning\"](`It looks as though ${userscript.name} has already run (because the attribute \"${attr}\" was found on <head>). Stopping.`);\n    }\n    else {\n        document.documentElement.setAttribute(attr, \"\");\n        userscript.initialAction();\n        _stylesheets__WEBPACK_IMPORTED_MODULE_2__[\"insert\"](userscript.stylesheets);\n        _operations__WEBPACK_IMPORTED_MODULE_1__[\"run\"](userscript.operationsPlan);\n    }\n}\nfunction attribute(id) {\n    return \"data-\" + id + \"-has-run\";\n}\n\n\n//# sourceURL=webpack:///./node_modules/userscripter/lib/userscripter.mjs?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, description, private, version, repository, author, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"instagram-not-mutual-followers\\\",\\\"description\\\":\\\"With this script you will detect which people you follow do not follow you mutually. And vice-versa, which your followers don't you follow.\\\",\\\"private\\\":true,\\\"version\\\":\\\"0.1.5\\\",\\\"repository\\\":\\\"https://github.com/goodwin64/instagram-not-mutual-followers\\\",\\\"author\\\":{\\\"name\\\":\\\"Max Donchenko\\\",\\\"email\\\":\\\"maxx.donchenko@gmail.com\\\",\\\"url\\\":\\\"https://www.linkedin.com/in/max-donchenko-792a60b8/\\\"},\\\"scripts\\\":{\\\"build-webpack-config\\\":\\\"tsc -p tsconfig.webpack.json\\\",\\\"build-userscript\\\":\\\"webpack --config .userscripter-temp/webpack.config.js\\\",\\\"build\\\":\\\"npm run clean && npm run build-webpack-config && npm run build-userscript && npm run clean\\\",\\\"clean\\\":\\\"rimraf .userscripter-temp .awcache\\\"},\\\"dependencies\\\":{\\\"@typed/compose\\\":\\\"^1.0.0\\\",\\\"@types/app-root-path\\\":\\\"^1.2.4\\\",\\\"app-root-path\\\":\\\"^3.0.0\\\",\\\"ts-preferences\\\":\\\"^2.0.0\\\",\\\"typescript\\\":\\\"^3.7.4\\\",\\\"userscript-metadata\\\":\\\"^1.0.0\\\",\\\"userscripter\\\":\\\"^1.3.2\\\",\\\"webpack\\\":\\\"^4.41.5\\\",\\\"webpack-cli\\\":\\\"^3.3.10\\\"},\\\"devDependencies\\\":{\\\"rimraf\\\":\\\"^3.0.2\\\"}}\");\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: OPERATIONS_INTERVAL, OPERATIONS_EXTRA_TRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OPERATIONS_INTERVAL\", function() { return OPERATIONS_INTERVAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OPERATIONS_EXTRA_TRIES\", function() { return OPERATIONS_EXTRA_TRIES; });\n// This file cannot contain Webpack-resolved imports (e.g. \"~src/foo\").\nconst OPERATIONS_INTERVAL = 200; // ms\nconst OPERATIONS_EXTRA_TRIES = 3;\n\n\n//# sourceURL=webpack:///./src/config.ts?");

/***/ }),

/***/ "./src/declared-ts-modules/Set.ts":
/*!****************************************!*\
  !*** ./src/declared-ts-modules/Set.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Performs difference operation between\n// called set and otherSet\nSet.prototype.difference = Set.prototype.difference || function (otherSet) {\n    // creating new set to store difference\n    var differenceSet = new Set();\n    // iterate over the values\n    // @ts-ignore\n    for (var elem of this) {\n        // if the value[i] is not present\n        // in otherSet add to the differenceSet\n        if (!otherSet.has(elem))\n            differenceSet.add(elem);\n    }\n    // returns values of differenceSet\n    return differenceSet;\n};\n\n\n//# sourceURL=webpack:///./src/declared-ts-modules/Set.ts?");

/***/ }),

/***/ "./src/helpers/serialize.ts":
/*!**********************************!*\
  !*** ./src/helpers/serialize.ts ***!
  \**********************************/
/*! exports provided: serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serialize\", function() { return serialize; });\nfunction serialize(obj) {\n    var str = [];\n    for (var p in obj)\n        if (obj.hasOwnProperty(p)) {\n            // @ts-ignore\n            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));\n        }\n    return str.join('&');\n}\n\n\n//# sourceURL=webpack:///./src/helpers/serialize.ts?");

/***/ }),

/***/ "./src/icons/people.svg":
/*!******************************!*\
  !*** ./src/icons/people.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<svg class=\\\"MuiSvgIcon-root jss881\\\" viewBox=\\\"0 0 24 24\\\" aria-hidden=\\\"true\\\">\\n    <path d=\\\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\\\"></path>\\n</svg>\\n\");\n\n//# sourceURL=webpack:///./src/icons/people.svg?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typed_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typed/compose */ \"./node_modules/@typed/compose/lib.es2015/index.js\");\n/* harmony import */ var userscripter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter */ \"./node_modules/userscripter/lib/index.mjs\");\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~src/config */ \"./src/config.ts\");\n/* harmony import */ var _src_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~src/operations */ \"./src/operations.ts\");\n/* harmony import */ var _src_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~src/site */ \"./src/site.ts\");\n/* harmony import */ var _src_stylesheets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~src/stylesheets */ \"./src/stylesheets.ts\");\n/* harmony import */ var _src_userscript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~src/userscript */ \"./src/userscript.ts\");\n/* harmony import */ var _src_declared_ts_modules_Set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~src/declared-ts-modules/Set */ \"./src/declared-ts-modules/Set.ts\");\n/* harmony import */ var _src_declared_ts_modules_Set__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_declared_ts_modules_Set__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst describeFailure = userscripter__WEBPACK_IMPORTED_MODULE_1__[\"errors\"].failureDescriber({\n    siteName: _src_site__WEBPACK_IMPORTED_MODULE_4__[\"NAME\"],\n    extensionName: _src_userscript__WEBPACK_IMPORTED_MODULE_6__[\"default\"].name,\n    location: document.location,\n});\nuserscripter__WEBPACK_IMPORTED_MODULE_1__[\"userscripter\"].run({\n    id: _src_userscript__WEBPACK_IMPORTED_MODULE_6__[\"default\"].id,\n    name: _src_userscript__WEBPACK_IMPORTED_MODULE_6__[\"default\"].name,\n    initialAction: () => userscripter__WEBPACK_IMPORTED_MODULE_1__[\"log\"].log(`${_src_userscript__WEBPACK_IMPORTED_MODULE_6__[\"default\"].name} ${_src_userscript__WEBPACK_IMPORTED_MODULE_6__[\"default\"].version}`),\n    stylesheets: _src_stylesheets__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    operationsPlan: {\n        operations: _src_operations__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        interval: _src_config__WEBPACK_IMPORTED_MODULE_2__[\"OPERATIONS_INTERVAL\"],\n        tryUntil: userscripter__WEBPACK_IMPORTED_MODULE_1__[\"environment\"].DOMCONTENTLOADED,\n        extraTries: _src_config__WEBPACK_IMPORTED_MODULE_2__[\"OPERATIONS_EXTRA_TRIES\"],\n        handleFailures: failures => failures.forEach(Object(_typed_compose__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(userscripter__WEBPACK_IMPORTED_MODULE_1__[\"log\"].error, describeFailure)),\n    },\n});\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/operations.ts":
/*!***************************!*\
  !*** ./src/operations.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userscripter/lib/operations */ \"./node_modules/userscripter/lib/operations.mjs\");\n/* harmony import */ var _src_operations_addStatisticsButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~src/operations/addStatisticsButton */ \"./src/operations/addStatisticsButton.ts\");\n\n\nconst OPERATIONS = [\n    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_0__[\"operation\"])({\n        description: \"add bot helper button\",\n        condition: () => true,\n        action: _src_operations_addStatisticsButton__WEBPACK_IMPORTED_MODULE_1__[\"addStatisticsButton\"],\n    }),\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (OPERATIONS);\n\n\n//# sourceURL=webpack:///./src/operations.ts?");

/***/ }),

/***/ "./src/operations/addStatisticsButton.ts":
/*!***********************************************!*\
  !*** ./src/operations/addStatisticsButton.ts ***!
  \***********************************************/
/*! exports provided: addStatisticsButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addStatisticsButton\", function() { return addStatisticsButton; });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ \"./package.json\", 1);\n/* harmony import */ var _src_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~src/helpers/serialize */ \"./src/helpers/serialize.ts\");\n/* harmony import */ var _src_services_ImageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~src/services/ImageService */ \"./src/services/ImageService.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst FOLLOWERS_HASH = 'c76146de99bb02f6415203be841dd25a';\nconst FOLLOWING_HASH = 'd04b0a864b4b54837c0d870b0e77e076';\nconst selectors = {\n    followersLink: '[href*=\"/followers/\"]',\n    followingLink: '[href*=\"/following/\"]',\n    instagramUsername: '.FPmhX',\n    headerControlPanelContainer: '._47KiJ',\n    headerControlButton: '.Fifk5',\n    pageContainer: '.v9tJq.AAaSh.VfzDr',\n    botControlButton: '#bot-control-button',\n};\nfunction createBot() {\n    let isEnabled = false;\n    const api = {\n        startBot: () => {\n            if (isEnabled) {\n                return;\n            }\n            collectEdges()\n                .then(data => data || [])\n                .then(([followers, following]) => [\n                followers.map(usernameFromUserSelector),\n                following.map(usernameFromUserSelector),\n            ])\n                .then(([followers, following]) => {\n                api.stopBot();\n                logResults(followers, following);\n                alert('Press F12 and see result in console ->');\n            });\n        },\n        stopBot: () => {\n            isEnabled = false;\n        },\n        isEnabled: () => Boolean(isEnabled),\n    };\n    return api;\n}\nfunction collectEdges() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const RE_INSTA_URL = /instagram\\.com\\/(?<nickname>[A-Za-z0-9_.]*)\\/.*/;\n        const match = RE_INSTA_URL.exec(window.location.href);\n        if (!match || !match.groups) {\n            console.error('no username detected from URL');\n            return;\n        }\n        const visibleUserNickname = match.groups.nickname;\n        if (!visibleUserNickname) {\n            console.error('no username detected from URL');\n        }\n        const userDataResponse = yield retrieveUserData(visibleUserNickname);\n        const [userId, followersCount, followingCount] = [\n            userIdSelector(userDataResponse),\n            followersCountSelector(userDataResponse),\n            followingCountSelector(userDataResponse),\n        ];\n        const [collectedFollowers, collectedFollowing] = yield Promise.all([\n            retrieveAllEdges(userId, followersCount, true),\n            retrieveAllEdges(userId, followingCount, false),\n        ]);\n        return [collectedFollowers, collectedFollowing];\n    });\n}\nfunction retrieveUserData(userNickname) {\n    return fetch(`https://www.instagram.com/${userNickname}/?__a=1`, {\n        'method': 'GET',\n    })\n        .then(r => r.json())\n        .then((r) => r);\n}\nfunction retrieveEdgesSlice(userId, isFollowers, sliceSize = 49, after, fetchMutual = false) {\n    const queryParams = {\n        query_hash: isFollowers ? FOLLOWERS_HASH : FOLLOWING_HASH,\n        variables: JSON.stringify({\n            'id': userId,\n            'include_reel': true,\n            'fetch_mutual': fetchMutual,\n            'first': sliceSize,\n            after,\n        }),\n    };\n    const queryParamsSerialized = Object(_src_helpers_serialize__WEBPACK_IMPORTED_MODULE_1__[\"serialize\"])(queryParams);\n    return fetch(`https://www.instagram.com/graphql/query/?${queryParamsSerialized}`, {\n        'method': 'GET',\n    })\n        .then(r => r.json())\n        .then((r) => r.data);\n}\nfunction retrieveAllEdges(userId, totalEdgesCount, isFollowers) {\n    return __awaiter(this, void 0, void 0, function* () {\n        let result = [];\n        const firstSliceResponse = yield retrieveEdgesSlice(userId, isFollowers);\n        let edges = edgesListFromResponseSelector(firstSliceResponse);\n        let [hasNextPage, pageEnd] = pageEndFromResponseSelector(firstSliceResponse);\n        result = result.concat(edges);\n        while (result.length < totalEdgesCount) {\n            console.log(result.length / totalEdgesCount);\n            const nextSliceResponse = yield retrieveEdgesSlice(userId, isFollowers, 49, pageEnd);\n            edges = edgesListFromResponseSelector(nextSliceResponse);\n            [hasNextPage, pageEnd] = pageEndFromResponseSelector(nextSliceResponse);\n            result = result.concat(edges);\n        }\n        return result;\n    });\n}\nfunction userCommonDataSelector(userDataResponse) {\n    return userDataResponse.graphql.user;\n}\nfunction userIdSelector(userDataResponse) {\n    const userData = userCommonDataSelector(userDataResponse);\n    return userData.id;\n}\nfunction followersCountSelector(userDataResponse) {\n    const userData = userCommonDataSelector(userDataResponse);\n    return userData.edge_followed_by.count;\n}\nfunction followingCountSelector(userDataResponse) {\n    const userData = userCommonDataSelector(userDataResponse);\n    return userData.edge_follow.count;\n}\nfunction createBotControlButton() {\n    const buttonContainer = document.createElement('div');\n    const headerControlButtonClass = 'Fifk5';\n    buttonContainer.classList.add(headerControlButtonClass);\n    const button = document.createElement('div');\n    button.innerHTML = _src_services_ImageService__WEBPACK_IMPORTED_MODULE_2__[\"ImageService\"].people;\n    button.id = 'bot-control-button';\n    button.setAttribute('aria-label', _package_json__WEBPACK_IMPORTED_MODULE_0__[\"name\"]);\n    buttonContainer.appendChild(button);\n    return [buttonContainer, button, 'enabled', 'disabled'];\n}\nfunction addBotControlButton() {\n    if (document.querySelector(selectors.botControlButton)) {\n        return;\n    }\n    const [buttonContainer, button, enabledClassname, disabledClassname] = createBotControlButton();\n    const controlPanel = document.querySelector(selectors.headerControlPanelContainer);\n    if (!controlPanel)\n        return;\n    controlPanel.insertBefore(buttonContainer, controlPanel.firstChild);\n    const bot = createBot();\n    buttonContainer.addEventListener('click', () => {\n        if (bot.isEnabled()) {\n            bot.stopBot();\n            button.classList.remove(enabledClassname);\n            button.classList.add(disabledClassname);\n        }\n        else {\n            bot.startBot();\n            button.classList.add(enabledClassname);\n            button.classList.remove(disabledClassname);\n        }\n    });\n}\nfunction edgesListFromResponseSelector(followersResponseData) {\n    const edges = 'edge_followed_by' in followersResponseData.user\n        ? followersResponseData.user.edge_followed_by.edges\n        : followersResponseData.user.edge_follow.edges;\n    return edges\n        ? edges.map(edge => edge.node)\n        : [];\n}\nfunction pageEndFromResponseSelector(followersResponseData) {\n    const pageInfo = 'edge_followed_by' in followersResponseData.user\n        ? followersResponseData.user.edge_followed_by.page_info\n        : followersResponseData.user.edge_follow.page_info;\n    return pageInfo\n        ? [pageInfo.has_next_page, pageInfo.end_cursor]\n        : [false, undefined];\n}\nfunction logResults(followers, following) {\n    const s1 = new Set(followers);\n    const s2 = new Set(following);\n    const onlyTheyFollowMe = [...s1.difference(s2)];\n    const onlyIFollowThem = [...s2.difference(s1)];\n    console.log('onlyTheyFollowMe (you ignore them):', onlyTheyFollowMe);\n    console.log('onlyIFollowThem (fucking bastards):', onlyIFollowThem);\n}\nfunction usernameFromUserSelector(user) {\n    return user.username;\n}\nfunction addStatisticsButton() {\n    setInterval(addBotControlButton, 1000);\n}\n\n\n//# sourceURL=webpack:///./src/operations/addStatisticsButton.ts?");

/***/ }),

/***/ "./src/services/ImageService.ts":
/*!**************************************!*\
  !*** ./src/services/ImageService.ts ***!
  \**************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageService\", function() { return ImageService; });\n/* harmony import */ var _icons_people_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/people.svg */ \"./src/icons/people.svg\");\n\nconst ImageService = {\n    people: _icons_people_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n};\n\n\n//# sourceURL=webpack:///./src/services/ImageService.ts?");

/***/ }),

/***/ "./src/site.ts":
/*!*********************!*\
  !*** ./src/site.ts ***!
  \*********************/
/*! exports provided: NAME, HOSTNAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NAME\", function() { return NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOSTNAME\", function() { return HOSTNAME; });\n/* harmony import */ var _userscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript */ \"./src/userscript.ts\");\n// This file cannot contain Webpack-resolved imports (e.g. \"~src/foo\").\n\nconst NAME = _userscript__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sitename;\nconst HOSTNAME = _userscript__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hostname;\n\n\n//# sourceURL=webpack:///./src/site.ts?");

/***/ }),

/***/ "./src/styles/mutualFollowersBotStyles.scss":
/*!**************************************************!*\
  !*** ./src/styles/mutualFollowersBotStyles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./mutualFollowersBotStyles.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/mutualFollowersBotStyles.scss\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack:///./src/styles/mutualFollowersBotStyles.scss?");

/***/ }),

/***/ "./src/stylesheets.ts":
/*!****************************!*\
  !*** ./src/stylesheets.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userscripter/lib/environment */ \"./node_modules/userscripter/lib/environment.mjs\");\n/* harmony import */ var userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter/lib/stylesheets */ \"./node_modules/userscripter/lib/stylesheets.mjs\");\n/* harmony import */ var _styles_mutualFollowersBotStyles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/mutualFollowersBotStyles.scss */ \"./src/styles/mutualFollowersBotStyles.scss\");\n/* harmony import */ var _styles_mutualFollowersBotStyles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mutualFollowersBotStyles_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst STYLESHEETS = {\n    main: Object(userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__[\"stylesheet\"])({\n        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__[\"ALWAYS\"],\n        css: ``,\n    }),\n    mutualFollowersBot: Object(userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__[\"stylesheet\"])({\n        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__[\"ALWAYS\"],\n        css: _styles_mutualFollowersBotStyles_scss__WEBPACK_IMPORTED_MODULE_2___default.a,\n    })\n};\n// This trick uncovers type errors in STYLESHEETS while retaining the static knowledge of its properties (so we can still write e.g. STYLESHEETS.foo):\nconst _ = STYLESHEETS;\nvoid _;\n/* harmony default export */ __webpack_exports__[\"default\"] = (STYLESHEETS);\n\n\n//# sourceURL=webpack:///./src/stylesheets.ts?");

/***/ }),

/***/ "./src/userscript.ts":
/*!***************************!*\
  !*** ./src/userscript.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    id: _package_json__WEBPACK_IMPORTED_MODULE_0__.name,\n    name: \"Instagram: not mutual followers\",\n    version: _package_json__WEBPACK_IMPORTED_MODULE_0__.version,\n    description: _package_json__WEBPACK_IMPORTED_MODULE_0__.description,\n    author: \"goodwin64\",\n    hostname: \"instagram.com\",\n    sitename: \"instagram.com\",\n    namespace: \"instagram.com\",\n    runAt: \"document-start\",\n    match: 'https://www.instagram.com/*'\n});\n\n\n//# sourceURL=webpack:///./src/userscript.ts?");

/***/ })

/******/ });