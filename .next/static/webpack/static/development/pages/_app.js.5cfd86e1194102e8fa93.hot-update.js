webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/constants/action-types.js":
/*!*****************************************!*\
  !*** ./redux/constants/action-types.js ***!
  \*****************************************/
/*! exports provided: CHANGE_NUMBER_OF_PAIRS, START_GAME, SHUFFLE, LIMIT_CARDS, DUPLICATE_CARDS, RESET_CARDS, FLIP_ALL_CARDS, FLIP_CARD, CHANGE_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NUMBER_OF_PAIRS", function() { return CHANGE_NUMBER_OF_PAIRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_GAME", function() { return START_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHUFFLE", function() { return SHUFFLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT_CARDS", function() { return LIMIT_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_CARDS", function() { return DUPLICATE_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CARDS", function() { return RESET_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_ALL_CARDS", function() { return FLIP_ALL_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_CARD", function() { return FLIP_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_WIDTH", function() { return CHANGE_WIDTH; });
var CHANGE_NUMBER_OF_PAIRS = "CHANGE_NUMBER_OF_PAIRS";
var START_GAME = "START_GAME";
var SHUFFLE = "SHUFFLE";
var LIMIT_CARDS = "LIMIT_CARDS";
var DUPLICATE_CARDS = "DUPLICATE_CARDS";
var RESET_CARDS = "RESET_CARDS";
var FLIP_ALL_CARDS = "FLIP_ALL_CARDS";
var FLIP_CARD = "FLIP_CARD";
var CHANGE_WIDTH = "CHANGE_WIDTH";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIl0sIm5hbWVzIjpbIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJTVEFSVF9HQU1FIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJGTElQX0FMTF9DQVJEUyIsIkZMSVBfQ0FSRCIsIkNIQU5HRV9XSURUSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFFQSxJQUFNQyxZQUFZLEdBQUcsY0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNWNmZDg2ZTExOTQxMDJlOGZhOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDSEFOR0VfTlVNQkVSX09GX1BBSVJTID0gXCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTXCI7XHJcbmV4cG9ydCBjb25zdCBTVEFSVF9HQU1FID0gXCJTVEFSVF9HQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTSFVGRkxFID0gXCJTSFVGRkxFXCI7XHJcbmV4cG9ydCBjb25zdCBMSU1JVF9DQVJEUyA9IFwiTElNSVRfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IERVUExJQ0FURV9DQVJEUyA9IFwiRFVQTElDQVRFX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJEUyA9IFwiUkVTRVRfQ0FSRFNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGTElQX0FMTF9DQVJEUyA9IFwiRkxJUF9BTExfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IEZMSVBfQ0FSRCA9IFwiRkxJUF9DQVJEXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1dJRFRIID0gXCJDSEFOR0VfV0lEVEhcIjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==