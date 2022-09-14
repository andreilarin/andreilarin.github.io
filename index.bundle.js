"use strict";
(self["webpackChunksnake_game"] = self["webpackChunksnake_game"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 97vh;\r\n    font-family: 'Press Start 2P';\r\n    overflow: hidden;\r\n}\r\n\r\ncanvas {\r\n    background-color: #efefef;\r\n    max-width: 90vw;\r\n    max-height: 80vh;\r\n}\r\n\r\n#developers {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.436);\r\n    padding: 5px 15px;\r\n    font-size: 10px;\r\n}\r\n\r\n#developers a {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.345);\r\n    cursor: pointer;\r\n}\r\n\r\n#developers a:hover {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.436);\r\n}\r\n\r\n#title {\r\n    font-size: 20px;\r\n}\r\n\r\n#you-loser {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 30px;\r\n    justify-content: center;\r\n}\r\n\r\n#you-loser.hidden {\r\n    display: none;\r\n}\r\n\r\n#you-loser a {\r\n    margin: 10px;\r\n    text-decoration: none;\r\n    color: rgb(0, 0, 0);\r\n    padding: 20px;\r\n    border: 5px solid;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n#you-loser a:hover {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.436);\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,eAAe;;AAEnB;;AAEA;IACI,qBAAqB;IACrB,2BAA2B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');\r\n\r\nbody {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 97vh;\r\n    font-family: 'Press Start 2P';\r\n    overflow: hidden;\r\n}\r\n\r\ncanvas {\r\n    background-color: #efefef;\r\n    max-width: 90vw;\r\n    max-height: 80vh;\r\n}\r\n\r\n#developers {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    color: rgba(0, 0, 0, 0.436);\r\n    padding: 5px 15px;\r\n    font-size: 10px;\r\n}\r\n\r\n#developers a {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.345);\r\n    cursor: pointer;\r\n}\r\n\r\n#developers a:hover {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.436);\r\n}\r\n\r\n#title {\r\n    font-size: 20px;\r\n}\r\n\r\n#you-loser {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 30px;\r\n    justify-content: center;\r\n}\r\n\r\n#you-loser.hidden {\r\n    display: none;\r\n}\r\n\r\n#you-loser a {\r\n    margin: 10px;\r\n    text-decoration: none;\r\n    color: rgb(0, 0, 0);\r\n    padding: 20px;\r\n    border: 5px solid;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n#you-loser a:hover {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.436);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Apple": () => (/* binding */ Apple)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");





class Apple {
  constructor() {
    this.updatePosition();
  }

  draw(ctx) {
    ctx.fillStyle="green";
    ctx.fillRect(this.x * _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_SIZE, this.y * _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_SIZE, _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_SIZE, _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_SIZE);
  }

  updatePosition() {
    this.x = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomValue)(2, _constants__WEBPACK_IMPORTED_MODULE_0__.GRID_WIDTH - 2);
    this.y = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomValue)(2, _constants__WEBPACK_IMPORTED_MODULE_0__.GRID_HEIGHT - 2);
  }
}

/***/ }),

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cell": () => (/* binding */ Cell)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.fillStyle="red";
    ctx.fillRect(this.x * _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_SIZE, this.y * _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_SIZE, _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_SIZE, _constants__WEBPACK_IMPORTED_MODULE_0__.CELL_SIZE);
  }

  isIntersected(cell) {
    return this.x === cell.x && this.y === cell.y;
  }
}

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CELL_SIZE": () => (/* binding */ CELL_SIZE),
/* harmony export */   "GRID_HEIGHT": () => (/* binding */ GRID_HEIGHT),
/* harmony export */   "GRID_WIDTH": () => (/* binding */ GRID_WIDTH)
/* harmony export */ });
const CELL_SIZE = 20;

const GRID_WIDTH = 30;
const GRID_HEIGHT = 30;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple */ "./src/apple.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snake */ "./src/snake.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.js");








if (!Array.prototype.last){
  Array.prototype.last = function(){
      return this[this.length - 1];
  };
};

if (!Array.prototype.first){
  Array.prototype.first = function(){
      return this[0];
  };
};

if (!Array.prototype.choice){
  Array.prototype.choice = function(){
    var index = Math.floor(Math.random() * this.length);
    return this[index];
  };
};

const mainContainer = document.createElement('div');
mainContainer.setAttribute('id', 'main');

const title = document.createElement('p');
title.setAttribute('id', 'title');
title.innerText = 'SNAKE';

const record = localStorage.getItem('record');

const counter = document.createElement('p');
counter.setAttribute('id', 'counter');
counter.innerText = `Score: 0 ${record ? `Max: ${record}` : ''}`;

const footer = document.createElement('p');
footer.setAttribute('id', 'developers');
footer.innerHTML = 'by <a href="https://github.com/andreilarin">Andrew Larin</a> and <a href="https://github.com/andreilarin">Igor Alekseev</a>'
document.body.appendChild(footer);

const canvas = document.createElement('canvas');
canvas.setAttribute('width', _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_WIDTH * _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_SIZE + 1);
canvas.setAttribute('height', _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_HEIGHT * _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_SIZE + 1);

document.body.appendChild(mainContainer);

document.getElementById('main').appendChild(title);
document.getElementById('main').appendChild(canvas);
document.getElementById('main').appendChild(counter);

const youLoserMessage = document.createElement('p');
youLoserMessage.setAttribute('id', 'you-loser');
youLoserMessage.innerHTML = `<p>You lose</p><a id="restart">RESTART</a>`
document.body.appendChild(youLoserMessage);


var bw = _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_WIDTH * _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_SIZE;
// Box height
var bh = _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_HEIGHT * _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_SIZE;
// Padding
var p = 0;

function drawBoard(ctx){
    for (var x = 0; x <= bw; x += _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_SIZE) {
        ctx.moveTo(0.2 + x + p, p);
        ctx.lineTo(0.2 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += _constants__WEBPACK_IMPORTED_MODULE_1__.CELL_SIZE) {
      ctx.moveTo(p, 0.2 + x + p);
      ctx.lineTo(bw + p, 0.2 + x + p);
    }
    ctx.strokeStyle = `#afafaf`;
    ctx.stroke();
}

class Game {
  constructor(canvas) {
    console.log('Init game...');
    this.canvas = canvas;
    this.snake = new _snake__WEBPACK_IMPORTED_MODULE_3__.Snake();
    this.apple = new _apple__WEBPACK_IMPORTED_MODULE_0__.Apple();
    this.ctx = canvas.getContext("2d"); //Получение контекста — через него можно работать с холстом
    this.initKeyboardListener();
    _utils__WEBPACK_IMPORTED_MODULE_4__.TouchController.Mount(canvas, this.snake);
    console.log('Game is initilized!');
  }

  initKeyboardListener() {
    const snake = this.snake;
    document.addEventListener('keydown', function (e) {
      if (e.code === 'ArrowLeft' && snake.dx === 0) {
        snake.dx = -1;
        snake.dy = 0;
      }
      else if (e.code === 'ArrowUp' && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = -1;
      }
      else if (e.code === 'ArrowRight' && snake.dx === 0) {
        snake.dx = 1;
        snake.dy = 0;
      }
      else if (e.code === 'ArrowDown' && snake.dy === 0) {
        snake.dx = 0;
        snake.dy = 1;
      }
    });
  }

  Start()
  { 
    console.log('Start game!');
    youLoserMessage.className = 'hidden';
    this.timer = setInterval(() => this.Update(), 1000 / 10);
    console.log(this.timer);
  }
   
  Stop()
  {
    const points = this.snake.points;
    if (record && Number(record) < points || !record)
      localStorage.setItem('record', points);
    clearInterval(this.timer); //Остановка обновления
    youLoserMessage.className = '';
    drawBoard(this.ctx);
  }
   
  Update() //Обновление игры
  {
    this.Draw();
  }
   
  Draw() //Работа с графикой
  {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height); //Очистка холста от предыдущего кадраp
    if (this.snake.hx === this.apple.x && this.snake.hy === this.apple.y) {
      this.snake.eat();
      this.apple.updatePosition();
    }
  
    if (this.snake.isCrashed()) {
      return this.Stop(this.snake.points);
    }

    counter.innerText = `Score: ${this.snake.points} ${record ? `Max: ${record}` : ''}`;
    this.apple.draw(this.ctx);
    this.snake.draw(this.ctx);
    drawBoard(this.ctx);
  }

  Restart() {
    window.location.reload();
  }
}

const game = new Game(canvas);

document.getElementById('restart').onclick = game.Restart;

game.Start();
console.log(game);


/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Snake": () => (/* binding */ Snake)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/cell.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");





class Snake {
  constructor() {
    this.dx = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomValue)(-1,1) || 1;
    this.dy = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomValue)(-1,1) && 0;
    this.hx = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomValue)(10, 20);
    this.hy = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomValue)(10, 20);
    this.points = 0;
    this.cells = [
    new _cell__WEBPACK_IMPORTED_MODULE_0__.Cell(this.hx, this.hy),
    new _cell__WEBPACK_IMPORTED_MODULE_0__.Cell(this.hx - this.dx, this.hy - this.dy),
    new _cell__WEBPACK_IMPORTED_MODULE_0__.Cell(this.hx - 2 * this.dx, this.hy - 2 * this.dy),
    ];

    this.cells;
  }

  addCell() {
    const prevLastCell = this.cells[this.cells.length - 2];
    const lastCell = this.cells.last();
    this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_0__.Cell(2 * lastCell.x - prevLastCell.x, 2 * lastCell.y - prevLastCell.y))
  }

  draw(ctx) {
    let lastCell = null;

    this.cells.forEach(cell => {
      if (lastCell) {
        const temp = Object.assign(new _cell__WEBPACK_IMPORTED_MODULE_0__.Cell(), cell)
        cell.x = lastCell.x;
        cell.y = lastCell.y;
        lastCell = temp;
      } else {
        lastCell = Object.assign(new _cell__WEBPACK_IMPORTED_MODULE_0__.Cell(), cell);
        const x = (cell.x + this.dx + _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_WIDTH) % _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_WIDTH;
        const y = (cell.y + this.dy + _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_HEIGHT) % _constants__WEBPACK_IMPORTED_MODULE_1__.GRID_HEIGHT;
        this.hx = x;
        this.hy = y;
        cell.x = x;
        cell.y = y;
      }
      cell.draw(ctx);
    });
  }

  eat() {
    console.log('eat apple')
    this.addCell();
    this.points++;
  }

  isCrashed() {
    for (let i = 4; i < this.cells.length; i++) {
      if (this.cells[i].x === this.hx && this.cells[i].y === this.hy) {
        return true;
      }
    }
    // if (this.hx === GRID_WIDTH || this.hx === 0 || this.hy === GRID_HEIGHT || this.hy === 0)
    //   return true;
    return false;
  }
}
  

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TouchController": () => (/* binding */ TouchController),
/* harmony export */   "getRandomValue": () => (/* binding */ getRandomValue)
/* harmony export */ });
function getRandomValue(min, max) {
  return Math.floor(min + (Math.random() * (max - min)));
}

class TouchController {
  static Mount(holder, object) {
    this.sensitivity = 0.1;
    this.touchStart = null;
    this.touchPosition = null;
    holder.addEventListener("touchstart", (e) => { this.TouchStart(e); }); //Начало касания
    holder.addEventListener("touchmove", (e) => { this.TouchMove(e); }); //Движение пальцем по экрану
    //Пользователь отпустил экран
    holder.addEventListener("touchend", (e) => { this.TouchEnd(e, object); });
    //Отмена касания
    holder.addEventListener("touchcancel", (e) => { this.TouchEnd(e, object); });
    console.log('Touch controller was mounted!');
  }

  static TouchStart(e)
  {
      console.log('Touch!');
      //Получаем текущую позицию касания
      this.touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      this.touchPosition = { x: this.touchStart.x, y: this.touchStart.y };
  }

  static TouchMove(e)
  {
    this.touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
  }

  static TouchEnd(e, object)
  {
      this.CheckAction(object); //Определяем, какой жест совершил пользователь
      this.touchStart = null;
      this.touchPosition = null;
  }

  static CheckAction(object)
  {
    console.log('Check action');
    var d = //Получаем расстояния от начальной до конечной точек по обеим осям
    {
      x: this.touchStart.x - this.touchPosition.x,
      y: this.touchStart.y - this.touchPosition.y
    };
    
    if(Math.abs(d.x) > Math.abs(d.y)) //Проверяем, движение по какой оси было длиннее
    {
      if(Math.abs(d.x) > this.sensitivity) //Проверяем, было ли движение достаточно длинным
      {
        if(d.x > 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
        {
          object.dx = -1;
          object.dy = 0;
        }
        else //Иначе он двигал им слева направо
        {
          object.dx = 1;
          object.dy = 0;
        }
      }
    }
    else //Аналогичные проверки для вертикальной оси
    {
      if(Math.abs(d.y) > this.sensitivity)
      {
        if(d.y > 0) //Свайп вверх
        {
          object.dx = 0;
          object.dy = -1;
        }
        else //Свайп вниз
        {
          object.dx = 0;
          object.dy = 1;
        }
      }
    }
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx1Q0FBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IscUNBQXFDLHVDQUFJO0FBQ3pDLHNDQUFzQyxrREFBVSxJQUFJLGtEQUFVO0FBQzlELHNDQUFzQyxtREFBVyxJQUFJLG1EQUFXO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRU87QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHFCQUFxQixHQUFHO0FBQzNFLGtEQUFrRCxvQkFBb0IsR0FBRztBQUN6RTtBQUNBLGlEQUFpRCwyQkFBMkI7QUFDNUU7QUFDQSxvREFBb0QsMkJBQTJCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL2FwcGxlLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9zcmMvY2VsbC5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9zcmMvc25ha2UuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogOTd2aDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCc7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmNhbnZhcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxyXFxuICAgIG1heC13aWR0aDogOTB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2RldmVsb3BlcnMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM2KTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RldmVsb3BlcnMgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNkZXZlbG9wZXJzIGE6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM2KTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jeW91LWxvc2VyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3lvdS1sb3Nlci5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jeW91LWxvc2VyIGEge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3lvdS1sb3NlciBhOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzNik7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiA5N3ZoO1xcclxcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jZGV2ZWxvcGVycyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzYpO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGV2ZWxvcGVycyBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM0NSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2RldmVsb3BlcnMgYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MzYpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiN5b3UtbG9zZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jeW91LWxvc2VyLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN5b3UtbG9zZXIgYSB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jeW91LWxvc2VyIGE6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDM2KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBHUklEX1dJRFRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBHUklEX0hFSUdIVCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQ0VMTF9TSVpFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21WYWx1ZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcGxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIGRyYXcoY3R4KSB7XHJcbiAgICBjdHguZmlsbFN0eWxlPVwiZ3JlZW5cIjtcclxuICAgIGN0eC5maWxsUmVjdCh0aGlzLnggKiBDRUxMX1NJWkUsIHRoaXMueSAqIENFTExfU0laRSwgQ0VMTF9TSVpFLCBDRUxMX1NJWkUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLnggPSBnZXRSYW5kb21WYWx1ZSgyLCBHUklEX1dJRFRIIC0gMik7XHJcbiAgICB0aGlzLnkgPSBnZXRSYW5kb21WYWx1ZSgyLCBHUklEX0hFSUdIVCAtIDIpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENFTExfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENlbGwge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgZHJhdyhjdHgpIHtcclxuICAgIGN0eC5maWxsU3R5bGU9XCJyZWRcIjtcclxuICAgIGN0eC5maWxsUmVjdCh0aGlzLnggKiBDRUxMX1NJWkUsIHRoaXMueSAqIENFTExfU0laRSwgQ0VMTF9TSVpFLCBDRUxMX1NJWkUpO1xyXG4gIH1cclxuXHJcbiAgaXNJbnRlcnNlY3RlZChjZWxsKSB7XHJcbiAgICByZXR1cm4gdGhpcy54ID09PSBjZWxsLnggJiYgdGhpcy55ID09PSBjZWxsLnk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IENFTExfU0laRSA9IDIwO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdSSURfV0lEVEggPSAzMDtcclxuZXhwb3J0IGNvbnN0IEdSSURfSEVJR0hUID0gMzA7IiwiaW1wb3J0IHsgQXBwbGUgfSBmcm9tICcuL2FwcGxlJztcclxuaW1wb3J0IHsgR1JJRF9IRUlHSFQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IENFTExfU0laRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgR1JJRF9XSURUSCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSAnLi9zbmFrZSc7XHJcbmltcG9ydCB7IFRvdWNoQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCl7XHJcbiAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG4gIH07XHJcbn07XHJcblxyXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maXJzdCl7XHJcbiAgQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIHRoaXNbMF07XHJcbiAgfTtcclxufTtcclxuXHJcbmlmICghQXJyYXkucHJvdG90eXBlLmNob2ljZSl7XHJcbiAgQXJyYXkucHJvdG90eXBlLmNob2ljZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxlbmd0aCk7XHJcbiAgICByZXR1cm4gdGhpc1tpbmRleF07XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcclxuXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG50aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XHJcbnRpdGxlLmlubmVyVGV4dCA9ICdTTkFLRSc7XHJcblxyXG5jb25zdCByZWNvcmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjb3JkJyk7XHJcblxyXG5jb25zdCBjb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb3VudGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY291bnRlcicpO1xyXG5jb3VudGVyLmlubmVyVGV4dCA9IGBTY29yZTogMCAke3JlY29yZCA/IGBNYXg6ICR7cmVjb3JkfWAgOiAnJ31gO1xyXG5cclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5mb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkZXZlbG9wZXJzJyk7XHJcbmZvb3Rlci5pbm5lckhUTUwgPSAnYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZWlsYXJpblwiPkFuZHJldyBMYXJpbjwvYT4gYW5kIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYW5kcmVpbGFyaW5cIj5JZ29yIEFsZWtzZWV2PC9hPidcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgR1JJRF9XSURUSCAqIENFTExfU0laRSArIDEpO1xyXG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBHUklEX0hFSUdIVCAqIENFTExfU0laRSArIDEpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuYXBwZW5kQ2hpbGQoY291bnRlcik7XHJcblxyXG5jb25zdCB5b3VMb3Nlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnlvdUxvc2VyTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3lvdS1sb3NlcicpO1xyXG55b3VMb3Nlck1lc3NhZ2UuaW5uZXJIVE1MID0gYDxwPllvdSBsb3NlPC9wPjxhIGlkPVwicmVzdGFydFwiPlJFU1RBUlQ8L2E+YFxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHlvdUxvc2VyTWVzc2FnZSk7XHJcblxyXG5cclxudmFyIGJ3ID0gR1JJRF9XSURUSCAqIENFTExfU0laRTtcclxuLy8gQm94IGhlaWdodFxyXG52YXIgYmggPSBHUklEX0hFSUdIVCAqIENFTExfU0laRTtcclxuLy8gUGFkZGluZ1xyXG52YXIgcCA9IDA7XHJcblxyXG5mdW5jdGlvbiBkcmF3Qm9hcmQoY3R4KXtcclxuICAgIGZvciAodmFyIHggPSAwOyB4IDw9IGJ3OyB4ICs9IENFTExfU0laRSkge1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oMC4yICsgeCArIHAsIHApO1xyXG4gICAgICAgIGN0eC5saW5lVG8oMC4yICsgeCArIHAsIGJoICsgcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPD0gYmg7IHggKz0gQ0VMTF9TSVpFKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8ocCwgMC4yICsgeCArIHApO1xyXG4gICAgICBjdHgubGluZVRvKGJ3ICsgcCwgMC4yICsgeCArIHApO1xyXG4gICAgfVxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYCNhZmFmYWZgO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG59XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0IGdhbWUuLi4nKTtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSgpO1xyXG4gICAgdGhpcy5hcHBsZSA9IG5ldyBBcHBsZSgpO1xyXG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpOyAvL9Cf0L7Qu9GD0YfQtdC90LjQtSDQutC+0L3RgtC10LrRgdGC0LAg4oCUINGH0LXRgNC10Lcg0L3QtdCz0L4g0LzQvtC20L3QviDRgNCw0LHQvtGC0LDRgtGMINGBINGF0L7Qu9GB0YLQvtC8XHJcbiAgICB0aGlzLmluaXRLZXlib2FyZExpc3RlbmVyKCk7XHJcbiAgICBUb3VjaENvbnRyb2xsZXIuTW91bnQoY2FudmFzLCB0aGlzLnNuYWtlKTtcclxuICAgIGNvbnNvbGUubG9nKCdHYW1lIGlzIGluaXRpbGl6ZWQhJyk7XHJcbiAgfVxyXG5cclxuICBpbml0S2V5Ym9hcmRMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IHNuYWtlID0gdGhpcy5zbmFrZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dMZWZ0JyAmJiBzbmFrZS5keCA9PT0gMCkge1xyXG4gICAgICAgIHNuYWtlLmR4ID0gLTE7XHJcbiAgICAgICAgc25ha2UuZHkgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGUuY29kZSA9PT0gJ0Fycm93VXAnICYmIHNuYWtlLmR5ID09PSAwKSB7XHJcbiAgICAgICAgc25ha2UuZHggPSAwO1xyXG4gICAgICAgIHNuYWtlLmR5ID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoZS5jb2RlID09PSAnQXJyb3dSaWdodCcgJiYgc25ha2UuZHggPT09IDApIHtcclxuICAgICAgICBzbmFrZS5keCA9IDE7XHJcbiAgICAgICAgc25ha2UuZHkgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGUuY29kZSA9PT0gJ0Fycm93RG93bicgJiYgc25ha2UuZHkgPT09IDApIHtcclxuICAgICAgICBzbmFrZS5keCA9IDA7XHJcbiAgICAgICAgc25ha2UuZHkgPSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIFN0YXJ0KClcclxuICB7IFxyXG4gICAgY29uc29sZS5sb2coJ1N0YXJ0IGdhbWUhJyk7XHJcbiAgICB5b3VMb3Nlck1lc3NhZ2UuY2xhc3NOYW1lID0gJ2hpZGRlbic7XHJcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5VcGRhdGUoKSwgMTAwMCAvIDEwKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudGltZXIpO1xyXG4gIH1cclxuICAgXHJcbiAgU3RvcCgpXHJcbiAge1xyXG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5zbmFrZS5wb2ludHM7XHJcbiAgICBpZiAocmVjb3JkICYmIE51bWJlcihyZWNvcmQpIDwgcG9pbnRzIHx8ICFyZWNvcmQpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWNvcmQnLCBwb2ludHMpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTsgLy/QntGB0YLQsNC90L7QstC60LAg0L7QsdC90L7QstC70LXQvdC40Y9cclxuICAgIHlvdUxvc2VyTWVzc2FnZS5jbGFzc05hbWUgPSAnJztcclxuICAgIGRyYXdCb2FyZCh0aGlzLmN0eCk7XHJcbiAgfVxyXG4gICBcclxuICBVcGRhdGUoKSAvL9Ce0LHQvdC+0LLQu9C10L3QuNC1INC40LPRgNGLXHJcbiAge1xyXG4gICAgdGhpcy5EcmF3KCk7XHJcbiAgfVxyXG4gICBcclxuICBEcmF3KCkgLy/QoNCw0LHQvtGC0LAg0YEg0LPRgNCw0YTQuNC60L7QuVxyXG4gIHtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAvL9Ce0YfQuNGB0YLQutCwINGF0L7Qu9GB0YLQsCDQvtGCINC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0LrQsNC00YDQsHBcclxuICAgIGlmICh0aGlzLnNuYWtlLmh4ID09PSB0aGlzLmFwcGxlLnggJiYgdGhpcy5zbmFrZS5oeSA9PT0gdGhpcy5hcHBsZS55KSB7XHJcbiAgICAgIHRoaXMuc25ha2UuZWF0KCk7XHJcbiAgICAgIHRoaXMuYXBwbGUudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICBcclxuICAgIGlmICh0aGlzLnNuYWtlLmlzQ3Jhc2hlZCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLlN0b3AodGhpcy5zbmFrZS5wb2ludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50ZXIuaW5uZXJUZXh0ID0gYFNjb3JlOiAke3RoaXMuc25ha2UucG9pbnRzfSAke3JlY29yZCA/IGBNYXg6ICR7cmVjb3JkfWAgOiAnJ31gO1xyXG4gICAgdGhpcy5hcHBsZS5kcmF3KHRoaXMuY3R4KTtcclxuICAgIHRoaXMuc25ha2UuZHJhdyh0aGlzLmN0eCk7XHJcbiAgICBkcmF3Qm9hcmQodGhpcy5jdHgpO1xyXG4gIH1cclxuXHJcbiAgUmVzdGFydCgpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQnKS5vbmNsaWNrID0gZ2FtZS5SZXN0YXJ0O1xyXG5cclxuZ2FtZS5TdGFydCgpO1xyXG5jb25zb2xlLmxvZyhnYW1lKTtcclxuIiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vY2VsbCc7XHJcbmltcG9ydCB7IEdSSURfSEVJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBHUklEX1dJRFRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21WYWx1ZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWtlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZHggPSBnZXRSYW5kb21WYWx1ZSgtMSwxKSB8fCAxO1xyXG4gICAgdGhpcy5keSA9IGdldFJhbmRvbVZhbHVlKC0xLDEpICYmIDA7XHJcbiAgICB0aGlzLmh4ID0gZ2V0UmFuZG9tVmFsdWUoMTAsIDIwKTtcclxuICAgIHRoaXMuaHkgPSBnZXRSYW5kb21WYWx1ZSgxMCwgMjApO1xyXG4gICAgdGhpcy5wb2ludHMgPSAwO1xyXG4gICAgdGhpcy5jZWxscyA9IFtcclxuICAgIG5ldyBDZWxsKHRoaXMuaHgsIHRoaXMuaHkpLFxyXG4gICAgbmV3IENlbGwodGhpcy5oeCAtIHRoaXMuZHgsIHRoaXMuaHkgLSB0aGlzLmR5KSxcclxuICAgIG5ldyBDZWxsKHRoaXMuaHggLSAyICogdGhpcy5keCwgdGhpcy5oeSAtIDIgKiB0aGlzLmR5KSxcclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5jZWxscztcclxuICB9XHJcblxyXG4gIGFkZENlbGwoKSB7XHJcbiAgICBjb25zdCBwcmV2TGFzdENlbGwgPSB0aGlzLmNlbGxzW3RoaXMuY2VsbHMubGVuZ3RoIC0gMl07XHJcbiAgICBjb25zdCBsYXN0Q2VsbCA9IHRoaXMuY2VsbHMubGFzdCgpO1xyXG4gICAgdGhpcy5jZWxscy5wdXNoKG5ldyBDZWxsKDIgKiBsYXN0Q2VsbC54IC0gcHJldkxhc3RDZWxsLngsIDIgKiBsYXN0Q2VsbC55IC0gcHJldkxhc3RDZWxsLnkpKVxyXG4gIH1cclxuXHJcbiAgZHJhdyhjdHgpIHtcclxuICAgIGxldCBsYXN0Q2VsbCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICBpZiAobGFzdENlbGwpIHtcclxuICAgICAgICBjb25zdCB0ZW1wID0gT2JqZWN0LmFzc2lnbihuZXcgQ2VsbCgpLCBjZWxsKVxyXG4gICAgICAgIGNlbGwueCA9IGxhc3RDZWxsLng7XHJcbiAgICAgICAgY2VsbC55ID0gbGFzdENlbGwueTtcclxuICAgICAgICBsYXN0Q2VsbCA9IHRlbXA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGFzdENlbGwgPSBPYmplY3QuYXNzaWduKG5ldyBDZWxsKCksIGNlbGwpO1xyXG4gICAgICAgIGNvbnN0IHggPSAoY2VsbC54ICsgdGhpcy5keCArIEdSSURfV0lEVEgpICUgR1JJRF9XSURUSDtcclxuICAgICAgICBjb25zdCB5ID0gKGNlbGwueSArIHRoaXMuZHkgKyBHUklEX0hFSUdIVCkgJSBHUklEX0hFSUdIVDtcclxuICAgICAgICB0aGlzLmh4ID0geDtcclxuICAgICAgICB0aGlzLmh5ID0geTtcclxuICAgICAgICBjZWxsLnggPSB4O1xyXG4gICAgICAgIGNlbGwueSA9IHk7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbC5kcmF3KGN0eCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVhdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlYXQgYXBwbGUnKVxyXG4gICAgdGhpcy5hZGRDZWxsKCk7XHJcbiAgICB0aGlzLnBvaW50cysrO1xyXG4gIH1cclxuXHJcbiAgaXNDcmFzaGVkKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDQ7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmNlbGxzW2ldLnggPT09IHRoaXMuaHggJiYgdGhpcy5jZWxsc1tpXS55ID09PSB0aGlzLmh5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGlmICh0aGlzLmh4ID09PSBHUklEX1dJRFRIIHx8IHRoaXMuaHggPT09IDAgfHwgdGhpcy5oeSA9PT0gR1JJRF9IRUlHSFQgfHwgdGhpcy5oeSA9PT0gMClcclxuICAgIC8vICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiAgIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVZhbHVlKG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG91Y2hDb250cm9sbGVyIHtcclxuICBzdGF0aWMgTW91bnQoaG9sZGVyLCBvYmplY3QpIHtcclxuICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSAwLjE7XHJcbiAgICB0aGlzLnRvdWNoU3RhcnQgPSBudWxsO1xyXG4gICAgdGhpcy50b3VjaFBvc2l0aW9uID0gbnVsbDtcclxuICAgIGhvbGRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSkgPT4geyB0aGlzLlRvdWNoU3RhcnQoZSk7IH0pOyAvL9Cd0LDRh9Cw0LvQviDQutCw0YHQsNC90LjRj1xyXG4gICAgaG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgKGUpID0+IHsgdGhpcy5Ub3VjaE1vdmUoZSk7IH0pOyAvL9CU0LLQuNC20LXQvdC40LUg0L/QsNC70YzRhtC10Lwg0L/QviDRjdC60YDQsNC90YNcclxuICAgIC8v0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC+0YLQv9GD0YHRgtC40Lsg0Y3QutGA0LDQvVxyXG4gICAgaG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoZSkgPT4geyB0aGlzLlRvdWNoRW5kKGUsIG9iamVjdCk7IH0pO1xyXG4gICAgLy/QntGC0LzQtdC90LAg0LrQsNGB0LDQvdC40Y9cclxuICAgIGhvbGRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgKGUpID0+IHsgdGhpcy5Ub3VjaEVuZChlLCBvYmplY3QpOyB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdUb3VjaCBjb250cm9sbGVyIHdhcyBtb3VudGVkIScpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIFRvdWNoU3RhcnQoZSlcclxuICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUb3VjaCEnKTtcclxuICAgICAgLy/Qn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnRg9GOINC/0L7Qt9C40YbQuNGOINC60LDRgdCw0L3QuNGPXHJcbiAgICAgIHRoaXMudG91Y2hTdGFydCA9IHsgeDogZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCB5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgfTtcclxuICAgICAgdGhpcy50b3VjaFBvc2l0aW9uID0geyB4OiB0aGlzLnRvdWNoU3RhcnQueCwgeTogdGhpcy50b3VjaFN0YXJ0LnkgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBUb3VjaE1vdmUoZSlcclxuICB7XHJcbiAgICB0aGlzLnRvdWNoUG9zaXRpb24gPSB7IHg6IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgeTogZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgVG91Y2hFbmQoZSwgb2JqZWN0KVxyXG4gIHtcclxuICAgICAgdGhpcy5DaGVja0FjdGlvbihvYmplY3QpOyAvL9Ce0L/RgNC10LTQtdC70Y/QtdC8LCDQutCw0LrQvtC5INC20LXRgdGCINGB0L7QstC10YDRiNC40Lsg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXHJcbiAgICAgIHRoaXMudG91Y2hTdGFydCA9IG51bGw7XHJcbiAgICAgIHRoaXMudG91Y2hQb3NpdGlvbiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgQ2hlY2tBY3Rpb24ob2JqZWN0KVxyXG4gIHtcclxuICAgIGNvbnNvbGUubG9nKCdDaGVjayBhY3Rpb24nKTtcclxuICAgIHZhciBkID0gLy/Qn9C+0LvRg9GH0LDQtdC8INGA0LDRgdGB0YLQvtGP0L3QuNGPINC+0YIg0L3QsNGH0LDQu9GM0L3QvtC5INC00L4g0LrQvtC90LXRh9C90L7QuSDRgtC+0YfQtdC6INC/0L4g0L7QsdC10LjQvCDQvtGB0Y/QvFxyXG4gICAge1xyXG4gICAgICB4OiB0aGlzLnRvdWNoU3RhcnQueCAtIHRoaXMudG91Y2hQb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLnRvdWNoU3RhcnQueSAtIHRoaXMudG91Y2hQb3NpdGlvbi55XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZihNYXRoLmFicyhkLngpID4gTWF0aC5hYnMoZC55KSkgLy/Qn9GA0L7QstC10YDRj9C10LwsINC00LLQuNC20LXQvdC40LUg0L/QviDQutCw0LrQvtC5INC+0YHQuCDQsdGL0LvQviDQtNC70LjQvdC90LXQtVxyXG4gICAge1xyXG4gICAgICBpZihNYXRoLmFicyhkLngpID4gdGhpcy5zZW5zaXRpdml0eSkgLy/Qn9GA0L7QstC10YDRj9C10LwsINCx0YvQu9C+INC70Lgg0LTQstC40LbQtdC90LjQtSDQtNC+0YHRgtCw0YLQvtGH0L3QviDQtNC70LjQvdC90YvQvFxyXG4gICAgICB7XHJcbiAgICAgICAgaWYoZC54ID4gMCkgLy/QldGB0LvQuCDQt9C90LDRh9C10L3QuNC1INCx0L7Qu9GM0YjQtSDQvdGD0LvRjywg0LfQvdCw0YfQuNGCINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQtNCy0LjQs9Cw0Lsg0L/QsNC70YzRhtC10Lwg0YHQv9GA0LDQstCwINC90LDQu9C10LLQvlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9iamVjdC5keCA9IC0xO1xyXG4gICAgICAgICAgb2JqZWN0LmR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSAvL9CY0L3QsNGH0LUg0L7QvSDQtNCy0LjQs9Cw0Lsg0LjQvCDRgdC70LXQstCwINC90LDQv9GA0LDQstC+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb2JqZWN0LmR4ID0gMTtcclxuICAgICAgICAgIG9iamVjdC5keSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIC8v0JDQvdCw0LvQvtCz0LjRh9C90YvQtSDQv9GA0L7QstC10YDQutC4INC00LvRjyDQstC10YDRgtC40LrQsNC70YzQvdC+0Lkg0L7RgdC4XHJcbiAgICB7XHJcbiAgICAgIGlmKE1hdGguYWJzKGQueSkgPiB0aGlzLnNlbnNpdGl2aXR5KVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYoZC55ID4gMCkgLy/QodCy0LDQudC/INCy0LLQtdGA0YVcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvYmplY3QuZHggPSAwO1xyXG4gICAgICAgICAgb2JqZWN0LmR5ID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgLy/QodCy0LDQudC/INCy0L3QuNC3XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb2JqZWN0LmR4ID0gMDtcclxuICAgICAgICAgIG9iamVjdC5keSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9