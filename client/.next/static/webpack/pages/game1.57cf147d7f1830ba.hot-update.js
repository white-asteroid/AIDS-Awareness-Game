"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game1",{

/***/ "./pages/game1.js":
/*!************************!*\
  !*** ./pages/game1.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_game1_components_QuestionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/game1_components/QuestionsList */ \"./component/game1_components/QuestionsList.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _component_routes_UserRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/routes/UserRoutes */ \"./component/routes/UserRoutes.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n// import QuestionsList from \"../component/game1_components/QuestionsList\";\n\n\n// import {Helmet} from \"react-helmet\";\n// import \"./Game1.module.scss\";\n// import {useContext} from \"react\";\n\n\n\nvar _s = $RefreshSig$();\n// const [state , setState] = useContext(UserContext);\nfunction Game1() {\n    var _this = this;\n    var handleCorrectAnswer = function handleCorrectAnswer(iscorrect) {\n        if (true) {\n            //setScore(score +1);\n            if (iscorrect) setScore(score + 1);\n            setClicked(true);\n        // console.log(\"wrong :\" + iscorrect);\n        // console.log(\"good\");\n        } else {}\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), currentQuestion = ref[0], setCurrentQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), score = ref1[0], setScore = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), clicked = ref2[0], setClicked = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showScore = ref3[0], setShowScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.UserContext), state = ref4[0];\n    if (state && state.Luser) {\n        console.log(state.Luser.email);\n        var email = state.Luser.email;\n    }\n    function putScore() {\n        return _putScore.apply(this, arguments);\n    }\n    function _putScore() {\n        _putScore = _asyncToGenerator(_home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _home_shivam_Documents_learnjs_MernStackPRoj_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"passing\");\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"http://localhost:8000/api/game1\", {\n                            score: score,\n                            email: email\n                        });\n                    case 3:\n                        data = _ctx.sent;\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _putScore.apply(this, arguments);\n    }\n    var handleNextQuestion = function() {\n        putScore();\n        setClicked(false);\n        if (currentQuestion < _component_game1_components_QuestionsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n        } else {\n            setShowScore(true);\n            putScore();\n        // const Gdata = await axios\n        // .post(\"http://localhost:8000/api/game1\", {\n        //   score,\n        // })\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_routes_UserRoutes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \" main-body\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"app-wrapper\",\n                children: showScore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"completed\",\n                            children: \"Completed!\"\n                        }, void 0, false, {\n                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"score-section\",\n                            children: [\n                                \"Your Score: \",\n                                score,\n                                \"/\",\n                                _component_game1_components_QuestionsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"question-section-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"question-count\",\n                                    children: [\n                                        \"Question  \",\n                                        currentQuestion + 1,\n                                        \" of \",\n                                        _component_game1_components_QuestionsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"question\",\n                                    children: _component_game1_components_QuestionsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"][currentQuestion].question\n                                }, void 0, false, {\n                                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"answer-section-wrapper\",\n                            children: _component_game1_components_QuestionsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"][currentQuestion].answersList.map(function(answer) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    className: \"answer-list\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        disabled: clicked,\n                                        className: \"answer-button \".concat(clicked && answer.iscorrect ? \"correct\" : \"\"),\n                                        onClick: function() {\n                                            return handleCorrectAnswer(answer.iscorrect);\n                                        },\n                                        children: answer.answer\n                                    }, void 0, false, {\n                                        fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(), false, {\n                                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"next-button\",\n                                onClick: handleNextQuestion,\n                                disabled: !clicked,\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n            lineNumber: 67,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/shivam/Documents/learnjs/MernStackPRoj/client/pages/game1.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Game1, \"ILLrEHaKTJTwPvqkQDj1spPcVww=\");\n_c = Game1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game1);\nvar _c;\n$RefreshReg$(_c, \"Game1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q04sOERBQUN5QixLQUFHO3NDQUNGLDRFQUFDTyxRQUFNO2dDQUNMTixTQUFTLEVBQUMsYUFBYTtnQ0FDdkJRLE9BQU8sRUFBRVgsa0JBQWtCO2dDQUMzQlUsUUFBUSxFQUFFLENBQUNuQixPQUFPOzBDQUNuQixNQUFJOzs7OztvQ0FBUzs7Ozs7Z0NBQ1Y7Ozs7Ozt3QkFDRjs7Ozs7b0JBRUo7Ozs7O2dCQUNBOzs7OztZQUNNLENBQ1o7Q0FDSDtHQWxHUVYsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBbUdkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZTEuanM/ZTk4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSAsdXNlQ29udGV4dCx1c2VFZmZlY3QgfWZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IFF1ZXN0aW9uc0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9nYW1lMV9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3RcIjtcbmltcG9ydCBRdWVzdGlvbnNMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvZ2FtZTFfY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0XCI7XG5pbXBvcnR7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiO1xuLy8gaW1wb3J0IHtIZWxtZXR9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbi8vIGltcG9ydCBcIi4vR2FtZTEubW9kdWxlLnNjc3NcIjtcblxuLy8gaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVc2VyUm91dGUgZnJvbSBcIi4uL2NvbXBvbmVudC9yb3V0ZXMvVXNlclJvdXRlc1wiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gY29uc3QgW3N0YXRlICwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cblxuXG5mdW5jdGlvbiBHYW1lMSgpIHtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93U2NvcmUsIHNldFNob3dTY29yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgaWYoc3RhdGUgJiYgc3RhdGUuTHVzZXIgKSBcbiAge2NvbnNvbGUubG9nKHN0YXRlLkx1c2VyLmVtYWlsKTtcbiAgY29uc3QgZW1haWwgPSBzdGF0ZS5MdXNlci5lbWFpbDt9XG4gIGFzeW5jIGZ1bmN0aW9uIHB1dFNjb3JlKCl7XG4gICAgY29uc29sZS5sb2coXCJwYXNzaW5nXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xuICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nYW1lMVwiLCB7XG4gICAgICBzY29yZSxcbiAgICAgIGVtYWlsLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29ycmVjdEFuc3dlcihpc2NvcnJlY3QpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgLy9zZXRTY29yZShzY29yZSArMSk7XG4gICAgICBpZiAoaXNjb3JyZWN0KVxuICAgICAgICBzZXRTY29yZShzY29yZSArIDEpO1xuICAgICAgc2V0Q2xpY2tlZCh0cnVlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwid3JvbmcgOlwiICsgaXNjb3JyZWN0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ29vZFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIndyb25nIDpcIiArIGlzY29ycmVjdCk7XG4gICAgfVxuXG4gIH1cbiAgY29uc3QgaGFuZGxlTmV4dFF1ZXN0aW9uID0gKCkgPT4ge1xuICAgIHB1dFNjb3JlKCk7XG4gICAgc2V0Q2xpY2tlZChmYWxzZSk7XG4gICAgaWYgKGN1cnJlbnRRdWVzdGlvbiA8IFF1ZXN0aW9uc0xpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTaG93U2NvcmUodHJ1ZSk7XG4gICAgICBwdXRTY29yZSgpO1xuICAgICAgLy8gY29uc3QgR2RhdGEgPSBhd2FpdCBheGlvc1xuICAgICAgLy8gLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dhbWUxXCIsIHtcbiAgICAgIC8vICAgc2NvcmUsXG4gICAgICAvLyB9KVxuICAgICAgXG4gICAgfVxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8VXNlclJvdXRlPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1haW4tYm9keVwiPlxuICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC13cmFwcGVyXCI+XG4gICAgXG4gICAgICB7c2hvd1Njb3JlID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGxldGVkXCI+Q29tcGxldGVkITwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtc2VjdGlvblwiPlxuICAgICAgICAgICAgWW91ciBTY29yZToge3Njb3JlfS97UXVlc3Rpb25zTGlzdC5sZW5ndGh9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLXNlY3Rpb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1jb3VudFwiPlxuICAgICAgICAgICAgICBRdWVzdGlvbiAge2N1cnJlbnRRdWVzdGlvbiArIDF9IG9mIHtRdWVzdGlvbnNMaXN0Lmxlbmd0aH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvblwiPlxuICAgICAgICAgICAgICB7UXVlc3Rpb25zTGlzdFtjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItc2VjdGlvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICB7UXVlc3Rpb25zTGlzdFtjdXJyZW50UXVlc3Rpb25dLmFuc3dlcnNMaXN0Lm1hcCgoYW5zd2VyKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhbnN3ZXItbGlzdFwiIGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjbGlja2VkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYW5zd2VyLWJ1dHRvbiAke2NsaWNrZWQgJiYgYW5zd2VyLmlzY29ycmVjdCA/IFwiY29ycmVjdFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29ycmVjdEFuc3dlcihhbnN3ZXIuaXNjb3JyZWN0KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YW5zd2VyLmFuc3dlcn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5leHQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dFF1ZXN0aW9ufVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNsaWNrZWR9XG4gICAgICAgICAgICA+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9Vc2VyUm91dGU+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBHYW1lMTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJRdWVzdGlvbnNMaXN0IiwidjQiLCJ1dWlkdjQiLCJVc2VyUm91dGUiLCJVc2VyQ29udGV4dCIsImF4aW9zIiwiR2FtZTEiLCJoYW5kbGVDb3JyZWN0QW5zd2VyIiwiaXNjb3JyZWN0Iiwic2V0U2NvcmUiLCJzY29yZSIsInNldENsaWNrZWQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwiY2xpY2tlZCIsInNob3dTY29yZSIsInNldFNob3dTY29yZSIsInN0YXRlIiwiTHVzZXIiLCJlbWFpbCIsInB1dFNjb3JlIiwiZGF0YSIsInBvc3QiLCJoYW5kbGVOZXh0UXVlc3Rpb24iLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJxdWVzdGlvbiIsImFuc3dlcnNMaXN0IiwibWFwIiwiYW5zd2VyIiwibGkiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game1.js\n");

/***/ })

});