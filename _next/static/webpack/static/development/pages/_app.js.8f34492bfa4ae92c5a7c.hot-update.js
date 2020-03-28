webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/SideNav.tsx":
/*!************************************!*\
  !*** ./src/components/SideNav.tsx ***!
  \************************************/
/*! exports provided: SideNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNav", function() { return SideNav; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "../../node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "../../node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deepmerge */ "../../node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/components/SideNav.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */





var Overlay = function Overlay(_ref) {
  var onClick = _ref.onClick;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    onClick: onClick,
    sx: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

var SideNav = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (_ref2, ref) {
  var open = _ref2.open,
      _ref2$styles = _ref2.styles,
      styles = _ref2$styles === void 0 ? {} : _ref2$styles,
      components = _ref2.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["open", "styles", "components"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: {
      styles: deepmerge__WEBPACK_IMPORTED_MODULE_5___default()({
        ul: {
          listStyle: 'none',
          p: 0,
          m: 0,
          ul: {
            a: {
              pl: 4
            }
          }
        },
        a: {
          display: 'block',
          px: 2,
          py: 2,
          color: 'inherit',
          textDecoration: 'none',
          fontSize: 1,
          fontWeight: 'bold'
        }
      }, styles)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["MDXProvider"], {
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    sx: {
      position: ['fixed', 'sticky'],
      // @ts-ignore
      top: 0,
      // @ts-ignore
      left: 0,
      // @ts-ignore
      bottom: [0, 'auto'],
      // @ts-ignore
      zIndex: 1,
      // @ts-ignore
      minWidth: 0,
      // @ts-ignore
      width: 256,
      // @ts-ignore
      maxHeight: ['100vh', 'none'],
      // @ts-ignore
      overflowX: 'visible',
      // @ts-ignore
      overflowY: 'auto',
      // @ts-ignore
      WebkitOverflowScrolling: 'touch',
      // @ts-ignore
      transition: 'transform .2s ease-out',
      transform: [open ? 'translateX(0)' : 'translate(-100%)', 'none'],
      bg: ['background', 'transparent']
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=_app.js.8f34492bfa4ae92c5a7c.hot-update.js.map