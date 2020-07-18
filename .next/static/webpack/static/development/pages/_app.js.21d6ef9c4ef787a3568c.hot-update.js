webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var clone = __webpack_require__(/*! rfdc */ "./node_modules/rfdc/index.js")();

var initialState = {
  width: 127,
  numberOfPairs: 6,
  numberOfFoundPairs: 0,
  numberOfAttempts: 0,
  isLoading: true,
  isPlaying: true,
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

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NUMBER_OF_PAIRS"]:
      var numberOfPairs = action.payload;
      return Object.assign({}, state, {
        numberOfPairs: numberOfPairs
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["CHANGE_WIDTH"]:
      var width = action.payload;
      return Object.assign({}, state, {
        width: width
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["START_GAME"]:
      return Object.assign({}, state, {
        isPlaying: true
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["RESET_CARDS"]:
      var initialCards = initialState.cards;
      return Object.assign({}, state, {
        cards: initialCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["SHUFFLE"]:
      var array = state.cards;
      var len = array.length - 1;

      for (var i = len; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return Object.assign({}, state, {
        cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array)
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["LIMIT_CARDS"]:
      var limitedCards = state.cards;
      limitedCards.splice(state.numberOfPairs);
      return Object.assign({}, state, {
        cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(limitedCards)
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["DUPLICATE_CARDS"]:
      var duplicatedCards1 = clone(state.cards);
      var duplicatedCards2 = clone(state.cards);
      var newDuplicatedCards = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(duplicatedCards1), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(duplicatedCards2));
      newDuplicatedCards.forEach(function (el, index) {
        el.index = index;
        el.isActive = true;
        el.match = false;
      });
      return Object.assign({}, state, {
        cards: newDuplicatedCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FLIP_ALL_CARDS"]:
      var flipedCards = state.cards;
      flipedCards.forEach(function (el, index) {
        if (el.match === false) {
          el.isActive = false;
        } else if (el.match === true) {
          el.timed = false;
        }
      });
      return Object.assign({}, state, {
        cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(flipedCards),
        matching: false,
        isPlaying: true
      });

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FLIP_CARD"]:
      var flippedCardIndex = state.cards.findIndex(function (el) {
        return el.index === action.payload;
      });
      var numberOfFoundPairs = state.numberOfFoundPairs;
      var allCards = clone(state.cards); // flip first card and remember it

      if (state.clickCounter === 0) {
        var newCounter = state.clickCounter;
        newCounter++;

        var _allCards = clone(state.cards);

        _allCards.forEach(function (el) {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        });

        var firstFlippedCard = _allCards[flippedCardIndex];
        return Object.assign({}, state, {
          cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_allCards),
          clickCounter: newCounter,
          matchingCard: firstFlippedCard
        });
      } else if (state.clickCounter === 1) {
        var _newCounter = 0;
        var numberOfAttempts = state.numberOfAttempts;
        numberOfAttempts++; // flip Second Card

        allCards.forEach(function (el) {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        }); // does the two cards match ?

        if (state.matchingCard.src === allCards[flippedCardIndex].src) {
          allCards.forEach(function (el) {
            if (el.src === state.matchingCard.src) {
              el.match = true;
              el.isActive = false;
            }
          });
          numberOfFoundPairs++;
        }

        return Object.assign({}, state, {
          cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allCards),
          clickCounter: _newCounter,
          matching: true,
          matchingCard: initialState.matchingCard,
          numberOfFoundPairs: numberOfFoundPairs,
          numberOfAttempts: numberOfAttempts,
          isPlaying: false
        });
      } // flip second card and change match:true for both


      break;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJ3aWR0aCIsIm51bWJlck9mUGFpcnMiLCJudW1iZXJPZkZvdW5kUGFpcnMiLCJudW1iZXJPZkF0dGVtcHRzIiwiaXNMb2FkaW5nIiwiaXNQbGF5aW5nIiwiY2xpY2tDb3VudGVyIiwibWF0Y2hpbmciLCJtYXRjaGluZ0NhcmQiLCJjYXJkcyIsInNyYyIsImlzQWN0aXZlIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJPYmplY3QiLCJhc3NpZ24iLCJDSEFOR0VfV0lEVEgiLCJTVEFSVF9HQU1FIiwiUkVTRVRfQ0FSRFMiLCJpbml0aWFsQ2FyZHMiLCJTSFVGRkxFIiwiYXJyYXkiLCJsZW4iLCJsZW5ndGgiLCJpIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJMSU1JVF9DQVJEUyIsImxpbWl0ZWRDYXJkcyIsInNwbGljZSIsIkRVUExJQ0FURV9DQVJEUyIsImR1cGxpY2F0ZWRDYXJkczEiLCJkdXBsaWNhdGVkQ2FyZHMyIiwibmV3RHVwbGljYXRlZENhcmRzIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJtYXRjaCIsIkZMSVBfQUxMX0NBUkRTIiwiZmxpcGVkQ2FyZHMiLCJ0aW1lZCIsIkZMSVBfQ0FSRCIsImZsaXBwZWRDYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJhbGxDYXJkcyIsIm5ld0NvdW50ZXIiLCJmaXJzdEZsaXBwZWRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBUCxFQUFkOztBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFF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RSxtQkFBUyxFQUFFO0FBUG1CLFNBQXpCLENBQVA7QUFTRCxPQTVESCxDQThERTs7O0FBRUE7O0FBQ0Y7QUFDRSxhQUFPUSxLQUFQO0FBeklKO0FBMklEOztBQUVjRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4yMWQ2ZWY5YzRlZjc4N2EzNTY4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBjbG9uZSA9IHJlcXVpcmUoXCJyZmRjXCIpKCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgd2lkdGg6IDEyNyxcclxuICBudW1iZXJPZlBhaXJzOiA2LFxyXG4gIG51bWJlck9mRm91bmRQYWlyczogMCxcclxuICBudW1iZXJPZkF0dGVtcHRzOiAwLFxyXG4gIGlzTG9hZGluZzogdHJ1ZSxcclxuICBpc1BsYXlpbmc6IHRydWUsXHJcbiAgY2xpY2tDb3VudGVyOiAwLFxyXG4gIG1hdGNoaW5nOiBmYWxzZSxcclxuICBtYXRjaGluZ0NhcmQ6IG51bGwsXHJcbiAgY2FyZHM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1idW5ueS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1sb25kb24tdG93ZXJicmlkZ2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1tb3Njb3ctcmVkc3F1YXJlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmVkZXJsYW5kZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZXd5b3JrLXB1YmxpY2xpYnJhcnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1wYXJpcy1laWZmZWx0b3dlci5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvY2l0aWVzLXRva3lvLW5pZ2h0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXJlZGRhaGxpYS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13YXRlcmxpbGxpZXMuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2luZGNsb2NrLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtbmV0aGVybGFuZHMtZGV1cm5pbmdlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLXVzLWVkZ2V3b29kLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByb290UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlM6XHJcbiAgICAgIGxldCBudW1iZXJPZlBhaXJzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG51bWJlck9mUGFpcnMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX1dJRFRIOlxyXG4gICAgICBsZXQgd2lkdGggPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU1RBUlRfR0FNRTpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGlzUGxheWluZzogdHJ1ZSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0NBUkRTOlxyXG4gICAgICBsZXQgaW5pdGlhbENhcmRzID0gaW5pdGlhbFN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBpbml0aWFsQ2FyZHMgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSFVGRkxFOlxyXG4gICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgbGV0IGxlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmFycmF5XSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJTUlUX0NBUkRTOlxyXG4gICAgICBsZXQgbGltaXRlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICBsaW1pdGVkQ2FyZHMuc3BsaWNlKHN0YXRlLm51bWJlck9mUGFpcnMpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4ubGltaXRlZENhcmRzXSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERVUExJQ0FURV9DQVJEUzpcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczEgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMyID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgbGV0IG5ld0R1cGxpY2F0ZWRDYXJkcyA9IFsuLi5kdXBsaWNhdGVkQ2FyZHMxLCAuLi5kdXBsaWNhdGVkQ2FyZHMyXTtcclxuICAgICAgbmV3RHVwbGljYXRlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGVsLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGVsLm1hdGNoID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IG5ld0R1cGxpY2F0ZWRDYXJkcyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGTElQX0FMTF9DQVJEUzpcclxuICAgICAgbGV0IGZsaXBlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGZsaXBlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5tYXRjaCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGVsLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbC5tYXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZWwudGltZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogWy4uLmZsaXBlZENhcmRzXSxcclxuICAgICAgICBtYXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNQbGF5aW5nOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIGNhc2UgRkxJUF9DQVJEOlxyXG4gICAgICBsZXQgZmxpcHBlZENhcmRJbmRleCA9IHN0YXRlLmNhcmRzLmZpbmRJbmRleChcclxuICAgICAgICAoZWwpID0+IGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IG51bWJlck9mRm91bmRQYWlycyA9IHN0YXRlLm51bWJlck9mRm91bmRQYWlycztcclxuXHJcbiAgICAgIGxldCBhbGxDYXJkcyA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgLy8gZmxpcCBmaXJzdCBjYXJkIGFuZCByZW1lbWJlciBpdFxyXG4gICAgICBpZiAoc3RhdGUuY2xpY2tDb3VudGVyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSBzdGF0ZS5jbGlja0NvdW50ZXI7XHJcbiAgICAgICAgbmV3Q291bnRlcisrO1xyXG5cclxuICAgICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0RmxpcHBlZENhcmQgPSBhbGxDYXJkc1tmbGlwcGVkQ2FyZEluZGV4XTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4uYWxsQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgbWF0Y2hpbmdDYXJkOiBmaXJzdEZsaXBwZWRDYXJkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gMDtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZBdHRlbXB0cyA9IHN0YXRlLm51bWJlck9mQXR0ZW1wdHM7XHJcbiAgICAgICAgbnVtYmVyT2ZBdHRlbXB0cysrO1xyXG5cclxuICAgICAgICAvLyBmbGlwIFNlY29uZCBDYXJkXHJcbiAgICAgICAgYWxsQ2FyZHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgIGlmIChlbC5pbmRleCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBkb2VzIHRoZSB0d28gY2FyZHMgbWF0Y2ggP1xyXG4gICAgICAgIGlmIChzdGF0ZS5tYXRjaGluZ0NhcmQuc3JjID09PSBhbGxDYXJkc1tmbGlwcGVkQ2FyZEluZGV4XS5zcmMpIHtcclxuICAgICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbC5zcmMgPT09IHN0YXRlLm1hdGNoaW5nQ2FyZC5zcmMpIHtcclxuICAgICAgICAgICAgICBlbC5tYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbnVtYmVyT2ZGb3VuZFBhaXJzKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4uYWxsQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgbWF0Y2hpbmc6IHRydWUsXHJcbiAgICAgICAgICBtYXRjaGluZ0NhcmQ6IGluaXRpYWxTdGF0ZS5tYXRjaGluZ0NhcmQsXHJcbiAgICAgICAgICBudW1iZXJPZkZvdW5kUGFpcnMsXHJcbiAgICAgICAgICBudW1iZXJPZkF0dGVtcHRzLFxyXG4gICAgICAgICAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZmxpcCBzZWNvbmQgY2FyZCBhbmQgY2hhbmdlIG1hdGNoOnRydWUgZm9yIGJvdGhcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=