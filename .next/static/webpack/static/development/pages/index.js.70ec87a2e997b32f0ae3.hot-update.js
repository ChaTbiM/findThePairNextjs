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





function Grid(props) {
  _s();

  var _this = this;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();
    setTimeout(function () {
      props.flip;
    }, 1500);
  }, [props.numberOfPairs]);
  return (//   grid Item
    __jsx("gridContainer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    }, props.cards.map(function (el, index) {
      if (el.isActive) {
        return __jsx("div", {
          style: {
            margin: "0 1px",
            display: "inline-block",
            height: "125px",
            width: "125px",
            backgroundColor: "#bbb"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }
        }));
      } else {
        return __jsx("div", {
          style: {
            margin: "0 1px",
            display: "inline-block",
            height: "125px",
            width: "125px",
            backgroundColor: "#bbb"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }
        }, __jsx("img", {
          style: {
            display: "none"
          },
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }
        }));
      }
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
    },
    flipAllCards: function flipAllCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FLIP_ALL_CARDS"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcCIsIm51bWJlck9mUGFpcnMiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJpc0FjdGl2ZSIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInNyYyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZ2FtZVN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJmbGlwQWxsQ2FyZHMiLCJGTElQX0FMTF9DQVJEUyIsImNvbm5lY3QiLCJncmlkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFNBQUssQ0FBQ0UsVUFBTjtBQUNBRixTQUFLLENBQUNHLFlBQU47QUFDQUgsU0FBSyxDQUFDSSxVQUFOO0FBQ0FKLFNBQUssQ0FBQ0ssY0FBTjtBQUNBTCxTQUFLLENBQUNHLFlBQU47QUFFQUcsY0FBVSxDQUFDLFlBQU07QUFDZk4sV0FBSyxDQUFDTyxJQUFOO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBVlEsRUFVTixDQUFDUCxLQUFLLENBQUNRLGFBQVAsQ0FWTSxDQUFUO0FBWUEsU0FDRTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1IsS0FBSyxDQUFDUyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDOUIsVUFBSUQsRUFBRSxDQUFDRSxRQUFQLEVBQWlCO0FBQ2YsZUFDRTtBQUNFLGVBQUssRUFBRTtBQUNMQyxrQkFBTSxFQUFFLE9BREg7QUFFTEMsbUJBQU8sRUFBRSxjQUZKO0FBR0xDLGtCQUFNLEVBQUUsT0FISDtBQUlMQyxpQkFBSyxFQUFFLE9BSkY7QUFLTEMsMkJBQWUsRUFBRTtBQUxaLFdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVNFO0FBQUssYUFBRyxFQUFFUCxFQUFFLENBQUNRLEdBQUgsR0FBU1AsS0FBbkI7QUFBMEIsd0JBQVlELEVBQUUsQ0FBQ0MsS0FBekM7QUFBZ0QsYUFBRyxFQUFFRCxFQUFFLENBQUNRLEdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFURixDQURGO0FBYUQsT0FkRCxNQWNPO0FBQ0wsZUFDRTtBQUNFLGVBQUssRUFBRTtBQUNMTCxrQkFBTSxFQUFFLE9BREg7QUFFTEMsbUJBQU8sRUFBRSxjQUZKO0FBR0xDLGtCQUFNLEVBQUUsT0FISDtBQUlMQyxpQkFBSyxFQUFFLE9BSkY7QUFLTEMsMkJBQWUsRUFBRTtBQUxaLFdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVNFO0FBQ0UsZUFBSyxFQUFFO0FBQUVILG1CQUFPLEVBQUU7QUFBWCxXQURUO0FBRUUsYUFBRyxFQUFFSixFQUFFLENBQUNRLEdBQUgsR0FBU1AsS0FGaEI7QUFHRSx3QkFBWUQsRUFBRSxDQUFDQyxLQUhqQjtBQUlFLGFBQUcsRUFBRUQsRUFBRSxDQUFDUSxHQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFURixDQURGO0FBa0JEO0FBQ0YsS0FuQ0EsQ0FESDtBQUZGO0FBeUNEOztHQXREUXBCLEk7O0tBQUFBLEk7O0FBd0RULElBQU1xQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDYixpQkFBYSxFQUFFYSxLQUFLLENBQUNiLGFBRGE7QUFFbENDLFNBQUssRUFBRVksS0FBSyxDQUFDWixLQUZxQjtBQUdsQ2EsYUFBUyxFQUFFRCxLQUFLLENBQUNDO0FBSGlCLEdBQVo7QUFBQSxDQUF4Qjs7QUFNQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDckIsZ0JBQVksRUFBRTtBQUFBLGFBQU1xQixRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFQyxxRUFBT0E7QUFBZixPQUFELENBQWQ7QUFBQSxLQUQwQjtBQUV4Q3RCLGNBQVUsRUFBRTtBQUFBLGFBQU1vQixRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFRSx5RUFBV0E7QUFBbkIsT0FBRCxDQUFkO0FBQUEsS0FGNEI7QUFHeEN0QixrQkFBYyxFQUFFO0FBQUEsYUFBTW1CLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVHLDZFQUFlQTtBQUF2QixPQUFELENBQWQ7QUFBQSxLQUh3QjtBQUl4QzFCLGNBQVUsRUFBRTtBQUFBLGFBQU1zQixRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFSSx5RUFBV0E7QUFBbkIsT0FBRCxDQUFkO0FBQUEsS0FKNEI7QUFLeENDLGdCQUFZLEVBQUU7QUFBQSxhQUFNTixRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFTSw0RUFBY0E7QUFBdEIsT0FBRCxDQUFkO0FBQUE7QUFMMEIsR0FBZjtBQUFBLENBQTNCOztBQVFlQywwSEFBTyxDQUFDWixlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q3hCLElBQTdDLENBQWYsRSxDQUVBOztBQUNBLElBQU1rQyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaURBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43MGVjODdhMmU5OTdiMzJmMGFlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgU0hVRkZMRSxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5saW1pdENhcmRzKCk7XHJcbiAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByb3BzLmZsaXA7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCBbcHJvcHMubnVtYmVyT2ZQYWlyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxncmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWwuaXNBY3RpdmUpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgMXB4XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiYmJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2VsLnNyYyArIGluZGV4fSBkYXRhLWluZGV4PXtlbC5pbmRleH0gc3JjPXtlbC5zcmN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxcHhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2JiYlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAga2V5PXtlbC5zcmMgKyBpbmRleH1cclxuICAgICAgICAgICAgICAgIGRhdGEtaW5kZXg9e2VsLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtlbC5zcmN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L2dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIGdhbWVTdGF0ZTogc3RhdGUuZ2FtZVN0YXRlLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzaHVmZmxlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogU0hVRkZMRSB9KSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IERVUExJQ0FURV9DQVJEUyB9KSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUX0NBUkRTIH0pLFxyXG4gIGZsaXBBbGxDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGTElQX0FMTF9DQVJEUyB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBncmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9