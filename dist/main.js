'use strict';
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self['webpackChunkjavascript_capstone_pokemon_api'] =
  self['webpackChunkjavascript_capstone_pokemon_api'] || []).push([
  ['main'],
  {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles.css':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "body {\\n  margin: 0;\\n  padding: 0;\\n  background-color: #3864a8;\\n  align-items: center;\\n  font-family: \'Lucida Sans\', \'Lucida Sans Regular\', \'Lucida Grande\',\\n    \'Lucida Sans Unicode\', Verdana, sans-serif;\\n}\\n\\n.flex-col {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: center;\\n}\\n\\n.flex-row {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n\\n.flex-row-module {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n}\\n\\nheader {\\n  align-items: center;\\n  width: 100%;\\n  color: #fff;\\n  margin: 1em 0;\\n}\\n\\n.logo-img {\\n  width: 80px;\\n}\\n\\n.menu {\\n  list-style: none;\\n  gap: 6em;\\n}\\n\\nfooter {\\n  border: solid 1px;\\n  width: 100%;\\n  margin: 1em 0 0;\\n  padding: 1em 0;\\n  color: #fff;\\n}\\n\\nfooter a {\\n  color: #ffcb04;\\n}\\n\\n.pokemons-container {\\n  flex-wrap: wrap;\\n  width: 80%;\\n  gap: 2em;\\n}\\n\\n.pokemon-summary {\\n  width: 25%;\\n  margin: 0.8em;\\n  border-radius: 16px;\\n  border: solid 1px #3864a8;\\n  box-shadow: 0 0 7px 7px #ffcb04;\\n  padding: 1em 0;\\n  background-color: #fff;\\n}\\n\\n.pokemon-summary-modal {\\n  width: 70%;\\n  margin: 0px 15%;\\n  border-radius: 16px;\\n  border: solid 1px #3864a8;\\n  box-shadow: 2px 2px 2px 2px #3864a8;\\n  padding: 1em 0;\\n}\\n\\n.pokemon-image {\\n  height: 150px;\\n}\\n\\n.pokemon-image-modal {\\n  height: 300px;\\n}\\n\\n.name-container {\\n  justify-content: space-around;\\n  font-size: 1.5em;\\n}\\n\\n.likes-number {\\n  text-align: right;\\n  padding: 0 1em;\\n}\\n\\n.comments,\\n.comments-modal {\\n  width: 50%;\\n  align-self: center;\\n  border-radius: 8px;\\n  height: 3em;\\n  color: #fff;\\n  background: linear-gradient(88deg, #ff1c1c, #df1818);\\n  /*background: radial-gradient(#f26868, #d11919);*/\\n  /*border: solid 2px #000;*/\\n  font-size: 1em;\\n}\\n\\n.comments:hover,\\n.comments-modal:hover {\\n  border-color: #3864a8;\\n  background: #ffcb04;\\n  color: #000;\\n}\\n\\n.pokemon-name {\\n  margin: 0;\\n  color: #3864a8;\\n}\\n\\n.icons {\\n  color: #df1818;\\n}\\n\\n.icons:hover,\\n.comments:hover {\\n  cursor: pointer;\\n}\\n\\n.modal {\\n  display: none; /* Hidden by default */\\n  position: fixed; /* Stay in place */\\n  z-index: 1; /* Sit on top */\\n  left: 0;\\n  top: 0;\\n  width: 100%; /* Full width */\\n  height: 100%; /* Full height */\\n  overflow: auto; /* Enable scroll if needed */\\n  background-color: rgb(0, 0, 0); /* Fallback color */\\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\\n}\\n\\n/* Modal Content/Box */\\n.modal-content {\\n  background-color: #fefefe;\\n  margin: 5% auto; /* 15% from the top and centered */\\n  padding: 3em;\\n  border: 1px solid #888;\\n  width: 80%; /* Could be more or less, depending on screen size */\\n  border-radius: 16px;\\n  box-shadow: 0 0 20px 20px rgba(255, 203, 4, 0.6);\\n}\\n\\n/* The Close Button */\\n.close {\\n  color: #000;\\n  float: right;\\n  font-size: 50px;\\n  font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: #aaa;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.comment-summary {\\n  margin-top: 50px;\\n}\\n\\n.comment-title {\\n  margin: 0;\\n  text-align: center;\\n}\\n\\n.status-text {\\n  color: #000;\\n  font-size: large;\\n  font-weight: bold;\\n}\\n\\n.span-size {\\n  width: 50%;\\n  text-align: center;\\n}\\n\\n.comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  align-self: center;\\n  border: solid 2px black;\\n  width: 40%;\\n}\\n\\n.input-name {\\n  width: 50%;\\n  height: 30px;\\n  padding: 3px;\\n  font-size: 1.8rem;\\n  border: 1px solid gray;\\n}\\n\\n.form-container {\\n  display: flex;\\n  flex-direction: column;\\n  width: 40%;\\n  align-self: center;\\n  margin-top: 20px;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.input {\\n  width: 50%;\\n  border: solid black 2px;\\n  height: 30px;\\n  box-shadow: 2px 2px 2px 2px rgb(80, 80, 80);\\n  border-radius: 4px;\\n}\\n\\ntextarea {\\n  height: 150px;\\n  width: 80%;\\n  border: solid black 2px;\\n  box-shadow: 2px 2px 2px 2px rgb(80, 80, 80);\\n  border-radius: 8px;\\n  padding: 0.8em;\\n}\\n\\n.auto {\\n  align-self: auto;\\n}\\n\\n.comment-text {\\n  list-style: none;\\n  align-items: flex-start;\\n  padding-left: 30%;\\n  gap: 10px;\\n  text-align: center;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/styles.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );

        /***/
      },

    /***/ './src/styles.css':
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/styles.css?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_img_pokemon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/pokemon.png */ \"./src/assets/img/pokemon.png\");\n/* harmony import */ var _modules_displayPokemons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayPokemons.js */ \"./src/modules/displayPokemons.js\");\n/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popUp.js */ \"./src/modules/popUp.js\");\n/* harmony import */ var _modules_countItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/countItems.js */ \"./src/modules/countItems.js\");\n\n\n\n\n\n\nconst logoDiv = document.getElementById('logo');\nconst pokemonsContainer = document.querySelector('.pokemons-container');\nconst modal = document.getElementById('myModal');\nconst modalContent = document.querySelector('.modal-content');\nconst pokemonCounter = document.querySelector('.counter');\n\nconst myIcon = new Image();\nmyIcon.src = _assets_img_pokemon_png__WEBPACK_IMPORTED_MODULE_1__;\nmyIcon.classList = 'logo-img';\nlogoDiv.appendChild(myIcon);\n\nwindow.onload = () => {\n  (0,_modules_displayPokemons_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  setTimeout(() => {\n    pokemonCounter.innerHTML = `(${(0,_modules_countItems_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pokemonsContainer)})`;\n  }, 2000);\n};\n\npokemonsContainer.addEventListener('click', (e) => {\n  if (e.target.classList.contains('comments')) {\n    modal.style.display = 'block';\n    (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.id);\n  }\n});\n\nmodal.addEventListener('click', (e) => {\n  if (e.target.classList.contains('close')) {\n    modal.style.display = 'none';\n    modalContent.innerHTML = '';\n  }\n});\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/index.js?"
        );

        /***/
      },

    /***/ './src/modules/comments.js':
      /*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment)\n/* harmony export */ });\nconst addComment = async (itemId, username, comment) => {\r\n  const idUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/comments';\r\n  const data = {\r\n    item_id: `${itemId}`,\r\n    username: `${username}`,\r\n    comment: `${comment}`,\r\n  };\r\n\r\n  await fetch(idUrl, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\nconst getComment = async (id) => {\r\n  const idUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/comments?item_id=${id}`;\r\n  const response = await fetch(idUrl);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/modules/comments.js?"
        );

        /***/
      },

    /***/ './src/modules/countItems.js':
      /*!***********************************!*\
  !*** ./src/modules/countItems.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((containerItem) => containerItem.children.length);\r\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/modules/countItems.js?'
        );

        /***/
      },

    /***/ './src/modules/createFormElements.js':
      /*!*******************************************!*\
  !*** ./src/modules/createFormElements.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Forms)\n/* harmony export */ });\nclass Forms {\n  static createForm(newForm, classForm, id, method, parent) {\n    const form = document.createElement(`${newForm}`);\n    form.className = `${classForm}`;\n    form.id = `${id}`;\n    form.method = `${method}`;\n    parent.appendChild(form);\n    return form;\n  }\n\n  static createInput(newInput, classInput, id, type, name, placeholder, parent) {\n    const input = document.createElement(`${newInput}`);\n    input.className = `${classInput}`;\n    input.id = `${id}`;\n    input.type = `${type}`;\n    input.name = `${name}`;\n    input.required = true;\n    input.placeholder = `${placeholder}`;\n    parent.appendChild(input);\n    return input;\n  }\n\n  static createTextArea(newTextArea, classTextArea, id, name, placeholder, parent) {\n    const textArea = document.createElement(`${newTextArea}`);\n    textArea.className = `${classTextArea}`;\n    textArea.id = `${id}`;\n    textArea.name = `${name}`;\n    textArea.required = true;\n    textArea.placeholder = `${placeholder}`;\n    parent.appendChild(textArea);\n    return textArea;\n  }\n\n  static createButton(newButton, classButton, id, type, value, parent) {\n    const button = document.createElement(`${newButton}`);\n    button.className = `${classButton}`;\n    button.id = `${id}`;\n    button.type = `${type}`;\n    button.innerHTML = `${value}`;\n    parent.appendChild(button);\n    return button;\n  }\n}\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/modules/createFormElements.js?'
        );

        /***/
      },

    /***/ './src/modules/createHTMLelement.js':
      /*!******************************************!*\
  !*** ./src/modules/createHTMLelement.js ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((newElement, className, id, inHTML, parent) => {\n  const element = document.createElement(`${newElement}`);\n  element.className = `${className}`;\n  element.id = `${id}`;\n  element.innerHTML = `${inHTML}`;\n  parent.appendChild(element);\n  return element;\n});\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/modules/createHTMLelement.js?'
        );

        /***/
      },

    /***/ './src/modules/displayPokemons.js':
      /*!****************************************!*\
  !*** ./src/modules/displayPokemons.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHTMLelement.js */ \"./src/modules/createHTMLelement.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n  const pokemonsContainer = document.querySelector('.pokemons-container');\n  const response = await fetch(\n    'https://pokeapi.co/api/v2/pokemon?limit=6&offset=888'\n  );\n  const result = await response.json();\n  result.results.forEach((pokemon) => {\n    const [, , , , , , pokemonId] = pokemon.url.split('/');\n    const pokemonSummary = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      'div',\n      'pokemon-summary flex-col',\n      'pokemon-summary',\n      '',\n      pokemonsContainer\n    );\n\n    const pokemonImage = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      'div',\n      'pokemon-image',\n      'pokemon-image',\n      '',\n      pokemonSummary\n    );\n    pokemonImage.style.background = `url(\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png\") 50% 0 no-repeat`;\n    pokemonImage.style.backgroundSize = 'contain';\n\n    const nameContainer = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      'div',\n      'name-container flex-row',\n      'name-container',\n      '',\n      pokemonSummary\n    );\n\n    (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      'p',\n      'pokemon-name',\n      'pokemon-name',\n      `${pokemon.name}`,\n      nameContainer\n    );\n\n    const likeIcon = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      'i',\n      'icons fa fa-heart-o',\n      'fa fa-heart-o',\n      '',\n      nameContainer\n    );\n    likeIcon.ariaHidden = true;\n\n    const likeEle = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      'p',\n      'likes-number',\n      'likes-number',\n      '',\n      pokemonSummary\n    );\n\n    (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemonId).then((value) => {\n      likeEle.innerHTML = `${value.likes || 0} likes`;\n    });\n\n    (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      'button',\n      'comments',\n      `${pokemonId}`,\n      'Comments',\n      pokemonSummary\n    );\n\n    likeIcon.addEventListener('click', () => {\n      likeIcon.classList = 'icons fa fa-heart';\n      (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pokemonId);\n      setTimeout(() => {\n        (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemonId).then((value) => {\n          likeEle.innerHTML = `${value.likes || 0} likes`;\n        });\n      }, 1000);\n    });\n  });\n});\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/modules/displayPokemons.js?"
        );

        /***/
      },

    /***/ './src/modules/getLikes.js':
      /*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (pokemonID) => {\n  const response = await fetch(\n    \'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/likes/\'\n  );\n  const result = await response.json();\n  const obj = result.find((o) => o.item_id === pokemonID);\n  return obj;\n});\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/modules/getLikes.js?'
        );

        /***/
      },

    /***/ './src/modules/popUp.js':
      /*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHTMLelement.js */ \"./src/modules/createHTMLelement.js\");\n/* harmony import */ var _createFormElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFormElements.js */ \"./src/modules/createFormElements.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (id) => {\r\n  const response = await fetch(\r\n    `https://pokeapi.co/api/v2/pokemon/${id}`,\r\n  );\r\n\r\n  const result = await response.json();\r\n  const modal = document.querySelector('.modal-content');\r\n\r\n  (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'span',\r\n    'close',\r\n    'close',\r\n    '&times;',\r\n    modal,\r\n  );\r\n\r\n  const pokemonSummary = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'div',\r\n    'pokemon-summary-modal flex-col',\r\n    'pokemon-summary',\r\n    '',\r\n    modal,\r\n  );\r\n\r\n  const pokemonImage = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'div',\r\n    'pokemon-image-modal',\r\n    'pokemon-image',\r\n    '',\r\n    pokemonSummary,\r\n  );\r\n\r\n  pokemonImage.style.background = `url(\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png\") 50% 0 no-repeat`;\r\n  pokemonImage.style.backgroundSize = 'contain';\r\n\r\n  const nameContainer = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'div',\r\n    'name-container flex-row',\r\n    'name-container',\r\n    '',\r\n    pokemonSummary,\r\n  );\r\n\r\n  (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'p',\r\n    'pokemon-name',\r\n    'pokemon-name',\r\n    `${result.name}`,\r\n    nameContainer,\r\n  );\r\n\r\n  const healthStats = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'div',\r\n    'stats-container flex-row-module',\r\n    'stats-container',\r\n    '',\r\n    pokemonSummary,\r\n  );\r\n\r\n  (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'span',\r\n    'pokemon-name span-size',\r\n    'stats-hp',\r\n    `HP: <span class=\"status-text\">${result.stats[0].base_stat}</span>`,\r\n    healthStats,\r\n  );\r\n\r\n  (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'span',\r\n    'pokemon-name span-size',\r\n    'type',\r\n    `Type: <span class=\"status-text\">${result.types[0].type.name}</span>`,\r\n    healthStats,\r\n  );\r\n\r\n  const fightStats = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'div',\r\n    'stats-container flex-row-module',\r\n    'stats-container',\r\n    '',\r\n    pokemonSummary,\r\n  );\r\n\r\n  (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'span',\r\n    'pokemon-name span-size',\r\n    'attack',\r\n    `Attack: <span class=\"status-text\"> ${result.stats[1].base_stat}</span>`,\r\n    fightStats,\r\n  );\r\n\r\n  (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'span',\r\n    'pokemon-name span-size',\r\n    'defense',\r\n    `Defense: <span class=\"status-text\"> ${result.stats[2].base_stat}</span>`,\r\n    fightStats,\r\n  );\r\n\r\n  const commentSumary = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'div',\r\n    'comment-summary flex-col',\r\n    'comment-summary',\r\n    '',\r\n    modal,\r\n  );\r\n\r\n  (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'h3',\r\n    'comment-title',\r\n    'comment-title',\r\n    'Comments (counter)',\r\n    commentSumary,\r\n  );\r\n\r\n  const commentList = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'ul',\r\n    'comment-text flex-col',\r\n    'comment-text',\r\n    '',\r\n    commentSumary,\r\n  );\r\n\r\n  (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.getComment)(id).then((data) => {\r\n    data.forEach((comment) => {\r\n      (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n        'li',\r\n        'comment',\r\n        'comment',\r\n        `${comment.creation_date} ${comment.username}: ${comment.comment}`,\r\n        commentList,\r\n      );\r\n    });\r\n  });\r\n\r\n  // displayComments();\r\n\r\n  (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'h3',\r\n    'comment-title',\r\n    'form-title',\r\n    'Add a comment',\r\n    commentSumary,\r\n  );\r\n\r\n  const formContainer = (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'div',\r\n    'form-container',\r\n    'form-container',\r\n    '',\r\n    commentSumary,\r\n  );\r\n\r\n  const form = _createFormElements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createForm(\r\n    'form',\r\n    'form',\r\n    `${result.id}`,\r\n    'POST',\r\n    formContainer,\r\n  );\r\n\r\n  _createFormElements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createInput(\r\n    'input',\r\n    'input',\r\n    'input-name',\r\n    'text',\r\n    'name',\r\n    'Your name',\r\n    form,\r\n  );\r\n\r\n  _createFormElements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTextArea(\r\n    'textarea',\r\n    'textarea',\r\n    'input-comment',\r\n    'comment',\r\n    'Your insights',\r\n    form,\r\n  );\r\n\r\n  _createFormElements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createButton(\r\n    'button',\r\n    'comments-modal auto',\r\n    `${result.id}`,\r\n    'Submit',\r\n    'submit',\r\n    form,\r\n  );\r\n\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const userName = document.querySelector('#input-name').value;\r\n    const comment = document.querySelector('#input-comment').value;\r\n    const itemId = form.id;\r\n    (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(itemId, userName, comment);\r\n    setTimeout(() => {\r\n      (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.getComment)(id).then((data) => {\r\n        commentList.innerHTML = '';\r\n        data.forEach((comment) => {\r\n          (0,_createHTMLelement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n            'li',\r\n            'comment',\r\n            'comment',\r\n            `${comment.creation_date} ${comment.username}: ${comment.comment}`,\r\n            commentList,\r\n          );\r\n        });\r\n      });\r\n    }, 1000);\r\n\r\n    form.reset();\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/modules/popUp.js?"
        );

        /***/
      },

    /***/ './src/modules/postLikes.js':
      /*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (pokemonID) => {\r\n  const data = { item_id: `${pokemonID}` };\r\n  await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8kNrW25pXGkaMtl5ivW/likes',\r\n    {\r\n      method: 'POST', // or 'PUT'\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(data),\r\n    },\r\n  );\r\n});\r\n\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/modules/postLikes.js?"
        );

        /***/
      },

    /***/ './src/assets/img/pokemon.png':
      /*!************************************!*\
  !*** ./src/assets/img/pokemon.png ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "a4a49d7a315b725de60c.png";\n\n//# sourceURL=webpack://javascript-capstone-pokemon-api/./src/assets/img/pokemon.png?'
        );

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__('./src/index.js');
    /******/
  },
]);
