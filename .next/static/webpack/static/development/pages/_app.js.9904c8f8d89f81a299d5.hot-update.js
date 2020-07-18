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
  width: 73,
  clickCounter: 0,
  currentFlipedImages: null,
  gameState: "loading",
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
      return Object.assign({}, state, {
        numberOfPairs: action.payload
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
      });
      console.log("newDuplicated", newDuplicatedCards);
      return Object.assign({}, state, {
        cards: newDuplicatedCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FLIP_ALL_CARDS"]:
      var flipedCards = state.cards;
      flipedCards.forEach(function (el, index) {
        el.isActive = false;
      });
      return Object.assign({}, state, {
        cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(flipedCards)
      });

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FLIP_CARD"]:
      var flipedCardIndex = state.cards.findIndex(function (el) {
        return el.index === action.payload;
      });
      var newFlipedCardState = clone(state.cards);
      newFlipedCardState[flipedCardIndex].isActive = true;

      if (state.clickCounter === 0) {
        var newCounter = state.clickCounter;
        newCounter++;
        var currentFlipedImagesClone = newFlipedCardState[flipedCardIndex].src;
        console.log("if", state.clickCounter);
        return Object.assign({}, state, {
          cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newFlipedCardState),
          clickCounter: newCounter,
          currentFlipedImages: currentFlipedImagesClone
        });
      } else {
        var _newCounter = 0;
        console.log(state.currentFlipedImages, "current flipped");
        return Object.assign({}, state, {
          clickCounter: _newCounter,
          currentFlipedImages: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState.currentFlipedImages)
        });
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJjbGlja0NvdW50ZXIiLCJjdXJyZW50RmxpcGVkSW1hZ2VzIiwiZ2FtZVN0YXRlIiwiY2FyZHMiLCJzcmMiLCJpc0FjdGl2ZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTIiwiT2JqZWN0IiwiYXNzaWduIiwiU1RBUlRfR0FNRSIsIlJFU0VUX0NBUkRTIiwiaW5pdGlhbENhcmRzIiwiU0hVRkZMRSIsImFycmF5IiwibGVuIiwibGVuZ3RoIiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiTElNSVRfQ0FSRFMiLCJsaW1pdGVkQ2FyZHMiLCJzcGxpY2UiLCJEVVBMSUNBVEVfQ0FSRFMiLCJkdXBsaWNhdGVkQ2FyZHMxIiwiZHVwbGljYXRlZENhcmRzMiIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImZvckVhY2giLCJlbCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkZMSVBfQUxMX0NBUkRTIiwiZmxpcGVkQ2FyZHMiLCJGTElQX0NBUkQiLCJmbGlwZWRDYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdGbGlwZWRDYXJkU3RhdGUiLCJuZXdDb3VudGVyIiwiY3VycmVudEZsaXBlZEltYWdlc0Nsb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBUCxFQUFkOztBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsZUFBYSxFQUFFLENBREk7QUFFbkJDLE9BQUssRUFBRSxFQUZZO0FBR25CQyxjQUFZLEVBQUUsQ0FISztBQUlu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VixZQUFJQyx3QkFBd0IsR0FBR0Ysa0JBQWtCLENBQUNGLGVBQUQsQ0FBbEIsQ0FBb0N2QyxHQUFuRTtBQUNBa0MsZUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQmhDLEtBQUssQ0FBQ1AsWUFBeEI7QUFFQSxlQUFPYSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxLQUFsQixFQUF5QjtBQUM5QkosZUFBSyxFQUFFLDZGQUFJMEMsa0JBQU4sQ0FEeUI7QUFFOUI3QyxzQkFBWSxFQUFFOEMsVUFGZ0I7QUFHOUI3Qyw2QkFBbUIsRUFBRThDO0FBSFMsU0FBekIsQ0FBUDtBQUtELE9BWEQsTUFXTztBQUNMLFlBQUlELFdBQVUsR0FBRyxDQUFqQjtBQUNBUixlQUFPLENBQUNDLEdBQVIsQ0FBWWhDLEtBQUssQ0FBQ04sbUJBQWxCLEVBQXVDLGlCQUF2QztBQUNBLGVBQU9ZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCUCxzQkFBWSxFQUFFOEMsV0FEZ0I7QUFFOUI3Qyw2QkFBbUIsRUFBRSw2RkFBSUosWUFBWSxDQUFDSSxtQkFBbkI7QUFGVyxTQUF6QixDQUFQO0FBSUQ7O0FBRUQ7O0FBQ0Y7QUFDRSxhQUFPTSxLQUFQO0FBckZKO0FBdUZEOztBQUVjRCwwRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjk5MDRjOGY4ZDg5ZjgxYTI5OWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBMSU1JVF9DQVJEUyxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwicmZkY1wiKSgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG51bWJlck9mUGFpcnM6IDYsXHJcbiAgd2lkdGg6IDczLFxyXG4gIGNsaWNrQ291bnRlcjogMCxcclxuICBjdXJyZW50RmxpcGVkSW1hZ2VzOiBudWxsLFxyXG4gIGdhbWVTdGF0ZTogXCJsb2FkaW5nXCIsXHJcbiAgY2FyZHM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1idW5ueS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1sb25kb24tdG93ZXJicmlkZ2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1tb3Njb3ctcmVkc3F1YXJlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmVkZXJsYW5kZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZXd5b3JrLXB1YmxpY2xpYnJhcnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1wYXJpcy1laWZmZWx0b3dlci5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvY2l0aWVzLXRva3lvLW5pZ2h0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXJlZGRhaGxpYS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13YXRlcmxpbGxpZXMuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2luZGNsb2NrLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtbmV0aGVybGFuZHMtZGV1cm5pbmdlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLXVzLWVkZ2V3b29kLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByb290UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlM6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG51bWJlck9mUGFpcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNUQVJUX0dBTUU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBnYW1lU3RhdGU6IFwicGxheWluZ1wiIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVTRVRfQ0FSRFM6XHJcbiAgICAgIGxldCBpbml0aWFsQ2FyZHMgPSBpbml0aWFsU3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IGluaXRpYWxDYXJkcyB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNIVUZGTEU6XHJcbiAgICAgIGxldCBhcnJheSA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBsZXQgbGVuID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uYXJyYXldIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElNSVRfQ0FSRFM6XHJcbiAgICAgIGxldCBsaW1pdGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIGxpbWl0ZWRDYXJkcy5zcGxpY2Uoc3RhdGUubnVtYmVyT2ZQYWlycyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5saW1pdGVkQ2FyZHNdIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRFVQTElDQVRFX0NBUkRTOlxyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMSA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczIgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICBsZXQgbmV3RHVwbGljYXRlZENhcmRzID0gWy4uLmR1cGxpY2F0ZWRDYXJkczEsIC4uLmR1cGxpY2F0ZWRDYXJkczJdO1xyXG4gICAgICBuZXdEdXBsaWNhdGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaW5kZXggPSBpbmRleDtcclxuICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ld0R1cGxpY2F0ZWRcIiwgbmV3RHVwbGljYXRlZENhcmRzKTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNhcmRzOiBuZXdEdXBsaWNhdGVkQ2FyZHMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRkxJUF9BTExfQ0FSRFM6XHJcbiAgICAgIGxldCBmbGlwZWRDYXJkcyA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBmbGlwZWRDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBlbC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uZmxpcGVkQ2FyZHNdIH0pO1xyXG4gICAgY2FzZSBGTElQX0NBUkQ6XHJcbiAgICAgIGxldCBmbGlwZWRDYXJkSW5kZXggPSBzdGF0ZS5jYXJkcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGVsKSA9PiBlbC5pbmRleCA9PT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuICAgICAgbGV0IG5ld0ZsaXBlZENhcmRTdGF0ZSA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgbmV3RmxpcGVkQ2FyZFN0YXRlW2ZsaXBlZENhcmRJbmRleF0uaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMCkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gc3RhdGUuY2xpY2tDb3VudGVyO1xyXG4gICAgICAgIG5ld0NvdW50ZXIrKztcclxuICAgICAgICBsZXQgY3VycmVudEZsaXBlZEltYWdlc0Nsb25lID0gbmV3RmxpcGVkQ2FyZFN0YXRlW2ZsaXBlZENhcmRJbmRleF0uc3JjO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWZcIiwgc3RhdGUuY2xpY2tDb3VudGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBjYXJkczogWy4uLm5ld0ZsaXBlZENhcmRTdGF0ZV0sXHJcbiAgICAgICAgICBjbGlja0NvdW50ZXI6IG5ld0NvdW50ZXIsXHJcbiAgICAgICAgICBjdXJyZW50RmxpcGVkSW1hZ2VzOiBjdXJyZW50RmxpcGVkSW1hZ2VzQ2xvbmUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmN1cnJlbnRGbGlwZWRJbWFnZXMsIFwiY3VycmVudCBmbGlwcGVkXCIpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgY3VycmVudEZsaXBlZEltYWdlczogWy4uLmluaXRpYWxTdGF0ZS5jdXJyZW50RmxpcGVkSW1hZ2VzXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuXHJcbi8vIGZvcihsZXQgaSA9IGFycmF5Lmxlbmd0aCDigJQgMTsgaSA+IDA7IGktLSl7XHJcbi8vICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpXHJcbi8vICAgY29uc3QgdGVtcCA9IGFycmF5W2ldXHJcbi8vICAgYXJyYXlbaV0gPSBhcnJheVtqXVxyXG4vLyAgIGFycmF5W2pdID0gdGVtcFxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=