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
/*! exports provided: changeNumberOfPairs, startGame, shuffleCards, limitCards, mirrorCards, resetCards, flipAllCards, flipCard, changeWidth */
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
/*! exports provided: CHANGE_NUMBER_OF_PAIRS, START_GAME, SHUFFLE, LIMIT_CARDS, DUPLICATE_CARDS, RESET_CARDS, FLIP_ALL_CARDS, FLIP_CARD, CHANGE_WIDTH */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_WIDTH", function() { return CHANGE_WIDTH; });
const CHANGE_NUMBER_OF_PAIRS = "CHANGE_NUMBER_OF_PAIRS";
const START_GAME = "START_GAME";
const SHUFFLE = "SHUFFLE";
const LIMIT_CARDS = "LIMIT_CARDS";
const DUPLICATE_CARDS = "DUPLICATE_CARDS";
const RESET_CARDS = "RESET_CARDS";
const FLIP_ALL_CARDS = "FLIP_ALL_CARDS";
const FLIP_CARD = "FLIP_CARD";
const CHANGE_WIDTH = "CHANGE_WIDTH";

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
  width: 127,
  isLoading: true,
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
      let numberOfPairs = action.payload;
      return Object.assign({}, state, {
        numberOfPairs
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_WIDTH"]:
      let width = action.payload;
      return Object.assign({}, state, {
        width
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

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJmZGNcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjaGFuZ2VOdW1iZXJPZlBhaXJzIiwicGF5bG9hZCIsInR5cGUiLCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTIiwic3RhcnRHYW1lIiwicGF5bGFvZCIsIlNUQVJUX0dBTUUiLCJzaHVmZmxlQ2FyZHMiLCJTSFVGRkxFIiwibGltaXRDYXJkcyIsIkRVUExJQ0FURV9DQVJEUyIsIm1pcnJvckNhcmRzIiwiTUlSUk9SX0NBUkRTIiwicmVzZXRDYXJkcyIsIlJFU0VUX0NBUkRTIiwiZmxpcEFsbENhcmRzIiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwQ2FyZCIsIkZMSVBfQ0FSRCIsImNoYW5nZVdpZHRoIiwiQ0hBTkdFX1dJRFRIIiwiTElNSVRfQ0FSRFMiLCJtYWtlU3RvcmUiLCJjb250ZXh0IiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImNsb25lIiwicmVxdWlyZSIsImluaXRpYWxTdGF0ZSIsIm51bWJlck9mUGFpcnMiLCJ3aWR0aCIsImlzTG9hZGluZyIsImNsaWNrQ291bnRlciIsIm1hdGNoaW5nIiwibWF0Y2hpbmdDYXJkIiwiY2FyZHMiLCJzcmMiLCJpc0FjdGl2ZSIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsIk9iamVjdCIsImFzc2lnbiIsImdhbWVTdGF0ZSIsImluaXRpYWxDYXJkcyIsImFycmF5IiwibGVuIiwibGVuZ3RoIiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwibGltaXRlZENhcmRzIiwic3BsaWNlIiwiZHVwbGljYXRlZENhcmRzMSIsImR1cGxpY2F0ZWRDYXJkczIiLCJuZXdEdXBsaWNhdGVkQ2FyZHMiLCJmb3JFYWNoIiwiZWwiLCJpbmRleCIsIm1hdGNoIiwiZmxpcGVkQ2FyZHMiLCJmbGlwcGVkQ2FyZEluZGV4IiwiZmluZEluZGV4IiwiYWxsQ2FyZHMiLCJuZXdDb3VudGVyIiwiZmlyc3RGbGlwcGVkQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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RCxjQUFFLENBQUN2QixRQUFILEdBQWMsSUFBZDtBQUNEO0FBQ0YsU0FKRCxFQUptQyxDQVVuQzs7QUFDQSxZQUFJQyxLQUFLLENBQUNKLFlBQU4sQ0FBbUJFLEdBQW5CLEtBQTJCOEIsUUFBUSxDQUFDRixnQkFBRCxDQUFSLENBQTJCNUIsR0FBMUQsRUFBK0Q7QUFDN0Q4QixrQkFBUSxDQUFDUCxPQUFULENBQWtCQyxFQUFELElBQVE7QUFDdkIsZ0JBQUlBLEVBQUUsQ0FBQ3hCLEdBQUgsS0FBV0UsS0FBSyxDQUFDSixZQUFOLENBQW1CRSxHQUFsQyxFQUF1QztBQUNyQ3dCLGdCQUFFLENBQUNFLEtBQUgsR0FBVyxJQUFYO0FBQ0Q7QUFDRixXQUpEO0FBS0Q7O0FBRUQsZUFBT3JCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLEtBQWxCLEVBQXlCO0FBQzlCSCxlQUFLLEVBQUUsQ0FBQyxHQUFHK0IsUUFBSixDQUR1QjtBQUU5QmxDLHNCQUFZLEVBQUVtQyxVQUZnQjtBQUc5QmxDLGtCQUFRLEVBQUUsSUFIb0I7QUFJOUJDLHNCQUFZLEVBQUVOLFlBQVksQ0FBQ007QUFKRyxTQUF6QixDQUFQO0FBTUQsT0FqREgsQ0FtREU7OztBQUVBOztBQUNGO0FBQ0UsYUFBT0ksS0FBUDtBQTNISjtBQTZIRDs7QUFFY2YsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvT0EsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvaW5kZXhcIjtcclxuaW1wb3J0IFwiLi4vYW50ZC5jc3NcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIiwiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU51bWJlck9mUGFpcnMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShwYXlsYW9kKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogU1RBUlRfR0FNRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBTSFVGRkxFLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW1pdENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pcnJvckNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBNSVJST1JfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFJFU0VUX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwQWxsQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IEZMSVBfQUxMX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwQ2FyZChwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRkxJUF9DQVJELCBwYXlsb2FkIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpZHRoKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBDSEFOR0VfV0lEVEgsIHBheWxvYWQgfTtcclxufVxyXG5cclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4vLyBsaW1pdCB0byB0aGUgbnVtYmVyIG9mIHBhaXJzXHJcbi8vICAgIChsaW1pdCB0aGUgbnVtYmVyIG9mIGxvb3BzICwgZG9udCBkZWxldGUpXHJcbi8vIG1pcnJvciBjYXJkc1xyXG4vLyBzaHVmZmxlIGNhcmRzXHJcbiIsImV4cG9ydCBjb25zdCBDSEFOR0VfTlVNQkVSX09GX1BBSVJTID0gXCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTXCI7XHJcbmV4cG9ydCBjb25zdCBTVEFSVF9HQU1FID0gXCJTVEFSVF9HQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTSFVGRkxFID0gXCJTSFVGRkxFXCI7XHJcbmV4cG9ydCBjb25zdCBMSU1JVF9DQVJEUyA9IFwiTElNSVRfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IERVUExJQ0FURV9DQVJEUyA9IFwiRFVQTElDQVRFX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJEUyA9IFwiUkVTRVRfQ0FSRFNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGTElQX0FMTF9DQVJEUyA9IFwiRkxJUF9BTExfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IEZMSVBfQ0FSRCA9IFwiRkxJUF9DQVJEXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1dJRFRIID0gXCJDSEFOR0VfV0lEVEhcIjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBMSU1JVF9DQVJEUyxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbiAgQ0hBTkdFX1dJRFRILFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcInJmZGNcIikoKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBudW1iZXJPZlBhaXJzOiA2LFxyXG4gIHdpZHRoOiAxMjcsXHJcbiAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gIGNsaWNrQ291bnRlcjogMCxcclxuICBtYXRjaGluZzogZmFsc2UsXHJcbiAgbWF0Y2hpbmdDYXJkOiBudWxsLFxyXG4gIGNhcmRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtYnVubnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2ctMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbG9uZG9uLXRvd2VyYnJpZGdlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbW9zY293LXJlZHNxdWFyZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5lZGVybGFuZGVuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmV3eW9yay1wdWJsaWNsaWJyYXJ5LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtcGFyaXMtZWlmZmVsdG93ZXIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2NpdGllcy10b2t5by1uaWdodC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy1yZWRkYWhsaWEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2F0ZXJsaWxsaWVzLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdpbmRjbG9jay5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLW5ldGhlcmxhbmRzLWRldXJuaW5nZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS11cy1lZGdld29vZC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTlVNQkVSX09GX1BBSVJTOlxyXG4gICAgICBsZXQgbnVtYmVyT2ZQYWlycyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBudW1iZXJPZlBhaXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9XSURUSDpcclxuICAgICAgbGV0IHdpZHRoID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNUQVJUX0dBTUU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBnYW1lU3RhdGU6IFwicGxheWluZ1wiIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVTRVRfQ0FSRFM6XHJcbiAgICAgIGxldCBpbml0aWFsQ2FyZHMgPSBpbml0aWFsU3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IGluaXRpYWxDYXJkcyB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNIVUZGTEU6XHJcbiAgICAgIGxldCBhcnJheSA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBsZXQgbGVuID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uYXJyYXldIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElNSVRfQ0FSRFM6XHJcbiAgICAgIGxldCBsaW1pdGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIGxpbWl0ZWRDYXJkcy5zcGxpY2Uoc3RhdGUubnVtYmVyT2ZQYWlycyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5saW1pdGVkQ2FyZHNdIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRFVQTElDQVRFX0NBUkRTOlxyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMSA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczIgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICBsZXQgbmV3RHVwbGljYXRlZENhcmRzID0gWy4uLmR1cGxpY2F0ZWRDYXJkczEsIC4uLmR1cGxpY2F0ZWRDYXJkczJdO1xyXG4gICAgICBuZXdEdXBsaWNhdGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaW5kZXggPSBpbmRleDtcclxuICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWwubWF0Y2ggPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogbmV3RHVwbGljYXRlZENhcmRzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZMSVBfQUxMX0NBUkRTOlxyXG4gICAgICBsZXQgZmxpcGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgZmxpcGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm1hdGNoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogWy4uLmZsaXBlZENhcmRzXSxcclxuICAgICAgICBtYXRjaGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgY2FzZSBGTElQX0NBUkQ6XHJcbiAgICAgIGxldCBmbGlwcGVkQ2FyZEluZGV4ID0gc3RhdGUuY2FyZHMuZmluZEluZGV4KFxyXG4gICAgICAgIChlbCkgPT4gZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBhbGxDYXJkcyA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgLy8gZmxpcCBmaXJzdCBjYXJkIGFuZCByZW1lbWJlciBpdFxyXG4gICAgICBpZiAoc3RhdGUuY2xpY2tDb3VudGVyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSBzdGF0ZS5jbGlja0NvdW50ZXI7XHJcbiAgICAgICAgbmV3Q291bnRlcisrO1xyXG5cclxuICAgICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0RmxpcHBlZENhcmQgPSBhbGxDYXJkc1tmbGlwcGVkQ2FyZEluZGV4XTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4uYWxsQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgbWF0Y2hpbmdDYXJkOiBmaXJzdEZsaXBwZWRDYXJkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgLy8gZmxpcCBTZWNvbmQgQ2FyZFxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZG9lcyB0aGUgdHdvIGNhcmRzIG1hdGNoID9cclxuICAgICAgICBpZiAoc3RhdGUubWF0Y2hpbmdDYXJkLnNyYyA9PT0gYWxsQ2FyZHNbZmxpcHBlZENhcmRJbmRleF0uc3JjKSB7XHJcbiAgICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwuc3JjID09PSBzdGF0ZS5tYXRjaGluZ0NhcmQuc3JjKSB7XHJcbiAgICAgICAgICAgICAgZWwubWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2FyZHM6IFsuLi5hbGxDYXJkc10sXHJcbiAgICAgICAgICBjbGlja0NvdW50ZXI6IG5ld0NvdW50ZXIsXHJcbiAgICAgICAgICBtYXRjaGluZzogdHJ1ZSxcclxuICAgICAgICAgIG1hdGNoaW5nQ2FyZDogaW5pdGlhbFN0YXRlLm1hdGNoaW5nQ2FyZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZmxpcCBzZWNvbmQgY2FyZCBhbmQgY2hhbmdlIG1hdGNoOnRydWUgZm9yIGJvdGhcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZmRjXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=