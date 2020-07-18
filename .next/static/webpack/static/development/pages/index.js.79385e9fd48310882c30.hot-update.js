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
      if (props.matching) {
        if (el.isActive) {
          return __jsx(ImageWrapper, {
            color: "#bbb",
            width: props.width,
            key: "div" + index,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }
          }, __jsx("img", {
            key: el.src + index,
            "data-index": el.index,
            src: el.src,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }
          }));
        } else {
          return __jsx(ImageWrapper, {
            color: "transparent",
            width: props.width,
            key: "div" + index,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }
          });
        }
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
            lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsIm1hdGNoaW5nIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwiYWxlcnQiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJpc0FjdGl2ZSIsIndpZHRoIiwic3JjIiwibnVtYmVyT2ZBdHRlbXB0cyIsInN0YXJ0R2FtZSIsImZsaXBDYXJkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjbGlja0NvdW50ZXIiLCJpc1BsYXlpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiLCJTSFVGRkxFIiwiTElNSVRfQ0FSRFMiLCJEVVBMSUNBVEVfQ0FSRFMiLCJSRVNFVF9DQVJEUyIsIkZMSVBfQUxMX0NBUkRTIiwiU1RBUlRfR0FNRSIsImNvbm5lY3QiLCJHcmlkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSW1hZ2VXcmFwcGVyIiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsU0FBSyxDQUFDRSxVQUFOO0FBQ0FGLFNBQUssQ0FBQ0csWUFBTjtBQUNBSCxTQUFLLENBQUNJLFVBQU47QUFDQUosU0FBSyxDQUFDSyxjQUFOO0FBQ0FMLFNBQUssQ0FBQ0csWUFBTjtBQUVBRyxjQUFVLENBQUMsWUFBTTtBQUNmTixXQUFLLENBQUNPLFlBQU47QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FB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OztBQVVlQywwSEFBTyxDQUFDYixlQUFELEVBQWtCSSxrQkFBbEIsQ0FBUCxDQUE2QzNCLElBQTdDLENBQWYsRSxDQUVBOztBQUNBLElBQU1xQyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0ZBQW5CO01BQU1GLGE7QUFRTixJQUFNRyxZQUFZLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0tBSVAsVUFBQ3RDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNpQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQUpPLEVBS04sVUFBQ2pCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNpQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQUxNLEVBTUksVUFBQ2pCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUN3QyxLQUFqQjtBQUFBLENBTkosRUFZTCxVQUFDeEMsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2lCLEtBQU4sR0FBYyxJQUF6QjtBQUFBLENBWkssRUFhSixVQUFDakIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2lCLEtBQU4sR0FBYyxJQUF6QjtBQUFBLENBYkksQ0FBbEI7TUFBTXNCLFk7QUFrQk5BLFlBQVksQ0FBQ0UsWUFBYixHQUE0QjtBQUMxQnhCLE9BQUssRUFBRTtBQURtQixDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzkzODVlOWZkNDgzMTA4ODJjMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIExJTUlUX0NBUkRTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxuICBTVEFSVF9HQU1FLFxyXG59IGZyb20gXCIuLi9yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5tYXRjaGluZ10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLm51bWJlck9mRm91bmRQYWlycyA9PT0gcHJvcHMubnVtYmVyT2ZQYWlycykge1xyXG4gICAgICBhbGVydChcIllPVSBXSU4gXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5udW1iZXJPZkZvdW5kUGFpcnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vICAgZ3JpZCBJdGVtXHJcbiAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gbWF0Y2hpbmcgIGFuZCBpc0FjdGl2ZVxyXG4gICAgICAgIC8vIG1hdGNoaW5nIGFuZCBub3RBY3RpdmVcclxuICAgICAgICBpZiAocHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAgIGlmIChlbC5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiI2JiYlwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEltYWdlV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjYmJiXCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm51bWJlck9mQXR0ZW1wdHMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgcHJvcHMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLmZsaXBDYXJkKGVsLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIChlbC5tYXRjaCAmJiAhcHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAvLyAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAvLyAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAvLyAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgLy8gICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgLy8gICAgIC8+XHJcbiAgICAgICAgLy8gICApO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGVsLmlzQWN0aXZlICYmIHByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgICAgLy8gICByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICA8SW1hZ2VXcmFwcGVyIGNvbG9yPVwiI2JiYlwiIHdpZHRoPXtwcm9wcy53aWR0aH0ga2V5PXtcImRpdlwiICsgaW5kZXh9PlxyXG4gICAgICAgIC8vICAgICAgIDxpbWcga2V5PXtlbC5zcmMgKyBpbmRleH0gZGF0YS1pbmRleD17ZWwuaW5kZXh9IHNyYz17ZWwuc3JjfSAvPlxyXG4gICAgICAgIC8vICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAvLyAgICk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAvLyAgICAgICBjb2xvcj1cIiNiYmJcIlxyXG4gICAgICAgIC8vICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAvLyAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAvLyAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAocHJvcHMubnVtYmVyT2ZBdHRlbXB0cyA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICBwcm9wcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGlmICghcHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgcHJvcHMuZmxpcENhcmQoZWwuaW5kZXgpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgIH19XHJcbiAgICAgICAgLy8gICAgIC8+XHJcbiAgICAgICAgLy8gICApO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgbnVtYmVyT2ZBdHRlbXB0czogc3RhdGUubnVtYmVyT2ZBdHRlbXB0cyxcclxuICBudW1iZXJPZkZvdW5kUGFpcnM6IHN0YXRlLm51bWJlck9mRm91bmRQYWlycyxcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgY2xpY2tDb3VudGVyOiBzdGF0ZS5jbGlja0NvdW50ZXIsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG4gIHdpZHRoOiBzdGF0ZS53aWR0aCxcclxuICBtYXRjaGluZzogc3RhdGUubWF0Y2hpbmcsXHJcbiAgaXNQbGF5aW5nOiBzdGF0ZS5pc1BsYXlpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTSFVGRkxFIH0pLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRFVQTElDQVRFX0NBUkRTIH0pLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfQ0FSRFMgfSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZMSVBfQUxMX0NBUkRTIH0pLFxyXG4gIGZsaXBDYXJkOiAoaW5kZXgpID0+IGRpc3BhdGNoKGZsaXBDYXJkKGluZGV4KSksXHJcbiAgc3RhcnRHYW1lOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNUQVJUX0dBTUUgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JpZCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcclxuXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIGltZyxcclxuICAuYmxhbmsge1xyXG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuSW1hZ2VXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogMTI1LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9