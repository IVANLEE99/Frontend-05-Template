/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./CubicBezier.js":
/*!************************!*\
  !*** ./CubicBezier.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*!\r\n * CubicBezier v1.0.2 - 三次贝塞尔曲线求值\r\n * (c) 2014-2017 BaiJunjie\r\n * MIT Licensed.\r\n *\r\n * https://github.com/baijunjie/CubicBezier.js\r\n */\n(function (root, factory) {\n  'use strict';\n\n  if (( false ? 0 : _typeof(module)) === 'object' && ( false ? 0 : _typeof(exports)) === 'object') {\n    module.exports = factory();\n  } else if (true) {\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(this, function () {\n  /**\r\n   * 创建一个三次贝塞尔对象\r\n   * 每一个参数为一个表示点的数组[x,y]，或者一个Point对象\r\n   * @param {Array|Point} c1    表示起始点的控制点\r\n   * @param {Array|Point} c2    表示结束点的控制点\r\n   * @param {Array|Point} begin 表示起始点，默认为[0,0]\r\n   * @param {Array|Point} end   表示结束点，默认为[1,1]\r\n   */\n  function CubicBezier(c1, c2, begin, end) {\n    this.set.apply(this, arguments);\n  }\n\n  CubicBezier.prototype = {\n    _bezierFunc: function _bezierFunc(p, t, targ) {\n      return this.begin[p] * Math.pow(1 - t, 3) + this.c1[p] * 3 * t * Math.pow(1 - t, 2) + this.c2[p] * 3 * (1 - t) * Math.pow(t, 2) + this.end[p] * Math.pow(t, 3) - targ;\n    },\n    _deltaBezierFunc: function _deltaBezierFunc(p, t, targ) {\n      var dt = 1e-8;\n      return (this._bezierFunc(p, t, targ) - this._bezierFunc(p, t - dt, targ)) / dt;\n    },\n\n    /**\r\n     * 设置一个新的贝塞尔函数\r\n     * 参数与构造函数相同\r\n     */\n    set: function set(c1, c2, begin, end) {\n      if (typeof c1 === 'string') {\n        var args = getArg(c1);\n        end = begin;\n        begin = c2;\n        c1 = [args[0], args[1]];\n        c2 = [args[2], args[3]];\n      }\n\n      this.c1 = getPoint(c1);\n      this.c2 = getPoint(c2);\n      this.begin = getPoint(begin);\n      this.end = end ? getPoint(end) : new Point(1, 1);\n    },\n\n    /**\r\n     * 已知y，求x\r\n     * @param  {number} y 参数表示一个在贝塞尔曲线上Y轴方向的向量，取值在 0.0 - 1.0 之间\r\n     * @return            返回y在贝塞尔曲线上对应的x\r\n     */\n    getX: function getX(y) {\n      var t = .5; //设置t的初值\n\n      for (var i = 0; i < 1000; i++) {\n        t = t - this._bezierFunc('y', t, y) / this._deltaBezierFunc('y', t, y);\n        if (this._bezierFunc('y', t, y) === 0) break;\n      }\n\n      return this._bezierFunc('x', t, 0);\n    },\n\n    /**\r\n     * 已知x，求y\r\n     * @param  {number} x 参数表示一个在贝塞尔曲线上X轴方向的向量，取值在 0.0 - 1.0 之间\r\n     * @return            返回x在贝塞尔曲线上对应的y\r\n     */\n    getY: function getY(x) {\n      var t = .5; //设置t的初值\n\n      for (var i = 0; i < 1000; i++) {\n        t = t - this._bezierFunc('x', t, x) / this._deltaBezierFunc('x', t, x);\n        if (this._bezierFunc('x', t, x) === 0) break;\n      }\n\n      return this._bezierFunc('y', t, 0);\n    },\n\n    /**\r\n     * 根据时间获取曲线上对应的点\r\n     * @param  {number} t 参数表示一个 0.0 - 1.0 的时间向量\r\n     * @return            返回的结果是该时刻在贝塞尔曲线上的点\r\n     */\n    getPoint: function getPoint(t) {\n      var p = new Point();\n      p.x = this._bezierFunc('x', t, 0);\n      p.y = this._bezierFunc('y', t, 0);\n      return p;\n    }\n  };\n\n  function isArray(arr) {\n    return Object.prototype.toString.call(arr) === '[object Array]';\n  }\n\n  function isObject(obj) {\n    return Object.prototype.toString.call(obj) === '[object Object]';\n  }\n\n  function isNumber(num) {\n    var type = _typeof(num);\n\n    return type === 'number' || type === 'string' && !isNaN(num - parseFloat(num));\n  }\n  /**\r\n   * 获取一个Point点对象\r\n   * @param  {Number|Array|Point|Object} x 数字、数组、对象或者Point对象\r\n   * @param  {Number}                    y 数字\r\n   * @return {Point}                       返回一个Point对象\r\n   */\n\n\n  function getPoint(x, y) {\n    if (isNumber(x)) {\n      return new Point(x, y);\n    } else if (isArray(x)) {\n      return new Point(x[0], x[1]);\n    } else if (isObject(x)) {\n      return new Point(x.x, x.y);\n    } else if (x instanceof Point) {\n      return x;\n    } else {\n      return new Point();\n    }\n  }\n  /**\r\n   * 获取字符串表达式中括号内的参数数组\r\n   * 'cubic-bezier(0,0,1,1)' => [0,0,1,1]\r\n   * @param  {String} str 贝塞尔函数字符串表达式\r\n   * @return {Array}      返回包含贝塞尔函数的两个控制点组成的数据\r\n   */\n\n\n  function getArg(str) {\n    var s = str.match(/\\(.*\\)$/);\n\n    if (s) {\n      var args = s[0].slice(1, -1).split(',');\n\n      for (var i = 0, l = args.length; i < l; i++) {\n        var arg = parseFloat(args[i]);\n        args[i] = isNaN(arg) ? undefined : arg;\n      }\n\n      return args;\n    }\n\n    return null;\n  }\n\n  function Point(x, y) {\n    this.x = x || 0;\n    this.y = y || 0;\n  }\n\n  CubicBezier.Point = Point;\n  return CubicBezier;\n});\n\n//# sourceURL=webpack://jsx/./CubicBezier.js?");

/***/ }),

/***/ "./TimingFun.js":
/*!**********************!*\
  !*** ./TimingFun.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"linear\": () => /* binding */ linear,\n/* harmony export */   \"ease\": () => /* binding */ ease,\n/* harmony export */   \"easeIn\": () => /* binding */ easeIn,\n/* harmony export */   \"easeOut\": () => /* binding */ easeOut,\n/* harmony export */   \"easeIntOut\": () => /* binding */ easeIntOut\n/* harmony export */ });\n/* harmony import */ var _CubicBezier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CubicBezier.js */ \"./CubicBezier.js\");\n/* harmony import */ var _CubicBezier_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CubicBezier_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar linear = function linear(v) {\n  return v;\n}; // {\"ease\":\".25,.1,.25,1\",\"linear\":\"0,0,1,1\",\"ease-in\":\".42,0,1,1\",\"ease-out\":\"0,0,.58,1\",\"ease-in-out\":\".42,0,.58,1\"}\n\nvar ease = function ease(v) {\n  var cubicBezier = new (_CubicBezier_js__WEBPACK_IMPORTED_MODULE_0___default())('cubic-bezier(.25,.1,.25,1)');\n  var p = cubicBezier.getPoint(v);\n  var w = cubicBezier.getY(v);\n  console.log(w);\n  return w;\n};\nvar easeIn = function easeIn(v) {\n  var cubicBezier = new (_CubicBezier_js__WEBPACK_IMPORTED_MODULE_0___default())('cubic-bezier(.42,0,1,1)');\n  var p = cubicBezier.getPoint(v);\n  var w = cubicBezier.getY(v);\n  console.log(w);\n  return w;\n};\nvar easeOut = function easeOut(v) {\n  var cubicBezier = new (_CubicBezier_js__WEBPACK_IMPORTED_MODULE_0___default())('cubic-bezier(0,0,.58,1)');\n  var p = cubicBezier.getPoint(v);\n  var w = cubicBezier.getY(v);\n  console.log(w);\n  return w;\n};\nvar easeIntOut = function easeIntOut(v) {\n  var cubicBezier = new (_CubicBezier_js__WEBPACK_IMPORTED_MODULE_0___default())('cubic-bezier(.42,0,.58,1)');\n  var p = cubicBezier.getPoint(v);\n  var w = cubicBezier.getY(v);\n  console.log(w);\n  return w;\n}; // var cubicBezier = new CubicBezier('cubic-bezier(.175, .885,.32,1.275)');\n// cubicBezier.getPoint(t);\n\n//# sourceURL=webpack://jsx/./TimingFun.js?");

/***/ }),

/***/ "./animation-demo.js":
/*!***************************!*\
  !*** ./animation-demo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ \"./animation.js\");\n/* harmony import */ var _TimingFun_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimingFun.js */ \"./TimingFun.js\");\n\n\nvar tl = new _animation_js__WEBPACK_IMPORTED_MODULE_0__.Timeline();\nvar animation = new _animation_js__WEBPACK_IMPORTED_MODULE_0__.Animation(document.querySelector('#el').style, 'transform', 0, 500, 2000, 0, _TimingFun_js__WEBPACK_IMPORTED_MODULE_1__.easeIn, function (v) {\n  return \"translateX(\".concat(v, \"px)\");\n});\ntl.addAnimation(animation);\ntl.start();\ndocument.querySelector('#el2').style.transition = 'transform ease-in 2s';\ndocument.querySelector('#el2').style.transform = 'translateX(500px)';\ndocument.querySelector('#pause-btn').addEventListener('click', function () {\n  return tl.pause();\n});\ndocument.querySelector('#resume-btn').addEventListener('click', function () {\n  return tl.resume();\n});\n\n//# sourceURL=webpack://jsx/./animation-demo.js?");

/***/ }),

/***/ "./animation.js":
/*!**********************!*\
  !*** ./animation.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timeline\": () => /* binding */ Timeline,\n/* harmony export */   \"Animation\": () => /* binding */ Animation\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TICK = Symbol('tick');\nvar TICK_HANDLER = Symbol(\"tick-handler\");\nvar ANIMATIONS = Symbol(\"animations\");\nvar START_TIME = Symbol(\"start-time\");\nvar PAUSE_TIME = Symbol(\"pause-time\");\nvar PAUSE_START = Symbol(\"pause-start\");\nvar Timeline = /*#__PURE__*/function () {\n  function Timeline() {\n    _classCallCheck(this, Timeline);\n\n    this.state = 'Inited'; //确保唯一性，防止别人调用\n\n    this[ANIMATIONS] = new Set();\n    this[START_TIME] = new Map();\n  }\n\n  _createClass(Timeline, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      if (this.state !== 'Inited') {\n        return;\n      }\n\n      this.state = 'started';\n      var startTime = Date.now();\n      this[PAUSE_TIME] = 0;\n\n      this[TICK] = function () {\n        var now = Date.now();\n\n        var _iterator = _createForOfIteratorHelper(_this[ANIMATIONS]),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var animation = _step.value;\n            var t = void 0; // debugger;\n            //Timeline启动后添加的动画\n\n            if (_this[START_TIME].get(animation) < startTime) {\n              t = now - startTime - _this[PAUSE_TIME] - animation.delay;\n            } else {\n              //Timeline已经启动，后再添加的动画\n              t = now - _this[START_TIME].get(animation) - _this[PAUSE_TIME] - animation.delay;\n            }\n\n            if (t > animation.duration) {\n              _this[ANIMATIONS][\"delete\"](animation);\n\n              t = animation.duration;\n            }\n\n            if (t > 0) {\n              animation.receive(t);\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        _this[TICK_HANDLER] = requestAnimationFrame(_this[TICK]);\n      };\n\n      this[TICK]();\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      if (this.state !== 'started') {\n        return;\n      }\n\n      this.state = 'paused';\n      this[PAUSE_START] = Date.now();\n      cancelAnimationFrame(this[TICK_HANDLER]);\n    }\n  }, {\n    key: \"resume\",\n    value: function resume() {\n      if (this.state !== 'paused') {\n        return;\n      }\n\n      this.state = 'started';\n      this[PAUSE_TIME] += Date.now() - this[PAUSE_START];\n      this[TICK]();\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.pause();\n      this.state = 'Inited';\n      var startTime = Date.now();\n      this[PAUSE_TIME] = 0;\n      this[ANIMATIONS] = new Set();\n      this[START_TIME] = 0;\n      this[TICK_HANDLER] = null;\n    }\n  }, {\n    key: \"addAnimation\",\n    value: function addAnimation(a, startTime) {\n      if (arguments.length < 2) {\n        startTime = Date.now();\n      }\n\n      this[ANIMATIONS].add(a);\n      this[START_TIME].set(a, startTime);\n    }\n  }]);\n\n  return Timeline;\n}();\nvar Animation = /*#__PURE__*/function () {\n  function Animation(object, property, startValue, endValue, duration, delay, timingFunction, template) {\n    _classCallCheck(this, Animation);\n\n    timingFunction = timingFunction || function (v) {\n      return v;\n    }; // timingFunction =  (v => v);\n\n\n    template = template || function (v) {\n      return v;\n    };\n\n    this.object = object;\n    this.property = property;\n    this.startValue = startValue;\n    this.endValue = endValue;\n    this.duration = duration;\n    this.delay = delay;\n    this.timingFunction = timingFunction;\n    this.template = template;\n  }\n\n  _createClass(Animation, [{\n    key: \"receive\",\n    value: function receive(time) {\n      var range = this.endValue - this.startValue;\n      var progress = this.timingFunction(time / this.duration);\n      this.object[this.property] = this.template(this.startValue + range * progress); // console.log(this.object[this.property]);\n    }\n  }]);\n\n  return Animation;\n}();\n\n//# sourceURL=webpack://jsx/./animation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./animation-demo.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;