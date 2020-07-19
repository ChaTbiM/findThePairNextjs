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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Control.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const menu = props => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(127);
      props.changeNumberOfPairs(6);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "6 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(127);
      props.changeNumberOfPairs(8);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "8 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(102);
      props.changeNumberOfPairs(10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "10 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(12);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "12 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(15);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "15 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(18);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "18 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(73.42);
      props.changeNumberOfPairs(21);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "21 pairs"));
};

function gameStatus(props) {
  const tryString = props.numberOfAttempts === 1 ? "try" : "tries";

  if (props.numberOfAttempts > 0) {
    return __jsx(StyledStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, "You found ", props.numberOfFoundPairs, " out of ", props.numberOfPairs, " pairs with", props.numberOfAttempts, " ", tryString, ".");
  } else {
    return __jsx(StyledStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 12
      }
    }, "find All pairs !");
  }
}

function Control(props) {
  return __jsx(ControlContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, props.numberOfPairs, " pairs")), gameStatus(props), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      display: "block",
      margin: "20px auto"
    },
    onClick: () => {
      props.resetGame();
      props.resetCards();
      props.shuffleCards();
      props.limitCards();
      props.duplicateCards();
      props.shuffleCards();
      setTimeout(() => {
        props.flipAllCards();
      }, 1500);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Restart Game"));
}

const mapStateToProps = state => ({
  numberOfPairs: state.numberOfPairs,
  numberOfFoundPairs: state.numberOfFoundPairs,
  numberOfAttempts: state.numberOfAttempts
});

const mapDispatchToProps = dispatch => ({
  changeNumberOfPairs: number => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeNumberOfPairs"])(number)),
  changeWidth: width => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeWidth"])(width)),
  resetGame: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["resetGame"])()),
  resetCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["resetCards"])()),
  shuffleCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["shuffleCards"])()),
  duplicateCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["duplicateCards"])()),
  limitCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["limitCards"])()),
  flipAllCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["flipAllCards"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Control));
const ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Control__ControlContainer",
  componentId: "c4l1my-0"
})(["position:relative;top:25%;transform:translateY(-25%);"]);
const StyledStatus = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "Control__StyledStatus",
  componentId: "c4l1my-1"
})(["display:block;margin:20px auto;padding:0 1rem;"]);

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
    if (props.matching) {
      setTimeout(() => {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.numberOfFoundPairs === props.numberOfPairs) {
      setTimeout(() => {
        alert("YOU WIN ");
      }, 500);
    }
  }, [props.numberOfFoundPairs]);
  return (//   grid Item
    __jsx(GridContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }
    }, props.cards.map((el, index) => {
      // matching  and isActive
      // matching and notActive
      if (el.isActive || el.timed) {
        return __jsx(ImageWrapper, {
          color: "#bbb",
          width: props.width,
          key: "div" + index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }
        }));
      } else if (el.match) {
        return __jsx(ImageWrapper, {
          color: "transparent",
          width: props.width,
          key: "div" + index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }
        });
      } else {
        return __jsx(ImageWrapper, {
          color: "#bbb",
          width: props.width,
          key: "div" + index,
          onClick: () => {
            if (!props.matching) {
              props.flipCard(el.index);
            }
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }
        });
      }
    }))
  );
}

const mapStateToProps = state => ({
  numberOfPairs: state.numberOfPairs,
  numberOfAttempts: state.numberOfAttempts,
  numberOfFoundPairs: state.numberOfFoundPairs,
  cards: state.cards,
  clickCounter: state.clickCounter,
  matching: state.matching,
  width: state.width,
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

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Grid__GridContainer",
  componentId: "v3z7jl-0"
})(["width:520px;height:100vh;margin:0 auto;text-align:center;padding-top:5%;"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Grid__ImageWrapper",
  componentId: "v3z7jl-1"
})(["display:inline-block;margin-right:1px;margin-top:2px;width:", ";height:", ";background-color:", ";overflow:auto;img,.blank{width:", ";height:", ";padding:1px;transform:scaleY(-1);}"], props => props.width + "px", props => props.width + "px", props => props.color, props => props.width + "px", props => props.width + "px");
ImageWrapper.defaultProps = {
  width: 125
};

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
    style: {
      width: "100%",
      margin: "0 auto",
      display: "flex"
    },
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
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(Sider, {
    align: "center",
    theme: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_components_Control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
/*! exports provided: changeNumberOfPairs, startGame, resetGame, shuffleCards, limitCards, duplicateCards, resetCards, flipAllCards, flipCard, changeWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNumberOfPairs", function() { return changeNumberOfPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGame", function() { return resetGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleCards", function() { return shuffleCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitCards", function() { return limitCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateCards", function() { return duplicateCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return resetCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipAllCards", function() { return flipAllCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipCard", function() { return flipCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeWidth", function() { return changeWidth; });
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
function resetGame(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_GAME"],
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
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["LIMIT_CARDS"],
    payload
  };
}
function duplicateCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"],
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
}
function changeWidth(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_WIDTH"],
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
/*! exports provided: CHANGE_NUMBER_OF_PAIRS, START_GAME, SHUFFLE, LIMIT_CARDS, DUPLICATE_CARDS, RESET_CARDS, RESET_GAME, FLIP_ALL_CARDS, FLIP_CARD, CHANGE_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NUMBER_OF_PAIRS", function() { return CHANGE_NUMBER_OF_PAIRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_GAME", function() { return START_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHUFFLE", function() { return SHUFFLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT_CARDS", function() { return LIMIT_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_CARDS", function() { return DUPLICATE_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CARDS", function() { return RESET_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_GAME", function() { return RESET_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_ALL_CARDS", function() { return FLIP_ALL_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_CARD", function() { return FLIP_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_WIDTH", function() { return CHANGE_WIDTH; });
const CHANGE_NUMBER_OF_PAIRS = "CHANGE_NUMBER_OF_PAIRS";
const START_GAME = "START_GAME";
const SHUFFLE = "SHUFFLE";
const LIMIT_CARDS = "LIMIT_CARDS";
const DUPLICATE_CARDS = "DUPLICATE_CARDS";
const RESET_CARDS = "RESET_CARDS";
const RESET_GAME = "RESET_GAME";
const FLIP_ALL_CARDS = "FLIP_ALL_CARDS";
const FLIP_CARD = "FLIP_CARD";
const CHANGE_WIDTH = "CHANGE_WIDTH";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cm9sLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIm1lbnUiLCJwcm9wcyIsImNoYW5nZVdpZHRoIiwiY2hhbmdlTnVtYmVyT2ZQYWlycyIsImdhbWVTdGF0dXMiLCJ0cnlTdHJpbmciLCJudW1iZXJPZkF0dGVtcHRzIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwibnVtYmVyT2ZQYWlycyIsIkNvbnRyb2wiLCJkaXNwbGF5IiwibWFyZ2luIiwicmVzZXRHYW1lIiwicmVzZXRDYXJkcyIsInNodWZmbGVDYXJkcyIsImxpbWl0Q2FyZHMiLCJkdXBsaWNhdGVDYXJkcyIsInNldFRpbWVvdXQiLCJmbGlwQWxsQ2FyZHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibnVtYmVyIiwid2lkdGgiLCJjb25uZWN0IiwiQ29udHJvbENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFN0YXR1cyIsInAiLCJHcmlkIiwidXNlRWZmZWN0IiwibWF0Y2hpbmciLCJhbGVydCIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwidGltZWQiLCJzcmMiLCJtYXRjaCIsImZsaXBDYXJkIiwiY2xpY2tDb3VudGVyIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiRkxJUF9BTExfQ0FSRFMiLCJHcmlkQ29udGFpbmVyIiwiSW1hZ2VXcmFwcGVyIiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiLCJDb250ZW50IiwiU2lkZXIiLCJMYXlvdXQiLCJBcHAiLCJwYXlsb2FkIiwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyIsInN0YXJ0R2FtZSIsInBheWxhb2QiLCJTVEFSVF9HQU1FIiwiUkVTRVRfR0FNRSIsIkZMSVBfQ0FSRCIsIkNIQU5HRV9XSURUSCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFVQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBSUMsS0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1HLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1qQixPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTWUsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTWQsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1lLFNBQVMsR0FBRyxXQUFsQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxjQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGNoYW5nZU51bWJlck9mUGFpcnMsXHJcbiAgY2hhbmdlV2lkdGgsXHJcbiAgcmVzZXRHYW1lLFxyXG4gIHJlc2V0Q2FyZHMsXHJcbiAgc2h1ZmZsZUNhcmRzLFxyXG4gIGxpbWl0Q2FyZHMsXHJcbiAgZHVwbGljYXRlQ2FyZHMsXHJcbiAgZmxpcEFsbENhcmRzLFxyXG59IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgbWVudSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDEyNyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDYpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA2IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoMTI3KTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoOCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDggcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCgxMDIpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDEwIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoODUuMzMpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxMik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDEyIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoODUuMzMpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxNSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDE1IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoODUuMzMpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxOCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDE4IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoNzMuNDIpO1xyXG5cclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMjEpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAyMSBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2FtZVN0YXR1cyhwcm9wcykge1xyXG4gIGNvbnN0IHRyeVN0cmluZyA9IHByb3BzLm51bWJlck9mQXR0ZW1wdHMgPT09IDEgPyBcInRyeVwiIDogXCJ0cmllc1wiO1xyXG4gIGlmIChwcm9wcy5udW1iZXJPZkF0dGVtcHRzID4gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZFN0YXR1cz5cclxuICAgICAgICBZb3UgZm91bmQge3Byb3BzLm51bWJlck9mRm91bmRQYWlyc30gb3V0IG9mIHtwcm9wcy5udW1iZXJPZlBhaXJzfSBwYWlyc1xyXG4gICAgICAgIHdpdGhcclxuICAgICAgICB7cHJvcHMubnVtYmVyT2ZBdHRlbXB0c30ge3RyeVN0cmluZ30uXHJcbiAgICAgIDwvU3R5bGVkU3RhdHVzPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxTdHlsZWRTdGF0dXM+ZmluZCBBbGwgcGFpcnMgITwvU3R5bGVkU3RhdHVzPjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRyb2xDb250YWluZXI+XHJcbiAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51KHByb3BzKX0gcGxhY2VtZW50PVwiYm90dG9tQ2VudGVyXCI+XHJcbiAgICAgICAgPEJ1dHRvbj57cHJvcHMubnVtYmVyT2ZQYWlyc30gcGFpcnM8L0J1dHRvbj5cclxuICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAge2dhbWVTdGF0dXMocHJvcHMpfVxyXG5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjIwcHggYXV0b1wiIH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMucmVzZXRHYW1lKCk7XHJcbiAgICAgICAgICBwcm9wcy5yZXNldENhcmRzKCk7XHJcbiAgICAgICAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICAgICAgICAgIHByb3BzLmxpbWl0Q2FyZHMoKTtcclxuICAgICAgICAgIHByb3BzLmR1cGxpY2F0ZUNhcmRzKCk7XHJcbiAgICAgICAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgUmVzdGFydCBHYW1lXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Db250cm9sQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIG51bWJlck9mRm91bmRQYWlyczogc3RhdGUubnVtYmVyT2ZGb3VuZFBhaXJzLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IHN0YXRlLm51bWJlck9mQXR0ZW1wdHMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGNoYW5nZU51bWJlck9mUGFpcnM6IChudW1iZXIpID0+IGRpc3BhdGNoKGNoYW5nZU51bWJlck9mUGFpcnMobnVtYmVyKSksXHJcbiAgY2hhbmdlV2lkdGg6ICh3aWR0aCkgPT4gZGlzcGF0Y2goY2hhbmdlV2lkdGgod2lkdGgpKSxcclxuICByZXNldEdhbWU6ICgpID0+IGRpc3BhdGNoKHJlc2V0R2FtZSgpKSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaChyZXNldENhcmRzKCkpLFxyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goc2h1ZmZsZUNhcmRzKCkpLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaChkdXBsaWNhdGVDYXJkcygpKSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaChsaW1pdENhcmRzKCkpLFxyXG4gIGZsaXBBbGxDYXJkczogKCkgPT4gZGlzcGF0Y2goZmxpcEFsbENhcmRzKCkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvbnRyb2wpO1xyXG5jb25zdCBDb250cm9sQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNSU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3RhdHVzID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5saW1pdENhcmRzKCk7XHJcbiAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mUGFpcnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm1hdGNoaW5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMubnVtYmVyT2ZGb3VuZFBhaXJzID09PSBwcm9wcy5udW1iZXJPZlBhaXJzKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiWU9VIFdJTiBcIik7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mRm91bmRQYWlyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyBtYXRjaGluZyAgYW5kIGlzQWN0aXZlXHJcbiAgICAgICAgLy8gbWF0Y2hpbmcgYW5kIG5vdEFjdGl2ZVxyXG4gICAgICAgIGlmIChlbC5pc0FjdGl2ZSB8fCBlbC50aW1lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciBjb2xvcj1cIiNiYmJcIiB3aWR0aD17cHJvcHMud2lkdGh9IGtleT17XCJkaXZcIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWwubWF0Y2gpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjYmJiXCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5mbGlwQ2FyZChlbC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KX1cclxuICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxuICBudW1iZXJPZkF0dGVtcHRzOiBzdGF0ZS5udW1iZXJPZkF0dGVtcHRzLFxyXG4gIG51bWJlck9mRm91bmRQYWlyczogc3RhdGUubnVtYmVyT2ZGb3VuZFBhaXJzLFxyXG4gIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICBjbGlja0NvdW50ZXI6IHN0YXRlLmNsaWNrQ291bnRlcixcclxuICBtYXRjaGluZzogc3RhdGUubWF0Y2hpbmcsXHJcbiAgd2lkdGg6IHN0YXRlLndpZHRoLFxyXG4gIG1hdGNoaW5nOiBzdGF0ZS5tYXRjaGluZyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNIVUZGTEUgfSksXHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMSU1JVF9DQVJEUyB9KSxcclxuICBkdXBsaWNhdGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMgfSksXHJcbiAgcmVzZXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9DQVJEUyB9KSxcclxuICBmbGlwQWxsQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRkxJUF9BTExfQ0FSRFMgfSksXHJcbiAgZmxpcENhcmQ6IChpbmRleCkgPT4gZGlzcGF0Y2goZmxpcENhcmQoaW5kZXgpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xyXG5cclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgaW1nLFxyXG4gIC5ibGFuayB7XHJcbiAgICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICAgIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICB9XHJcbmA7XHJcblxyXG5JbWFnZVdyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiAxMjUsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250cm9sXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCIuLi9jb21wb25lbnRzL0dyaWRcIjtcclxuXHJcbmltcG9ydCB7IExJTUlUX0NBUkRTIH0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuY29uc3QgeyBDb250ZW50LCBTaWRlciB9ID0gTGF5b3V0O1xyXG5cclxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW46IFwiMCBhdXRvXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICA8Q29udGVudD5cclxuICAgICAgICA8R3JpZCAvPlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDxTaWRlciBhbGlnbj1cImNlbnRlclwiIHRoZW1lPVwibGlnaHRcIj5cclxuICAgICAgICA8Q29udHJvbCAvPlxyXG4gICAgICA8L1NpZGVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XHJcbiIsImltcG9ydCB7XHJcbiAgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBTVEFSVF9HQU1FLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxuICBDSEFOR0VfV0lEVEgsXHJcbiAgUkVTRVRfR0FNRSxcclxuICBMSU1JVF9DQVJEUyxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU51bWJlck9mUGFpcnMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShwYXlsYW9kKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogU1RBUlRfR0FNRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBSRVNFVF9HQU1FLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFNIVUZGTEUsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbWl0Q2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IExJTUlUX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGVDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRFVQTElDQVRFX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBSRVNFVF9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxpcEFsbENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBGTElQX0FMTF9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxpcENhcmQocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IEZMSVBfQ0FSRCwgcGF5bG9hZCB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VXaWR0aChwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQ0hBTkdFX1dJRFRILCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbi8vIHNodWZmbGUgY2FyZHNcclxuLy8gbGltaXQgdG8gdGhlIG51bWJlciBvZiBwYWlyc1xyXG4vLyAgICAobGltaXQgdGhlIG51bWJlciBvZiBsb29wcyAsIGRvbnQgZGVsZXRlKVxyXG4vLyBtaXJyb3IgY2FyZHNcclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4iLCJleHBvcnQgY29uc3QgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyA9IFwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSU1wiO1xyXG5leHBvcnQgY29uc3QgU1RBUlRfR0FNRSA9IFwiU1RBUlRfR0FNRVwiO1xyXG5leHBvcnQgY29uc3QgU0hVRkZMRSA9IFwiU0hVRkZMRVwiO1xyXG5leHBvcnQgY29uc3QgTElNSVRfQ0FSRFMgPSBcIkxJTUlUX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBEVVBMSUNBVEVfQ0FSRFMgPSBcIkRVUExJQ0FURV9DQVJEU1wiO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSRFMgPSBcIlJFU0VUX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9HQU1FID0gXCJSRVNFVF9HQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBGTElQX0FMTF9DQVJEUyA9IFwiRkxJUF9BTExfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IEZMSVBfQ0FSRCA9IFwiRkxJUF9DQVJEXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1dJRFRIID0gXCJDSEFOR0VfV0lEVEhcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9