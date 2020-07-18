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
      return __jsx("div", {
        style: {
          margin: "0 1px",
          display: "inline-block",
          height: "125px",
          width: "125px",
          backgroundColor: "#bbb"
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, __jsx("img", {
        style: {
          display: "none"
        },
        key: el.src + index,
        "data-index": el.index,
        src: el.src,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbInJlbmRlckNhcmRzIiwiZ2FtZVN0YXRlIiwicHJvcHMiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJzcmMiLCJHcmlkIiwidXNlRWZmZWN0IiwicmVzZXRDYXJkcyIsInNodWZmbGVDYXJkcyIsImxpbWl0Q2FyZHMiLCJkdXBsaWNhdGVDYXJkcyIsIm51bWJlck9mUGFpcnMiLCJtYXJnaW4iLCJkaXNwbGF5IiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiY29ubmVjdCIsImdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsU0FBU0EsV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFDOUIsTUFBSUEsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQzNCLFdBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQ3BDLGFBQ0U7QUFDRSxpQkFBUyxFQUFDLFNBRFo7QUFFRSxXQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FBSCxHQUFTRCxLQUZoQjtBQUdFLGFBQUssRUFBQyxLQUhSO0FBSUUsY0FBTSxFQUFDLEtBSlQ7QUFLRSxXQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFTRCxLQVZNLENBQVA7QUFXRCxHQVpELE1BWU8sSUFBSU4sU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ2xDLFdBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQ3BDLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7QUFDRjs7QUFDRCxTQUFTRSxJQUFULENBQWNOLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJPLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxTQUFLLENBQUNRLFVBQU47QUFDQVIsU0FBSyxDQUFDUyxZQUFOO0FBQ0FULFNBQUssQ0FBQ1UsVUFBTjtBQUNBVixTQUFLLENBQUNXLGNBQU47QUFDQVgsU0FBSyxDQUFDUyxZQUFOO0FBQ0QsR0FOUSxFQU1OLENBQUNULEtBQUssQ0FBQ1ksYUFBUCxDQU5NLENBQVQ7QUFRQSxTQUNFO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHWixLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM5QixhQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xTLGdCQUFNLEVBQUUsT0FESDtBQUVMQyxpQkFBTyxFQUFFLGNBRko7QUFHTEMsZ0JBQU0sRUFBRSxPQUhIO0FBSUxDLGVBQUssRUFBRSxPQUpGO0FBS0xDLHlCQUFlLEVBQUU7QUFMWixTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FTRTtBQUNFLGFBQUssRUFBRTtBQUFFSCxpQkFBTyxFQUFFO0FBQVgsU0FEVDtBQUVFLFdBQUcsRUFBRVgsRUFBRSxDQUFDRSxHQUFILEdBQVNELEtBRmhCO0FBR0Usc0JBQVlELEVBQUUsQ0FBQ0MsS0FIakI7QUFJRSxXQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEYsQ0FERjtBQWtCRCxLQW5CQSxDQURIO0FBRkY7QUF5QkQ7O0dBbENRQyxJOztLQUFBQSxJOztBQW9DVCxJQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDUCxpQkFBYSxFQUFFTyxLQUFLLENBQUNQLGFBRGE7QUFFbENYLFNBQUssRUFBRWtCLEtBQUssQ0FBQ2xCLEtBRnFCO0FBR2xDRixhQUFTLEVBQUVvQixLQUFLLENBQUNwQjtBQUhpQixHQUFaO0FBQUEsQ0FBeEI7O0FBTUEsSUFBTXFCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENaLGdCQUFZLEVBQUU7QUFBQSxhQUFNWSxRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFQyxxRUFBT0E7QUFBZixPQUFELENBQWQ7QUFBQSxLQUQwQjtBQUV4Q2IsY0FBVSxFQUFFO0FBQUEsYUFBTVcsUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUUseUVBQVdBO0FBQW5CLE9BQUQsQ0FBZDtBQUFBLEtBRjRCO0FBR3hDYixrQkFBYyxFQUFFO0FBQUEsYUFBTVUsUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUcsNkVBQWVBO0FBQXZCLE9BQUQsQ0FBZDtBQUFBLEtBSHdCO0FBSXhDakIsY0FBVSxFQUFFO0FBQUEsYUFBTWEsUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUkseUVBQVdBO0FBQW5CLE9BQUQsQ0FBZDtBQUFBO0FBSjRCLEdBQWY7QUFBQSxDQUEzQjs7QUFPZUMsMEhBQU8sQ0FBQ1QsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNkLElBQTdDLENBQWYsRSxDQUVBOztBQUNBLElBQU1zQixhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaURBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jYWNkNjYwN2NmNjVlNzY0MGMyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgU0hVRkZMRSxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNhcmRzKGdhbWVTdGF0ZSkge1xyXG4gIGlmIChnYW1lU3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XHJcbiAgICByZXR1cm4gcHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXN0aW5nXCJcclxuICAgICAgICAgIGtleT17ZWwuc3JjICsgaW5kZXh9XHJcbiAgICAgICAgICB3aWR0aD1cIjEyNVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMjVcIlxyXG4gICAgICAgICAgc3JjPXtlbC5zcmN9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoZ2FtZVN0YXRlID09PSBcInBsYXlpbmdcIikge1xyXG4gICAgcmV0dXJuIHByb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiA8ZGl2PjE8L2Rpdj47XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5yZXNldENhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICAgIHByb3BzLmxpbWl0Q2FyZHMoKTtcclxuICAgIHByb3BzLmR1cGxpY2F0ZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICB9LCBbcHJvcHMubnVtYmVyT2ZQYWlyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxncmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIDFweFwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2JiYlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICBrZXk9e2VsLnNyYyArIGluZGV4fVxyXG4gICAgICAgICAgICAgIGRhdGEtaW5kZXg9e2VsLmluZGV4fVxyXG4gICAgICAgICAgICAgIHNyYz17ZWwuc3JjfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIGdhbWVTdGF0ZTogc3RhdGUuZ2FtZVN0YXRlLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzaHVmZmxlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogU0hVRkZMRSB9KSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IERVUExJQ0FURV9DQVJEUyB9KSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUX0NBUkRTIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyaWQpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MjBweDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=