webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "../../node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-button */ "./src/components/menu-button.tsx");
/* harmony import */ var _SidebarNavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarNavLink */ "./src/components/SidebarNavLink.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button */ "./src/components/button.tsx");
/* harmony import */ var _sidebar_mdx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidebar.mdx */ "./src/sidebar.mdx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SideNav */ "./src/components/SideNav.tsx");
/* harmony import */ var _SidebarNavHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarNavHeading */ "./src/components/SidebarNavHeading.tsx");

var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var modes = ['default', 'dark'];
var sidebar = {
  wrapper: _SideNav__WEBPACK_IMPORTED_MODULE_9__["SideNav"],
  h1: _SidebarNavHeading__WEBPACK_IMPORTED_MODULE_10__["SidebarNavHeading"],
  h2: _SidebarNavHeading__WEBPACK_IMPORTED_MODULE_10__["SidebarNavHeading"],
  h3: _SidebarNavHeading__WEBPACK_IMPORTED_MODULE_10__["SidebarNavHeading"],
  h4: _SidebarNavHeading__WEBPACK_IMPORTED_MODULE_10__["SidebarNavHeading"],
  h5: _SidebarNavHeading__WEBPACK_IMPORTED_MODULE_10__["SidebarNavHeading"],
  h6: _SidebarNavHeading__WEBPACK_IMPORTED_MODULE_10__["SidebarNavHeading"],
  a: _SidebarNavLink__WEBPACK_IMPORTED_MODULE_6__["SidebarNavLink"]
};

var getModeName = function getModeName(mode) {
  switch (mode) {
    case 'dark':
      return 'Dark';

    case 'default':
      return 'Light';

    default:
      return mode;
  }
};

var Layout = function Layout(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  var nav = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useColorMode = Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])(),
      _useColorMode2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useColorMode, 2),
      mode = _useColorMode2[0],
      setMode = _useColorMode2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var cycleMode = function cycleMode(e) {
    var i = modes.indexOf(mode);
    var next = modes[(i + 1) % modes.length];
    setMode(next);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Styled"].root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: {
      flexDirection: 'column',
      minHeight: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "header",
    sx: {
      height: 64,
      px: 3,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: {
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_menu_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      setMenuOpen(!menuOpen);
      if (!nav.current) return;
      var navLink = nav.current.querySelector('a');
      if (navLink) navLink.focus();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Theme UI Expansion Pack"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "https://github.com/isBatak/theme-ui-expansion-pack",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "GitHub"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      ml: 2
    },
    onClick: cycleMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, getModeName(mode)))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: {
      flex: '1 1 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    sx: {
      display: ['block', 'flex']
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    ref: nav,
    onFocus: function onFocus(e) {
      setMenuOpen(true);
    },
    onBlur: function onBlur(e) {
      setMenuOpen(false);
    },
    onClick: function onClick(e) {
      setMenuOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_sidebar_mdx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    open: menuOpen,
    components: sidebar,
    sx: {
      display: [null, props.fullwidth ? 'none' : 'block'],
      width: 256,
      flex: 'none',
      px: 3,
      pt: 3,
      pb: 4,
      mt: [64, 0]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("main", {
    id: "content",
    sx: {
      width: '100%',
      minWidth: 0,
      maxWidth: props.fullwidth ? 'none' : 768,
      mx: 'auto',
      px: props.fullwidth ? 0 : 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, props.children)))));
};

/***/ }),

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
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "../../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! deepmerge */ "../../node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_6__);


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
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["Global"] // @ts-ignore
  , {
    styles: Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["css"])({
      body: {
        overflow: ['hidden', 'auto']
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      styles: deepmerge__WEBPACK_IMPORTED_MODULE_6___default()({
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
      lineNumber: 43
    },
    __self: this
  }, open && Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Overlay, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["MDXProvider"], {
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
      lineNumber: 73
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=_app.js.b4ae733430fe07203997.hot-update.js.map