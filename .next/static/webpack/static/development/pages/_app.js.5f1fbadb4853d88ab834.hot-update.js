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
  numberOfPairs: 6,
  width: 125,
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

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["START_GAME"]:
      return Object.assign({}, state, {
        gameState: "playing"
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
        var _newCounter = 0; // flip Second Card

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJpc0xvYWRpbmciLCJjbGlja0NvdW50ZXIiLCJtYXRjaGluZyIsIm1hdGNoaW5nQ2FyZCIsImNhcmRzIiwic3JjIiwiaXNBY3RpdmUiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyIsIk9iamVjdCIsImFzc2lnbiIsIkNIQU5HRV9XSURUSCIsIlNUQVJUX0dBTUUiLCJnYW1lU3RhdGUiLCJSRVNFVF9DQVJEUyIsImluaXRpYWxDYXJkcyIsIlNIVUZGTEUiLCJhcnJheSIsImxlbiIsImxlbmd0aCIsImkiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsIkxJTUlUX0NBUkRTIiwibGltaXRlZENhcmRzIiwic3BsaWNlIiwiRFVQTElDQVRFX0NBUkRTIiwiZHVwbGljYXRlZENhcmRzMSIsImR1cGxpY2F0ZWRDYXJkczIiLCJuZXdEdXBsaWNhdGVkQ2FyZHMiLCJmb3JFYWNoIiwiZWwiLCJpbmRleCIsIm1hdGNoIiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwZWRDYXJkcyIsIkZMSVBfQ0FSRCIsImZsaXBwZWRDYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJhbGxDYXJkcyIsIm5ld0NvdW50ZXIiLCJmaXJzdEZsaXBwZWRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBUCxFQUFkOztBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsZUFBYSxFQUFFLENBREk7QUFFbkJDLE9BQUssRUFBRSxHQUZZO0FBR25CQyxXQUFTLEVBQUUsSUFI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RUFKbUMsQ0FVbkM7O0FBQ0EsWUFBSUUsS0FBSyxDQUFDTCxZQUFOLENBQW1CRSxHQUFuQixLQUEyQjBDLFFBQVEsQ0FBQ0YsZ0JBQUQsQ0FBUixDQUEyQnhDLEdBQTFELEVBQStEO0FBQzdEMEMsa0JBQVEsQ0FBQ1QsT0FBVCxDQUFpQixVQUFDQyxFQUFELEVBQVE7QUFDdkIsZ0JBQUlBLEVBQUUsQ0FBQ2xDLEdBQUgsS0FBV0csS0FBSyxDQUFDTCxZQUFOLENBQW1CRSxHQUFsQyxFQUF1QztBQUNyQ2tDLGdCQUFFLENBQUNFLEtBQUgsR0FBVyxJQUFYO0FBQ0Q7QUFDRixXQUpEO0FBS0Q7O0FBRUQsZUFBTzNCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCSixlQUFLLEVBQUUsNkZBQUkyQyxRQUFOLENBRHlCO0FBRTlCOUMsc0JBQVksRUFBRStDLFdBRmdCO0FBRzlCOUMsa0JBQVEsRUFBRSxJQUhvQjtBQUk5QkMsc0JBQVksRUFBRU4sWUFBWSxDQUFDTTtBQUpHLFNBQXpCLENBQVA7QUFNRCxPQWpESCxDQW1ERTs7O0FBRUE7O0FBQ0Y7QUFDRSxhQUFPSyxLQUFQO0FBM0hKO0FBNkhEOztBQUVjRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy41ZjFmYmFkYjQ4NTNkODhhYjgzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBjbG9uZSA9IHJlcXVpcmUoXCJyZmRjXCIpKCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbnVtYmVyT2ZQYWlyczogNixcclxuICB3aWR0aDogMTI1LFxyXG4gIGlzTG9hZGluZzogdHJ1ZSxcclxuICBjbGlja0NvdW50ZXI6IDAsXHJcbiAgbWF0Y2hpbmc6IGZhbHNlLFxyXG4gIG1hdGNoaW5nQ2FyZDogbnVsbCxcclxuICBjYXJkczogW1xyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWJ1bm55LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2cuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtaG9yc2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtaG9yc2UtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLWxvbmRvbi10b3dlcmJyaWRnZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW1vc2Nvdy1yZWRzcXVhcmUuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZWRlcmxhbmRlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5ld3lvcmstcHVibGljbGlicmFyeS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLXBhcmlzLWVpZmZlbHRvd2VyLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9jaXRpZXMtdG9reW8tbmlnaHQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtcmVkZGFobGlhLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdhdGVybGlsbGllcy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13aW5kY2xvY2suanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0xLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS1uZXRoZXJsYW5kcy1kZXVybmluZ2VuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtdXMtZWRnZXdvb2QuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUzpcclxuICAgICAgbGV0IG51bWJlck9mUGFpcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgbnVtYmVyT2ZQYWlycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfV0lEVEg6XHJcbiAgICAgIGxldCB3aWR0aCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTVEFSVF9HQU1FOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZ2FtZVN0YXRlOiBcInBsYXlpbmdcIiB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0NBUkRTOlxyXG4gICAgICBsZXQgaW5pdGlhbENhcmRzID0gaW5pdGlhbFN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBpbml0aWFsQ2FyZHMgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSFVGRkxFOlxyXG4gICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgbGV0IGxlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmFycmF5XSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJTUlUX0NBUkRTOlxyXG4gICAgICBsZXQgbGltaXRlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICBsaW1pdGVkQ2FyZHMuc3BsaWNlKHN0YXRlLm51bWJlck9mUGFpcnMpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4ubGltaXRlZENhcmRzXSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERVUExJQ0FURV9DQVJEUzpcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczEgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMyID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgbGV0IG5ld0R1cGxpY2F0ZWRDYXJkcyA9IFsuLi5kdXBsaWNhdGVkQ2FyZHMxLCAuLi5kdXBsaWNhdGVkQ2FyZHMyXTtcclxuICAgICAgbmV3RHVwbGljYXRlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGVsLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGVsLm1hdGNoID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IG5ld0R1cGxpY2F0ZWRDYXJkcyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGTElQX0FMTF9DQVJEUzpcclxuICAgICAgbGV0IGZsaXBlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGZsaXBlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5tYXRjaCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGVsLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IFsuLi5mbGlwZWRDYXJkc10sXHJcbiAgICAgICAgbWF0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIGNhc2UgRkxJUF9DQVJEOlxyXG4gICAgICBsZXQgZmxpcHBlZENhcmRJbmRleCA9IHN0YXRlLmNhcmRzLmZpbmRJbmRleChcclxuICAgICAgICAoZWwpID0+IGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIC8vIGZsaXAgZmlyc3QgY2FyZCBhbmQgcmVtZW1iZXIgaXRcclxuICAgICAgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMCkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gc3RhdGUuY2xpY2tDb3VudGVyO1xyXG4gICAgICAgIG5ld0NvdW50ZXIrKztcclxuXHJcbiAgICAgICAgbGV0IGFsbENhcmRzID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdEZsaXBwZWRDYXJkID0gYWxsQ2FyZHNbZmxpcHBlZENhcmRJbmRleF07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBjYXJkczogWy4uLmFsbENhcmRzXSxcclxuICAgICAgICAgIGNsaWNrQ291bnRlcjogbmV3Q291bnRlcixcclxuICAgICAgICAgIG1hdGNoaW5nQ2FyZDogZmlyc3RGbGlwcGVkQ2FyZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5jbGlja0NvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICBsZXQgbmV3Q291bnRlciA9IDA7XHJcblxyXG4gICAgICAgIC8vIGZsaXAgU2Vjb25kIENhcmRcclxuICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRvZXMgdGhlIHR3byBjYXJkcyBtYXRjaCA/XHJcbiAgICAgICAgaWYgKHN0YXRlLm1hdGNoaW5nQ2FyZC5zcmMgPT09IGFsbENhcmRzW2ZsaXBwZWRDYXJkSW5kZXhdLnNyYykge1xyXG4gICAgICAgICAgYWxsQ2FyZHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsLnNyYyA9PT0gc3RhdGUubWF0Y2hpbmdDYXJkLnNyYykge1xyXG4gICAgICAgICAgICAgIGVsLm1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4uYWxsQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgbWF0Y2hpbmc6IHRydWUsXHJcbiAgICAgICAgICBtYXRjaGluZ0NhcmQ6IGluaXRpYWxTdGF0ZS5tYXRjaGluZ0NhcmQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGZsaXAgc2Vjb25kIGNhcmQgYW5kIGNoYW5nZSBtYXRjaDp0cnVlIGZvciBib3RoXHJcblxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9