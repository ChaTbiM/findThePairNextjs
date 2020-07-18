webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: changeNumberOfPairs, startGame, resetGame, shuffleCards, limitCards, duplicateCards, resetCards, flipAllCards, flipCard, changeWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNumberOfPairs", function() { return changeNumberOfPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGame", function() { return resetGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleCards", function() { return shuffleCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitCards", function() { return limitCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateCards", function() { return duplicateCards; });
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
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["LIMIT_CARDS"],
    payload: payload
  };
}
function duplicateCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbImNoYW5nZU51bWJlck9mUGFpcnMiLCJwYXlsb2FkIiwidHlwZSIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJzdGFydEdhbWUiLCJwYXlsYW9kIiwiU1RBUlRfR0FNRSIsInJlc2V0R2FtZSIsIlJFU0VUX0dBTUUiLCJzaHVmZmxlQ2FyZHMiLCJTSFVGRkxFIiwibGltaXRDYXJkcyIsIkxJTUlUX0NBUkRTIiwiZHVwbGljYXRlQ2FyZHMiLCJEVVBMSUNBVEVfQ0FSRFMiLCJyZXNldENhcmRzIiwiUkVTRVRfQ0FSRFMiLCJmbGlwQWxsQ2FyZHMiLCJGTElQX0FMTF9DQVJEUyIsImZsaXBDYXJkIiwiRkxJUF9DQVJEIiwiY2hhbmdlV2lkdGgiLCJDSEFOR0VfV0lEVEgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFPLFNBQVNBLG1CQUFULENBQTZCQyxPQUE3QixFQUFzQztBQUMzQyxTQUFPO0FBQUVDLFFBQUksRUFBRUMsOEVBQVI7QUFBZ0NGLFdBQU8sRUFBUEE7QUFBaEMsR0FBUDtBQUNEO0FBRU0sU0FBU0csU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDakMsU0FBTztBQUFFSCxRQUFJLEVBQUVJLGtFQUFSO0FBQW9CTCxXQUFPLEVBQVBBO0FBQXBCLEdBQVA7QUFDRDtBQUVNLFNBQVNNLFNBQVQsQ0FBbUJOLE9BQW5CLEVBQTRCO0FBQ2pDLFNBQU87QUFBRUMsUUFBSSxFQUFFTSxrRUFBUjtBQUFvQlAsV0FBTyxFQUFQQTtBQUFwQixHQUFQO0FBQ0Q7QUFFTSxTQUFTUSxZQUFULENBQXNCUixPQUF0QixFQUErQjtBQUNwQyxTQUFPO0FBQUVDLFFBQUksRUFBRVEsK0RBQVI7QUFBaUJULFdBQU8sRUFBUEE7QUFBakIsR0FBUDtBQUNEO0FBRU0sU0FBU1UsVUFBVCxDQUFvQlYsT0FBcEIsRUFBNkI7QUFDbEMsU0FBTztBQUFFQyxRQUFJLEVBQUVVLG1FQUFSO0FBQXFCWCxXQUFPLEVBQVBBO0FBQXJCLEdBQVA7QUFDRDtBQUVNLFNBQVNZLGNBQVQsQ0FBd0JaLE9BQXhCLEVBQWlDO0FBQ3RDLFNBQU87QUFBRUMsUUFBSSxFQUFFWSx1RUFBUjtBQUF5QmIsV0FBTyxFQUFQQTtBQUF6QixHQUFQO0FBQ0Q7QUFFTSxTQUFTYyxVQUFULENBQW9CZCxPQUFwQixFQUE2QjtBQUNsQyxTQUFPO0FBQUVDLFFBQUksRUFBRWMsbUVBQVI7QUFBcUJmLFdBQU8sRUFBUEE7QUFBckIsR0FBUDtBQUNEO0FBRU0sU0FBU2dCLFlBQVQsQ0FBc0JoQixPQUF0QixFQUErQjtBQUNwQyxTQUFPO0FBQUVDLFFBQUksRUFBRWdCLHNFQUFSO0FBQXdCakIsV0FBTyxFQUFQQTtBQUF4QixHQUFQO0FBQ0Q7QUFFTSxTQUFTa0IsUUFBVCxDQUFrQmxCLE9BQWxCLEVBQTJCO0FBQ2hDLFNBQU87QUFBRUMsUUFBSSxFQUFFa0IsaUVBQVI7QUFBbUJuQixXQUFPLEVBQVBBO0FBQW5CLEdBQVA7QUFDRDtBQUNNLFNBQVNvQixXQUFULENBQXFCcEIsT0FBckIsRUFBOEI7QUFDbkMsU0FBTztBQUFFQyxRQUFJLEVBQUVvQixvRUFBUjtBQUFzQnJCLFdBQU8sRUFBUEE7QUFBdEIsR0FBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjU1YjFlOGJiYTIwMDUzYmE4MzNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbiAgQ0hBTkdFX1dJRFRILFxyXG4gIFJFU0VUX0dBTUUsXHJcbiAgTElNSVRfQ0FSRFMsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VOdW1iZXJPZlBhaXJzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUocGF5bGFvZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFNUQVJUX0dBTUUsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZShwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUkVTRVRfR0FNRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBTSFVGRkxFLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW1pdENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBMSU1JVF9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHVwbGljYXRlQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IERVUExJQ0FURV9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUkVTRVRfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBBbGxDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRkxJUF9BTExfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBDYXJkKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBGTElQX0NBUkQsIHBheWxvYWQgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlV2lkdGgocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IENIQU5HRV9XSURUSCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG4vLyBzaHVmZmxlIGNhcmRzXHJcbi8vIGxpbWl0IHRvIHRoZSBudW1iZXIgb2YgcGFpcnNcclxuLy8gICAgKGxpbWl0IHRoZSBudW1iZXIgb2YgbG9vcHMgLCBkb250IGRlbGV0ZSlcclxuLy8gbWlycm9yIGNhcmRzXHJcbi8vIHNodWZmbGUgY2FyZHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==