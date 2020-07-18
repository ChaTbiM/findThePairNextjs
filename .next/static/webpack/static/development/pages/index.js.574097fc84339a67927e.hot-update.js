webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Control.jsx":
/*!********************************!*\
  !*** ./components/Control.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Control.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var pairs = [6, 8, 10, 12, 15, 18, 21];

var menu = function menu(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs({
        numberOfPairs: 6,
        width: 125
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "6 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(8);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "8 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(10);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "10 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(12);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "12 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(15);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "15 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(18);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "18 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(21);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "21 pairs"));
};

function Control(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, props.numberOfPairs, " pairs"));
}

_c = Control;

var mapStateToProps = function mapStateToProps(state) {
  return {
    numberOfPairs: state.numberOfPairs
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeNumberOfPairs: function changeNumberOfPairs(number) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeNumberOfPairs"])(number));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Control));

var _c;

$RefreshReg$(_c, "Control");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRyb2wuanN4Il0sIm5hbWVzIjpbInBhaXJzIiwibWVudSIsInByb3BzIiwiY2hhbmdlTnVtYmVyT2ZQYWlycyIsIm51bWJlck9mUGFpcnMiLCJ3aWR0aCIsIkNvbnRyb2wiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibnVtYmVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxFQUFXLEVBQVgsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLENBQWQ7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLFNBQ0UsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUNQQSxLQUFLLENBQUNDLG1CQUFOLENBQTBCO0FBQUVDLHFCQUFhLEVBQUUsQ0FBakI7QUFBb0JDLGFBQUssRUFBRTtBQUEzQixPQUExQixDQURPO0FBQUEsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFRRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRTtBQUFBLGFBQU1ILEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEIsQ0FBMUIsQ0FBTjtBQUFBLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixFQVdFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBTyxFQUFFO0FBQUEsYUFBTUQsS0FBSyxDQUFDQyxtQkFBTixDQUEwQixFQUExQixDQUFOO0FBQUEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixFQWNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBTyxFQUFFO0FBQUEsYUFBTUQsS0FBSyxDQUFDQyxtQkFBTixDQUEwQixFQUExQixDQUFOO0FBQUEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixFQWlCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRTtBQUFBLGFBQU1ELEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEIsRUFBMUIsQ0FBTjtBQUFBLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGLEVBb0JFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBTyxFQUFFO0FBQUEsYUFBTUQsS0FBSyxDQUFDQyxtQkFBTixDQUEwQixFQUExQixDQUFOO0FBQUEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkYsRUF1QkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxXQUFPLEVBQUU7QUFBQSxhQUFNRCxLQUFLLENBQUNDLG1CQUFOLENBQTBCLEVBQTFCLENBQU47QUFBQSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixDQURGO0FBNkJELENBOUJEOztBQStCQSxTQUFTRyxPQUFULENBQWlCSixLQUFqQixFQUF3QjtBQUN0QixTQUNFLE1BQUMsNkNBQUQ7QUFBVSxXQUFPLEVBQUVELElBQUksQ0FBQ0MsS0FBRCxDQUF2QjtBQUFnQyxhQUFTLEVBQUMsY0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTQSxLQUFLLENBQUNFLGFBQWYsV0FERixDQURGO0FBS0Q7O0tBTlFFLE87O0FBUVQsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0osaUJBQWEsRUFBRUksS0FBSyxDQUFDSjtBQURhLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDUCx1QkFBbUIsRUFBRSw2QkFBQ1EsTUFBRDtBQUFBLGFBQVlELFFBQVEsQ0FBQ1AsZ0ZBQW1CLENBQUNRLE1BQUQsQ0FBcEIsQ0FBcEI7QUFBQTtBQURtQixHQUFmO0FBQUEsQ0FBM0I7O0FBSWVDLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDSCxPQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41NzQwOTdmYzg0MzM5YTY3OTI3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNoYW5nZU51bWJlck9mUGFpcnMgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBNZW51LCBCdXR0b24sIERyb3Bkb3duIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IHBhaXJzID0gWzYsIDgsIDEwLCAxMiwgMTUsIDE4LCAyMV07XHJcblxyXG5jb25zdCBtZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51PlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoeyBudW1iZXJPZlBhaXJzOiA2LCB3aWR0aDogMTI1IH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgNiBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDgpfT5cclxuICAgICAgICA4IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTApfT5cclxuICAgICAgICAxMCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDEyKX0+XHJcbiAgICAgICAgMTIgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxNSl9PlxyXG4gICAgICAgIDE1IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTgpfT5cclxuICAgICAgICAxOCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDIxKX0+XHJcbiAgICAgICAgMjEgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufTtcclxuZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd24gb3ZlcmxheT17bWVudShwcm9wcyl9IHBsYWNlbWVudD1cImJvdHRvbUNlbnRlclwiPlxyXG4gICAgICA8QnV0dG9uPntwcm9wcy5udW1iZXJPZlBhaXJzfSBwYWlyczwvQnV0dG9uPlxyXG4gICAgPC9Ecm9wZG93bj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgY2hhbmdlTnVtYmVyT2ZQYWlyczogKG51bWJlcikgPT4gZGlzcGF0Y2goY2hhbmdlTnVtYmVyT2ZQYWlycyhudW1iZXIpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb250cm9sKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==