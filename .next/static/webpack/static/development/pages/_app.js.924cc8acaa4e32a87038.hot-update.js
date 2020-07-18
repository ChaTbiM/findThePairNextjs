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

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["RESET_GAME"]:
      return Object.assign({}, state, {
        cards: initialState.cards,
        numberOfFoundPairs: initialState.numberOfFoundPairs,
        numberOfAttempts: initialState.numberOfAttempts,
        isLoading: initialState.isLoading,
        clickCounter: initialState.clickCounter,
        matching: initialState.matching,
        matchingCard: initialState.matchingCard
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
              el.timed = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJ3aWR0aCIsIm51bWJlck9mUGFpcnMiLCJudW1iZXJPZkZvdW5kUGFpcnMiLCJudW1iZXJPZkF0dGVtcHRzIiwiaXNMb2FkaW5nIiwiY2xpY2tDb3VudGVyIiwibWF0Y2hpbmciLCJtYXRjaGluZ0NhcmQiLCJjYXJkcyIsInNyYyIsImlzQWN0aXZlIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJPYmplY3QiLCJhc3NpZ24iLCJDSEFOR0VfV0lEVEgiLCJSRVNFVF9HQU1FIiwiU1RBUlRfR0FNRSIsImlzUGxheWluZyIsIlJFU0VUX0NBUkRTIiwiaW5pdGlhbENhcmRzIiwiU0hVRkZMRSIsImFycmF5IiwibGVuIiwibGVuZ3RoIiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiTElNSVRfQ0FSRFMiLCJsaW1pdGVkQ2FyZHMiLCJzcGxpY2UiLCJEVVBMSUNBVEVfQ0FSRFMiLCJkdXBsaWNhdGVkQ2FyZHMxIiwiZHVwbGljYXRlZENhcmRzMiIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImZvckVhY2giLCJlbCIsImluZGV4IiwibWF0Y2giLCJGTElQX0FMTF9DQVJEUyIsImZsaXBlZENhcmRzIiwidGltZWQiLCJGTElQX0NBUkQiLCJmbGlwcGVkQ2FyZEluZGV4IiwiZmluZEluZGV4IiwiYWxsQ2FyZHMiLCJuZXdDb3VudGVyIiwiZmlyc3RGbGlwcGVkQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVlBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQVAsRUFBZDs7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFD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RSxLQUFILEdBQVcsSUFBWDtBQUNBRixnQkFBRSxDQUFDbEMsUUFBSCxHQUFjLEtBQWQ7QUFDQWtDLGdCQUFFLENBQUNLLEtBQUgsR0FBVyxJQUFYO0FBQ0Q7QUFDRixXQU5EO0FBUUEvQyw0QkFBa0I7QUFDbkI7O0FBRUQsZUFBT2dCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCSixlQUFLLEVBQUUsNkZBQUk2QyxRQUFOLENBRHlCO0FBRTlCaEQsc0JBQVksRUFBRWlELFdBRmdCO0FBRzlCaEQsa0JBQVEsRUFBRSxJQUhvQjtBQUk5QkMsc0JBQVksRUFBRVIsWUFBWSxDQUFDUSxZQUpHO0FBSzlCTCw0QkFBa0IsRUFBbEJBLGtCQUw4QjtBQU05QkMsMEJBQWdCLEVBQWhCQSxnQkFOOEI7QUFPOUJvQixtQkFBUyxFQUFFO0FBUG1CLFNBQXpCLENBQVA7QUFTRCxPQTdESCxDQStERTs7O0FBRUE7O0FBQ0Y7QUFDRSxhQUFPWCxLQUFQO0FBckpKO0FBdUpEOztBQUVjRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy45MjRjYzhhY2FhNGUzMmE4NzAzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxuICBSRVNFVF9HQU1FLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcInJmZGNcIikoKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB3aWR0aDogMTI3LFxyXG4gIG51bWJlck9mUGFpcnM6IDYsXHJcbiAgbnVtYmVyT2ZGb3VuZFBhaXJzOiAwLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IDAsXHJcbiAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gIGNsaWNrQ291bnRlcjogMCxcclxuICBtYXRjaGluZzogZmFsc2UsXHJcbiAgbWF0Y2hpbmdDYXJkOiBudWxsLFxyXG4gIGNhcmRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtYnVubnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2ctMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbG9uZG9uLXRvd2VyYnJpZGdlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbW9zY293LXJlZHNxdWFyZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5lZGVybGFuZGVuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmV3eW9yay1wdWJsaWNsaWJyYXJ5LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtcGFyaXMtZWlmZmVsdG93ZXIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2NpdGllcy10b2t5by1uaWdodC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy1yZWRkYWhsaWEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2F0ZXJsaWxsaWVzLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdpbmRjbG9jay5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLW5ldGhlcmxhbmRzLWRldXJuaW5nZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS11cy1lZGdld29vZC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTlVNQkVSX09GX1BBSVJTOlxyXG4gICAgICBsZXQgbnVtYmVyT2ZQYWlycyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBudW1iZXJPZlBhaXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9XSURUSDpcclxuICAgICAgbGV0IHdpZHRoID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0dBTUU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNhcmRzOiBpbml0aWFsU3RhdGUuY2FyZHMsXHJcbiAgICAgICAgbnVtYmVyT2ZGb3VuZFBhaXJzOiBpbml0aWFsU3RhdGUubnVtYmVyT2ZGb3VuZFBhaXJzLFxyXG4gICAgICAgIG51bWJlck9mQXR0ZW1wdHM6IGluaXRpYWxTdGF0ZS5udW1iZXJPZkF0dGVtcHRzLFxyXG4gICAgICAgIGlzTG9hZGluZzogaW5pdGlhbFN0YXRlLmlzTG9hZGluZyxcclxuICAgICAgICBjbGlja0NvdW50ZXI6IGluaXRpYWxTdGF0ZS5jbGlja0NvdW50ZXIsXHJcbiAgICAgICAgbWF0Y2hpbmc6IGluaXRpYWxTdGF0ZS5tYXRjaGluZyxcclxuICAgICAgICBtYXRjaGluZ0NhcmQ6IGluaXRpYWxTdGF0ZS5tYXRjaGluZ0NhcmQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU1RBUlRfR0FNRTpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGlzUGxheWluZzogdHJ1ZSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0NBUkRTOlxyXG4gICAgICBsZXQgaW5pdGlhbENhcmRzID0gaW5pdGlhbFN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBpbml0aWFsQ2FyZHMgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSFVGRkxFOlxyXG4gICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgbGV0IGxlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmFycmF5XSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJTUlUX0NBUkRTOlxyXG4gICAgICBsZXQgbGltaXRlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICBsaW1pdGVkQ2FyZHMuc3BsaWNlKHN0YXRlLm51bWJlck9mUGFpcnMpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4ubGltaXRlZENhcmRzXSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERVUExJQ0FURV9DQVJEUzpcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczEgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMyID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgbGV0IG5ld0R1cGxpY2F0ZWRDYXJkcyA9IFsuLi5kdXBsaWNhdGVkQ2FyZHMxLCAuLi5kdXBsaWNhdGVkQ2FyZHMyXTtcclxuICAgICAgbmV3RHVwbGljYXRlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGVsLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGVsLm1hdGNoID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IG5ld0R1cGxpY2F0ZWRDYXJkcyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGTElQX0FMTF9DQVJEUzpcclxuICAgICAgbGV0IGZsaXBlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGZsaXBlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5tYXRjaCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGVsLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbC5tYXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZWwudGltZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogWy4uLmZsaXBlZENhcmRzXSxcclxuICAgICAgICBtYXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNQbGF5aW5nOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIGNhc2UgRkxJUF9DQVJEOlxyXG4gICAgICBsZXQgZmxpcHBlZENhcmRJbmRleCA9IHN0YXRlLmNhcmRzLmZpbmRJbmRleChcclxuICAgICAgICAoZWwpID0+IGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IG51bWJlck9mRm91bmRQYWlycyA9IHN0YXRlLm51bWJlck9mRm91bmRQYWlycztcclxuXHJcbiAgICAgIGxldCBhbGxDYXJkcyA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgLy8gZmxpcCBmaXJzdCBjYXJkIGFuZCByZW1lbWJlciBpdFxyXG4gICAgICBpZiAoc3RhdGUuY2xpY2tDb3VudGVyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSBzdGF0ZS5jbGlja0NvdW50ZXI7XHJcbiAgICAgICAgbmV3Q291bnRlcisrO1xyXG5cclxuICAgICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0RmxpcHBlZENhcmQgPSBhbGxDYXJkc1tmbGlwcGVkQ2FyZEluZGV4XTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4uYWxsQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgbWF0Y2hpbmdDYXJkOiBmaXJzdEZsaXBwZWRDYXJkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gMDtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZBdHRlbXB0cyA9IHN0YXRlLm51bWJlck9mQXR0ZW1wdHM7XHJcbiAgICAgICAgbnVtYmVyT2ZBdHRlbXB0cysrO1xyXG5cclxuICAgICAgICAvLyBmbGlwIFNlY29uZCBDYXJkXHJcbiAgICAgICAgYWxsQ2FyZHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgIGlmIChlbC5pbmRleCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBkb2VzIHRoZSB0d28gY2FyZHMgbWF0Y2ggP1xyXG4gICAgICAgIGlmIChzdGF0ZS5tYXRjaGluZ0NhcmQuc3JjID09PSBhbGxDYXJkc1tmbGlwcGVkQ2FyZEluZGV4XS5zcmMpIHtcclxuICAgICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbC5zcmMgPT09IHN0YXRlLm1hdGNoaW5nQ2FyZC5zcmMpIHtcclxuICAgICAgICAgICAgICBlbC5tYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBlbC50aW1lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIG51bWJlck9mRm91bmRQYWlycysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBjYXJkczogWy4uLmFsbENhcmRzXSxcclxuICAgICAgICAgIGNsaWNrQ291bnRlcjogbmV3Q291bnRlcixcclxuICAgICAgICAgIG1hdGNoaW5nOiB0cnVlLFxyXG4gICAgICAgICAgbWF0Y2hpbmdDYXJkOiBpbml0aWFsU3RhdGUubWF0Y2hpbmdDYXJkLFxyXG4gICAgICAgICAgbnVtYmVyT2ZGb3VuZFBhaXJzLFxyXG4gICAgICAgICAgbnVtYmVyT2ZBdHRlbXB0cyxcclxuICAgICAgICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGZsaXAgc2Vjb25kIGNhcmQgYW5kIGNoYW5nZSBtYXRjaDp0cnVlIGZvciBib3RoXHJcblxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9