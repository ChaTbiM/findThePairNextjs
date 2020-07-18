module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Control.jsx":
/*!********************************!*\
  !*** ./components/Control.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Control.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const pairs = [6, 8, 10, 12, 15, 18, 21];

const menu = props => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => props.changeNumberOfPairs(6),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "6 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => props.changeNumberOfPairs(8),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "8 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => props.changeNumberOfPairs(10),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "10 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => props.changeNumberOfPairs(12),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "12 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => props.changeNumberOfPairs(15),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "15 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => props.changeNumberOfPairs(18),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "18 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => props.changeNumberOfPairs(21),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "21 pairs"));
};

function Control(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, props.numberOfPairs, " pairs"));
}

const mapStateToProps = state => ({
  numberOfPairs: state.numberOfPairs
});

const mapDispatchToProps = dispatch => ({
  changeNumberOfPairs: number => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeNumberOfPairs"])(number))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Control));

/***/ }),

/***/ "./components/Grid.jsx":
/*!*****************************!*\
  !*** ./components/Grid.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/constants/action-types */ "./redux/constants/action-types.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");
var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Grid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Grid(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();
    setTimeout(() => {
      props.flipAllCards();
    }, 1500);
  }, [props.numberOfPairs]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("here", props.matching);

    if (props.matching) {
      setTimeout(() => {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);
  return (//   grid Item
    __jsx("gridContainer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }
    }, props.cards.map((el, index) => {
      if (el.isActive) {
        return __jsx("div", {
          key: "div" + index,
          style: {
            margin: " 1px",
            float: "left",
            display: "inline-block",
            height: "125px",
            width: "125px",
            backgroundColor: "#bbb"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }
        }));
      } else {
        return __jsx("div", {
          key: "div" + index,
          onClick: () => props.flipCard(el.index),
          style: {
            margin: " 1px",
            display: "inline-block",
            float: "left",
            height: "125px",
            width: "125px",
            backgroundColor: "#bbb"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }
        });
      }
    }))
  );
}

const mapStateToProps = state => ({
  numberOfPairs: state.numberOfPairs,
  cards: state.cards,
  clickCounter: state.clickCounter,
  matching: state.matching
});

const mapDispatchToProps = dispatch => ({
  shuffleCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["SHUFFLE"]
  }),
  limitCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["LIMIT_CARDS"]
  }),
  duplicateCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["DUPLICATE_CARDS"]
  }),
  resetCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["RESET_CARDS"]
  }),
  flipAllCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FLIP_ALL_CARDS"]
  }),
  flipCard: index => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_4__["flipCard"])(index))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Grid)); // ---------------------------------

const gridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Grid__gridContainer",
  componentId: "v3z7jl-0"
})(["width:520px;height:520px;margin:5px auto;"]);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Control */ "./components/Control.jsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Grid */ "./components/Grid.jsx");
/* harmony import */ var _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/constants/action-types */ "./redux/constants/action-types.js");
var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const {
  Content,
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];

function App(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(Sider, {
    theme: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_components_Control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })));
}

const mapStateToProps = state => ({
  cards: state.cards,
  numberOfPairs: state.numberOfPairs
});

const mapDispatchToProps = dispatch => ({
  limitCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_6__["LIMIT_CARDS"]
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: changeNumberOfPairs, startGame, shuffleCards, limitCards, mirrorCards, resetCards, flipAllCards, flipCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNumberOfPairs", function() { return changeNumberOfPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleCards", function() { return shuffleCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitCards", function() { return limitCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorCards", function() { return mirrorCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return resetCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipAllCards", function() { return flipAllCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipCard", function() { return flipCard; });
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");

function changeNumberOfPairs(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NUMBER_OF_PAIRS"],
    payload
  };
}
function startGame(paylaod) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["START_GAME"],
    payload
  };
}
function shuffleCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE"],
    payload
  };
}
function limitCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"],
    payload
  };
}
function mirrorCards(payload) {
  return {
    type: MIRROR_CARDS,
    payload
  };
}
function resetCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_CARDS"],
    payload
  };
}
function flipAllCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_ALL_CARDS"],
    payload
  };
}
function flipCard(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_CARD"],
    payload
  };
} // shuffle cards
// limit to the number of pairs
//    (limit the number of loops , dont delete)
// mirror cards
// shuffle cards

/***/ }),

/***/ "./redux/constants/action-types.js":
/*!*****************************************!*\
  !*** ./redux/constants/action-types.js ***!
  \*****************************************/
/*! exports provided: CHANGE_NUMBER_OF_PAIRS, START_GAME, SHUFFLE, LIMIT_CARDS, DUPLICATE_CARDS, RESET_CARDS, FLIP_ALL_CARDS, FLIP_CARD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NUMBER_OF_PAIRS", function() { return CHANGE_NUMBER_OF_PAIRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_GAME", function() { return START_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHUFFLE", function() { return SHUFFLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT_CARDS", function() { return LIMIT_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_CARDS", function() { return DUPLICATE_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CARDS", function() { return RESET_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_ALL_CARDS", function() { return FLIP_ALL_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_CARD", function() { return FLIP_CARD; });
const CHANGE_NUMBER_OF_PAIRS = "CHANGE_NUMBER_OF_PAIRS";
const START_GAME = "START_GAME";
const SHUFFLE = "SHUFFLE";
const LIMIT_CARDS = "LIMIT_CARDS";
const DUPLICATE_CARDS = "DUPLICATE_CARDS";
const RESET_CARDS = "RESET_CARDS";
const FLIP_ALL_CARDS = "FLIP_ALL_CARDS";
const FLIP_CARD = "FLIP_CARD";

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chatb\Desktop\Code\nextJS\find-the-pair\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cm9sLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInBhaXJzIiwibWVudSIsInByb3BzIiwiY2hhbmdlTnVtYmVyT2ZQYWlycyIsIkNvbnRyb2wiLCJudW1iZXJPZlBhaXJzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm51bWJlciIsImNvbm5lY3QiLCJHcmlkIiwidXNlRWZmZWN0IiwicmVzZXRDYXJkcyIsInNodWZmbGVDYXJkcyIsImxpbWl0Q2FyZHMiLCJkdXBsaWNhdGVDYXJkcyIsInNldFRpbWVvdXQiLCJmbGlwQWxsQ2FyZHMiLCJjb25zb2xlIiwibG9nIiwibWF0Y2hpbmciLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJpc0FjdGl2ZSIsIm1hcmdpbiIsImZsb2F0IiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwiZmxpcENhcmQiLCJjbGlja0NvdW50ZXIiLCJ0eXBlIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJGTElQX0FMTF9DQVJEUyIsImdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW50IiwiU2lkZXIiLCJMYXlvdXQiLCJBcHAiLCJwYXlsb2FkIiwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyIsInN0YXJ0R2FtZSIsInBheWxhb2QiLCJTVEFSVF9HQU1FIiwibWlycm9yQ2FyZHMiLCJNSVJST1JfQ0FSRFMiLCJGTElQX0NBUkQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxFQUFQLEVBQVcsRUFBWCxFQUFlLEVBQWYsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsQ0FBZDs7QUFFQSxNQUFNQyxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUN0QixTQUNFLE1BQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBTyxFQUFFLE1BQU1BLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEIsQ0FBMUIsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxXQUFPLEVBQUUsTUFBTUQsS0FBSyxDQUFDQyxtQkFBTixDQUEwQixDQUExQixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFPRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRSxNQUFNRCxLQUFLLENBQUNDLG1CQUFOLENBQTBCLEVBQTFCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsRUFVRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRSxNQUFNRCxLQUFLLENBQUNDLG1CQUFOLENBQTBCLEVBQTFCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsRUFhRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRSxNQUFNRCxLQUFLLENBQUNDLG1CQUFOLENBQTBCLEVBQTFCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsRUFnQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxXQUFPLEVBQUUsTUFBTUQsS0FBSyxDQUFDQyxtQkFBTixDQUEwQixFQUExQixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRixFQW1CRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRSxNQUFNRCxLQUFLLENBQUNDLG1CQUFOLENBQTBCLEVBQTFCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGLENBREY7QUF5QkQsQ0ExQkQ7O0FBMkJBLFNBQVNDLE9BQVQsQ0FBaUJGLEtBQWpCLEVBQXdCO0FBQ3RCLFNBQ0UsTUFBQyw2Q0FBRDtBQUFVLFdBQU8sRUFBRUQsSUFBSSxDQUFDQyxLQUFELENBQXZCO0FBQWdDLGFBQVMsRUFBQyxjQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNBLEtBQUssQ0FBQ0csYUFBZixXQURGLENBREY7QUFLRDs7QUFFRCxNQUFNQyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0YsZUFBYSxFQUFFRSxLQUFLLENBQUNGO0FBRGEsQ0FBWixDQUF4Qjs7QUFJQSxNQUFNRyxrQkFBa0IsR0FBSUMsUUFBRCxLQUFlO0FBQ3hDTixxQkFBbUIsRUFBR08sTUFBRCxJQUFZRCxRQUFRLENBQUNOLGdGQUFtQixDQUFDTyxNQUFELENBQXBCO0FBREQsQ0FBZixDQUEzQjs7QUFJZUMsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNKLE9BQTdDLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7QUFFQSxTQUFTUSxJQUFULENBQWNWLEtBQWQsRUFBcUI7QUFDbkJXLHlEQUFTLENBQUMsTUFBTTtBQUNkWCxTQUFLLENBQUNZLFVBQU47QUFDQVosU0FBSyxDQUFDYSxZQUFOO0FBQ0FiLFNBQUssQ0FBQ2MsVUFBTjtBQUNBZCxTQUFLLENBQUNlLGNBQU47QUFDQWYsU0FBSyxDQUFDYSxZQUFOO0FBRUFHLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZoQixXQUFLLENBQUNpQixZQUFOO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBVlEsRUFVTixDQUFDakIsS0FBSyxDQUFDRyxhQUFQLENBVk0sQ0FBVDtBQVlBUSx5REFBUyxDQUFDLE1BQU07QUFDZE8sV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQm5CLEtBQUssQ0FBQ29CLFFBQTFCOztBQUNBLFFBQUlwQixLQUFLLENBQUNvQixRQUFWLEVBQW9CO0FBQ2xCSixnQkFBVSxDQUFDLE1BQU07QUFDZmhCLGFBQUssQ0FBQ2lCLFlBQU47QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFDRixHQVBRLEVBT04sQ0FBQ2pCLEtBQUssQ0FBQ29CLFFBQVAsQ0FQTSxDQUFUO0FBU0EsU0FDRTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3BCLEtBQUssQ0FBQ3FCLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixDQUFDQyxFQUFELEVBQUtDLEtBQUwsS0FBZTtBQUM5QixVQUFJRCxFQUFFLENBQUNFLFFBQVAsRUFBaUI7QUFDZixlQUNFO0FBQ0UsYUFBRyxFQUFFLFFBQVFELEtBRGY7QUFFRSxlQUFLLEVBQUU7QUFDTEUsa0JBQU0sRUFBRSxNQURIO0FBRUxDLGlCQUFLLEVBQUUsTUFGRjtBQUdMQyxtQkFBTyxFQUFFLGNBSEo7QUFJTEMsa0JBQU0sRUFBRSxPQUpIO0FBS0xDLGlCQUFLLEVBQUUsT0FMRjtBQU1MQywyQkFBZSxFQUFFO0FBTlosV0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBV0U7QUFBSyxhQUFHLEVBQUVSLEVBQUUsQ0FBQ1MsR0FBSCxHQUFTUixLQUFuQjtBQUEwQix3QkFBWUQsRUFBRSxDQUFDQyxLQUF6QztBQUFnRCxhQUFHLEVBQUVELEVBQUUsQ0FBQ1MsR0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVhGLENBREY7QUFlRCxPQWhCRCxNQWdCTztBQUNMLGVBQ0U7QUFDRSxhQUFHLEVBQUUsUUFBUVIsS0FEZjtBQUVFLGlCQUFPLEVBQUUsTUFBTXhCLEtBQUssQ0FBQ2lDLFFBQU4sQ0FBZVYsRUFBRSxDQUFDQyxLQUFsQixDQUZqQjtBQUdFLGVBQUssRUFBRTtBQUNMRSxrQkFBTSxFQUFFLE1BREg7QUFFTEUsbUJBQU8sRUFBRSxjQUZKO0FBR0xELGlCQUFLLEVBQUUsTUFIRjtBQUlMRSxrQkFBTSxFQUFFLE9BSkg7QUFLTEMsaUJBQUssRUFBRSxPQUxGO0FBTUxDLDJCQUFlLEVBQUU7QUFOWixXQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEO0FBQ0YsS0FqQ0EsQ0FESDtBQUZGO0FBdUNEOztBQUVELE1BQU0zQixlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0YsZUFBYSxFQUFFRSxLQUFLLENBQUNGLGFBRGE7QUFFbENrQixPQUFLLEVBQUVoQixLQUFLLENBQUNnQixLQUZxQjtBQUdsQ2EsY0FBWSxFQUFFN0IsS0FBSyxDQUFDNkIsWUFIYztBQUlsQ2QsVUFBUSxFQUFFZixLQUFLLENBQUNlO0FBSmtCLENBQVosQ0FBeEI7O0FBT0EsTUFBTWQsa0JBQWtCLEdBQUlDLFFBQUQsS0FBZTtBQUN4Q00sY0FBWSxFQUFFLE1BQU1OLFFBQVEsQ0FBQztBQUFFNEIsUUFBSSxFQUFFQyxxRUFBT0E7QUFBZixHQUFELENBRFk7QUFFeEN0QixZQUFVLEVBQUUsTUFBTVAsUUFBUSxDQUFDO0FBQUU0QixRQUFJLEVBQUVFLHlFQUFXQTtBQUFuQixHQUFELENBRmM7QUFHeEN0QixnQkFBYyxFQUFFLE1BQU1SLFFBQVEsQ0FBQztBQUFFNEIsUUFBSSxFQUFFRyw2RUFBZUE7QUFBdkIsR0FBRCxDQUhVO0FBSXhDMUIsWUFBVSxFQUFFLE1BQU1MLFFBQVEsQ0FBQztBQUFFNEIsUUFBSSxFQUFFSSx5RUFBV0E7QUFBbkIsR0FBRCxDQUpjO0FBS3hDdEIsY0FBWSxFQUFFLE1BQU1WLFFBQVEsQ0FBQztBQUFFNEIsUUFBSSxFQUFFSyw0RUFBY0E7QUFBdEIsR0FBRCxDQUxZO0FBTXhDUCxVQUFRLEVBQUdULEtBQUQsSUFBV2pCLFFBQVEsQ0FBQzBCLHFFQUFRLENBQUNULEtBQUQsQ0FBVDtBQU5XLENBQWYsQ0FBM0I7O0FBU2VmLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDSSxJQUE3QyxDQUFmLEUsQ0FFQTs7QUFDQSxNQUFNK0IsYUFBYSxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BQU07QUFBRUMsU0FBRjtBQUFXQztBQUFYLElBQXFCQywyQ0FBM0I7O0FBRUEsU0FBU0MsR0FBVCxDQUFhL0MsS0FBYixFQUFvQjtBQUNsQixTQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVFFLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLENBREY7QUFjRDs7QUFFRCxNQUFNSSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ2dCLE9BQUssRUFBRWhCLEtBQUssQ0FBQ2dCLEtBRHFCO0FBRWxDbEIsZUFBYSxFQUFFRSxLQUFLLENBQUNGO0FBRmEsQ0FBWixDQUF4Qjs7QUFLQSxNQUFNRyxrQkFBa0IsR0FBSUMsUUFBRCxLQUFlO0FBQ3hDTyxZQUFVLEVBQUUsTUFBTVAsUUFBUSxDQUFDO0FBQUU0QixRQUFJLEVBQUVFLHlFQUFXQTtBQUFuQixHQUFEO0FBRGMsQ0FBZixDQUEzQjs7QUFJZTVCLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDeUMsR0FBN0MsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVPLFNBQVM5QyxtQkFBVCxDQUE2QitDLE9BQTdCLEVBQXNDO0FBQzNDLFNBQU87QUFBRWIsUUFBSSxFQUFFYyw4RUFBUjtBQUFnQ0Q7QUFBaEMsR0FBUDtBQUNEO0FBRU0sU0FBU0UsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDakMsU0FBTztBQUFFaEIsUUFBSSxFQUFFaUIsa0VBQVI7QUFBb0JKO0FBQXBCLEdBQVA7QUFDRDtBQUVNLFNBQVNuQyxZQUFULENBQXNCbUMsT0FBdEIsRUFBK0I7QUFDcEMsU0FBTztBQUFFYixRQUFJLEVBQUVDLCtEQUFSO0FBQWlCWTtBQUFqQixHQUFQO0FBQ0Q7QUFFTSxTQUFTbEMsVUFBVCxDQUFvQmtDLE9BQXBCLEVBQTZCO0FBQ2xDLFNBQU87QUFBRWIsUUFBSSxFQUFFRyx1RUFBUjtBQUF5QlU7QUFBekIsR0FBUDtBQUNEO0FBRU0sU0FBU0ssV0FBVCxDQUFxQkwsT0FBckIsRUFBOEI7QUFDbkMsU0FBTztBQUFFYixRQUFJLEVBQUVtQixZQUFSO0FBQXNCTjtBQUF0QixHQUFQO0FBQ0Q7QUFFTSxTQUFTcEMsVUFBVCxDQUFvQm9DLE9BQXBCLEVBQTZCO0FBQ2xDLFNBQU87QUFBRWIsUUFBSSxFQUFFSSxtRUFBUjtBQUFxQlM7QUFBckIsR0FBUDtBQUNEO0FBRU0sU0FBUy9CLFlBQVQsQ0FBc0IrQixPQUF0QixFQUErQjtBQUNwQyxTQUFPO0FBQUViLFFBQUksRUFBRUssc0VBQVI7QUFBd0JRO0FBQXhCLEdBQVA7QUFDRDtBQUVNLFNBQVNmLFFBQVQsQ0FBa0JlLE9BQWxCLEVBQTJCO0FBQ2hDLFNBQU87QUFBRWIsUUFBSSxFQUFFb0IsaUVBQVI7QUFBbUJQO0FBQW5CLEdBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQjs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1HLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1oQixPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1lLFNBQVMsR0FBRyxXQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VOdW1iZXJPZlBhaXJzIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgTWVudSwgQnV0dG9uLCBEcm9wZG93biB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBwYWlycyA9IFs2LCA4LCAxMCwgMTIsIDE1LCAxOCwgMjFdO1xyXG5cclxuY29uc3QgbWVudSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDYpfT5cclxuICAgICAgICA2IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoOCl9PlxyXG4gICAgICAgIDggcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxMCl9PlxyXG4gICAgICAgIDEwIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTIpfT5cclxuICAgICAgICAxMiBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDE1KX0+XHJcbiAgICAgICAgMTUgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxOCl9PlxyXG4gICAgICAgIDE4IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMjEpfT5cclxuICAgICAgICAyMSBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5mdW5jdGlvbiBDb250cm9sKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51KHByb3BzKX0gcGxhY2VtZW50PVwiYm90dG9tQ2VudGVyXCI+XHJcbiAgICAgIDxCdXR0b24+e3Byb3BzLm51bWJlck9mUGFpcnN9IHBhaXJzPC9CdXR0b24+XHJcbiAgICA8L0Ryb3Bkb3duPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBjaGFuZ2VOdW1iZXJPZlBhaXJzOiAobnVtYmVyKSA9PiBkaXNwYXRjaChjaGFuZ2VOdW1iZXJPZlBhaXJzKG51bWJlcikpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvbnRyb2wpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5saW1pdENhcmRzKCk7XHJcbiAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mUGFpcnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiLCBwcm9wcy5tYXRjaGluZyk7XHJcbiAgICBpZiAocHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5tYXRjaGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxncmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWwuaXNBY3RpdmUpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIiAxcHhcIixcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2JiYlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZmxpcENhcmQoZWwuaW5kZXgpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiIDFweFwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYmJiXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9ncmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICBjbGlja0NvdW50ZXI6IHN0YXRlLmNsaWNrQ291bnRlcixcclxuICBtYXRjaGluZzogc3RhdGUubWF0Y2hpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTSFVGRkxFIH0pLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRFVQTElDQVRFX0NBUkRTIH0pLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfQ0FSRFMgfSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZMSVBfQUxMX0NBUkRTIH0pLFxyXG4gIGZsaXBDYXJkOiAoaW5kZXgpID0+IGRpc3BhdGNoKGZsaXBDYXJkKGluZGV4KSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JpZCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgZ3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUyMHB4O1xyXG4gIGhlaWdodDogNTIwcHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBDb250cm9sIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRyb2xcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvR3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgTElNSVRfQ0FSRFMgfSBmcm9tIFwiLi4vcmVkdXgvY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5jb25zdCB7IENvbnRlbnQsIFNpZGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycyg5MCl9PmNoYW5nZTwvYnV0dG9uPlxyXG4gICAgICA8ZGl2Pm51bWJlciBvZiBwYWlycyA6IHtwcm9wcy5udW1iZXJPZlBhaXJzfTwvZGl2PlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+QnV0dG9uPC9CdXR0b24+ICovfVxyXG5cclxuICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgPEdyaWQgLz5cclxuICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8U2lkZXIgdGhlbWU9XCJsaWdodFwiPlxyXG4gICAgICAgIDxDb250cm9sIC8+XHJcbiAgICAgIDwvU2lkZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcclxuIiwiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTnVtYmVyT2ZQYWlycyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQ0hBTkdFX05VTUJFUl9PRl9QQUlSUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKHBheWxhb2QpIHtcclxuICByZXR1cm4geyB0eXBlOiBTVEFSVF9HQU1FLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFNIVUZGTEUsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbWl0Q2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IERVUExJQ0FURV9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlycm9yQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IE1JUlJPUl9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUkVTRVRfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBBbGxDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRkxJUF9BTExfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBDYXJkKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBGTElQX0NBUkQsIHBheWxvYWQgfTtcclxufVxyXG5cclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4vLyBsaW1pdCB0byB0aGUgbnVtYmVyIG9mIHBhaXJzXHJcbi8vICAgIChsaW1pdCB0aGUgbnVtYmVyIG9mIGxvb3BzICwgZG9udCBkZWxldGUpXHJcbi8vIG1pcnJvciBjYXJkc1xyXG4vLyBzaHVmZmxlIGNhcmRzXHJcbiIsImV4cG9ydCBjb25zdCBDSEFOR0VfTlVNQkVSX09GX1BBSVJTID0gXCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTXCI7XHJcbmV4cG9ydCBjb25zdCBTVEFSVF9HQU1FID0gXCJTVEFSVF9HQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTSFVGRkxFID0gXCJTSFVGRkxFXCI7XHJcbmV4cG9ydCBjb25zdCBMSU1JVF9DQVJEUyA9IFwiTElNSVRfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IERVUExJQ0FURV9DQVJEUyA9IFwiRFVQTElDQVRFX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJEUyA9IFwiUkVTRVRfQ0FSRFNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGTElQX0FMTF9DQVJEUyA9IFwiRkxJUF9BTExfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IEZMSVBfQ0FSRCA9IFwiRkxJUF9DQVJEXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==