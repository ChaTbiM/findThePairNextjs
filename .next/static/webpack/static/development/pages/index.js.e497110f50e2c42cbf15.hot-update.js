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
      lineNumber: 18,
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
      lineNumber: 19,
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
      lineNumber: 27,
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
      lineNumber: 35,
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
      lineNumber: 43,
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
      lineNumber: 51,
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
      lineNumber: 59,
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
      lineNumber: 67,
      columnNumber: 7
    }
  }, "21 pairs"));
};

function gameStatus(props) {
  var tryString = props.numberOfAttempts === 1 ? "try" : "tries";

  if (props.numberOfAttempts > 0) {
    return __jsx(StyledStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, "You found ", props.numberOfFoundPairs, " out of ", props.numberOfPairs, " pairs with", props.numberOfAttempts, " ", tryString, ".");
  } else {
    return __jsx(StyledStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
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
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, props.numberOfPairs, " pairs")), gameStatus(props), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      display: "block",
      margin: "5px auto"
    },
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
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Restart Game"));
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
    flipAllCards: function flipAllCards() {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["flipAllCards"])());
    }
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
})(["display:block;margin:10px auto;padding:0 1rem;"]);
_c3 = StyledStatus;

var _c, _c2, _c3;

$RefreshReg$(_c, "Control");
$RefreshReg$(_c2, "ControlContainer");
$RefreshReg$(_c3, "StyledStatus");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRyb2wuanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJwcm9wcyIsImNoYW5nZVdpZHRoIiwiY2hhbmdlTnVtYmVyT2ZQYWlycyIsImdhbWVTdGF0dXMiLCJ0cnlTdHJpbmciLCJudW1iZXJPZkF0dGVtcHRzIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwibnVtYmVyT2ZQYWlycyIsIkNvbnRyb2wiLCJkaXNwbGF5IiwibWFyZ2luIiwicmVzZXRHYW1lIiwicmVzZXRDYXJkcyIsInNodWZmbGVDYXJkcyIsImxpbWl0Q2FyZHMiLCJkdXBsaWNhdGVDYXJkcyIsInNldFRpbWVvdXQiLCJmbGlwQWxsQ2FyZHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibnVtYmVyIiwid2lkdGgiLCJjb25uZWN0IiwiQ29udHJvbENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFN0YXR1cyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCLFNBQ0UsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYkEsV0FBSyxDQUFDQyxXQUFOLENBQWtCLEdBQWxCO0FBQ0FELFdBQUssQ0FBQ0UsbUJBQU4sQ0FBMEIsQ0FBMUI7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JGLFdBQUssQ0FBQ0MsV0FBTixDQUFrQixHQUFsQjtBQUNBRCxXQUFLLENBQUNFLG1C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QUEsS0FOd0I7QUFPeENELGNBQVUsRUFBRTtBQUFBLGFBQU1PLFFBQVEsQ0FBQ1AsdUVBQVUsRUFBWCxDQUFkO0FBQUEsS0FQNEI7QUFReENHLGdCQUFZLEVBQUU7QUFBQSxhQUFNSSxRQUFRLENBQUNKLHlFQUFZLEVBQWIsQ0FBZDtBQUFBO0FBUjBCLEdBQWY7QUFBQSxDQUEzQjs7QUFXZU8sMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNaLE9BQTdDLENBQWY7QUFDQSxJQUFNaUIsZ0JBQWdCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkRBQXRCO01BQU1GLGdCO0FBTU4sSUFBTUcsWUFBWSxHQUFHRix5REFBTSxDQUFDRyxDQUFWO0FBQUE7QUFBQTtBQUFBLHNEQUFsQjtNQUFNRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lNDk3MTEwZjUwZTJjNDJjYmYxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgY2hhbmdlTnVtYmVyT2ZQYWlycyxcclxuICBjaGFuZ2VXaWR0aCxcclxuICByZXNldEdhbWUsXHJcbiAgcmVzZXRDYXJkcyxcclxuICBzaHVmZmxlQ2FyZHMsXHJcbiAgbGltaXRDYXJkcyxcclxuICBkdXBsaWNhdGVDYXJkcyxcclxuICBmbGlwQWxsQ2FyZHMsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgTWVudSwgQnV0dG9uLCBEcm9wZG93biB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBtZW51ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51PlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoMTI3KTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoNik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDYgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCgxMjcpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycyg4KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgOCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDEwMik7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDEwKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMTAgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCg4NS4zMyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDEyKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMTIgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCg4NS4zMyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDE1KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMTUgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCg4NS4zMyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDE4KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMTggcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCg3My40Mik7XHJcblxyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygyMSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDIxIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnYW1lU3RhdHVzKHByb3BzKSB7XHJcbiAgY29uc3QgdHJ5U3RyaW5nID0gcHJvcHMubnVtYmVyT2ZBdHRlbXB0cyA9PT0gMSA/IFwidHJ5XCIgOiBcInRyaWVzXCI7XHJcbiAgaWYgKHByb3BzLm51bWJlck9mQXR0ZW1wdHMgPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkU3RhdHVzPlxyXG4gICAgICAgIFlvdSBmb3VuZCB7cHJvcHMubnVtYmVyT2ZGb3VuZFBhaXJzfSBvdXQgb2Yge3Byb3BzLm51bWJlck9mUGFpcnN9IHBhaXJzXHJcbiAgICAgICAgd2l0aFxyXG4gICAgICAgIHtwcm9wcy5udW1iZXJPZkF0dGVtcHRzfSB7dHJ5U3RyaW5nfS5cclxuICAgICAgPC9TdHlsZWRTdGF0dXM+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPFN0eWxlZFN0YXR1cz5maW5kIEFsbCBwYWlycyAhPC9TdHlsZWRTdGF0dXM+O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udHJvbENvbnRhaW5lcj5cclxuICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnUocHJvcHMpfSBwbGFjZW1lbnQ9XCJib3R0b21DZW50ZXJcIj5cclxuICAgICAgICA8QnV0dG9uPntwcm9wcy5udW1iZXJPZlBhaXJzfSBwYWlyczwvQnV0dG9uPlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICB7Z2FtZVN0YXR1cyhwcm9wcyl9XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiNXB4IGF1dG9cIiB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLnJlc2V0R2FtZSgpO1xyXG4gICAgICAgICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgICAgICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICAgICAgICBwcm9wcy5saW1pdENhcmRzKCk7XHJcbiAgICAgICAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgICAgICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFJlc3RhcnQgR2FtZVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ29udHJvbENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxuICBudW1iZXJPZkZvdW5kUGFpcnM6IHN0YXRlLm51bWJlck9mRm91bmRQYWlycyxcclxuICBudW1iZXJPZkF0dGVtcHRzOiBzdGF0ZS5udW1iZXJPZkF0dGVtcHRzLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBjaGFuZ2VOdW1iZXJPZlBhaXJzOiAobnVtYmVyKSA9PiBkaXNwYXRjaChjaGFuZ2VOdW1iZXJPZlBhaXJzKG51bWJlcikpLFxyXG4gIGNoYW5nZVdpZHRoOiAod2lkdGgpID0+IGRpc3BhdGNoKGNoYW5nZVdpZHRoKHdpZHRoKSksXHJcbiAgcmVzZXRHYW1lOiAoKSA9PiBkaXNwYXRjaChyZXNldEdhbWUoKSksXHJcbiAgcmVzZXRDYXJkczogKCkgPT4gZGlzcGF0Y2gocmVzZXRDYXJkcygpKSxcclxuICBzaHVmZmxlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHNodWZmbGVDYXJkcygpKSxcclxuICBkdXBsaWNhdGVDYXJkczogKCkgPT4gZGlzcGF0Y2goZHVwbGljYXRlQ2FyZHMoKSksXHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2gobGltaXRDYXJkcygpKSxcclxuICBmbGlwQWxsQ2FyZHM6ICgpID0+IGRpc3BhdGNoKGZsaXBBbGxDYXJkcygpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb250cm9sKTtcclxuY29uc3QgQ29udHJvbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFN0YXR1cyA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==