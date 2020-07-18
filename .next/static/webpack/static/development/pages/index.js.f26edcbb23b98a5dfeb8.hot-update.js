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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Control.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var menu = function menu(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(127);
      props.changeNumberOfPairs(6);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "6 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(127);
      props.changeNumberOfPairs(8);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "8 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(102);
      props.changeNumberOfPairs(10);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "10 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(12);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "12 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(15);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "15 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(18);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "18 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      props.changeWidth(73.42);
      props.changeNumberOfPairs(21);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "21 pairs"));
};

function gameStatus(props) {
  var tryString = props.numberOfAttempts === 1 ? "try" : "tries";

  if (props.numberOfAttempts > 0) {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, "You found ", props.numberOfFoundPairs, " out of ", props.numberOfPairs, " pairs with", props.numberOfAttempts, " ", tryString, ".");
  } else {
    return __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 12
      }
    }, "find All pairs !");
  }
}

function Control(props) {
  return __jsx(ControlContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, props.numberOfPairs, " pairs")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      props.resetGame();
      props.resetCards();
      props.shuffleCards();
      props.limitCards();
      props.duplicateCards();
      props.shuffleCards();
      setTimeout(function () {
        props.flipAllCards();
      }, 1500);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "Restart Game"), gameStatus(props));
}

_c = Control;

var mapStateToProps = function mapStateToProps(state) {
  return {
    numberOfPairs: state.numberOfPairs,
    numberOfFoundPairs: state.numberOfFoundPairs,
    numberOfAttempts: state.numberOfAttempts
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeNumberOfPairs: function changeNumberOfPairs(number) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeNumberOfPairs"])(number));
    },
    changeWidth: function changeWidth(width) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeWidth"])(width));
    },
    resetGame: function resetGame() {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["resetGame"])());
    },
    resetCards: function resetCards() {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["resetCards"])());
    },
    shuffleCards: function shuffleCards() {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["shuffleCards"])());
    },
    duplicateCards: function duplicateCards() {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["duplicateCards"])());
    },
    limitCards: function limitCards() {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["limitCards"])());
    },
    flipAllCards: function (_flipAllCards) {
      function flipAllCards() {
        return _flipAllCards.apply(this, arguments);
      }

      flipAllCards.toString = function () {
        return _flipAllCards.toString();
      };

      return flipAllCards;
    }(function () {
      return dispatch(flipAllCards());
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Control));
var ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Control__ControlContainer",
  componentId: "c4l1my-0"
})(["position:relative;top:25%;transform:translateY(-25%);"]);
_c2 = ControlContainer;
var StyledStatus = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "Control__StyledStatus",
  componentId: "c4l1my-1"
})(["display:inline-block;margin:10px auto;padding:0 1rem;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRyb2wuanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJwcm9wcyIsImNoYW5nZVdpZHRoIiwiY2hhbmdlTnVtYmVyT2ZQYWlycyIsImdhbWVTdGF0dXMiLCJ0cnlTdHJpbmciLCJudW1iZXJPZkF0dGVtcHRzIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwibnVtYmVyT2ZQYWlycyIsIkNvbnRyb2wiLCJyZXNldEdhbWUiLCJyZXNldENhcmRzIiwic2h1ZmZsZUNhcmRzIiwibGltaXRDYXJkcyIsImR1cGxpY2F0ZUNhcmRzIiwic2V0VGltZW91dCIsImZsaXBBbGxDYXJkcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJudW1iZXIiLCJ3aWR0aCIsImNvbm5lY3QiLCJDb250cm9sQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkU3RhdHVzIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsU0FDRSxNQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNiQSxXQUFLLENBQUNDLFdBQU4sQ0FBa0IsR0FBbEI7QUFDQUQsV0FBSyxDQUFDRSxtQkFBTixDQUEwQixDQUExQjtBQUNELEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBU0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYkYsV0FBSyxDQUFDQyxXQUFOLENBQWtCLEdBQWxCO0FBQ0FELFdBQUssQ0FBQ0UsbUJBQU4sQ0FBMEIsQ0FBMUI7QUFD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O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsTUFBRTtBQUFBLGFBQU1JLFFBQVEsQ0FBQ0osWUFBWSxFQUFiLENBQWQ7QUFBQSxLQUFGO0FBUjRCLEdBQWY7QUFBQSxDQUEzQjs7QUFXZU8sMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNWLE9BQTdDLENBQWY7QUFDQSxJQUFNZSxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2REFBdEI7TUFBTUYsZ0I7QUFNTixJQUFNRyxZQUFZLEdBQUdGLHlEQUFNLENBQUNHLENBQVY7QUFBQTtBQUFBO0FBQUEsNkRBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mMjZlZGNiYjIzYjk4YTVkZmViOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgY2hhbmdlTnVtYmVyT2ZQYWlycyxcclxuICBjaGFuZ2VXaWR0aCxcclxuICByZXNldEdhbWUsXHJcbiAgcmVzZXRDYXJkcyxcclxuICBzaHVmZmxlQ2FyZHMsXHJcbiAgbGltaXRDYXJkcyxcclxuICBkdXBsaWNhdGVDYXJkcyxcclxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBNZW51LCBCdXR0b24sIERyb3Bkb3duIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IG1lbnUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCgxMjcpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycyg2KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgNiBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDEyNyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA4IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoMTAyKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxMCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTIpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxMiBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxNSBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxOCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDczLjQyKTtcclxuXHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDIxKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMjEgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdhbWVTdGF0dXMocHJvcHMpIHtcclxuICBjb25zdCB0cnlTdHJpbmcgPSBwcm9wcy5udW1iZXJPZkF0dGVtcHRzID09PSAxID8gXCJ0cnlcIiA6IFwidHJpZXNcIjtcclxuICBpZiAocHJvcHMubnVtYmVyT2ZBdHRlbXB0cyA+IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFlvdSBmb3VuZCB7cHJvcHMubnVtYmVyT2ZGb3VuZFBhaXJzfSBvdXQgb2Yge3Byb3BzLm51bWJlck9mUGFpcnN9IHBhaXJzXHJcbiAgICAgICAgd2l0aFxyXG4gICAgICAgIHtwcm9wcy5udW1iZXJPZkF0dGVtcHRzfSB7dHJ5U3RyaW5nfS5cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxwPmZpbmQgQWxsIHBhaXJzICE8L3A+O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udHJvbENvbnRhaW5lcj5cclxuICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnUocHJvcHMpfSBwbGFjZW1lbnQ9XCJib3R0b21DZW50ZXJcIj5cclxuICAgICAgICA8QnV0dG9uPntwcm9wcy5udW1iZXJPZlBhaXJzfSBwYWlyczwvQnV0dG9uPlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMucmVzZXRHYW1lKCk7XHJcbiAgICAgICAgICBwcm9wcy5yZXNldENhcmRzKCk7XHJcbiAgICAgICAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICAgICAgICAgIHByb3BzLmxpbWl0Q2FyZHMoKTtcclxuICAgICAgICAgIHByb3BzLmR1cGxpY2F0ZUNhcmRzKCk7XHJcbiAgICAgICAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgUmVzdGFydCBHYW1lXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICB7Z2FtZVN0YXR1cyhwcm9wcyl9XHJcbiAgICA8L0NvbnRyb2xDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgbnVtYmVyT2ZGb3VuZFBhaXJzOiBzdGF0ZS5udW1iZXJPZkZvdW5kUGFpcnMsXHJcbiAgbnVtYmVyT2ZBdHRlbXB0czogc3RhdGUubnVtYmVyT2ZBdHRlbXB0cyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgY2hhbmdlTnVtYmVyT2ZQYWlyczogKG51bWJlcikgPT4gZGlzcGF0Y2goY2hhbmdlTnVtYmVyT2ZQYWlycyhudW1iZXIpKSxcclxuICBjaGFuZ2VXaWR0aDogKHdpZHRoKSA9PiBkaXNwYXRjaChjaGFuZ2VXaWR0aCh3aWR0aCkpLFxyXG4gIHJlc2V0R2FtZTogKCkgPT4gZGlzcGF0Y2gocmVzZXRHYW1lKCkpLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHJlc2V0Q2FyZHMoKSksXHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaChzaHVmZmxlQ2FyZHMoKSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKGR1cGxpY2F0ZUNhcmRzKCkpLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKGxpbWl0Q2FyZHMoKSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaChmbGlwQWxsQ2FyZHMoKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29udHJvbCk7XHJcbmNvbnN0IENvbnRyb2xDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1JSk7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTdGF0dXMgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9