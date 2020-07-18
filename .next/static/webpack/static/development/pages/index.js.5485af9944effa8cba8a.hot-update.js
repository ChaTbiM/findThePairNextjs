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
    if (props.clickCounter == 0) {
      props.resetCards();
      props.shuffleCards();
      props.limitCards();
      props.duplicateCards();
      props.shuffleCards();
      setTimeout(function () {
        props.flipAllCards();
      }, 1500);
    }

    if (props.clickCounter > 1) {
      props.flipAllCards();
    }
  }, [props.numberOfPairs, props.clickCounter]);
  return (//   grid Item
    __jsx("gridContainer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }
    }, props.cards.map(function (el, index) {
      if (el.isActive) {
        return __jsx("div", {
          key: "div" + index,
          style: {
            margin: " 1px",
            "float": "left",
            display: "inline-block",
            height: "125px",
            width: "125px",
            backgroundColor: "#bbb"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }
        }));
      } else {
        return __jsx("div", {
          key: "div" + index,
          onClick: function onClick() {
            return props.flipCard(el.index);
          },
          style: {
            margin: " 1px",
            display: "inline-block",
            "float": "left",
            height: "125px",
            width: "125px",
            backgroundColor: "#bbb"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }
        });
      }
    }))
  );
}

_s(Grid, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Grid;

var mapStateToProps = function mapStateToProps(state) {
  return {
    numberOfPairs: state.numberOfPairs,
    cards: state.cards,
    gameState: state.gameState,
    clickCounter: state.clickCounter
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsImNsaWNrQ291bnRlciIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwiZmxpcENhcmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImdhbWVTdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiRkxJUF9BTExfQ0FSRFMiLCJjb25uZWN0IiwiZ3JpZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlELEtBQUssQ0FBQ0UsWUFBTixJQUFzQixDQUExQixFQUE2QjtBQUMzQkYsV0FBSyxDQUFDRyxVQUFOO0FBQ0FILFdBQUssQ0FBQ0ksWUFBTjtBQUNBSixXQUFLLENBQUNLLFVBQU47QUFDQUwsV0FBSyxDQUFDTSxjQUFOO0FBQ0FOLFdBQUssQ0FBQ0ksWUFBTjtBQUVBRyxnQkFBVSxDQUFDLFlBQU07QUFDZlAsYUFBSyxDQUFDUSxZQUFOO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEOztBQUVELFFBQUlSLEtBQUssQ0FBQ0UsWUFBTixH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QUNMLHFFQUFRLENBQUNSLEtBQUQsQ0FBVCxDQUFuQjtBQUFBO0FBTjhCLEdBQWY7QUFBQSxDQUEzQjs7QUFTZW9CLDBIQUFPLENBQUNYLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDMUIsSUFBN0MsQ0FBZixFLENBRUE7O0FBQ0EsSUFBTW1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpREFBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU0ODVhZjk5NDRlZmZhOGNiYThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLmNsaWNrQ291bnRlciA9PSAwKSB7XHJcbiAgICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICAgIHByb3BzLmxpbWl0Q2FyZHMoKTtcclxuICAgICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLmNsaWNrQ291bnRlciA+IDEpIHtcclxuICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mUGFpcnMsIHByb3BzLmNsaWNrQ291bnRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxncmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWwuaXNBY3RpdmUpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIiAxcHhcIixcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2JiYlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZmxpcENhcmQoZWwuaW5kZXgpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiIDFweFwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYmJiXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9ncmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICBnYW1lU3RhdGU6IHN0YXRlLmdhbWVTdGF0ZSxcclxuICBjbGlja0NvdW50ZXI6IHN0YXRlLmNsaWNrQ291bnRlcixcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNIVUZGTEUgfSksXHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMSU1JVF9DQVJEUyB9KSxcclxuICBkdXBsaWNhdGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMgfSksXHJcbiAgcmVzZXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9DQVJEUyB9KSxcclxuICBmbGlwQWxsQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRkxJUF9BTExfQ0FSRFMgfSksXHJcbiAgZmxpcENhcmQ6IChpbmRleCkgPT4gZGlzcGF0Y2goZmxpcENhcmQoaW5kZXgpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBncmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9