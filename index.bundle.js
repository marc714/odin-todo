/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0px;\n    margin: 0px;\n}\n\n.container {\n    /* background: url('../assets/mountain.jpg'); */\n    background-size: cover;\n    height: 100vh;\n    font-size: 3rem;\n    display: grid;\n    grid-template-rows: max-content 3fr minmax(auto, 100px);\n}\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.logo-container img {\n    max-height: 200px;\n}\n\n.app-body {\n    display: grid;\n    grid-template-columns: minmax(auto, 1fr) 4fr;\n\n}\n\nsidebar {\n    background-color: rgb(200, 200, 200);\n}\n\n.main-body {\n    background-color: rgb(235, 235, 235);\n    padding: 20px;\n}\n\n\nfooter {\n    background-color: darkgray;\n}\n\n\n.task {\n    position: relative;\n    display: grid;\n    font-size: 1.5rem;\n    background-color: azure;\n    /* height: 50px; */\n    margin-bottom: 20px;\n    align-items: end;\n    width: 100%;\n    column-gap: 20px;\n    grid-template-columns: 200px 200px minmax(max-content, auto) minmax(max-content, 120px) 100px 50px;\n    grid-template-areas: \n        'project-l title-l description-l date-l priority-l complete-l'\n        'project-v title-v description-v date-v priority-v complete-v'\n        'btn-ctn   btn-ctn btn-ctn       btn-ctn btn-ctn   btn-ctn'\n        'expand    expand  expand        expand  expand    expand'\n        ;\n}\n\n/* .project .label { grid-area: project-l; }\n.project .item { grid-area: project-v; } */\n.task-button-container {\n    grid-area: btn-ctn;\n}\n.task-expand {\n    grid-area: expand;\n}\n\n\n\n\n/* \n.task .project::before {\n    content: \"PROJECT\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .title::before {\n    content: \"TITLE\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .description::before {\n    content: \"DESCRIPTION\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .date::before {\n    content: \"DATE\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .priority::before {\n    content: \"PRIORITY\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .completed::before {\n    content: \"DONE?\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n} */\n\n.task .item {\n    \n}\n\n.task .description {\n    background-color: rgb(177, 130, 177);\n}\n\n\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content/Box */\n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n\n/* Sidebar */\n.project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n} \n \n.project-name-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0px 10px;\n    /* gap: 20px; */\n    background-color: lavender;\n}\n\n.project-list a {\n    cursor: pointer;\n    /* background-color: lavender; */\n    display: flex;\n    /* padding: 0px 10px; */\n    font-size: 2rem;\n  }\n\n.project-list a:hover {\n    /* box-shadow: 2px 2px 2px rgb(254, 0, 0); */\n    color: red;\n  }\n\n\n/* delete warning message */\n#project-modal {\n    display: none;\n    align-items: center;\n    justify-items: center;\n    height: 25%;\n    width: 80%;\n    margin: auto;\n  }\n\n  #project-modal .close-modal {\n    display: none;\n  }\n\n  .task-expand {\n    display: flex;\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .task-button-container {\n    width: 100%;\n    background-color: #e5d9d9;\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n  }\n\n  .completed {\n    overflow: hidden;\n  }\n\n\n\n  /* Rules for sizing the icon. */\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }\n.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,+CAA+C;IAC/C,sBAAsB;IACtB,aAAa;IACb,eAAe;IACf,aAAa;IACb,uDAAuD;AAC3D;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,4CAA4C;;AAEhD;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,aAAa;AACjB;;;AAGA;IACI,0BAA0B;AAC9B;;;AAGA;IACI,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,kGAAkG;IAClG;;;;;QAKI;AACR;;AAEA;0CAC0C;AAC1C;IACI,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;;;;;AAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAyCG;;AAEH;;AAEA;;AAEA;IACI,oCAAoC;AACxC;;;;;AAKA,2BAA2B;AAC3B;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;EAC1D;;EAEA,sBAAsB;EACtB;IACE,yBAAyB;IACzB,gBAAgB,EAAE,kCAAkC;IACpD,aAAa;IACb,sBAAsB;IACtB,UAAU,EAAE,oDAAoD;EAClE;;EAEA,qBAAqB;EACrB;IACE,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;;IAEE,YAAY;IACZ,qBAAqB;IACrB,eAAe;EACjB;;;AAGF,YAAY;AACZ;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,eAAe;IACf,gCAAgC;IAChC,aAAa;IACb,uBAAuB;IACvB,eAAe;EACjB;;AAEF;IACI,4CAA4C;IAC5C,UAAU;EACZ;;;AAGF,2BAA2B;AAC3B;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,UAAU;IACV,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,yBAAyB;IACzB,aAAa;IACb,yBAAyB;IACzB,SAAS;EACX;;EAEA;IACE,gBAAgB;EAClB;;;;EAIA,+BAA+B;AACjC,wBAAwB,eAAe,EAAE;AACzC,wBAAwB,eAAe,EAAE;AACzC,wBAAwB,eAAe,EAAE;AACzC,wBAAwB,eAAe,EAAE;;AAEzC,0DAA0D;AAC1D,0BAA0B,0BAA0B,EAAE;AACtD,sCAAsC,0BAA0B,EAAE;;AAElE,yDAAyD;AACzD,2BAA2B,6BAA6B,EAAE;AAC1D,uCAAuC,+BAA+B,EAAE;;AAExE,wBAAwB,eAAe,EAAE;AACzC,wBAAwB,eAAe,EAAE;AACzC,wBAAwB,eAAe,EAAE;AACzC,wBAAwB,eAAe,EAAE","sourcesContent":["* {\n    padding: 0px;\n    margin: 0px;\n}\n\n.container {\n    /* background: url('../assets/mountain.jpg'); */\n    background-size: cover;\n    height: 100vh;\n    font-size: 3rem;\n    display: grid;\n    grid-template-rows: max-content 3fr minmax(auto, 100px);\n}\n\nheader {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.logo-container img {\n    max-height: 200px;\n}\n\n.app-body {\n    display: grid;\n    grid-template-columns: minmax(auto, 1fr) 4fr;\n\n}\n\nsidebar {\n    background-color: rgb(200, 200, 200);\n}\n\n.main-body {\n    background-color: rgb(235, 235, 235);\n    padding: 20px;\n}\n\n\nfooter {\n    background-color: darkgray;\n}\n\n\n.task {\n    position: relative;\n    display: grid;\n    font-size: 1.5rem;\n    background-color: azure;\n    /* height: 50px; */\n    margin-bottom: 20px;\n    align-items: end;\n    width: 100%;\n    column-gap: 20px;\n    grid-template-columns: 200px 200px minmax(max-content, auto) minmax(max-content, 120px) 100px 50px;\n    grid-template-areas: \n        'project-l title-l description-l date-l priority-l complete-l'\n        'project-v title-v description-v date-v priority-v complete-v'\n        'btn-ctn   btn-ctn btn-ctn       btn-ctn btn-ctn   btn-ctn'\n        'expand    expand  expand        expand  expand    expand'\n        ;\n}\n\n/* .project .label { grid-area: project-l; }\n.project .item { grid-area: project-v; } */\n.task-button-container {\n    grid-area: btn-ctn;\n}\n.task-expand {\n    grid-area: expand;\n}\n\n\n\n\n/* \n.task .project::before {\n    content: \"PROJECT\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .title::before {\n    content: \"TITLE\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .description::before {\n    content: \"DESCRIPTION\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .date::before {\n    content: \"DATE\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .priority::before {\n    content: \"PRIORITY\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n}\n\n.task .completed::before {\n    content: \"DONE?\";\n    font-size: 14px;\n    position: absolute;\n    top: 8px;\n} */\n\n.task .item {\n    \n}\n\n.task .description {\n    background-color: rgb(177, 130, 177);\n}\n\n\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content/Box */\n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n\n/* Sidebar */\n.project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n} \n \n.project-name-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0px 10px;\n    /* gap: 20px; */\n    background-color: lavender;\n}\n\n.project-list a {\n    cursor: pointer;\n    /* background-color: lavender; */\n    display: flex;\n    /* padding: 0px 10px; */\n    font-size: 2rem;\n  }\n\n.project-list a:hover {\n    /* box-shadow: 2px 2px 2px rgb(254, 0, 0); */\n    color: red;\n  }\n\n\n/* delete warning message */\n#project-modal {\n    display: none;\n    align-items: center;\n    justify-items: center;\n    height: 25%;\n    width: 80%;\n    margin: auto;\n  }\n\n  #project-modal .close-modal {\n    display: none;\n  }\n\n  .task-expand {\n    display: flex;\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .task-button-container {\n    width: 100%;\n    background-color: #e5d9d9;\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n  }\n\n  .completed {\n    overflow: hidden;\n  }\n\n\n\n  /* Rules for sizing the icon. */\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }\n.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }\n\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/components/ui/addDeleteProjectButton.js":
/*!*****************************************************!*\
  !*** ./src/components/ui/addDeleteProjectButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeleteProjectBtn": () => (/* binding */ addDeleteProjectBtn)
/* harmony export */ });
/* harmony import */ var _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/taskArray */ "./src/modules/taskArray.js");
/* harmony import */ var _utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/localStorageUpdate */ "./src/utils/localStorageUpdate.js");
/* harmony import */ var _utils_reloadUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/reloadUI */ "./src/utils/reloadUI.js");
/* harmony import */ var _utils_clearUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/clearUI */ "./src/utils/clearUI.js");





function addDeleteProjectBtn (projectTitle) {  
    const myBody = document.querySelector('.delete-button-area')
    // button
    const projectRemove = document.createElement('button');
    projectRemove.classList.add('project-remove-button');
    projectRemove.textContent = "Delete Project";

    myBody.append(projectRemove);
    
    // modal
    const openBtn = document.querySelector('.project-remove-button');
    const projectModal = document.querySelector('#project-modal');
    // const closeBtn = document.querySelector('.close-modal');
    
    const confirmDelete = document.querySelector('.confirm-delete-project');
    const cancelDelete = document.querySelector('.cancel-delete-project');
    
    const appBody = document.querySelector('.app-body');
    
    openBtn.addEventListener('click', ()=> { 
        appBody.style.display = "none";
        projectModal.style.display = "grid"; 
        warningMessage(projectTitle);
    });

    cancelDelete.addEventListener('click', ()=> { 
        projectModal.style.display = "none";
        appBody.style.display = "grid";
        const warning = document.querySelector('.warning-text');
        warning.textContent = "";
    });

    // logic
    confirmDelete.addEventListener('click', ()=>{
        deleteProject(projectTitle);
        console.log("back to confirmDelete")
        // updateLocalStorage();
        projectModal.style.display = "none";
        appBody.style.display = "grid";
        // clearUI();
        // refresh("all");
    });
    
}

function warningMessage(projectTitle){
    const warning = document.querySelector('.warning-text');
    let myText = `Are you sure you want to delete: ${projectTitle}`;
    warning.append(myText);
}

// https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property
function deleteProject(projectTitle){
    if(projectTitle === "all"){
        console.log("can't delete ALL")
        return;
    } else {
        console.log(`project title: ${projectTitle}`);
        let delProjIndex = _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.findIndex(obj => obj.project === projectTitle);
        console.log(`Project Name: ${projectTitle}`);
        console.log(`Project Index: ${delProjIndex}`);
        if(_modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray[delProjIndex].project == projectTitle) {
            console.log('delete conditoin matches')
            console.log(_modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray[delProjIndex].project);
            _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.splice(delProjIndex, 1);
            (0,_utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
        
            (0,_utils_clearUI__WEBPACK_IMPORTED_MODULE_3__.clearUI)();
            (0,_utils_reloadUI__WEBPACK_IMPORTED_MODULE_2__.refresh)("all");
            return;
            //location.reload();
        }
    };

}


 

/***/ }),

/***/ "./src/components/ui/modalProjectSelector.js":
/*!***************************************************!*\
  !*** ./src/components/ui/modalProjectSelector.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectorButton": () => (/* binding */ selectorButton),
/* harmony export */   "selectorButtonTaskExpand": () => (/* binding */ selectorButtonTaskExpand)
/* harmony export */ });
/* harmony import */ var _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/taskArray */ "./src/modules/taskArray.js");
/* harmony import */ var _modules_taskIndexSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/taskIndexSearch */ "./src/modules/taskIndexSearch.js");
//module finds all project names
// you must invoke this every time a new project is created/deleted.




const selectorButton = () => {
    // for New Task button
    const modalSelectProject = document.querySelector('#select-project').options;
    // for task expand field
    // const taskExpand = document.querySelector('.task-expand #select-project');


    // remove any exisiting
    const length = modalSelectProject.length;
    for(let i = length-1; i>=0; i--) {
        modalSelectProject[i] = null;
    }

    // itemArray.forEach(option => modalSelectProject.add(new Option(option.text, option.value, option.selected)));
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option
    let tempArray = [];
    _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach( projectsArrayObj => {
        if(!tempArray.includes(projectsArrayObj['project'])){
            modalSelectProject.add(new Option(projectsArrayObj.project, projectsArrayObj.project))
            tempArray.push(projectsArrayObj.project)
        }
    });
    console.log(_modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
}

// function removeOptions(selectElement) {
    
// }


const selectorButtonTaskExpand = (e) => {
    // for new taskExpandEdit module which already created the selector.
    const taskExpand = document.querySelector('#select-project2').options;
    // for task expand field
    // const taskExpand = document.querySelector('.task-expand #select-project');


    // remove any exisiting
    const length = taskExpand.length;
    for(let i = length-1; i>=0; i--) {
        taskExpand[i] = null;
    }


    // getting default Project Name option selected
    let taskParentNode = e.target.closest('.task');
    let taskID = taskParentNode.dataset.identity;
    console.log("selectorButtonTaskExpand taskID: " + taskID);

    let projectNameArray = (0,_modules_taskIndexSearch__WEBPACK_IMPORTED_MODULE_1__.taskIndexSearch)(taskID);
    let outter = projectNameArray[0];
    let inner = projectNameArray[1];
    console.log("selectorButtonTaskExpand outter: " + outter);
    console.log("selectorButtonTaskExpand inner: " + inner);

    let taskObject = _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray[outter].tasks[inner];
    console.log(taskObject);
    let taskProject = _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray[outter].tasks[inner].project;


    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option
    // itemArray.forEach(option => modalSelectProject.add(new Option(option.text, option.value, option.selected)));
    let tempArray = [];
    _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach( projectsArrayObj => {
        if(!tempArray.includes(projectsArrayObj['project'])){ //avoid duplicates
            if( projectsArrayObj.project == taskProject ){
                taskExpand.add(new Option(projectsArrayObj.project, projectsArrayObj.project, true, true))
            } else {
                taskExpand.add(new Option(projectsArrayObj.project, projectsArrayObj.project, false))
            }
            tempArray.push(projectsArrayObj.project)
        }
    });
    console.log(_modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
}






// not bad https://alvarotrigo.com/blog/javascript-select-option/

/***/ }),

/***/ "./src/components/ui/newProjectButton.js":
/*!***********************************************!*\
  !*** ./src/components/ui/newProjectButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectNewBtn": () => (/* binding */ projectNewBtn)
/* harmony export */ });
/* harmony import */ var _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/taskArray */ "./src/modules/taskArray.js");
/* harmony import */ var _utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/localStorageUpdate */ "./src/utils/localStorageUpdate.js");
/* harmony import */ var _modalProjectSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalProjectSelector */ "./src/components/ui/modalProjectSelector.js");
/* harmony import */ var _utils_clearBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/clearBody */ "./src/utils/clearBody.js");
/* harmony import */ var _utils_clearProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/clearProjectList */ "./src/utils/clearProjectList.js");
/* harmony import */ var _modules_projectDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/projectDisplay */ "./src/modules/projectDisplay.js");
/* harmony import */ var _modules_projectList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/projectList */ "./src/modules/projectList.js");
/* harmony import */ var _modules_projectNameTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/projectNameTest */ "./src/modules/projectNameTest.js");
/* harmony import */ var _utils_clearTaskExpand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/clearTaskExpand */ "./src/utils/clearTaskExpand.js");











function projectNewBtn(){
    const projectBtn = document.querySelector('#new-project');
    projectBtn.addEventListener('click', ()=>{
        //checks if new project input field exists
        const doesElementExist = document.querySelector('.new-project-input');
        if (doesElementExist){
            console.log("project input field exists. please submit value")
        } else {
            // creates project input field
            const projectList = document.querySelector('.project-list');
            const projectField = document.createElement('input');
            projectField.setAttribute("type", "text")
            projectField.setAttribute("placeholder", "project")
            projectField.classList.add("new-project-input");
            projectList.append(projectField);

            projectField.addEventListener('keypress', (e)=> {
                if(e.key === 'Enter'){
                    console.log(projectField.value);
                    let tempObj = {};
                    tempObj['project'] = projectField.value;
                    tempObj['tasks'] = [];
                    _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.push(tempObj);
                    console.log(_modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray)
                    projectField.remove();
                    (0,_utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
                    
                    //either add new Div or run projectList? Need to remove old projectList first.
                    //removeTaskBtn();
                    (0,_utils_clearBody__WEBPACK_IMPORTED_MODULE_3__.clearBody)();
                    (0,_utils_clearProjectList__WEBPACK_IMPORTED_MODULE_4__.clearProjects)();
                    (0,_utils_clearTaskExpand__WEBPACK_IMPORTED_MODULE_8__.clearTaskExpand)();

                    // reload dashboard
                    (0,_modalProjectSelector__WEBPACK_IMPORTED_MODULE_2__.selectorButton)(); // adds new project to selector button
                    (0,_modules_projectDisplay__WEBPACK_IMPORTED_MODULE_5__.projectDisplay)(projectField.value);
                    (0,_modules_projectList__WEBPACK_IMPORTED_MODULE_6__.getProjectList)();
                }
            })
        }
    })           
}



// need to add logic if project name already exists. cap sens?

/***/ }),

/***/ "./src/components/ui/newTaskButton.js":
/*!********************************************!*\
  !*** ./src/components/ui/newTaskButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeTaskBtn": () => (/* binding */ closeTaskBtn),
/* harmony export */   "taskBtn": () => (/* binding */ taskBtn)
/* harmony export */ });
/* harmony import */ var _modalProjectSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalProjectSelector */ "./src/components/ui/modalProjectSelector.js");
/* harmony import */ var _modules_taskSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/taskSubmit */ "./src/modules/taskSubmit.js");
// module for modal popup

// import all project names for form select input

// import submit button w/ eventListener attached. 




const modal = document.getElementById("myModal");
const taskButton = document.querySelector('.new-task');
taskButton.style.color = "blue"
const span = document.getElementsByClassName("close")[0];


// when user clicks on button, open modal
function taskBtn(){
    (0,_modalProjectSelector__WEBPACK_IMPORTED_MODULE_0__.selectorButton)();

    taskButton.addEventListener('click', ()=> {   
        modal.style.display = "block";
    });

    span.onclick = function (){
        modal.style.display = "none"
    }
};

function closeTaskBtn(){
    modal.style.display = "none";
}




/***/ }),

/***/ "./src/modules/deleteProject.js":
/*!**************************************!*\
  !*** ./src/modules/deleteProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/modules/taskArray.js");



function deleteProject(projectTitle){
    
        console.log(`project title: ${projectTitle}`);
        
        let delProjIndex = _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.findIndex(obj => obj.project === projectTitle);
        console.log(`Project Name: ${projectTitle}`);
        console.log(`Project Index: ${delProjIndex}`);
        
        if(_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray[delProjIndex].project == projectTitle) {
            console.log('delete conditoin matches')
            console.log(_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray[delProjIndex].project);
            _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.splice(delProjIndex, 1);
            // updateLocalStorage();
        
            // clearUI();
            // refresh("all");
            
            //location.reload();
            return;
        };

}



/***/ }),

/***/ "./src/modules/deleteTasks.js":
/*!************************************!*\
  !*** ./src/modules/deleteTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTasks": () => (/* binding */ deleteTasks)
/* harmony export */ });
/* harmony import */ var _taskIndexSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskIndexSearch */ "./src/modules/taskIndexSearch.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray */ "./src/modules/taskArray.js");
/* harmony import */ var _utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorageUpdate */ "./src/utils/localStorageUpdate.js");
/* harmony import */ var _projectDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectDisplay */ "./src/modules/projectDisplay.js");
/* harmony import */ var _utils_clearUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/clearUI */ "./src/utils/clearUI.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");







/*
projectsArray = [
    {project: name, tasks: [{}, {}]}
    {project: name, tasks: [{}, {}]}
];
*/

function deleteTasks(taskID){
    let deleteArray = (0,_taskIndexSearch__WEBPACK_IMPORTED_MODULE_0__.taskIndexSearch)(taskID);
    let outter = deleteArray[0];
    let inner = deleteArray[1];
    console.log("deleteTasks outter: " + outter);
    console.log("deleteTasks inner: " + inner);
    _taskArray__WEBPACK_IMPORTED_MODULE_1__.projectsArray[outter].tasks.splice(inner, 1);

    (0,_utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
    let currentProjectElement = document.querySelector('.project-title');
    let currentProjectName = currentProjectElement.dataset.projectName;
    
    (0,_utils_clearUI__WEBPACK_IMPORTED_MODULE_4__.clearUI)();
    (0,_projectList__WEBPACK_IMPORTED_MODULE_5__.getProjectList)();
    (0,_projectDisplay__WEBPACK_IMPORTED_MODULE_3__.projectDisplay)(currentProjectName);
}









/***/ }),

/***/ "./src/modules/projectDisplay.js":
/*!***************************************!*\
  !*** ./src/modules/projectDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDisplay": () => (/* binding */ projectDisplay)
/* harmony export */ });
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/modules/taskArray.js");
/* harmony import */ var _projectHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectHeader */ "./src/modules/projectHeader.js");
/* harmony import */ var _taskExpandEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskExpandEdit */ "./src/modules/taskExpandEdit.js");
/* harmony import */ var _components_ui_modalProjectSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/modalProjectSelector */ "./src/components/ui/modalProjectSelector.js");
/* harmony import */ var _taskIndexSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskIndexSearch */ "./src/modules/taskIndexSearch.js");
/* harmony import */ var _deleteTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteTasks */ "./src/modules/deleteTasks.js");
// module displays tasks by project

// imports the single array containing all projects







function projectDisplay(projectvalue){
    const myBody = document.querySelector('.main-body');

    // header for project title 
    (0,_projectHeader__WEBPACK_IMPORTED_MODULE_1__.projectHeader)(projectvalue);


    if(projectvalue == "all"){
        _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach( projectsArrayObj => {
            
            projectsArrayObj['tasks'].forEach( taskObj => {
                // next refactor: return taskObj and export into GraphicalUI
                const newTaskRow = document.createElement('div')
                newTaskRow.classList.add('task');

                // labels first across the row
                for(let key in taskObj){
                    if(key !== "identity" && key !== "notes"){ //kinda weird conditional. shouldn't work but does.
                        const taskLabel = document.createElement('div');
                        taskLabel.append(key);
                        taskLabel.classList.add(key, 'label')
                        newTaskRow.append(taskLabel);
                    }
                }
                // values only across the row
                for(let key in taskObj){
                    if(key !== "identity" && key !== "notes"){
                        const taskValue = document.createElement('div');
                        taskValue.append(`${taskObj[key]}`)
                        taskValue.classList.add(key, 'item')
                        newTaskRow.append(taskValue);
                    } else if (key === "identity") {
                        newTaskRow.dataset.identity = taskObj[key];
                        //we are using variable key, hence: taskObj[key]
                        // and not taskObj['key'], that would belong to actual names projectArray['project']
                    }
                }

                //edit and delete buttons
                const btnCtnDiv = document.createElement('div');
                const editBtn = document.createElement('button');
                const delBtn = document.createElement('button');
                btnCtnDiv.classList.add('task-button-container')
                editBtn.classList.add('material-icons');
                delBtn.classList.add('material-icons');
                editBtn.textContent = "edit";
                delBtn.textContent = "delete";
                btnCtnDiv.append(editBtn);
                btnCtnDiv.append(delBtn);
                newTaskRow.append(btnCtnDiv);

                myBody.append(newTaskRow);

                https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
                editBtn.addEventListener('click', (e)=>{
                    let doesElementExist = document.querySelector('.task-expand')
                    if(!doesElementExist){
                        //e.stopPropagation();
                        //move below to expandTask and selectorButtonTaskExpand
                                // let taskParentNode = e.target.closest('.task');
                                // let taskID = taskParentNode.dataset.identity;
                                // console.log(taskID);
                                // taskIndexSearch(taskID);

                        (0,_taskExpandEdit__WEBPACK_IMPORTED_MODULE_2__.expandTask)(e);
                        (0,_components_ui_modalProjectSelector__WEBPACK_IMPORTED_MODULE_3__.selectorButtonTaskExpand)(e); // must be added after to get options
                        //taskIndexSearch(e);
                    } else {
                        console.log("please submit or close out Expand");
                    }
                });
                delBtn.addEventListener('click', (e)=> {
                    // on click, 
                    // get the unique ID from the data attribute
                    // run's deleteFunction(uniqueID)
                    // delete() includes
                        // function for finding outer index and inner index of uniqueID
                        // delete then slices that index
                        // update localstorage (don't include this either)
                        // reruns projectsDisplay, etc. (actually shouldn't include this)
                    let taskParentNode = e.target.closest('.task');
                    let taskID = taskParentNode.dataset.identity;
                    (0,_deleteTasks__WEBPACK_IMPORTED_MODULE_5__.deleteTasks)(taskID);
                        
                })
            })            
        })
    } 
    else {
        _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach(projectsArrayObj => {
            if(projectsArrayObj['project'] == projectvalue){
                
                projectsArrayObj['tasks'].forEach(taskObj => {
                        const newTaskRow = document.createElement('div')
                        newTaskRow.classList.add('task');
                        
                        // labels first across the row
                        for(let key in taskObj){
                            if(key !== "identity" && key !== "notes"){
                                const taskLabel = document.createElement('div');
                                taskLabel.append(key);
                                taskLabel.classList.add(key, 'label')
                                newTaskRow.append(taskLabel);
                            }
                        }

                        // values only across the row
                        for(let key in taskObj){
                            if(key !== "identity" && key !== "notes"){
                                const taskSection = document.createElement('div');
                                taskSection.append(`${taskObj[key]}`)
                                taskSection.classList.add(key, 'item')
                                newTaskRow.append(taskSection);
                            } else if (key === "identity") {
                                newTaskRow.dataset.identity = taskObj[key];
                                //we are using variable key, hence: taskObj[key]
                                // and not taskObj['key'], that would belong to actual names projectArray['project']
                            }
                        }
                    
                    //edit and delete buttons
                    const btnCtnDiv = document.createElement('div');
                    const editBtn = document.createElement('button');
                    const delBtn = document.createElement('button');
                    btnCtnDiv.classList.add('task-button-container');
                    editBtn.classList.add('material-icons');
                    delBtn.classList.add('material-icons');
                    editBtn.textContent = "edit";
                    delBtn.textContent = "delete";
                    btnCtnDiv.append(editBtn);
                    btnCtnDiv.append(delBtn);
                    newTaskRow.append(btnCtnDiv);
                    myBody.append(newTaskRow);
                    
                    // newTaskRow.addEventListener('click', (e)=>{
                    //     let doesElementExist = document.querySelector('.task-expand')
                    //     if(!doesElementExist){
                    //         expandTask(e);
                    //         selectorButtonTaskExpand();
                    //     } else {
                    //         console.log("please submit or close out Expand");
                    //     }
                    // });

                    editBtn.addEventListener('click', (e)=>{
                        let doesElementExist = document.querySelector('.task-expand')
                        if(!doesElementExist){
                            //e.stopPropagation();
                            //move below to expandTask and selectorButtonTaskExpand
                                    // let taskParentNode = e.target.closest('.task');
                                    // let taskID = taskParentNode.dataset.identity;
                                    // console.log(taskID);
                                    // taskIndexSearch(taskID);
    
                            (0,_taskExpandEdit__WEBPACK_IMPORTED_MODULE_2__.expandTask)(e);
                            (0,_components_ui_modalProjectSelector__WEBPACK_IMPORTED_MODULE_3__.selectorButtonTaskExpand)(e); // must be added after to get options
                            //taskIndexSearch(e);
                        } else {
                            console.log("please submit or close out Expand");
                        }
                    });
                    delBtn.addEventListener('click', (e)=> {
                        // on click, 
                        // get the unique ID from the data attribute
                        // run's deleteFunction(uniqueID)
                        // delete() includes
                            // function for finding outer index and inner index of uniqueID
                            // delete then slices that index
                            // update localstorage (don't include this either)
                            // reruns projectsDisplay, etc. (actually shouldn't include this)
                        let taskParentNode = e.target.closest('.task');
                        let taskID = taskParentNode.dataset.identity;
                        (0,_deleteTasks__WEBPACK_IMPORTED_MODULE_5__.deleteTasks)(taskID);
                            
                    })
                })                            
            }
        })
    }
}



/***/ }),

/***/ "./src/modules/projectHeader.js":
/*!**************************************!*\
  !*** ./src/modules/projectHeader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectHeader": () => (/* binding */ projectHeader)
/* harmony export */ });
// displays header. e.g. Project: all

function projectHeader(projectTitle){
    const myBody = document.querySelector('.main-body');

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-title');
    projectHeader.dataset.projectName = projectTitle;
    projectHeader.textContent = `Project: ${projectTitle}`;
    
    // dataset for delete project button
    // if(projectTitle == "all"){
    //     projectHeader.dataset.title = "all"; 
    // }

    myBody.append(projectHeader);

}



/***/ }),

/***/ "./src/modules/projectList.js":
/*!************************************!*\
  !*** ./src/modules/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectList": () => (/* binding */ getProjectList)
/* harmony export */ });
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/modules/taskArray.js");
/* harmony import */ var _modules_projectDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/projectDisplay */ "./src/modules/projectDisplay.js");
/* harmony import */ var _utils_clearBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/clearBody */ "./src/utils/clearBody.js");
/* harmony import */ var _components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/newTaskButton */ "./src/components/ui/newTaskButton.js");
/* harmony import */ var _components_ui_addDeleteProjectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/addDeleteProjectButton */ "./src/components/ui/addDeleteProjectButton.js");
/* harmony import */ var _utils_clearDeleteProjectButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/clearDeleteProjectButton */ "./src/utils/clearDeleteProjectButton.js");
/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deleteProject */ "./src/modules/deleteProject.js");
/* harmony import */ var _utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/localStorageUpdate */ "./src/utils/localStorageUpdate.js");
/* harmony import */ var _utils_clearProjectList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/clearProjectList */ "./src/utils/clearProjectList.js");
/* harmony import */ var _utils_clearTaskExpand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/clearTaskExpand */ "./src/utils/clearTaskExpand.js");
// displays all clickable project names in <sidebar> 











function getProjectList(){
    const projectList = document.querySelector('.project-list');

    _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach( projectObj => {
        const newDiv = document.createElement('div');
        newDiv.classList.add("project-name-container")
        const newLink = document.createElement('a')
        const project = projectObj['project'];
        
        // newDiv.textContent = project;
        newLink.textContent = project;
        newLink.addEventListener('click', ()=>{
            (0,_utils_clearBody__WEBPACK_IMPORTED_MODULE_2__.clearBody)(); // clear old tasks 
            (0,_utils_clearTaskExpand__WEBPACK_IMPORTED_MODULE_9__.clearTaskExpand)(); // clear task expand field if exists            
            (0,_components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_3__.taskBtn)(); // add New Task Button
            (0,_modules_projectDisplay__WEBPACK_IMPORTED_MODULE_1__.projectDisplay)(project);

            //add delete project button asigned to clicked project
           // removeProjectDeleteBtn();
            //addDeleteProjectBtn(project);
        })
        newDiv.append(newLink)

        // delete button
        const newDelete = document.createElement('button');
        newDelete.setAttribute('type', 'button');
        newDelete.classList.add("material-icons");
        newDelete.textContent = "folder_delete";
        newDelete.onclick = function(){
            console.log("Deleting " + project);
            (0,_deleteProject__WEBPACK_IMPORTED_MODULE_6__.deleteProject)(project);
            (0,_utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_7__.updateLocalStorage)();
            
            //body
            (0,_utils_clearBody__WEBPACK_IMPORTED_MODULE_2__.clearBody)();
            (0,_utils_clearTaskExpand__WEBPACK_IMPORTED_MODULE_9__.clearTaskExpand)();
            (0,_components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_3__.taskBtn)();
            (0,_modules_projectDisplay__WEBPACK_IMPORTED_MODULE_1__.projectDisplay)("all");

            //sidebar
            (0,_utils_clearProjectList__WEBPACK_IMPORTED_MODULE_8__.clearProjects)();
            getProjectList();


        }
        newDiv.append(newDelete)

        projectList.append(newDiv);
    })

    // add ALL to the top.
    const allProjectNewDiv = document.createElement('div');
    const allProject = document.createElement('a');
    allProjectNewDiv.classList.add("project-name-container");
    allProject.textContent = "all";
    allProject.addEventListener('click', ()=> {
        (0,_utils_clearBody__WEBPACK_IMPORTED_MODULE_2__.clearBody)();
        (0,_utils_clearTaskExpand__WEBPACK_IMPORTED_MODULE_9__.clearTaskExpand)();
        (0,_components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_3__.taskBtn)();
        (0,_modules_projectDisplay__WEBPACK_IMPORTED_MODULE_1__.projectDisplay)("all");

    });
    allProjectNewDiv.append(allProject)
    projectList.prepend(allProjectNewDiv);

}

 

/***/ }),

/***/ "./src/modules/projectNameTest.js":
/*!****************************************!*\
  !*** ./src/modules/projectNameTest.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectNameTest": () => (/* binding */ projectNameTest)
/* harmony export */ });
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/modules/taskArray.js");
// checks for duplicate project names.


function projectNameTest(projectInputValue){
    // const projectInputValue = document.querySelector('.new-project-input').value;
    //projectInputValue.toLowerCase();

    _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach( projectObj => {
        //projectName.toLowerCase();
        
        if(projectObj['project'] == projectInputValue){
            console.log(`Duplicate! Existing: ${projectObj['project']} vs Yours: ${projectInputValue}`)
            return "bad";
        } 
        // else if(projectObj['project'] != projectInputValue) {
        //     console.log(`Testing. No duplicates. Existing: ${projectObj['project']} vs Yours: ${projectInputValue}`)
        //     return "good";
        // }
    });
}





/***/ }),

/***/ "./src/modules/taskArray.js":
/*!**********************************!*\
  !*** ./src/modules/taskArray.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "setProjectsArray": () => (/* binding */ setProjectsArray)
/* harmony export */ });
// nested objects https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/nested-objects
// https://stackoverflow.com/questions/48168601/change-the-value-of-imported-variable-in-es6


let projectsArray = [
    {
        project: "main",
        tasks: [
            {
            project: "main",
            title: "Car Payment",
            description: "$500 car installment payment",
            date: "2021-04-01",
            priority: "high",
            completed: "false",
            notes: "i love big cars and i cannot lie", 
            identity: "08083DSFA"
            },
            {
            project: "main",
            title: "Gas Bills",
            description: "Pay August gas bills for LA Home",
            date: "2022-01-22",
            priority: "medium",
            completed: "true",
            notes: "when i eat too many beans I have a large gas bill",
            identity: "000004000"
            }

        ]
    },
    {
        project: "gym",
        tasks: [
            {
            project: "gym",
            title: "Chest",
            description: "Bench press",
            date: "2022-01-01",
            priority: "high",
            completed: "true",
            notes: "chest days are the best days",
            identity: "3242ASDFS"
            },
            {
            project: "gym",
            title: "Legs",
            description: "Squats",
            date: "2022-02-11",
            priority: "medium",
            completed: "false",
            notes: "ass to grass",
            identity: "0303040403"
            }
        ]
    }
];

function setProjectsArray(fromLocalStorage){
    projectsArray = fromLocalStorage;
}



/***/ }),

/***/ "./src/modules/taskExpandEdit.js":
/*!***************************************!*\
  !*** ./src/modules/taskExpandEdit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expandTask": () => (/* binding */ expandTask)
/* harmony export */ });
/* harmony import */ var _components_ui_modalProjectSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ui/modalProjectSelector */ "./src/components/ui/modalProjectSelector.js");
/* harmony import */ var _utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorageUpdate */ "./src/utils/localStorageUpdate.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskArray */ "./src/modules/taskArray.js");
/* harmony import */ var _taskIndexSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskIndexSearch */ "./src/modules/taskIndexSearch.js");
/* harmony import */ var _utils_clearUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/clearUI */ "./src/utils/clearUI.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _projectDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectDisplay */ "./src/modules/projectDisplay.js");
/* harmony import */ var _taskSubmit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taskSubmit */ "./src/modules/taskSubmit.js");
// module to expand and edit task









/*
projectsArray = [
    {project: name, tasks: [{}, {}]}
    {project: name, tasks: [{}, {}]}
];
*/

function expandTask(e){
    let taskParentNode = e.target.closest('.task');
    let taskID = taskParentNode.dataset.identity;
    console.log("expandTask taskID: " + taskID);
    
    // targeting the task by index
    let deleteArray = (0,_taskIndexSearch__WEBPACK_IMPORTED_MODULE_3__.taskIndexSearch)(taskID);
    let outter = deleteArray[0];
    let inner = deleteArray[1];
    console.log("expandTask outter: " + outter);
    console.log("expandTask inner: " + inner);

    let taskObject = _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks[inner];
    console.log(taskObject);
    let taskProjectEdit = taskObject.project; // use this only to when editing tasks. initial value comes from module, not this.
    let taskTitle = _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks[inner].title;
    let taskDescription = _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks[inner].description;
    let taskDate = _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks[inner].date;
    let taskPriority = _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks[inner].priority;
    let taskCompleted = _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks[inner].completed;
    let taskNotes = _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks[inner].notes;


    // e.currentTarget.style.opacity = "0.2";
    const expandSectionContainer = document.createElement('div');
    expandSectionContainer.classList.add('task-expand');
    
    let myForm = document.createElement('FORM');
        const project = document.createElement('select');
        // we have to append the <select> here now, and not at the end.
        myForm.append(project);
        expandSectionContainer.append(myForm);

        project.setAttribute('id', 'select-project2');
        
        // make a note, why doesn't this work below. Had to invoke SelectorButtonTaskExpand in the ProjectDisplay module after expand(e)
        // maybe the call stack had to completely finish w/ expand() before being able to select the <select> 

        //selectorButtonTaskExpand();
        // const temp = document.querySelector('#select-project2');
        // let newOption = new Option('Option Text','Option Value');
        // temp.add(newOption,undefined);

        // remove any exisiting
        // const length = temp.length;
        // for(let i = length-1; i>=0; i--) {
        //     temp[i] = null;
        // }

        // let tempArray = [];
        // projectsArray.forEach( projectsArrayObj => {
        //     if(!tempArray.includes(projectsArrayObj['project'])){
        //         temp.add( new Option(projectsArrayObj['project']) )
        //         // tempArray.push(projectsArrayObj['project'])
        //         // console.log("current tempArray" + tempArray);
        //     }
        // });

        // section to find and pull values from the event.target into the form fields below
        // taskIndexSearch.js to find the index


        
    
        const title = document.createElement('input');
        title.setAttribute("type", "text");
        title.setAttribute("name", "title");
        title.setAttribute("value", taskTitle);

        const description = document.createElement('input');
        description.setAttribute("type", "text");
        description.setAttribute("name", "description");
        description.setAttribute("value", taskDescription);

        const myDate = document.createElement('input');
        myDate.setAttribute("type", "date");
        myDate.setAttribute("name", "date");
        myDate.setAttribute("value", taskDate);

        const priority = document.createElement('input');
        priority.setAttribute("type", "text");
        priority.setAttribute("name", "priority");
        priority.setAttribute("value", taskPriority);
    
        const completed = document.createElement('input');
        completed.setAttribute("type", "checkbox");
        completed.setAttribute("name", "completion");
        console.log(taskCompleted);
        if(taskCompleted == false || taskCompleted == "no"){
            console.log("task completed == false");
            completed.checked = false;
        } else {
            completed.checked = true;
        }
        // https://stackoverflow.com/questions/57617532/why-element-setattributechecked-true-doesnt-work
        //completed.setAttribute("checked", );

        const notes = document.createElement('textarea');
        notes.setAttribute("type", "text");
        notes.setAttribute("name", "notes")
        notes.value = taskNotes;


        const submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");
        submit.addEventListener("click", (e)=>{
            e.preventDefault();
            let newProject = document.querySelector('#select-project2');
            //"project" = newProject.value; work on this later. see below.
            //console.log(title.value);

            // your just reassigning variables. use the above taskObject
            if(taskObject.project == project.value){
                _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks[inner].title = title.value;
                taskObject.description = description.value;
                taskObject.date = myDate.value;
                taskObject.priority = priority.value;
                taskObject.completed = completed.checked;
                taskObject.notes = notes.value;
            } else {
                // essentially making a new Task since we are moving to a different project name:
                const newProjectName = project.value;
                const newTitle = title.value;
                const newDescription = description.value;
                const newDate = myDate.value;
                const newPriority = priority.value;
                const newCompleted = completed.checked;
                const newNotes = notes.value;
                const newIdentity = taskObject.identity;

                let newTask = new _taskSubmit__WEBPACK_IMPORTED_MODULE_7__.TaskItem (newProjectName, newTitle, newDescription, newDate, newPriority, newCompleted, newNotes, newIdentity)
                // find existing Project name, and push new Task into it.
                _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray.forEach(projectObj => {
                    if(projectObj['project'] === newProjectName){
                        projectObj['tasks'].push(newTask);
                    }
                });

                // deleting the old Task
                _taskArray__WEBPACK_IMPORTED_MODULE_2__.projectsArray[outter].tasks.splice(inner, 1);
            }   
            (0,_utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
            (0,_utils_clearUI__WEBPACK_IMPORTED_MODULE_4__.clearUI)();
            (0,_projectList__WEBPACK_IMPORTED_MODULE_5__.getProjectList)();
            (0,_projectDisplay__WEBPACK_IMPORTED_MODULE_6__.projectDisplay)("all");
            
        });
    
    // myForm.append(project);
    myForm.append(title);
    myForm.append(description);
    myForm.append(myDate);
    myForm.append(priority);
    myForm.append(completed);
    myForm.append(notes);
    myForm.append(submit);
    

    // expandSection.append(myForm);
    
    // e.currentTarget.append(expandSection);

    // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
            // e.currentTarget identifies the element on which the event handler was attached.
            // e.target identifies the element on which the event occured.   
    
            ///////// below is for clicking on the entire Task row
            // let parentDiv = document.querySelector('.main-body');
            // let currentTask = e.currentTarget;
                // instead of append, use insertBefore:
            // parentDiv.insertBefore(expandSectionContainer, currentTask.nextSibling);
    
    // currentTask.removeEventListener('click', (e)=>{
    //     expandTask(e);
    // });
    
    /////////// below is for clicking on the edit button
        // can't use parentElement. Uses closest, dom will travel up the chain until it hits target.
    let parentDiv = e.currentTarget.closest('.task');
    parentDiv.append(expandSectionContainer);    


    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", ()=>{
        let expanded = document.querySelector('.task-expand');
        expanded.remove();
    })
    expandSectionContainer.append(cancelBtn)    
}



/***/ }),

/***/ "./src/modules/taskIndexSearch.js":
/*!****************************************!*\
  !*** ./src/modules/taskIndexSearch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskIndexSearch": () => (/* binding */ taskIndexSearch)
/* harmony export */ });
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/modules/taskArray.js");
// find the task by unique id off click from projectDisplay to put into taskExpandEdit fields.
// returns the array index value
// update, we will have a delete button dynamically added to the task and not on click.



/*
projectsArray = [
    {project: name, tasks: [{}, {}]}
    {project: name, tasks: [{}, {}]}
];
*/

function taskIndexSearch(taskID){
    //taskID = "06b88b47-31ba-4dc1-ac23-efc736d6f38b"
    console.log("The data ID is: " + taskID);
    // should return   [0][1]  etc.. so that you can go projectsArray.splice(variable, 1)
    // on click of the edit button, the e gets passed to taskIndexSearch

    let outter = "";
    let inner = "";
    
    outter = _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.findIndex(projectsArrayObj => {
        return projectsArrayObj.tasks.some(taskObj =>{
            //console.log(taskObj.description)
            //console.log(taskObj.identity + taskID);
            return taskObj.identity == taskID
        })
    });

    _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach(projectsArrayObj => {
        let subArray = projectsArrayObj.tasks;
        subArray.forEach(tasksObj => {
            if(tasksObj.identity == taskID){
                inner = subArray.findIndex(tasksObj => tasksObj.identity == taskID)
            }
        })
    });

    console.log("outter: " + outter)
    console.log("inner: " + inner)

    return [outter, inner] //returning as an array 

    // delete function will take take below index and insert into projectsArray.slice(taskIndexSearch(taskID), 1) So just export index only, with no array "projectsArray"
    // return outter.tasks.
    // i think we need to get to projectsArray[outer].tasks.splice(inner, 1)
}




/***/ }),

/***/ "./src/modules/taskSubmit.js":
/*!***********************************!*\
  !*** ./src/modules/taskSubmit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskItem": () => (/* binding */ TaskItem),
/* harmony export */   "submitBtn": () => (/* binding */ submitBtn)
/* harmony export */ });
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/modules/taskArray.js");
/* harmony import */ var _projectDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDisplay */ "./src/modules/projectDisplay.js");
/* harmony import */ var _utils_clearBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/clearBody */ "./src/utils/clearBody.js");
/* harmony import */ var _components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/newTaskButton */ "./src/components/ui/newTaskButton.js");
/* harmony import */ var _utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/localStorageUpdate */ "./src/utils/localStorageUpdate.js");
/* harmony import */ var _modules_projectList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/projectList */ "./src/modules/projectList.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// on submit, creates object, pushes to array, then pushes array to local storage.







(0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();

let submitBtn = document.querySelector('#form-submit-button');

// to do items go into Project containers i.e. Arrays
class TaskItem {
    constructor(project, title, description, date, priority, completed, notes, identity) {
        this.project = project,
        this.title = title,
        this.description = description,
        this.date = date,
        this.priority = priority,
        this.completed = completed;
        this.notes = notes,
        this.identity = (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }
}

// on submit, takes form values, pushes to array and updates localstorage
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const projectName = document.querySelector('#select-project').value;
    const title = document.querySelector('#form-title').value;
    const description = document.querySelector('#form-description').value;
    const date = document.querySelector('#form-date').value;
    const priority = document.querySelector('#form-priority').value;
    const completed = document.querySelector('#form-checkbox').checked;
    const notes = "";
    const identity = (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();

    let newTask = new TaskItem (projectName, title, description, date, priority, completed, notes, identity)
    
    // since we made Project Name an existing requirement via Selection Input, we must search the Task Array for it.
    _taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach(projectObj => {
        if(projectObj['project'] === projectName){
            projectObj['tasks'].push(newTask);
        }
    });

    (0,_components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_3__.closeTaskBtn)();

    (0,_utils_clearBody__WEBPACK_IMPORTED_MODULE_2__.clearBody)(); // clears main body
    (0,_projectDisplay__WEBPACK_IMPORTED_MODULE_1__.projectDisplay)(projectName); // displays tasks
    
    (0,_utils_localStorageUpdate__WEBPACK_IMPORTED_MODULE_4__.updateLocalStorage)(); // updates local storage

});



/***/ }),

/***/ "./src/utils/clearBody.js":
/*!********************************!*\
  !*** ./src/utils/clearBody.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBody": () => (/* binding */ clearBody)
/* harmony export */ });
// clears project title header, and, tasks. leaves task button alone.

function clearBody(){
    let projectHeader = document.querySelector('.project-title');
    let tasks = document.querySelectorAll('.task');
    
    projectHeader.remove();
    tasks.forEach(tasks => {
        tasks.remove();
    })
}



/***/ }),

/***/ "./src/utils/clearDeleteProjectButton.js":
/*!***********************************************!*\
  !*** ./src/utils/clearDeleteProjectButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeProjectDeleteBtn": () => (/* binding */ removeProjectDeleteBtn)
/* harmony export */ });
// removes the delete project button
function removeProjectDeleteBtn () {
    const projectRemoveBtn = document.querySelector('.project-remove-button');
    projectRemoveBtn.remove();
}



/***/ }),

/***/ "./src/utils/clearProjectList.js":
/*!***************************************!*\
  !*** ./src/utils/clearProjectList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearProjects": () => (/* binding */ clearProjects)
/* harmony export */ });
// clear project list in order to remove duplicates

function clearProjects(){
    const sidebarProjectNames = document.querySelectorAll('.project-list div');
    sidebarProjectNames.forEach(div => {
    div.remove();
    })
}



/***/ }),

/***/ "./src/utils/clearTaskButton.js":
/*!**************************************!*\
  !*** ./src/utils/clearTaskButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTaskBtn": () => (/* binding */ removeTaskBtn)
/* harmony export */ });
// remove task button in order for select button with new fields to be invoked in call stack

function removeTaskBtn (){
    let taskBtn = document.querySelector('.new-task');  
    taskBtn.remove();
}



/***/ }),

/***/ "./src/utils/clearTaskExpand.js":
/*!**************************************!*\
  !*** ./src/utils/clearTaskExpand.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTaskExpand": () => (/* binding */ clearTaskExpand)
/* harmony export */ });
// remove any Task Expand field
function clearTaskExpand(){
    let expanded = document.querySelector('.task-expand');
    if(expanded){ 
        expanded.remove(); 
    };
}



/***/ }),

/***/ "./src/utils/clearUI.js":
/*!******************************!*\
  !*** ./src/utils/clearUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearUI": () => (/* binding */ clearUI)
/* harmony export */ });
/* harmony import */ var _clearBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearBody */ "./src/utils/clearBody.js");
/* harmony import */ var _clearProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearProjectList */ "./src/utils/clearProjectList.js");
/* harmony import */ var _clearTaskButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearTaskButton */ "./src/utils/clearTaskButton.js");
/* harmony import */ var _clearDeleteProjectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearDeleteProjectButton */ "./src/utils/clearDeleteProjectButton.js");





function clearUI(){
    (0,_clearBody__WEBPACK_IMPORTED_MODULE_0__.clearBody)(); //removes project header and tasks
    (0,_clearProjectList__WEBPACK_IMPORTED_MODULE_1__.clearProjects)(); //removes sidebar projects
    //removeTaskBtn(); //removes New Task button
    //removeProjectDeleteBtn(); //removes Delete Project button
}




/***/ }),

/***/ "./src/utils/localStorageCheck.js":
/*!****************************************!*\
  !*** ./src/utils/localStorageCheck.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageCheck": () => (/* binding */ localStorageCheck)
/* harmony export */ });
/* harmony import */ var _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/taskArray */ "./src/modules/taskArray.js");
// used at startup. check if localstorage is empty, if empty push demo array to it.
// if not empty, then pull localStorage info



function localStorageCheck(){
    if(localStorage.getItem("projectArrayStorage") === null){
        localStorage.setItem("projectArrayStorage", JSON.stringify(_modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray))
    } else {
        let temp = JSON.parse(localStorage.getItem("projectArrayStorage"));
        (0,_modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.setProjectsArray)(temp);
    }
};



/***/ }),

/***/ "./src/utils/localStorageUpdate.js":
/*!*****************************************!*\
  !*** ./src/utils/localStorageUpdate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _modules_taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/taskArray */ "./src/modules/taskArray.js");
// pushes current array data to local storage


function updateLocalStorage(){
    localStorage.setItem("projectArrayStorage", JSON.stringify(_modules_taskArray__WEBPACK_IMPORTED_MODULE_0__.projectsArray));
};





/***/ }),

/***/ "./src/utils/reloadUI.js":
/*!*******************************!*\
  !*** ./src/utils/reloadUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refresh": () => (/* binding */ refresh)
/* harmony export */ });
/* harmony import */ var _modules_projectDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/projectDisplay */ "./src/modules/projectDisplay.js");
/* harmony import */ var _components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ui/newTaskButton */ "./src/components/ui/newTaskButton.js");
/* harmony import */ var _modules_projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/projectList */ "./src/modules/projectList.js");
/* harmony import */ var _components_ui_newProjectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/newProjectButton */ "./src/components/ui/newProjectButton.js");
/* harmony import */ var _components_ui_addDeleteProjectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/addDeleteProjectButton */ "./src/components/ui/addDeleteProjectButton.js");






function refresh(projectTitle){
    //main body
    (0,_modules_projectDisplay__WEBPACK_IMPORTED_MODULE_0__.projectDisplay)(projectTitle); // has projectHeader in it
    (0,_components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_1__.taskBtn)();
    (0,_components_ui_addDeleteProjectButton__WEBPACK_IMPORTED_MODULE_4__.addDeleteProjectBtn)(projectTitle);
    
    //sidebar
    (0,_modules_projectList__WEBPACK_IMPORTED_MODULE_2__.getProjectList)();
    (0,_components_ui_newProjectButton__WEBPACK_IMPORTED_MODULE_3__.projectNewBtn)();
    
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ui/newTaskButton */ "./src/components/ui/newTaskButton.js");
/* harmony import */ var _modules_projectDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projectDisplay */ "./src/modules/projectDisplay.js");
/* harmony import */ var _components_ui_modalProjectSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ui/modalProjectSelector */ "./src/components/ui/modalProjectSelector.js");
/* harmony import */ var _utils_localStorageCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/localStorageCheck */ "./src/utils/localStorageCheck.js");
/* harmony import */ var _modules_projectList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/projectList */ "./src/modules/projectList.js");
/* harmony import */ var _components_ui_newProjectButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ui/newProjectButton */ "./src/components/ui/newProjectButton.js");
/* harmony import */ var _components_ui_addDeleteProjectButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ui/addDeleteProjectButton */ "./src/components/ui/addDeleteProjectButton.js");









/*
-Project is the array of To-Do items
Need a default Project on load (maybe ALL to do items combined)

-Project to-do items are objects

-objects are either classes of ff
items will have fields: title: text, description: text, dueDate: ???, and priority: select or radio

So create a form. On submit - app takes all values and makes a class item.

dom then textcontent stuff from class item into display.


*/
// Hoisting: unlike functions, classes must be declared before they are called

// project container
/// default on load up show Project containing all items, labeled ALL
// so on load, reference all arrays into one. 
//// or Main Array is where all the other arrays go into. So an array of arrays
//// let's not do a collection of all items.. or can we.

/// on New Project click, create array

/*
On startup - home shows all items from all projects
Default project is Main
-- module - load Main project? 



Project Lists on left sidebar. New project button above.
--on click, new project gets added, and main screen automatically switches to that project


Items/Project 
-- when creating items, Project will be Select list (with Main if no extra projects made)
--If your on a new Project list, when creating items, code to make that current project the default Select
--Project is not an array, but a Key/Value pair? This way you can move/filter/displayAll
-----So individual projects have filtered to display only that key/value pair. So you'll neeed a for in loop


UI
checkbox(completed), Title, <----->  project, priority, Date, edit/delete(expand modal)
---on expnd, include description 

Have empty line ready to go for Event Listener. Or Add task button

*/


// load all projects on startup
const onLoad = (() => {
    (0,_utils_localStorageCheck__WEBPACK_IMPORTED_MODULE_4__.localStorageCheck)();
    (0,_modules_projectDisplay__WEBPACK_IMPORTED_MODULE_2__.projectDisplay)("all");
    (0,_components_ui_newTaskButton__WEBPACK_IMPORTED_MODULE_1__.taskBtn)();
    (0,_modules_projectList__WEBPACK_IMPORTED_MODULE_5__.getProjectList)();
    (0,_components_ui_newProjectButton__WEBPACK_IMPORTED_MODULE_6__.projectNewBtn)();
    //addDeleteProjectBtn("all");
})()

// const projectModal = document.querySelector('#project-modal');

// document.addEventListener("click", function(e){
//     if(e.target.matches(".confirm-delete-project")){
//         projectModal.hidden = true;
//     }
// });
// window.onclick = function(event) {
//     if (event.target == projectModal) {
//       projectModal.hidden = true;
//     }
//   }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQTJCO0FBQzZCO0FBQ0U7QUFDWTtBQUNSO0FBQ1A7QUFDVTtBQUNZOztBQUU3RTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSwyRUFBaUI7QUFDckIsSUFBSSx1RUFBYztBQUNsQixJQUFJLHFFQUFPO0FBQ1gsSUFBSSxvRUFBYztBQUNsQixJQUFJLDhFQUFhO0FBQ2pCO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy91aS9hZGREZWxldGVQcm9qZWN0QnV0dG9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL3VpL21vZGFsUHJvamVjdFNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL3VpL25ld1Byb2plY3RCdXR0b24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvdWkvbmV3VGFza0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9kZWxldGVQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2RlbGV0ZVRhc2tzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3REaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdE5hbWVUZXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3Rhc2tBcnJheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy90YXNrRXhwYW5kRWRpdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy90YXNrSW5kZXhTZWFyY2guanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvdGFza1N1Ym1pdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdXRpbHMvY2xlYXJCb2R5LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dGlscy9jbGVhckRlbGV0ZVByb2plY3RCdXR0b24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3V0aWxzL2NsZWFyUHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3V0aWxzL2NsZWFyVGFza0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdXRpbHMvY2xlYXJUYXNrRXhwYW5kLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dGlscy9jbGVhclVJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dGlscy9sb2NhbFN0b3JhZ2VDaGVjay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdXRpbHMvbG9jYWxTdG9yYWdlVXBkYXRlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy91dGlscy9yZWxvYWRVSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL21vdW50YWluLmpwZycpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgM2ZyIG1pbm1heChhdXRvLCAxMDBweCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uYXBwLWJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChhdXRvLCAxZnIpIDRmcjtcXG5cXG59XFxuXFxuc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG59XFxuXFxuLm1haW4tYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcblxcbi50YXNrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIC8qIGhlaWdodDogNTBweDsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMjAwcHggbWlubWF4KG1heC1jb250ZW50LCBhdXRvKSBtaW5tYXgobWF4LWNvbnRlbnQsIDEyMHB4KSAxMDBweCA1MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgICdwcm9qZWN0LWwgdGl0bGUtbCBkZXNjcmlwdGlvbi1sIGRhdGUtbCBwcmlvcml0eS1sIGNvbXBsZXRlLWwnXFxuICAgICAgICAncHJvamVjdC12IHRpdGxlLXYgZGVzY3JpcHRpb24tdiBkYXRlLXYgcHJpb3JpdHktdiBjb21wbGV0ZS12J1xcbiAgICAgICAgJ2J0bi1jdG4gICBidG4tY3RuIGJ0bi1jdG4gICAgICAgYnRuLWN0biBidG4tY3RuICAgYnRuLWN0bidcXG4gICAgICAgICdleHBhbmQgICAgZXhwYW5kICBleHBhbmQgICAgICAgIGV4cGFuZCAgZXhwYW5kICAgIGV4cGFuZCdcXG4gICAgICAgIDtcXG59XFxuXFxuLyogLnByb2plY3QgLmxhYmVsIHsgZ3JpZC1hcmVhOiBwcm9qZWN0LWw7IH1cXG4ucHJvamVjdCAuaXRlbSB7IGdyaWQtYXJlYTogcHJvamVjdC12OyB9ICovXFxuLnRhc2stYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogYnRuLWN0bjtcXG59XFxuLnRhc2stZXhwYW5kIHtcXG4gICAgZ3JpZC1hcmVhOiBleHBhbmQ7XFxufVxcblxcblxcblxcblxcbi8qIFxcbi50YXNrIC5wcm9qZWN0OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiUFJPSkVDVFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG59XFxuXFxuLnRhc2sgLnRpdGxlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiVElUTEVcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxufVxcblxcbi50YXNrIC5kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkRFU0NSSVBUSU9OXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbn1cXG5cXG4udGFzayAuZGF0ZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkRBVEVcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxufVxcblxcbi50YXNrIC5wcmlvcml0eTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlBSSU9SSVRZXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbn1cXG5cXG4udGFzayAuY29tcGxldGVkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiRE9ORT9cXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxufSAqL1xcblxcbi50YXNrIC5pdGVtIHtcXG4gICAgXFxufVxcblxcbi50YXNrIC5kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDEzMCwgMTc3KTtcXG59XFxuXFxuXFxuXFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICB9XFxuICBcXG4gIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICB9XFxuICBcXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4gIC5jbG9zZSB7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC5jbG9zZTpob3ZlcixcXG4gIC5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuXFxuLyogU2lkZWJhciAqL1xcbi5wcm9qZWN0LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufSBcXG4gXFxuLnByb2plY3QtbmFtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICAvKiBnYXA6IDIwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IGEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBwYWRkaW5nOiAwcHggMTBweDsgKi9cXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbi5wcm9qZWN0LWxpc3QgYTpob3ZlciB7XFxuICAgIC8qIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigyNTQsIDAsIDApOyAqL1xcbiAgICBjb2xvcjogcmVkO1xcbiAgfVxcblxcblxcbi8qIGRlbGV0ZSB3YXJuaW5nIG1lc3NhZ2UgKi9cXG4jcHJvamVjdC1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG5cXG4gICNwcm9qZWN0LW1vZGFsIC5jbG9zZS1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAudGFzay1leHBhbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC50YXNrLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDlkOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgLmNvbXBsZXRlZCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuXFxuXFxuICAvKiBSdWxlcyBmb3Igc2l6aW5nIHRoZSBpY29uLiAqL1xcbi5tYXRlcmlhbC1pY29ucy5tZC0xOCB7IGZvbnQtc2l6ZTogMThweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC0yNCB7IGZvbnQtc2l6ZTogMjRweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC0zNiB7IGZvbnQtc2l6ZTogMzZweDsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC00OCB7IGZvbnQtc2l6ZTogNDhweDsgfVxcblxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyBibGFjayBvbiBhIGxpZ2h0IGJhY2tncm91bmQuICovXFxuLm1hdGVyaWFsLWljb25zLm1kLWRhcmsgeyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1kYXJrLm1kLWluYWN0aXZlIHsgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cXG5cXG4vKiBSdWxlcyBmb3IgdXNpbmcgaWNvbnMgYXMgd2hpdGUgb24gYSBkYXJrIGJhY2tncm91bmQuICovXFxuLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0IHsgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQubWQtaW5hY3RpdmUgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XFxuXFxuLm1hdGVyaWFsLWljb25zLm1kLTE4IHsgZm9udC1zaXplOiAxOHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTI0IHsgZm9udC1zaXplOiAyNHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTM2IHsgZm9udC1zaXplOiAzNnB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTQ4IHsgZm9udC1zaXplOiA0OHB4OyB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYix1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0Q0FBNEM7O0FBRWhEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksMEJBQTBCO0FBQzlCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtHQUFrRztJQUNsRzs7Ozs7UUFLSTtBQUNSOztBQUVBOzBDQUMwQztBQUMxQztJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDRzs7QUFFSDs7QUFFQTs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7Ozs7QUFLQSwyQkFBMkI7QUFDM0I7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDs7RUFFQSxzQkFBc0I7RUFDdEI7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCLEVBQUUsa0NBQWtDO0lBQ3BELGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtFQUNsRTs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOzs7QUFHRixZQUFZO0FBQ1o7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztBQUVGO0lBQ0ksNENBQTRDO0lBQzVDLFVBQVU7RUFDWjs7O0FBR0YsMkJBQTJCO0FBQzNCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7Ozs7RUFJQSwrQkFBK0I7QUFDakMsd0JBQXdCLGVBQWUsRUFBRTtBQUN6Qyx3QkFBd0IsZUFBZSxFQUFFO0FBQ3pDLHdCQUF3QixlQUFlLEVBQUU7QUFDekMsd0JBQXdCLGVBQWUsRUFBRTs7QUFFekMsMERBQTBEO0FBQzFELDBCQUEwQiwwQkFBMEIsRUFBRTtBQUN0RCxzQ0FBc0MsMEJBQTBCLEVBQUU7O0FBRWxFLHlEQUF5RDtBQUN6RCwyQkFBMkIsNkJBQTZCLEVBQUU7QUFDMUQsdUNBQXVDLCtCQUErQixFQUFFOztBQUV4RSx3QkFBd0IsZUFBZSxFQUFFO0FBQ3pDLHdCQUF3QixlQUFlLEVBQUU7QUFDekMsd0JBQXdCLGVBQWUsRUFBRTtBQUN6Qyx3QkFBd0IsZUFBZSxFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvbW91bnRhaW4uanBnJyk7ICovXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAzZnIgbWlubWF4KGF1dG8sIDEwMHB4KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIgaW1nIHtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxufVxcblxcbi5hcHAtYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDFmcikgNGZyO1xcblxcbn1cXG5cXG5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbn1cXG5cXG4ubWFpbi1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuXFxuLnRhc2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gICAgLyogaGVpZ2h0OiA1MHB4OyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAyMDBweCBtaW5tYXgobWF4LWNvbnRlbnQsIGF1dG8pIG1pbm1heChtYXgtY29udGVudCwgMTIwcHgpIDEwMHB4IDUwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgJ3Byb2plY3QtbCB0aXRsZS1sIGRlc2NyaXB0aW9uLWwgZGF0ZS1sIHByaW9yaXR5LWwgY29tcGxldGUtbCdcXG4gICAgICAgICdwcm9qZWN0LXYgdGl0bGUtdiBkZXNjcmlwdGlvbi12IGRhdGUtdiBwcmlvcml0eS12IGNvbXBsZXRlLXYnXFxuICAgICAgICAnYnRuLWN0biAgIGJ0bi1jdG4gYnRuLWN0biAgICAgICBidG4tY3RuIGJ0bi1jdG4gICBidG4tY3RuJ1xcbiAgICAgICAgJ2V4cGFuZCAgICBleHBhbmQgIGV4cGFuZCAgICAgICAgZXhwYW5kICBleHBhbmQgICAgZXhwYW5kJ1xcbiAgICAgICAgO1xcbn1cXG5cXG4vKiAucHJvamVjdCAubGFiZWwgeyBncmlkLWFyZWE6IHByb2plY3QtbDsgfVxcbi5wcm9qZWN0IC5pdGVtIHsgZ3JpZC1hcmVhOiBwcm9qZWN0LXY7IH0gKi9cXG4udGFzay1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBidG4tY3RuO1xcbn1cXG4udGFzay1leHBhbmQge1xcbiAgICBncmlkLWFyZWE6IGV4cGFuZDtcXG59XFxuXFxuXFxuXFxuXFxuLyogXFxuLnRhc2sgLnByb2plY3Q6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJQUk9KRUNUXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbn1cXG5cXG4udGFzayAudGl0bGU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJUSVRMRVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG59XFxuXFxuLnRhc2sgLmRlc2NyaXB0aW9uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiREVTQ1JJUFRJT05cXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxufVxcblxcbi50YXNrIC5kYXRlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiREFURVxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG59XFxuXFxuLnRhc2sgLnByaW9yaXR5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiUFJJT1JJVFlcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4cHg7XFxufVxcblxcbi50YXNrIC5jb21wbGV0ZWQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJET05FP1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG59ICovXFxuXFxuLnRhc2sgLml0ZW0ge1xcbiAgICBcXG59XFxuXFxuLnRhc2sgLmRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTMwLCAxNzcpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIH1cXG4gIFxcbiAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbiAgLmNsb3NlIHtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIFxcbiAgLmNsb3NlOmhvdmVyLFxcbiAgLmNsb3NlOmZvY3VzIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG4vKiBTaWRlYmFyICovXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59IFxcbiBcXG4ucHJvamVjdC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIC8qIGdhcDogMjBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIHBhZGRpbmc6IDBweCAxMHB4OyAqL1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuLnByb2plY3QtbGlzdCBhOmhvdmVyIHtcXG4gICAgLyogYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDI1NCwgMCwgMCk7ICovXFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuXFxuXFxuLyogZGVsZXRlIHdhcm5pbmcgbWVzc2FnZSAqL1xcbiNwcm9qZWN0LW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1JTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcblxcbiAgI3Byb2plY3QtbW9kYWwgLmNsb3NlLW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC50YXNrLWV4cGFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcblxcbiAgLnRhc2stYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkOWQ5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAuY29tcGxldGVkIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG5cXG5cXG4gIC8qIFJ1bGVzIGZvciBzaXppbmcgdGhlIGljb24uICovXFxuLm1hdGVyaWFsLWljb25zLm1kLTE4IHsgZm9udC1zaXplOiAxOHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTI0IHsgZm9udC1zaXplOiAyNHB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTM2IHsgZm9udC1zaXplOiAzNnB4OyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLTQ4IHsgZm9udC1zaXplOiA0OHB4OyB9XFxuXFxuLyogUnVsZXMgZm9yIHVzaW5nIGljb25zIGFzIGJsYWNrIG9uIGEgbGlnaHQgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtZGFyayB7IGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XFxuLm1hdGVyaWFsLWljb25zLm1kLWRhcmsubWQtaW5hY3RpdmUgeyBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxcblxcbi8qIFJ1bGVzIGZvciB1c2luZyBpY29ucyBhcyB3aGl0ZSBvbiBhIGRhcmsgYmFja2dyb3VuZC4gKi9cXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxcbi5tYXRlcmlhbC1pY29ucy5tZC1saWdodC5tZC1pbmFjdGl2ZSB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWQtMTggeyBmb250LXNpemU6IDE4cHg7IH1cXG4ubWF0ZXJpYWwtaWNvbnMubWQtMjQgeyBmb250LXNpemU6IDI0cHg7IH1cXG4ubWF0ZXJpYWwtaWNvbnMubWQtMzYgeyBmb250LXNpemU6IDM2cHg7IH1cXG4ubWF0ZXJpYWwtaWNvbnMubWQtNDggeyBmb250LXNpemU6IDQ4cHg7IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tBcnJheVwiO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2FsU3RvcmFnZVVwZGF0ZVwiO1xuaW1wb3J0IHsgcmVmcmVzaCB9IGZyb20gXCIuLi8uLi91dGlscy9yZWxvYWRVSVwiO1xuaW1wb3J0IHsgY2xlYXJVSSB9IGZyb20gXCIuLi8uLi91dGlscy9jbGVhclVJXCI7XG5cbmZ1bmN0aW9uIGFkZERlbGV0ZVByb2plY3RCdG4gKHByb2plY3RUaXRsZSkgeyAgXG4gICAgY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idXR0b24tYXJlYScpXG4gICAgLy8gYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdFJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RSZW1vdmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1yZW1vdmUtYnV0dG9uJyk7XG4gICAgcHJvamVjdFJlbW92ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFByb2plY3RcIjtcblxuICAgIG15Qm9keS5hcHBlbmQocHJvamVjdFJlbW92ZSk7XG4gICAgXG4gICAgLy8gbW9kYWxcbiAgICBjb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcmVtb3ZlLWJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XG4gICAgLy8gY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbiAgICBcbiAgICBjb25zdCBjb25maXJtRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tZGVsZXRlLXByb2plY3QnKTtcbiAgICBjb25zdCBjYW5jZWxEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWRlbGV0ZS1wcm9qZWN0Jyk7XG4gICAgXG4gICAgY29uc3QgYXBwQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtYm9keScpO1xuICAgIFxuICAgIG9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHsgXG4gICAgICAgIGFwcEJvZHkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiOyBcbiAgICAgICAgd2FybmluZ01lc3NhZ2UocHJvamVjdFRpdGxlKTtcbiAgICB9KTtcblxuICAgIGNhbmNlbERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4geyBcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYXBwQm9keS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybmluZy10ZXh0Jyk7XG4gICAgICAgIHdhcm5pbmcudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0pO1xuXG4gICAgLy8gbG9naWNcbiAgICBjb25maXJtRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImJhY2sgdG8gY29uZmlybURlbGV0ZVwiKVxuICAgICAgICAvLyB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYXBwQm9keS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgIC8vIGNsZWFyVUkoKTtcbiAgICAgICAgLy8gcmVmcmVzaChcImFsbFwiKTtcbiAgICB9KTtcbiAgICBcbn1cblxuZnVuY3Rpb24gd2FybmluZ01lc3NhZ2UocHJvamVjdFRpdGxlKXtcbiAgICBjb25zdCB3YXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhcm5pbmctdGV4dCcpO1xuICAgIGxldCBteVRleHQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZTogJHtwcm9qZWN0VGl0bGV9YDtcbiAgICB3YXJuaW5nLmFwcGVuZChteVRleHQpO1xufVxuXG4vLyBodHRwczovL2JvYmJ5aGFkei5jb20vYmxvZy9qYXZhc2NyaXB0LWFycmF5LWZpbmQtaW5kZXgtb2Ytb2JqZWN0LWJ5LXByb3BlcnR5XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSl7XG4gICAgaWYocHJvamVjdFRpdGxlID09PSBcImFsbFwiKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW4ndCBkZWxldGUgQUxMXCIpXG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgcHJvamVjdCB0aXRsZTogJHtwcm9qZWN0VGl0bGV9YCk7XG4gICAgICAgIGxldCBkZWxQcm9qSW5kZXggPSBwcm9qZWN0c0FycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLnByb2plY3QgPT09IHByb2plY3RUaXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IE5hbWU6ICR7cHJvamVjdFRpdGxlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBJbmRleDogJHtkZWxQcm9qSW5kZXh9YCk7XG4gICAgICAgIGlmKHByb2plY3RzQXJyYXlbZGVsUHJvakluZGV4XS5wcm9qZWN0ID09IHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBjb25kaXRvaW4gbWF0Y2hlcycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5W2RlbFByb2pJbmRleF0ucHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShkZWxQcm9qSW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgY2xlYXJVSSgpO1xuICAgICAgICAgICAgcmVmcmVzaChcImFsbFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59XG5cblxuZXhwb3J0IHsgYWRkRGVsZXRlUHJvamVjdEJ0biB9ICIsIi8vbW9kdWxlIGZpbmRzIGFsbCBwcm9qZWN0IG5hbWVzXG4vLyB5b3UgbXVzdCBpbnZva2UgdGhpcyBldmVyeSB0aW1lIGEgbmV3IHByb2plY3QgaXMgY3JlYXRlZC9kZWxldGVkLlxuXG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4uLy4uL21vZHVsZXMvdGFza0FycmF5XCI7XG5pbXBvcnQgeyB0YXNrSW5kZXhTZWFyY2ggfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy90YXNrSW5kZXhTZWFyY2hcIjtcblxuY29uc3Qgc2VsZWN0b3JCdXR0b24gPSAoKSA9PiB7XG4gICAgLy8gZm9yIE5ldyBUYXNrIGJ1dHRvblxuICAgIGNvbnN0IG1vZGFsU2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpLm9wdGlvbnM7XG4gICAgLy8gZm9yIHRhc2sgZXhwYW5kIGZpZWxkXG4gICAgLy8gY29uc3QgdGFza0V4cGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWV4cGFuZCAjc2VsZWN0LXByb2plY3QnKTtcblxuXG4gICAgLy8gcmVtb3ZlIGFueSBleGlzaXRpbmdcbiAgICBjb25zdCBsZW5ndGggPSBtb2RhbFNlbGVjdFByb2plY3QubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IGxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgbW9kYWxTZWxlY3RQcm9qZWN0W2ldID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpdGVtQXJyYXkuZm9yRWFjaChvcHRpb24gPT4gbW9kYWxTZWxlY3RQcm9qZWN0LmFkZChuZXcgT3B0aW9uKG9wdGlvbi50ZXh0LCBvcHRpb24udmFsdWUsIG9wdGlvbi5zZWxlY3RlZCkpKTtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTE9wdGlvbkVsZW1lbnQvT3B0aW9uXG4gICAgbGV0IHRlbXBBcnJheSA9IFtdO1xuICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaCggcHJvamVjdHNBcnJheU9iaiA9PiB7XG4gICAgICAgIGlmKCF0ZW1wQXJyYXkuaW5jbHVkZXMocHJvamVjdHNBcnJheU9ialsncHJvamVjdCddKSl7XG4gICAgICAgICAgICBtb2RhbFNlbGVjdFByb2plY3QuYWRkKG5ldyBPcHRpb24ocHJvamVjdHNBcnJheU9iai5wcm9qZWN0LCBwcm9qZWN0c0FycmF5T2JqLnByb2plY3QpKVxuICAgICAgICAgICAgdGVtcEFycmF5LnB1c2gocHJvamVjdHNBcnJheU9iai5wcm9qZWN0KVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSlcbn1cblxuLy8gZnVuY3Rpb24gcmVtb3ZlT3B0aW9ucyhzZWxlY3RFbGVtZW50KSB7XG4gICAgXG4vLyB9XG5cblxuY29uc3Qgc2VsZWN0b3JCdXR0b25UYXNrRXhwYW5kID0gKGUpID0+IHtcbiAgICAvLyBmb3IgbmV3IHRhc2tFeHBhbmRFZGl0IG1vZHVsZSB3aGljaCBhbHJlYWR5IGNyZWF0ZWQgdGhlIHNlbGVjdG9yLlxuICAgIGNvbnN0IHRhc2tFeHBhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QyJykub3B0aW9ucztcbiAgICAvLyBmb3IgdGFzayBleHBhbmQgZmllbGRcbiAgICAvLyBjb25zdCB0YXNrRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZXhwYW5kICNzZWxlY3QtcHJvamVjdCcpO1xuXG5cbiAgICAvLyByZW1vdmUgYW55IGV4aXNpdGluZ1xuICAgIGNvbnN0IGxlbmd0aCA9IHRhc2tFeHBhbmQubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IGxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgdGFza0V4cGFuZFtpXSA9IG51bGw7XG4gICAgfVxuXG5cbiAgICAvLyBnZXR0aW5nIGRlZmF1bHQgUHJvamVjdCBOYW1lIG9wdGlvbiBzZWxlY3RlZFxuICAgIGxldCB0YXNrUGFyZW50Tm9kZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgbGV0IHRhc2tJRCA9IHRhc2tQYXJlbnROb2RlLmRhdGFzZXQuaWRlbnRpdHk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RvckJ1dHRvblRhc2tFeHBhbmQgdGFza0lEOiBcIiArIHRhc2tJRCk7XG5cbiAgICBsZXQgcHJvamVjdE5hbWVBcnJheSA9IHRhc2tJbmRleFNlYXJjaCh0YXNrSUQpO1xuICAgIGxldCBvdXR0ZXIgPSBwcm9qZWN0TmFtZUFycmF5WzBdO1xuICAgIGxldCBpbm5lciA9IHByb2plY3ROYW1lQXJyYXlbMV07XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RvckJ1dHRvblRhc2tFeHBhbmQgb3V0dGVyOiBcIiArIG91dHRlcik7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RvckJ1dHRvblRhc2tFeHBhbmQgaW5uZXI6IFwiICsgaW5uZXIpO1xuXG4gICAgbGV0IHRhc2tPYmplY3QgPSBwcm9qZWN0c0FycmF5W291dHRlcl0udGFza3NbaW5uZXJdO1xuICAgIGNvbnNvbGUubG9nKHRhc2tPYmplY3QpO1xuICAgIGxldCB0YXNrUHJvamVjdCA9IHByb2plY3RzQXJyYXlbb3V0dGVyXS50YXNrc1tpbm5lcl0ucHJvamVjdDtcblxuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxPcHRpb25FbGVtZW50L09wdGlvblxuICAgIC8vIGl0ZW1BcnJheS5mb3JFYWNoKG9wdGlvbiA9PiBtb2RhbFNlbGVjdFByb2plY3QuYWRkKG5ldyBPcHRpb24ob3B0aW9uLnRleHQsIG9wdGlvbi52YWx1ZSwgb3B0aW9uLnNlbGVjdGVkKSkpO1xuICAgIGxldCB0ZW1wQXJyYXkgPSBbXTtcbiAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goIHByb2plY3RzQXJyYXlPYmogPT4ge1xuICAgICAgICBpZighdGVtcEFycmF5LmluY2x1ZGVzKHByb2plY3RzQXJyYXlPYmpbJ3Byb2plY3QnXSkpeyAvL2F2b2lkIGR1cGxpY2F0ZXNcbiAgICAgICAgICAgIGlmKCBwcm9qZWN0c0FycmF5T2JqLnByb2plY3QgPT0gdGFza1Byb2plY3QgKXtcbiAgICAgICAgICAgICAgICB0YXNrRXhwYW5kLmFkZChuZXcgT3B0aW9uKHByb2plY3RzQXJyYXlPYmoucHJvamVjdCwgcHJvamVjdHNBcnJheU9iai5wcm9qZWN0LCB0cnVlLCB0cnVlKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFza0V4cGFuZC5hZGQobmV3IE9wdGlvbihwcm9qZWN0c0FycmF5T2JqLnByb2plY3QsIHByb2plY3RzQXJyYXlPYmoucHJvamVjdCwgZmFsc2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVtcEFycmF5LnB1c2gocHJvamVjdHNBcnJheU9iai5wcm9qZWN0KVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSlcbn1cblxuXG5cbmV4cG9ydCB7IHNlbGVjdG9yQnV0dG9uLCBzZWxlY3RvckJ1dHRvblRhc2tFeHBhbmQgfVxuXG5cbi8vIG5vdCBiYWQgaHR0cHM6Ly9hbHZhcm90cmlnby5jb20vYmxvZy9qYXZhc2NyaXB0LXNlbGVjdC1vcHRpb24vIiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tBcnJheVwiO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2FsU3RvcmFnZVVwZGF0ZVwiO1xuaW1wb3J0IHsgc2VsZWN0b3JCdXR0b24gfSBmcm9tIFwiLi9tb2RhbFByb2plY3RTZWxlY3RvclwiO1xuaW1wb3J0IHsgY2xlYXJCb2R5IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NsZWFyQm9keVwiO1xuaW1wb3J0IHsgY2xlYXJQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi91dGlscy9jbGVhclByb2plY3RMaXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0RGlzcGxheSB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Byb2plY3REaXNwbGF5XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0TGlzdCB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TmFtZVRlc3QgfSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9wcm9qZWN0TmFtZVRlc3RcIjtcbmltcG9ydCB7IGNsZWFyVGFza0V4cGFuZCB9IGZyb20gXCIuLi8uLi91dGlscy9jbGVhclRhc2tFeHBhbmRcIjtcblxuXG5mdW5jdGlvbiBwcm9qZWN0TmV3QnRuKCl7XG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAvL2NoZWNrcyBpZiBuZXcgcHJvamVjdCBpbnB1dCBmaWVsZCBleGlzdHNcbiAgICAgICAgY29uc3QgZG9lc0VsZW1lbnRFeGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBpZiAoZG9lc0VsZW1lbnRFeGlzdCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3QgaW5wdXQgZmllbGQgZXhpc3RzLiBwbGVhc2Ugc3VibWl0IHZhbHVlXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjcmVhdGVzIHByb2plY3QgaW5wdXQgZmllbGRcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3RGaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgICAgICAgICAgcHJvamVjdEZpZWxkLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwicHJvamVjdFwiKVxuICAgICAgICAgICAgcHJvamVjdEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1pbnB1dFwiKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0RmllbGQpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSk9PiB7XG4gICAgICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0RmllbGQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcE9iaiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0ZW1wT2JqWydwcm9qZWN0J10gPSBwcm9qZWN0RmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBPYmpbJ3Rhc2tzJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKHRlbXBPYmopO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RmllbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9laXRoZXIgYWRkIG5ldyBEaXYgb3IgcnVuIHByb2plY3RMaXN0PyBOZWVkIHRvIHJlbW92ZSBvbGQgcHJvamVjdExpc3QgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlVGFza0J0bigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckJvZHkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRhc2tFeHBhbmQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZWxvYWQgZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yQnV0dG9uKCk7IC8vIGFkZHMgbmV3IHByb2plY3QgdG8gc2VsZWN0b3IgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3REaXNwbGF5KHByb2plY3RGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGdldFByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pICAgICAgICAgICBcbn1cblxuZXhwb3J0IHsgcHJvamVjdE5ld0J0biB9XG5cbi8vIG5lZWQgdG8gYWRkIGxvZ2ljIGlmIHByb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0cy4gY2FwIHNlbnM/IiwiLy8gbW9kdWxlIGZvciBtb2RhbCBwb3B1cFxuXG4vLyBpbXBvcnQgYWxsIHByb2plY3QgbmFtZXMgZm9yIGZvcm0gc2VsZWN0IGlucHV0XG5pbXBvcnQgeyBzZWxlY3RvckJ1dHRvbiB9IGZyb20gXCIuL21vZGFsUHJvamVjdFNlbGVjdG9yXCI7XG4vLyBpbXBvcnQgc3VibWl0IGJ1dHRvbiB3LyBldmVudExpc3RlbmVyIGF0dGFjaGVkLiBcbmltcG9ydCB7IHN1Ym1pdEJ0biB9IGZyb20gXCIuLi8uLi9tb2R1bGVzL3Rhc2tTdWJtaXRcIjtcblxuXG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xudGFza0J1dHRvbi5zdHlsZS5jb2xvciA9IFwiYmx1ZVwiXG5jb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG5cbi8vIHdoZW4gdXNlciBjbGlja3Mgb24gYnV0dG9uLCBvcGVuIG1vZGFsXG5mdW5jdGlvbiB0YXNrQnRuKCl7XG4gICAgc2VsZWN0b3JCdXR0b24oKTtcblxuICAgIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHsgICBcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcblxuICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uICgpe1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjbG9zZVRhc2tCdG4oKXtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cblxuZXhwb3J0IHt0YXNrQnRuLCBjbG9zZVRhc2tCdG59IiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiO1xuXG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKXtcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coYHByb2plY3QgdGl0bGU6ICR7cHJvamVjdFRpdGxlfWApO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbFByb2pJbmRleCA9IHByb2plY3RzQXJyYXkuZmluZEluZGV4KG9iaiA9PiBvYmoucHJvamVjdCA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgTmFtZTogJHtwcm9qZWN0VGl0bGV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IEluZGV4OiAke2RlbFByb2pJbmRleH1gKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHByb2plY3RzQXJyYXlbZGVsUHJvakluZGV4XS5wcm9qZWN0ID09IHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBjb25kaXRvaW4gbWF0Y2hlcycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5W2RlbFByb2pJbmRleF0ucHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShkZWxQcm9qSW5kZXgsIDEpO1xuICAgICAgICAgICAgLy8gdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gY2xlYXJVSSgpO1xuICAgICAgICAgICAgLy8gcmVmcmVzaChcImFsbFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcblxufVxuXG5leHBvcnQgeyBkZWxldGVQcm9qZWN0IH0iLCJpbXBvcnQgeyB0YXNrSW5kZXhTZWFyY2ggfSBmcm9tIFwiLi90YXNrSW5kZXhTZWFyY2hcIjtcbmltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIjtcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9sb2NhbFN0b3JhZ2VVcGRhdGVcIjtcbmltcG9ydCB7IHByb2plY3REaXNwbGF5IH0gZnJvbSBcIi4vcHJvamVjdERpc3BsYXlcIjtcbmltcG9ydCB7IGNsZWFyVUkgfSBmcm9tIFwiLi4vdXRpbHMvY2xlYXJVSVwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuXG4vKlxucHJvamVjdHNBcnJheSA9IFtcbiAgICB7cHJvamVjdDogbmFtZSwgdGFza3M6IFt7fSwge31dfVxuICAgIHtwcm9qZWN0OiBuYW1lLCB0YXNrczogW3t9LCB7fV19XG5dO1xuKi9cblxuZnVuY3Rpb24gZGVsZXRlVGFza3ModGFza0lEKXtcbiAgICBsZXQgZGVsZXRlQXJyYXkgPSB0YXNrSW5kZXhTZWFyY2godGFza0lEKTtcbiAgICBsZXQgb3V0dGVyID0gZGVsZXRlQXJyYXlbMF07XG4gICAgbGV0IGlubmVyID0gZGVsZXRlQXJyYXlbMV07XG4gICAgY29uc29sZS5sb2coXCJkZWxldGVUYXNrcyBvdXR0ZXI6IFwiICsgb3V0dGVyKTtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVRhc2tzIGlubmVyOiBcIiArIGlubmVyKTtcbiAgICBwcm9qZWN0c0FycmF5W291dHRlcl0udGFza3Muc3BsaWNlKGlubmVyLCAxKTtcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdE5hbWUgPSBjdXJyZW50UHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0TmFtZTtcbiAgICBcbiAgICBjbGVhclVJKCk7XG4gICAgZ2V0UHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0RGlzcGxheShjdXJyZW50UHJvamVjdE5hbWUpO1xufVxuXG5leHBvcnQgeyBkZWxldGVUYXNrcyB9O1xuXG5cblxuXG5cbiIsIi8vIG1vZHVsZSBkaXNwbGF5cyB0YXNrcyBieSBwcm9qZWN0XG5cbi8vIGltcG9ydHMgdGhlIHNpbmdsZSBhcnJheSBjb250YWluaW5nIGFsbCBwcm9qZWN0c1xuaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gJy4vdGFza0FycmF5JztcbmltcG9ydCB7IHByb2plY3RIZWFkZXIgfSBmcm9tICcuL3Byb2plY3RIZWFkZXInO1xuaW1wb3J0IHsgZXhwYW5kVGFzayB9IGZyb20gJy4vdGFza0V4cGFuZEVkaXQnO1xuaW1wb3J0IHsgc2VsZWN0b3JCdXR0b25UYXNrRXhwYW5kIH0gZnJvbSAnLi4vY29tcG9uZW50cy91aS9tb2RhbFByb2plY3RTZWxlY3Rvcic7XG5pbXBvcnQgeyB0YXNrSW5kZXhTZWFyY2ggfSBmcm9tICcuL3Rhc2tJbmRleFNlYXJjaCc7XG5pbXBvcnQgeyBkZWxldGVUYXNrcyB9IGZyb20gJy4vZGVsZXRlVGFza3MnO1xuXG5mdW5jdGlvbiBwcm9qZWN0RGlzcGxheShwcm9qZWN0dmFsdWUpe1xuICAgIGNvbnN0IG15Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJvZHknKTtcblxuICAgIC8vIGhlYWRlciBmb3IgcHJvamVjdCB0aXRsZSBcbiAgICBwcm9qZWN0SGVhZGVyKHByb2plY3R2YWx1ZSk7XG5cblxuICAgIGlmKHByb2plY3R2YWx1ZSA9PSBcImFsbFwiKXtcbiAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKCBwcm9qZWN0c0FycmF5T2JqID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdHNBcnJheU9ialsndGFza3MnXS5mb3JFYWNoKCB0YXNrT2JqID0+IHtcbiAgICAgICAgICAgICAgICAvLyBuZXh0IHJlZmFjdG9yOiByZXR1cm4gdGFza09iaiBhbmQgZXhwb3J0IGludG8gR3JhcGhpY2FsVUlcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBuZXdUYXNrUm93LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgICAgICAgICAgICAgIC8vIGxhYmVscyBmaXJzdCBhY3Jvc3MgdGhlIHJvd1xuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHRhc2tPYmope1xuICAgICAgICAgICAgICAgICAgICBpZihrZXkgIT09IFwiaWRlbnRpdHlcIiAmJiBrZXkgIT09IFwibm90ZXNcIil7IC8va2luZGEgd2VpcmQgY29uZGl0aW9uYWwuIHNob3VsZG4ndCB3b3JrIGJ1dCBkb2VzLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGFiZWwuYXBwZW5kKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGFiZWwuY2xhc3NMaXN0LmFkZChrZXksICdsYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrUm93LmFwcGVuZCh0YXNrTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHZhbHVlcyBvbmx5IGFjcm9zcyB0aGUgcm93XG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gdGFza09iail7XG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSAhPT0gXCJpZGVudGl0eVwiICYmIGtleSAhPT0gXCJub3Rlc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1ZhbHVlLmFwcGVuZChgJHt0YXNrT2JqW2tleV19YClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tWYWx1ZS5jbGFzc0xpc3QuYWRkKGtleSwgJ2l0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza1Jvdy5hcHBlbmQodGFza1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiaWRlbnRpdHlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza1Jvdy5kYXRhc2V0LmlkZW50aXR5ID0gdGFza09ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy93ZSBhcmUgdXNpbmcgdmFyaWFibGUga2V5LCBoZW5jZTogdGFza09ialtrZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbm90IHRhc2tPYmpbJ2tleSddLCB0aGF0IHdvdWxkIGJlbG9uZyB0byBhY3R1YWwgbmFtZXMgcHJvamVjdEFycmF5Wydwcm9qZWN0J11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vZWRpdCBhbmQgZGVsZXRlIGJ1dHRvbnNcbiAgICAgICAgICAgICAgICBjb25zdCBidG5DdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnRuQ3RuRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9uLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICAgICAgICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICAgICAgICAgICAgICAgIGJ0bkN0bkRpdi5hcHBlbmQoZWRpdEJ0bik7XG4gICAgICAgICAgICAgICAgYnRuQ3RuRGl2LmFwcGVuZChkZWxCdG4pO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tSb3cuYXBwZW5kKGJ0bkN0bkRpdik7XG5cbiAgICAgICAgICAgICAgICBteUJvZHkuYXBwZW5kKG5ld1Rhc2tSb3cpO1xuXG4gICAgICAgICAgICAgICAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L2N1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBkb2VzRWxlbWVudEV4aXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZXhwYW5kJylcbiAgICAgICAgICAgICAgICAgICAgaWYoIWRvZXNFbGVtZW50RXhpc3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9lLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9tb3ZlIGJlbG93IHRvIGV4cGFuZFRhc2sgYW5kIHNlbGVjdG9yQnV0dG9uVGFza0V4cGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGFza1BhcmVudE5vZGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGFza0lEID0gdGFza1BhcmVudE5vZGUuZGF0YXNldC5pZGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza0lEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFza0luZGV4U2VhcmNoKHRhc2tJRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFRhc2soZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvckJ1dHRvblRhc2tFeHBhbmQoZSk7IC8vIG11c3QgYmUgYWRkZWQgYWZ0ZXIgdG8gZ2V0IG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFza0luZGV4U2VhcmNoKGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2Ugc3VibWl0IG9yIGNsb3NlIG91dCBFeHBhbmRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uIGNsaWNrLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSB1bmlxdWUgSUQgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgLy8gcnVuJ3MgZGVsZXRlRnVuY3Rpb24odW5pcXVlSUQpXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSgpIGluY2x1ZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBmb3IgZmluZGluZyBvdXRlciBpbmRleCBhbmQgaW5uZXIgaW5kZXggb2YgdW5pcXVlSURcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGVuIHNsaWNlcyB0aGF0IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgbG9jYWxzdG9yYWdlIChkb24ndCBpbmNsdWRlIHRoaXMgZWl0aGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVydW5zIHByb2plY3RzRGlzcGxheSwgZXRjLiAoYWN0dWFsbHkgc2hvdWxkbid0IGluY2x1ZGUgdGhpcylcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tQYXJlbnROb2RlID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tJRCA9IHRhc2tQYXJlbnROb2RlLmRhdGFzZXQuaWRlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tzKHRhc2tJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkgICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2gocHJvamVjdHNBcnJheU9iaiA9PiB7XG4gICAgICAgICAgICBpZihwcm9qZWN0c0FycmF5T2JqWydwcm9qZWN0J10gPT0gcHJvamVjdHZhbHVlKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5T2JqWyd0YXNrcyddLmZvckVhY2godGFza09iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tSb3cuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbHMgZmlyc3QgYWNyb3NzIHRoZSByb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHRhc2tPYmope1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGtleSAhPT0gXCJpZGVudGl0eVwiICYmIGtleSAhPT0gXCJub3Rlc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMYWJlbC5hcHBlbmQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xhYmVsLmNsYXNzTGlzdC5hZGQoa2V5LCAnbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrUm93LmFwcGVuZCh0YXNrTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWVzIG9ubHkgYWNyb3NzIHRoZSByb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHRhc2tPYmope1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGtleSAhPT0gXCJpZGVudGl0eVwiICYmIGtleSAhPT0gXCJub3Rlc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1NlY3Rpb24uYXBwZW5kKGAke3Rhc2tPYmpba2V5XX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrU2VjdGlvbi5jbGFzc0xpc3QuYWRkKGtleSwgJ2l0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrUm93LmFwcGVuZCh0YXNrU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiaWRlbnRpdHlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrUm93LmRhdGFzZXQuaWRlbnRpdHkgPSB0YXNrT2JqW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vd2UgYXJlIHVzaW5nIHZhcmlhYmxlIGtleSwgaGVuY2U6IHRhc2tPYmpba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbm90IHRhc2tPYmpbJ2tleSddLCB0aGF0IHdvdWxkIGJlbG9uZyB0byBhY3R1YWwgbmFtZXMgcHJvamVjdEFycmF5Wydwcm9qZWN0J11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2VkaXQgYW5kIGRlbGV0ZSBidXR0b25zXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bkN0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidG5DdG5EaXYuY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ3RuRGl2LmFwcGVuZChlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ3RuRGl2LmFwcGVuZChkZWxCdG4pO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrUm93LmFwcGVuZChidG5DdG5EaXYpO1xuICAgICAgICAgICAgICAgICAgICBteUJvZHkuYXBwZW5kKG5ld1Rhc2tSb3cpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3VGFza1Jvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGRvZXNFbGVtZW50RXhpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1leHBhbmQnKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYoIWRvZXNFbGVtZW50RXhpc3Qpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGV4cGFuZFRhc2soZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2VsZWN0b3JCdXR0b25UYXNrRXhwYW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwicGxlYXNlIHN1Ym1pdCBvciBjbG9zZSBvdXQgRXhwYW5kXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZG9lc0VsZW1lbnRFeGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWV4cGFuZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighZG9lc0VsZW1lbnRFeGlzdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbW92ZSBiZWxvdyB0byBleHBhbmRUYXNrIGFuZCBzZWxlY3RvckJ1dHRvblRhc2tFeHBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCB0YXNrUGFyZW50Tm9kZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdGFza0lEID0gdGFza1BhcmVudE5vZGUuZGF0YXNldC5pZGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0YXNrSW5kZXhTZWFyY2godGFza0lEKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRUYXNrKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yQnV0dG9uVGFza0V4cGFuZChlKTsgLy8gbXVzdCBiZSBhZGRlZCBhZnRlciB0byBnZXQgb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFza0luZGV4U2VhcmNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsZWFzZSBzdWJtaXQgb3IgY2xvc2Ugb3V0IEV4cGFuZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uIGNsaWNrLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgdW5pcXVlIElEIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBydW4ncyBkZWxldGVGdW5jdGlvbih1bmlxdWVJRClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSgpIGluY2x1ZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gZm9yIGZpbmRpbmcgb3V0ZXIgaW5kZXggYW5kIGlubmVyIGluZGV4IG9mIHVuaXF1ZUlEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHRoZW4gc2xpY2VzIHRoYXQgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgbG9jYWxzdG9yYWdlIChkb24ndCBpbmNsdWRlIHRoaXMgZWl0aGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcnVucyBwcm9qZWN0c0Rpc3BsYXksIGV0Yy4gKGFjdHVhbGx5IHNob3VsZG4ndCBpbmNsdWRlIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza1BhcmVudE5vZGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tJRCA9IHRhc2tQYXJlbnROb2RlLmRhdGFzZXQuaWRlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUYXNrcyh0YXNrSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IHsgcHJvamVjdERpc3BsYXkgfSIsIi8vIGRpc3BsYXlzIGhlYWRlci4gZS5nLiBQcm9qZWN0OiBhbGxcblxuZnVuY3Rpb24gcHJvamVjdEhlYWRlcihwcm9qZWN0VGl0bGUpe1xuICAgIGNvbnN0IG15Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJvZHknKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBwcm9qZWN0SGVhZGVyLmRhdGFzZXQucHJvamVjdE5hbWUgPSBwcm9qZWN0VGl0bGU7XG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Byb2plY3RUaXRsZX1gO1xuICAgIFxuICAgIC8vIGRhdGFzZXQgZm9yIGRlbGV0ZSBwcm9qZWN0IGJ1dHRvblxuICAgIC8vIGlmKHByb2plY3RUaXRsZSA9PSBcImFsbFwiKXtcbiAgICAvLyAgICAgcHJvamVjdEhlYWRlci5kYXRhc2V0LnRpdGxlID0gXCJhbGxcIjsgXG4gICAgLy8gfVxuXG4gICAgbXlCb2R5LmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcblxufVxuXG5leHBvcnQgeyBwcm9qZWN0SGVhZGVyIH0iLCIvLyBkaXNwbGF5cyBhbGwgY2xpY2thYmxlIHByb2plY3QgbmFtZXMgaW4gPHNpZGViYXI+IFxuaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tICcuLi9tb2R1bGVzL3Byb2plY3REaXNwbGF5JztcbmltcG9ydCB7IGNsZWFyQm9keSB9IGZyb20gJy4uL3V0aWxzL2NsZWFyQm9keSc7XG5pbXBvcnQgeyB0YXNrQnRuIH0gZnJvbSAnLi4vY29tcG9uZW50cy91aS9uZXdUYXNrQnV0dG9uJztcbmltcG9ydCB7IGFkZERlbGV0ZVByb2plY3RCdG4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9hZGREZWxldGVQcm9qZWN0QnV0dG9uXCI7XG5pbXBvcnQgeyByZW1vdmVQcm9qZWN0RGVsZXRlQnRuIH0gZnJvbSBcIi4uL3V0aWxzL2NsZWFyRGVsZXRlUHJvamVjdEJ1dHRvblwiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL2RlbGV0ZVByb2plY3RcIjtcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9sb2NhbFN0b3JhZ2VVcGRhdGVcIjtcbmltcG9ydCB7IGNsZWFyUHJvamVjdHMgfSBmcm9tIFwiLi4vdXRpbHMvY2xlYXJQcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgY2xlYXJUYXNrRXhwYW5kIH0gZnJvbSBcIi4uL3V0aWxzL2NsZWFyVGFza0V4cGFuZFwiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0TGlzdCgpe1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuXG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKCBwcm9qZWN0T2JqID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0T2JqWydwcm9qZWN0J107XG4gICAgICAgIFxuICAgICAgICAvLyBuZXdEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICBuZXdMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgbmV3TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBjbGVhckJvZHkoKTsgLy8gY2xlYXIgb2xkIHRhc2tzIFxuICAgICAgICAgICAgY2xlYXJUYXNrRXhwYW5kKCk7IC8vIGNsZWFyIHRhc2sgZXhwYW5kIGZpZWxkIGlmIGV4aXN0cyAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza0J0bigpOyAvLyBhZGQgTmV3IFRhc2sgQnV0dG9uXG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheShwcm9qZWN0KTtcblxuICAgICAgICAgICAgLy9hZGQgZGVsZXRlIHByb2plY3QgYnV0dG9uIGFzaWduZWQgdG8gY2xpY2tlZCBwcm9qZWN0XG4gICAgICAgICAgIC8vIHJlbW92ZVByb2plY3REZWxldGVCdG4oKTtcbiAgICAgICAgICAgIC8vYWRkRGVsZXRlUHJvamVjdEJ0bihwcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgbmV3RGl2LmFwcGVuZChuZXdMaW5rKVxuXG4gICAgICAgIC8vIGRlbGV0ZSBidXR0b25cbiAgICAgICAgY29uc3QgbmV3RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld0RlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIG5ld0RlbGV0ZS5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIik7XG4gICAgICAgIG5ld0RlbGV0ZS50ZXh0Q29udGVudCA9IFwiZm9sZGVyX2RlbGV0ZVwiO1xuICAgICAgICBuZXdEZWxldGUub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0aW5nIFwiICsgcHJvamVjdCk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vYm9keVxuICAgICAgICAgICAgY2xlYXJCb2R5KCk7XG4gICAgICAgICAgICBjbGVhclRhc2tFeHBhbmQoKTtcbiAgICAgICAgICAgIHRhc2tCdG4oKTtcbiAgICAgICAgICAgIHByb2plY3REaXNwbGF5KFwiYWxsXCIpO1xuXG4gICAgICAgICAgICAvL3NpZGViYXJcbiAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgIGdldFByb2plY3RMaXN0KCk7XG5cblxuICAgICAgICB9XG4gICAgICAgIG5ld0Rpdi5hcHBlbmQobmV3RGVsZXRlKVxuXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChuZXdEaXYpO1xuICAgIH0pXG5cbiAgICAvLyBhZGQgQUxMIHRvIHRoZSB0b3AuXG4gICAgY29uc3QgYWxsUHJvamVjdE5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFsbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYWxsUHJvamVjdE5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNvbnRhaW5lclwiKTtcbiAgICBhbGxQcm9qZWN0LnRleHRDb250ZW50ID0gXCJhbGxcIjtcbiAgICBhbGxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGNsZWFyQm9keSgpO1xuICAgICAgICBjbGVhclRhc2tFeHBhbmQoKTtcbiAgICAgICAgdGFza0J0bigpO1xuICAgICAgICBwcm9qZWN0RGlzcGxheShcImFsbFwiKTtcblxuICAgIH0pO1xuICAgIGFsbFByb2plY3ROZXdEaXYuYXBwZW5kKGFsbFByb2plY3QpXG4gICAgcHJvamVjdExpc3QucHJlcGVuZChhbGxQcm9qZWN0TmV3RGl2KTtcblxufVxuXG5leHBvcnQgeyBnZXRQcm9qZWN0TGlzdCB9ICIsIi8vIGNoZWNrcyBmb3IgZHVwbGljYXRlIHByb2plY3QgbmFtZXMuXG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vdGFza0FycmF5XCI7XG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lVGVzdChwcm9qZWN0SW5wdXRWYWx1ZSl7XG4gICAgLy8gY29uc3QgcHJvamVjdElucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtaW5wdXQnKS52YWx1ZTtcbiAgICAvL3Byb2plY3RJbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goIHByb2plY3RPYmogPT4ge1xuICAgICAgICAvL3Byb2plY3ROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIFxuICAgICAgICBpZihwcm9qZWN0T2JqWydwcm9qZWN0J10gPT0gcHJvamVjdElucHV0VmFsdWUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYER1cGxpY2F0ZSEgRXhpc3Rpbmc6ICR7cHJvamVjdE9ialsncHJvamVjdCddfSB2cyBZb3VyczogJHtwcm9qZWN0SW5wdXRWYWx1ZX1gKVxuICAgICAgICAgICAgcmV0dXJuIFwiYmFkXCI7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIGVsc2UgaWYocHJvamVjdE9ialsncHJvamVjdCddICE9IHByb2plY3RJbnB1dFZhbHVlKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgVGVzdGluZy4gTm8gZHVwbGljYXRlcy4gRXhpc3Rpbmc6ICR7cHJvamVjdE9ialsncHJvamVjdCddfSB2cyBZb3VyczogJHtwcm9qZWN0SW5wdXRWYWx1ZX1gKVxuICAgICAgICAvLyAgICAgcmV0dXJuIFwiZ29vZFwiO1xuICAgICAgICAvLyB9XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IHsgcHJvamVjdE5hbWVUZXN0IH1cbiIsIi8vIG5lc3RlZCBvYmplY3RzIGh0dHBzOi8vd3d3LmNvZGVjYWRlbXkuY29tL2NvdXJzZXMvaW50cm9kdWN0aW9uLXRvLWphdmFzY3JpcHQvbGVzc29ucy9vYmplY3RzL2V4ZXJjaXNlcy9uZXN0ZWQtb2JqZWN0c1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxNjg2MDEvY2hhbmdlLXRoZS12YWx1ZS1vZi1pbXBvcnRlZC12YXJpYWJsZS1pbi1lczZcblxuXG5sZXQgcHJvamVjdHNBcnJheSA9IFtcbiAgICB7XG4gICAgICAgIHByb2plY3Q6IFwibWFpblwiLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgcHJvamVjdDogXCJtYWluXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJDYXIgUGF5bWVudFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiJDUwMCBjYXIgaW5zdGFsbG1lbnQgcGF5bWVudFwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDIxLTA0LTAxXCIsXG4gICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIG5vdGVzOiBcImkgbG92ZSBiaWcgY2FycyBhbmQgaSBjYW5ub3QgbGllXCIsIFxuICAgICAgICAgICAgaWRlbnRpdHk6IFwiMDgwODNEU0ZBXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9qZWN0OiBcIm1haW5cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkdhcyBCaWxsc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGF5IEF1Z3VzdCBnYXMgYmlsbHMgZm9yIExBIEhvbWVcIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAyMi0wMS0yMlwiLFxuICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgbm90ZXM6IFwid2hlbiBpIGVhdCB0b28gbWFueSBiZWFucyBJIGhhdmUgYSBsYXJnZSBnYXMgYmlsbFwiLFxuICAgICAgICAgICAgaWRlbnRpdHk6IFwiMDAwMDA0MDAwXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHByb2plY3Q6IFwiZ3ltXCIsXG4gICAgICAgIHRhc2tzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9qZWN0OiBcImd5bVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiQ2hlc3RcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJlbmNoIHByZXNzXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMjItMDEtMDFcIixcbiAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgICAgIGNvbXBsZXRlZDogXCJ0cnVlXCIsXG4gICAgICAgICAgICBub3RlczogXCJjaGVzdCBkYXlzIGFyZSB0aGUgYmVzdCBkYXlzXCIsXG4gICAgICAgICAgICBpZGVudGl0eTogXCIzMjQyQVNERlNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb2plY3Q6IFwiZ3ltXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMZWdzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTcXVhdHNcIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAyMi0wMi0xMVwiLFxuICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIG5vdGVzOiBcImFzcyB0byBncmFzc1wiLFxuICAgICAgICAgICAgaWRlbnRpdHk6IFwiMDMwMzA0MDQwM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5mdW5jdGlvbiBzZXRQcm9qZWN0c0FycmF5KGZyb21Mb2NhbFN0b3JhZ2Upe1xuICAgIHByb2plY3RzQXJyYXkgPSBmcm9tTG9jYWxTdG9yYWdlO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0c0FycmF5LCBzZXRQcm9qZWN0c0FycmF5IH0iLCIvLyBtb2R1bGUgdG8gZXhwYW5kIGFuZCBlZGl0IHRhc2tcbmltcG9ydCB7IHNlbGVjdG9yQnV0dG9uVGFza0V4cGFuZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL21vZGFsUHJvamVjdFNlbGVjdG9yXCI7XG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxTdG9yYWdlVXBkYXRlXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vdGFza0FycmF5XCI7XG5pbXBvcnQgeyB0YXNrSW5kZXhTZWFyY2ggfSBmcm9tIFwiLi90YXNrSW5kZXhTZWFyY2hcIjtcbmltcG9ydCB7IGNsZWFyVUkgfSBmcm9tIFwiLi4vdXRpbHMvY2xlYXJVSVwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9wcm9qZWN0RGlzcGxheVwiO1xuaW1wb3J0IHsgVGFza0l0ZW0gfSBmcm9tIFwiLi90YXNrU3VibWl0XCI7XG5cbi8qXG5wcm9qZWN0c0FycmF5ID0gW1xuICAgIHtwcm9qZWN0OiBuYW1lLCB0YXNrczogW3t9LCB7fV19XG4gICAge3Byb2plY3Q6IG5hbWUsIHRhc2tzOiBbe30sIHt9XX1cbl07XG4qL1xuXG5mdW5jdGlvbiBleHBhbmRUYXNrKGUpe1xuICAgIGxldCB0YXNrUGFyZW50Tm9kZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgbGV0IHRhc2tJRCA9IHRhc2tQYXJlbnROb2RlLmRhdGFzZXQuaWRlbnRpdHk7XG4gICAgY29uc29sZS5sb2coXCJleHBhbmRUYXNrIHRhc2tJRDogXCIgKyB0YXNrSUQpO1xuICAgIFxuICAgIC8vIHRhcmdldGluZyB0aGUgdGFzayBieSBpbmRleFxuICAgIGxldCBkZWxldGVBcnJheSA9IHRhc2tJbmRleFNlYXJjaCh0YXNrSUQpO1xuICAgIGxldCBvdXR0ZXIgPSBkZWxldGVBcnJheVswXTtcbiAgICBsZXQgaW5uZXIgPSBkZWxldGVBcnJheVsxXTtcbiAgICBjb25zb2xlLmxvZyhcImV4cGFuZFRhc2sgb3V0dGVyOiBcIiArIG91dHRlcik7XG4gICAgY29uc29sZS5sb2coXCJleHBhbmRUYXNrIGlubmVyOiBcIiArIGlubmVyKTtcblxuICAgIGxldCB0YXNrT2JqZWN0ID0gcHJvamVjdHNBcnJheVtvdXR0ZXJdLnRhc2tzW2lubmVyXTtcbiAgICBjb25zb2xlLmxvZyh0YXNrT2JqZWN0KTtcbiAgICBsZXQgdGFza1Byb2plY3RFZGl0ID0gdGFza09iamVjdC5wcm9qZWN0OyAvLyB1c2UgdGhpcyBvbmx5IHRvIHdoZW4gZWRpdGluZyB0YXNrcy4gaW5pdGlhbCB2YWx1ZSBjb21lcyBmcm9tIG1vZHVsZSwgbm90IHRoaXMuXG4gICAgbGV0IHRhc2tUaXRsZSA9IHByb2plY3RzQXJyYXlbb3V0dGVyXS50YXNrc1tpbm5lcl0udGl0bGU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IHByb2plY3RzQXJyYXlbb3V0dGVyXS50YXNrc1tpbm5lcl0uZGVzY3JpcHRpb247XG4gICAgbGV0IHRhc2tEYXRlID0gcHJvamVjdHNBcnJheVtvdXR0ZXJdLnRhc2tzW2lubmVyXS5kYXRlO1xuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcm9qZWN0c0FycmF5W291dHRlcl0udGFza3NbaW5uZXJdLnByaW9yaXR5O1xuICAgIGxldCB0YXNrQ29tcGxldGVkID0gcHJvamVjdHNBcnJheVtvdXR0ZXJdLnRhc2tzW2lubmVyXS5jb21wbGV0ZWQ7XG4gICAgbGV0IHRhc2tOb3RlcyA9IHByb2plY3RzQXJyYXlbb3V0dGVyXS50YXNrc1tpbm5lcl0ubm90ZXM7XG5cblxuICAgIC8vIGUuY3VycmVudFRhcmdldC5zdHlsZS5vcGFjaXR5ID0gXCIwLjJcIjtcbiAgICBjb25zdCBleHBhbmRTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXhwYW5kU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWV4cGFuZCcpO1xuICAgIFxuICAgIGxldCBteUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdGT1JNJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBhcHBlbmQgdGhlIDxzZWxlY3Q+IGhlcmUgbm93LCBhbmQgbm90IGF0IHRoZSBlbmQuXG4gICAgICAgIG15Rm9ybS5hcHBlbmQocHJvamVjdCk7XG4gICAgICAgIGV4cGFuZFNlY3Rpb25Db250YWluZXIuYXBwZW5kKG15Rm9ybSk7XG5cbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdC1wcm9qZWN0MicpO1xuICAgICAgICBcbiAgICAgICAgLy8gbWFrZSBhIG5vdGUsIHdoeSBkb2Vzbid0IHRoaXMgd29yayBiZWxvdy4gSGFkIHRvIGludm9rZSBTZWxlY3RvckJ1dHRvblRhc2tFeHBhbmQgaW4gdGhlIFByb2plY3REaXNwbGF5IG1vZHVsZSBhZnRlciBleHBhbmQoZSlcbiAgICAgICAgLy8gbWF5YmUgdGhlIGNhbGwgc3RhY2sgaGFkIHRvIGNvbXBsZXRlbHkgZmluaXNoIHcvIGV4cGFuZCgpIGJlZm9yZSBiZWluZyBhYmxlIHRvIHNlbGVjdCB0aGUgPHNlbGVjdD4gXG5cbiAgICAgICAgLy9zZWxlY3RvckJ1dHRvblRhc2tFeHBhbmQoKTtcbiAgICAgICAgLy8gY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdDInKTtcbiAgICAgICAgLy8gbGV0IG5ld09wdGlvbiA9IG5ldyBPcHRpb24oJ09wdGlvbiBUZXh0JywnT3B0aW9uIFZhbHVlJyk7XG4gICAgICAgIC8vIHRlbXAuYWRkKG5ld09wdGlvbix1bmRlZmluZWQpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbnkgZXhpc2l0aW5nXG4gICAgICAgIC8vIGNvbnN0IGxlbmd0aCA9IHRlbXAubGVuZ3RoO1xuICAgICAgICAvLyBmb3IobGV0IGkgPSBsZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIC8vICAgICB0ZW1wW2ldID0gbnVsbDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGxldCB0ZW1wQXJyYXkgPSBbXTtcbiAgICAgICAgLy8gcHJvamVjdHNBcnJheS5mb3JFYWNoKCBwcm9qZWN0c0FycmF5T2JqID0+IHtcbiAgICAgICAgLy8gICAgIGlmKCF0ZW1wQXJyYXkuaW5jbHVkZXMocHJvamVjdHNBcnJheU9ialsncHJvamVjdCddKSl7XG4gICAgICAgIC8vICAgICAgICAgdGVtcC5hZGQoIG5ldyBPcHRpb24ocHJvamVjdHNBcnJheU9ialsncHJvamVjdCddKSApXG4gICAgICAgIC8vICAgICAgICAgLy8gdGVtcEFycmF5LnB1c2gocHJvamVjdHNBcnJheU9ialsncHJvamVjdCddKVxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3VycmVudCB0ZW1wQXJyYXlcIiArIHRlbXBBcnJheSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIHNlY3Rpb24gdG8gZmluZCBhbmQgcHVsbCB2YWx1ZXMgZnJvbSB0aGUgZXZlbnQudGFyZ2V0IGludG8gdGhlIGZvcm0gZmllbGRzIGJlbG93XG4gICAgICAgIC8vIHRhc2tJbmRleFNlYXJjaC5qcyB0byBmaW5kIHRoZSBpbmRleFxuXG5cbiAgICAgICAgXG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdGFza1RpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgbXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbXlEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgICBteURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gICAgICAgIG15RGF0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrUHJpb3JpdHkpO1xuICAgIFxuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb21wbGV0ZWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBjb21wbGV0ZWQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbXBsZXRpb25cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tDb21wbGV0ZWQpO1xuICAgICAgICBpZih0YXNrQ29tcGxldGVkID09IGZhbHNlIHx8IHRhc2tDb21wbGV0ZWQgPT0gXCJub1wiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFzayBjb21wbGV0ZWQgPT0gZmFsc2VcIik7XG4gICAgICAgICAgICBjb21wbGV0ZWQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcGxldGVkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU3NjE3NTMyL3doeS1lbGVtZW50LXNldGF0dHJpYnV0ZWNoZWNrZWQtdHJ1ZS1kb2VzbnQtd29ya1xuICAgICAgICAvL2NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsICk7XG5cbiAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgbm90ZXMuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVzXCIpXG4gICAgICAgIG5vdGVzLnZhbHVlID0gdGFza05vdGVzO1xuXG5cbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QyJyk7XG4gICAgICAgICAgICAvL1wicHJvamVjdFwiID0gbmV3UHJvamVjdC52YWx1ZTsgd29yayBvbiB0aGlzIGxhdGVyLiBzZWUgYmVsb3cuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRpdGxlLnZhbHVlKTtcblxuICAgICAgICAgICAgLy8geW91ciBqdXN0IHJlYXNzaWduaW5nIHZhcmlhYmxlcy4gdXNlIHRoZSBhYm92ZSB0YXNrT2JqZWN0XG4gICAgICAgICAgICBpZih0YXNrT2JqZWN0LnByb2plY3QgPT0gcHJvamVjdC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheVtvdXR0ZXJdLnRhc2tzW2lubmVyXS50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRhc2tPYmplY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICB0YXNrT2JqZWN0LmRhdGUgPSBteURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgdGFza09iamVjdC5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgICAgIHRhc2tPYmplY3QuY29tcGxldGVkID0gY29tcGxldGVkLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgdGFza09iamVjdC5ub3RlcyA9IG5vdGVzLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlc3NlbnRpYWxseSBtYWtpbmcgYSBuZXcgVGFzayBzaW5jZSB3ZSBhcmUgbW92aW5nIHRvIGEgZGlmZmVyZW50IHByb2plY3QgbmFtZTpcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IHByb2plY3QudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGUgPSBteURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOb3RlcyA9IG5vdGVzLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lkZW50aXR5ID0gdGFza09iamVjdC5pZGVudGl0eTtcblxuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2tJdGVtIChuZXdQcm9qZWN0TmFtZSwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEYXRlLCBuZXdQcmlvcml0eSwgbmV3Q29tcGxldGVkLCBuZXdOb3RlcywgbmV3SWRlbnRpdHkpXG4gICAgICAgICAgICAgICAgLy8gZmluZCBleGlzdGluZyBQcm9qZWN0IG5hbWUsIGFuZCBwdXNoIG5ldyBUYXNrIGludG8gaXQuXG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3RPYmogPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9qZWN0T2JqWydwcm9qZWN0J10gPT09IG5ld1Byb2plY3ROYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RPYmpbJ3Rhc2tzJ10ucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRpbmcgdGhlIG9sZCBUYXNrXG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheVtvdXR0ZXJdLnRhc2tzLnNwbGljZShpbm5lciwgMSk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIGNsZWFyVUkoKTtcbiAgICAgICAgICAgIGdldFByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheShcImFsbFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICBcbiAgICAvLyBteUZvcm0uYXBwZW5kKHByb2plY3QpO1xuICAgIG15Rm9ybS5hcHBlbmQodGl0bGUpO1xuICAgIG15Rm9ybS5hcHBlbmQoZGVzY3JpcHRpb24pO1xuICAgIG15Rm9ybS5hcHBlbmQobXlEYXRlKTtcbiAgICBteUZvcm0uYXBwZW5kKHByaW9yaXR5KTtcbiAgICBteUZvcm0uYXBwZW5kKGNvbXBsZXRlZCk7XG4gICAgbXlGb3JtLmFwcGVuZChub3Rlcyk7XG4gICAgbXlGb3JtLmFwcGVuZChzdWJtaXQpO1xuICAgIFxuXG4gICAgLy8gZXhwYW5kU2VjdGlvbi5hcHBlbmQobXlGb3JtKTtcbiAgICBcbiAgICAvLyBlLmN1cnJlbnRUYXJnZXQuYXBwZW5kKGV4cGFuZFNlY3Rpb24pO1xuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUvaW5zZXJ0QmVmb3JlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50L2N1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgIC8vIGUuY3VycmVudFRhcmdldCBpZGVudGlmaWVzIHRoZSBlbGVtZW50IG9uIHdoaWNoIHRoZSBldmVudCBoYW5kbGVyIHdhcyBhdHRhY2hlZC5cbiAgICAgICAgICAgIC8vIGUudGFyZ2V0IGlkZW50aWZpZXMgdGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIGV2ZW50IG9jY3VyZWQuICAgXG4gICAgXG4gICAgICAgICAgICAvLy8vLy8vLy8gYmVsb3cgaXMgZm9yIGNsaWNraW5nIG9uIHRoZSBlbnRpcmUgVGFzayByb3dcbiAgICAgICAgICAgIC8vIGxldCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ib2R5Jyk7XG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudFRhc2sgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhcHBlbmQsIHVzZSBpbnNlcnRCZWZvcmU6XG4gICAgICAgICAgICAvLyBwYXJlbnREaXYuaW5zZXJ0QmVmb3JlKGV4cGFuZFNlY3Rpb25Db250YWluZXIsIGN1cnJlbnRUYXNrLm5leHRTaWJsaW5nKTtcbiAgICBcbiAgICAvLyBjdXJyZW50VGFzay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgIC8vICAgICBleHBhbmRUYXNrKGUpO1xuICAgIC8vIH0pO1xuICAgIFxuICAgIC8vLy8vLy8vLy8vIGJlbG93IGlzIGZvciBjbGlja2luZyBvbiB0aGUgZWRpdCBidXR0b25cbiAgICAgICAgLy8gY2FuJ3QgdXNlIHBhcmVudEVsZW1lbnQuIFVzZXMgY2xvc2VzdCwgZG9tIHdpbGwgdHJhdmVsIHVwIHRoZSBjaGFpbiB1bnRpbCBpdCBoaXRzIHRhcmdldC5cbiAgICBsZXQgcGFyZW50RGl2ID0gZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgcGFyZW50RGl2LmFwcGVuZChleHBhbmRTZWN0aW9uQ29udGFpbmVyKTsgICAgXG5cblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBsZXQgZXhwYW5kZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1leHBhbmQnKTtcbiAgICAgICAgZXhwYW5kZWQucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBleHBhbmRTZWN0aW9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdG4pICAgIFxufVxuXG5leHBvcnQgeyBleHBhbmRUYXNrIH0iLCIvLyBmaW5kIHRoZSB0YXNrIGJ5IHVuaXF1ZSBpZCBvZmYgY2xpY2sgZnJvbSBwcm9qZWN0RGlzcGxheSB0byBwdXQgaW50byB0YXNrRXhwYW5kRWRpdCBmaWVsZHMuXG4vLyByZXR1cm5zIHRoZSBhcnJheSBpbmRleCB2YWx1ZVxuLy8gdXBkYXRlLCB3ZSB3aWxsIGhhdmUgYSBkZWxldGUgYnV0dG9uIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSB0YXNrIGFuZCBub3Qgb24gY2xpY2suXG5cbmltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIjtcblxuLypcbnByb2plY3RzQXJyYXkgPSBbXG4gICAge3Byb2plY3Q6IG5hbWUsIHRhc2tzOiBbe30sIHt9XX1cbiAgICB7cHJvamVjdDogbmFtZSwgdGFza3M6IFt7fSwge31dfVxuXTtcbiovXG5cbmZ1bmN0aW9uIHRhc2tJbmRleFNlYXJjaCh0YXNrSUQpe1xuICAgIC8vdGFza0lEID0gXCIwNmI4OGI0Ny0zMWJhLTRkYzEtYWMyMy1lZmM3MzZkNmYzOGJcIlxuICAgIGNvbnNvbGUubG9nKFwiVGhlIGRhdGEgSUQgaXM6IFwiICsgdGFza0lEKTtcbiAgICAvLyBzaG91bGQgcmV0dXJuICAgWzBdWzFdICBldGMuLiBzbyB0aGF0IHlvdSBjYW4gZ28gcHJvamVjdHNBcnJheS5zcGxpY2UodmFyaWFibGUsIDEpXG4gICAgLy8gb24gY2xpY2sgb2YgdGhlIGVkaXQgYnV0dG9uLCB0aGUgZSBnZXRzIHBhc3NlZCB0byB0YXNrSW5kZXhTZWFyY2hcblxuICAgIGxldCBvdXR0ZXIgPSBcIlwiO1xuICAgIGxldCBpbm5lciA9IFwiXCI7XG4gICAgXG4gICAgb3V0dGVyID0gcHJvamVjdHNBcnJheS5maW5kSW5kZXgocHJvamVjdHNBcnJheU9iaiA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c0FycmF5T2JqLnRhc2tzLnNvbWUodGFza09iaiA9PntcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGFza09iai5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGFza09iai5pZGVudGl0eSArIHRhc2tJRCk7XG4gICAgICAgICAgICByZXR1cm4gdGFza09iai5pZGVudGl0eSA9PSB0YXNrSURcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0c0FycmF5T2JqID0+IHtcbiAgICAgICAgbGV0IHN1YkFycmF5ID0gcHJvamVjdHNBcnJheU9iai50YXNrcztcbiAgICAgICAgc3ViQXJyYXkuZm9yRWFjaCh0YXNrc09iaiA9PiB7XG4gICAgICAgICAgICBpZih0YXNrc09iai5pZGVudGl0eSA9PSB0YXNrSUQpe1xuICAgICAgICAgICAgICAgIGlubmVyID0gc3ViQXJyYXkuZmluZEluZGV4KHRhc2tzT2JqID0+IHRhc2tzT2JqLmlkZW50aXR5ID09IHRhc2tJRClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwib3V0dGVyOiBcIiArIG91dHRlcilcbiAgICBjb25zb2xlLmxvZyhcImlubmVyOiBcIiArIGlubmVyKVxuXG4gICAgcmV0dXJuIFtvdXR0ZXIsIGlubmVyXSAvL3JldHVybmluZyBhcyBhbiBhcnJheSBcblxuICAgIC8vIGRlbGV0ZSBmdW5jdGlvbiB3aWxsIHRha2UgdGFrZSBiZWxvdyBpbmRleCBhbmQgaW5zZXJ0IGludG8gcHJvamVjdHNBcnJheS5zbGljZSh0YXNrSW5kZXhTZWFyY2godGFza0lEKSwgMSkgU28ganVzdCBleHBvcnQgaW5kZXggb25seSwgd2l0aCBubyBhcnJheSBcInByb2plY3RzQXJyYXlcIlxuICAgIC8vIHJldHVybiBvdXR0ZXIudGFza3MuXG4gICAgLy8gaSB0aGluayB3ZSBuZWVkIHRvIGdldCB0byBwcm9qZWN0c0FycmF5W291dGVyXS50YXNrcy5zcGxpY2UoaW5uZXIsIDEpXG59XG5cblxuZXhwb3J0IHsgdGFza0luZGV4U2VhcmNoIH0iLCIvLyBvbiBzdWJtaXQsIGNyZWF0ZXMgb2JqZWN0LCBwdXNoZXMgdG8gYXJyYXksIHRoZW4gcHVzaGVzIGFycmF5IHRvIGxvY2FsIHN0b3JhZ2UuXG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSAnLi90YXNrQXJyYXknO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tICcuL3Byb2plY3REaXNwbGF5JztcbmltcG9ydCB7IGNsZWFyQm9keSB9IGZyb20gJy4uL3V0aWxzL2NsZWFyQm9keSc7XG5pbXBvcnQgeyB0YXNrQnRuLCBjbG9zZVRhc2tCdG4gfSBmcm9tICcuLi9jb21wb25lbnRzL3VpL25ld1Rhc2tCdXR0b24nO1xuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vdXRpbHMvbG9jYWxTdG9yYWdlVXBkYXRlJztcbmltcG9ydCB7IGdldFByb2plY3RMaXN0IH0gZnJvbSAnLi4vbW9kdWxlcy9wcm9qZWN0TGlzdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbnV1aWR2NCgpO1xuXG5sZXQgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tc3VibWl0LWJ1dHRvbicpO1xuXG4vLyB0byBkbyBpdGVtcyBnbyBpbnRvIFByb2plY3QgY29udGFpbmVycyBpLmUuIEFycmF5c1xuY2xhc3MgVGFza0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCwgbm90ZXMsIGlkZW50aXR5KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3QsXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXMsXG4gICAgICAgIHRoaXMuaWRlbnRpdHkgPSB1dWlkdjQoKTtcbiAgICB9XG59XG5cbi8vIG9uIHN1Ym1pdCwgdGFrZXMgZm9ybSB2YWx1ZXMsIHB1c2hlcyB0byBhcnJheSBhbmQgdXBkYXRlcyBsb2NhbHN0b3JhZ2VcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpLnZhbHVlO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tY2hlY2tib3gnKS5jaGVja2VkO1xuICAgIGNvbnN0IG5vdGVzID0gXCJcIjtcbiAgICBjb25zdCBpZGVudGl0eSA9IHV1aWR2NCgpO1xuXG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFza0l0ZW0gKHByb2plY3ROYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQsIG5vdGVzLCBpZGVudGl0eSlcbiAgICBcbiAgICAvLyBzaW5jZSB3ZSBtYWRlIFByb2plY3QgTmFtZSBhbiBleGlzdGluZyByZXF1aXJlbWVudCB2aWEgU2VsZWN0aW9uIElucHV0LCB3ZSBtdXN0IHNlYXJjaCB0aGUgVGFzayBBcnJheSBmb3IgaXQuXG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3RPYmogPT4ge1xuICAgICAgICBpZihwcm9qZWN0T2JqWydwcm9qZWN0J10gPT09IHByb2plY3ROYW1lKXtcbiAgICAgICAgICAgIHByb2plY3RPYmpbJ3Rhc2tzJ10ucHVzaChuZXdUYXNrKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2xvc2VUYXNrQnRuKCk7XG5cbiAgICBjbGVhckJvZHkoKTsgLy8gY2xlYXJzIG1haW4gYm9keVxuICAgIHByb2plY3REaXNwbGF5KHByb2plY3ROYW1lKTsgLy8gZGlzcGxheXMgdGFza3NcbiAgICBcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTsgLy8gdXBkYXRlcyBsb2NhbCBzdG9yYWdlXG5cbn0pO1xuXG5leHBvcnQgeyBzdWJtaXRCdG4sIFRhc2tJdGVtIH0iLCIvLyBjbGVhcnMgcHJvamVjdCB0aXRsZSBoZWFkZXIsIGFuZCwgdGFza3MuIGxlYXZlcyB0YXNrIGJ1dHRvbiBhbG9uZS5cblxuZnVuY3Rpb24gY2xlYXJCb2R5KCl7XG4gICAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xuICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgXG4gICAgcHJvamVjdEhlYWRlci5yZW1vdmUoKTtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2tzID0+IHtcbiAgICAgICAgdGFza3MucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgY2xlYXJCb2R5IH07IiwiLy8gcmVtb3ZlcyB0aGUgZGVsZXRlIHByb2plY3QgYnV0dG9uXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RGVsZXRlQnRuICgpIHtcbiAgICBjb25zdCBwcm9qZWN0UmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcmVtb3ZlLWJ1dHRvbicpO1xuICAgIHByb2plY3RSZW1vdmVCdG4ucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IHJlbW92ZVByb2plY3REZWxldGVCdG4gfSIsIi8vIGNsZWFyIHByb2plY3QgbGlzdCBpbiBvcmRlciB0byByZW1vdmUgZHVwbGljYXRlc1xuXG5mdW5jdGlvbiBjbGVhclByb2plY3RzKCl7XG4gICAgY29uc3Qgc2lkZWJhclByb2plY3ROYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3QgZGl2Jyk7XG4gICAgc2lkZWJhclByb2plY3ROYW1lcy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgZGl2LnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7IGNsZWFyUHJvamVjdHMgfSIsIi8vIHJlbW92ZSB0YXNrIGJ1dHRvbiBpbiBvcmRlciBmb3Igc2VsZWN0IGJ1dHRvbiB3aXRoIG5ldyBmaWVsZHMgdG8gYmUgaW52b2tlZCBpbiBjYWxsIHN0YWNrXG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tCdG4gKCl7XG4gICAgbGV0IHRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTsgIFxuICAgIHRhc2tCdG4ucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IHJlbW92ZVRhc2tCdG4gfSIsIi8vIHJlbW92ZSBhbnkgVGFzayBFeHBhbmQgZmllbGRcbmZ1bmN0aW9uIGNsZWFyVGFza0V4cGFuZCgpe1xuICAgIGxldCBleHBhbmRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWV4cGFuZCcpO1xuICAgIGlmKGV4cGFuZGVkKXsgXG4gICAgICAgIGV4cGFuZGVkLnJlbW92ZSgpOyBcbiAgICB9O1xufVxuXG5leHBvcnQgeyBjbGVhclRhc2tFeHBhbmQgfSIsImltcG9ydCB7IGNsZWFyQm9keSB9IGZyb20gXCIuL2NsZWFyQm9keVwiO1xuaW1wb3J0IHsgY2xlYXJQcm9qZWN0cyB9IGZyb20gXCIuL2NsZWFyUHJvamVjdExpc3RcIjtcbmltcG9ydCB7IHJlbW92ZVRhc2tCdG4gfSBmcm9tIFwiLi9jbGVhclRhc2tCdXR0b25cIjtcbmltcG9ydCB7IHJlbW92ZVByb2plY3REZWxldGVCdG4gfSBmcm9tIFwiLi9jbGVhckRlbGV0ZVByb2plY3RCdXR0b25cIjtcblxuZnVuY3Rpb24gY2xlYXJVSSgpe1xuICAgIGNsZWFyQm9keSgpOyAvL3JlbW92ZXMgcHJvamVjdCBoZWFkZXIgYW5kIHRhc2tzXG4gICAgY2xlYXJQcm9qZWN0cygpOyAvL3JlbW92ZXMgc2lkZWJhciBwcm9qZWN0c1xuICAgIC8vcmVtb3ZlVGFza0J0bigpOyAvL3JlbW92ZXMgTmV3IFRhc2sgYnV0dG9uXG4gICAgLy9yZW1vdmVQcm9qZWN0RGVsZXRlQnRuKCk7IC8vcmVtb3ZlcyBEZWxldGUgUHJvamVjdCBidXR0b25cbn1cblxuZXhwb3J0IHsgY2xlYXJVSSB9XG4iLCIvLyB1c2VkIGF0IHN0YXJ0dXAuIGNoZWNrIGlmIGxvY2Fsc3RvcmFnZSBpcyBlbXB0eSwgaWYgZW1wdHkgcHVzaCBkZW1vIGFycmF5IHRvIGl0LlxuLy8gaWYgbm90IGVtcHR5LCB0aGVuIHB1bGwgbG9jYWxTdG9yYWdlIGluZm9cblxuaW1wb3J0IHsgcHJvamVjdHNBcnJheSwgc2V0UHJvamVjdHNBcnJheSB9IGZyb20gXCIuLi9tb2R1bGVzL3Rhc2tBcnJheVwiXG5cbmZ1bmN0aW9uIGxvY2FsU3RvcmFnZUNoZWNrKCl7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0QXJyYXlTdG9yYWdlXCIpID09PSBudWxsKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RBcnJheVN0b3JhZ2VcIikpO1xuICAgICAgICBzZXRQcm9qZWN0c0FycmF5KHRlbXApO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGxvY2FsU3RvcmFnZUNoZWNrIH0iLCIvLyBwdXNoZXMgY3VycmVudCBhcnJheSBkYXRhIHRvIGxvY2FsIHN0b3JhZ2VcbmltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi4vbW9kdWxlcy90YXNrQXJyYXlcIjtcblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9O1xuXG4iLCJpbXBvcnQgeyBwcm9qZWN0RGlzcGxheSB9IGZyb20gXCIuLi9tb2R1bGVzL3Byb2plY3REaXNwbGF5XCI7XG5pbXBvcnQgeyB0YXNrQnRuIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvbmV3VGFza0J1dHRvblwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdExpc3QgfSBmcm9tIFwiLi4vbW9kdWxlcy9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgcHJvamVjdE5ld0J0biB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL25ld1Byb2plY3RCdXR0b25cIjtcbmltcG9ydCB7IGFkZERlbGV0ZVByb2plY3RCdG4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9hZGREZWxldGVQcm9qZWN0QnV0dG9uXCI7XG5cbmZ1bmN0aW9uIHJlZnJlc2gocHJvamVjdFRpdGxlKXtcbiAgICAvL21haW4gYm9keVxuICAgIHByb2plY3REaXNwbGF5KHByb2plY3RUaXRsZSk7IC8vIGhhcyBwcm9qZWN0SGVhZGVyIGluIGl0XG4gICAgdGFza0J0bigpO1xuICAgIGFkZERlbGV0ZVByb2plY3RCdG4ocHJvamVjdFRpdGxlKTtcbiAgICBcbiAgICAvL3NpZGViYXJcbiAgICBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3ROZXdCdG4oKTtcbiAgICBcbn1cblxuZXhwb3J0IHsgcmVmcmVzaCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5pbXBvcnQgeyB0YXNrQnRuIH0gZnJvbSAnLi9jb21wb25lbnRzL3VpL25ld1Rhc2tCdXR0b24nO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdERpc3BsYXknO1xuaW1wb3J0IHsgc2VsZWN0b3JCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvdWkvbW9kYWxQcm9qZWN0U2VsZWN0b3InO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlQ2hlY2sgfSBmcm9tICcuL3V0aWxzL2xvY2FsU3RvcmFnZUNoZWNrJztcbmltcG9ydCB7IGdldFByb2plY3RMaXN0IH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RMaXN0JztcbmltcG9ydCB7IHByb2plY3ROZXdCdG4gfSBmcm9tICcuL2NvbXBvbmVudHMvdWkvbmV3UHJvamVjdEJ1dHRvbic7XG5pbXBvcnQgeyBhZGREZWxldGVQcm9qZWN0QnRuIH0gZnJvbSAnLi9jb21wb25lbnRzL3VpL2FkZERlbGV0ZVByb2plY3RCdXR0b24nO1xuXG4vKlxuLVByb2plY3QgaXMgdGhlIGFycmF5IG9mIFRvLURvIGl0ZW1zXG5OZWVkIGEgZGVmYXVsdCBQcm9qZWN0IG9uIGxvYWQgKG1heWJlIEFMTCB0byBkbyBpdGVtcyBjb21iaW5lZClcblxuLVByb2plY3QgdG8tZG8gaXRlbXMgYXJlIG9iamVjdHNcblxuLW9iamVjdHMgYXJlIGVpdGhlciBjbGFzc2VzIG9mIGZmXG5pdGVtcyB3aWxsIGhhdmUgZmllbGRzOiB0aXRsZTogdGV4dCwgZGVzY3JpcHRpb246IHRleHQsIGR1ZURhdGU6ID8/PywgYW5kIHByaW9yaXR5OiBzZWxlY3Qgb3IgcmFkaW9cblxuU28gY3JlYXRlIGEgZm9ybS4gT24gc3VibWl0IC0gYXBwIHRha2VzIGFsbCB2YWx1ZXMgYW5kIG1ha2VzIGEgY2xhc3MgaXRlbS5cblxuZG9tIHRoZW4gdGV4dGNvbnRlbnQgc3R1ZmYgZnJvbSBjbGFzcyBpdGVtIGludG8gZGlzcGxheS5cblxuXG4qL1xuLy8gSG9pc3Rpbmc6IHVubGlrZSBmdW5jdGlvbnMsIGNsYXNzZXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUgdGhleSBhcmUgY2FsbGVkXG5cbi8vIHByb2plY3QgY29udGFpbmVyXG4vLy8gZGVmYXVsdCBvbiBsb2FkIHVwIHNob3cgUHJvamVjdCBjb250YWluaW5nIGFsbCBpdGVtcywgbGFiZWxlZCBBTExcbi8vIHNvIG9uIGxvYWQsIHJlZmVyZW5jZSBhbGwgYXJyYXlzIGludG8gb25lLiBcbi8vLy8gb3IgTWFpbiBBcnJheSBpcyB3aGVyZSBhbGwgdGhlIG90aGVyIGFycmF5cyBnbyBpbnRvLiBTbyBhbiBhcnJheSBvZiBhcnJheXNcbi8vLy8gbGV0J3Mgbm90IGRvIGEgY29sbGVjdGlvbiBvZiBhbGwgaXRlbXMuLiBvciBjYW4gd2UuXG5cbi8vLyBvbiBOZXcgUHJvamVjdCBjbGljaywgY3JlYXRlIGFycmF5XG5cbi8qXG5PbiBzdGFydHVwIC0gaG9tZSBzaG93cyBhbGwgaXRlbXMgZnJvbSBhbGwgcHJvamVjdHNcbkRlZmF1bHQgcHJvamVjdCBpcyBNYWluXG4tLSBtb2R1bGUgLSBsb2FkIE1haW4gcHJvamVjdD8gXG5cblxuXG5Qcm9qZWN0IExpc3RzIG9uIGxlZnQgc2lkZWJhci4gTmV3IHByb2plY3QgYnV0dG9uIGFib3ZlLlxuLS1vbiBjbGljaywgbmV3IHByb2plY3QgZ2V0cyBhZGRlZCwgYW5kIG1haW4gc2NyZWVuIGF1dG9tYXRpY2FsbHkgc3dpdGNoZXMgdG8gdGhhdCBwcm9qZWN0XG5cblxuSXRlbXMvUHJvamVjdCBcbi0tIHdoZW4gY3JlYXRpbmcgaXRlbXMsIFByb2plY3Qgd2lsbCBiZSBTZWxlY3QgbGlzdCAod2l0aCBNYWluIGlmIG5vIGV4dHJhIHByb2plY3RzIG1hZGUpXG4tLUlmIHlvdXIgb24gYSBuZXcgUHJvamVjdCBsaXN0LCB3aGVuIGNyZWF0aW5nIGl0ZW1zLCBjb2RlIHRvIG1ha2UgdGhhdCBjdXJyZW50IHByb2plY3QgdGhlIGRlZmF1bHQgU2VsZWN0XG4tLVByb2plY3QgaXMgbm90IGFuIGFycmF5LCBidXQgYSBLZXkvVmFsdWUgcGFpcj8gVGhpcyB3YXkgeW91IGNhbiBtb3ZlL2ZpbHRlci9kaXNwbGF5QWxsXG4tLS0tLVNvIGluZGl2aWR1YWwgcHJvamVjdHMgaGF2ZSBmaWx0ZXJlZCB0byBkaXNwbGF5IG9ubHkgdGhhdCBrZXkvdmFsdWUgcGFpci4gU28geW91J2xsIG5lZWVkIGEgZm9yIGluIGxvb3BcblxuXG5VSVxuY2hlY2tib3goY29tcGxldGVkKSwgVGl0bGUsIDwtLS0tLT4gIHByb2plY3QsIHByaW9yaXR5LCBEYXRlLCBlZGl0L2RlbGV0ZShleHBhbmQgbW9kYWwpXG4tLS1vbiBleHBuZCwgaW5jbHVkZSBkZXNjcmlwdGlvbiBcblxuSGF2ZSBlbXB0eSBsaW5lIHJlYWR5IHRvIGdvIGZvciBFdmVudCBMaXN0ZW5lci4gT3IgQWRkIHRhc2sgYnV0dG9uXG5cbiovXG5cblxuLy8gbG9hZCBhbGwgcHJvamVjdHMgb24gc3RhcnR1cFxuY29uc3Qgb25Mb2FkID0gKCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2VDaGVjaygpO1xuICAgIHByb2plY3REaXNwbGF5KFwiYWxsXCIpO1xuICAgIHRhc2tCdG4oKTtcbiAgICBnZXRQcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3ROZXdCdG4oKTtcbiAgICAvL2FkZERlbGV0ZVByb2plY3RCdG4oXCJhbGxcIik7XG59KSgpXG5cbi8vIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW1vZGFsJyk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBpZihlLnRhcmdldC5tYXRjaGVzKFwiLmNvbmZpcm0tZGVsZXRlLXByb2plY3RcIikpe1xuLy8gICAgICAgICBwcm9qZWN0TW9kYWwuaGlkZGVuID0gdHJ1ZTtcbi8vICAgICB9XG4vLyB9KTtcbi8vIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHByb2plY3RNb2RhbCkge1xuLy8gICAgICAgcHJvamVjdE1vZGFsLmhpZGRlbiA9IHRydWU7XG4vLyAgICAgfVxuLy8gICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9