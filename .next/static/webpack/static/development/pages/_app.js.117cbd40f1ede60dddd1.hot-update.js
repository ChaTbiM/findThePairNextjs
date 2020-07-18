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
  currentFlipedImages: [],
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
        var currentFlipedImagesClone = clone(state.currentFlipedImages);
        currentFlipedImagesClone.push(newFlipedCardState[flipedCardIndex]);
        console.log("if", state.clickCounter);
        return Object.assign({}, state, {
          cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newFlipedCardState),
          clickCounter: newCounter,
          currentFlipedImages: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(currentFlipedImagesClone)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJjbGlja0NvdW50ZXIiLCJjdXJyZW50RmxpcGVkSW1hZ2VzIiwiZ2FtZVN0YXRlIiwiY2FyZHMiLCJzcmMiLCJpc0FjdGl2ZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTIiwiT2JqZWN0IiwiYXNzaWduIiwiU1RBUlRfR0FNRSIsIlJFU0VUX0NBUkRTIiwiaW5pdGlhbENhcmRzIiwiU0hVRkZMRSIsImFycmF5IiwibGVuIiwibGVuZ3RoIiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiTElNSVRfQ0FSRFMiLCJsaW1pdGVkQ2FyZHMiLCJzcGxpY2UiLCJEVVBMSUNBVEVfQ0FSRFMiLCJkdXBsaWNhdGVkQ2FyZHMxIiwiZHVwbGljYXRlZENhcmRzMiIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImZvckVhY2giLCJlbCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIkZMSVBfQUxMX0NBUkRTIiwiZmxpcGVkQ2FyZHMiLCJGTElQX0NBUkQiLCJmbGlwZWRDYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdGbGlwZWRDYXJkU3RhdGUiLCJuZXdDb3VudGVyIiwiY3VycmVudEZsaXBlZEltYWdlc0Nsb25lIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQVAsRUFBZDs7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLGVBQWEsRUFBRSxDQURJO0FBRW5CQyxPQUFLLEVBQUUsRUFGWTtBQUduQkMsY0FBWSxFQUFFLENB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QUFVO0FBQ1YsWUFBSUMsd0JBQXdCLEdBQUdwRCxLQUFLLENBQUNZLEtBQUssQ0FBQ04sbUJBQVAsQ0FBcEM7QUFDQThDLGdDQUF3QixDQUFDQyxJQUF6QixDQUE4Qkgsa0JBQWtCLENBQUNGLGVBQUQsQ0FBaEQ7QUFDQUwsZUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQmhDLEtBQUssQ0FBQ1AsWUFBeEI7QUFFQSxlQUFPYSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxLQUFsQixFQUF5QjtBQUM5QkosZUFBSyxFQUFFLDZGQUFJMEMsa0JBQU4sQ0FEeUI7QUFFOUI3QyxzQkFBWSxFQUFFOEMsVUFGZ0I7QUFHOUI3Qyw2QkFBbUIsRUFBRSw2RkFBSThDLHdCQUFOO0FBSFcsU0FBekIsQ0FBUDtBQUtELE9BWkQsTUFZTztBQUNMLFlBQUlELFdBQVUsR0FBRyxDQUFqQjtBQUNBUixlQUFPLENBQUNDLEdBQVIsQ0FBWWhDLEtBQUssQ0FBQ04sbUJBQWxCLEVBQXVDLGlCQUF2QztBQUNBLGVBQU9ZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCUCxzQkFBWSxFQUFFOEMsV0FEZ0I7QUFFOUI3Qyw2QkFBbUIsRUFBRSw2RkFBSUosWUFBWSxDQUFDSSxtQkFBbkI7QUFGVyxTQUF6QixDQUFQO0FBSUQ7O0FBRUQ7O0FBQ0Y7QUFDRSxhQUFPTSxLQUFQO0FBdEZKO0FBd0ZEOztBQUVjRCwwRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjExN2NiZDQwZjFlZGU2MGRkZGQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBMSU1JVF9DQVJEUyxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwicmZkY1wiKSgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG51bWJlck9mUGFpcnM6IDYsXHJcbiAgd2lkdGg6IDczLFxyXG4gIGNsaWNrQ291bnRlcjogMCxcclxuICBjdXJyZW50RmxpcGVkSW1hZ2VzOiBbXSxcclxuICBnYW1lU3RhdGU6IFwibG9hZGluZ1wiLFxyXG4gIGNhcmRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtYnVubnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2ctMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbG9uZG9uLXRvd2VyYnJpZGdlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbW9zY293LXJlZHNxdWFyZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5lZGVybGFuZGVuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmV3eW9yay1wdWJsaWNsaWJyYXJ5LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtcGFyaXMtZWlmZmVsdG93ZXIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2NpdGllcy10b2t5by1uaWdodC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy1yZWRkYWhsaWEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2F0ZXJsaWxsaWVzLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdpbmRjbG9jay5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLW5ldGhlcmxhbmRzLWRldXJuaW5nZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS11cy1lZGdld29vZC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTlVNQkVSX09GX1BBSVJTOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBudW1iZXJPZlBhaXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTVEFSVF9HQU1FOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZ2FtZVN0YXRlOiBcInBsYXlpbmdcIiB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0NBUkRTOlxyXG4gICAgICBsZXQgaW5pdGlhbENhcmRzID0gaW5pdGlhbFN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBpbml0aWFsQ2FyZHMgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSFVGRkxFOlxyXG4gICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgbGV0IGxlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmFycmF5XSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJTUlUX0NBUkRTOlxyXG4gICAgICBsZXQgbGltaXRlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICBsaW1pdGVkQ2FyZHMuc3BsaWNlKHN0YXRlLm51bWJlck9mUGFpcnMpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4ubGltaXRlZENhcmRzXSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERVUExJQ0FURV9DQVJEUzpcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczEgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMyID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgbGV0IG5ld0R1cGxpY2F0ZWRDYXJkcyA9IFsuLi5kdXBsaWNhdGVkQ2FyZHMxLCAuLi5kdXBsaWNhdGVkQ2FyZHMyXTtcclxuICAgICAgbmV3RHVwbGljYXRlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGVsLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXdEdXBsaWNhdGVkXCIsIG5ld0R1cGxpY2F0ZWRDYXJkcyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogbmV3RHVwbGljYXRlZENhcmRzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZMSVBfQUxMX0NBUkRTOlxyXG4gICAgICBsZXQgZmxpcGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgZmxpcGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmZsaXBlZENhcmRzXSB9KTtcclxuICAgIGNhc2UgRkxJUF9DQVJEOlxyXG4gICAgICBsZXQgZmxpcGVkQ2FyZEluZGV4ID0gc3RhdGUuY2FyZHMuZmluZEluZGV4KFxyXG4gICAgICAgIChlbCkgPT4gZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBuZXdGbGlwZWRDYXJkU3RhdGUgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIG5ld0ZsaXBlZENhcmRTdGF0ZVtmbGlwZWRDYXJkSW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmIChzdGF0ZS5jbGlja0NvdW50ZXIgPT09IDApIHtcclxuICAgICAgICBsZXQgbmV3Q291bnRlciA9IHN0YXRlLmNsaWNrQ291bnRlcjtcclxuICAgICAgICBuZXdDb3VudGVyKys7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGbGlwZWRJbWFnZXNDbG9uZSA9IGNsb25lKHN0YXRlLmN1cnJlbnRGbGlwZWRJbWFnZXMpO1xyXG4gICAgICAgIGN1cnJlbnRGbGlwZWRJbWFnZXNDbG9uZS5wdXNoKG5ld0ZsaXBlZENhcmRTdGF0ZVtmbGlwZWRDYXJkSW5kZXhdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlmXCIsIHN0YXRlLmNsaWNrQ291bnRlcik7XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2FyZHM6IFsuLi5uZXdGbGlwZWRDYXJkU3RhdGVdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgY3VycmVudEZsaXBlZEltYWdlczogWy4uLmN1cnJlbnRGbGlwZWRJbWFnZXNDbG9uZV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLmN1cnJlbnRGbGlwZWRJbWFnZXMsIFwiY3VycmVudCBmbGlwcGVkXCIpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgY3VycmVudEZsaXBlZEltYWdlczogWy4uLmluaXRpYWxTdGF0ZS5jdXJyZW50RmxpcGVkSW1hZ2VzXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuXHJcbi8vIGZvcihsZXQgaSA9IGFycmF5Lmxlbmd0aCDigJQgMTsgaSA+IDA7IGktLSl7XHJcbi8vICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpXHJcbi8vICAgY29uc3QgdGVtcCA9IGFycmF5W2ldXHJcbi8vICAgYXJyYXlbaV0gPSBhcnJheVtqXVxyXG4vLyAgIGFycmF5W2pdID0gdGVtcFxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=