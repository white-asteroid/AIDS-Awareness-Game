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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_game2_components_Images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/game2_components/Images */ \"./component/game2_components/Images.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n// import './Game2.css';\n// import { card } from 'react-bootstrap';\n\n// import p1 from \"../game2/Img/img2.jpg\";\n// import Images from \"../component/game2_components/Images\";\n\n\nvar _s = $RefreshSig$();\n// class Images{\n//   image1= \"./assets/img1.webp\";\n// }\nfunction Memorygame() {\n    var _this = this;\n    var flipCard = function flipCard(index) {\n        if (activeCards.length === 0) {\n            setActiveCards([\n                index\n            ]);\n        }\n        if (activeCards.length === 1) {\n            var firstIndex = activeCards[0];\n            var secondIndex = index;\n            if (cards[firstIndex] === cards[secondIndex]) {\n                setPairCounter(counterPair + 1) // alert('You found a pair');\n                ;\n                setFoundPairs(_toConsumableArray(foundPairs).concat([\n                    firstIndex,\n                    secondIndex\n                ]));\n            }\n            setActiveCards(_toConsumableArray(activeCards).concat([\n                index\n            ]));\n        }\n        if (activeCards.length === 2) {\n            setActiveCards([\n                index\n            ]); //third card ko flip karne k liye\n            console.log(\"third\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,lodash__WEBPACK_IMPORTED_MODULE_3__.shuffle)(_toConsumableArray(_component_game2_components_Images__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).concat(_toConsumableArray(_component_game2_components_Images__WEBPACK_IMPORTED_MODULE_2__[\"default\"])))), cards = ref[0], setCards = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), activeCards = ref1[0], setActiveCards = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), foundPairs = ref2[0], setFoundPairs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), counterPair = ref3[0], setPairCounter = ref3[1];\n    if (cards !== null) {\n        console.log(cards);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    counterPair,\n                    \" pairs found so far\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"board\",\n                children: cards.map(function(card, index) {\n                    var flippedToFront = activeCards.indexOf(index) !== -1 || foundPairs.indexOf(index) !== -1; //foundPairs ko flip karaana h ya nhi karana k liye\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-outer \" + (flippedToFront ? \"flipped\" : \"\"),\n                        onClick: function() {\n                            return flipCard(index);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"front\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: card.src,\n                                        alt: \"img\".concat(index)\n                                    }, void 0, false, {\n                                        fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"back\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                            lineNumber: 54,\n                            columnNumber: 14\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                        lineNumber: 53,\n                        columnNumber: 12\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n                lineNumber: 49,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game2.js\",\n        lineNumber: 47,\n        columnNumber: 4\n    }, this);\n}\n_s(Memorygame, \"p4+pU7rSZ/mX7QzpODboS/bqor4=\");\n_c = Memorygame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Memorygame); /*\nimport React,{useState} from 'react';\nimport Images from \"./Images\"\nfunction Kuchbhi(){\n  const [ cards , setCards ] = useState ( [...Images , ...Images ] ) ;\n\n  return(\n    <div >\n      {cards.map((card))}\n      hello <br/>\n      <img src=\"\" alt='hy'/>\n    </div>\n    \n  )\n}\n\nexport default Kuchbhi;\n*/ \nvar _c;\n$RefreshReg$(_c, \"Memorygame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUFhRSxTQUFTLEVBQUksYUFBYSxHQUFHLENBQUVHLGNBQWMsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO3dCQUFHRSxPQUFPLEVBQUU7bUNBQUt0QixRQUFRLENBQUNDLEtBQUssQ0FBQzt5QkFBQTtrQ0FDOUcsNEVBQUNjLEtBQUc7NEJBQUNFLFNBQVMsRUFBRSxNQUFNOzs4Q0FDckIsOERBQUNGLEtBQUc7b0NBQUNFLFNBQVMsRUFBRSxPQUFPOzhDQUNyQiw0RUFBQ00sS0FBRzt3Q0FBQ0MsR0FBRyxFQUFFTCxJQUFJLENBQUNLLEdBQUc7d0NBQUVDLEdBQUcsRUFBSSxLQUFJLENBQVEsT0FBTnhCLEtBQUssQ0FBRTs7Ozs7NkNBQUc7Ozs7O3lDQUN2Qzs4Q0FDTiw4REFBRWMsS0FBRztvQ0FBQ0UsU0FBUyxFQUFFLE1BQU07Ozs7O3lDQUFFOzs7Ozs7aUNBQ3RCO3VCQU5JaEIsS0FBSzs7Ozs2QkFPWixDQUNKO2lCQUNDLENBQUM7Ozs7O29CQUNDOzs7Ozs7WUFDSixDQUNMO0NBQ0g7R0FyRFFGLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQXVEbkIsK0RBQWVBLFVBQVUsRUFBQyxDQUUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZTIuanM/NGY3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0ICcuL0dhbWUyLmNzcyc7XG4vLyBpbXBvcnQgeyBjYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBwMSBmcm9tIFwiLi4vZ2FtZTIvSW1nL2ltZzIuanBnXCI7XG4vLyBpbXBvcnQgSW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnQvZ2FtZTJfY29tcG9uZW50cy9JbWFnZXNcIjtcblxuaW1wb3J0IEltYWdlcyBmcm9tIFwiLi4vY29tcG9uZW50L2dhbWUyX2NvbXBvbmVudHMvSW1hZ2VzXCI7XG5pbXBvcnQge3NodWZmbGUsIHZhbHVlc30gZnJvbSAnbG9kYXNoJztcbi8vIGNsYXNzIEltYWdlc3tcbi8vICAgaW1hZ2UxPSBcIi4vYXNzZXRzL2ltZzEud2VicFwiO1xuLy8gfVxuZnVuY3Rpb24gTWVtb3J5Z2FtZSgpIHsgXG4gICAgY29uc3QgWyBjYXJkcyAsIHNldENhcmRzIF0gPSB1c2VTdGF0ZSAoc2h1ZmZsZShbLi4uSW1hZ2VzICwuLi5JbWFnZXNdKSk7XG4gICAgY29uc3QgW2FjdGl2ZUNhcmRzLCBzZXRBY3RpdmVDYXJkc109IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZm91bmRQYWlycywgc2V0Rm91bmRQYWlyc10gPXVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY291bnRlclBhaXIsIHNldFBhaXJDb3VudGVyXT0gdXNlU3RhdGUoMCk7XG4gICAgaWYoY2FyZHMhPT1udWxsKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmxpcENhcmQoaW5kZXgpe1xuXG4gICAgICBpZihhY3RpdmVDYXJkcy5sZW5ndGg9PT0gMCl7XG4gICAgICAgIHNldEFjdGl2ZUNhcmRzKFtpbmRleF0pO1xuICAgICAgfVxuXG4gICAgICBpZihhY3RpdmVDYXJkcy5sZW5ndGg9PT0gMSl7XG4gICAgICAgIGNvbnN0IGZpcnN0SW5kZXggPSBhY3RpdmVDYXJkc1swXTtcbiAgICAgICAgY29uc3Qgc2Vjb25kSW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZihjYXJkc1tmaXJzdEluZGV4XSA9PT0gY2FyZHNbc2Vjb25kSW5kZXhdKXtcbiAgICAgICAgICBzZXRQYWlyQ291bnRlcihjb3VudGVyUGFpcisxKS8vIGFsZXJ0KCdZb3UgZm91bmQgYSBwYWlyJyk7XG4gICAgICAgICAgc2V0Rm91bmRQYWlycyhbLi4uZm91bmRQYWlycywgZmlyc3RJbmRleCwgc2Vjb25kSW5kZXhdKVxuICAgICAgICB9XG5cbiAgICAgIHNldEFjdGl2ZUNhcmRzKFsuLi5hY3RpdmVDYXJkcywgaW5kZXhdKTtcbiAgICAgIH1cblxuICAgICAgaWYoYWN0aXZlQ2FyZHMubGVuZ3RoPT09IDIpe1xuICAgICAgICBzZXRBY3RpdmVDYXJkcyhbaW5kZXhdKTsgLy90aGlyZCBjYXJkIGtvIGZsaXAga2FybmUgayBsaXllXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcmRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICA8ZGl2PiBcbiAgICAgICAgPGgzPntjb3VudGVyUGFpcn0gcGFpcnMgZm91bmQgc28gZmFyPC9oMz5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgICB7Y2FyZHMubWFwICggKCBjYXJkLCBpbmRleCApID0+IHtcbiAgICAgICAgICBjb25zdCBmbGlwcGVkVG9Gcm9udCA9IChhY3RpdmVDYXJkcy5pbmRleE9mKGluZGV4KSE9PS0xKSB8fCBmb3VuZFBhaXJzLmluZGV4T2YoaW5kZXgpIT09IC0xOyAvL2ZvdW5kUGFpcnMga28gZmxpcCBrYXJhYW5hIGggeWEgbmhpIGthcmFuYSBrIGxpeWVcbiAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWUgPSB7XCJjYXJkLW91dGVyIFwiICsgKCBmbGlwcGVkVG9Gcm9udCA/ICdmbGlwcGVkJyA6ICcnKSB9IG9uQ2xpY2s9eygpPT4gZmxpcENhcmQoaW5kZXgpfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZyb250XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhcmQuc3JjfSBhbHQgPSB7YGltZyR7aW5kZXh9YH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPCBkaXYgY2xhc3NOYW1lID1cImJhY2tcIi8+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1vcnlnYW1lO1xuXG4vKlxuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlcyBmcm9tIFwiLi9JbWFnZXNcIlxuZnVuY3Rpb24gS3VjaGJoaSgpe1xuICBjb25zdCBbIGNhcmRzICwgc2V0Q2FyZHMgXSA9IHVzZVN0YXRlICggWy4uLkltYWdlcyAsIC4uLkltYWdlcyBdICkgO1xuXG4gIHJldHVybihcbiAgICA8ZGl2ID5cbiAgICAgIHtjYXJkcy5tYXAoKGNhcmQpKX1cbiAgICAgIGhlbGxvIDxici8+XG4gICAgICA8aW1nIHNyYz1cIlwiIGFsdD0naHknLz5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBLdWNoYmhpO1xuKi8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlcyIsInNodWZmbGUiLCJ2YWx1ZXMiLCJNZW1vcnlnYW1lIiwiZmxpcENhcmQiLCJpbmRleCIsImFjdGl2ZUNhcmRzIiwibGVuZ3RoIiwic2V0QWN0aXZlQ2FyZHMiLCJmaXJzdEluZGV4Iiwic2Vjb25kSW5kZXgiLCJjYXJkcyIsInNldFBhaXJDb3VudGVyIiwiY291bnRlclBhaXIiLCJzZXRGb3VuZFBhaXJzIiwiZm91bmRQYWlycyIsImNvbnNvbGUiLCJsb2ciLCJzZXRDYXJkcyIsImRpdiIsImgzIiwiY2xhc3NOYW1lIiwibWFwIiwiY2FyZCIsImZsaXBwZWRUb0Zyb250IiwiaW5kZXhPZiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game2.js\n");

/***/ })

});