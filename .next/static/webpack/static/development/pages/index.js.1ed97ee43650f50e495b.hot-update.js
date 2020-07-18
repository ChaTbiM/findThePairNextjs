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
        lineNumber: 39,
        columnNumber: 5
      }
    }, props.cards.map(function (el, index) {
      if (el.isActive) {
        return __jsx(ImageWrapper, {
          width: props.width,
          key: "div" + index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
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
        return __jsx(ImageWrapper, {
          width: props.width,
          key: "div" + index,
          onClick: function onClick() {
            return props.flipCard(el.index);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
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
    width: state.width
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

var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Grid__GridContainer",
  componentId: "v3z7jl-0"
})(["width:520px;height:520px;margin:5px auto;"]);
_c2 = GridContainer;
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Grid__ImageWrapper",
  componentId: "v3z7jl-1"
})(["display:inline-block;padding:1px;margin-right:1px;width:", ";height:", ";background-color:#bbb;img{width:", ";height:", ";}"], function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaGluZyIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwid2lkdGgiLCJzcmMiLCJmbGlwQ2FyZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2xpY2tDb3VudGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJGTElQX0FMTF9DQVJEUyIsImNvbm5lY3QiLCJHcmlkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSW1hZ2VXcmFwcGVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFNBQUssQ0FBQ0UsVUFBTjtBQUNBRixTQUFLLENBQUNHLFlBQU47QUFDQUgsU0FBSyxDQUFDSSxVQUFOO0FBQ0FKLFNBQUssQ0FBQ0ssY0FBTjtBQUNBTCxTQUFLLENBQUNHLFlBQU47QUFFQUcsY0FBVSxDQUFDLFlBQU07QUFDZk4sV0FBSyxDQUFDTyxZQUFOO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBVlEsRUFVTixDQUFDUCxLQUFLLENBQUNRLGFBQVAsQ0FWTSxDQUFUO0FBWUFQLHlEQUFTLENBQUMsWUFBTTtBQUNkUSxXQUFPLENB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LEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q3hCLElBQTdDLENBQWYsRSxDQUVBOztBQUNBLElBQU1pQyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaURBQW5CO01BQU1GLGE7QUFNTixJQUFNRyxZQUFZLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0lBSVAsVUFBQ2xDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNpQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQUpPLEVBS04sVUFBQ2pCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNpQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQUxNLEVBU0wsVUFBQ2pCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNpQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQVRLLEVBVUosVUFBQ2pCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNpQixLQUFOLEdBQWMsSUFBekI7QUFBQSxDQVZJLENBQWxCO01BQU1rQixZO0FBY05BLFlBQVksQ0FBQ0MsWUFBYixHQUE0QjtBQUMxQm5CLE9BQUssRUFBRTtBQURtQixDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWVkOTdlZTQzNjUwZjUwZTQ5NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIExJTUlUX0NBUkRTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxufSBmcm9tIFwiLi4vcmVkdXgvY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9wcy5yZXNldENhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICAgIHByb3BzLmxpbWl0Q2FyZHMoKTtcclxuICAgIHByb3BzLmR1cGxpY2F0ZUNhcmRzKCk7XHJcbiAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCBbcHJvcHMubnVtYmVyT2ZQYWlyc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIsIHByb3BzLm1hdGNoaW5nKTtcclxuICAgIGlmIChwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLm1hdGNoaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyAgIGdyaWQgSXRlbVxyXG4gICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciB3aWR0aD17cHJvcHMud2lkdGh9IGtleT17XCJkaXZcIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17ZWwuc3JjICsgaW5kZXh9IGRhdGEtaW5kZXg9e2VsLmluZGV4fSBzcmM9e2VsLnNyY30gLz5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgICAgICAgIGtleT17XCJkaXZcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmZsaXBDYXJkKGVsLmluZGV4KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KX1cclxuICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgY2xpY2tDb3VudGVyOiBzdGF0ZS5jbGlja0NvdW50ZXIsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG4gIHdpZHRoOiBzdGF0ZS53aWR0aCxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNIVUZGTEUgfSksXHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMSU1JVF9DQVJEUyB9KSxcclxuICBkdXBsaWNhdGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMgfSksXHJcbiAgcmVzZXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9DQVJEUyB9KSxcclxuICBmbGlwQWxsQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRkxJUF9BTExfQ0FSRFMgfSksXHJcbiAgZmxpcENhcmQ6IChpbmRleCkgPT4gZGlzcGF0Y2goZmxpcENhcmQoaW5kZXgpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgfVxyXG5gO1xyXG5cclxuSW1hZ2VXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogMTI1LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9