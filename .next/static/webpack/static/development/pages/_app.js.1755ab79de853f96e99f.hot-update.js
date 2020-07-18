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



var clone = requre("rfdc");
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
      var newDuplicatedCards = duplicatedCards1;
      newDuplicatedCards = [].concat(duplicatedCards1.slice(), duplicatedCards2.slice());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbG9uZSIsInJlcXVyZSIsImluaXRpYWxTdGF0ZSIsIm51bWJlck9mUGFpcnMiLCJ3aWR0aCIsImdhbWVTdGF0ZSIsImNhcmRzIiwic3JjIiwiaXNBY3RpdmUiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyIsIk9iamVjdCIsImFzc2lnbiIsIlNUQVJUX0dBTUUiLCJSRVNFVF9DQVJEUyIsImluaXRpYWxDYXJkcyIsIlNIVUZGTEUiLCJhcnJheSIsImxlbiIsImxlbmd0aCIsImkiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsIkxJTUlUX0NBUkRTIiwibGltaXRlZENhcmRzIiwic3BsaWNlIiwiRFVQTElDQVRFX0NBUkRTIiwiZHVwbGljYXRlZENhcmRzMSIsInNsaWNlIiwiZHVwbGljYXRlZENhcmRzMiIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCJGTElQX0FMTF9DQVJEUyIsImZsaXBlZENhcmRzIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJGTElQX0NBUkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxNQUFNLENBQUMsTUFBRCxDQUFwQjtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsZUFBYSxFQUFFLENBREk7QUFFbkJDLE9BQUssRUFBRSxFQUZZO0FBR25CQyxXQUFTLEVBQUUsU0FIUTtBQUluQkMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsT0FBRyxFQUFFLDJCQURQO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBREssRUFLTDtBQUNFRCxPQUFHLEVBQUUseUJBRFA7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FMSyxFQVNMO0FB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SixhQUFLLEVBQUVnQztBQUR1QixPQUF6QixDQUFQO0FBR0E7O0FBQ0YsU0FBS0ksc0VBQUw7QUFDRSxVQUFJQyxXQUFXLEdBQUdqQyxLQUFLLENBQUNKLEtBQXhCO0FBQ0FxQyxpQkFBVyxDQUFDQyxPQUFaLENBQW9CLFVBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQ2pDRCxVQUFFLENBQUNyQyxRQUFILEdBQWMsS0FBZDtBQUNELE9BRkQ7QUFHQSxhQUFPUSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxLQUFsQixFQUF5QjtBQUFFSixhQUFLLEVBQUUsNkZBQUlxQyxXQUFOO0FBQVAsT0FBekIsQ0FBUDs7QUFDRixTQUFLSSxpRUFBTCxDQXhERixDQXlERTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNFLGFBQU9yQyxLQUFQO0FBL0RKO0FBaUVEOztBQUVjRCwwRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjE3NTVhYjc5ZGU4NTNmOTZlOTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBMSU1JVF9DQVJEUyxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGNsb25lID0gcmVxdXJlKFwicmZkY1wiKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBudW1iZXJPZlBhaXJzOiA2LFxyXG4gIHdpZHRoOiA3MyxcclxuICBnYW1lU3RhdGU6IFwibG9hZGluZ1wiLFxyXG4gIGNhcmRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtYnVubnkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2FuaW1hbHMtY2F0LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWNhdC0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hbmltYWxzLWRvZy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1kb2ctMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYW5pbWFscy1ob3JzZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbG9uZG9uLXRvd2VyYnJpZGdlLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbW9zY293LXJlZHNxdWFyZS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvYXJjaGl0ZWN0dXJlLW5lZGVybGFuZGVuLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtbmV3eW9yay1wdWJsaWNsaWJyYXJ5LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9hcmNoaXRlY3R1cmUtcGFyaXMtZWlmZmVsdG93ZXIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2NpdGllcy10b2t5by1uaWdodC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvZmxvd2Vycy1yZWRkYWhsaWEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2Zsb3dlcnMtd2F0ZXJsaWxsaWVzLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9mbG93ZXJzLXdpbmRjbG9jay5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLTEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9sYW5kc2NhcGUtMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvbGFuZHNjYXBlLW5ldGhlcmxhbmRzLWRldXJuaW5nZW4uanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL2xhbmRzY2FwZS11cy1lZGdld29vZC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTlVNQkVSX09GX1BBSVJTOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBudW1iZXJPZlBhaXJzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTVEFSVF9HQU1FOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZ2FtZVN0YXRlOiBcInBsYXlpbmdcIiB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0NBUkRTOlxyXG4gICAgICBsZXQgaW5pdGlhbENhcmRzID0gaW5pdGlhbFN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBpbml0aWFsQ2FyZHMgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSFVGRkxFOlxyXG4gICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgbGV0IGxlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmFycmF5XSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJTUlUX0NBUkRTOlxyXG4gICAgICBsZXQgbGltaXRlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICBsaW1pdGVkQ2FyZHMuc3BsaWNlKHN0YXRlLm51bWJlck9mUGFpcnMpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4ubGltaXRlZENhcmRzXSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERVUExJQ0FURV9DQVJEUzpcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczEgPSBzdGF0ZS5jYXJkcy5zbGljZSgpO1xyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMiA9IHN0YXRlLmNhcmRzLnNsaWNlKCk7XHJcblxyXG4gICAgICBsZXQgbmV3RHVwbGljYXRlZENhcmRzID0gZHVwbGljYXRlZENhcmRzMTtcclxuICAgICAgbmV3RHVwbGljYXRlZENhcmRzID0gW10uY29uY2F0KFxyXG4gICAgICAgIGR1cGxpY2F0ZWRDYXJkczEuc2xpY2UoKSxcclxuICAgICAgICBkdXBsaWNhdGVkQ2FyZHMyLnNsaWNlKClcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coXCJuZXdEdXBsaWNhdGVkXCIsIG5ld0R1cGxpY2F0ZWRDYXJkcyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogbmV3RHVwbGljYXRlZENhcmRzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZMSVBfQUxMX0NBUkRTOlxyXG4gICAgICBsZXQgZmxpcGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgZmxpcGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmZsaXBlZENhcmRzXSB9KTtcclxuICAgIGNhc2UgRkxJUF9DQVJEOlxyXG4gICAgLy8gZmxpcGVkQ2FyZC5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAvLyAgIGNhcmRzOiBbeyAuLi5hY3Rpb24ucGF5bG9hZCwgaXNBY3RpdmU6IHRydWUgXSxcclxuICAgIC8vIH0pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG4vLyBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgg4oCUIDE7IGkgPiAwOyBpLS0pe1xyXG4vLyAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKVxyXG4vLyAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXVxyXG4vLyAgIGFycmF5W2ldID0gYXJyYXlbal1cclxuLy8gICBhcnJheVtqXSA9IHRlbXBcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9