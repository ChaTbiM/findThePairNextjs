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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./antd.css":
/*!******************!*\
  !*** ./antd.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/index */ "./redux/index.js");
/* harmony import */ var _antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../antd.css */ "./antd.css");
/* harmony import */ var _antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antd_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => __jsx(Component, _extends({}, pageProps, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 45
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (_redux_index__WEBPACK_IMPORTED_MODULE_1__["wrapper"].withRedux(MyApp));

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

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ "./redux/reducers/index.js");


 // create a makeStore function

const makeStore = context => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"]); // export an assembled wrapper


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const clone = __webpack_require__(/*! rfdc */ "rfdc")();

const initialState = {
  numberOfPairs: 6,
  width: 73,
  clickCounter: 0,
  matching: false,
  matchingCard: null,
  cards: [{
    src: "/images/animals-bunny.jpg",
    isActive: false
  }, {
    src: "/images/animals-cat.jpg",
    isActive: false
  }, {
    src: "/images/animals-cat-2.jpg",
    isActive: false
  }, {
    src: "/images/animals-dog.jpg",
    isActive: false
  }, {
    src: "/images/animals-dog-2.jpg",
    isActive: false
  }, {
    src: "/images/animals-horse.jpg",
    isActive: false
  }, {
    src: "/images/animals-horse-2.jpg",
    isActive: false
  }, {
    src: "/images/architecture-london-towerbridge.jpg",
    isActive: false
  }, {
    src: "/images/architecture-moscow-redsquare.jpg",
    isActive: false
  }, {
    src: "/images/architecture-nederlanden.jpg",
    isActive: false
  }, {
    src: "/images/architecture-newyork-publiclibrary.jpg",
    isActive: false
  }, {
    src: "/images/architecture-paris-eiffeltower.jpg",
    isActive: false
  }, {
    src: "/images/cities-tokyo-night.jpg",
    isActive: false
  }, {
    src: "/images/flowers-reddahlia.jpg",
    isActive: false
  }, {
    src: "/images/flowers-waterlillies.jpg",
    isActive: false
  }, {
    src: "/images/flowers-windclock.jpg",
    isActive: false
  }, {
    src: "/images/landscape-1.jpg",
    isActive: false
  }, {
    src: "/images/landscape-2.jpg",
    isActive: false
  }, {
    src: "/images/landscape-2.jpg",
    isActive: false
  }, {
    src: "/images/landscape-netherlands-deurningen.jpg",
    isActive: false
  }, {
    src: "/images/landscape-us-edgewood.jpg",
    isActive: false
  }]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NUMBER_OF_PAIRS"]:
      return Object.assign({}, state, {
        numberOfPairs: action.payload
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["START_GAME"]:
      return Object.assign({}, state, {
        gameState: "playing"
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_CARDS"]:
      let initialCards = initialState.cards;
      return Object.assign({}, state, {
        cards: initialCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE"]:
      let array = state.cards;
      let len = array.length - 1;

      for (let i = len; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return Object.assign({}, state, {
        cards: [...array]
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["LIMIT_CARDS"]:
      let limitedCards = state.cards;
      limitedCards.splice(state.numberOfPairs);
      return Object.assign({}, state, {
        cards: [...limitedCards]
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"]:
      let duplicatedCards1 = clone(state.cards);
      let duplicatedCards2 = clone(state.cards);
      let newDuplicatedCards = [...duplicatedCards1, ...duplicatedCards2];
      newDuplicatedCards.forEach((el, index) => {
        el.index = index;
        el.isActive = true;
        el.match = false;
      });
      return Object.assign({}, state, {
        cards: newDuplicatedCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_ALL_CARDS"]:
      let flipedCards = state.cards;
      flipedCards.forEach((el, index) => {
        if (el.match === false) {
          el.isActive = false;
        }
      });
      return Object.assign({}, state, {
        cards: [...flipedCards],
        matching: false
      });

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_CARD"]:
      let flippedCardIndex = state.cards.findIndex(el => el.index === action.payload);
      let allCards = clone(state.cards); // flip first card and remember it

      if (state.clickCounter === 0) {
        let newCounter = state.clickCounter;
        newCounter++;
        let allCards = clone(state.cards);
        allCards.forEach(el => {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        });
        let firstFlippedCard = allCards[flippedCardIndex];
        return Object.assign({}, state, {
          cards: [...allCards],
          clickCounter: newCounter,
          matchingCard: firstFlippedCard
        });
      } else if (state.clickCounter === 1) {
        let newCounter = 0; // flip Second Card

        allCards.forEach(el => {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        }); // does the two cards match ?

        if (state.matchingCard.src === allCards[flippedCardIndex].src) {
          allCards.forEach(el => {
            if (el.src === state.matchingCard.src) {
              el.match = true;
            }
          });
        }

        return Object.assign({}, state, {
          cards: [...allCards],
          clickCounter: newCounter,
          matching: true,
          matchingCard: initialState.matchingCard
        });
      } // flip second card and change match:true for both


      break;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer); // for(let i = array.length — 1; i > 0; i--){
//   const j = Math.floor(Math.random() * i)
//   const temp = array[i]
//   array[i] = array[j]
//   array[j] = temp
// }

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rfdc":
/*!***********************!*\
  !*** external "rfdc" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rfdc");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJmZGNcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjaGFuZ2VOdW1iZXJPZlBhaXJzIiwicGF5bG9hZCIsInR5cGUiLCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTIiwic3RhcnRHYW1lIiwicGF5bGFvZCIsIlNUQVJUX0dBTUUiLCJzaHVmZmxlQ2FyZHMiLCJTSFVGRkxFIiwibGltaXRDYXJkcyIsIkRVUExJQ0FURV9DQVJEUyIsIm1pcnJvckNhcmRzIiwiTUlSUk9SX0NBUkRTIiwicmVzZXRDYXJkcyIsIlJFU0VUX0NBUkRTIiwiZmxpcEFsbENhcmRzIiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwQ2FyZCIsIkZMSVBfQ0FSRCIsIkxJTUlUX0NBUkRTIiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJjbGlja0NvdW50ZXIiLCJtYXRjaGluZyIsIm1hdGNoaW5nQ2FyZCIsImNhcmRzIiwic3JjIiwiaXNBY3RpdmUiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJPYmplY3QiLCJhc3NpZ24iLCJnYW1lU3RhdGUiLCJpbml0aWFsQ2FyZHMiLCJhcnJheSIsImxlbiIsImxlbmd0aCIsImkiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsImxpbWl0ZWRDYXJkcyIsInNwbGljZSIsImR1cGxpY2F0ZWRDYXJkczEiLCJkdXBsaWNhdGVkQ2FyZHMyIiwibmV3RHVwbGljYXRlZENhcmRzIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJtYXRjaCIsImZsaXBlZENhcmRzIiwiZmxpcHBlZENhcmRJbmRleCIsImZpbmRJbmRleCIsImFsbENhcmRzIiwibmV3Q291bnRlciIsImZpcnN0RmxpcHBlZENhcmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QixNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVDOztBQUVlQyxtSEFBTyxDQUFDQyxTQUFSLENBQWtCSixLQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVTyxTQUFTSyxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsU0FBTztBQUFFQyxRQUFJLEVBQUVDLDhFQUFSO0FBQWdDRjtBQUFoQyxHQUFQO0FBQ0Q7QUFFTSxTQUFTRyxTQUFULENBQW1CQyxPQUFuQixFQUE0QjtBQUNqQyxTQUFPO0FBQUVILFFBQUksRUFBRUksa0VBQVI7QUFBb0JMO0FBQXBCLEdBQVA7QUFDRDtBQUVNLFNBQVNNLFlBQVQsQ0FBc0JOLE9BQXRCLEVBQStCO0FBQ3BDLFNBQU87QUFBRUMsUUFBSSxFQUFFTSwrREFBUjtBQUFpQlA7QUFBakIsR0FBUDtBQUNEO0FBRU0sU0FBU1EsVUFBVCxDQUFvQlIsT0FBcEIsRUFBNkI7QUFDbEMsU0FBTztBQUFFQyxRQUFJLEVBQUVRLHVFQUFSO0FBQXlCVDtBQUF6QixHQUFQO0FBQ0Q7QUFFTSxTQUFTVSxXQUFULENBQXFCVixPQUFyQixFQUE4QjtBQUNuQyxTQUFPO0FBQUVDLFFBQUksRUFBRVUsWUFBUjtBQUFzQlg7QUFBdEIsR0FBUDtBQUNEO0FBRU0sU0FBU1ksVUFBVCxDQUFvQlosT0FBcEIsRUFBNkI7QUFDbEMsU0FBTztBQUFFQyxRQUFJLEVBQUVZLG1FQUFSO0FBQXFCYjtBQUFyQixHQUFQO0FBQ0Q7QUFFTSxTQUFTYyxZQUFULENBQXNCZCxPQUF0QixFQUErQjtBQUNwQyxTQUFPO0FBQUVDLFFBQUksRUFBRWMsc0VBQVI7QUFBd0JmO0FBQXhCLEdBQVA7QUFDRDtBQUVNLFNBQVNnQixRQUFULENBQWtCaEIsT0FBbEIsRUFBMkI7QUFDaEMsU0FBTztBQUFFQyxRQUFJLEVBQUVnQixpRUFBUjtBQUFtQmpCO0FBQW5CLEdBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQjs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1FLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1HLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1FLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1XLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1ULGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNSSxXQUFXLEdBQUcsYUFBcEI7QUFFQSxNQUFNRSxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUUsU0FBUyxHQUFHLFdBQWxCLEM7Ozs7Ozs7Ozs7OztBQ1JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUdBOztBQUNBLE1BQU1FLFNBQVMsR0FBSUMsT0FBRCxJQUFhQyx5REFBVyxDQUFDQyx1REFBRCxDQUExQyxDLENBRUE7OztBQUNPLE1BQU16QixPQUFPLEdBQUcwQix3RUFBYSxDQUFDSixTQUFELEVBQVk7QUFBRUssT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQO0FBVUE7QUFDQTs7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsa0JBQUQsQ0FBUCxFQUFkOztBQUVBLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsZUFBYSxFQUFFLENBREk7QUFFbkJDLE9BQUssRUFBRSxFQUZZO0FBR25CQyxjQUFZLEVBQUUsQ0FISztBQUluQkMsVUFBUSxFQUFFLEtBSlM7QUFLbkJDLGNBQVksRUFBRSxJQUxLO0FBTW5CQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxPQUFHLEVBQUUsMkJBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FESyxFQUtMO0FBQ0VELE9BQUcsRUFBRSx5QkFEUDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQUxLLEVBU0w7QUFDRUQsT0FBRyxFQUFFLDJCQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBVEssRUFhTDtBQUNFRCxPQUFHLEVBQUUseUJBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FiSyxFQWlCTDtBQUNFRCxPQUFHLEVBQUUsMkJBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FqQkssRUFxQkw7QUFDRUQsT0FBRyxFQUFFLDJCQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBckJLLEVBeUJMO0FBQ0VELE9BQUcsRUFBRSw2QkFEUDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQXpCSyxFQTZCTDtBQUNFRCxPQUFHLEVBQUUsNkNBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0E3QkssRUFpQ0w7QUFDRUQsT0FBRyxFQUFFLDJDQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBakNLLEVBcUNMO0FBQ0VELE9BQUcsRUFBRSxzQ0FEUDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQXJDSyxFQXlDTDtBQUNFRCxPQUFHLEVBQUUsZ0RBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0F6Q0ssRUE2Q0w7QUFDRUQsT0FBRyxFQUFFLDRDQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBN0NLLEVBaURMO0FBQ0VELE9BQUcsRUFBRSxnQ0FEUDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQWpESyxFQXFETDtBQUNFRCxPQUFHLEVBQUUsK0JBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FyREssRUF5REw7QUFDRUQsT0FBRyxFQUFFLGtDQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBekRLLEVBNkRMO0FBQ0VELE9BQUcsRUFBRSwrQkFEUDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQTdESyxFQWlFTDtBQUNFRCxPQUFHLEVBQUUseUJBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FqRUssRUFxRUw7QUFDRUQsT0FBRyxFQUFFLHlCQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBckVLLEVBeUVMO0FBQ0VELE9BQUcsRUFBRSx5QkFEUDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQXpFSyxFQTZFTDtBQUNFRCxPQUFHLEVBQUUsOENBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0E3RUssRUFpRkw7QUFDRUQsT0FBRyxFQUFFLG1DQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBakZLO0FBTlksQ0FBckI7O0FBOEZBLFNBQVNiLFdBQVQsQ0FBcUJjLEtBQUssR0FBR1QsWUFBN0IsRUFBMkNVLE1BQTNDLEVBQW1EO0FBQ2pELFVBQVFBLE1BQU0sQ0FBQ3BDLElBQWY7QUFDRSxTQUFLcUMsMERBQUw7QUFDRSw2Q0FBWUYsS0FBWixHQUFzQkMsTUFBTSxDQUFDckMsT0FBN0I7QUFDQTs7QUFDRixTQUFLRSw4RUFBTDtBQUNFLGFBQU9xQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSixLQUFsQixFQUF5QjtBQUM5QlIscUJBQWEsRUFBRVMsTUFBTSxDQUFDckM7QUFEUSxPQUF6QixDQUFQO0FBR0E7O0FBQ0YsU0FBS0ssa0VBQUw7QUFDRSxhQUFPa0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFBRUssaUJBQVMsRUFBRTtBQUFiLE9BQXpCLENBQVA7QUFDQTs7QUFDRixTQUFLNUIsbUVBQUw7QUFDRSxVQUFJNkIsWUFBWSxHQUFHZixZQUFZLENBQUNNLEtBQWhDO0FBRUEsYUFBT00sTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFBRUgsYUFBSyxFQUFFUztBQUFULE9BQXpCLENBQVA7QUFDQTs7QUFDRixTQUFLbkMsK0RBQUw7QUFDRSxVQUFJb0MsS0FBSyxHQUFHUCxLQUFLLENBQUNILEtBQWxCO0FBQ0EsVUFBSVcsR0FBRyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sR0FBZSxDQUF6Qjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBR0YsR0FBYixFQUFrQkUsQ0FBQyxHQUFHLENBQXRCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0FBQzVCLGNBQU1DLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkosQ0FBM0IsQ0FBVjtBQUNBLGNBQU1LLElBQUksR0FBR1IsS0FBSyxDQUFDRyxDQUFELENBQWxCO0FBQ0FILGFBQUssQ0FBQ0csQ0FBRCxDQUFMLEdBQVdILEtBQUssQ0FBQ0ksQ0FBRCxDQUFoQjtBQUNBSixhQUFLLENBQUNJLENBQUQsQ0FBTCxHQUFXSSxJQUFYO0FBQ0Q7O0FBQ0QsYUFBT1osTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFBRUgsYUFBSyxFQUFFLENBQUMsR0FBR1UsS0FBSjtBQUFULE9BQXpCLENBQVA7QUFDQTs7QUFDRixTQUFLekIsbUVBQUw7QUFDRSxVQUFJa0MsWUFBWSxHQUFHaEIsS0FBSyxDQUFDSCxLQUF6QjtBQUVBbUIsa0JBQVksQ0FBQ0MsTUFBYixDQUFvQmpCLEtBQUssQ0FBQ1IsYUFBMUI7QUFFQSxhQUFPVyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSixLQUFsQixFQUF5QjtBQUFFSCxhQUFLLEVBQUUsQ0FBQyxHQUFHbUIsWUFBSjtBQUFULE9BQXpCLENBQVA7QUFDQTs7QUFDRixTQUFLM0MsdUVBQUw7QUFDRSxVQUFJNkMsZ0JBQWdCLEdBQUc3QixLQUFLLENBQUNXLEtBQUssQ0FBQ0gsS0FBUCxDQUE1QjtBQUNBLFVBQUlzQixnQkFBZ0IsR0FBRzlCLEtBQUssQ0FBQ1csS0FBSyxDQUFDSCxLQUFQLENBQTVCO0FBRUEsVUFBSXVCLGtCQUFrQixHQUFHLENBQUMsR0FBR0YsZ0JBQUosRUFBc0IsR0FBR0MsZ0JBQXpCLENBQXpCO0FBQ0FDLHdCQUFrQixDQUFDQyxPQUFuQixDQUEyQixDQUFDQyxFQUFELEVBQUtDLEtBQUwsS0FBZTtBQUN4Q0QsVUFBRSxDQUFDQyxLQUFILEdBQVdBLEtBQVg7QUFDQUQsVUFBRSxDQUFDdkIsUUFBSCxHQUFjLElBQWQ7QUFDQXVCLFVBQUUsQ0FBQ0UsS0FBSCxHQUFXLEtBQVg7QUFDRCxPQUpEO0FBTUEsYUFBT3JCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLEtBQWxCLEVBQXlCO0FBQzlCSCxhQUFLLEVBQUV1QjtBQUR1QixPQUF6QixDQUFQO0FBR0E7O0FBQ0YsU0FBS3pDLHNFQUFMO0FBQ0UsVUFBSThDLFdBQVcsR0FBR3pCLEtBQUssQ0FBQ0gsS0FBeEI7QUFDQTRCLGlCQUFXLENBQUNKLE9BQVosQ0FBb0IsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEtBQWU7QUFDakMsWUFBSUQsRUFBRSxDQUFDRSxLQUFILEtBQWEsS0FBakIsRUFBd0I7QUFDdEJGLFlBQUUsQ0FBQ3ZCLFFBQUgsR0FBYyxLQUFkO0FBQ0Q7QUFDRixPQUpEO0FBS0EsYUFBT0ksTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDOUJILGFBQUssRUFBRSxDQUFDLEdBQUc0QixXQUFKLENBRHVCO0FBRTlCOUIsZ0JBQVEsRUFBRTtBQUZvQixPQUF6QixDQUFQOztBQUlGLFNBQUtkLGlFQUFMO0FBQ0UsVUFBSTZDLGdCQUFnQixHQUFHMUIsS0FBSyxDQUFDSCxLQUFOLENBQVk4QixTQUFaLENBQ3BCTCxFQUFELElBQVFBLEVBQUUsQ0FBQ0MsS0FBSCxLQUFhdEIsTUFBTSxDQUFDckMsT0FEUCxDQUF2QjtBQUdBLFVBQUlnRSxRQUFRLEdBQUd2QyxLQUFLLENBQUNXLEtBQUssQ0FBQ0gsS0FBUCxDQUFwQixDQUpGLENBS0U7O0FBQ0EsVUFBSUcsS0FBSyxDQUFDTixZQUFOLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCLFlBQUltQyxVQUFVLEdBQUc3QixLQUFLLENBQUNOLFlBQXZCO0FBQ0FtQyxrQkFBVTtBQUVWLFlBQUlELFFBQVEsR0FBR3ZDLEtBQUssQ0FBQ1csS0FBSyxDQUFDSCxLQUFQLENBQXBCO0FBRUErQixnQkFBUSxDQUFDUCxPQUFULENBQWtCQyxFQUFELElBQVE7QUFDdkIsY0FBSUEsRUFBRSxDQUFDQyxLQUFILEtBQWF0QixNQUFNLENBQUNyQyxPQUF4QixFQUFpQztBQUMvQjBELGNBQUUsQ0FBQ3ZCLFFBQUgsR0FBYyxJQUFkO0FBQ0Q7QUFDRixTQUpEO0FBTUEsWUFBSStCLGdCQUFnQixHQUFHRixRQUFRLENBQUNGLGdCQUFELENBQS9CO0FBQ0EsZUFBT3ZCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLEtBQWxCLEVBQXlCO0FBQzlCSCxlQUFLLEVBQUUsQ0FBQyxHQUFHK0IsUUFBSixDQUR1QjtBQUU5QmxDLHNCQUFZLEVBQUVtQyxVQUZnQjtBQUc5QmpDLHNCQUFZLEVBQUVrQztBQUhnQixTQUF6QixDQUFQO0FBS0QsT0FsQkQsTUFrQk8sSUFBSTlCLEtBQUssQ0FBQ04sWUFBTixLQUF1QixDQUEzQixFQUE4QjtBQUNuQyxZQUFJbUMsVUFBVSxHQUFHLENBQWpCLENBRG1DLENBR25DOztBQUNBRCxnQkFBUSxDQUFDUCxPQUFULENBQWtCQyxFQUFELElBQVE7QUFDdkIsY0FBSUEsRUFBRSxDQUFDQyxLQUFILEtBQWF0QixNQUFNLENBQUNyQyxPQUF4QixFQUFpQztBQUMvQjBELGNBQUUsQ0FBQ3ZCLFFBQUgsR0FBYyxJQUFkO0FBQ0Q7QUFDRixTQUpELEVBSm1DLENBVW5DOztBQUNBLFlBQUlDLEtBQUssQ0FBQ0osWUFBTixDQUFtQkUsR0FBbkIsS0FBMkI4QixRQUFRLENBQUNGLGdCQUFELENBQVIsQ0FBMkI1QixHQUExRCxFQUErRDtBQUM3RDhCLGtCQUFRLENBQUNQLE9BQVQsQ0FBa0JDLEVBQUQsSUFBUTtBQUN2QixnQkFBSUEsRUFBRSxDQUFDeEIsR0FBSCxLQUFXRSxLQUFLLENBQUNKLFlBQU4sQ0FBbUJFLEdBQWxDLEVBQXVDO0FBQ3JDd0IsZ0JBQUUsQ0FBQ0UsS0FBSCxHQUFXLElBQVg7QUFDRDtBQUNGLFdBSkQ7QUFLRDs7QUFFRCxlQUFPckIsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUI7QUFDOUJILGVBQUssRUFBRSxDQUFDLEdBQUcrQixRQUFKLENBRHVCO0FBRTlCbEMsc0JBQVksRUFBRW1DLFVBRmdCO0FBRzlCbEMsa0JBQVEsRUFBRSxJQUhvQjtBQUk5QkMsc0JBQVksRUFBRUwsWUFBWSxDQUFDSztBQUpHLFNBQXpCLENBQVA7QUFNRCxPQWpESCxDQW1ERTs7O0FBRUE7O0FBQ0Y7QUFDRSxhQUFPSSxLQUFQO0FBcEhKO0FBc0hEOztBQUVjZCwwRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09BLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L2luZGV4XCI7XHJcbmltcG9ydCBcIi4uL2FudGQuY3NzXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCB7XHJcbiAgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBTVEFSVF9HQU1FLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU51bWJlck9mUGFpcnMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShwYXlsYW9kKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogU1RBUlRfR0FNRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBTSFVGRkxFLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW1pdENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pcnJvckNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBNSVJST1JfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFJFU0VUX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwQWxsQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IEZMSVBfQUxMX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwQ2FyZChwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRkxJUF9DQVJELCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbi8vIHNodWZmbGUgY2FyZHNcclxuLy8gbGltaXQgdG8gdGhlIG51bWJlciBvZiBwYWlyc1xyXG4vLyAgICAobGltaXQgdGhlIG51bWJlciBvZiBsb29wcyAsIGRvbnQgZGVsZXRlKVxyXG4vLyBtaXJyb3IgY2FyZHNcclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4iLCJleHBvcnQgY29uc3QgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyA9IFwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSU1wiO1xyXG5leHBvcnQgY29uc3QgU1RBUlRfR0FNRSA9IFwiU1RBUlRfR0FNRVwiO1xyXG5leHBvcnQgY29uc3QgU0hVRkZMRSA9IFwiU0hVRkZMRVwiO1xyXG5leHBvcnQgY29uc3QgTElNSVRfQ0FSRFMgPSBcIkxJTUlUX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBEVVBMSUNBVEVfQ0FSRFMgPSBcIkRVUExJQ0FURV9DQVJEU1wiO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSRFMgPSBcIlJFU0VUX0NBUkRTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRkxJUF9BTExfQ0FSRFMgPSBcIkZMSVBfQUxMX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBGTElQX0NBUkQgPSBcIkZMSVBfQ0FSRFwiO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIpO1xyXG5cclxuLy8gZXhwb3J0IGFuIGFzc2VtYmxlZCB3cmFwcGVyXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcbiIsImltcG9ydCB7XHJcbiAgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyxcclxuICBTSFVGRkxFLFxyXG4gIExJTUlUX0NBUkRTLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBTVEFSVF9HQU1FLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBjbG9uZSA9IHJlcXVpcmUoXCJyZmRjXCIpKCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbnVtYmVyT2ZQYWlyczogNixcclxuICB3aWR0aDogNzMsXHJcbiAgY2xpY2tDb3VudGVyOiAwLFxyXG4gIG1hdGNoaW5nOiBmYWxzZSxcclxuICBtYXRjaGluZ0NhcmQ6IG51bGwsXHJcbiAgY2FyZHM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1idW5ueS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1sb25kb24tdG93ZXJicmlkZ2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1tb3Njb3ctcmVkc3F1YXJlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmVkZXJsYW5kZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZXd5b3JrLXB1YmxpY2xpYnJhcnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1wYXJpcy1laWZmZWx0b3dlci5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvY2l0aWVzLXRva3lvLW5pZ2h0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXJlZGRhaGxpYS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13YXRlcmxpbGxpZXMuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2luZGNsb2NrLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtbmV0aGVybGFuZHMtZGV1cm5pbmdlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLXVzLWVkZ2V3b29kLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByb290UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlM6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG51bWJlck9mUGFpcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNUQVJUX0dBTUU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBnYW1lU3RhdGU6IFwicGxheWluZ1wiIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVTRVRfQ0FSRFM6XHJcbiAgICAgIGxldCBpbml0aWFsQ2FyZHMgPSBpbml0aWFsU3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IGluaXRpYWxDYXJkcyB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNIVUZGTEU6XHJcbiAgICAgIGxldCBhcnJheSA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBsZXQgbGVuID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uYXJyYXldIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElNSVRfQ0FSRFM6XHJcbiAgICAgIGxldCBsaW1pdGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIGxpbWl0ZWRDYXJkcy5zcGxpY2Uoc3RhdGUubnVtYmVyT2ZQYWlycyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5saW1pdGVkQ2FyZHNdIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRFVQTElDQVRFX0NBUkRTOlxyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMSA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczIgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICBsZXQgbmV3RHVwbGljYXRlZENhcmRzID0gWy4uLmR1cGxpY2F0ZWRDYXJkczEsIC4uLmR1cGxpY2F0ZWRDYXJkczJdO1xyXG4gICAgICBuZXdEdXBsaWNhdGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaW5kZXggPSBpbmRleDtcclxuICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWwubWF0Y2ggPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogbmV3RHVwbGljYXRlZENhcmRzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZMSVBfQUxMX0NBUkRTOlxyXG4gICAgICBsZXQgZmxpcGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgZmxpcGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm1hdGNoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogWy4uLmZsaXBlZENhcmRzXSxcclxuICAgICAgICBtYXRjaGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgY2FzZSBGTElQX0NBUkQ6XHJcbiAgICAgIGxldCBmbGlwcGVkQ2FyZEluZGV4ID0gc3RhdGUuY2FyZHMuZmluZEluZGV4KFxyXG4gICAgICAgIChlbCkgPT4gZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBhbGxDYXJkcyA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgLy8gZmxpcCBmaXJzdCBjYXJkIGFuZCByZW1lbWJlciBpdFxyXG4gICAgICBpZiAoc3RhdGUuY2xpY2tDb3VudGVyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSBzdGF0ZS5jbGlja0NvdW50ZXI7XHJcbiAgICAgICAgbmV3Q291bnRlcisrO1xyXG5cclxuICAgICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0RmxpcHBlZENhcmQgPSBhbGxDYXJkc1tmbGlwcGVkQ2FyZEluZGV4XTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4uYWxsQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgbWF0Y2hpbmdDYXJkOiBmaXJzdEZsaXBwZWRDYXJkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgLy8gZmxpcCBTZWNvbmQgQ2FyZFxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZG9lcyB0aGUgdHdvIGNhcmRzIG1hdGNoID9cclxuICAgICAgICBpZiAoc3RhdGUubWF0Y2hpbmdDYXJkLnNyYyA9PT0gYWxsQ2FyZHNbZmxpcHBlZENhcmRJbmRleF0uc3JjKSB7XHJcbiAgICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwuc3JjID09PSBzdGF0ZS5tYXRjaGluZ0NhcmQuc3JjKSB7XHJcbiAgICAgICAgICAgICAgZWwubWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2FyZHM6IFsuLi5hbGxDYXJkc10sXHJcbiAgICAgICAgICBjbGlja0NvdW50ZXI6IG5ld0NvdW50ZXIsXHJcbiAgICAgICAgICBtYXRjaGluZzogdHJ1ZSxcclxuICAgICAgICAgIG1hdGNoaW5nQ2FyZDogaW5pdGlhbFN0YXRlLm1hdGNoaW5nQ2FyZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZmxpcCBzZWNvbmQgY2FyZCBhbmQgY2hhbmdlIG1hdGNoOnRydWUgZm9yIGJvdGhcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG4vLyBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgg4oCUIDE7IGkgPiAwOyBpLS0pe1xyXG4vLyAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKVxyXG4vLyAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXVxyXG4vLyAgIGFycmF5W2ldID0gYXJyYXlbal1cclxuLy8gICBhcnJheVtqXSA9IHRlbXBcclxuLy8gfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmZkY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9