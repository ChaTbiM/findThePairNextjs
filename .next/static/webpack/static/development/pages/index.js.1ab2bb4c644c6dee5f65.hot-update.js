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
        className: "wrapper",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, __jsx("img", {
        className: "img",
        key: el.src + index,
        "data-index": el.index,
        src: el.src,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbInJlbmRlckNhcmRzIiwiZ2FtZVN0YXRlIiwicHJvcHMiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJzcmMiLCJHcmlkIiwidXNlRWZmZWN0IiwicmVzZXRDYXJkcyIsInNodWZmbGVDYXJkcyIsImxpbWl0Q2FyZHMiLCJkdXBsaWNhdGVDYXJkcyIsIm51bWJlck9mUGFpcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiY29ubmVjdCIsImdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsU0FBU0EsV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0M7QUFBQTs7QUFDOUIsTUFBSUEsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQzNCLFdBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQ3BDLGFBQ0U7QUFDRSxpQkFBUyxFQUFDLFNBRFo7QUFFRSxXQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FBSCxHQUFTRCxLQUZoQjtBQUdFLGFBQUssRUFBQyxLQUhSO0FBSUUsY0FBTSxFQUFDLEtBSlQ7QUFLRSxXQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFTRCxLQVZNLENBQVA7QUFXRCxHQVpELE1BWU8sSUFBSU4sU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ2xDLFdBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFlO0FBQ3BDLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7QUFDRjs7QUFDRCxTQUFTRSxJQUFULENBQWNOLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJPLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxTQUFLLENBQUNRLFVBQU47QUFDQVIsU0FBSyxDQUFDUyxZQUFOO0FBQ0FULFNBQUssQ0FBQ1UsVUFBTjtBQUNBVixTQUFLLENBQUNXLGNBQU47QUFDQVgsU0FBSyxDQUFDUyxZQUFOO0FBQ0QsR0FOUSxFQU1OLENBQUNULEtBQUssQ0FBQ1ksYUFBUCxDQU5NLENBQVQ7QUFRQSxTQUNFO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHWixLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM5QixhQUNFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGlCQUFTLEVBQUMsS0FEWjtBQUVFLFdBQUcsRUFBRUQsRUFBRSxDQUFDRSxHQUFILEdBQVNELEtBRmhCO0FBR0Usc0JBQVlELEVBQUUsQ0FBQ0MsS0FIakI7QUFJRSxXQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERjtBQVVELEtBWEEsQ0FESDtBQUZGO0FBaUJEOztHQTFCUUMsSTs7S0FBQUEsSTs7QUE0QlQsSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0YsaUJBQWEsRUFBRUUsS0FBSyxDQUFDRixhQURhO0FBRWxDWCxTQUFLLEVBQUVhLEtBQUssQ0FBQ2IsS0FGcUI7QUFHbENGLGFBQVMsRUFBRWUsS0FBSyxDQUFDZjtBQUhpQixHQUFaO0FBQUEsQ0FBeEI7O0FBTUEsSUFBTWdCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENQLGdCQUFZLEVBQUU7QUFBQSxhQUFNTyxRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFQyxxRUFBT0E7QUFBZixPQUFELENBQWQ7QUFBQSxLQUQwQjtBQUV4Q1IsY0FBVSxFQUFFO0FBQUEsYUFBTU0sUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUUseUVBQVdBO0FBQW5CLE9BQUQsQ0FBZDtBQUFBLEtBRjRCO0FBR3hDUixrQkFBYyxFQUFFO0FBQUEsYUFBTUssUUFBUSxDQUFDO0FBQUVDLFlBQUksRUFBRUcsNkVBQWVBO0FBQXZCLE9BQUQsQ0FBZDtBQUFBLEtBSHdCO0FBSXhDWixjQUFVLEVBQUU7QUFBQSxhQUFNUSxRQUFRLENBQUM7QUFBRUMsWUFBSSxFQUFFSSx5RUFBV0E7QUFBbkIsT0FBRCxDQUFkO0FBQUE7QUFKNEIsR0FBZjtBQUFBLENBQTNCOztBQU9lQywwSEFBTyxDQUFDVCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q1QsSUFBN0MsQ0FBZixFLENBRUE7O0FBQ0EsSUFBTWlCLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpREFBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFhYjJiYjRjNjQ0YzZkZWU1ZjY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxufSBmcm9tIFwiLi4vcmVkdXgvY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZHMoZ2FtZVN0YXRlKSB7XHJcbiAgaWYgKGdhbWVTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIHJldHVybiBwcm9wcy5jYXJkcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRlc3RpbmdcIlxyXG4gICAgICAgICAga2V5PXtlbC5zcmMgKyBpbmRleH1cclxuICAgICAgICAgIHdpZHRoPVwiMTI1XCJcclxuICAgICAgICAgIGhlaWdodD1cIjEyNVwiXHJcbiAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChnYW1lU3RhdGUgPT09IFwicGxheWluZ1wiKSB7XHJcbiAgICByZXR1cm4gcHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIDxkaXY+MTwvZGl2PjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyAgIGdyaWQgSXRlbVxyXG4gICAgPGdyaWRDb250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAga2V5PXtlbC5zcmMgKyBpbmRleH1cclxuICAgICAgICAgICAgICBkYXRhLWluZGV4PXtlbC5pbmRleH1cclxuICAgICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9ncmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICBnYW1lU3RhdGU6IHN0YXRlLmdhbWVTdGF0ZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNIVUZGTEUgfSksXHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMSU1JVF9DQVJEUyB9KSxcclxuICBkdXBsaWNhdGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMgfSksXHJcbiAgcmVzZXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9DQVJEUyB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBncmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9