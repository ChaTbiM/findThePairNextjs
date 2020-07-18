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
      return props.changeNumberOfPairs({
        numberOfPairs: 6,
        width: 100
      });
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
      lineNumber: 25,
      columnNumber: 7
    }
  }, "10 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(12);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "12 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(15);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "15 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(18);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "18 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      return props.changeNumberOfPairs(21);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRyb2wuanN4Il0sIm5hbWVzIjpbInBhaXJzIiwibWVudSIsInByb3BzIiwiY2hhbmdlTnVtYmVyT2ZQYWlycyIsIm51bWJlck9mUGFpcnMiLCJ3aWR0aCIsIkNvbnRyb2wiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibnVtYmVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxFQUFXLEVBQVgsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLENBQWQ7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLFNBQ0UsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUNQQSxLQUFLLENBQUNDLG1CQUFOLENBQTBCO0FBQUVDLHFCQUFhLEVBQUUsQ0FBakI7QUFBb0JDLGFBQUssRUFBRTtBQUEzQixPQUExQixDQURPO0FBQUEsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFRRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQ1BILEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEI7QUFBRUMscUJBQWEsRUFBRSxDQUFqQjtBQUFvQkMsYUFBSyxFQUFFO0FBQTNCLE9BQTFCLENBRE87QUFBQSxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixFQWVFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBTyxFQUFFO0FBQUEsYUFBTUgsS0FBSyxDQUFDQyxtQkFBTixDQUEwQixFQUExQixDQUFOO0FBQUEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRixFQWtCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRTtBQUFBLGFBQU1ELEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEIsRUFBMUIsQ0FBTjtBQUFBLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGLEVBcUJFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBTyxFQUFFO0FBQUEsYUFBTUQsS0FBSyxDQUFDQyxtQkFBTixDQUEwQixFQUExQixDQUFOO0FBQUEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkYsRUF3QkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxXQUFPLEVBQUU7QUFBQSxhQUFNRCxLQUFLLENBQUNDLG1CQUFOLENBQTBCLEVBQTFCLENBQU47QUFBQSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhCRixFQTJCRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQU8sRUFBRTtBQUFBLGFBQU1ELEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEIsRUFBMUIsQ0FBTjtBQUFBLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JGLENBREY7QUFpQ0QsQ0FsQ0Q7O0FBbUNBLFNBQVNHLE9BQVQsQ0FBaUJKLEtBQWpCLEVBQXdCO0FBQ3RCLFNBQ0UsTUFBQyw2Q0FBRDtBQUFVLFdBQU8sRUFBRUQsSUFBSSxDQUFDQyxLQUFELENBQXZCO0FBQWdDLGFBQVMsRUFBQyxjQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNBLEtBQUssQ0FBQ0UsYUFBZixXQURGLENBREY7QUFLRDs7S0FOUUUsTzs7QUFRVCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDSixpQkFBYSxFQUFFSSxLQUFLLENBQUNKO0FBRGEsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENQLHVCQUFtQixFQUFFLDZCQUFDUSxNQUFEO0FBQUEsYUFBWUQsUUFBUSxDQUFDUCxnRkFBbUIsQ0FBQ1EsTUFBRCxDQUFwQixDQUFwQjtBQUFBO0FBRG1CLEdBQWY7QUFBQSxDQUEzQjs7QUFJZUMsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNILE9BQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjcyYWM4MGJlMGJkOWFkNWQ2M2Y2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY2hhbmdlTnVtYmVyT2ZQYWlycyB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgcGFpcnMgPSBbNiwgOCwgMTAsIDEyLCAxNSwgMTgsIDIxXTtcclxuXHJcbmNvbnN0IG1lbnUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycyh7IG51bWJlck9mUGFpcnM6IDYsIHdpZHRoOiAxMjUgfSlcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA2IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoeyBudW1iZXJPZlBhaXJzOiA2LCB3aWR0aDogMTAwIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgOCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDEwKX0+XHJcbiAgICAgICAgMTAgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxMil9PlxyXG4gICAgICAgIDEyIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTUpfT5cclxuICAgICAgICAxNSBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDE4KX0+XHJcbiAgICAgICAgMTggcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygyMSl9PlxyXG4gICAgICAgIDIxIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcbmZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnUocHJvcHMpfSBwbGFjZW1lbnQ9XCJib3R0b21DZW50ZXJcIj5cclxuICAgICAgPEJ1dHRvbj57cHJvcHMubnVtYmVyT2ZQYWlyc30gcGFpcnM8L0J1dHRvbj5cclxuICAgIDwvRHJvcGRvd24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGNoYW5nZU51bWJlck9mUGFpcnM6IChudW1iZXIpID0+IGRpc3BhdGNoKGNoYW5nZU51bWJlck9mUGFpcnMobnVtYmVyKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29udHJvbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=