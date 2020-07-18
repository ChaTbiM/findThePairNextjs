webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Grid.jsx":
/*!*****************************!*\
  !*** ./components/Grid.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/constants/action-types */ "./redux/constants/action-types.js");
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");


var _jsxFileName = "C:\\Users\\chatb\\Desktop\\Code\\nextJS\\find-the-pair\\components\\Grid.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Grid(props) {
  _s();

  var _this = this;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();
    setTimeout(function () {
      props.flipAllCards();
    }, 1500);
  }, [props.numberOfPairs]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("here", props.matching);

    if (props.matching) {
      setTimeout(function () {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (props.numberOfFoundPairs === props.numberOfPairs) {
      alert("YOU WIN ");
    }
  }, [props.numberOfFoundPairs]);
  return (//   grid Item
    __jsx(GridContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }
    }, props.cards.map(function (el, index) {
      if (el.match) {
        return __jsx(ImageWrapper, {
          color: "transparent",
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }
        });
      }

      if (el.isActive) {
        return __jsx(ImageWrapper, {
          color: "#bbb",
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }
        }));
      } else {
        return __jsx(ImageWrapper, {
          color: "#bbb",
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
            lineNumber: 66,
            columnNumber: 13
          }
        });
      }
    }))
  );
}

_s(Grid, "ewq31d5h+FnD/qJW52w5UqeNMN4=");

_c = Grid;

var mapStateToProps = function mapStateToProps(state) {
  return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    numberOfPairs: state.numberOfPairs,
    numberOfAttempts: state.numberOfAttempts,
    numberOfFoundPairs: state.numberOfFoundPairs,
    cards: state.cards,
    clickCounter: state.clickCounter,
    matching: state.matching,
    width: state.width
  }, "matching", state.matching);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    shuffleCards: function shuffleCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_4__["SHUFFLE"]
      });
    },
    limitCards: function limitCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_4__["LIMIT_CARDS"]
      });
    },
    duplicateCards: function duplicateCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_4__["DUPLICATE_CARDS"]
      });
    },
    resetCards: function resetCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_4__["RESET_CARDS"]
      });
    },
    flipAllCards: function flipAllCards() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_4__["FLIP_ALL_CARDS"]
      });
    },
    flipCard: function flipCard(index) {
      return dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["flipCard"])(index));
    },
    startGame: function startGame() {
      return dispatch({
        type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_4__["START_GAME"]
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Grid)); // ---------------------------------

var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Grid__GridContainer",
  componentId: "v3z7jl-0"
})(["width:520px;height:100vh;margin:0 auto;text-align:center;padding-top:5%;"]);
_c2 = GridContainer;
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Grid__ImageWrapper",
  componentId: "v3z7jl-1"
})(["display:inline-block;margin-right:1px;margin-top:2px;width:", ";height:", ";background-color:", ";overflow:auto;img,.blank{width:", ";height:", ";padding:1px;}"], function (props) {
  return props.width + "px";
}, function (props) {
  return props.width + "px";
}, function (props) {
  return props.color;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaGluZyIsIm51bWJlck9mRm91bmRQYWlycyIsImFsZXJ0IiwiY2FyZHMiLCJtYXAiLCJlbCIsImluZGV4IiwibWF0Y2giLCJ3aWR0aCIsImlzQWN0aXZlIiwic3JjIiwibnVtYmVyT2ZBdHRlbXB0cyIsInN0YXJ0R2FtZSIsImZsaXBDYXJkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjbGlja0NvdW50ZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiLCJTSFVGRkxFIiwiTElNSVRfQ0FSRFMiLCJEVVBMSUNBVEVfQ0FSRFMiLCJSRVNFVF9DQVJEUyIsIkZMSVBfQUxMX0NBUkRTIiwiU1RBUlRfR0FNRSIsImNvbm5lY3QiLCJHcmlkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSW1hZ2VXcmFwcGVyIiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsU0FBSyxDQUFDRSxVQUFOO0FBQ0FGLFNBQUssQ0FBQ0csWUFBTjtBQUNBSCxTQUFLLENBQUNJLFVBQU47QUFDQUosU0FBSyxDQUFDSyxjQUFOO0FBQ0FMLFNBQUssQ0FBQ0csWUFBTjtBQUVBRyxjQUFVLENBQUMsWUFBTTtBQUNmTixXQUFLLENBQUNPLFlBQU47QUFDRCxLQUZTLEVBRVAs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WUFBWSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdLQUlQLFVBQUN4QyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDbUIsS0FBTixHQUFjLElBQXpCO0FBQUEsQ0FKTyxFQUtOLFVBQUNuQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDbUIsS0FBTixHQUFjLElBQXpCO0FBQUEsQ0FMTSxFQU1JLFVBQUNuQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDMEMsS0FBakI7QUFBQSxDQU5KLEVBWUwsVUFBQzFDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNtQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQVpLLEVBYUosVUFBQ25CLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNtQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQWJJLENBQWxCO01BQU1zQixZO0FBa0JOQSxZQUFZLENBQUNFLFlBQWIsR0FBNEI7QUFDMUJ4QixPQUFLLEVBQUU7QUFEbUIsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmE2YmMzN2I0YzBkYmY1YWRkM2E5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbiAgU1RBUlRfR0FNRSxcclxufSBmcm9tIFwiLi4vcmVkdXgvY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5yZXNldENhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICAgIHByb3BzLmxpbWl0Q2FyZHMoKTtcclxuICAgIHByb3BzLmR1cGxpY2F0ZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCBbcHJvcHMubnVtYmVyT2ZQYWlyc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIsIHByb3BzLm1hdGNoaW5nKTtcclxuICAgIGlmIChwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm1hdGNoaW5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMubnVtYmVyT2ZGb3VuZFBhaXJzID09PSBwcm9wcy5udW1iZXJPZlBhaXJzKSB7XHJcbiAgICAgIGFsZXJ0KFwiWU9VIFdJTiBcIik7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mRm91bmRQYWlyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWwubWF0Y2gpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyIGNvbG9yPVwiI2JiYlwiIHdpZHRoPXtwcm9wcy53aWR0aH0ga2V5PXtcImRpdlwiICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtlbC5zcmMgKyBpbmRleH0gZGF0YS1pbmRleD17ZWwuaW5kZXh9IHNyYz17ZWwuc3JjfSAvPlxyXG4gICAgICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAgICAgICBjb2xvcj1cIiNiYmJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubnVtYmVyT2ZBdHRlbXB0cyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghcHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcHJvcHMuZmxpcENhcmQoZWwuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgbnVtYmVyT2ZBdHRlbXB0czogc3RhdGUubnVtYmVyT2ZBdHRlbXB0cyxcclxuICBudW1iZXJPZkZvdW5kUGFpcnM6IHN0YXRlLm51bWJlck9mRm91bmRQYWlycyxcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgY2xpY2tDb3VudGVyOiBzdGF0ZS5jbGlja0NvdW50ZXIsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG4gIHdpZHRoOiBzdGF0ZS53aWR0aCxcclxuICBtYXRjaGluZzogc3RhdGUubWF0Y2hpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTSFVGRkxFIH0pLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRFVQTElDQVRFX0NBUkRTIH0pLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfQ0FSRFMgfSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZMSVBfQUxMX0NBUkRTIH0pLFxyXG4gIGZsaXBDYXJkOiAoaW5kZXgpID0+IGRpc3BhdGNoKGZsaXBDYXJkKGluZGV4KSksXHJcbiAgc3RhcnRHYW1lOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNUQVJUX0dBTUUgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JpZCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcclxuXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIGltZyxcclxuICAuYmxhbmsge1xyXG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuSW1hZ2VXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogMTI1LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9