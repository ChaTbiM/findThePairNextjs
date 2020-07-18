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

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["RESET_GAME"]:
      return Object.assign({}, state, {
        cards: initalState.cards,
        numberOfFoundPairs: initialState.numberOfFoundPairs
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJ3aWR0aCIsIm51bWJlck9mUGFpcnMiLCJudW1iZXJPZkZvdW5kUGFpcnMiLCJudW1iZXJPZkF0dGVtcHRzIiwiaXNMb2FkaW5nIiwiaXNQbGF5aW5nIiwiY2xpY2tDb3VudGVyIiwibWF0Y2hpbmciLCJtYXRjaGluZ0NhcmQiLCJjYXJkcyIsInNyYyIsImlzQWN0aXZlIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJPYmplY3QiLCJhc3NpZ24iLCJDSEFOR0VfV0lEVEgiLCJSRVNFVF9HQU1FIiwiaW5pdGFsU3RhdGUiLCJTVEFSVF9HQU1FIiwiUkVTRVRfQ0FSRFMiLCJpbml0aWFsQ2FyZHMiLCJTSFVGRkxFIiwiYXJyYXkiLCJsZW4iLCJsZW5ndGgiLCJpIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJMSU1JVF9DQVJEUyIsImxpbWl0ZWRDYXJkcyIsInNwbGljZSIsIkRVUExJQ0FURV9DQVJEUyIsImR1cGxpY2F0ZWRDYXJkczEiLCJkdXBsaWNhdGVkQ2FyZHMyIiwibmV3RHVwbGljYXRlZENhcmRzIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJtYXRjaCIsIkZMSVBfQUxMX0NBUkRTIiwiZmxpcGVkQ2FyZHMiLCJ0aW1lZCIsIkZMSVBfQ0FSRCIsImZsaXBwZWRDYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJhbGxDYXJkcyIsIm5ld0NvdW50ZXIiLCJmaXJzdEZsaXBwZWRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBWUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBUCxFQUFkOztBQUVBLElBQU1D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LENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxLQUFsQixFQUF5QjtBQUM5QkosZUFBSyxFQUFFLDZGQUFJNkMsUUFBTixDQUR5QjtBQUU5QmhELHNCQUFZLEVBQUVpRCxXQUZnQjtBQUc5QmhELGtCQUFRLEVBQUUsSUFIb0I7QUFJOUJDLHNCQUFZLEVBQUVULFlBQVksQ0FBQ1MsWUFKRztBQUs5Qk4sNEJBQWtCLEVBQWxCQSxrQkFMOEI7QUFNOUJDLDBCQUFnQixFQUFoQkEsZ0JBTjhCO0FBTzlCRSxtQkFBUyxFQUFFO0FBUG1CLFNBQXpCLENBQVA7QUFTRCxPQTdESCxDQStERTs7O0FBRUE7O0FBQ0Y7QUFDRSxhQUFPUSxLQUFQO0FBaEpKO0FBa0pEOztBQUVjRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5lMjY4ZTRlYzk4NWQ1YjJmZjZlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxuICBSRVNFVF9HQU1FLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcInJmZGNcIikoKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB3aWR0aDogMTI3LFxyXG4gIG51bWJlck9mUGFpcnM6IDYsXHJcbiAgbnVtYmVyT2ZGb3VuZFBhaXJzOiAwLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IDAsXHJcbiAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gIGlzUGxheWluZzogdHJ1ZSxcclxuICBjbGlja0NvdW50ZXI6IDAsXHJcbiAgbWF0Y2hpbmc6IGZhbHNlLFxyXG4gIG1hdGNoaW5nQ2FyZDogbnVsbCxcclxuICBjYXJkczogW1xyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWJ1bm55LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2cuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtaG9yc2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtaG9yc2UtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLWxvbmRvbi10b3dlcmJyaWRnZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW1vc2Nvdy1yZWRzcXVhcmUuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZWRlcmxhbmRlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5ld3lvcmstcHVibGljbGlicmFyeS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLXBhcmlzLWVpZmZlbHRvd2VyLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9jaXRpZXMtdG9reW8tbmlnaHQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtcmVkZGFobGlhLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdhdGVybGlsbGllcy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13aW5kY2xvY2suanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0xLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS1uZXRoZXJsYW5kcy1kZXVybmluZ2VuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtdXMtZWRnZXdvb2QuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUzpcclxuICAgICAgbGV0IG51bWJlck9mUGFpcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgbnVtYmVyT2ZQYWlycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfV0lEVEg6XHJcbiAgICAgIGxldCB3aWR0aCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVNFVF9HQU1FOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogaW5pdGFsU3RhdGUuY2FyZHMsXHJcbiAgICAgICAgbnVtYmVyT2ZGb3VuZFBhaXJzOiBpbml0aWFsU3RhdGUubnVtYmVyT2ZGb3VuZFBhaXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNUQVJUX0dBTUU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc1BsYXlpbmc6IHRydWUgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVNFVF9DQVJEUzpcclxuICAgICAgbGV0IGluaXRpYWxDYXJkcyA9IGluaXRpYWxTdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogaW5pdGlhbENhcmRzIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0hVRkZMRTpcclxuICAgICAgbGV0IGFycmF5ID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGxldCBsZW4gPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gbGVuOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcclxuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xyXG4gICAgICAgIGFycmF5W2pdID0gdGVtcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5hcnJheV0gfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSU1JVF9DQVJEUzpcclxuICAgICAgbGV0IGxpbWl0ZWRDYXJkcyA9IHN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgbGltaXRlZENhcmRzLnNwbGljZShzdGF0ZS5udW1iZXJPZlBhaXJzKTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmxpbWl0ZWRDYXJkc10gfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBEVVBMSUNBVEVfQ0FSRFM6XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMxID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMiA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuXHJcbiAgICAgIGxldCBuZXdEdXBsaWNhdGVkQ2FyZHMgPSBbLi4uZHVwbGljYXRlZENhcmRzMSwgLi4uZHVwbGljYXRlZENhcmRzMl07XHJcbiAgICAgIG5ld0R1cGxpY2F0ZWRDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBlbC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBlbC5tYXRjaCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNhcmRzOiBuZXdEdXBsaWNhdGVkQ2FyZHMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRkxJUF9BTExfQ0FSRFM6XHJcbiAgICAgIGxldCBmbGlwZWRDYXJkcyA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBmbGlwZWRDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWwubWF0Y2ggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBlbC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWwubWF0Y2ggPT09IHRydWUpIHtcclxuICAgICAgICAgIGVsLnRpbWVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IFsuLi5mbGlwZWRDYXJkc10sXHJcbiAgICAgICAgbWF0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICAgIGlzUGxheWluZzogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICBjYXNlIEZMSVBfQ0FSRDpcclxuICAgICAgbGV0IGZsaXBwZWRDYXJkSW5kZXggPSBzdGF0ZS5jYXJkcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGVsKSA9PiBlbC5pbmRleCA9PT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxldCBudW1iZXJPZkZvdW5kUGFpcnMgPSBzdGF0ZS5udW1iZXJPZkZvdW5kUGFpcnM7XHJcblxyXG4gICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIC8vIGZsaXAgZmlyc3QgY2FyZCBhbmQgcmVtZW1iZXIgaXRcclxuICAgICAgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMCkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gc3RhdGUuY2xpY2tDb3VudGVyO1xyXG4gICAgICAgIG5ld0NvdW50ZXIrKztcclxuXHJcbiAgICAgICAgbGV0IGFsbENhcmRzID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdEZsaXBwZWRDYXJkID0gYWxsQ2FyZHNbZmxpcHBlZENhcmRJbmRleF07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBjYXJkczogWy4uLmFsbENhcmRzXSxcclxuICAgICAgICAgIGNsaWNrQ291bnRlcjogbmV3Q291bnRlcixcclxuICAgICAgICAgIG1hdGNoaW5nQ2FyZDogZmlyc3RGbGlwcGVkQ2FyZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5jbGlja0NvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICBsZXQgbmV3Q291bnRlciA9IDA7XHJcbiAgICAgICAgbGV0IG51bWJlck9mQXR0ZW1wdHMgPSBzdGF0ZS5udW1iZXJPZkF0dGVtcHRzO1xyXG4gICAgICAgIG51bWJlck9mQXR0ZW1wdHMrKztcclxuXHJcbiAgICAgICAgLy8gZmxpcCBTZWNvbmQgQ2FyZFxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZG9lcyB0aGUgdHdvIGNhcmRzIG1hdGNoID9cclxuICAgICAgICBpZiAoc3RhdGUubWF0Y2hpbmdDYXJkLnNyYyA9PT0gYWxsQ2FyZHNbZmxpcHBlZENhcmRJbmRleF0uc3JjKSB7XHJcbiAgICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwuc3JjID09PSBzdGF0ZS5tYXRjaGluZ0NhcmQuc3JjKSB7XHJcbiAgICAgICAgICAgICAgZWwubWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgZWwudGltZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBudW1iZXJPZkZvdW5kUGFpcnMrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2FyZHM6IFsuLi5hbGxDYXJkc10sXHJcbiAgICAgICAgICBjbGlja0NvdW50ZXI6IG5ld0NvdW50ZXIsXHJcbiAgICAgICAgICBtYXRjaGluZzogdHJ1ZSxcclxuICAgICAgICAgIG1hdGNoaW5nQ2FyZDogaW5pdGlhbFN0YXRlLm1hdGNoaW5nQ2FyZCxcclxuICAgICAgICAgIG51bWJlck9mRm91bmRQYWlycyxcclxuICAgICAgICAgIG51bWJlck9mQXR0ZW1wdHMsXHJcbiAgICAgICAgICBpc1BsYXlpbmc6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBmbGlwIHNlY29uZCBjYXJkIGFuZCBjaGFuZ2UgbWF0Y2g6dHJ1ZSBmb3IgYm90aFxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==