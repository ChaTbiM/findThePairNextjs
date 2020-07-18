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
      var duplicatedCards = state.cards;
      var newDuplicatedCards = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(duplicatedCards), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(duplicatedCards));
      newDuplicatedCards.forEach(function (el, index) {
        el.isActive = true;
        el.index = index;
      });
      return Object.assign({}, state, {
        cards: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newDuplicatedCards)
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
      console.log("payload", action.payload); // flipedCard.isActive = true;

      return Object.assign({}, state, {
        cards: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cards), [_objectSpread(_objectSpread({}, action.payload), {}, {
          isActive: true
        })])
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwid2lkdGgiLCJnYW1lU3RhdGUiLCJjYXJkcyIsInNyYyIsImlzQWN0aXZlIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJPYmplY3QiLCJhc3NpZ24iLCJTVEFSVF9HQU1FIiwiUkVTRVRfQ0FSRFMiLCJpbml0aWFsQ2FyZHMiLCJTSFVGRkxFIiwiYXJyYXkiLCJsZW4iLCJsZW5ndGgiLCJpIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJMSU1JVF9DQVJEUyIsImxpbWl0ZWRDYXJkcyIsInNwbGljZSIsIkRVUExJQ0FURV9DQVJEUyIsImR1cGxpY2F0ZWRDYXJkcyIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImZvckVhY2giLCJlbCIsImluZGV4IiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwZWRDYXJkcyIsIkZMSVBfQ0FSRCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxlQUFhLEVBQUUsQ0FESTtBQUVuQkMsT0FBSyxFQUFFLEVBRlk7QUFHbkJDLFdBQVMsRUFBRSxTQUhRO0FBSW5CQyxPQUFLLEVBQUUsQ0FDTDtBQUNFQyxPQUFHLEVBQUUsMkJBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FESyxFQUtMO0FBQ0VELE9BQUcsRUFBRSx5QkFEUDtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQUxLLEVBU0w7QUFDRUQsT0FBRyxFQUFFLDJCQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBVEssRUFhTDtBQUNFRCxPQUFHLEVBQUUseUJBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0Fi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akNELFVBQUUsQ0FBQzlCLFFBQUgsR0FBYyxLQUFkO0FBQ0QsT0FGRDtBQUdBLGFBQU9RLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQUVKLGFBQUssRUFBRSw2RkFBSW1DLFdBQU47QUFBUCxPQUF6QixDQUFQOztBQUNGLFNBQUtDLGlFQUFMO0FBQ0VDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJqQyxNQUFNLENBQUNHLE9BQTlCLEVBREYsQ0FHRTs7QUFFQSxhQUFPRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxLQUFsQixFQUF5QjtBQUM5QkosYUFBSyx5R0FBTUksS0FBSyxDQUFDSixLQUFaLG9DQUF3QkssTUFBTSxDQUFDRyxPQUEvQjtBQUF3Q04sa0JBQVEsRUFBRTtBQUFsRDtBQUR5QixPQUF6QixDQUFQOztBQUdGO0FBQ0UsYUFBT0UsS0FBUDtBQTVESjtBQThERDs7QUFFY0QsMEVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy45YjBhZDJkYjEwYjc4NjdiZTE0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbnVtYmVyT2ZQYWlyczogNixcclxuICB3aWR0aDogNzMsXHJcbiAgZ2FtZVN0YXRlOiBcImxvYWRpbmdcIixcclxuICBjYXJkczogW1xyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWJ1bm55LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1jYXQtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2cuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtZG9nLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtaG9yc2UuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtaG9yc2UtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLWxvbmRvbi10b3dlcmJyaWRnZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW1vc2Nvdy1yZWRzcXVhcmUuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FyY2hpdGVjdHVyZS1uZWRlcmxhbmRlbi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5ld3lvcmstcHVibGljbGlicmFyeS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLXBhcmlzLWVpZmZlbHRvd2VyLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9jaXRpZXMtdG9reW8tbmlnaHQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtcmVkZGFobGlhLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdhdGVybGlsbGllcy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy13aW5kY2xvY2suanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0xLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS1uZXRoZXJsYW5kcy1kZXVybmluZ2VuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtdXMtZWRnZXdvb2QuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUzpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgbnVtYmVyT2ZQYWlyczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU1RBUlRfR0FNRTpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGdhbWVTdGF0ZTogXCJwbGF5aW5nXCIgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVNFVF9DQVJEUzpcclxuICAgICAgbGV0IGluaXRpYWxDYXJkcyA9IGluaXRpYWxTdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogaW5pdGlhbENhcmRzIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0hVRkZMRTpcclxuICAgICAgbGV0IGFycmF5ID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGxldCBsZW4gPSBhcnJheS5sZW5ndGggLSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gbGVuOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcclxuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xyXG4gICAgICAgIGFycmF5W2pdID0gdGVtcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5hcnJheV0gfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSU1JVF9DQVJEUzpcclxuICAgICAgbGV0IGxpbWl0ZWRDYXJkcyA9IHN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgbGltaXRlZENhcmRzLnNwbGljZShzdGF0ZS5udW1iZXJPZlBhaXJzKTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmxpbWl0ZWRDYXJkc10gfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBEVVBMSUNBVEVfQ0FSRFM6XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgbGV0IG5ld0R1cGxpY2F0ZWRDYXJkcyA9IFsuLi5kdXBsaWNhdGVkQ2FyZHMsIC4uLmR1cGxpY2F0ZWRDYXJkc107XHJcbiAgICAgIG5ld0R1cGxpY2F0ZWRDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWwuaW5kZXggPSBpbmRleDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5uZXdEdXBsaWNhdGVkQ2FyZHNdIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRkxJUF9BTExfQ0FSRFM6XHJcbiAgICAgIGxldCBmbGlwZWRDYXJkcyA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBmbGlwZWRDYXJkcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBlbC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uZmxpcGVkQ2FyZHNdIH0pO1xyXG4gICAgY2FzZSBGTElQX0NBUkQ6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicGF5bG9hZFwiLCBhY3Rpb24ucGF5bG9hZCk7XHJcblxyXG4gICAgICAvLyBmbGlwZWRDYXJkLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNhcmRzOiBbLi4uc3RhdGUuY2FyZHMsIHsgLi4uYWN0aW9uLnBheWxvYWQsIGlzQWN0aXZlOiB0cnVlIH1dLFxyXG4gICAgICB9KTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG5cclxuLy8gZm9yKGxldCBpID0gYXJyYXkubGVuZ3RoIOKAlCAxOyBpID4gMDsgaS0tKXtcclxuLy8gICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSlcclxuLy8gICBjb25zdCB0ZW1wID0gYXJyYXlbaV1cclxuLy8gICBhcnJheVtpXSA9IGFycmF5W2pdXHJcbi8vICAgYXJyYXlbal0gPSB0ZW1wXHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==