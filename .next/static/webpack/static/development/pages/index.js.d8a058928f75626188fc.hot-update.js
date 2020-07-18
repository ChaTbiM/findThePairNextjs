webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Control */ "./components/Control.jsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Grid */ "./components/Grid.jsx");
/* harmony import */ var _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/constants/action-types */ "./redux/constants/action-types.js");
var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content,
    Sider = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Sider;

function App(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    style: {
      width: "80%",
      margin: "0 auto",
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(Sider, {
    align: "center",
    theme: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_components_Control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    direction: "vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
}

_c = App;

var mapStateToProps = function mapStateToProps(state) {
  return {
    cards: state.cards,
    numberOfPairs: state.numberOfPairs
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    limitCards: function limitCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_6__["LIMIT_CARDS"]
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ29udGVudCIsIkxheW91dCIsIlNpZGVyIiwiQXBwIiwicHJvcHMiLCJ3aWR0aCIsIm1hcmdpbiIsImRpc3BsYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNhcmRzIiwibnVtYmVyT2ZQYWlycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibGltaXRDYXJkcyIsInR5cGUiLCJMSU1JVF9DQVJEUyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0lBQ1FBLE8sR0FBbUJDLDJDLENBQW5CRCxPO0lBQVNFLEssR0FBVUQsMkMsQ0FBVkMsSzs7QUFFakIsU0FBU0MsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFNBQ0UsTUFBQywyQ0FBRDtBQUFRLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsS0FBVDtBQUFnQkMsWUFBTSxFQUFFLFFBQXhCO0FBQWtDQyxhQUFPLEVBQUU7QUFBM0MsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFDLFFBQWI7QUFBc0IsU0FBSyxFQUFDLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVMsYUFBUyxFQUFDLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREY7QUFVRDs7S0FYUUosRzs7QUFhVCxJQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDQyxTQUFLLEVBQUVELEtBQUssQ0FBQ0MsS0FEcUI7QUFFbENDLGlCQUFhLEVBQUVGLEtBQUssQ0FBQ0U7QUFGYSxHQUFaO0FBQUEsQ0FBeEI7O0FBS0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q0MsY0FBVSxFQUFFO0FBQUEsYUFBTUQsUUFBUSxDQUFDO0FBQUVFLFlBQUksRUFBRUMseUVBQVdBO0FBQW5CLE9BQUQsQ0FBZDtBQUFBO0FBRDRCLEdBQWY7QUFBQSxDQUEzQjs7QUFJZUMsMEhBQU8sQ0FBQ1QsZUFBRCxFQUFrQkksa0JBQWxCLENBQVAsQ0FBNkNULEdBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ4YTA1ODkyOGY3NTYyNjE4OGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENvbnRyb2wgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udHJvbFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiLi4vY29tcG9uZW50cy9HcmlkXCI7XHJcblxyXG5pbXBvcnQgeyBMSU1JVF9DQVJEUyB9IGZyb20gXCIuLi9yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcbmNvbnN0IHsgQ29udGVudCwgU2lkZXIgfSA9IExheW91dDtcclxuXHJcbmZ1bmN0aW9uIEFwcChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHN0eWxlPXt7IHdpZHRoOiBcIjgwJVwiLCBtYXJnaW46IFwiMCBhdXRvXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICA8Q29udGVudD5cclxuICAgICAgICA8R3JpZCAvPlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDxTaWRlciBhbGlnbj1cImNlbnRlclwiIHRoZW1lPVwibGlnaHRcIj5cclxuICAgICAgICA8Q29udHJvbCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgIDwvU2lkZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==