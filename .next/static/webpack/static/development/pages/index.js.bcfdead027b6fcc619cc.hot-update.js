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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsIm1hdGNoaW5nIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwiYWxlcnQiLCJjYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJpc0FjdGl2ZSIsIndpZHRoIiwic3JjIiwibWF0Y2giLCJudW1iZXJPZkF0dGVtcHRzIiwic3RhcnRHYW1lIiwiZmxpcENhcmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNsaWNrQ291bnRlciIsImlzUGxheWluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiRkxJUF9BTExfQ0FSRFMiLCJTVEFSVF9HQU1FIiwiY29ubmVjdCIsIkdyaWRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZVdyYXBwZXIiLCJjb2xvciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxTQUFLLENBQUNFLFVBQU47QUFDQUYsU0FBSyxDQUFDRyxZQUFOO0FBQ0FILFNBQUssQ0FBQ0ksVUFBTjtBQUNBSixTQUFLLENBQUNLLGNBQU47QUFDQUwsU0FBSyxDQUFDRyxZQUFOO0FBRUFHLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZOLFdBQUssQ0FBQ08sWUFBTjtBQUNELEtBRlMsRUFFUCxJQUZP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ZDtBQUFBO0FBUDZCLEdBQWY7QUFBQSxDQUEzQjs7QUFVZUMsMEhBQU8sQ0FBQ2IsZUFBRCxFQUFrQkksa0JBQWxCLENBQVAsQ0FBNkM1QixJQUE3QyxDQUFmLEUsQ0FFQTs7QUFDQSxJQUFNc0MsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdGQUFuQjtNQUFNRixhO0FBUU4sSUFBTUcsWUFBWSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdLQUlQLFVBQUN2QyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDaUIsS0FBTixHQUFjLElBQXpCO0FBQUEsQ0FKTyxFQUtOLFVBQUNqQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDaUIsS0FBTixHQUFjLElBQXpCO0FBQUEsQ0FMTSxFQU1JLFVBQUNqQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDeUMsS0FBakI7QUFBQSxDQU5KLEVBWUwsVUFBQ3pDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNpQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQVpLLEVBYUosVUFBQ2pCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNpQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQWJJLENBQWxCO01BQU11QixZO0FBa0JOQSxZQUFZLENBQUNFLFlBQWIsR0FBNEI7QUFDMUJ6QixPQUFLLEVBQUU7QUFEbUIsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmJjZmRlYWQwMjdiNmZjYzYxOWNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbiAgU1RBUlRfR0FNRSxcclxufSBmcm9tIFwiLi4vcmVkdXgvY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5yZXNldENhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICAgIHByb3BzLmxpbWl0Q2FyZHMoKTtcclxuICAgIHByb3BzLmR1cGxpY2F0ZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCBbcHJvcHMubnVtYmVyT2ZQYWlyc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMubWF0Y2hpbmddKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5udW1iZXJPZkZvdW5kUGFpcnMgPT09IHByb3BzLm51bWJlck9mUGFpcnMpIHtcclxuICAgICAgYWxlcnQoXCJZT1UgV0lOIFwiKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMubnVtYmVyT2ZGb3VuZFBhaXJzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyAgIGdyaWQgSXRlbVxyXG4gICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIG1hdGNoaW5nICBhbmQgaXNBY3RpdmVcclxuICAgICAgICAvLyBtYXRjaGluZyBhbmQgbm90QWN0aXZlXHJcbiAgICAgICAgaWYgKGVsLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyIGNvbG9yPVwiI2JiYlwiIHdpZHRoPXtwcm9wcy53aWR0aH0ga2V5PXtcImRpdlwiICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtlbC5zcmMgKyBpbmRleH0gZGF0YS1pbmRleD17ZWwuaW5kZXh9IHNyYz17ZWwuc3JjfSAvPlxyXG4gICAgICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghZWwuaXNBY3RpdmUgJiYgZWwubWF0Y2gpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjYmJiXCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm51bWJlck9mQXR0ZW1wdHMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgcHJvcHMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLmZsaXBDYXJkKGVsLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIChlbC5tYXRjaCAmJiAhcHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAvLyAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAvLyAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAvLyAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgLy8gICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgLy8gICAgIC8+XHJcbiAgICAgICAgLy8gICApO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGVsLmlzQWN0aXZlICYmIHByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgICAgLy8gICByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgICA8SW1hZ2VXcmFwcGVyIGNvbG9yPVwiI2JiYlwiIHdpZHRoPXtwcm9wcy53aWR0aH0ga2V5PXtcImRpdlwiICsgaW5kZXh9PlxyXG4gICAgICAgIC8vICAgICAgIDxpbWcga2V5PXtlbC5zcmMgKyBpbmRleH0gZGF0YS1pbmRleD17ZWwuaW5kZXh9IHNyYz17ZWwuc3JjfSAvPlxyXG4gICAgICAgIC8vICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAvLyAgICk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAvLyAgICAgICBjb2xvcj1cIiNiYmJcIlxyXG4gICAgICAgIC8vICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAvLyAgICAgICBrZXk9e1wiZGl2XCIgKyBpbmRleH1cclxuICAgICAgICAvLyAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAocHJvcHMubnVtYmVyT2ZBdHRlbXB0cyA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICBwcm9wcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGlmICghcHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgcHJvcHMuZmxpcENhcmQoZWwuaW5kZXgpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgIH19XHJcbiAgICAgICAgLy8gICAgIC8+XHJcbiAgICAgICAgLy8gICApO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgbnVtYmVyT2ZBdHRlbXB0czogc3RhdGUubnVtYmVyT2ZBdHRlbXB0cyxcclxuICBudW1iZXJPZkZvdW5kUGFpcnM6IHN0YXRlLm51bWJlck9mRm91bmRQYWlycyxcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgY2xpY2tDb3VudGVyOiBzdGF0ZS5jbGlja0NvdW50ZXIsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG4gIHdpZHRoOiBzdGF0ZS53aWR0aCxcclxuICBtYXRjaGluZzogc3RhdGUubWF0Y2hpbmcsXHJcbiAgaXNQbGF5aW5nOiBzdGF0ZS5pc1BsYXlpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTSFVGRkxFIH0pLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRFVQTElDQVRFX0NBUkRTIH0pLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfQ0FSRFMgfSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZMSVBfQUxMX0NBUkRTIH0pLFxyXG4gIGZsaXBDYXJkOiAoaW5kZXgpID0+IGRpc3BhdGNoKGZsaXBDYXJkKGluZGV4KSksXHJcbiAgc3RhcnRHYW1lOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNUQVJUX0dBTUUgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JpZCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcclxuXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIGltZyxcclxuICAuYmxhbmsge1xyXG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuSW1hZ2VXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogMTI1LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9