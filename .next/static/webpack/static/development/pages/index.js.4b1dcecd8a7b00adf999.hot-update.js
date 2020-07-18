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
      if (el.isActive) {
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
            lineNumber: 45,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
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
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
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
            lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbInJlbmRlckNhcmRzIiwiZ2FtZVN0YXRlIiwicHJvcHMiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJzcmMiLCJHcmlkIiwidXNlRWZmZWN0IiwicmVzZXRDYXJkcyIsInNodWZmbGVDYXJkcyIsImxpbWl0Q2FyZHMiLCJkdXBsaWNhdGVDYXJkcyIsIm51bWJlck9mUGFpcnMiLCJpc0FjdGl2ZSIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJjb25uZWN0IiwiZ3JpZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxTQUFTQSxXQUFULENBQXFCQyxTQUFyQixFQUFnQztBQUFBOztBQUM5QixNQUFJQSxTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDM0IsV0FBT0MsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDcEMsYUFDRTtBQUNFLGlCQUFTLEVBQUMsU0FEWjtBQUVFLFdBQUcsRUFBRUQsRUFBRSxDQUFDRSxHQUFILEdBQVNELEtBRmhCO0FBR0UsYUFBSyxFQUFDLEtBSFI7QUFJRSxjQUFNLEVBQUMsS0FKVDtBQUtFLFdBQUcsRUFBRUQsRUFBRSxDQUFDRSxHQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQVNELEtBVk0sQ0FBUDtBQVdELEdBWkQsTUFZTyxJQUFJTixTQUFTLEtBQUssU0FBbEIsRUFB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QUEsS0FId0I7QUFJeENsQixjQUFVLEVBQUU7QUFBQSxhQUFNYyxRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFSSx5RUFBV0E7QUFBbkIsT0FBRCxDQUFkO0FBQUE7QUFKNEIsR0FBZjtBQUFBLENBQTNCOztBQU9lQywwSEFBTyxDQUFDVCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q2YsSUFBN0MsQ0FBZixFLENBRUE7O0FBQ0EsSUFBTXVCLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpREFBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjRiMWRjZWNkOGE3YjAwYWRmOTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxufSBmcm9tIFwiLi4vcmVkdXgvY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZHMoZ2FtZVN0YXRlKSB7XHJcbiAgaWYgKGdhbWVTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIHJldHVybiBwcm9wcy5jYXJkcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRlc3RpbmdcIlxyXG4gICAgICAgICAga2V5PXtlbC5zcmMgKyBpbmRleH1cclxuICAgICAgICAgIHdpZHRoPVwiMTI1XCJcclxuICAgICAgICAgIGhlaWdodD1cIjEyNVwiXHJcbiAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChnYW1lU3RhdGUgPT09IFwicGxheWluZ1wiKSB7XHJcbiAgICByZXR1cm4gcHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIDxkaXY+MTwvZGl2PjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyAgIGdyaWQgSXRlbVxyXG4gICAgPGdyaWRDb250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxcHhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2JiYlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDFweFwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYmJiXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICBrZXk9e2VsLnNyYyArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgZGF0YS1pbmRleD17ZWwuaW5kZXh9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KX1cclxuICAgIDwvZ3JpZENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgZ2FtZVN0YXRlOiBzdGF0ZS5nYW1lU3RhdGUsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTSFVGRkxFIH0pLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRFVQTElDQVRFX0NBUkRTIH0pLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfQ0FSRFMgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JpZCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgZ3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUyMHB4O1xyXG4gIGhlaWdodDogNTIwcHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==