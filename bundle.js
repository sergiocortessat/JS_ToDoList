/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Mate+SC&family=Stint+Ultra+Condensed&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-image: linear-gradient(to right, #ab274f, #de3163, #ab274f);\\n  color: #d7adb9 !important;\\n  font-family: \\\"Mate SC\\\", serif;\\n}\\n\\n/* Body layout */\\n\\nmain > div {\\n  width: 80%;\\n  border-radius: 7%;\\n}\\n\\n.project-item,\\n.todo-item {\\n  list-style: none;\\n  border-radius: 50%;\\n}\\n\\n.project-item > button {\\n  border-radius: 20% 50%;\\n}\\n\\n.todo-item > button {\\n  border-radius: 50% 20%;\\n}\\n\\n.btn {\\n  background: #c2b280 !important;\\n}\\n\\n.text-decoration-line-through {\\n  color: #d7adb9 !important;\\n}\\n\\n.form-width {\\n  width: 60%;\\n  margin: 0 auto;\\n}\\n\\ninput {\\n  background: #c2b280 !important;\\n  opacity: 0.8;\\n  color: white !important;\\n  font-weight: bolder;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS_ToDoList/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS_ToDoList/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/populate.js/populate.js":
/*!**********************************************!*\
  !*** ./node_modules/populate.js/populate.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n/**\n * Populate form fields from a JSON object.\n *\n * @param form object The form element containing your input fields.\n * @param data array JSON data to populate the fields with.\n * @param basename string Optional basename which is added to `name` attributes\n */\nfunction populate(form, data, basename) {\n\tfor (var key in data) {\n\t\tif (! data.hasOwnProperty(key)) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tvar name = key;\n\t\tvar value = data[key];\n\n        if ('undefined' === typeof value) {\n            value = '';\n        }\n\n        if (null === value) {\n            value = '';\n        }\n\n\t\t// handle array name attributes\n\t\tif (typeof(basename) !== \"undefined\") {\n\t\t\tname = basename + \"[\" + key + \"]\";\n\t\t}\n\n\t\tif (value.constructor === Array) {\n\t\t\tname += '[]';\n\t\t} else if(typeof value == \"object\") {\n\t\t\tpopulate(form, value, name);\n\t\t\tcontinue;\n\t\t}\n\n\t\t// only proceed if element is set\n\t\tvar element = form.elements.namedItem(name);\n\t\tif (! element) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tvar type = element.type || element[0].type;\n\n\t\tswitch(type ) {\n\t\t\tdefault:\n\t\t\t\telement.value = value;\n\t\t\t\tbreak;\n\n\t\t\tcase 'radio':\n\t\t\tcase 'checkbox':\n\t\t\t\tvar values = value.constructor === Array ? value : [value];\n\t\t\t\tfor (var j=0; j < element.length; j++) {\n\t\t\t\t\telement[j].checked = values.indexOf(element[j].value) > -1;\n\t\t\t\t}\n\t\t\t\tbreak;\n\n\t\t\tcase 'select-multiple':\n\t\t\t\tvar values = value.constructor === Array ? value : [value];\n\t\t\t\tfor(var k = 0; k < element.options.length; k++) {\n\t\t\t\t\telement.options[k].selected = (values.indexOf(element.options[k].value) > -1 );\n\t\t\t\t}\n\t\t\t\tbreak;\n\n\t\t\tcase 'select':\n\t\t\tcase 'select-one':\n\t\t\t\telement.value = value.toString() || value;\n\t\t\t\tbreak;\n\n\t\t\tcase 'date':\n      \t\t\telement.value = new Date(value).toISOString().split('T')[0];\t\n\t\t\t\tbreak;\n\t\t}\n\n\t}\n};\n\nif ( true && module.exports) {\n\tmodule.exports = populate;\n} \n\n//# sourceURL=webpack://JS_ToDoList/./node_modules/populate.js/populate.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://JS_ToDoList/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS_ToDoList/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/addTodo.js":
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\nvar addTodo = _dom__WEBPACK_IMPORTED_MODULE_0__.myQuery('.add-todo');\nvar form = _dom__WEBPACK_IMPORTED_MODULE_0__.myQuery('#submit-form');\nvar formEdit = _dom__WEBPACK_IMPORTED_MODULE_0__.myQuery('#submit-edit-form');\naddTodo.addEventListener('click', function (e) {\n  if (form.classList.contains('d-none')) {\n    e.target.innerHTML = 'Hide Form';\n    form.classList.remove('d-none');\n    formEdit.classList.add('d-none');\n  } else {\n    e.target.innerHTML = '<i class=\"bi bi-plus\"></i>';\n    form.classList.add('d-none');\n    formEdit.classList.add('d-none');\n  }\n\n  form.reset();\n});\n\n//# sourceURL=webpack://JS_ToDoList/./src/addTodo.js?");

/***/ }),

/***/ "./src/clearButton.js":
/*!****************************!*\
  !*** ./src/clearButton.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n\n\n\nvar clearButton = function clearButton(projects, projectButton) {\n  var buttonsDiv = _dom__WEBPACK_IMPORTED_MODULE_0__.myQuery('.buttons');\n  var clearButton = _dom__WEBPACK_IMPORTED_MODULE_0__.myCreate('button');\n  clearButton.classList.add('btn', 'text-white', 'm-1');\n  clearButton.innerText = 'Clear Completed Tasks';\n  buttonsDiv.appendChild(clearButton);\n  clearButton.addEventListener('click', function () {\n    var proj = projects.find(function (_ref) {\n      var name = _ref.name;\n      return name === projectButton.nextElementSibling.innerText;\n    });\n    var notCompleted = proj.todoList.filter(function (notCompleted) {\n      return notCompleted.itemStatus === false;\n    });\n    proj.todoList = notCompleted;\n    localStorage.setItem('projects', JSON.stringify(projects));\n    (0,_renderProjects__WEBPACK_IMPORTED_MODULE_1__.default)();\n    window.location.reload();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearButton);\n\n//# sourceURL=webpack://JS_ToDoList/./src/clearButton.js?");

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nvar createProject = function createProject(project) {\n  var projectItem = _dom__WEBPACK_IMPORTED_MODULE_0__.myCreate('li');\n  projectItem.dataset.projectId = project.id;\n  projectItem.classList.add('project-item');\n  var projectName = _dom__WEBPACK_IMPORTED_MODULE_0__.myCreate('span');\n  projectName.textContent = project.name;\n  var projectButton = _dom__WEBPACK_IMPORTED_MODULE_0__.myCreate('button');\n  projectButton.classList.add('project-btn', 'btn', 'm-2');\n  var projectButtonIcon = _dom__WEBPACK_IMPORTED_MODULE_0__.myCreate('i');\n  projectButtonIcon.classList.add('bi', 'text-white', 'bi-folder');\n  projectButton.append(projectButtonIcon);\n  projectItem.append(projectButton, projectName);\n  return projectItem;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://JS_ToDoList/./src/createProject.js?");

/***/ }),

/***/ "./src/createTodoList.js":
/*!*******************************!*\
  !*** ./src/createTodoList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var populate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! populate.js */ \"./node_modules/populate.js/populate.js\");\n/* harmony import */ var populate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(populate_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nvar createTodoList = function createTodoList(projects, todoList) {\n  var todoItem = _dom__WEBPACK_IMPORTED_MODULE_1__.myCreate('li');\n  todoItem.classList.add('todo-item');\n  var todoName = _dom__WEBPACK_IMPORTED_MODULE_1__.myCreate('span');\n  todoName.textContent = todoList.itemTitle;\n  var todoButton = _dom__WEBPACK_IMPORTED_MODULE_1__.myCreate('button');\n  todoButton.classList.add('todo-list-btn', 'btn', 'btn-danger', 'm-2');\n  var todoButtonIcon = _dom__WEBPACK_IMPORTED_MODULE_1__.myCreate('i');\n\n  if (todoList.itemStatus === false) {\n    todoButtonIcon.classList.add('bi', 'bi-circle');\n  } else {\n    todoButtonIcon.classList.add('bi', 'bi-check');\n    todoName.classList.add('text-decoration-line-through');\n  }\n\n  var editButton = _dom__WEBPACK_IMPORTED_MODULE_1__.myCreate('button');\n  editButton.classList.add('btn', 'edit-btn', 'text-white', 'm-1');\n  var editButtonIcon = _dom__WEBPACK_IMPORTED_MODULE_1__.myCreate('i');\n  editButtonIcon.classList.add('bi', 'bi-pencil-square');\n  editButton.appendChild(editButtonIcon);\n  todoButton.appendChild(todoButtonIcon);\n  todoItem.append(todoButton, editButton, todoName);\n  todoButton.addEventListener('click', function () {\n    if (todoList.itemStatus === false) {\n      todoList.itemStatus = true;\n      todoButtonIcon.classList.remove('bi', 'bi-circle');\n      todoButtonIcon.classList.add('bi', 'bi-check');\n      todoName.classList.add('text-decoration-line-through');\n    } else {\n      todoList.itemStatus = false;\n      todoButtonIcon.classList.remove('bi', 'bi-check');\n      todoButtonIcon.classList.add('bi', 'bi-circle');\n      todoName.classList.remove('text-decoration-line-through');\n    }\n\n    localStorage.setItem('projects', JSON.stringify(projects));\n  });\n  editButton.addEventListener('click', function () {\n    var formElement = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('#submit-edit-form');\n    var formSubmit = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('#submit-form');\n\n    if (formElement.classList.contains('d-none')) {\n      formElement.classList.remove('d-none');\n      formSubmit.classList.add('d-none');\n    } else {\n      formElement.classList.add('d-none');\n    }\n\n    var data = {\n      'edit-title': todoList.itemTitle,\n      'edit-description': todoList.itemDescription,\n      'edit-read': todoList.itemDueDate,\n      'edit-priority': todoList.itemPriority\n    };\n    populate_js__WEBPACK_IMPORTED_MODULE_0___default()(formElement, data);\n  });\n  return todoItem;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoList);\n\n//# sourceURL=webpack://JS_ToDoList/./src/createTodoList.js?");

/***/ }),

/***/ "./src/deleteButton.js":
/*!*****************************!*\
  !*** ./src/deleteButton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n\n\n\nvar deleteButton = function deleteButton(projects, projectButton) {\n  var buttonsDiv = _dom__WEBPACK_IMPORTED_MODULE_0__.myQuery('.buttons');\n  var deleteButton = _dom__WEBPACK_IMPORTED_MODULE_0__.myCreate('button');\n  deleteButton.classList.add('btn', 'text-white', 'm-1');\n  deleteButton.innerText = 'Delete Project';\n  buttonsDiv.appendChild(deleteButton);\n  deleteButton.addEventListener('click', function () {\n    var proj = projects.find(function (_ref) {\n      var name = _ref.name;\n      return name === projectButton.nextElementSibling.innerText;\n    });\n    projects = projects.filter(function (project) {\n      return project !== proj;\n    });\n    localStorage.setItem('projects', JSON.stringify(projects));\n    (0,_renderProjects__WEBPACK_IMPORTED_MODULE_1__.default)();\n    window.location.reload();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteButton);\n\n//# sourceURL=webpack://JS_ToDoList/./src/deleteButton.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myQuery\": () => (/* binding */ myQuery),\n/* harmony export */   \"myCreate\": () => (/* binding */ myCreate),\n/* harmony export */   \"myAppend\": () => (/* binding */ myAppend)\n/* harmony export */ });\n// QUERY ELEMENT\nvar myQuery = function myQuery(element) {\n  var documentElement = document.querySelector(element);\n  return documentElement;\n}; // CREATE ELEMENT\n\n\nvar myCreate = function myCreate(type) {\n  var element = document.createElement(type);\n  return element;\n}; // APPEND TO ELEMENT\n\n\nvar myAppend = function myAppend(where, element) {\n  var documentElement = document.querySelector(where);\n  documentElement.appendChild(element);\n};\n\n\n\n//# sourceURL=webpack://JS_ToDoList/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _createTodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodoList */ \"./src/createTodoList.js\");\n/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTodo */ \"./src/addTodo.js\");\n/* harmony import */ var _deleteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteButton */ \"./src/deleteButton.js\");\n/* harmony import */ var _clearButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearButton */ \"./src/clearButton.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todoItem */ \"./src/todoItem.js\");\n\n\n\n\n\n\n\n // CREATE FIRST PROJECTS\n\nvar projects = [{\n  name: 'Your first project',\n  todoList: [{\n    itemTitle: 'Your first todo',\n    itemDescription: 'Finish this',\n    itemDueDate: new Date(2021, 8, 19),\n    itemPriority: 1,\n    itemStatus: false\n  }]\n}]; // GET FROM STORAGE\n\nvar getProjects = function getProjects() {\n  var storage = JSON.parse(localStorage.getItem('projects'));\n\n  if (storage) {\n    projects = [];\n    projects = projects.concat(storage);\n  }\n}; // ADD PROJECTS TO SUBMIT DROPDOWN\n\n\nvar addProjectsToDropdown = function addProjectsToDropdown() {\n  if (projects) {\n    var select = document.getElementById('projects');\n    select.innerHTML = '';\n    projects.forEach(function (project) {\n      select.add(new Option(project.name));\n    });\n  }\n}; // FIND BUTTONS\n\n\nvar findProjectButtons = function findProjectButtons() {\n  var projectButtons = document.querySelectorAll('.project-btn');\n  projectButtons.forEach(function (projectButton, index) {\n    projectButton.addEventListener('click', function () {\n      var todoItemsList = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('.todo-items-list');\n      todoItemsList.innerHTML = '';\n      projects[index].todoList.forEach(function (todoList) {\n        todoItemsList.append((0,_createTodoList__WEBPACK_IMPORTED_MODULE_2__.default)(projects, todoList));\n      });\n      var buttonsDiv = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('.buttons');\n      buttonsDiv.innerHTML = '';\n      (0,_clearButton__WEBPACK_IMPORTED_MODULE_5__.default)(projects, projectButton);\n      (0,_deleteButton__WEBPACK_IMPORTED_MODULE_4__.default)(projects, projectButton);\n    });\n  });\n}; // ADD PROJECT\n\n\nvar addProject = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('.new-project-btn');\naddProject.addEventListener('click', function (e) {\n  e.preventDefault();\n  var projectName = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('#new-project').value;\n\n  if (projectName) {\n    var project = {\n      name: projectName,\n      todoList: [],\n      id: new Date()\n    };\n    projects.push(project);\n  }\n\n  addProjectsToDropdown();\n  (0,_renderProjects__WEBPACK_IMPORTED_MODULE_6__.default)(projects);\n  findProjectButtons();\n  localStorage.setItem('projects', JSON.stringify(projects));\n  addProject.parentNode.parentNode.reset();\n});\n\nvar submitButton = function submitButton() {\n  var submitBtn = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('.submit-btn-new');\n  submitBtn.addEventListener('click', function (todoData) {\n    todoData.preventDefault();\n    var title = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('#title').value;\n    var description = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('#description').value;\n    var dueDate = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('#due-date').value;\n    var priority = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('#priority').value;\n    var project = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('#projects').value;\n    var newTodoItem = (0,_todoItem__WEBPACK_IMPORTED_MODULE_7__.default)(title, description, dueDate, priority, project);\n    projects.find(function (_ref) {\n      var name = _ref.name;\n      return name === newTodoItem.itemProject;\n    }).todoList.push(newTodoItem);\n    var ui = _dom__WEBPACK_IMPORTED_MODULE_1__.myQuery('.todo-items-list');\n    ui.appendChild((0,_createTodoList__WEBPACK_IMPORTED_MODULE_2__.default)(projects, newTodoItem));\n    localStorage.setItem('projects', JSON.stringify(projects));\n  });\n}; // RUN FUNCTIONS\n\n\ngetProjects();\naddProjectsToDropdown();\n(0,_renderProjects__WEBPACK_IMPORTED_MODULE_6__.default)(projects);\nfindProjectButtons();\nsubmitButton();\n\n//# sourceURL=webpack://JS_ToDoList/./src/index.js?");

/***/ }),

/***/ "./src/renderProjects.js":
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\n\nvar renderProjects = function renderProjects(projects) {\n  if (projects) {\n    var projectItemsList = _dom__WEBPACK_IMPORTED_MODULE_0__.myQuery('.project-items-list');\n    projectItemsList.innerHTML = '';\n    projects.forEach(function (project) {\n      projectItemsList.append((0,_createProject__WEBPACK_IMPORTED_MODULE_1__.default)(project));\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProjects);\n\n//# sourceURL=webpack://JS_ToDoList/./src/renderProjects.js?");

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar todoItem = function todoItem(title, description, dueDate, priority, project) {\n  var status = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n  var itemTitle = title;\n  var itemDescription = description;\n  var itemDueDate = dueDate;\n  var itemPriority = priority;\n  var itemProject = project;\n  var itemStatus = status;\n  return {\n    itemTitle: itemTitle,\n    itemDescription: itemDescription,\n    itemDueDate: itemDueDate,\n    itemPriority: itemPriority,\n    itemProject: itemProject,\n    itemStatus: itemStatus\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);\n\n//# sourceURL=webpack://JS_ToDoList/./src/todoItem.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;