webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Grid.jsx":
/*!*****************************!*\
  !*** ./components/Grid.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/constants/action-types */ "./redux/constants/action-types.js");
var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Grid.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function renderCards(gameState) {
  var _this = this;

  if (gameState === "loading") {
    return props.cards.map(function (el, index) {
      return __jsx("img", {
        className: "testing",
        key: el.src + index,
        width: "125",
        height: "125",
        src: el.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      });
    });
  } else if (gameState === "playing") {
    return props.cards.map(function (el, index) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 14
        }
      }, "1");
    });
  }
}

function Grid(props) {
  _s();

  var _this2 = this;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();
  }, [props.numberOfPairs]);
  return (//   grid Item
    __jsx("gridContainer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }
    }, props.cards.map(function (el, index) {
      return __jsx("img", {
        className: "testing",
        key: el.src + index,
        "data-index": el.index,
        src: el.src,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      });
    }))
  );
}

_s(Grid, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Grid;

var mapStateToProps = function mapStateToProps(state) {
  return {
    numberOfPairs: state.numberOfPairs,
    cards: state.cards,
    gameState: state.gameState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    shuffleCards: function shuffleCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["SHUFFLE"]
      });
    },
    limitCards: function limitCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["LIMIT_CARDS"]
      });
    },
    duplicateCards: function duplicateCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["DUPLICATE_CARDS"]
      });
    },
    resetCards: function resetCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["RESET_CARDS"]
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Grid)); // ---------------------------------

var gridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Grid__gridContainer",
  componentId: "v3z7jl-0"
})(["width:520px;height:520px;margin:5px auto;"]);

var _c;

$RefreshReg$(_c, "Grid");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbInJlbmRlckNhcmRzIiwiZ2FtZVN0YXRlIiwicHJvcHMiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJzcmMiLCJHcmlkIiwidXNlRWZmZWN0IiwicmVzZXRDYXJkcyIsInNodWZmbGVDYXJkcyIsImxpbWl0Q2FyZHMiLCJkdXBsaWNhdGVDYXJkcyIsIm51bWJlck9mUGFpcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiY29ubmVjdCIsImdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsU0FBU0EsV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFDOUIsTUFBSUEsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQzNCLFdBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQ3BDLGFBQ0U7QUFDRSxpQkFBUyxFQUFDLFNBRFo7QUFFRSxXQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FBSCxHQUFTRCxLQUZoQjtBQUdFLGFBQUssRUFBQyxLQUhSO0FBSUUsY0FBTSxFQUFDLEtBSlQ7QUFLRSxXQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFTRCxLQVZNLENBQVA7QUFXRCxHQVpELE1BWU8sSUFBSU4sU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ2xDLFdBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQ3BDLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7QUFDRjs7QUFDRCxTQUFTRSxJQUFULENBQWNOLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJPLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxTQUFLLENBQUNRLFVBQU47QUFDQVIsU0FBSyxDQUFDUyxZQUFOO0FBQ0FULFNBQUssQ0FBQ1UsVUFBTjtBQUNBVixTQUFLLENBQUNXLGNBQU47QUFDQVgsU0FBSyxDQUFDUyxZQUFOO0FBQ0QsR0FOUSxFQU1OLENBQUNULEtBQUssQ0FBQ1ksYUFBUCxDQU5NLENBQVQ7QUFRQSxTQUNFO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHWixLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM5QixhQUNFO0FBQ0UsaUJBQVMsRUFBQyxTQURaO0FBRUUsV0FBRyxFQUFFRCxFQUFFLENBQUNFLEdBQUgsR0FBU0QsS0FGaEI7QUFHRSxzQkFBWUQsRUFBRSxDQUFDQyxLQUhqQjtBQUlFLFdBQUcsRUFBRUQsRUFBRSxDQUFDRSxHQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQVFELEtBVEEsQ0FESDtBQUZGO0FBZUQ7O0dBeEJRQyxJOztLQUFBQSxJOztBQTBCVCxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDRixpQkFBYSxFQUFFRSxLQUFLLENBQUNGLGFBRGE7QUFFbENYLFNBQUssRUFBRWEsS0FBSyxDQUFDYixLQUZxQjtBQUdsQ0YsYUFBUyxFQUFFZSxLQUFLLENBQUNmO0FBSGlCLEdBQVo7QUFBQSxDQUF4Qjs7QUFNQSxJQUFNZ0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q1AsZ0JBQVksRUFBRTtBQUFBLGFBQU1PLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVDLHFFQUFPQTtBQUFmLE9BQUQsQ0FBZDtBQUFBLEtBRDBCO0FBRXhDUixjQUFVLEVBQUU7QUFBQSxhQUFNTSxRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFRSx5RUFBV0E7QUFBbkIsT0FBRCxDQUFkO0FBQUEsS0FGNEI7QUFHeENSLGtCQUFjLEVBQUU7QUFBQSxhQUFNSyxRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFRyw2RUFBZUE7QUFBdkIsT0FBRCxDQUFkO0FBQUEsS0FId0I7QUFJeENaLGNBQVUsRUFBRTtBQUFBLGFBQU1RLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVJLHlFQUFXQTtBQUFuQixPQUFELENBQWQ7QUFBQTtBQUo0QixHQUFmO0FBQUEsQ0FBM0I7O0FBT2VDLDBIQUFPLENBQUNULGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDVCxJQUE3QyxDQUFmLEUsQ0FFQTs7QUFDQSxJQUFNaUIsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZmZhM2YyZjZhZTg3YTFiNDYyODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIExJTUlUX0NBUkRTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG59IGZyb20gXCIuLi9yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYXJkcyhnYW1lU3RhdGUpIHtcclxuICBpZiAoZ2FtZVN0YXRlID09PSBcImxvYWRpbmdcIikge1xyXG4gICAgcmV0dXJuIHByb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGVzdGluZ1wiXHJcbiAgICAgICAgICBrZXk9e2VsLnNyYyArIGluZGV4fVxyXG4gICAgICAgICAgd2lkdGg9XCIxMjVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTI1XCJcclxuICAgICAgICAgIHNyYz17ZWwuc3JjfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGdhbWVTdGF0ZSA9PT0gXCJwbGF5aW5nXCIpIHtcclxuICAgIHJldHVybiBwcm9wcy5jYXJkcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gPGRpdj4xPC9kaXY+O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5saW1pdENhcmRzKCk7XHJcbiAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mUGFpcnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vICAgZ3JpZCBJdGVtXHJcbiAgICA8Z3JpZENvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVzdGluZ1wiXHJcbiAgICAgICAgICAgIGtleT17ZWwuc3JjICsgaW5kZXh9XHJcbiAgICAgICAgICAgIGRhdGEtaW5kZXg9e2VsLmluZGV4fVxyXG4gICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIGdhbWVTdGF0ZTogc3RhdGUuZ2FtZVN0YXRlLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzaHVmZmxlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogU0hVRkZMRSB9KSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IERVUExJQ0FURV9DQVJEUyB9KSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUX0NBUkRTIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyaWQpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MjBweDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=