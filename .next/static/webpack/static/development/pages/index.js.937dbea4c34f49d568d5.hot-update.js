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
        lineNumber: 45,
        columnNumber: 5
      }
    }, props.cards.map(function (el, index) {
      // matching  and isActive
      // matching and notActive
      if (el.isActive) {
        return __jsx(ImageWrapper, {
          color: "#bbb",
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }
        }));
      } else if (!el.isActive && el.match) {
        return __jsx(ImageWrapper, {
          color: "transparent",
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }
        });
      } // if (el.match && !props.matching) {
      //   return (
      //     <ImageWrapper
      //       color="transparent"
      //       width={props.width}
      //       key={"div" + index}
      //     />
      //   );
      // }
      // if (el.isActive && props.matching) {
      //   return (
      //     <ImageWrapper color="#bbb" width={props.width} key={"div" + index}>
      //       <img key={el.src + index} data-index={el.index} src={el.src} />
      //     </ImageWrapper>
      //   );
      // } else {
      //   return (
      //     <ImageWrapper
      //       color="#bbb"
      //       width={props.width}
      //       key={"div" + index}
      //       onClick={() => {
      //         if (props.numberOfAttempts === 0) {
      //           props.startGame();
      //         }
      //         if (!props.matching) {
      //           props.flipCard(el.index);
      //         }
      //       }}
      //     />
      //   );
      // }

    }))
  );
}

_s(Grid, "ewq31d5h+FnD/qJW52w5UqeNMN4=");

_c = Grid;

var mapStateToProps = function mapStateToProps(state) {
  var _ref;

  return _ref = {
    numberOfPairs: state.numberOfPairs,
    numberOfAttempts: state.numberOfAttempts,
    numberOfFoundPairs: state.numberOfFoundPairs,
    cards: state.cards,
    clickCounter: state.clickCounter,
    matching: state.matching,
    width: state.width
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "matching", state.matching), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "isPlaying", state.isPlaying), _ref;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsIm1hdGNoaW5nIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwiYWxlcnQiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJpc0FjdGl2ZSIsIndpZHRoIiwic3JjIiwibWF0Y2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm51bWJlck9mQXR0ZW1wdHMiLCJjbGlja0NvdW50ZXIiLCJpc1BsYXlpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiLCJTSFVGRkxFIiwiTElNSVRfQ0FSRFMiLCJEVVBMSUNBVEVfQ0FSRFMiLCJSRVNFVF9DQVJEUyIsIkZMSVBfQUxMX0NBUkRTIiwiZmxpcENhcmQiLCJzdGFydEdhbWUiLCJTVEFSVF9HQU1FIiwiY29ubmVjdCIsIkdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZVdyYXBwZXIiLCJjb2xvciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxTQUFLLENBQUNFLFVBQU47QUFDQUYsU0FBSyxDQUFDRyxZQUFOO0FBQ0FILFNBQUssQ0FBQ0ksVUFBTjtBQUNBSixTQUFLLENBQUNLLGNBQU47QUFDQUwsU0FBSyxDQUFDRyxZQUFOO0FBRUFHLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZOLFdBQUssQ0FBQ08sWUFBTjtBQUNELEtBRlMsRUFFUCxJQUZP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SSxVQUFDakIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ3lDLEtBQWpCO0FBQUEsQ0FOSixFQVlMLFVBQUN6QyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDaUIsS0FBTixHQUFjLElBQXpCO0FBQUEsQ0FaSyxFQWFKLFVBQUNqQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDaUIsS0FBTixHQUFjLElBQXpCO0FBQUEsQ0FiSSxDQUFsQjtNQUFNdUIsWTtBQWtCTkEsWUFBWSxDQUFDRSxZQUFiLEdBQTRCO0FBQzFCekIsT0FBSyxFQUFFO0FBRG1CLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45MzdkYmVhNGMzNGY0OWQ1NjhkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgU0hVRkZMRSxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIFNUQVJUX0dBTUUsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5saW1pdENhcmRzKCk7XHJcbiAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mUGFpcnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm1hdGNoaW5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMubnVtYmVyT2ZGb3VuZFBhaXJzID09PSBwcm9wcy5udW1iZXJPZlBhaXJzKSB7XHJcbiAgICAgIGFsZXJ0KFwiWU9VIFdJTiBcIik7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mRm91bmRQYWlyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyBtYXRjaGluZyAgYW5kIGlzQWN0aXZlXHJcbiAgICAgICAgLy8gbWF0Y2hpbmcgYW5kIG5vdEFjdGl2ZVxyXG4gICAgICAgIGlmIChlbC5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciBjb2xvcj1cIiNiYmJcIiB3aWR0aD17cHJvcHMud2lkdGh9IGtleT17XCJkaXZcIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWVsLmlzQWN0aXZlICYmIGVsLm1hdGNoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgICAgICAgIGtleT17XCJkaXZcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIChlbC5tYXRjaCAmJiAhcHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAvLyAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAvLyAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAvLyAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgLy8gICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgLy8gICAgIC8+XHJcbiAgICAgICAgLy8gICApO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGVsLmlzQWN0aXZlICYmIHByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgICAgLy8gICByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICA8SW1hZ2VXcmFwcGVyIGNvbG9yPVwiI2JiYlwiIHdpZHRoPXtwcm9wcy53aWR0aH0ga2V5PXtcImRpdlwiICsgaW5kZXh9PlxyXG4gICAgICAgIC8vICAgICAgIDxpbWcga2V5PXtlbC5zcmMgKyBpbmRleH0gZGF0YS1pbmRleD17ZWwuaW5kZXh9IHNyYz17ZWwuc3JjfSAvPlxyXG4gICAgICAgIC8vICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAvLyAgICk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAvLyAgICAgICBjb2xvcj1cIiNiYmJcIlxyXG4gICAgICAgIC8vICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAvLyAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAvLyAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAocHJvcHMubnVtYmVyT2ZBdHRlbXB0cyA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICBwcm9wcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGlmICghcHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgcHJvcHMuZmxpcENhcmQoZWwuaW5kZXgpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgIH19XHJcbiAgICAgICAgLy8gICAgIC8+XHJcbiAgICAgICAgLy8gICApO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgbnVtYmVyT2ZBdHRlbXB0czogc3RhdGUubnVtYmVyT2ZBdHRlbXB0cyxcclxuICBudW1iZXJPZkZvdW5kUGFpcnM6IHN0YXRlLm51bWJlck9mRm91bmRQYWlycyxcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgY2xpY2tDb3VudGVyOiBzdGF0ZS5jbGlja0NvdW50ZXIsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG4gIHdpZHRoOiBzdGF0ZS53aWR0aCxcclxuICBtYXRjaGluZzogc3RhdGUubWF0Y2hpbmcsXHJcbiAgaXNQbGF5aW5nOiBzdGF0ZS5pc1BsYXlpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTSFVGRkxFIH0pLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRFVQTElDQVRFX0NBUkRTIH0pLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfQ0FSRFMgfSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZMSVBfQUxMX0NBUkRTIH0pLFxyXG4gIGZsaXBDYXJkOiAoaW5kZXgpID0+IGRpc3BhdGNoKGZsaXBDYXJkKGluZGV4KSksXHJcbiAgc3RhcnRHYW1lOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNUQVJUX0dBTUUgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JpZCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcclxuXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIGltZyxcclxuICAuYmxhbmsge1xyXG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuSW1hZ2VXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogMTI1LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9