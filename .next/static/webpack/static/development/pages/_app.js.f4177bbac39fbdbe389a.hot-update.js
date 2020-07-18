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
  isPlaying: false,
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
        }
      });
      return Object.assign({}, state, {
        cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(flipedCards),
        matching: false
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
            }
          });
          numberOfFoundPairs++;
        }

        return Object.assign({}, state, {
          cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allCards),
          clickCounter: _newCounter,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJ3aWR0aCIsIm51bWJlck9mUGFpcnMiLCJudW1iZXJPZkZvdW5kUGFpcnMiLCJudW1iZXJPZkF0dGVtcHRzIiwiaXNMb2FkaW5nIiwiaXNQbGF5aW5nIiwiY2xpY2tDb3VudGVyIiwibWF0Y2hpbmciLCJtYXRjaGluZ0NhcmQiLCJjYXJkcyIsInNyYyIsImlzQWN0aXZlIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJPYmplY3QiLCJhc3NpZ24iLCJDSEFOR0VfV0lEVEgiLCJTVEFSVF9HQU1FIiwiUkVTRVRfQ0FSRFMiLCJpbml0aWFsQ2FyZHMiLCJTSFVGRkxFIiwiYXJyYXkiLCJsZW4iLCJsZW5ndGgiLCJpIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJMSU1JVF9DQVJEUyIsImxpbWl0ZWRDYXJkcyIsInNwbGljZSIsIkRVUExJQ0FURV9DQVJEUyIsImR1cGxpY2F0ZWRDYXJkczEiLCJkdXBsaWNhdGVkQ2FyZHMyIiwibmV3RHVwbGljYXRlZENhcmRzIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJtYXRjaCIsIkZMSVBfQUxMX0NBUkRTIiwiZmxpcGVkQ2FyZHMiLCJGTElQX0NBUkQiLCJmbGlwcGVkQ2FyZEluZGV4IiwiZmluZEluZGV4IiwiYWxsQ2FyZHMiLCJuZXdDb3VudGVyIiwiZmlyc3RGbGlwcGVkQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQVAsRUFBZDs7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRSxHQURZO0FB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RCxnQkFBZ0IsR0FBR1UsS0FBSyxDQUFDVixnQkFBN0I7QUFDQUEsd0JBQWdCLEdBSG1CLENBS25DOztBQUNBZ0QsZ0JBQVEsQ0FBQ1QsT0FBVCxDQUFpQixVQUFDQyxFQUFELEVBQVE7QUFDdkIsY0FBSUEsRUFBRSxDQUFDQyxLQUFILEtBQWE5QixNQUFNLENBQUNHLE9BQXhCLEVBQWlDO0FBQy9CMEIsY0FBRSxDQUFDaEMsUUFBSCxHQUFjLElBQWQ7QUFDRDtBQUNGLFNBSkQsRUFObUMsQ0FZbkM7O0FBQ0EsWUFBSUUsS0FBSyxDQUFDTCxZQUFOLENBQW1CRSxHQUFuQixLQUEyQnlDLFFBQVEsQ0FBQ0YsZ0JBQUQsQ0FBUixDQUEyQnZDLEdBQTFELEVBQStEO0FBQzdEeUMsa0JBQVEsQ0FBQ1QsT0FBVCxDQUFpQixVQUFDQyxFQUFELEVBQVE7QUFDdkIsZ0JBQUlBLEVBQUUsQ0FBQ2pDLEdBQUgsS0FBV0csS0FBSyxDQUFDTCxZQUFOLENBQW1CRSxHQUFsQyxFQUF1QztBQUNyQ2lDLGdCQUFFLENBQUNFLEtBQUgsR0FBVyxJQUFYO0FBQ0Q7QUFDRixXQUpEO0FBS0EzQyw0QkFBa0I7QUFDbkI7O0FBRUQsZUFBT2lCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCSixlQUFLLEVBQUUsNkZBQUkwQyxRQUFOLENBRHlCO0FBRTlCN0Msc0JBQVksRUFBRThDLFdBRmdCO0FBRzlCN0Msa0JBQVEsRUFBRSxJQUhvQjtBQUk5QkMsc0JBQVksRUFBRVQsWUFBWSxDQUFDUztBQUpHLFNBQXpCLENBQVA7QUFNRCxPQXZESCxDQXlERTs7O0FBRUE7O0FBQ0Y7QUFDRSxhQUFPSyxLQUFQO0FBaklKO0FBbUlEOztBQUVjRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5mNDE3N2JiYWMzOWZiZGJlMzg5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBjbG9uZSA9IHJlcXVpcmUoXCJyZmRjXCIpKCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgd2lkdGg6IDEyNyxcclxuICBudW1iZXJPZlBhaXJzOiA2LFxyXG4gIG51bWJlck9mRm91bmRQYWlyczogMCxcclxuICBudW1iZXJPZkF0dGVtcHRzOiAwLFxyXG4gIGlzTG9hZGluZzogdHJ1ZSxcclxuICBpc1BsYXlpbmc6IGZhbHNlLFxyXG4gIGNsaWNrQ291bnRlcjogMCxcclxuICBtYXRjaGluZzogZmFsc2UsXHJcbiAgbWF0Y2hpbmdDYXJkOiBudWxsLFxyXG4gIGNhcmRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtYnVubnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2ctMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbG9uZG9uLXRvd2VyYnJpZGdlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbW9zY293LXJlZHNxdWFyZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5lZGVybGFuZGVuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmV3eW9yay1wdWJsaWNsaWJyYXJ5LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtcGFyaXMtZWlmZmVsdG93ZXIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2NpdGllcy10b2t5by1uaWdodC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy1yZWRkYWhsaWEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2F0ZXJsaWxsaWVzLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdpbmRjbG9jay5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLW5ldGhlcmxhbmRzLWRldXJuaW5nZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS11cy1lZGdld29vZC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTlVNQkVSX09GX1BBSVJTOlxyXG4gICAgICBsZXQgbnVtYmVyT2ZQYWlycyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBudW1iZXJPZlBhaXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9XSURUSDpcclxuICAgICAgbGV0IHdpZHRoID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNUQVJUX0dBTUU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc1BsYXlpbmc6IHRydWUgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVNFVF9DQVJEUzpcclxuICAgICAgbGV0IGluaXRpYWxDYXJkcyA9IGluaXRpYWxTdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogaW5pdGlhbENhcmRzIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0hVRkZMRTpcclxuICAgICAgbGV0IGFycmF5ID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGxldCBsZW4gPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gbGVuOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcclxuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xyXG4gICAgICAgIGFycmF5W2pdID0gdGVtcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5hcnJheV0gfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSU1JVF9DQVJEUzpcclxuICAgICAgbGV0IGxpbWl0ZWRDYXJkcyA9IHN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgbGltaXRlZENhcmRzLnNwbGljZShzdGF0ZS5udW1iZXJPZlBhaXJzKTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmxpbWl0ZWRDYXJkc10gfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBEVVBMSUNBVEVfQ0FSRFM6XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMxID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMiA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuXHJcbiAgICAgIGxldCBuZXdEdXBsaWNhdGVkQ2FyZHMgPSBbLi4uZHVwbGljYXRlZENhcmRzMSwgLi4uZHVwbGljYXRlZENhcmRzMl07XHJcbiAgICAgIG5ld0R1cGxpY2F0ZWRDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBlbC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBlbC5tYXRjaCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNhcmRzOiBuZXdEdXBsaWNhdGVkQ2FyZHMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRkxJUF9BTExfQ0FSRFM6XHJcbiAgICAgIGxldCBmbGlwZWRDYXJkcyA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBmbGlwZWRDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWwubWF0Y2ggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBlbC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNhcmRzOiBbLi4uZmxpcGVkQ2FyZHNdLFxyXG4gICAgICAgIG1hdGNoaW5nOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICBjYXNlIEZMSVBfQ0FSRDpcclxuICAgICAgbGV0IGZsaXBwZWRDYXJkSW5kZXggPSBzdGF0ZS5jYXJkcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGVsKSA9PiBlbC5pbmRleCA9PT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxldCBudW1iZXJPZkZvdW5kUGFpcnMgPSBzdGF0ZS5udW1iZXJPZkZvdW5kUGFpcnM7XHJcblxyXG4gICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIC8vIGZsaXAgZmlyc3QgY2FyZCBhbmQgcmVtZW1iZXIgaXRcclxuICAgICAgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMCkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gc3RhdGUuY2xpY2tDb3VudGVyO1xyXG4gICAgICAgIG5ld0NvdW50ZXIrKztcclxuXHJcbiAgICAgICAgbGV0IGFsbENhcmRzID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdEZsaXBwZWRDYXJkID0gYWxsQ2FyZHNbZmxpcHBlZENhcmRJbmRleF07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBjYXJkczogWy4uLmFsbENhcmRzXSxcclxuICAgICAgICAgIGNsaWNrQ291bnRlcjogbmV3Q291bnRlcixcclxuICAgICAgICAgIG1hdGNoaW5nQ2FyZDogZmlyc3RGbGlwcGVkQ2FyZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5jbGlja0NvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICBsZXQgbmV3Q291bnRlciA9IDA7XHJcbiAgICAgICAgbGV0IG51bWJlck9mQXR0ZW1wdHMgPSBzdGF0ZS5udW1iZXJPZkF0dGVtcHRzO1xyXG4gICAgICAgIG51bWJlck9mQXR0ZW1wdHMrKztcclxuXHJcbiAgICAgICAgLy8gZmxpcCBTZWNvbmQgQ2FyZFxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZG9lcyB0aGUgdHdvIGNhcmRzIG1hdGNoID9cclxuICAgICAgICBpZiAoc3RhdGUubWF0Y2hpbmdDYXJkLnNyYyA9PT0gYWxsQ2FyZHNbZmxpcHBlZENhcmRJbmRleF0uc3JjKSB7XHJcbiAgICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwuc3JjID09PSBzdGF0ZS5tYXRjaGluZ0NhcmQuc3JjKSB7XHJcbiAgICAgICAgICAgICAgZWwubWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG51bWJlck9mRm91bmRQYWlycysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBjYXJkczogWy4uLmFsbENhcmRzXSxcclxuICAgICAgICAgIGNsaWNrQ291bnRlcjogbmV3Q291bnRlcixcclxuICAgICAgICAgIG1hdGNoaW5nOiB0cnVlLFxyXG4gICAgICAgICAgbWF0Y2hpbmdDYXJkOiBpbml0aWFsU3RhdGUubWF0Y2hpbmdDYXJkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBmbGlwIHNlY29uZCBjYXJkIGFuZCBjaGFuZ2UgbWF0Y2g6dHJ1ZSBmb3IgYm90aFxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==