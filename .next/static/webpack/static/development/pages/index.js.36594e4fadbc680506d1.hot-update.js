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
            lineNumber: 54,
            columnNumber: 15
          }
        }));
      } else {
        return __jsx(ImageWrapper, {
          key: "div" + index,
          onClick: function onClick() {
            return props.flipCard(el.index);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
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
})(["display:inline-block;margin:1px;width:", ";height:", ";background-color:#bbb;"], function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkdyaWQiLCJwcm9wcyIsInVzZUVmZmVjdCIsInJlc2V0Q2FyZHMiLCJzaHVmZmxlQ2FyZHMiLCJsaW1pdENhcmRzIiwiZHVwbGljYXRlQ2FyZHMiLCJzZXRUaW1lb3V0IiwiZmxpcEFsbENhcmRzIiwibnVtYmVyT2ZQYWlycyIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaGluZyIsImNhcmRzIiwibWFwIiwiZWwiLCJpbmRleCIsImlzQWN0aXZlIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwiZmxpcENhcmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNsaWNrQ291bnRlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiRkxJUF9BTExfQ0FSRFMiLCJjb25uZWN0IiwiR3JpZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkltYWdlV3JhcHBlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxTQUFLLENBQUNFLFVBQU47QUFDQUYsU0FBSyxDQUFDRyxZQUFOO0FBQ0FILFNBQUssQ0FBQ0ksVUFBTjtBQUNBSixTQUFLLENBQUNLLGNBQU47QUFDQUwsU0FBSyxDQUFDRyxZQUFOO0FBRUFHLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZOLFdBQUssQ0FBQ08sWUFBTjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQVZRLEVBVU4sQ0FBQ1AsS0FBSyxDQUFDUSxhQUFQ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QUUsa0JBQUNSLEtBQUQ7QUFBQSxhQUFXYSxRQUFRLENBQUNMLHFFQUFRLENBQUNSLEtBQUQsQ0FBVCxDQUFuQjtBQUFBO0FBTjhCLEdBQWY7QUFBQSxDQUEzQjs7QUFTZW9CLDBIQUFPLENBQUNYLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDNUIsSUFBN0MsQ0FBZixFLENBRUE7O0FBQ0EsSUFBTXFDLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpREFBbkI7TUFBTUYsYTtBQU1OLElBQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzRkFHUCxVQUFDdEMsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ29CLEtBQU4sR0FBYyxJQUF6QjtBQUFBLENBSE8sRUFJTixVQUFDcEIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ29CLEtBQU4sR0FBYyxJQUF6QjtBQUFBLENBSk0sQ0FBbEI7TUFBTW1CLFk7QUFPTkEsWUFBWSxDQUFDQyxZQUFiLEdBQTRCO0FBQzFCcEIsT0FBSyxFQUFFO0FBRG1CLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNjU5NGU0ZmFkYmM2ODA1MDZkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgTElNSVRfQ0FSRFMsXHJcbiAgU0hVRkZMRSxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG59IGZyb20gXCIuLi9yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIiwgcHJvcHMubWF0Y2hpbmcpO1xyXG4gICAgaWYgKHByb3BzLm1hdGNoaW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9LCBbcHJvcHMubWF0Y2hpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vICAgZ3JpZCBJdGVtXHJcbiAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIgMXB4XCIsXHJcbiAgICAgICAgICAgICAgICBmbG9hdDogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNiYmJcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2VsLnNyYyArIGluZGV4fSBkYXRhLWluZGV4PXtlbC5pbmRleH0gc3JjPXtlbC5zcmN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlclxyXG4gICAgICAgICAgICAgIGtleT17XCJkaXZcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmZsaXBDYXJkKGVsLmluZGV4KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KX1cclxuICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgY2xpY2tDb3VudGVyOiBzdGF0ZS5jbGlja0NvdW50ZXIsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG4gIHdpZHRoOiBzdGF0ZS53aWR0aCxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFNIVUZGTEUgfSksXHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMSU1JVF9DQVJEUyB9KSxcclxuICBkdXBsaWNhdGVDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMgfSksXHJcbiAgcmVzZXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBSRVNFVF9DQVJEUyB9KSxcclxuICBmbGlwQWxsQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogRkxJUF9BTExfQ0FSRFMgfSksXHJcbiAgZmxpcENhcmQ6IChpbmRleCkgPT4gZGlzcGF0Y2goZmxpcENhcmQoaW5kZXgpKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHcmlkKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiA1MjBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XHJcbmA7XHJcbkltYWdlV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6IDEyNSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==