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
      } else if (state.clickCounter === 1) {} // flip second card and change match:true for both


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJjbGlja0NvdW50ZXIiLCJtYXRjaGluZyIsIm1hdGNoaW5nQ2FyZCIsImNhcmRzIiwic3JjIiwiaXNBY3RpdmUiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyIsIk9iamVjdCIsImFzc2lnbiIsIlNUQVJUX0dBTUUiLCJnYW1lU3RhdGUiLCJSRVNFVF9DQVJEUyIsImluaXRpYWxDYXJkcyIsIlNIVUZGTEUiLCJhcnJheSIsImxlbiIsImxlbmd0aCIsImkiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsIkxJTUlUX0NBUkRTIiwibGltaXRlZENhcmRzIiwic3BsaWNlIiwiRFVQTElDQVRFX0NBUkRTIiwiZHVwbGljYXRlZENhcmRzMSIsImR1cGxpY2F0ZWRDYXJkczIiLCJuZXdEdXBsaWNhdGVkQ2FyZHMiLCJmb3JFYWNoIiwiZWwiLCJpbmRleCIsIm1hdGNoIiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwZWRDYXJkcyIsIkZMSVBfQ0FSRCIsImZsaXBwZWRDYXJkSW5kZXgiLCJmaW5kSW5kZXgiLCJhbGxDYXJkcyIsIm5ld0NvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQywwQ0FBRCxDQUFQLEVBQWQ7O0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxlQUFhLEVBQUUsQ0FESTtBQUVuQkMsT0FBSyxFQUFFLEVBRlk7QUFHbkJDLGNBQVksRUFBRSxDQUhLO0FBSW5CQyxVQUFRLEVBQUUsS0FKUztBQUtuQkMsY0FBWSxFQUFFLElBTEs7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QUFDUCxZQUFOLEtBQXVCLENBQTNCLEVBQThCLENBQ3BDLENBVkgsQ0FZRTs7O0FBRUE7O0FBQ0Y7QUFDRSxhQUFPTyxLQUFQO0FBN0VKO0FBK0VEOztBQUVjRCwwRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjc2OTIzMzg1OWY3MDM5NTg0ZDFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBMSU1JVF9DQVJEUyxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwicmZkY1wiKSgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG51bWJlck9mUGFpcnM6IDYsXHJcbiAgd2lkdGg6IDczLFxyXG4gIGNsaWNrQ291bnRlcjogMCxcclxuICBtYXRjaGluZzogZmFsc2UsXHJcbiAgbWF0Y2hpbmdDYXJkOiBudWxsLFxyXG4gIGNhcmRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtYnVubnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2ctMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbG9uZG9uLXRvd2VyYnJpZGdlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbW9zY293LXJlZHNxdWFyZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5lZGVybGFuZGVuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmV3eW9yay1wdWJsaWNsaWJyYXJ5LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtcGFyaXMtZWlmZmVsdG93ZXIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2NpdGllcy10b2t5by1uaWdodC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy1yZWRkYWhsaWEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2F0ZXJsaWxsaWVzLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdpbmRjbG9jay5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLW5ldGhlcmxhbmRzLWRldXJuaW5nZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS11cy1lZGdld29vZC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTlVNQkVSX09GX1BBSVJTOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBudW1iZXJPZlBhaXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTVEFSVF9HQU1FOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZ2FtZVN0YXRlOiBcInBsYXlpbmdcIiB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0NBUkRTOlxyXG4gICAgICBsZXQgaW5pdGlhbENhcmRzID0gaW5pdGlhbFN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBpbml0aWFsQ2FyZHMgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSFVGRkxFOlxyXG4gICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgbGV0IGxlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmFycmF5XSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJTUlUX0NBUkRTOlxyXG4gICAgICBsZXQgbGltaXRlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICBsaW1pdGVkQ2FyZHMuc3BsaWNlKHN0YXRlLm51bWJlck9mUGFpcnMpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4ubGltaXRlZENhcmRzXSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERVUExJQ0FURV9DQVJEUzpcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczEgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMyID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgbGV0IG5ld0R1cGxpY2F0ZWRDYXJkcyA9IFsuLi5kdXBsaWNhdGVkQ2FyZHMxLCAuLi5kdXBsaWNhdGVkQ2FyZHMyXTtcclxuICAgICAgbmV3RHVwbGljYXRlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGVsLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGVsLm1hdGNoID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IG5ld0R1cGxpY2F0ZWRDYXJkcyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGTElQX0FMTF9DQVJEUzpcclxuICAgICAgbGV0IGZsaXBlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGZsaXBlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5tYXRjaCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGVsLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IFsuLi5mbGlwZWRDYXJkc10sXHJcbiAgICAgICAgbWF0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIGNhc2UgRkxJUF9DQVJEOlxyXG4gICAgICBsZXQgZmxpcHBlZENhcmRJbmRleCA9IHN0YXRlLmNhcmRzLmZpbmRJbmRleChcclxuICAgICAgICAoZWwpID0+IGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIC8vIGZsaXAgZmlyc3QgY2FyZCBhbmQgcmVtZW1iZXIgaXRcclxuICAgICAgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMCkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gc3RhdGUuY2xpY2tDb3VudGVyO1xyXG4gICAgICAgIG5ld0NvdW50ZXIrKztcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5jbGlja0NvdW50ZXIgPT09IDEpIHtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZmxpcCBzZWNvbmQgY2FyZCBhbmQgY2hhbmdlIG1hdGNoOnRydWUgZm9yIGJvdGhcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG4vLyBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgg4oCUIDE7IGkgPiAwOyBpLS0pe1xyXG4vLyAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKVxyXG4vLyAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXVxyXG4vLyAgIGFycmF5W2ldID0gYXJyYXlbal1cclxuLy8gICBhcnJheVtqXSA9IHRlbXBcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9