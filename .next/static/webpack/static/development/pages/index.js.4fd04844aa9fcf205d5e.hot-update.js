webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: changeNumberOfPairs, startGame, shuffleCards, limitCards, mirrorCards, resetCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNumberOfPairs", function() { return changeNumberOfPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleCards", function() { return shuffleCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitCards", function() { return limitCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorCards", function() { return mirrorCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return resetCards; });
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");

function changeNumberOfPairs(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NUMBER_OF_PAIRS"],
    payload: payload
  };
}
function startGame(paylaod) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["START_GAME"],
    payload: payload
  };
}
function shuffleCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE"],
    payload: payload
  };
}
function limitCards() {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"],
    payload: payload
  };
}
function mirrorCards() {
  return {
    type: MIRROR_CARDS,
    payload: payload
  };
}
function resetCards() {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_CARDS"],
    payload: payload
  };
} // shuffle cards
// limit to the number of pairs
//    (limit the number of loops , dont delete)
// mirror cards
// shuffle cards

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbImNoYW5nZU51bWJlck9mUGFpcnMiLCJwYXlsb2FkIiwidHlwZSIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJzdGFydEdhbWUiLCJwYXlsYW9kIiwiU1RBUlRfR0FNRSIsInNodWZmbGVDYXJkcyIsIlNIVUZGTEUiLCJsaW1pdENhcmRzIiwiRFVQTElDQVRFX0NBUkRTIiwibWlycm9yQ2FyZHMiLCJNSVJST1JfQ0FSRFMiLCJyZXNldENhcmRzIiwiUkVTRVRfQ0FSRFMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTTyxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsU0FBTztBQUFFQyxRQUFJLEVBQUVDLDhFQUFSO0FBQWdDRixXQUFPLEVBQVBBO0FBQWhDLEdBQVA7QUFDRDtBQUVNLFNBQVNHLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCO0FBQ2pDLFNBQU87QUFBRUgsUUFBSSxFQUFFSSxrRUFBUjtBQUFvQkwsV0FBTyxFQUFQQTtBQUFwQixHQUFQO0FBQ0Q7QUFFTSxTQUFTTSxZQUFULENBQXNCTixPQUF0QixFQUErQjtBQUNwQyxTQUFPO0FBQUVDLFFBQUksRUFBRU0sK0RBQVI7QUFBaUJQLFdBQU8sRUFBUEE7QUFBakIsR0FBUDtBQUNEO0FBRU0sU0FBU1EsVUFBVCxHQUFzQjtBQUMzQixTQUFPO0FBQUVQLFFBQUksRUFBRVEsdUVBQVI7QUFBeUJULFdBQU8sRUFBUEE7QUFBekIsR0FBUDtBQUNEO0FBRU0sU0FBU1UsV0FBVCxHQUF1QjtBQUM1QixTQUFPO0FBQUVULFFBQUksRUFBRVUsWUFBUjtBQUFzQlgsV0FBTyxFQUFQQTtBQUF0QixHQUFQO0FBQ0Q7QUFFTSxTQUFTWSxVQUFULEdBQXNCO0FBQzNCLFNBQU87QUFBRVgsUUFBSSxFQUFFWSxtRUFBUjtBQUFxQmIsV0FBTyxFQUFQQTtBQUFyQixHQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjRmZDA0ODQ0YWE5ZmNmMjA1ZDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU51bWJlck9mUGFpcnMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShwYXlsYW9kKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogU1RBUlRfR0FNRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBTSFVGRkxFLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW1pdENhcmRzKCkge1xyXG4gIHJldHVybiB7IHR5cGU6IERVUExJQ0FURV9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlycm9yQ2FyZHMoKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTUlSUk9SX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldENhcmRzKCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFJFU0VUX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbi8vIHNodWZmbGUgY2FyZHNcclxuLy8gbGltaXQgdG8gdGhlIG51bWJlciBvZiBwYWlyc1xyXG4vLyAgICAobGltaXQgdGhlIG51bWJlciBvZiBsb29wcyAsIGRvbnQgZGVsZXRlKVxyXG4vLyBtaXJyb3IgY2FyZHNcclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9