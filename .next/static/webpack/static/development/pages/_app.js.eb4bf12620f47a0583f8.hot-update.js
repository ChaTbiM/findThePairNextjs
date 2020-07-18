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
        var _newCounter = 0;
        var matchedCards = clone(state.cards);
        matchedCards.forEach(function (el) {
          if (el.src == state.currentFlipedImages) {
            el.match = true;
          }
        });
        return Object.assign({}, state, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJjbGlja0NvdW50ZXIiLCJjdXJyZW50RmxpcGVkSW1hZ2VzIiwiZ2FtZVN0YXRlIiwiY2FyZHMiLCJzcmMiLCJpc0FjdGl2ZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTIiwiT2JqZWN0IiwiYXNzaWduIiwiU1RBUlRfR0FNRSIsIlJFU0VUX0NBUkRTIiwiaW5pdGlhbENhcmRzIiwiU0hVRkZMRSIsImFycmF5IiwibGVuIiwibGVuZ3RoIiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiTElNSVRfQ0FSRFMiLCJsaW1pdGVkQ2FyZHMiLCJzcGxpY2UiLCJEVVBMSUNBVEVfQ0FSRFMiLCJkdXBsaWNhdGVkQ2FyZHMxIiwiZHVwbGljYXRlZENhcmRzMiIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImZvckVhY2giLCJlbCIsImluZGV4IiwibWF0Y2giLCJjb25zb2xlIiwibG9nIiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwZWRDYXJkcyIsIkZMSVBfQ0FSRCIsImZsaXBlZENhcmRJbmRleCIsImZpbmRJbmRleCIsIm5ld0ZsaXBlZENhcmRTdGF0ZSIsIm5ld0NvdW50ZXIiLCJjdXJyZW50RmxpcGVkSW1hZ2VzQ2xvbmUiLCJtYXRjaGVkQ2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQywwQ0FBRCxDQUFQLEVBQWQ7O0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxlQUFhLEVBQUUsQ0FESTtBQUVuQkMsT0FBSyxFQUFFLEVBRlk7QUFH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OztBQUVBLFVBQUlFLEtBQUssQ0FBQ1AsWUFBTixLQUF1QixDQUEzQixFQUE4QjtBQUM1QixZQUFJK0MsVUFBVSxHQUFHeEMsS0FBSyxDQUFDUCxZQUF2QjtBQUNBK0Msa0JBQVU7QUFDVixZQUFJQyx3QkFBd0IsR0FBR0Ysa0JBQWtCLENBQUNGLGVBQUQsQ0FBbEIsQ0FBb0N4QyxHQUFuRTtBQUVBLGVBQU9TLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCSixlQUFLLEVBQUUsNkZBQUkyQyxrQkFBTixDQUR5QjtBQUU5QjlDLHNCQUFZLEVBQUUrQyxVQUZnQjtBQUc5QjlDLDZCQUFtQixFQUFFK0M7QUFIUyxTQUF6QixDQUFQO0FBS0QsT0FWRCxNQVVPO0FBQ0wsWUFBSUQsV0FBVSxHQUFHLENBQWpCO0FBQ0EsWUFBSUUsWUFBWSxHQUFHdEQsS0FBSyxDQUFDWSxLQUFLLENBQUNKLEtBQVAsQ0FBeEI7QUFDQThDLG9CQUFZLENBQUNkLE9BQWIsQ0FBcUIsVUFBQ0MsRUFBRCxFQUFRO0FBQzNCLGNBQUlBLEVBQUUsQ0FBQ2hDLEdBQUgsSUFBVUcsS0FBSyxDQUFDTixtQkFBcEIsRUFBeUM7QUFDdkNtQyxjQUFFLENBQUNFLEtBQUgsR0FBVyxJQUFYO0FBQ0Q7QUFDRixTQUpEO0FBTUEsZUFBT3pCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCUCxzQkFBWSxFQUFFK0MsV0FEZ0I7QUFFOUI5Qyw2QkFBbUIsRUFBRUosWUFBWSxDQUFDSTtBQUZKLFNBQXpCLENBQVA7QUFJRDs7QUFFRDs7QUFDRjtBQUNFLGFBQU9NLEtBQVA7QUE3Rko7QUErRkQ7O0FBRWNELDBFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZWI0YmYxMjYyMGY0N2EwNTgzZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyxcclxuICBTSFVGRkxFLFxyXG4gIExJTUlUX0NBUkRTLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBTVEFSVF9HQU1FLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBjbG9uZSA9IHJlcXVpcmUoXCJyZmRjXCIpKCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbnVtYmVyT2ZQYWlyczogNixcclxuICB3aWR0aDogNzMsXHJcbiAgY2xpY2tDb3VudGVyOiAwLFxyXG4gIGN1cnJlbnRGbGlwZWRJbWFnZXM6IG51bGwsXHJcbiAgZ2FtZVN0YXRlOiBcImxvYWRpbmdcIixcclxuICBjYXJkczogW1xyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWJ1bm55LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2cuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtaG9yc2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtaG9yc2UtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLWxvbmRvbi10b3dlcmJyaWRnZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW1vc2Nvdy1yZWRzcXVhcmUuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZWRlcmxhbmRlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5ld3lvcmstcHVibGljbGlicmFyeS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLXBhcmlzLWVpZmZlbHRvd2VyLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9jaXRpZXMtdG9reW8tbmlnaHQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtcmVkZGFobGlhLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdhdGVybGlsbGllcy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13aW5kY2xvY2suanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0xLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS1uZXRoZXJsYW5kcy1kZXVybmluZ2VuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtdXMtZWRnZXdvb2QuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUzpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgbnVtYmVyT2ZQYWlyczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU1RBUlRfR0FNRTpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGdhbWVTdGF0ZTogXCJwbGF5aW5nXCIgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVNFVF9DQVJEUzpcclxuICAgICAgbGV0IGluaXRpYWxDYXJkcyA9IGluaXRpYWxTdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogaW5pdGlhbENhcmRzIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0hVRkZMRTpcclxuICAgICAgbGV0IGFycmF5ID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGxldCBsZW4gPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gbGVuOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcclxuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xyXG4gICAgICAgIGFycmF5W2pdID0gdGVtcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5hcnJheV0gfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSU1JVF9DQVJEUzpcclxuICAgICAgbGV0IGxpbWl0ZWRDYXJkcyA9IHN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgbGltaXRlZENhcmRzLnNwbGljZShzdGF0ZS5udW1iZXJPZlBhaXJzKTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmxpbWl0ZWRDYXJkc10gfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBEVVBMSUNBVEVfQ0FSRFM6XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMxID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMiA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuXHJcbiAgICAgIGxldCBuZXdEdXBsaWNhdGVkQ2FyZHMgPSBbLi4uZHVwbGljYXRlZENhcmRzMSwgLi4uZHVwbGljYXRlZENhcmRzMl07XHJcbiAgICAgIG5ld0R1cGxpY2F0ZWRDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBlbC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBlbC5tYXRjaCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXdEdXBsaWNhdGVkXCIsIG5ld0R1cGxpY2F0ZWRDYXJkcyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogbmV3RHVwbGljYXRlZENhcmRzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZMSVBfQUxMX0NBUkRTOlxyXG4gICAgICBsZXQgZmxpcGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgZmxpcGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm1hdGNoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5mbGlwZWRDYXJkc10gfSk7XHJcbiAgICBjYXNlIEZMSVBfQ0FSRDpcclxuICAgICAgbGV0IGZsaXBlZENhcmRJbmRleCA9IHN0YXRlLmNhcmRzLmZpbmRJbmRleChcclxuICAgICAgICAoZWwpID0+IGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgbmV3RmxpcGVkQ2FyZFN0YXRlID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG4gICAgICBuZXdGbGlwZWRDYXJkU3RhdGVbZmxpcGVkQ2FyZEluZGV4XS5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICBpZiAoc3RhdGUuY2xpY2tDb3VudGVyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSBzdGF0ZS5jbGlja0NvdW50ZXI7XHJcbiAgICAgICAgbmV3Q291bnRlcisrO1xyXG4gICAgICAgIGxldCBjdXJyZW50RmxpcGVkSW1hZ2VzQ2xvbmUgPSBuZXdGbGlwZWRDYXJkU3RhdGVbZmxpcGVkQ2FyZEluZGV4XS5zcmM7XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2FyZHM6IFsuLi5uZXdGbGlwZWRDYXJkU3RhdGVdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgY3VycmVudEZsaXBlZEltYWdlczogY3VycmVudEZsaXBlZEltYWdlc0Nsb25lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gMDtcclxuICAgICAgICBsZXQgbWF0Y2hlZENhcmRzID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG4gICAgICAgIG1hdGNoZWRDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLnNyYyA9PSBzdGF0ZS5jdXJyZW50RmxpcGVkSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIGVsLm1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBjbGlja0NvdW50ZXI6IG5ld0NvdW50ZXIsXHJcbiAgICAgICAgICBjdXJyZW50RmxpcGVkSW1hZ2VzOiBpbml0aWFsU3RhdGUuY3VycmVudEZsaXBlZEltYWdlcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuXHJcbi8vIGZvcihsZXQgaSA9IGFycmF5Lmxlbmd0aCDigJQgMTsgaSA+IDA7IGktLSl7XHJcbi8vICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpXHJcbi8vICAgY29uc3QgdGVtcCA9IGFycmF5W2ldXHJcbi8vICAgYXJyYXlbaV0gPSBhcnJheVtqXVxyXG4vLyAgIGFycmF5W2pdID0gdGVtcFxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=