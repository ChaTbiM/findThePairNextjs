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
        el.match = false;
      });
      console.log("newDuplicated", newDuplicatedCards);
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
        return Object.assign({}, state, {
          cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newFlipedCardState),
          clickCounter: newCounter,
          currentFlipedImages: currentFlipedImagesClone
        });
      } else {
        var _newCounter = 0; // let matchedCards = clone(state.cards);
        // matchedCards.forEach((el) => {
        //   if (el.src == state.currentFlipedImages) {
        //     el.match = true;
        //   }
        // });

        return Object.assign({}, state, {
          cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(matchedCards),
          clickCounter: _newCounter,
          currentFlipedImages: initialState.currentFlipedImages
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJjbGlja0NvdW50ZXIiLCJjdXJyZW50RmxpcGVkSW1hZ2VzIiwiZ2FtZVN0YXRlIiwiY2FyZHMiLCJzcmMiLCJpc0FjdGl2ZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTIiwiT2JqZWN0IiwiYXNzaWduIiwiU1RBUlRfR0FNRSIsIlJFU0VUX0NBUkRTIiwiaW5pdGlhbENhcmRzIiwiU0hVRkZMRSIsImFycmF5IiwibGVuIiwibGVuZ3RoIiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiTElNSVRfQ0FSRFMiLCJsaW1pdGVkQ2FyZHMiLCJzcGxpY2UiLCJEVVBMSUNBVEVfQ0FSRFMiLCJkdXBsaWNhdGVkQ2FyZHMxIiwiZHVwbGljYXRlZENhcmRzMiIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImZvckVhY2giLCJlbCIsImluZGV4IiwibWF0Y2giLCJjb25zb2xlIiwibG9nIiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwZWRDYXJkcyIsIkZMSVBfQ0FSRCIsImZsaXBlZENhcmRJbmRleCIsImZpbmRJbmRleCIsIm5ld0ZsaXBlZENhcmRTdGF0ZSIsIm5ld0NvdW50ZXIiLCJjdXJyZW50RmxpcGVkSW1hZ2VzQ2xvbmUiLCJtYXRjaGVkQ2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQywwQ0FBRCxDQUFQLEVBQWQ7O0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxlQUFhLEVBQUUsQ0FESTtBQUVuQkMsT0FBSyxFQUFFLEVBRlk7QUFH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OztBQUVBLFVBQUlFLEtBQUssQ0FBQ1AsWUFBTixLQUF1QixDQUEzQixFQUE4QjtBQUM1QixZQUFJK0MsVUFBVSxHQUFHeEMsS0FBSyxDQUFDUCxZQUF2QjtBQUNBK0Msa0JBQVU7QUFDVixZQUFJQyx3QkFBd0IsR0FBR0Ysa0JBQWtCLENBQUNGLGVBQUQsQ0FBbEIsQ0FBb0N4QyxHQUFuRTtBQUVBLGVBQU9TLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCSixlQUFLLEVBQUUsNkZBQUkyQyxrQkFBTixDQUR5QjtBQUU5QjlDLHNCQUFZLEVBQUUrQyxVQUZnQjtBQUc5QjlDLDZCQUFtQixFQUFFK0M7QUFIUyxTQUF6QixDQUFQO0FBS0QsT0FWRCxNQVVPO0FBQ0wsWUFBSUQsV0FBVSxHQUFHLENBQWpCLENBREssQ0FFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBT2xDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCSixlQUFLLEVBQUUsNkZBQUk4QyxZQUFOLENBRHlCO0FBRTlCakQsc0JBQVksRUFBRStDLFdBRmdCO0FBRzlCOUMsNkJBQW1CLEVBQUVKLFlBQVksQ0FBQ0k7QUFISixTQUF6QixDQUFQO0FBS0Q7O0FBRUQ7O0FBQ0Y7QUFDRSxhQUFPTSxLQUFQO0FBOUZKO0FBZ0dEOztBQUVjRCwwRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmRkYzc4NmM3YjAxMjA0ZjU0YmY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBMSU1JVF9DQVJEUyxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwicmZkY1wiKSgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG51bWJlck9mUGFpcnM6IDYsXHJcbiAgd2lkdGg6IDczLFxyXG4gIGNsaWNrQ291bnRlcjogMCxcclxuICBjdXJyZW50RmxpcGVkSW1hZ2VzOiBudWxsLFxyXG4gIGdhbWVTdGF0ZTogXCJsb2FkaW5nXCIsXHJcbiAgY2FyZHM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1idW5ueS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1sb25kb24tdG93ZXJicmlkZ2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1tb3Njb3ctcmVkc3F1YXJlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmVkZXJsYW5kZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZXd5b3JrLXB1YmxpY2xpYnJhcnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1wYXJpcy1laWZmZWx0b3dlci5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvY2l0aWVzLXRva3lvLW5pZ2h0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXJlZGRhaGxpYS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13YXRlcmxpbGxpZXMuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2luZGNsb2NrLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtbmV0aGVybGFuZHMtZGV1cm5pbmdlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLXVzLWVkZ2V3b29kLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByb290UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlM6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG51bWJlck9mUGFpcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNUQVJUX0dBTUU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBnYW1lU3RhdGU6IFwicGxheWluZ1wiIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVTRVRfQ0FSRFM6XHJcbiAgICAgIGxldCBpbml0aWFsQ2FyZHMgPSBpbml0aWFsU3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IGluaXRpYWxDYXJkcyB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNIVUZGTEU6XHJcbiAgICAgIGxldCBhcnJheSA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBsZXQgbGVuID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uYXJyYXldIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElNSVRfQ0FSRFM6XHJcbiAgICAgIGxldCBsaW1pdGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIGxpbWl0ZWRDYXJkcy5zcGxpY2Uoc3RhdGUubnVtYmVyT2ZQYWlycyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5saW1pdGVkQ2FyZHNdIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRFVQTElDQVRFX0NBUkRTOlxyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMSA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczIgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICBsZXQgbmV3RHVwbGljYXRlZENhcmRzID0gWy4uLmR1cGxpY2F0ZWRDYXJkczEsIC4uLmR1cGxpY2F0ZWRDYXJkczJdO1xyXG4gICAgICBuZXdEdXBsaWNhdGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaW5kZXggPSBpbmRleDtcclxuICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWwubWF0Y2ggPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3RHVwbGljYXRlZFwiLCBuZXdEdXBsaWNhdGVkQ2FyZHMpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IG5ld0R1cGxpY2F0ZWRDYXJkcyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGTElQX0FMTF9DQVJEUzpcclxuICAgICAgbGV0IGZsaXBlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGZsaXBlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5tYXRjaCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGVsLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uZmxpcGVkQ2FyZHNdIH0pO1xyXG4gICAgY2FzZSBGTElQX0NBUkQ6XHJcbiAgICAgIGxldCBmbGlwZWRDYXJkSW5kZXggPSBzdGF0ZS5jYXJkcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGVsKSA9PiBlbC5pbmRleCA9PT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuICAgICAgbGV0IG5ld0ZsaXBlZENhcmRTdGF0ZSA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgbmV3RmxpcGVkQ2FyZFN0YXRlW2ZsaXBlZENhcmRJbmRleF0uaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMCkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gc3RhdGUuY2xpY2tDb3VudGVyO1xyXG4gICAgICAgIG5ld0NvdW50ZXIrKztcclxuICAgICAgICBsZXQgY3VycmVudEZsaXBlZEltYWdlc0Nsb25lID0gbmV3RmxpcGVkQ2FyZFN0YXRlW2ZsaXBlZENhcmRJbmRleF0uc3JjO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4ubmV3RmxpcGVkQ2FyZFN0YXRlXSxcclxuICAgICAgICAgIGNsaWNrQ291bnRlcjogbmV3Q291bnRlcixcclxuICAgICAgICAgIGN1cnJlbnRGbGlwZWRJbWFnZXM6IGN1cnJlbnRGbGlwZWRJbWFnZXNDbG9uZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbmV3Q291bnRlciA9IDA7XHJcbiAgICAgICAgLy8gbGV0IG1hdGNoZWRDYXJkcyA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgICAvLyBtYXRjaGVkQ2FyZHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAvLyAgIGlmIChlbC5zcmMgPT0gc3RhdGUuY3VycmVudEZsaXBlZEltYWdlcykge1xyXG4gICAgICAgIC8vICAgICBlbC5tYXRjaCA9IHRydWU7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2FyZHM6IFsuLi5tYXRjaGVkQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgY3VycmVudEZsaXBlZEltYWdlczogaW5pdGlhbFN0YXRlLmN1cnJlbnRGbGlwZWRJbWFnZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG4vLyBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgg4oCUIDE7IGkgPiAwOyBpLS0pe1xyXG4vLyAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKVxyXG4vLyAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXVxyXG4vLyAgIGFycmF5W2ldID0gYXJyYXlbal1cclxuLy8gICBhcnJheVtqXSA9IHRlbXBcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9