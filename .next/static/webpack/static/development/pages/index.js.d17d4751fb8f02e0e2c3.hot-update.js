webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: changeNumberOfPairs, startGame, resetGame, shuffleCards, limitCards, mirrorCards, resetCards, flipAllCards, flipCard, changeWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNumberOfPairs", function() { return changeNumberOfPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGame", function() { return resetGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleCards", function() { return shuffleCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitCards", function() { return limitCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorCards", function() { return mirrorCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return resetCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipAllCards", function() { return flipAllCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipCard", function() { return flipCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeWidth", function() { return changeWidth; });
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
function resetGame(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_GAME"],
    payload: payload
  };
}
function shuffleCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE"],
    payload: payload
  };
}
function limitCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"],
    payload: payload
  };
}
function mirrorCards(payload) {
  return {
    type: MIRROR_CARDS,
    payload: payload
  };
}
function resetCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_CARDS"],
    payload: payload
  };
}
function flipAllCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_ALL_CARDS"],
    payload: payload
  };
}
function flipCard(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_CARD"],
    payload: payload
  };
}
function changeWidth(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_WIDTH"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbImNoYW5nZU51bWJlck9mUGFpcnMiLCJwYXlsb2FkIiwidHlwZSIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJzdGFydEdhbWUiLCJwYXlsYW9kIiwiU1RBUlRfR0FNRSIsInJlc2V0R2FtZSIsIlJFU0VUX0dBTUUiLCJzaHVmZmxlQ2FyZHMiLCJTSFVGRkxFIiwibGltaXRDYXJkcyIsIkRVUExJQ0FURV9DQVJEUyIsIm1pcnJvckNhcmRzIiwiTUlSUk9SX0NBUkRTIiwicmVzZXRDYXJkcyIsIlJFU0VUX0NBUkRTIiwiZmxpcEFsbENhcmRzIiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwQ2FyZCIsIkZMSVBfQ0FSRCIsImNoYW5nZVdpZHRoIiwiQ0hBTkdFX1dJRFRIIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZTyxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsU0FBTztBQUFFQyxRQUFJLEVBQUVDLDhFQUFSO0FBQWdDRixXQUFPLEVBQVBBO0FBQWhDLEdBQVA7QUFDRDtBQUVNLFNBQVNHLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCO0FBQ2pDLFNBQU87QUFBRUgsUUFBSSxFQUFFSSxrRUFBUjtBQUFvQkwsV0FBTyxFQUFQQTtBQUFwQixHQUFQO0FBQ0Q7QUFFTSxTQUFTTSxTQUFULENBQW1CTixPQUFuQixFQUE0QjtBQUNqQyxTQUFPO0FBQUVDLFFBQUksRUFBRU0sa0VBQVI7QUFBb0JQLFdBQU8sRUFBUEE7QUFBcEIsR0FBUDtBQUNEO0FBRU0sU0FBU1EsWUFBVCxDQUFzQlIsT0FBdEIsRUFBK0I7QUFDcEMsU0FBTztBQUFFQyxRQUFJLEVBQUVRLCtEQUFSO0FBQWlCVCxXQUFPLEVBQVBBO0FBQWpCLEdBQVA7QUFDRDtBQUVNLFNBQVNVLFVBQVQsQ0FBb0JWLE9BQXBCLEVBQTZCO0FBQ2xDLFNBQU87QUFBRUMsUUFBSSxFQUFFVSx1RUFBUjtBQUF5QlgsV0FBTyxFQUFQQTtBQUF6QixHQUFQO0FBQ0Q7QUFFTSxTQUFTWSxXQUFULENBQXFCWixPQUFyQixFQUE4QjtBQUNuQyxTQUFPO0FBQUVDLFFBQUksRUFBRVksWUFBUjtBQUFzQmIsV0FBTyxFQUFQQTtBQUF0QixHQUFQO0FBQ0Q7QUFFTSxTQUFTYyxVQUFULENBQW9CZCxPQUFwQixFQUE2QjtBQUNsQyxTQUFPO0FBQUVDLFFBQUksRUFBRWMsbUVBQVI7QUFBcUJmLFdBQU8sRUFBUEE7QUFBckIsR0FBUDtBQUNEO0FBRU0sU0FBU2dCLFlBQVQsQ0FBc0JoQixPQUF0QixFQUErQjtBQUNwQyxTQUFPO0FBQUVDLFFBQUksRUFBRWdCLHNFQUFSO0FBQXdCakIsV0FBTyxFQUFQQTtBQUF4QixHQUFQO0FBQ0Q7QUFFTSxTQUFTa0IsUUFBVCxDQUFrQmxCLE9BQWxCLEVBQTJCO0FBQ2hDLFNBQU87QUFBRUMsUUFBSSxFQUFFa0IsaUVBQVI7QUFBbUJuQixXQUFPLEVBQVBBO0FBQW5CLEdBQVA7QUFDRDtBQUNNLFNBQVNvQixXQUFULENBQXFCcEIsT0FBckIsRUFBOEI7QUFDbkMsU0FBTztBQUFFQyxRQUFJLEVBQUVvQixvRUFBUjtBQUFzQnJCLFdBQU8sRUFBUEE7QUFBdEIsR0FBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kMTdkNDc1MWZiOGYwMmUwZTJjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxuICBSRVNFVF9HQU1FLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTnVtYmVyT2ZQYWlycyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQ0hBTkdFX05VTUJFUl9PRl9QQUlSUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKHBheWxhb2QpIHtcclxuICByZXR1cm4geyB0eXBlOiBTVEFSVF9HQU1FLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWUocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFJFU0VUX0dBTUUsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGVDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogU0hVRkZMRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGltaXRDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRFVQTElDQVRFX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXJyb3JDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTUlSUk9SX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBSRVNFVF9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxpcEFsbENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBGTElQX0FMTF9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxpcENhcmQocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IEZMSVBfQ0FSRCwgcGF5bG9hZCB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VXaWR0aChwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQ0hBTkdFX1dJRFRILCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbi8vIHNodWZmbGUgY2FyZHNcclxuLy8gbGltaXQgdG8gdGhlIG51bWJlciBvZiBwYWlyc1xyXG4vLyAgICAobGltaXQgdGhlIG51bWJlciBvZiBsb29wcyAsIGRvbnQgZGVsZXRlKVxyXG4vLyBtaXJyb3IgY2FyZHNcclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9