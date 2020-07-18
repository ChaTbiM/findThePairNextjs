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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJnYW1lU3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiLCJTSFVGRkxFIiwiTElNSVRfQ0FSRFMiLCJEVVBMSUNBVEVfQ0FSRFMiLCJSRVNFVF9DQVJEUyIsIkZMSVBfQUxMX0NBUkRTIiwiY29ubmVjdCIsImdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsU0FBSyxDQUFDRSxVQUFOO0FBQ0FGLFNBQUssQ0FBQ0csWUFBTjtBQUNBSCxTQUFLLENBQUNJLFVBQU47QUFDQUosU0FBSyxDQUFDSyxjQUFOO0FBQ0FMLFNBQUssQ0FBQ0csWUFBTjtBQUVBRyxjQUFVLENBQUMsWUFBTTtBQUNmTixXQUFLLENBQUNPLFlBQU47QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FWUSxFQVVOLENBQUNQLEtBQUssQ0FBQ1EsYUFBUCxDQVZNLENBQVQ7QUFZQSxTQUNFO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHUixLQUFLLENBQUNTLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM5QixVQUFJRCxFQUFFLENBQUNFLFFBQVAsRUFBaUI7QUFDZixlQUNFO0FBQ0UsZUFBSyxFQUFFO0FBQ0xDLGtCQUFNLEVBQUUsT0FESDtBQUVMQyxtQkFBTyxFQUFFLGNBRko7QUFHTEMsa0JBQU0sRUFBRSxPQUhIO0FBSUxDLGlCQUFLLEVBQUUsT0FKRjtBQUtMQywyQkFBZSxFQUFFO0FBTFosV0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBU0U7QUFBSyxhQUFHLEVBQUVQLEVBQUUsQ0FBQ1EsR0FBSCxHQUFTUCxLQUFuQjtBQUEwQix3QkFBWUQsRUFBRSxDQUFDQyxLQUF6QztBQUFnRCxhQUFHLEVBQUVELEVBQUUsQ0FBQ1EsR0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRGLENBREY7QUFhRCxPQWRELE1BY087QUFDTCxlQUNFO0FBQ0UsZUFBSyxFQUFFO0FBQ0xMLGtCQUFNLEVBQUUsT0FESDtBQUVMQyxtQkFBTyxFQUFFLGNBRko7QUFHTEMsa0JBQU0sRUFBRSxPQUhIO0FBSUxDLGlCQUFLLEVBQUUsT0FKRjtBQUtMQywyQkFBZSxFQUFFO0FBTFosV0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBU0U7QUFDRSxlQUFLLEVBQUU7QUFBRUgsbUJBQU8sRUFBRTtBQUFYLFdBRFQ7QUFFRSxhQUFHLEVBQUVKLEVBQUUsQ0FBQ1EsR0FBSCxHQUFTUCxLQUZoQjtBQUdFLHdCQUFZRCxFQUFFLENBQUNDLEtBSGpCO0FBSUUsYUFBRyxFQUFFRCxFQUFFLENBQUNRLEdBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRGLENBREY7QUFrQkQ7QUFDRixLQW5DQSxDQURIO0FBRkY7QUF5Q0Q7O0dBdERRcEIsSTs7S0FBQUEsSTs7QUF3RFQsSUFBTXFCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENiLGlCQUFhLEVBQUVhLEtBQUssQ0FBQ2IsYUFEYTtBQUVsQ0MsU0FBSyxFQUFFWSxLQUFLLENBQUNaLEtBRnFCO0FBR2xDYSxhQUFTLEVBQUVELEtBQUssQ0FBQ0M7QUFIaUIsR0FBWjtBQUFBLENBQXhCOztBQU1BLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENyQixnQkFBWSxFQUFFO0FBQUEsYUFBTXFCLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVDLHFFQUFPQTtBQUFmLE9BQUQsQ0FBZDtBQUFBLEtBRDBCO0FBRXhDdEIsY0FBVSxFQUFFO0FBQUEsYUFBTW9CLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVFLHlFQUFXQTtBQUFuQixPQUFELENBQWQ7QUFBQSxLQUY0QjtBQUd4Q3RCLGtCQUFjLEVBQUU7QUFBQSxhQUFNbUIsUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUcsNkVBQWVBO0FBQXZCLE9BQUQsQ0FBZDtBQUFBLEtBSHdCO0FBSXhDMUIsY0FBVSxFQUFFO0FBQUEsYUFBTXNCLFFBQVEsQ0FBQztBQUFFQyxZQUFJLEVBQUVJLHlFQUFXQTtBQUFuQixPQUFELENBQWQ7QUFBQSxLQUo0QjtBQUt4Q3RCLGdCQUFZLEVBQUU7QUFBQSxhQUFNaUIsUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUssNEVBQWNBO0FBQXRCLE9BQUQsQ0FBZDtBQUFBO0FBTDBCLEdBQWY7QUFBQSxDQUEzQjs7QUFRZUMsMEhBQU8sQ0FBQ1gsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkN4QixJQUE3QyxDQUFmLEUsQ0FFQTs7QUFDQSxJQUFNaUMsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYzAyYWI0ZjAxN2Y4M2QxMTFlMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIExJTUlUX0NBUkRTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG59IGZyb20gXCIuLi9yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyAgIGdyaWQgSXRlbVxyXG4gICAgPGdyaWRDb250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxcHhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2JiYlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDFweFwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYmJiXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICBrZXk9e2VsLnNyYyArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgZGF0YS1pbmRleD17ZWwuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KX1cclxuICAgIDwvZ3JpZENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgZ2FtZVN0YXRlOiBzdGF0ZS5nYW1lU3RhdGUsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTSFVGRkxFIH0pLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRFVQTElDQVRFX0NBUkRTIH0pLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfQ0FSRFMgfSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZMSVBfQUxMX0NBUkRTIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyaWQpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MjBweDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=