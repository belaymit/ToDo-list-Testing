/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --clr-primary-1: hsl(205, 86%, 17%);\r\n  --clr-primary-2: hsl(205, 77%, 27%);\r\n  --clr-primary-3: hsl(205, 72%, 37%);\r\n  --clr-primary-4: hsl(205, 63%, 48%);\r\n  --clr-primary-5: hsl(205, 78%, 60%);\r\n  --clr-primary-6: hsl(205, 89%, 70%);\r\n  --clr-primary-7: hsl(205, 90%, 76%);\r\n  --clr-primary-8: hsl(205, 86%, 81%);\r\n  --clr-primary-9: hsl(205, 90%, 88%);\r\n  --clr-primary-10: hsl(205, 100%, 96%);\r\n  --clr-grey-1: hsl(209, 61%, 16%);\r\n  --clr-grey-2: hsl(211, 39%, 23%);\r\n  --clr-grey-3: hsl(209, 34%, 30%);\r\n  --clr-grey-4: hsl(209, 28%, 39%);\r\n  --clr-grey-5: hsl(210, 22%, 49%);\r\n  --clr-grey-6: hsl(209, 23%, 60%);\r\n  --clr-grey-7: hsl(211, 27%, 70%);\r\n  --clr-grey-8: hsl(210, 31%, 80%);\r\n  --clr-grey-9: hsl(212, 33%, 89%);\r\n  --clr-grey-10: hsl(210, 36%, 96%);\r\n  --clr-white: #fff;\r\n  --clr-red-dark: hsl(360, 67%, 44%);\r\n  --clr-red-light: hsl(360, 71%, 66%);\r\n  --clr-green-dark: hsl(125, 67%, 44%);\r\n  --clr-green-light: hsl(125, 71%, 66%);\r\n  --clr-black: #222;\r\n  --ff-primary: \"Poppins\", sans-serif;\r\n  --transition: all 0.3s linear;\r\n  --spacing: 0.1rem;\r\n  --radius: 0.25rem;\r\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n  --max-width: 1170px;\r\n  --fixed-width: 620px;\r\n  --text-color: #d3d3d3;\r\n  --color-black: #272a31;\r\n  --color-orange: #ec5242;\r\n  --light-background-color: #f7f7f9;\r\n  --white-background: #fff;\r\n}\r\n\r\n/*\r\n      Global Styles\r\n      */\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--ff-primary);\r\n  background: #e5e6e99f;\r\n  color: var(--clr-grey-1);\r\n  line-height: 1.5;\r\n  font-size: 0.875rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.todo-section {\r\n  background-color: var(--white-background);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  padding: 1.5rem;\r\n  margin: 84px 12px 0 12px;\r\n}\r\n\r\n.todo-section h1 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.task-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 8vh;\r\n}\r\n\r\n.task-form input {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n}\r\n\r\n.task-form button {\r\n  background-color: var(--light-background-color);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#todoList {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-right: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#todoList::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n#todoList li {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 8vh;\r\n}\r\n\r\n#todoItem {\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n#todoItem,\r\n.task-form {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n#checked {\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  border-radius: 50%;\r\n  margin-right: 1rem;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n#listItem {\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n#delete {\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.move {\r\n  display: block;\r\n  cursor: move;\r\n}\r\n\r\n.clearCompleted {\r\n  background-color: var(--light-background-color);\r\n  padding: 0.8rem;\r\n  border: none;\r\n  color: #aaa;\r\n  font-size: 1rem;\r\n}\r\n\r\n.clearCompleted:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.notification {\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  color: rgb(15, 97, 15);\r\n}\r\n\r\n.selection {\r\n  background-color: #ccc;\r\n}\r\n\r\n.deleteBtn {\r\n  background: transparent;\r\n  border: none;\r\n  display: none;\r\n  width: 10%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\n.todo-list-description:focus {\r\n  outline: none;\r\n}\r\n\r\n.clear-border {\r\n  border-style: none;\r\n}\r\n\r\n.active {\r\n  background-color: rgb(91, 175, 198);\r\n  color: white;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .todo-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    max-width: 40%;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    padding: 1.5rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,qCAAqC;EACrC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,iCAAiC;EACjC,iBAAiB;EACjB,kCAAkC;EAClC,mCAAmC;EACnC,oCAAoC;EACpC,qCAAqC;EACrC,iBAAiB;EACjB,mCAAmC;EACnC,6BAA6B;EAC7B,iBAAiB;EACjB,iBAAiB;EACjB,6CAA6C;EAC7C,4CAA4C;EAC5C,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,uBAAuB;EACvB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;;OAEO;;AAEP;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,qBAAqB;EACrB,wBAAwB;EACxB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uCAAuC;EACvC,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,+CAA+C;EAC/C,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,+CAA+C;EAC/C,eAAe;EACf,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE;IACE,WAAW;IACX,aAAa;IACb,SAAS;IACT,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,uCAAuC;IACvC,eAAe;EACjB;AACF","sourcesContent":[":root {\r\n  --clr-primary-1: hsl(205, 86%, 17%);\r\n  --clr-primary-2: hsl(205, 77%, 27%);\r\n  --clr-primary-3: hsl(205, 72%, 37%);\r\n  --clr-primary-4: hsl(205, 63%, 48%);\r\n  --clr-primary-5: hsl(205, 78%, 60%);\r\n  --clr-primary-6: hsl(205, 89%, 70%);\r\n  --clr-primary-7: hsl(205, 90%, 76%);\r\n  --clr-primary-8: hsl(205, 86%, 81%);\r\n  --clr-primary-9: hsl(205, 90%, 88%);\r\n  --clr-primary-10: hsl(205, 100%, 96%);\r\n  --clr-grey-1: hsl(209, 61%, 16%);\r\n  --clr-grey-2: hsl(211, 39%, 23%);\r\n  --clr-grey-3: hsl(209, 34%, 30%);\r\n  --clr-grey-4: hsl(209, 28%, 39%);\r\n  --clr-grey-5: hsl(210, 22%, 49%);\r\n  --clr-grey-6: hsl(209, 23%, 60%);\r\n  --clr-grey-7: hsl(211, 27%, 70%);\r\n  --clr-grey-8: hsl(210, 31%, 80%);\r\n  --clr-grey-9: hsl(212, 33%, 89%);\r\n  --clr-grey-10: hsl(210, 36%, 96%);\r\n  --clr-white: #fff;\r\n  --clr-red-dark: hsl(360, 67%, 44%);\r\n  --clr-red-light: hsl(360, 71%, 66%);\r\n  --clr-green-dark: hsl(125, 67%, 44%);\r\n  --clr-green-light: hsl(125, 71%, 66%);\r\n  --clr-black: #222;\r\n  --ff-primary: \"Poppins\", sans-serif;\r\n  --transition: all 0.3s linear;\r\n  --spacing: 0.1rem;\r\n  --radius: 0.25rem;\r\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n  --max-width: 1170px;\r\n  --fixed-width: 620px;\r\n  --text-color: #d3d3d3;\r\n  --color-black: #272a31;\r\n  --color-orange: #ec5242;\r\n  --light-background-color: #f7f7f9;\r\n  --white-background: #fff;\r\n}\r\n\r\n/*\r\n      Global Styles\r\n      */\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--ff-primary);\r\n  background: #e5e6e99f;\r\n  color: var(--clr-grey-1);\r\n  line-height: 1.5;\r\n  font-size: 0.875rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.todo-section {\r\n  background-color: var(--white-background);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  padding: 1.5rem;\r\n  margin: 84px 12px 0 12px;\r\n}\r\n\r\n.todo-section h1 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.task-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 8vh;\r\n}\r\n\r\n.task-form input {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n}\r\n\r\n.task-form button {\r\n  background-color: var(--light-background-color);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#todoList {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-right: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#todoList::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n#todoList li {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 8vh;\r\n}\r\n\r\n#todoItem {\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n#todoItem,\r\n.task-form {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n#checked {\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  border-radius: 50%;\r\n  margin-right: 1rem;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n#listItem {\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n#delete {\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.move {\r\n  display: block;\r\n  cursor: move;\r\n}\r\n\r\n.clearCompleted {\r\n  background-color: var(--light-background-color);\r\n  padding: 0.8rem;\r\n  border: none;\r\n  color: #aaa;\r\n  font-size: 1rem;\r\n}\r\n\r\n.clearCompleted:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.notification {\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  color: rgb(15, 97, 15);\r\n}\r\n\r\n.selection {\r\n  background-color: #ccc;\r\n}\r\n\r\n.deleteBtn {\r\n  background: transparent;\r\n  border: none;\r\n  display: none;\r\n  width: 10%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\n.todo-list-description:focus {\r\n  outline: none;\r\n}\r\n\r\n.clear-border {\r\n  border-style: none;\r\n}\r\n\r\n.active {\r\n  background-color: rgb(91, 175, 198);\r\n  color: white;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .todo-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    max-width: 40%;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    padding: 1.5rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/TodoMagazine.js":
/*!*************************************!*\
  !*** ./src/modules/TodoMagazine.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TodoMagazine = (todoList) => {
  todoList.sort((a, b) => a.index - b.index);
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoMagazine);


/***/ }),

/***/ "./src/modules/addTodoTask.js":
/*!************************************!*\
  !*** ./src/modules/addTodoTask.js ***!
  \************************************/
/***/ ((module) => {

function addAnItem(info, todos) {
  todos.push(info);
  return todos;
}

module.exports = addAnItem;

/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((module) => {

function clearAllCompleted(toDoList) {
  toDoList = toDoList.filter((todo) => todo.completed !== true);
  let i = 0;
  toDoList.forEach((todo) => {
    todo.index = i + 1;
    i += 1;
  });
  return toDoList;
}

module.exports = clearAllCompleted;

/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTodoTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoTask.js */ "./src/modules/addTodoTask.js");
/* harmony import */ var _addTodoTask_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_addTodoTask_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _removeToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeToDo.js */ "./src/modules/removeToDo.js");
/* harmony import */ var _removeToDo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_removeToDo_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clearAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearAll.js */ "./src/modules/clearAll.js");
/* harmony import */ var _clearAll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clearAll_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoObject.js */ "./src/modules/toDoObject.js");
/* harmony import */ var _TodoMagazine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoMagazine.js */ "./src/modules/TodoMagazine.js");


// import updateToDo from './updateToDo.js';
// import checkToDoList from './checkToDoList.js';





const todoList = document.querySelector('#todoList');
let toDoList = localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.getItem('toDoList')) : [];
let index = toDoList.length;
const Input = document.querySelector('#todo');
const clearCompletedBtn = document.querySelector('.clearCompleted');

const createTodoList = () => {
  (0,_TodoMagazine_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_toDoObject_js__WEBPACK_IMPORTED_MODULE_3__.toDoObject);
  todoList.innerHTML = _toDoObject_js__WEBPACK_IMPORTED_MODULE_3__.toDoObject.map((data) => `<li id="todoItem" class="todoItem"><input type="checkbox" id="checked" ${
      data.completed ? 'checked' : ''} >
      <input type="text" id="listItem" value= "${data.description}">
      <i title="Click to Delete" class="fa-solid fa-ellipsis-vertical move"></i>
      <i class="fa-solid fa-trash-can" id="delete"></i></li>`)
    .join('');
  const deleteBtn = document.querySelectorAll('#delete');
  const move = document.querySelectorAll('.move');
  const todo = document.querySelectorAll('#todoItem');
  const listItem = document.querySelectorAll('#listItem');
  const trash = document.querySelectorAll('.fa-trash-can');
  const clear = document.querySelector('.clearCompleted');

  move.forEach((button, index) => button.addEventListener('click', () => {
    move[index].style.display = 'none';
    deleteBtn[index].style.display = 'flex';
    trash[index].style.color = 'red';
    todo[index].style.backgroundColor = '#dfdeab';
    listItem[index].style.backgroundColor = '#dfdeab';
    deleteBtn[index].backgroundColor = '#dfdeab';
  }));

  deleteBtn.forEach((button, index) => button.addEventListener('click', () => {
    const item = index + 1;
    _removeToDo_js__WEBPACK_IMPORTED_MODULE_1___default()(item);
    createTodoList();
  }));

  listItem.forEach((input, index) => input.addEventListener('click', () => {
    todo[index].style.backgroundColor = '#dfdeab';
    listItem[index].style.backgroundColor = '#dfdeab';
    deleteBtn[index].backgroundColor = '#dfdeab';
  }));

  listItem.forEach((input, index) => input.addEventListener('change', () => {
    _toDoObject_js__WEBPACK_IMPORTED_MODULE_3__.toDoObject[index].description = input.value;
    (0,_TodoMagazine_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_toDoObject_js__WEBPACK_IMPORTED_MODULE_3__.toDoObject);
  }));

  clear.addEventListener('click', () => {
    const completed = _toDoObject_js__WEBPACK_IMPORTED_MODULE_3__.toDoObject.filter((data) => data.completed === true);
    completed.forEach((data) => {
      const index = _toDoObject_js__WEBPACK_IMPORTED_MODULE_3__.toDoObject.indexOf(data);
      _toDoObject_js__WEBPACK_IMPORTED_MODULE_3__.toDoObject.splice(index, 1);
    });
    (0,_TodoMagazine_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_toDoObject_js__WEBPACK_IMPORTED_MODULE_3__.toDoObject);
    createTodoList();
  });

  Input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (Input.value !== '') {
        const todoVal = Input.value;
        Input.value = '';
        index += 1;
        const updTodo = _addTodoTask_js__WEBPACK_IMPORTED_MODULE_0___default()({ index, desc: todoVal, completed: false }, toDoList);
        localStorage.setItem('toDoList', JSON.stringify(updTodo));
        createTodoList();
      }
    }
  });

  clearCompletedBtn.addEventListener('click', () => {
    toDoList = _clearAll_js__WEBPACK_IMPORTED_MODULE_2___default()(toDoList);
    index = toDoList.length;
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    createTodoList();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoList);


/***/ }),

/***/ "./src/modules/removeToDo.js":
/*!***********************************!*\
  !*** ./src/modules/removeToDo.js ***!
  \***********************************/
/***/ ((module) => {

function deleteAnItem(i, toDoList) {
  const temp = [...toDoList];
  toDoList.splice(i, 1);

  if (toDoList === temp) {
    throw new Error('Error deleting item');
  }
  return toDoList;
}

module.exports = deleteAnItem;


/***/ }),

/***/ "./src/modules/toDoObject.js":
/*!***********************************!*\
  !*** ./src/modules/toDoObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "toDoObject": () => (/* binding */ toDoObject)
/* harmony export */ });
const toDoObject = JSON.parse(localStorage.getItem('todoList')) || [];

class Todo {
  constructor(task) {
    this.description = task;
    this.completed = false;
    this.index = toDoObject.length + 1;
  }

  addTodo = () => {
    toDoObject.push(this);
  };

  static updateIndex = () => {
    toDoObject.forEach((data, index) => {
      data.index = index + 1;
    });
  };

  static removeTodo = (index) => {
    toDoObject.splice(index - 1, 1);
    this.updateIndex();
  };
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_displayTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayTask.js */ "./src/modules/displayTask.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL21vZHVsZXMvVG9kb01hZ2F6aW5lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL21vZHVsZXMvYWRkVG9kb1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9zcmMvbW9kdWxlcy9jbGVhckFsbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL21vZHVsZXMvcmVtb3ZlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9tb2R1bGVzL3RvRG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWNsci1wcmltYXJ5LTE6IGhzbCgyMDUsIDg2JSwgMTclKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktMjogaHNsKDIwNSwgNzclLCAyNyUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS0zOiBoc2woMjA1LCA3MiUsIDM3JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTQ6IGhzbCgyMDUsIDYzJSwgNDglKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktNTogaHNsKDIwNSwgNzglLCA2MCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS02OiBoc2woMjA1LCA4OSUsIDcwJSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTc6IGhzbCgyMDUsIDkwJSwgNzYlKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktODogaHNsKDIwNSwgODYlLCA4MSUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS05OiBoc2woMjA1LCA5MCUsIDg4JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTEwOiBoc2woMjA1LCAxMDAlLCA5NiUpO1xcclxcbiAgLS1jbHItZ3JleS0xOiBoc2woMjA5LCA2MSUsIDE2JSk7XFxyXFxuICAtLWNsci1ncmV5LTI6IGhzbCgyMTEsIDM5JSwgMjMlKTtcXHJcXG4gIC0tY2xyLWdyZXktMzogaHNsKDIwOSwgMzQlLCAzMCUpO1xcclxcbiAgLS1jbHItZ3JleS00OiBoc2woMjA5LCAyOCUsIDM5JSk7XFxyXFxuICAtLWNsci1ncmV5LTU6IGhzbCgyMTAsIDIyJSwgNDklKTtcXHJcXG4gIC0tY2xyLWdyZXktNjogaHNsKDIwOSwgMjMlLCA2MCUpO1xcclxcbiAgLS1jbHItZ3JleS03OiBoc2woMjExLCAyNyUsIDcwJSk7XFxyXFxuICAtLWNsci1ncmV5LTg6IGhzbCgyMTAsIDMxJSwgODAlKTtcXHJcXG4gIC0tY2xyLWdyZXktOTogaHNsKDIxMiwgMzMlLCA4OSUpO1xcclxcbiAgLS1jbHItZ3JleS0xMDogaHNsKDIxMCwgMzYlLCA5NiUpO1xcclxcbiAgLS1jbHItd2hpdGU6ICNmZmY7XFxyXFxuICAtLWNsci1yZWQtZGFyazogaHNsKDM2MCwgNjclLCA0NCUpO1xcclxcbiAgLS1jbHItcmVkLWxpZ2h0OiBoc2woMzYwLCA3MSUsIDY2JSk7XFxyXFxuICAtLWNsci1ncmVlbi1kYXJrOiBoc2woMTI1LCA2NyUsIDQ0JSk7XFxyXFxuICAtLWNsci1ncmVlbi1saWdodDogaHNsKDEyNSwgNzElLCA2NiUpO1xcclxcbiAgLS1jbHItYmxhY2s6ICMyMjI7XFxyXFxuICAtLWZmLXByaW1hcnk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbiAgLS1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICAtLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIC0tbGlnaHQtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIC0tZGFyay1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgLS1tYXgtd2lkdGg6IDExNzBweDtcXHJcXG4gIC0tZml4ZWQtd2lkdGg6IDYyMHB4O1xcclxcbiAgLS10ZXh0LWNvbG9yOiAjZDNkM2QzO1xcclxcbiAgLS1jb2xvci1ibGFjazogIzI3MmEzMTtcXHJcXG4gIC0tY29sb3Itb3JhbmdlOiAjZWM1MjQyO1xcclxcbiAgLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xcclxcbiAgLS13aGl0ZS1iYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgICAgIEdsb2JhbCBTdHlsZXNcXHJcXG4gICAgICAqL1xcclxcblxcclxcbiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTVlNmU5OWY7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXktMSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogODRweCAxMnB4IDAgMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VjdGlvbiBoMSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDh2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0b2RvTGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9MaXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0xpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDh2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9JdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0l0ZW0sXFxyXFxuLnRhc2stZm9ybSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWNrZWQge1xcclxcbiAgd2lkdGg6IDEuM3JlbTtcXHJcXG4gIGhlaWdodDogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3RJdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyQ29tcGxldGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jbGVhckNvbXBsZXRlZDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGlmaWNhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMTUsIDk3LCAxNSk7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QtZGVzY3JpcHRpb246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWJvcmRlciB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxNzUsIDE5OCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3Qyw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsd0JBQXdCO0FBQzFCOztBQUVBOztPQUVPOztBQUVQOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1jbHItcHJpbWFyeS0xOiBoc2woMjA1LCA4NiUsIDE3JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTI6IGhzbCgyMDUsIDc3JSwgMjclKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktMzogaHNsKDIwNSwgNzIlLCAzNyUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS00OiBoc2woMjA1LCA2MyUsIDQ4JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTU6IGhzbCgyMDUsIDc4JSwgNjAlKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktNjogaHNsKDIwNSwgODklLCA3MCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS03OiBoc2woMjA1LCA5MCUsIDc2JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTg6IGhzbCgyMDUsIDg2JSwgODElKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktOTogaHNsKDIwNSwgOTAlLCA4OCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS0xMDogaHNsKDIwNSwgMTAwJSwgOTYlKTtcXHJcXG4gIC0tY2xyLWdyZXktMTogaHNsKDIwOSwgNjElLCAxNiUpO1xcclxcbiAgLS1jbHItZ3JleS0yOiBoc2woMjExLCAzOSUsIDIzJSk7XFxyXFxuICAtLWNsci1ncmV5LTM6IGhzbCgyMDksIDM0JSwgMzAlKTtcXHJcXG4gIC0tY2xyLWdyZXktNDogaHNsKDIwOSwgMjglLCAzOSUpO1xcclxcbiAgLS1jbHItZ3JleS01OiBoc2woMjEwLCAyMiUsIDQ5JSk7XFxyXFxuICAtLWNsci1ncmV5LTY6IGhzbCgyMDksIDIzJSwgNjAlKTtcXHJcXG4gIC0tY2xyLWdyZXktNzogaHNsKDIxMSwgMjclLCA3MCUpO1xcclxcbiAgLS1jbHItZ3JleS04OiBoc2woMjEwLCAzMSUsIDgwJSk7XFxyXFxuICAtLWNsci1ncmV5LTk6IGhzbCgyMTIsIDMzJSwgODklKTtcXHJcXG4gIC0tY2xyLWdyZXktMTA6IGhzbCgyMTAsIDM2JSwgOTYlKTtcXHJcXG4gIC0tY2xyLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1jbHItcmVkLWRhcms6IGhzbCgzNjAsIDY3JSwgNDQlKTtcXHJcXG4gIC0tY2xyLXJlZC1saWdodDogaHNsKDM2MCwgNzElLCA2NiUpO1xcclxcbiAgLS1jbHItZ3JlZW4tZGFyazogaHNsKDEyNSwgNjclLCA0NCUpO1xcclxcbiAgLS1jbHItZ3JlZW4tbGlnaHQ6IGhzbCgxMjUsIDcxJSwgNjYlKTtcXHJcXG4gIC0tY2xyLWJsYWNrOiAjMjIyO1xcclxcbiAgLS1mZi1wcmltYXJ5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gIC0tc3BhY2luZzogMC4xcmVtO1xcclxcbiAgLS1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAtLWxpZ2h0LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAtLWRhcmstc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIC0tbWF4LXdpZHRoOiAxMTcwcHg7XFxyXFxuICAtLWZpeGVkLXdpZHRoOiA2MjBweDtcXHJcXG4gIC0tdGV4dC1jb2xvcjogI2QzZDNkMztcXHJcXG4gIC0tY29sb3ItYmxhY2s6ICMyNzJhMzE7XFxyXFxuICAtLWNvbG9yLW9yYW5nZTogI2VjNTI0MjtcXHJcXG4gIC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gIC0td2hpdGUtYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAgICBHbG9iYWwgU3R5bGVzXFxyXFxuICAgICAgKi9cXHJcXG5cXHJcXG4qLFxcclxcbjo6YWZ0ZXIsXFxyXFxuOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcclxcbiAgYmFja2dyb3VuZDogI2U1ZTZlOTlmO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci1ncmV5LTEpO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYmFja2dyb3VuZCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDg0cHggMTJweCAwIDEycHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlY3Rpb24gaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiA4dmg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWZvcm0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWZvcm0gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0xpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiN0b2RvTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9MaXN0IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA4dmg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvSXRlbSB7XFxyXFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9JdGVtLFxcclxcbi50YXNrLWZvcm0ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxufVxcclxcblxcclxcbiNjaGVja2VkIHtcXHJcXG4gIHdpZHRoOiAxLjNyZW07XFxyXFxuICBoZWlnaHQ6IDEuM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxufVxcclxcblxcclxcbiNsaXN0SXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNkZWxldGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhckNvbXBsZXRlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJDb21wbGV0ZWQ6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5ub3RpZmljYXRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogcmdiKDE1LCA5NywgMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVCdG4ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0LWRlc2NyaXB0aW9uOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1ib3JkZXIge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTc1LCAxOTgpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b2RvLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFRvZG9NYWdhemluZSA9ICh0b2RvTGlzdCkgPT4ge1xuICB0b2RvTGlzdC5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTWFnYXppbmU7XG4iLCJmdW5jdGlvbiBhZGRBbkl0ZW0oaW5mbywgdG9kb3MpIHtcbiAgdG9kb3MucHVzaChpbmZvKTtcbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEFuSXRlbTsiLCJmdW5jdGlvbiBjbGVhckFsbENvbXBsZXRlZCh0b0RvTGlzdCkge1xuICB0b0RvTGlzdCA9IHRvRG9MaXN0LmZpbHRlcigodG9kbykgPT4gdG9kby5jb21wbGV0ZWQgIT09IHRydWUpO1xuICBsZXQgaSA9IDA7XG4gIHRvRG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICB0b2RvLmluZGV4ID0gaSArIDE7XG4gICAgaSArPSAxO1xuICB9KTtcbiAgcmV0dXJuIHRvRG9MaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsZWFyQWxsQ29tcGxldGVkOyIsImltcG9ydCBhZGRUb2RvVGFzayBmcm9tICcuL2FkZFRvZG9UYXNrLmpzJztcbmltcG9ydCByZW1vdmVUb0RvIGZyb20gJy4vcmVtb3ZlVG9Eby5qcyc7XG4vLyBpbXBvcnQgdXBkYXRlVG9EbyBmcm9tICcuL3VwZGF0ZVRvRG8uanMnO1xuLy8gaW1wb3J0IGNoZWNrVG9Eb0xpc3QgZnJvbSAnLi9jaGVja1RvRG9MaXN0LmpzJztcbmltcG9ydCBjbGVhckFsbCBmcm9tICcuL2NsZWFyQWxsLmpzJztcblxuaW1wb3J0IHsgdG9Eb09iamVjdCB9IGZyb20gJy4vdG9Eb09iamVjdC5qcyc7XG5pbXBvcnQgVG9kb01hZ2F6aW5lIGZyb20gJy4vVG9kb01hZ2F6aW5lLmpzJztcblxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0xpc3QnKTtcbmxldCB0b0RvTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpICE9PSBudWxsID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSkgOiBbXTtcbmxldCBpbmRleCA9IHRvRG9MaXN0Lmxlbmd0aDtcbmNvbnN0IElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcbmNvbnN0IGNsZWFyQ29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyQ29tcGxldGVkJyk7XG5cbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICBUb2RvTWFnYXppbmUodG9Eb09iamVjdCk7XG4gIHRvZG9MaXN0LmlubmVySFRNTCA9IHRvRG9PYmplY3RcbiAgICAubWFwKChkYXRhKSA9PiBgPGxpIGlkPVwidG9kb0l0ZW1cIiBjbGFzcz1cInRvZG9JdGVtXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tlZFwiICR7XG4gICAgICBkYXRhLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfSA+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxpc3RJdGVtXCIgdmFsdWU9IFwiJHtkYXRhLmRlc2NyaXB0aW9ufVwiPlxuICAgICAgPGkgdGl0bGU9XCJDbGljayB0byBEZWxldGVcIiBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsIG1vdmVcIj48L2k+XG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiIGlkPVwiZGVsZXRlXCI+PC9pPjwvbGk+YClcbiAgICAuam9pbignJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZWxldGUnKTtcbiAgY29uc3QgbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3ZlJyk7XG4gIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kb0l0ZW0nKTtcbiAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlzdEl0ZW0nKTtcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gtY2FuJyk7XG4gIGNvbnN0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyQ29tcGxldGVkJyk7XG5cbiAgbW92ZS5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW92ZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkZWxldGVCdG5baW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdHJhc2hbaW5kZXhdLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgdG9kb1tpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkZmRlYWInO1xuICAgIGxpc3RJdGVtW2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RmZGVhYic7XG4gICAgZGVsZXRlQnRuW2luZGV4XS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RmZGVhYic7XG4gIH0pKTtcblxuICBkZWxldGVCdG4uZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBpbmRleCArIDE7XG4gICAgcmVtb3ZlVG9EbyhpdGVtKTtcbiAgICBjcmVhdGVUb2RvTGlzdCgpO1xuICB9KSk7XG5cbiAgbGlzdEl0ZW0uZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvW2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RmZGVhYic7XG4gICAgbGlzdEl0ZW1baW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZGZkZWFiJztcbiAgICBkZWxldGVCdG5baW5kZXhdLmJhY2tncm91bmRDb2xvciA9ICcjZGZkZWFiJztcbiAgfSkpO1xuXG4gIGxpc3RJdGVtLmZvckVhY2goKGlucHV0LCBpbmRleCkgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHRvRG9PYmplY3RbaW5kZXhdLmRlc2NyaXB0aW9uID0gaW5wdXQudmFsdWU7XG4gICAgVG9kb01hZ2F6aW5lKHRvRG9PYmplY3QpO1xuICB9KSk7XG5cbiAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVkID0gdG9Eb09iamVjdC5maWx0ZXIoKGRhdGEpID0+IGRhdGEuY29tcGxldGVkID09PSB0cnVlKTtcbiAgICBjb21wbGV0ZWQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0b0RvT2JqZWN0LmluZGV4T2YoZGF0YSk7XG4gICAgICB0b0RvT2JqZWN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gICAgVG9kb01hZ2F6aW5lKHRvRG9PYmplY3QpO1xuICAgIGNyZWF0ZVRvZG9MaXN0KCk7XG4gIH0pO1xuXG4gIElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmIChJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgdG9kb1ZhbCA9IElucHV0LnZhbHVlO1xuICAgICAgICBJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICBjb25zdCB1cGRUb2RvID0gYWRkVG9kb1Rhc2soeyBpbmRleCwgZGVzYzogdG9kb1ZhbCwgY29tcGxldGVkOiBmYWxzZSB9LCB0b0RvTGlzdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHVwZFRvZG8pKTtcbiAgICAgICAgY3JlYXRlVG9kb0xpc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvRG9MaXN0ID0gY2xlYXJBbGwodG9Eb0xpc3QpO1xuICAgIGluZGV4ID0gdG9Eb0xpc3QubGVuZ3RoO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XG4gICAgY3JlYXRlVG9kb0xpc3QoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvTGlzdDtcbiIsImZ1bmN0aW9uIGRlbGV0ZUFuSXRlbShpLCB0b0RvTGlzdCkge1xuICBjb25zdCB0ZW1wID0gWy4uLnRvRG9MaXN0XTtcbiAgdG9Eb0xpc3Quc3BsaWNlKGksIDEpO1xuXG4gIGlmICh0b0RvTGlzdCA9PT0gdGVtcCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZGVsZXRpbmcgaXRlbScpO1xuICB9XG4gIHJldHVybiB0b0RvTGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxldGVBbkl0ZW07XG4iLCJjb25zdCB0b0RvT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkgfHwgW107XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0YXNrKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRhc2s7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gdG9Eb09iamVjdC5sZW5ndGggKyAxO1xuICB9XG5cbiAgYWRkVG9kbyA9ICgpID0+IHtcbiAgICB0b0RvT2JqZWN0LnB1c2godGhpcyk7XG4gIH07XG5cbiAgc3RhdGljIHVwZGF0ZUluZGV4ID0gKCkgPT4ge1xuICAgIHRvRG9PYmplY3QuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIGRhdGEuaW5kZXggPSBpbmRleCArIDE7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIHJlbW92ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICB0b0RvT2JqZWN0LnNwbGljZShpbmRleCAtIDEsIDEpO1xuICAgIHRoaXMudXBkYXRlSW5kZXgoKTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgVG9kbywgdG9Eb09iamVjdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9kaXNwbGF5VGFzay5qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=