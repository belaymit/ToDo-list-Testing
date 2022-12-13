/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --clr-primary-1: hsl(205, 86%, 17%);\r\n  --clr-primary-2: hsl(205, 77%, 27%);\r\n  --clr-primary-3: hsl(205, 72%, 37%);\r\n  --clr-primary-4: hsl(205, 63%, 48%);\r\n  --clr-primary-5: hsl(205, 78%, 60%);\r\n  --clr-primary-6: hsl(205, 89%, 70%);\r\n  --clr-primary-7: hsl(205, 90%, 76%);\r\n  --clr-primary-8: hsl(205, 86%, 81%);\r\n  --clr-primary-9: hsl(205, 90%, 88%);\r\n  --clr-primary-10: hsl(205, 100%, 96%);\r\n  --clr-grey-1: hsl(209, 61%, 16%);\r\n  --clr-grey-2: hsl(211, 39%, 23%);\r\n  --clr-grey-3: hsl(209, 34%, 30%);\r\n  --clr-grey-4: hsl(209, 28%, 39%);\r\n  --clr-grey-5: hsl(210, 22%, 49%);\r\n  --clr-grey-6: hsl(209, 23%, 60%);\r\n  --clr-grey-7: hsl(211, 27%, 70%);\r\n  --clr-grey-8: hsl(210, 31%, 80%);\r\n  --clr-grey-9: hsl(212, 33%, 89%);\r\n  --clr-grey-10: hsl(210, 36%, 96%);\r\n  --clr-white: #fff;\r\n  --clr-red-dark: hsl(360, 67%, 44%);\r\n  --clr-red-light: hsl(360, 71%, 66%);\r\n  --clr-green-dark: hsl(125, 67%, 44%);\r\n  --clr-green-light: hsl(125, 71%, 66%);\r\n  --clr-black: #222;\r\n  --ff-primary: \"Poppins\", sans-serif;\r\n  --transition: all 0.3s linear;\r\n  --spacing: 0.1rem;\r\n  --radius: 0.25rem;\r\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n  --max-width: 1170px;\r\n  --fixed-width: 620px;\r\n  --text-color: #d3d3d3;\r\n  --color-black: #272a31;\r\n  --color-orange: #ec5242;\r\n  --light-background-color: #f7f7f9;\r\n  --white-background: #fff;\r\n}\r\n\r\n/*\r\n      Global Styles\r\n      */\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--ff-primary);\r\n  background: #e5e6e99f;\r\n  color: var(--clr-grey-1);\r\n  line-height: 1.5;\r\n  font-size: 0.875rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.todo-section {\r\n  background-color: var(--white-background);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  padding: 1.5rem;\r\n  margin: 84px 12px 0 12px;\r\n}\r\n\r\n.todo-section h1 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.task-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 8vh;\r\n}\r\n\r\n.task-form input {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n}\r\n\r\n.task-form button {\r\n  background-color: var(--light-background-color);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#todoList {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-right: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#todoList::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n#todoList li {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 8vh;\r\n}\r\n\r\n#todoItem {\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n#todoItem,\r\n.task-form {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n#checked {\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  border-radius: 50%;\r\n  margin-right: 1rem;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n#listItem {\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n#delete {\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.move {\r\n  display: block;\r\n  cursor: move;\r\n}\r\n\r\n.clearCompleted {\r\n  background-color: var(--light-background-color);\r\n  padding: 0.8rem;\r\n  border: none;\r\n  color: #aaa;\r\n  font-size: 1rem;\r\n}\r\n\r\n.clearCompleted:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.notification {\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  color: rgb(15, 97, 15);\r\n}\r\n\r\n.selection {\r\n  background-color: #ccc;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .todo-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    max-width: 40%;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    padding: 1.5rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,mCAAmC;EACnC,qCAAqC;EACrC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,iCAAiC;EACjC,iBAAiB;EACjB,kCAAkC;EAClC,mCAAmC;EACnC,oCAAoC;EACpC,qCAAqC;EACrC,iBAAiB;EACjB,mCAAmC;EACnC,6BAA6B;EAC7B,iBAAiB;EACjB,iBAAiB;EACjB,6CAA6C;EAC7C,4CAA4C;EAC5C,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,uBAAuB;EACvB,iCAAiC;EACjC,wBAAwB;AAC1B;;AAEA;;OAEO;;AAEP;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;EAC9B,qBAAqB;EACrB,wBAAwB;EACxB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uCAAuC;EACvC,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,+CAA+C;EAC/C,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,+CAA+C;EAC/C,eAAe;EACf,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,WAAW;IACX,aAAa;IACb,SAAS;IACT,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,cAAc;IACd,mBAAmB;IACnB,uCAAuC;IACvC,eAAe;EACjB;AACF","sourcesContent":[":root {\r\n  --clr-primary-1: hsl(205, 86%, 17%);\r\n  --clr-primary-2: hsl(205, 77%, 27%);\r\n  --clr-primary-3: hsl(205, 72%, 37%);\r\n  --clr-primary-4: hsl(205, 63%, 48%);\r\n  --clr-primary-5: hsl(205, 78%, 60%);\r\n  --clr-primary-6: hsl(205, 89%, 70%);\r\n  --clr-primary-7: hsl(205, 90%, 76%);\r\n  --clr-primary-8: hsl(205, 86%, 81%);\r\n  --clr-primary-9: hsl(205, 90%, 88%);\r\n  --clr-primary-10: hsl(205, 100%, 96%);\r\n  --clr-grey-1: hsl(209, 61%, 16%);\r\n  --clr-grey-2: hsl(211, 39%, 23%);\r\n  --clr-grey-3: hsl(209, 34%, 30%);\r\n  --clr-grey-4: hsl(209, 28%, 39%);\r\n  --clr-grey-5: hsl(210, 22%, 49%);\r\n  --clr-grey-6: hsl(209, 23%, 60%);\r\n  --clr-grey-7: hsl(211, 27%, 70%);\r\n  --clr-grey-8: hsl(210, 31%, 80%);\r\n  --clr-grey-9: hsl(212, 33%, 89%);\r\n  --clr-grey-10: hsl(210, 36%, 96%);\r\n  --clr-white: #fff;\r\n  --clr-red-dark: hsl(360, 67%, 44%);\r\n  --clr-red-light: hsl(360, 71%, 66%);\r\n  --clr-green-dark: hsl(125, 67%, 44%);\r\n  --clr-green-light: hsl(125, 71%, 66%);\r\n  --clr-black: #222;\r\n  --ff-primary: \"Poppins\", sans-serif;\r\n  --transition: all 0.3s linear;\r\n  --spacing: 0.1rem;\r\n  --radius: 0.25rem;\r\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n  --max-width: 1170px;\r\n  --fixed-width: 620px;\r\n  --text-color: #d3d3d3;\r\n  --color-black: #272a31;\r\n  --color-orange: #ec5242;\r\n  --light-background-color: #f7f7f9;\r\n  --white-background: #fff;\r\n}\r\n\r\n/*\r\n      Global Styles\r\n      */\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--ff-primary);\r\n  background: #e5e6e99f;\r\n  color: var(--clr-grey-1);\r\n  line-height: 1.5;\r\n  font-size: 0.875rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.todo-section {\r\n  background-color: var(--white-background);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  padding: 1.5rem;\r\n  margin: 84px 12px 0 12px;\r\n}\r\n\r\n.todo-section h1 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.task-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 8vh;\r\n}\r\n\r\n.task-form input {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n}\r\n\r\n.task-form button {\r\n  background-color: var(--light-background-color);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#todoList {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-right: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#todoList::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n#todoList li {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 8vh;\r\n}\r\n\r\n#todoItem {\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n#todoItem,\r\n.task-form {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n#checked {\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  border-radius: 50%;\r\n  margin-right: 1rem;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n#listItem {\r\n  width: 100%;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n#delete {\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.move {\r\n  display: block;\r\n  cursor: move;\r\n}\r\n\r\n.clearCompleted {\r\n  background-color: var(--light-background-color);\r\n  padding: 0.8rem;\r\n  border: none;\r\n  color: #aaa;\r\n  font-size: 1rem;\r\n}\r\n\r\n.clearCompleted:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.notification {\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  color: rgb(15, 97, 15);\r\n}\r\n\r\n.selection {\r\n  background-color: #ccc;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .todo-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    max-width: 40%;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    padding: 1.5rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/modules/toDoObject.js");
/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTask.js */ "./src/modules/displayTask.js");



const addTask = document.querySelector('#add-todo');
const task = document.querySelector('#todo');
const notification = document.querySelector('.notification');

const isSuccess = () => {
  notification.style.display = 'flex';
  notification.textContent = 'Task added successfully!';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

const isError = () => {
  notification.style.display = 'flex';
  notification.textContent = 'Please enter a task';
  notification.style.color = 'red';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

const addScroll = () => {
  const todoList = document.querySelector('#todoList');
  if (_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject.length >= 5) {
    todoList.style.height = '30vh';
  } else {
    todoList.style.height = 'auto';
  }
};

const addTasks = () => {
  addTask.addEventListener('click', () => {
    if (task.value === '') {
      isError();
    } else {
      const todo = new _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.Todo(task.value);
      _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject.push(todo);
      (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      task.value = '';
      addScroll();
      isSuccess();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTasks);


/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/modules/toDoObject.js");
/* harmony import */ var _TodoMagazine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoMagazine.js */ "./src/modules/TodoMagazine.js");



const toDoItemStatus = () => {
  const checked = document.querySelectorAll('input[type=checkbox]');
  const listItem = document.querySelectorAll('#listItem');
  checked.forEach((input, index) => input.addEventListener('change', () => {
    if (input.checked) {
      _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject[index].completed = true;
      listItem[index].style.textDecoration = 'line-through';
      listItem[index].style.color = 'grey';
    } else {
      _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject[index].completed = false;
      listItem[index].style.textDecoration = 'none';
      listItem[index].style.color = 'black';
    }
    (0,_TodoMagazine_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoItemStatus);


/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/modules/toDoObject.js");
/* harmony import */ var _clearAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearAll.js */ "./src/modules/clearAll.js");
/* harmony import */ var _TodoMagazine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoMagazine.js */ "./src/modules/TodoMagazine.js");




const todoList = document.querySelector('#todoList');
const createTodoList = () => {
  (0,_TodoMagazine_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject);
  todoList.innerHTML = _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject.map((data) => `<li id="todoItem" class="todoItem"><input type="checkbox" id="checked" ${
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
    _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.Todo.removeTodo(item);
    createTodoList();
  }));

  listItem.forEach((input, index) => input.addEventListener('click', () => {
    todo[index].style.backgroundColor = '#dfdeab';
    listItem[index].style.backgroundColor = '#dfdeab';
    deleteBtn[index].backgroundColor = '#dfdeab';
  }));

  listItem.forEach((input, index) => input.addEventListener('change', () => {
    _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject[index].description = input.value;
    (0,_TodoMagazine_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject);
  }));

  clear.addEventListener('click', () => {
    const completed = _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject.filter((data) => data.completed === true);
    completed.forEach((data) => {
      const index = _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject.indexOf(data);
      _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject.splice(index, 1);
    });
    (0,_TodoMagazine_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObject);
    createTodoList();
  });
  (0,_clearAll_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoList);


/***/ }),

/***/ "./src/modules/toDoObject.js":
/*!***********************************!*\
  !*** ./src/modules/toDoObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_displayTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayTask.js */ "./src/modules/displayTask.js");
/* harmony import */ var _modules_addTodoTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addTodoTask.js */ "./src/modules/addTodoTask.js");
/* harmony import */ var _modules_clearAll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearAll.js */ "./src/modules/clearAll.js");





window.onload = (0,_modules_displayTask_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_addTodoTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_clearAll_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZCO0FBQ0Y7QUFDRzs7QUFFbkQsZ0JBQWdCLG1FQUFVO0FBQzFCLG1FQUFRO0FBQ1IsZ0VBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9tb2R1bGVzL1RvZG9NYWdhemluZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9tb2R1bGVzL2FkZFRvZG9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL21vZHVsZXMvY2xlYXJBbGwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9zcmMvbW9kdWxlcy9kaXNwbGF5VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9tb2R1bGVzL3RvRG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWNsci1wcmltYXJ5LTE6IGhzbCgyMDUsIDg2JSwgMTclKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktMjogaHNsKDIwNSwgNzclLCAyNyUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS0zOiBoc2woMjA1LCA3MiUsIDM3JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTQ6IGhzbCgyMDUsIDYzJSwgNDglKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktNTogaHNsKDIwNSwgNzglLCA2MCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS02OiBoc2woMjA1LCA4OSUsIDcwJSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTc6IGhzbCgyMDUsIDkwJSwgNzYlKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktODogaHNsKDIwNSwgODYlLCA4MSUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS05OiBoc2woMjA1LCA5MCUsIDg4JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTEwOiBoc2woMjA1LCAxMDAlLCA5NiUpO1xcclxcbiAgLS1jbHItZ3JleS0xOiBoc2woMjA5LCA2MSUsIDE2JSk7XFxyXFxuICAtLWNsci1ncmV5LTI6IGhzbCgyMTEsIDM5JSwgMjMlKTtcXHJcXG4gIC0tY2xyLWdyZXktMzogaHNsKDIwOSwgMzQlLCAzMCUpO1xcclxcbiAgLS1jbHItZ3JleS00OiBoc2woMjA5LCAyOCUsIDM5JSk7XFxyXFxuICAtLWNsci1ncmV5LTU6IGhzbCgyMTAsIDIyJSwgNDklKTtcXHJcXG4gIC0tY2xyLWdyZXktNjogaHNsKDIwOSwgMjMlLCA2MCUpO1xcclxcbiAgLS1jbHItZ3JleS03OiBoc2woMjExLCAyNyUsIDcwJSk7XFxyXFxuICAtLWNsci1ncmV5LTg6IGhzbCgyMTAsIDMxJSwgODAlKTtcXHJcXG4gIC0tY2xyLWdyZXktOTogaHNsKDIxMiwgMzMlLCA4OSUpO1xcclxcbiAgLS1jbHItZ3JleS0xMDogaHNsKDIxMCwgMzYlLCA5NiUpO1xcclxcbiAgLS1jbHItd2hpdGU6ICNmZmY7XFxyXFxuICAtLWNsci1yZWQtZGFyazogaHNsKDM2MCwgNjclLCA0NCUpO1xcclxcbiAgLS1jbHItcmVkLWxpZ2h0OiBoc2woMzYwLCA3MSUsIDY2JSk7XFxyXFxuICAtLWNsci1ncmVlbi1kYXJrOiBoc2woMTI1LCA2NyUsIDQ0JSk7XFxyXFxuICAtLWNsci1ncmVlbi1saWdodDogaHNsKDEyNSwgNzElLCA2NiUpO1xcclxcbiAgLS1jbHItYmxhY2s6ICMyMjI7XFxyXFxuICAtLWZmLXByaW1hcnk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xcclxcbiAgLS1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICAtLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIC0tbGlnaHQtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIC0tZGFyay1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgLS1tYXgtd2lkdGg6IDExNzBweDtcXHJcXG4gIC0tZml4ZWQtd2lkdGg6IDYyMHB4O1xcclxcbiAgLS10ZXh0LWNvbG9yOiAjZDNkM2QzO1xcclxcbiAgLS1jb2xvci1ibGFjazogIzI3MmEzMTtcXHJcXG4gIC0tY29sb3Itb3JhbmdlOiAjZWM1MjQyO1xcclxcbiAgLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xcclxcbiAgLS13aGl0ZS1iYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgICAgIEdsb2JhbCBTdHlsZXNcXHJcXG4gICAgICAqL1xcclxcblxcclxcbiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTVlNmU5OWY7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXktMSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogODRweCAxMnB4IDAgMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VjdGlvbiBoMSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDh2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0b2RvTGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9MaXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0xpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDh2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9JdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0l0ZW0sXFxyXFxuLnRhc2stZm9ybSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWNrZWQge1xcclxcbiAgd2lkdGg6IDEuM3JlbTtcXHJcXG4gIGhlaWdodDogMS4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3RJdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyQ29tcGxldGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jbGVhckNvbXBsZXRlZDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGlmaWNhdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMTUsIDk3LCAxNSk7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kby1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBp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QUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tY2xyLXByaW1hcnktMTogaHNsKDIwNSwgODYlLCAxNyUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS0yOiBoc2woMjA1LCA3NyUsIDI3JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTM6IGhzbCgyMDUsIDcyJSwgMzclKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktNDogaHNsKDIwNSwgNjMlLCA0OCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS01OiBoc2woMjA1LCA3OCUsIDYwJSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTY6IGhzbCgyMDUsIDg5JSwgNzAlKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktNzogaHNsKDIwNSwgOTAlLCA3NiUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS04OiBoc2woMjA1LCA4NiUsIDgxJSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTk6IGhzbCgyMDUsIDkwJSwgODglKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktMTA6IGhzbCgyMDUsIDEwMCUsIDk2JSk7XFxyXFxuICAtLWNsci1ncmV5LTE6IGhzbCgyMDksIDYxJSwgMTYlKTtcXHJcXG4gIC0tY2xyLWdyZXktMjogaHNsKDIxMSwgMzklLCAyMyUpO1xcclxcbiAgLS1jbHItZ3JleS0zOiBoc2woMjA5LCAzNCUsIDMwJSk7XFxyXFxuICAtLWNsci1ncmV5LTQ6IGhzbCgyMDksIDI4JSwgMzklKTtcXHJcXG4gIC0tY2xyLWdyZXktNTogaHNsKDIxMCwgMjIlLCA0OSUpO1xcclxcbiAgLS1jbHItZ3JleS02OiBoc2woMjA5LCAyMyUsIDYwJSk7XFxyXFxuICAtLWNsci1ncmV5LTc6IGhzbCgyMTEsIDI3JSwgNzAlKTtcXHJcXG4gIC0tY2xyLWdyZXktODogaHNsKDIxMCwgMzElLCA4MCUpO1xcclxcbiAgLS1jbHItZ3JleS05OiBoc2woMjEyLCAzMyUsIDg5JSk7XFxyXFxuICAtLWNsci1ncmV5LTEwOiBoc2woMjEwLCAzNiUsIDk2JSk7XFxyXFxuICAtLWNsci13aGl0ZTogI2ZmZjtcXHJcXG4gIC0tY2xyLXJlZC1kYXJrOiBoc2woMzYwLCA2NyUsIDQ0JSk7XFxyXFxuICAtLWNsci1yZWQtbGlnaHQ6IGhzbCgzNjAsIDcxJSwgNjYlKTtcXHJcXG4gIC0tY2xyLWdyZWVuLWRhcms6IGhzbCgxMjUsIDY3JSwgNDQlKTtcXHJcXG4gIC0tY2xyLWdyZWVuLWxpZ2h0OiBoc2woMTI1LCA3MSUsIDY2JSk7XFxyXFxuICAtLWNsci1ibGFjazogIzIyMjtcXHJcXG4gIC0tZmYtcHJpbWFyeTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XFxyXFxuICAtLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG4gIC0tcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgLS1saWdodC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgLS1kYXJrLXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAtLW1heC13aWR0aDogMTE3MHB4O1xcclxcbiAgLS1maXhlZC13aWR0aDogNjIwcHg7XFxyXFxuICAtLXRleHQtY29sb3I6ICNkM2QzZDM7XFxyXFxuICAtLWNvbG9yLWJsYWNrOiAjMjcyYTMxO1xcclxcbiAgLS1jb2xvci1vcmFuZ2U6ICNlYzUyNDI7XFxyXFxuICAtLWxpZ2h0LWJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XFxyXFxuICAtLXdoaXRlLWJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAgICAgR2xvYmFsIFN0eWxlc1xcclxcbiAgICAgICovXFxyXFxuXFxyXFxuKixcXHJcXG46OmFmdGVyLFxcclxcbjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXHJcXG4gIGJhY2tncm91bmQ6ICNlNWU2ZTk5ZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItZ3JleS0xKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWJhY2tncm91bmQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgbWFyZ2luOiA4NHB4IDEycHggMCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWN0aW9uIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogOHZoO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1mb3JtIGlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1mb3JtIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9MaXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0xpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvTGlzdCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogOHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0l0ZW0ge1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiN0b2RvSXRlbSxcXHJcXG4udGFzay1mb3JtIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hlY2tlZCB7XFxyXFxuICB3aWR0aDogMS4zcmVtO1xcclxcbiAgaGVpZ2h0OiAxLjNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdEl0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJDb21wbGV0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyQ29tcGxldGVkOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90aWZpY2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHJnYigxNSwgOTcsIDE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b2RvLXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFRvZG9NYWdhemluZSA9ICh0b2RvTGlzdCkgPT4ge1xuICB0b2RvTGlzdC5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTWFnYXppbmU7XG4iLCJpbXBvcnQgeyBUb2RvLCB0b0RvT2JqZWN0IH0gZnJvbSAnLi90b0RvT2JqZWN0LmpzJztcbmltcG9ydCBjcmVhdGVUb2RvTGlzdCBmcm9tICcuL2Rpc3BsYXlUYXNrLmpzJztcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kbycpO1xuY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XG5jb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJyk7XG5cbmNvbnN0IGlzU3VjY2VzcyA9ICgpID0+IHtcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9ICdUYXNrIGFkZGVkIHN1Y2Nlc3NmdWxseSEnO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBub3RpZmljYXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSwgMjAwMCk7XG59O1xuXG5jb25zdCBpc0Vycm9yID0gKCkgPT4ge1xuICBub3RpZmljYXRpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gJ1BsZWFzZSBlbnRlciBhIHRhc2snO1xuICBub3RpZmljYXRpb24uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sIDIwMDApO1xufTtcblxuY29uc3QgYWRkU2Nyb2xsID0gKCkgPT4ge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTGlzdCcpO1xuICBpZiAodG9Eb09iamVjdC5sZW5ndGggPj0gNSkge1xuICAgIHRvZG9MaXN0LnN0eWxlLmhlaWdodCA9ICczMHZoJztcbiAgfSBlbHNlIHtcbiAgICB0b2RvTGlzdC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gIH1cbn07XG5cbmNvbnN0IGFkZFRhc2tzID0gKCkgPT4ge1xuICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0YXNrLnZhbHVlID09PSAnJykge1xuICAgICAgaXNFcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGFzay52YWx1ZSk7XG4gICAgICB0b0RvT2JqZWN0LnB1c2godG9kbyk7XG4gICAgICBjcmVhdGVUb2RvTGlzdCgpO1xuICAgICAgdGFzay52YWx1ZSA9ICcnO1xuICAgICAgYWRkU2Nyb2xsKCk7XG4gICAgICBpc1N1Y2Nlc3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkVGFza3M7XG4iLCJpbXBvcnQgeyB0b0RvT2JqZWN0IH0gZnJvbSAnLi90b0RvT2JqZWN0LmpzJztcbmltcG9ydCBUb2RvTWFnYXppbmUgZnJvbSAnLi9Ub2RvTWFnYXppbmUuanMnO1xuXG5jb25zdCB0b0RvSXRlbVN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpc3RJdGVtJyk7XG4gIGNoZWNrZWQuZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgIHRvRG9PYmplY3RbaW5kZXhdLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBsaXN0SXRlbVtpbmRleF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgIGxpc3RJdGVtW2luZGV4XS5zdHlsZS5jb2xvciA9ICdncmV5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdG9Eb09iamVjdFtpbmRleF0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICBsaXN0SXRlbVtpbmRleF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICBsaXN0SXRlbVtpbmRleF0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIH1cbiAgICBUb2RvTWFnYXppbmUodG9Eb09iamVjdCk7XG4gIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9JdGVtU3RhdHVzO1xuIiwiaW1wb3J0IHsgVG9kbywgdG9Eb09iamVjdCB9IGZyb20gJy4vdG9Eb09iamVjdC5qcyc7XG5pbXBvcnQgdG9Eb0l0ZW1TdGF0dXMgZnJvbSAnLi9jbGVhckFsbC5qcyc7XG5pbXBvcnQgVG9kb01hZ2F6aW5lIGZyb20gJy4vVG9kb01hZ2F6aW5lLmpzJztcblxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb0xpc3QnKTtcbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICBUb2RvTWFnYXppbmUodG9Eb09iamVjdCk7XG4gIHRvZG9MaXN0LmlubmVySFRNTCA9IHRvRG9PYmplY3RcbiAgICAubWFwKChkYXRhKSA9PiBgPGxpIGlkPVwidG9kb0l0ZW1cIiBjbGFzcz1cInRvZG9JdGVtXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tlZFwiICR7XG4gICAgICBkYXRhLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfSA+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxpc3RJdGVtXCIgdmFsdWU9IFwiJHtkYXRhLmRlc2NyaXB0aW9ufVwiPlxuICAgICAgPGkgdGl0bGU9XCJDbGljayB0byBEZWxldGVcIiBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsIG1vdmVcIj48L2k+XG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiIGlkPVwiZGVsZXRlXCI+PC9pPjwvbGk+YClcbiAgICAuam9pbignJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZWxldGUnKTtcbiAgY29uc3QgbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3ZlJyk7XG4gIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kb0l0ZW0nKTtcbiAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlzdEl0ZW0nKTtcbiAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gtY2FuJyk7XG4gIGNvbnN0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyQ29tcGxldGVkJyk7XG5cbiAgbW92ZS5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW92ZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkZWxldGVCdG5baW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdHJhc2hbaW5kZXhdLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgdG9kb1tpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkZmRlYWInO1xuICAgIGxpc3RJdGVtW2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RmZGVhYic7XG4gICAgZGVsZXRlQnRuW2luZGV4XS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RmZGVhYic7XG4gIH0pKTtcblxuICBkZWxldGVCdG4uZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBpbmRleCArIDE7XG4gICAgVG9kby5yZW1vdmVUb2RvKGl0ZW0pO1xuICAgIGNyZWF0ZVRvZG9MaXN0KCk7XG4gIH0pKTtcblxuICBsaXN0SXRlbS5mb3JFYWNoKChpbnB1dCwgaW5kZXgpID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9baW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZGZkZWFiJztcbiAgICBsaXN0SXRlbVtpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkZmRlYWInO1xuICAgIGRlbGV0ZUJ0bltpbmRleF0uYmFja2dyb3VuZENvbG9yID0gJyNkZmRlYWInO1xuICB9KSk7XG5cbiAgbGlzdEl0ZW0uZm9yRWFjaCgoaW5wdXQsIGluZGV4KSA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgdG9Eb09iamVjdFtpbmRleF0uZGVzY3JpcHRpb24gPSBpbnB1dC52YWx1ZTtcbiAgICBUb2RvTWFnYXppbmUodG9Eb09iamVjdCk7XG4gIH0pKTtcblxuICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSB0b0RvT2JqZWN0LmZpbHRlcigoZGF0YSkgPT4gZGF0YS5jb21wbGV0ZWQgPT09IHRydWUpO1xuICAgIGNvbXBsZXRlZC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRvRG9PYmplY3QuaW5kZXhPZihkYXRhKTtcbiAgICAgIHRvRG9PYmplY3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgICBUb2RvTWFnYXppbmUodG9Eb09iamVjdCk7XG4gICAgY3JlYXRlVG9kb0xpc3QoKTtcbiAgfSk7XG4gIHRvRG9JdGVtU3RhdHVzKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvTGlzdDtcbiIsImNvbnN0IHRvRG9PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKSB8fCBbXTtcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRhc2spIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGFzaztcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5kZXggPSB0b0RvT2JqZWN0Lmxlbmd0aCArIDE7XG4gIH1cblxuICBhZGRUb2RvID0gKCkgPT4ge1xuICAgIHRvRG9PYmplY3QucHVzaCh0aGlzKTtcbiAgfTtcblxuICBzdGF0aWMgdXBkYXRlSW5kZXggPSAoKSA9PiB7XG4gICAgdG9Eb09iamVjdC5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgZGF0YS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIHRvRG9PYmplY3Quc3BsaWNlKGluZGV4IC0gMSwgMSk7XG4gICAgdGhpcy51cGRhdGVJbmRleCgpO1xuICB9O1xufVxuXG5leHBvcnQgeyBUb2RvLCB0b0RvT2JqZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5VGFzay5qcyc7XG5pbXBvcnQgYWRkVGFza3MgZnJvbSAnLi9tb2R1bGVzL2FkZFRvZG9UYXNrLmpzJztcbmltcG9ydCB0b0RvSXRlbVN0YXR1cyBmcm9tICcuL21vZHVsZXMvY2xlYXJBbGwuanMnO1xuXG53aW5kb3cub25sb2FkID0gY3JlYXRlVG9kbygpO1xuYWRkVGFza3MoKTtcbnRvRG9JdGVtU3RhdHVzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=