webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  numberOfPairs: 15,
  cards: [{
    src: "animals-bunny.jpg"
  }, {
    src: "animals-cat.jpg"
  }, {
    src: "animals-cat-2.jpg"
  }, {
    src: "animals-dog.jpg"
  }, {
    src: "animals-dog-2.jpg"
  }, {
    src: "animals-horse.jpg"
  }, {
    src: "animals-horse-2.jpg"
  }, {
    src: "architecture-london-towerbridge.jpg"
  }, {
    src: "architecture-moscow-redsquare.jpg"
  }, {
    src: "architecture-nederlanden.jpg"
  }, {
    src: "architecture-newyork-publiclibrary.jpg"
  }, {
    src: "architecture-paris-eiffeltower.jpg"
  }, {
    src: "cities-tokyo-night.jpg"
  }, {
    src: "flowers-reddahlia.jpg"
  }, {
    src: "flowers-waterlillies.jpg"
  }, {
    src: "flowers-windclock.jpg"
  }, {
    src: "landscape-1.jpg"
  }, {
    src: "landscape-2.jpg"
  }, {
    src: "landscape-2.jpg"
  }, {
    src: "landscape-netherlands-deurningen.jpg"
  }, {
    src: "landscape-us-edgewood.jpg"
  }]
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_ARTICLE"]:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJudW1iZXJPZlBhaXJzIiwiY2FyZHMiLCJzcmMiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiQUREX0FSVElDTEUiLCJPYmplY3QiLCJhc3NpZ24iLCJhcnRpY2xlcyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxlQUFhLEVBQUUsRUFESTtBQUVuQkMsT0FBSyxFQUFFLENBQ0w7QUFDRUMsT0FBRyxFQUFFO0FBRFAsR0FESyxFQUlMO0FBQ0VBLE9BQUcsRUFBRTtBQURQLEdBSkssRUFPTDtBQUNFQSxPQUFHLEVBQUU7QUFEUCxHQVBLLEVBVUw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0FWSyxFQWFMO0FBQ0VBLE9BQUcsRUFBRTtBQURQLEdBYkssRUFnQkw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0FoQkssRUFtQkw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0FuQkssRUFzQkw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0F0QkssRUF5Qkw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0F6QkssRUE0Qkw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0E1QkssRUErQkw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0EvQkssRUFrQ0w7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0FsQ0ssRUFxQ0w7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0FyQ0ssRUF3Q0w7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0F4Q0ssRUEyQ0w7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0EzQ0ssRUE4Q0w7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0E5Q0ssRUFpREw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0FqREssRUFvREw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0FwREssRUF1REw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0F2REssRUEwREw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0ExREssRUE2REw7QUFDRUEsT0FBRyxFQUFFO0FBRFAsR0E3REs7QUFGWSxDQUFyQjs7QUFxRUEsU0FBU0MsV0FBVCxHQUFtRDtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJMLFlBQXNCO0FBQUEsTUFBUk0sTUFBUTs7QUFDakQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsMERBQUw7QUFDRSw2Q0FBWUgsS0FBWixHQUFzQkMsTUFBTSxDQUFDRyxPQUE3Qjs7QUFDRixTQUFLQyxtRUFBTDtBQUNFLGFBQU9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLEVBQXlCO0FBQzlCUSxnQkFBUSxFQUFFUixLQUFLLENBQUNRLFFBQU4sQ0FBZUMsTUFBZixDQUFzQlIsTUFBTSxDQUFDRyxPQUE3QjtBQURvQixPQUF6QixDQUFQOztBQUdGO0FBQ0UsYUFBT0osS0FBUDtBQVJKO0FBVUQ7O0FBRWNELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmI5YzNhZGU0NTY2MGFmOWU2MTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBRERfQVJUSUNMRSB9IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbnVtYmVyT2ZQYWlyczogMTUsXHJcbiAgY2FyZHM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcImFuaW1hbHMtYnVubnkuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiYW5pbWFscy1jYXQuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiYW5pbWFscy1jYXQtMi5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJhbmltYWxzLWRvZy5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJhbmltYWxzLWRvZy0yLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcImFuaW1hbHMtaG9yc2UuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiYW5pbWFscy1ob3JzZS0yLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcImFyY2hpdGVjdHVyZS1sb25kb24tdG93ZXJicmlkZ2UuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiYXJjaGl0ZWN0dXJlLW1vc2Nvdy1yZWRzcXVhcmUuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiYXJjaGl0ZWN0dXJlLW5lZGVybGFuZGVuLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcImFyY2hpdGVjdHVyZS1uZXd5b3JrLXB1YmxpY2xpYnJhcnkuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiYXJjaGl0ZWN0dXJlLXBhcmlzLWVpZmZlbHRvd2VyLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcImNpdGllcy10b2t5by1uaWdodC5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJmbG93ZXJzLXJlZGRhaGxpYS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJmbG93ZXJzLXdhdGVybGlsbGllcy5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJmbG93ZXJzLXdpbmRjbG9jay5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJsYW5kc2NhcGUtMS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJsYW5kc2NhcGUtMi5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJsYW5kc2NhcGUtMi5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJsYW5kc2NhcGUtbmV0aGVybGFuZHMtZGV1cm5pbmdlbi5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJsYW5kc2NhcGUtdXMtZWRnZXdvb2QuanBnXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByb290UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgQUREX0FSVElDTEU6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGFydGljbGVzOiBzdGF0ZS5hcnRpY2xlcy5jb25jYXQoYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICB9KTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9