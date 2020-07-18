webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Control.jsx":
/*!********************************!*\
  !*** ./components/Control.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Control.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var pairs = [6, 8, 10, 12, 15, 18, 21];

var menu = function menu(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(127);
      props.changeNumberOfPairs(6);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "6 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(127);
      props.changeNumberOfPairs(8);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "8 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(102);
      props.changeNumberOfPairs(10);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "10 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(12);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "12 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(15);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "15 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(18);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "18 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(73.42);
      props.changeNumberOfPairs(21);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "21 pairs"));
};

function Control(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_3__["changeNumberOfPairs"])(number));
    },
    changeWidth: function changeWidth(width) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_3__["changeWidth"])(width));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Control));
var ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRyb2wuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuanMiXSwibmFtZXMiOlsicGFpcnMiLCJtZW51IiwicHJvcHMiLCJjaGFuZ2VXaWR0aCIsImNoYW5nZU51bWJlck9mUGFpcnMiLCJDb250cm9sIiwibnVtYmVyT2ZQYWlycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJudW1iZXIiLCJ3aWR0aCIsImNvbm5lY3QiLCJDb250cm9sQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsRUFBVyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixFQUF1QixFQUF2QixDQUFkOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUNFLE1BQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JBLFdBQUssQ0FBQ0MsV0FBTixDQUFrQixHQUFsQjtBQUNBRCxXQUFLLENBQUNFLG1CQUFOLENBQTBCLENBQTFCO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFTRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiRixXQUFLLENBQUNDLFdBQU4sQ0FBa0IsR0FBbEI7QUFDQUQsV0FBSyxDQUFDRSxt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bGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2E0OTU4ODZhMGMxODM2MzI5M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VOdW1iZXJPZlBhaXJzLCBjaGFuZ2VXaWR0aCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgcGFpcnMgPSBbNiwgOCwgMTAsIDEyLCAxNSwgMTgsIDIxXTtcclxuXHJcbmNvbnN0IG1lbnUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCgxMjcpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycyg2KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgNiBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDEyNyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA4IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoMTAyKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxMCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTIpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxMiBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxNSBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxOCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDczLjQyKTtcclxuXHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDIxKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMjEgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufTtcclxuZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcGRvd24gb3ZlcmxheT17bWVudShwcm9wcyl9IHBsYWNlbWVudD1cImJvdHRvbUNlbnRlclwiPlxyXG4gICAgICA8QnV0dG9uPntwcm9wcy5udW1iZXJPZlBhaXJzfSBwYWlyczwvQnV0dG9uPlxyXG4gICAgPC9Ecm9wZG93bj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgY2hhbmdlTnVtYmVyT2ZQYWlyczogKG51bWJlcikgPT4gZGlzcGF0Y2goY2hhbmdlTnVtYmVyT2ZQYWlycyhudW1iZXIpKSxcclxuICBjaGFuZ2VXaWR0aDogKHdpZHRoKSA9PiBkaXNwYXRjaChjaGFuZ2VXaWR0aCh3aWR0aCkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvbnRyb2wpO1xyXG5jb25zdCBDb250cm9sQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==