"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game2",{

/***/ "./pages/game2.js":
/*!************************!*\
  !*** ./pages/game2.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countdown */ \"./node_modules/react-countdown/dist/index.es.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _component_routes_UserRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/routes/UserRoutes */ \"./component/routes/UserRoutes.js\");\n/* harmony import */ var _component_game2_components_Images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/game2_components/Images */ \"./component/game2_components/Images.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n// import './Game2.css';\n\n// import { card } from 'react-bootstrap';\n\n// import p1 from \"../game2/Img/img2.jpg\";\n// import Images from \"../component/game2_components/Images\";\n\n\n\n\n\nvar _s = $RefreshSig$();\n// class Images{\n//   image1= \"./assets/img1.webp\";\n// }\nfunction Memorygame() {\n    var _this = this;\n    var flipCard = // if(cards!==null)\n    // {\n    //   console.log(cards);\n    // }\n    function flipCard(index) {\n        if (activeCards.length === 0) {\n            setActiveCards([\n                index\n            ]);\n        }\n        if (activeCards.length === 1) {\n            var firstIndex = activeCards[0];\n            var secondIndex = index;\n            if (cards[firstIndex] === cards[secondIndex]) {\n                setPairCounter(counterPair + 1); // alert('You found a pair');\n                setFoundPairs(_toConsumableArray(foundPairs).concat([\n                    firstIndex,\n                    secondIndex\n                ]));\n                setDatenow(Date.now());\n            }\n            setActiveCards(_toConsumableArray(activeCards).concat([\n                index\n            ]));\n        }\n        if (activeCards.length === 2) {\n            setActiveCards([\n                index\n            ]); //third card ko flip karne k liye\n            console.log(\"third\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,lodash__WEBPACK_IMPORTED_MODULE_8__.shuffle)(_toConsumableArray(_component_game2_components_Images__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).concat(_toConsumableArray(_component_game2_components_Images__WEBPACK_IMPORTED_MODULE_7__[\"default\"])))), cards = ref[0], setCards = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), activeCards = ref1[0], setActiveCards = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), foundPairs = ref2[0], setFoundPairs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), counterPair = ref3[0], setPairCounter = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.UserContext), state = ref4[0], setState = ref4[1];\n    var router = (0,_component_routes_UserRoutes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    if (state && state.Luser) {\n        console.log(state.Luser.email);\n        var email = state.Luser.email;\n    }\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Date.now()), Datenow = ref5[0], setDatenow = ref5[1];\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState(null);\n        Router.push(\"/\");\n    };\n    function Gameover() {\n        return _Gameover.apply(this, arguments);\n    }\n    function _Gameover() {\n        _Gameover = _asyncToGenerator(_home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"passing\");\n                        data = axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"http://localhost:8000/api/game2\", {\n                            score: counterPair,\n                            email: email\n                        });\n                        logout();\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _Gameover.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_routes_UserRoutes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \".game2-main\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    className: \"game2Heading\",\n                    children: [\n                        counterPair,\n                        \"pairs found so far Time left :\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            date: Number(Datenow) + 15000,\n                            onComplete: Gameover\n                        }, void 0, false, {\n                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"board\",\n                    children: cards.map(function(card, index) {\n                        var flippedToFront = activeCards.indexOf(index) !== -1 || foundPairs.indexOf(index) !== -1; //foundPairs ko flip karaana h ya nhi karana k liye\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card-outer \" + (flippedToFront ? \"flipped\" : \"\"),\n                            onClick: function() {\n                                return flipCard(index);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"card\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"front\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                            src: card.src,\n                                            alt: \"img\".concat(index)\n                                        }, void 0, false, {\n                                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"back\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Memorygame, \"Y6o5K7aB/dagYP89oLWOenHTQPQ=\");\n_c = Memorygame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Memorygame); /*\nimport React,{useState} from 'react';\nimport Images from \"./Images\"\nfunction Kuchbhi(){\n  const [ cards , setCards ] = useState ( [...Images , ...Images ] ) ;\n\n  return(\n    <div >\n      {cards.map((card))}\n      hello <br/>\n      <img src=\"\" alt='hy'/>\n    </div>\n    \n  )\n}\n\nexport default Kuchbhi;\n*/ \nvar _c;\n$RefreshReg$(_c, \"Memorygame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ksS0FBRztvQkFBQ0MsU0FBUyxFQUFDLE9BQU87OEJBQ25CNUIsS0FBSyxDQUFDaUMsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRXhDLEtBQUssRUFBSzt3QkFDMUIsSUFBTXlDLGNBQWMsR0FDbEJ4QyxXQUFXLENBQUN5QyxPQUFPLENBQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFDakNVLFVBQVUsQ0FBQ2dDLE9BQU8sQ0FBQzFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLG1EQUFtRDt3QkFDdkYscUJBQ0UsOERBQUNpQyxLQUFHOzRCQUVGQyxTQUFTLEVBQUUsYUFBYSxHQUFHLENBQUNPLGNBQWMsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDOzRCQUM1REUsT0FBTyxFQUFFO3VDQUFNNUMsUUFBUSxDQUFDQyxLQUFLLENBQUM7NkJBQUE7c0NBRTlCLDRFQUFDaUMsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLE1BQU07O2tEQUNuQiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLE9BQU87a0RBQ3BCLDRFQUFDVSxLQUFHOzRDQUFDQyxHQUFHLEVBQUVMLElBQUksQ0FBQ0ssR0FBRzs0Q0FBRUMsR0FBRyxFQUFFLEtBQUksQ0FBUSxPQUFOOUMsS0FBSyxDQUFFOzs7OztpREFBSTs7Ozs7NkNBQ3RDO2tEQUNOLDhEQUFDaUMsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLE1BQU07Ozs7OzZDQUFHOzs7Ozs7cUNBQ3BCOzJCQVREbEMsS0FBSzs7OztpQ0FVTixDQUNOO3FCQUNILENBQUM7Ozs7O3dCQUNFOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0ksQ0FDWjtDQUNIO0dBM0ZRRixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUE2Rm5CLCtEQUFlQSxVQUFVLEVBQUMsQ0FFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWUyLmpzPzRmNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0ICcuL0dhbWUyLmNzcyc7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gJ3JlYWN0LWNvdW50ZG93bic7XG4vLyBpbXBvcnQgeyBjYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBwMSBmcm9tIFwiLi4vZ2FtZTIvSW1nL2ltZzIuanBnXCI7XG4vLyBpbXBvcnQgSW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnQvZ2FtZTJfY29tcG9uZW50cy9JbWFnZXNcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBVc2VyUm91dGUgZnJvbSBcIi4uL2NvbXBvbmVudC9yb3V0ZXMvVXNlclJvdXRlc1wiO1xuaW1wb3J0IEltYWdlcyBmcm9tIFwiLi4vY29tcG9uZW50L2dhbWUyX2NvbXBvbmVudHMvSW1hZ2VzXCI7XG5pbXBvcnQgeyBzaHVmZmxlLCB2YWx1ZXMgfSBmcm9tIFwibG9kYXNoXCI7XG4vLyBjbGFzcyBJbWFnZXN7XG4vLyAgIGltYWdlMT0gXCIuL2Fzc2V0cy9pbWcxLndlYnBcIjtcbi8vIH1cbmZ1bmN0aW9uIE1lbW9yeWdhbWUoKSB7XG4gIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoc2h1ZmZsZShbLi4uSW1hZ2VzLCAuLi5JbWFnZXNdKSk7XG4gIGNvbnN0IFthY3RpdmVDYXJkcywgc2V0QWN0aXZlQ2FyZHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZm91bmRQYWlycywgc2V0Rm91bmRQYWlyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb3VudGVyUGFpciwgc2V0UGFpckNvdW50ZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gVXNlclJvdXRlKCk7XG4gIGlmKHN0YXRlICYmIHN0YXRlLkx1c2VyICkgXG4gIHtjb25zb2xlLmxvZyhzdGF0ZS5MdXNlci5lbWFpbCk7XG4gIGNvbnN0IGVtYWlsID0gc3RhdGUuTHVzZXIuZW1haWw7fVxuICBjb25zdCBbRGF0ZW5vdyxzZXREYXRlbm93XSA9IHVzZVN0YXRlKERhdGUubm93KCkpO1xuICAvLyBpZihjYXJkcyE9PW51bGwpXG4gIC8vIHtcbiAgLy8gICBjb25zb2xlLmxvZyhjYXJkcyk7XG4gIC8vIH1cbiAgZnVuY3Rpb24gZmxpcENhcmQoaW5kZXgpIHtcbiAgICBpZiAoYWN0aXZlQ2FyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRBY3RpdmVDYXJkcyhbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2FyZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEluZGV4ID0gYWN0aXZlQ2FyZHNbMF07XG4gICAgICBjb25zdCBzZWNvbmRJbmRleCA9IGluZGV4O1xuXG4gICAgICBpZiAoY2FyZHNbZmlyc3RJbmRleF0gPT09IGNhcmRzW3NlY29uZEluZGV4XSkge1xuICAgICAgICBzZXRQYWlyQ291bnRlcihjb3VudGVyUGFpciArIDEpOyAvLyBhbGVydCgnWW91IGZvdW5kIGEgcGFpcicpO1xuICAgICAgICBzZXRGb3VuZFBhaXJzKFsuLi5mb3VuZFBhaXJzLCBmaXJzdEluZGV4LCBzZWNvbmRJbmRleF0pO1xuICAgICAgICBzZXREYXRlbm93KERhdGUubm93KCkpO1xuICAgICAgfVxuXG4gICAgICBzZXRBY3RpdmVDYXJkcyhbLi4uYWN0aXZlQ2FyZHMsIGluZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUNhcmRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgc2V0QWN0aXZlQ2FyZHMoW2luZGV4XSk7IC8vdGhpcmQgY2FyZCBrbyBmbGlwIGthcm5lIGsgbGl5ZVxuICAgICAgY29uc29sZS5sb2coXCJ0aGlyZFwiKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XG4gICAgc2V0U3RhdGUobnVsbCk7XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuICBhc3luYyBmdW5jdGlvbiBHYW1lb3Zlcigpe1xuICAgIGNvbnNvbGUubG9nKFwicGFzc2luZ1wiKTtcbiAgICBjb25zdCBkYXRhID0gIGF4aW9zXG4gICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dhbWUyXCIsIHtcbiAgICAgIHNjb3JlOmNvdW50ZXJQYWlyLFxuICAgICAgZW1haWwsXG4gICAgfSk7XG4gICAgbG9nb3V0KCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxVc2VyUm91dGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIi5nYW1lMi1tYWluXCI+XG4gICAgICAgIFxuXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e1wiZ2FtZTJIZWFkaW5nXCJ9Pntjb3VudGVyUGFpcn0gXG4gICAgICAgICAgcGFpcnMgZm91bmQgc28gZmFyIFRpbWUgbGVmdCA6IFxuICAgICAgICAgIDxDb3VudGRvd24gXG4gICAgICAgICAgICBkYXRlPXtOdW1iZXIoRGF0ZW5vdykrMTUwMDB9IFxuICAgICAgICAgICAgb25Db21wbGV0ZT17R2FtZW92ZXJ9XG4gICAgICAgICAgIFxuICAgICAgICAgICAvPlxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxpcHBlZFRvRnJvbnQgPVxuICAgICAgICAgICAgICBhY3RpdmVDYXJkcy5pbmRleE9mKGluZGV4KSAhPT0gLTEgfHxcbiAgICAgICAgICAgICAgZm91bmRQYWlycy5pbmRleE9mKGluZGV4KSAhPT0gLTE7IC8vZm91bmRQYWlycyBrbyBmbGlwIGthcmFhbmEgaCB5YSBuaGkga2FyYW5hIGsgbGl5ZVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNhcmQtb3V0ZXIgXCIgKyAoZmxpcHBlZFRvRnJvbnQgPyBcImZsaXBwZWRcIiA6IFwiXCIpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZsaXBDYXJkKGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2FyZC5zcmN9IGFsdD17YGltZyR7aW5kZXh9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvVXNlclJvdXRlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1vcnlnYW1lO1xuXG4vKlxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlcyBmcm9tIFwiLi9JbWFnZXNcIlxuZnVuY3Rpb24gS3VjaGJoaSgpe1xuICBjb25zdCBbIGNhcmRzICwgc2V0Q2FyZHMgXSA9IHVzZVN0YXRlICggWy4uLkltYWdlcyAsIC4uLkltYWdlcyBdICkgO1xuXG4gIHJldHVybihcbiAgICA8ZGl2ID5cbiAgICAgIHtjYXJkcy5tYXAoKGNhcmQpKX1cbiAgICAgIGhlbGxvIDxici8+XG4gICAgICA8aW1nIHNyYz1cIlwiIGFsdD0naHknLz5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBLdWNoYmhpO1xuKi9cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZG93biIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJVc2VyUm91dGUiLCJJbWFnZXMiLCJzaHVmZmxlIiwidmFsdWVzIiwiTWVtb3J5Z2FtZSIsImZsaXBDYXJkIiwiaW5kZXgiLCJhY3RpdmVDYXJkcyIsImxlbmd0aCIsInNldEFjdGl2ZUNhcmRzIiwiZmlyc3RJbmRleCIsInNlY29uZEluZGV4IiwiY2FyZHMiLCJzZXRQYWlyQ291bnRlciIsImNvdW50ZXJQYWlyIiwic2V0Rm91bmRQYWlycyIsImZvdW5kUGFpcnMiLCJzZXREYXRlbm93IiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJzZXRDYXJkcyIsInN0YXRlIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJMdXNlciIsImVtYWlsIiwiRGF0ZW5vdyIsImxvZ291dCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwiR2FtZW92ZXIiLCJkYXRhIiwicG9zdCIsInNjb3JlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJkYXRlIiwiTnVtYmVyIiwib25Db21wbGV0ZSIsIm1hcCIsImNhcmQiLCJmbGlwcGVkVG9Gcm9udCIsImluZGV4T2YiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game2.js\n");

/***/ })

});