webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: changeNumberOfPairs, startGame, shuffleCards, limitCards, mirrorCards, resetCards, flipAllCards, flipCard, changeWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNumberOfPairs", function() { return changeNumberOfPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbImNoYW5nZU51bWJlck9mUGFpcnMiLCJwYXlsb2FkIiwidHlwZSIsIkNIQU5HRV9OVU1CRVJfT0ZfUEFJUlMiLCJzdGFydEdhbWUiLCJwYXlsYW9kIiwiU1RBUlRfR0FNRSIsInNodWZmbGVDYXJkcyIsIlNIVUZGTEUiLCJsaW1pdENhcmRzIiwiRFVQTElDQVRFX0NBUkRTIiwibWlycm9yQ2FyZHMiLCJNSVJST1JfQ0FSRFMiLCJyZXNldENhcmRzIiwiUkVTRVRfQ0FSRFMiLCJmbGlwQWxsQ2FyZHMiLCJGTElQX0FMTF9DQVJEUyIsImZsaXBDYXJkIiwiRkxJUF9DQVJEIiwiY2hhbmdlV2lkdGgiLCJDSEFOR0VfV0lEVEgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXTyxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsU0FBTztBQUFFQyxRQUFJLEVBQUVDLDhFQUFSO0FBQWdDRixXQUFPLEVBQVBBO0FBQWhDLEdBQVA7QUFDRDtBQUVNLFNBQVNHLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCO0FBQ2pDLFNBQU87QUFBRUgsUUFBSSxFQUFFSSxrRUFBUjtBQUFvQkwsV0FBTyxFQUFQQTtBQUFwQixHQUFQO0FBQ0Q7QUFFTSxTQUFTTSxZQUFULENBQXNCTixPQUF0QixFQUErQjtBQUNwQyxTQUFPO0FBQUVDLFFBQUksRUFBRU0sK0RBQVI7QUFBaUJQLFdBQU8sRUFBUEE7QUFBakIsR0FBUDtBQUNEO0FBRU0sU0FBU1EsVUFBVCxDQUFvQlIsT0FBcEIsRUFBNkI7QUFDbEMsU0FBTztBQUFFQyxRQUFJLEVBQUVRLHVFQUFSO0FBQXlCVCxXQUFPLEVBQVBBO0FBQXpCLEdBQVA7QUFDRDtBQUVNLFNBQVNVLFdBQVQsQ0FBcUJWLE9BQXJCLEVBQThCO0FBQ25DLFNBQU87QUFBRUMsUUFBSSxFQUFFVSxZQUFSO0FBQXNCWCxXQUFPLEVBQVBBO0FBQXRCLEdBQVA7QUFDRDtBQUVNLFNBQVNZLFVBQVQsQ0FBb0JaLE9BQXBCLEVBQTZCO0FBQ2xDLFNBQU87QUFBRUMsUUFBSSxFQUFFWSxtRUFBUjtBQUFxQmIsV0FBTyxFQUFQQTtBQUFyQixHQUFQO0FBQ0Q7QUFFTSxTQUFTYyxZQUFULENBQXNCZCxPQUF0QixFQUErQjtBQUNwQyxTQUFPO0FBQUVDLFFBQUksRUFBRWMsc0VBQVI7QUFBd0JmLFdBQU8sRUFBUEE7QUFBeEIsR0FBUDtBQUNEO0FBRU0sU0FBU2dCLFFBQVQsQ0FBa0JoQixPQUFsQixFQUEyQjtBQUNoQyxTQUFPO0FBQUVDLFFBQUksRUFBRWdCLGlFQUFSO0FBQW1CakIsV0FBTyxFQUFQQTtBQUFuQixHQUFQO0FBQ0Q7QUFDTSxTQUFTa0IsV0FBVCxDQUFxQmxCLE9BQXJCLEVBQThCO0FBQ25DLFNBQU87QUFBRUMsUUFBSSxFQUFFa0Isb0VBQVI7QUFBc0JuQixXQUFPLEVBQVBBO0FBQXRCLEdBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hZDRhZWY4NDc1ZTc3MTQ3Yjc1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU51bWJlck9mUGFpcnMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShwYXlsYW9kKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogU1RBUlRfR0FNRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBTSFVGRkxFLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW1pdENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pcnJvckNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBNSVJST1JfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFJFU0VUX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwQWxsQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IEZMSVBfQUxMX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwQ2FyZChwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRkxJUF9DQVJELCBwYXlsb2FkIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpZHRoKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBDSEFOR0VfV0lEVEgsIHBheWxvYWQgfTtcclxufVxyXG5cclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4vLyBsaW1pdCB0byB0aGUgbnVtYmVyIG9mIHBhaXJzXHJcbi8vICAgIChsaW1pdCB0aGUgbnVtYmVyIG9mIGxvb3BzICwgZG9udCBkZWxldGUpXHJcbi8vIG1pcnJvciBjYXJkc1xyXG4vLyBzaHVmZmxlIGNhcmRzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=