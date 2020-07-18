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
      if (el.match && !el.timed) {
        return __jsx(ImageWrapper, {
          color: "transparent",
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }
        });
      } else if (el.isActive) {
        return __jsx(ImageWrapper, {
          color: "#bbb",
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
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
            lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsIm1hdGNoaW5nIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwiYWxlcnQiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJtYXRjaCIsInRpbWVkIiwid2lkdGgiLCJpc0FjdGl2ZSIsInNyYyIsIm51bWJlck9mQXR0ZW1wdHMiLCJzdGFydEdhbWUiLCJmbGlwQ2FyZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpY2tDb3VudGVyIiwiaXNQbGF5aW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJGTElQX0FMTF9DQVJEUyIsIlNUQVJUX0dBTUUiLCJjb25uZWN0IiwiR3JpZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkltYWdlV3JhcHBlciIsImNvbG9yIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFNBQUssQ0FBQ0UsVUFBTjtBQUNBRixTQUFLLENBQUNHLFlBQU47QUFDQUgsU0FBSyxDQUFDSSxVQUFOO0FBQ0FKLFNBQUssQ0FBQ0ssY0FBTjtBQUNBTCxTQUFLLENBQUNHLFlBQU47QUFFQUcsY0FBVSxDQUFDLFlBQU07QUFDZk4sV0FBSyxDQUFDTyxZQUFOO0FBQ0QsS0FGUyxF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QUFsQixPQUFELENBQWQ7QUFBQTtBQVA2QixHQUFmO0FBQUEsQ0FBM0I7O0FBVWVDLDBIQUFPLENBQUNiLGVBQUQsRUFBa0JJLGtCQUFsQixDQUFQLENBQTZDN0IsSUFBN0MsQ0FBZixFLENBRUE7O0FBQ0EsSUFBTXVDLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnRkFBbkI7TUFBTUYsYTtBQVFOLElBQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3S0FJUCxVQUFDeEMsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2tCLEtBQU4sR0FBYyxJQUF6QjtBQUFBLENBSk8sRUFLTixVQUFDbEIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2tCLEtBQU4sR0FBYyxJQUF6QjtBQUFBLENBTE0sRUFNSSxVQUFDbEIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQzBDLEtBQWpCO0FBQUEsQ0FOSixFQVlMLFVBQUMxQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDa0IsS0FBTixHQUFjLElBQXpCO0FBQUEsQ0FaSyxFQWFKLFVBQUNsQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDa0IsS0FBTixHQUFjLElBQXpCO0FBQUEsQ0FiSSxDQUFsQjtNQUFNdUIsWTtBQWtCTkEsWUFBWSxDQUFDRSxZQUFiLEdBQTRCO0FBQzFCekIsT0FBSyxFQUFFO0FBRG1CLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wMDg4YzBhYzFiOTlhOGZhMDM0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgU0hVRkZMRSxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIFNUQVJUX0dBTUUsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IGZsaXBDYXJkIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5saW1pdENhcmRzKCk7XHJcbiAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgcHJvcHMuc2h1ZmZsZUNhcmRzKCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mUGFpcnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm1hdGNoaW5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMubnVtYmVyT2ZGb3VuZFBhaXJzID09PSBwcm9wcy5udW1iZXJPZlBhaXJzKSB7XHJcbiAgICAgIGFsZXJ0KFwiWU9VIFdJTiBcIik7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm51bWJlck9mRm91bmRQYWlyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gICBncmlkIEl0ZW1cclxuICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICB7cHJvcHMuY2FyZHMubWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyBtYXRjaGluZyAgYW5kIGlzQWN0aXZlXHJcbiAgICAgICAgLy8gbWF0Y2hpbmcgYW5kIG5vdEFjdGl2ZVxyXG4gICAgICAgIGlmIChlbC5tYXRjaCAmJiAhZWwudGltZWQpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWwuaXNBY3RpdmUpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVdyYXBwZXIgY29sb3I9XCIjYmJiXCIgd2lkdGg9e3Byb3BzLndpZHRofSBrZXk9e1wiZGl2XCIgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2VsLnNyYyArIGluZGV4fSBkYXRhLWluZGV4PXtlbC5pbmRleH0gc3JjPXtlbC5zcmN9IC8+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlclxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2JiYlwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgICAgICAgIGtleT17XCJkaXZcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5udW1iZXJPZkF0dGVtcHRzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5mbGlwQ2FyZChlbC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAoZWwubWF0Y2ggJiYgIXByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgICAgLy8gICByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgLy8gICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgLy8gICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgIC8vICAgICAgIGtleT17XCJkaXZcIiArIGluZGV4fVxyXG4gICAgICAgIC8vICAgICAvPlxyXG4gICAgICAgIC8vICAgKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmIChlbC5pc0FjdGl2ZSAmJiBwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICAgIC8vICAgcmV0dXJuIChcclxuICAgICAgICAvLyAgICAgPEltYWdlV3JhcHBlciBjb2xvcj1cIiNiYmJcIiB3aWR0aD17cHJvcHMud2lkdGh9IGtleT17XCJkaXZcIiArIGluZGV4fT5cclxuICAgICAgICAvLyAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAvLyAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgLy8gICApO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgLy8gICAgICAgY29sb3I9XCIjYmJiXCJcclxuICAgICAgICAvLyAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgLy8gICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgLy8gICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHByb3BzLm51bWJlck9mQXR0ZW1wdHMgPT09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgcHJvcHMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoIXByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgIHByb3BzLmZsaXBDYXJkKGVsLmluZGV4KTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICB9fVxyXG4gICAgICAgIC8vICAgICAvPlxyXG4gICAgICAgIC8vICAgKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IHN0YXRlLm51bWJlck9mQXR0ZW1wdHMsXHJcbiAgbnVtYmVyT2ZGb3VuZFBhaXJzOiBzdGF0ZS5udW1iZXJPZkZvdW5kUGFpcnMsXHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIGNsaWNrQ291bnRlcjogc3RhdGUuY2xpY2tDb3VudGVyLFxyXG4gIG1hdGNoaW5nOiBzdGF0ZS5tYXRjaGluZyxcclxuICB3aWR0aDogc3RhdGUud2lkdGgsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG4gIGlzUGxheWluZzogc3RhdGUuaXNQbGF5aW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzaHVmZmxlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogU0hVRkZMRSB9KSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IERVUExJQ0FURV9DQVJEUyB9KSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUX0NBUkRTIH0pLFxyXG4gIGZsaXBBbGxDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGTElQX0FMTF9DQVJEUyB9KSxcclxuICBmbGlwQ2FyZDogKGluZGV4KSA9PiBkaXNwYXRjaChmbGlwQ2FyZChpbmRleCkpLFxyXG4gIHN0YXJ0R2FtZTogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTVEFSVF9HQU1FIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyaWQpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MjBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XHJcblxyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICBpbWcsXHJcbiAgLmJsYW5rIHtcclxuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gICAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbkltYWdlV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6IDEyNSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==