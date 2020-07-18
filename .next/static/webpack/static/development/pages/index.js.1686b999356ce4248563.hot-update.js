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

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  margin: 10px auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  top: 25%;\n  transform: translateY(-25%);\n"]);

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
  return __jsx(ControlContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, props.numberOfPairs, " pairs")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "You found 0 out of 8 pairs with 1 try."));
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
_c2 = ControlContainer;
var StyledStatus = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p(_templateObject2());

var _c, _c2;

$RefreshReg$(_c, "Control");
$RefreshReg$(_c2, "ControlContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRyb2wuanN4Il0sIm5hbWVzIjpbInBhaXJzIiwibWVudSIsInByb3BzIiwiY2hhbmdlV2lkdGgiLCJjaGFuZ2VOdW1iZXJPZlBhaXJzIiwiQ29udHJvbCIsIm51bWJlck9mUGFpcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibnVtYmVyIiwid2lkdGgiLCJjb25uZWN0IiwiQ29udHJvbENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFN0YXR1cyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsRUFBVyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixFQUF1QixFQUF2QixDQUFkOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUNFLE1BQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JBLFdBQUssQ0FBQ0MsV0FBTixDQUFrQixHQUFsQjtBQUNBRCxXQUFLLENBQUNFLG1CQUFOLENBQTBCLENBQTFCO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFTRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiRixXQUFLLENBQUNDLFdBQU4sQ0FBa0IsR0FBbEI7QUFDQUQsV0FBSyxDQUFDRSxtQkFBTixDQUEwQixDQUExQjtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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bWVudFxccGFnZXNcXGluZGV4LmpzLjE2ODZiOTk5MzU2Y2U0MjQ4NTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY2hhbmdlTnVtYmVyT2ZQYWlycywgY2hhbmdlV2lkdGggfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBNZW51LCBCdXR0b24sIERyb3Bkb3duIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IHBhaXJzID0gWzYsIDgsIDEwLCAxMiwgMTUsIDE4LCAyMV07XHJcblxyXG5jb25zdCBtZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51PlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoMTI3KTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoNik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDYgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCgxMjcpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycyg4KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgOCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDEwMik7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDEwKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMTAgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCg4NS4zMyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDEyKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMTIgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCg4NS4zMyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDE1KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMTUgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCg4NS4zMyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDE4KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMTggcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCg3My40Mik7XHJcblxyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygyMSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDIxIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcbmZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRyb2xDb250YWluZXI+XHJcbiAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51KHByb3BzKX0gcGxhY2VtZW50PVwiYm90dG9tQ2VudGVyXCI+XHJcbiAgICAgICAgPEJ1dHRvbj57cHJvcHMubnVtYmVyT2ZQYWlyc30gcGFpcnM8L0J1dHRvbj5cclxuICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgPHA+WW91IGZvdW5kIDAgb3V0IG9mIDggcGFpcnMgd2l0aCAxIHRyeS48L3A+XHJcbiAgICA8L0NvbnRyb2xDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGNoYW5nZU51bWJlck9mUGFpcnM6IChudW1iZXIpID0+IGRpc3BhdGNoKGNoYW5nZU51bWJlck9mUGFpcnMobnVtYmVyKSksXHJcbiAgY2hhbmdlV2lkdGg6ICh3aWR0aCkgPT4gZGlzcGF0Y2goY2hhbmdlV2lkdGgod2lkdGgpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb250cm9sKTtcclxuY29uc3QgQ29udHJvbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFN0YXR1cyA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==