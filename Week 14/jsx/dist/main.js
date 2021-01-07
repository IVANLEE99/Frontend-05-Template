/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
eval("function createElement(type, attributes) {\n  var element = document.createElement(type);\n\n  for (var name in attributes) {\n    if (attributes.hasOwnProperty(name)) {\n      var e = attributes[name];\n      element.setAttribute(name, attributes[name]);\n    }\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  for (var _i = 0, _children = children; _i < _children.length; _i++) {\n    var child = _children[_i];\n    element.appendChild(child);\n  }\n\n  return element;\n}\n\nvar a = createElement (\"div\", {\n  id: \"a\"\n}, createElement (\"span\", null), createElement (\"span\", null), createElement (\"span\", null));\ndocument.body.appendChild(a);\n\n//# sourceURL=webpack://jsx/./main.js?");
/******/ })()
;