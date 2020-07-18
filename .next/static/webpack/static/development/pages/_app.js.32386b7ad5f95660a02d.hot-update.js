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



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  numberOfPairs: 6,
  width: 73,
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
      var duplicatedCards1 = state.cards.slice();
      var duplicatedCards2 = state.cards.slice();
      var newDuplicatedCards = [].concat(duplicatedCards2.slice(), duplicatedCards1.slice());
      newDuplicatedCards.forEach(function (el, index) {
        el.isActive = true;
        el.index = index;
      });
      console.log("newDuplicated", newDuplicatedCards);
      return Object.assign({}, state, {
        cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newDuplicatedCards.slice())
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

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FLIP_CARD"]: // flipedCard.isActive = true;
    // return Object.assign({}, state, {
    //   cards: [{ ...action.payload, isActive: true ],
    // });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJnYW1lU3RhdGUiLCJjYXJkcyIsInNyYyIsImlzQWN0aXZlIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJPYmplY3QiLCJhc3NpZ24iLCJTVEFSVF9HQU1FIiwiUkVTRVRfQ0FSRFMiLCJpbml0aWFsQ2FyZHMiLCJTSFVGRkxFIiwiYXJyYXkiLCJsZW4iLCJsZW5ndGgiLCJpIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJMSU1JVF9DQVJEUyIsImxpbWl0ZWRDYXJkcyIsInNwbGljZSIsIkRVUExJQ0FURV9DQVJEUyIsImR1cGxpY2F0ZWRDYXJkczEiLCJzbGljZSIsImR1cGxpY2F0ZWRDYXJkczIiLCJuZXdEdXBsaWNhdGVkQ2FyZHMiLCJjb25jYXQiLCJmb3JFYWNoIiwiZWwiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJGTElQX0FMTF9DQVJEUyIsImZsaXBlZENhcmRzIiwiRkxJUF9DQVJEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsZUFBYSxFQUFFLENBREk7QUFFbkJDLE9BQUssRUFBRSxFQUZZO0FBR25CQyxXQUFTLEVBQUUsU0FIUTtBQUluQkMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsT0FBRyxFQUFFLDJCQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBREssRUFLTDtBQUNFRCxPQUFHLEVBQUUseUJBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FMSyxFQVNMO0FBQ0VELE9BQUcsRUFBRSwyQkFEUDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQVRLLEVBYUw7QUFDRUQsT0FB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TUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQlAsS0FBbEIsRUFBeUI7QUFDOUJKLGFBQUssRUFBRSw2RkFBSWdDLGtCQUFrQixDQUFDRixLQUFuQixFQUFOO0FBRHlCLE9BQXpCLENBQVA7QUFHQTs7QUFDRixTQUFLUyxzRUFBTDtBQUNFLFVBQUlDLFdBQVcsR0FBR3BDLEtBQUssQ0FBQ0osS0FBeEI7QUFDQXdDLGlCQUFXLENBQUNOLE9BQVosQ0FBb0IsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDakNELFVBQUUsQ0FBQ2pDLFFBQUgsR0FBYyxLQUFkO0FBQ0QsT0FGRDtBQUdBLGFBQU9RLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQUVKLGFBQUssRUFBRSw2RkFBSXdDLFdBQU47QUFBUCxPQUF6QixDQUFQOztBQUNGLFNBQUtDLGlFQUFMLENBM0RGLENBNERFO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0UsYUFBT3JDLEtBQVA7QUFsRUo7QUFvRUQ7O0FBRWNELDBFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMzIzODZiN2FkNWY5NTY2MGEwMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyxcclxuICBTSFVGRkxFLFxyXG4gIExJTUlUX0NBUkRTLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBTVEFSVF9HQU1FLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG51bWJlck9mUGFpcnM6IDYsXHJcbiAgd2lkdGg6IDczLFxyXG4gIGdhbWVTdGF0ZTogXCJsb2FkaW5nXCIsXHJcbiAgY2FyZHM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1idW5ueS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWhvcnNlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1sb25kb24tdG93ZXJicmlkZ2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1tb3Njb3ctcmVkc3F1YXJlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmVkZXJsYW5kZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZXd5b3JrLXB1YmxpY2xpYnJhcnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1wYXJpcy1laWZmZWx0b3dlci5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvY2l0aWVzLXRva3lvLW5pZ2h0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXJlZGRhaGxpYS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13YXRlcmxpbGxpZXMuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2luZGNsb2NrLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtbmV0aGVybGFuZHMtZGV1cm5pbmdlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLXVzLWVkZ2V3b29kLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByb290UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlM6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG51bWJlck9mUGFpcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNUQVJUX0dBTUU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBnYW1lU3RhdGU6IFwicGxheWluZ1wiIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVTRVRfQ0FSRFM6XHJcbiAgICAgIGxldCBpbml0aWFsQ2FyZHMgPSBpbml0aWFsU3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IGluaXRpYWxDYXJkcyB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNIVUZGTEU6XHJcbiAgICAgIGxldCBhcnJheSA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBsZXQgbGVuID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uYXJyYXldIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElNSVRfQ0FSRFM6XHJcbiAgICAgIGxldCBsaW1pdGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIGxpbWl0ZWRDYXJkcy5zcGxpY2Uoc3RhdGUubnVtYmVyT2ZQYWlycyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5saW1pdGVkQ2FyZHNdIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRFVQTElDQVRFX0NBUkRTOlxyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMSA9IHN0YXRlLmNhcmRzLnNsaWNlKCk7XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMyID0gc3RhdGUuY2FyZHMuc2xpY2UoKTtcclxuXHJcbiAgICAgIGxldCBuZXdEdXBsaWNhdGVkQ2FyZHMgPSBbXS5jb25jYXQoXHJcbiAgICAgICAgZHVwbGljYXRlZENhcmRzMi5zbGljZSgpLFxyXG4gICAgICAgIGR1cGxpY2F0ZWRDYXJkczEuc2xpY2UoKVxyXG4gICAgICApO1xyXG4gICAgICBuZXdEdXBsaWNhdGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGVsLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ld0R1cGxpY2F0ZWRcIiwgbmV3RHVwbGljYXRlZENhcmRzKTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNhcmRzOiBbLi4ubmV3RHVwbGljYXRlZENhcmRzLnNsaWNlKCldLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZMSVBfQUxMX0NBUkRTOlxyXG4gICAgICBsZXQgZmxpcGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgZmxpcGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmZsaXBlZENhcmRzXSB9KTtcclxuICAgIGNhc2UgRkxJUF9DQVJEOlxyXG4gICAgLy8gZmxpcGVkQ2FyZC5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAvLyAgIGNhcmRzOiBbeyAuLi5hY3Rpb24ucGF5bG9hZCwgaXNBY3RpdmU6IHRydWUgXSxcclxuICAgIC8vIH0pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG4vLyBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgg4oCUIDE7IGkgPiAwOyBpLS0pe1xyXG4vLyAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKVxyXG4vLyAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXVxyXG4vLyAgIGFycmF5W2ldID0gYXJyYXlbal1cclxuLy8gICBhcnJheVtqXSA9IHRlbXBcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9