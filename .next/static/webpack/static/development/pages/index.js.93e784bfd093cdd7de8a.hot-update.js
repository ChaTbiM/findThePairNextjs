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
    theme: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_components_Control__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
var StyledControl = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].Control.withConfig({
  displayName: "pages__StyledControl",
  componentId: "oewblh-0"
})(["background-color:red;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiQ29udGVudCIsIkxheW91dCIsIlNpZGVyIiwiQXBwIiwicHJvcHMiLCJ3aWR0aCIsIm1hcmdpbiIsImRpc3BsYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNhcmRzIiwibnVtYmVyT2ZQYWlycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibGltaXRDYXJkcyIsInR5cGUiLCJMSU1JVF9DQVJEUyIsImNvbm5lY3QiLCJTdHlsZWRDb250cm9sIiwic3R5bGVkIiwiQ29udHJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7SUFDUUEsTyxHQUFtQkMsMkMsQ0FBbkJELE87SUFBU0UsSyxHQUFVRCwyQyxDQUFWQyxLOztBQUVqQixTQUFTQyxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFDbEIsU0FDRSxNQUFDLDJDQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxLQUFUO0FBQWdCQyxZQUFNLEVBQUUsUUFBeEI7QUFBa0NDLGFBQU8sRUFBRTtBQUEzQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGO0FBVUQ7O0tBWFFKLEc7O0FBYVQsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0MsU0FBSyxFQUFFRCxLQUFLLENBQUNDLEtBRHFCO0FBRWxDQyxpQkFBYSxFQUFFRixLQUFLLENBQUNFO0FBRmEsR0FBWjtBQUFBLENBQXhCOztBQUtBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENDLGNBQVUsRUFBRTtBQUFBLGFBQU1ELFFBQVEsQ0FBQztBQUFFRSxZQUFJLEVBQUVDLHlFQUFXQTtBQUFuQixPQUFELENBQWQ7QUFBQTtBQUQ0QixHQUFmO0FBQUEsQ0FBM0I7O0FBSWVDLDBIQUFPLENBQUNULGVBQUQsRUFBa0JJLGtCQUFsQixDQUFQLENBQTZDVCxHQUE3QyxDQUFmO0FBQ0EsSUFBTWUsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLDZCQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTNlNzg0YmZkMDkzY2RkN2RlOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250cm9sXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCIuLi9jb21wb25lbnRzL0dyaWRcIjtcclxuXHJcbmltcG9ydCB7IExJTUlUX0NBUkRTIH0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuY29uc3QgeyBDb250ZW50LCBTaWRlciB9ID0gTGF5b3V0O1xyXG5cclxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgc3R5bGU9e3sgd2lkdGg6IFwiODAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIDxHcmlkIC8+XHJcbiAgICAgIDwvQ29udGVudD5cclxuICAgICAgPFNpZGVyIHRoZW1lPVwibGlnaHRcIj5cclxuICAgICAgICA8Q29udHJvbCAvPlxyXG4gICAgICA8L1NpZGVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XHJcbmNvbnN0IFN0eWxlZENvbnRyb2wgPSBzdHlsZWQuQ29udHJvbGBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=