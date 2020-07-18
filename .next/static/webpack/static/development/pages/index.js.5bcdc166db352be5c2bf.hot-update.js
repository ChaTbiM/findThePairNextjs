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
          color: "#bbb",
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
        __jsx(ImageWrapper, {
          color: "transparent",
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
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
            lineNumber: 56,
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
})(["display:inline-block;margin-right:1px;margin-top:2px;width:", ";height:", ";background-color:", ";overflow:auto;img{width:", ";height:", ";padding:1px;}"], function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaGluZyIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwibWF0Y2giLCJ3aWR0aCIsInNyYyIsIm51bWJlck9mQXR0ZW1wdHMiLCJzdGFydEdhbWUiLCJmbGlwQ2FyZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpY2tDb3VudGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJGTElQX0FMTF9DQVJEUyIsIlNUQVJUX0dBTUUiLCJjb25uZWN0IiwiR3JpZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkltYWdlV3JhcHBlciIsImNvbG9yIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFNBQUssQ0FBQ0UsVUFBTjtBQUNBRixTQUFLLENBQUNHLFlBQU47QUFDQUgsU0FBSyxDQUFDSSxVQUFOO0FBQ0FKLFNBQUssQ0FBQ0ssY0FBTjtBQUNBTCxTQUFLLENBQUNHLFlBQU47QUFFQUcsY0FBVSxDQUFDLFlBQU07QUFDZk4sV0FBSyxDQUFDTyxZQUFOO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBVlEsRUFVTixDQUFDUCxL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QSxTQUFXQSxLQUFLLENBQUN3QyxLQUFqQjtBQUFBLENBTkosRUFXTCxVQUFDeEMsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2tCLEtBQU4sR0FBYyxJQUF6QjtBQUFBLENBWEssRUFZSixVQUFDbEIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2tCLEtBQU4sR0FBYyxJQUF6QjtBQUFBLENBWkksQ0FBbEI7TUFBTXFCLFk7QUFpQk5BLFlBQVksQ0FBQ0UsWUFBYixHQUE0QjtBQUMxQnZCLE9BQUssRUFBRTtBQURtQixDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNWJjZGMxNjZkYjM1MmJlNWMyYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIExJTUlUX0NBUkRTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxuICBTVEFSVF9HQU1FLFxyXG59IGZyb20gXCIuLi9yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIiwgcHJvcHMubWF0Y2hpbmcpO1xyXG4gICAgaWYgKHByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMubWF0Y2hpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vICAgZ3JpZCBJdGVtXHJcbiAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLmlzQWN0aXZlICYmICFlbC5tYXRjaCkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciBjb2xvcj1cIiNiYmJcIiB3aWR0aD17cHJvcHMud2lkdGh9IGtleT17XCJkaXZcIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWwuaXNBY3RpdmUgJiYgZWwubWF0Y2gpIHtcclxuICAgICAgICAgIDxJbWFnZVdyYXBwZXJcclxuICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICA+PC9JbWFnZVdyYXBwZXI+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjYmJiXCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm51bWJlck9mQXR0ZW1wdHMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgcHJvcHMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLmZsaXBDYXJkKGVsLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICBjbGlja0NvdW50ZXI6IHN0YXRlLmNsaWNrQ291bnRlcixcclxuICBtYXRjaGluZzogc3RhdGUubWF0Y2hpbmcsXHJcbiAgd2lkdGg6IHN0YXRlLndpZHRoLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IHN0YXRlLm51bWJlck9mQXR0ZW1wdHMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTSFVGRkxFIH0pLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRFVQTElDQVRFX0NBUkRTIH0pLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfQ0FSRFMgfSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZMSVBfQUxMX0NBUkRTIH0pLFxyXG4gIGZsaXBDYXJkOiAoaW5kZXgpID0+IGRpc3BhdGNoKGZsaXBDYXJkKGluZGV4KSksXHJcbiAgc3RhcnRHYW1lOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNUQVJUX0dBTUUgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR3JpZCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDUyMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcclxuXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICAgIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICB9XHJcbmA7XHJcblxyXG5JbWFnZVdyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHdpZHRoOiAxMjUsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=