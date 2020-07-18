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
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");
var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Grid.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Grid(props) {
  _s();

  var _this = this;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();
    setTimeout(function () {
      props.flipAllCards();
    }, 1500);
  }, [props.numberOfPairs]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("here", props.matching);

    if (props.matching) {
      setTimeout(function () {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);
  return (//   grid Item
    __jsx(GridContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }
    }, props.cards.map(function (el, index) {
      if (el.isActive && !el.match) {
        return __jsx(ImageWrapper, {
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }
        }));
      } else if (el.isActive && el.match) {
        __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
          }
        }, "hh");
      } else {
        return __jsx(ImageWrapper, {
          width: props.width,
          key: "div" + index,
          onClick: function onClick() {
            if (props.numberOfAttempts === 0) {
              props.startGame();
            }

            if (!props.matching) {
              props.flipCard(el.index);
            }
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }
        });
      }
    }))
  );
}

_s(Grid, "3ubReDTFssvu4DHeldAg55cW/CI=");

_c = Grid;

var mapStateToProps = function mapStateToProps(state) {
  return {
    numberOfPairs: state.numberOfPairs,
    cards: state.cards,
    clickCounter: state.clickCounter,
    matching: state.matching,
    width: state.width,
    numberOfAttempts: state.numberOfAttempts
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
    },
    flipAllCards: function flipAllCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FLIP_ALL_CARDS"]
      });
    },
    flipCard: function flipCard(index) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_4__["flipCard"])(index));
    },
    startGame: function startGame() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["START_GAME"]
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Grid)); // ---------------------------------

var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Grid__GridContainer",
  componentId: "v3z7jl-0"
})(["width:520px;height:100vh;margin:0 auto;text-align:center;padding-top:5%;"]);
_c2 = GridContainer;
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Grid__ImageWrapper",
  componentId: "v3z7jl-1"
})(["display:inline-block;margin-right:1px;margin-top:2px;width:", ";height:", ";background-color:#bbb;overflow:auto;img{width:", ";height:", ";padding:1px;}"], function (props) {
  return props.width + "px";
}, function (props) {
  return props.width + "px";
}, function (props) {
  return props.width + "px";
}, function (props) {
  return props.width + "px";
});
_c3 = ImageWrapper;
ImageWrapper.defaultProps = {
  width: 125
};

var _c, _c2, _c3;

$RefreshReg$(_c, "Grid");
$RefreshReg$(_c2, "GridContainer");
$RefreshReg$(_c3, "ImageWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaGluZyIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwibWF0Y2giLCJ3aWR0aCIsInNyYyIsIm51bWJlck9mQXR0ZW1wdHMiLCJzdGFydEdhbWUiLCJmbGlwQ2FyZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpY2tDb3VudGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJGTElQX0FMTF9DQVJEUyIsIlNUQVJUX0dBTUUiLCJjb25uZWN0IiwiR3JpZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkltYWdlV3JhcHBlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxTQUFLLENBQUNFLFVBQU47QUFDQUYsU0FBSyxDQUFDRyxZQUFOO0FBQ0FILFNBQUssQ0FBQ0ksVUFBTjtBQUNBSixTQUFLLENBQUNLLGNBQU47QUFDQUwsU0FBSyxDQUFDRyxZQUFOO0FBRUFHLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZOLFdBQUssQ0FBQ08sWUFBTjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQVZRLEVBVU4sQ0FBQ1AsS0FBSyxDQUFD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Q0FBQ0MsWUFBYixHQUE0QjtBQUMxQnRCLE9BQUssRUFBRTtBQURtQixDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZDY5YmZiMzVkZmM4YjYxNDdiM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIExJTUlUX0NBUkRTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxuICBTVEFSVF9HQU1FLFxyXG59IGZyb20gXCIuLi9yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIiwgcHJvcHMubWF0Y2hpbmcpO1xyXG4gICAgaWYgKHByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMubWF0Y2hpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vICAgZ3JpZCBJdGVtXHJcbiAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLmlzQWN0aXZlICYmICFlbC5tYXRjaCkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciB3aWR0aD17cHJvcHMud2lkdGh9IGtleT17XCJkaXZcIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWwuaXNBY3RpdmUgJiYgZWwubWF0Y2gpIHtcclxuICAgICAgICAgIDxwPmhoPC9wPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlclxyXG4gICAgICAgICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubnVtYmVyT2ZBdHRlbXB0cyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghcHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcHJvcHMuZmxpcENhcmQoZWwuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIGNsaWNrQ291bnRlcjogc3RhdGUuY2xpY2tDb3VudGVyLFxyXG4gIG1hdGNoaW5nOiBzdGF0ZS5tYXRjaGluZyxcclxuICB3aWR0aDogc3RhdGUud2lkdGgsXHJcbiAgbnVtYmVyT2ZBdHRlbXB0czogc3RhdGUubnVtYmVyT2ZBdHRlbXB0cyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNIVUZGTEUgfSksXHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMSU1JVF9DQVJEUyB9KSxcclxuICBkdXBsaWNhdGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMgfSksXHJcbiAgcmVzZXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9DQVJEUyB9KSxcclxuICBmbGlwQWxsQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRkxJUF9BTExfQ0FSRFMgfSksXHJcbiAgZmxpcENhcmQ6IChpbmRleCkgPT4gZGlzcGF0Y2goZmxpcENhcmQoaW5kZXgpKSxcclxuICBzdGFydEdhbWU6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogU1RBUlRfR0FNRSB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG5cclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gICAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbkltYWdlV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6IDEyNSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==