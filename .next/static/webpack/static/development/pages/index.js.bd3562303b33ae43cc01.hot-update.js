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
      props.flipAllCards();
    }, 1500);
  }, [props.numberOfPairs]);
  return (//   grid Item
    __jsx("gridContainer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
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
            lineNumber: 32,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
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
            lineNumber: 46,
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
            lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJnYW1lU3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiLCJTSFVGRkxFIiwiTElNSVRfQ0FSRFMiLCJEVVBMSUNBVEVfQ0FSRFMiLCJSRVNFVF9DQVJEUyIsIkZMSVBfQUxMX0NBUkRTIiwiY29ubmVjdCIsImdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsU0FBSyxDQUFDRSxVQUFOO0FBQ0FGLFNBQUssQ0FBQ0csWUFBTjtBQUNBSCxTQUFLLENBQUNJLFVBQU47QUFDQUosU0FBSyxDQUFDSyxjQUFOO0FBQ0FMLFNBQUssQ0FBQ0csWUFBTjtBQUVBRyxjQUFVLENBQUMsWUFBTTtBQUNmTixXQUFLLENBQUNPLFlBQU47QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FWUSxFQVVOLENBQUNQLEtBQUssQ0FBQ1EsYUFBUCxDQVZNLENBQVQ7QUFZQSxTQUNFO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUixLQUFLLENBQUNTLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM5QixVQUFJRCxFQUFFLENBQUNFLFFBQVAsRUFBaUI7QUFDZixlQUNFO0FBQ0UsZUFBSyxFQUFFO0FBQ0xDLGtCQUFNLEVBQUUsT0FESDtBQUVMQyxtQkFBTyxFQUFFLGNBRko7QUFHTEMsa0JBQU0sRUFBRSxPQUhIO0FBSUxDLGlCQUFLLEVBQUUsT0FKRjtBQUtMQywyQkFBZSxFQUFFO0FBTFosV0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBU0U7QUFBSyxhQUFHLEVBQUVQLEVBQUUsQ0FBQ1EsR0FBSCxHQUFTUCxLQUFuQjtBQUEwQix3QkFBWUQsRUFBRSxDQUFDQyxLQUF6QztBQUFnRCxhQUFHLEVBQUVELEVBQUUsQ0FBQ1EsR0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRGLENBREY7QUFhRCxPQWRELE1BY087QUFDTCxlQUNFO0FBQ0UsZUFBSyxFQUFFO0FBQ0xMLGtCQUFNLEVBQUUsT0FESDtBQUVMQyxtQkFBTyxFQUFFLGNBRko7QUFHTEMsa0JBQU0sRUFBRSxPQUhIO0FBSUxDLGlCQUFLLEVBQUUsT0FKRjtBQUtMQywyQkFBZSxFQUFFO0FBTFosV0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBU0U7QUFDRSxlQUFLLEVBQUU7QUFBRUgsbUJBQU8sRUFBRTtBQUFYLFdBRFQ7QUFFRSxhQUFHLEVBQUVKLEVBQUUsQ0FBQ1EsR0FBSCxHQUFTUCxLQUZoQjtBQUdFLHdCQUFZRCxFQUFFLENBQUNDLEtBSGpCO0FBSUUsYUFBRyxFQUFFRCxFQUFFLENBQUNRLEdBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRGLENBREY7QUFrQkQ7QUFDRixLQW5DQSxDQURIO0FBRkY7QUF5Q0Q7O0dBdERRcEIsSTs7S0FBQUEsSTs7QUF3RFQsSUFBTXFCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENiLGlCQUFhLEVBQUVhLEtBQUssQ0FBQ2IsYUFEYTtBQUVsQ0MsU0FBSyxFQUFFWSxLQUFLLENBQUNaLEtBRnFCO0FBR2xDYSxhQUFTLEVBQUVELEtBQUssQ0FBQ0M7QUFIaUIsR0FBWjtBQUFBLENBQXhCOztBQU1BLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENyQixnQkFBWSxFQUFFO0FBQUEsYUFBTXFCLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVDLHFFQUFPQTtBQUFmLE9BQUQsQ0FBZDtBQUFBLEtBRDBCO0FBRXhDdEIsY0FBVSxFQUFFO0FBQUEsYUFBTW9CLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVFLHlFQUFXQTtBQUFuQixPQUFELENBQWQ7QUFBQSxLQUY0QjtBQUd4Q3RCLGtCQUFjLEVBQUU7QUFBQSxhQUFNbUIsUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUcsNkVBQWVBO0FBQXZCLE9BQUQsQ0FBZDtBQUFBLEtBSHdCO0FBSXhDMUIsY0FBVSxFQUFFO0FBQUEsYUFBTXNCLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVJLHlFQUFXQTtBQUFuQixPQUFELENBQWQ7QUFBQSxLQUo0QjtBQUt4Q3RCLGdCQUFZLEVBQUU7QUFBQSxhQUFNaUIsUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUssNEVBQWNBO0FBQXRCLE9BQUQsQ0FBZDtBQUFBO0FBTDBCLEdBQWY7QUFBQSxDQUEzQjs7QUFRZUMsMEhBQU8sQ0FBQ1gsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkN4QixJQUE3QyxDQUFmLEUsQ0FFQTs7QUFDQSxJQUFNaUMsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYmQzNTYyMzAzYjMzYWU0M2NjMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIExJTUlUX0NBUkRTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxufSBmcm9tIFwiLi4vcmVkdXgvY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5yZXNldENhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICAgIHByb3BzLmxpbWl0Q2FyZHMoKTtcclxuICAgIHByb3BzLmR1cGxpY2F0ZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCBbcHJvcHMubnVtYmVyT2ZQYWlyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxncmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWwuaXNBY3RpdmUpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgMXB4XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiYmJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2VsLnNyYyArIGluZGV4fSBkYXRhLWluZGV4PXtlbC5pbmRleH0gc3JjPXtlbC5zcmN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxcHhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2JiYlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAga2V5PXtlbC5zcmMgKyBpbmRleH1cclxuICAgICAgICAgICAgICAgIGRhdGEtaW5kZXg9e2VsLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtlbC5zcmN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L2dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIGdhbWVTdGF0ZTogc3RhdGUuZ2FtZVN0YXRlLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzaHVmZmxlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogU0hVRkZMRSB9KSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IERVUExJQ0FURV9DQVJEUyB9KSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUX0NBUkRTIH0pLFxyXG4gIGZsaXBBbGxDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGTElQX0FMTF9DQVJEUyB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBncmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9