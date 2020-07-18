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
  return (//   grid Item
    __jsx("gridContainer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }
    }, props.cards.map(function (el, index) {
      if (el.isActive) {
        return __jsx("div", {
          key: "div" + index,
          style: {
            margin: "0 1px",
            display: "inline-block",
            height: "125px",
            width: "125px",
            backgroundColor: "#bbb"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }
        }));
      } else {
        return __jsx("div", {
          key: "div" + index,
          style: {
            margin: "0 1px",
            display: "inline-block",
            height: "125px",
            width: "125px",
            backgroundColor: "#bbb"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }
        }, __jsx("img", {
          onClick: function onClick() {
            return props.flipCard(index);
          },
          style: {
            display: "none"
          },
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }
        }));
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
    gameState: state.gameState
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwiZmxpcENhcmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImdhbWVTdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiRkxJUF9BTExfQ0FSRFMiLCJjb25uZWN0IiwiZ3JpZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxTQUFLLENBQUNFLFVBQU47QUFDQUYsU0FBSyxDQUFDRyxZQUFOO0FBQ0FILFNBQUssQ0FBQ0ksVUFBTjtBQUNBSixTQUFLLENBQUNLLGNBQU47QUFDQUwsU0FBSyxDQUFDRyxZQUFOO0FBRUFHLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZOLFdBQUssQ0FBQ08sWUFBTjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQVZRLEVBVU4sQ0FBQ1AsS0FBSyxDQUFDUSxhQUFQLENBVk0sQ0FBVDtBQVlBLFNBQ0U7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFTZW9CLDBIQUFPLENBQUNYLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDekIsSUFBN0MsQ0FBZixFLENBRUE7O0FBQ0EsSUFBTWtDLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpREFBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjYwYWNjMTNkYTZiOTQyYWY5NjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5saW1pdENhcmRzKCk7XHJcbiAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mUGFpcnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vICAgZ3JpZCBJdGVtXHJcbiAgICA8Z3JpZENvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDFweFwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYmJiXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtlbC5zcmMgKyBpbmRleH0gZGF0YS1pbmRleD17ZWwuaW5kZXh9IHNyYz17ZWwuc3JjfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgMXB4XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiYmJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZmxpcENhcmQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgIGtleT17ZWwuc3JjICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXtlbC5pbmRleH1cclxuICAgICAgICAgICAgICAgIHNyYz17ZWwuc3JjfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9ncmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICBnYW1lU3RhdGU6IHN0YXRlLmdhbWVTdGF0ZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNIVUZGTEUgfSksXHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMSU1JVF9DQVJEUyB9KSxcclxuICBkdXBsaWNhdGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMgfSksXHJcbiAgcmVzZXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9DQVJEUyB9KSxcclxuICBmbGlwQWxsQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRkxJUF9BTExfQ0FSRFMgfSksXHJcbiAgZmxpcENhcmQ6IChpbmRleCkgPT4gZGlzcGF0Y2goZmxpcENhcmQoaW5kZXgpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBncmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9