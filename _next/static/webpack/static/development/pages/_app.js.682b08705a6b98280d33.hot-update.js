webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/CodeBlock.tsx":
/*!**************************************!*\
  !*** ./src/components/CodeBlock.tsx ***!
  \**************************************/
/*! exports provided: liveEditorStyle, liveErrorStyle, CodeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveEditorStyle", function() { return liveEditorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveErrorStyle", function() { return liveErrorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlock", function() { return CodeBlock; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prism-react-renderer/themes/github */ "../../node_modules/prism-react-renderer/themes/github/index.js");
/* harmony import */ var prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prism-react-renderer/themes/vsDark */ "../../node_modules/prism-react-renderer/themes/vsDark/index.js");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-live */ "../../node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdx-js/react */ "../../node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme-ui */ "../../node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var theme_ui_expansion_pack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! theme-ui-expansion-pack */ "../theme-ui-expansion-pack/dist/index.js");
/* harmony import */ var theme_ui_expansion_pack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(theme_ui_expansion_pack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/md */ "../../node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_lorem_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-lorem-component */ "../../node_modules/react-lorem-component/index.js");
/* harmony import */ var react_lorem_component__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_lorem_component__WEBPACK_IMPORTED_MODULE_12__);





var _this = undefined,
    _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/components/CodeBlock.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Button = theme_ui__WEBPACK_IMPORTED_MODULE_9__["Button"],
    restThemeUi = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(theme_ui__WEBPACK_IMPORTED_MODULE_9__, ["Button"]);

var Box = restThemeUi.Box;
var liveEditorStyle = {
  fontSize: '14',
  marginBottom: '32',
  marginTop: '32',
  overflowX: 'auto',
  fontFamily: 'Menlo,monospace',
  borderRadius: '10'
};
var liveErrorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red'
};
var images = {
  nyc: 'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  flatiron: 'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  logo: 'https://contrast.now.sh/fff/000?text=UI&size=96&fontSize=1.5&baseline=1'
};

var LiveCodePreview = function LiveCodePreview(props) {
  return __jsx(Box, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    as: react_live__WEBPACK_IMPORTED_MODULE_7__["LivePreview"],
    sx: {
      fontFamily: 'body',
      mb: 3
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 36
    }
  }));
};

var CopyButton = function CopyButton(props) {
  return __jsx(Button, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    size: "sm",
    position: "absolute",
    textTransform: "uppercase",
    variantColor: "teal",
    fontSize: "xs",
    height: "24px",
    top: 0,
    zIndex: "1",
    right: "1.25em"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }));
};

var StarIcon = function StarIcon(props) {
  return __jsx(Box, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    m: "2px",
    as: "svg",
    fill: "current",
    size: "3",
    viewBox: "0 0 24 24"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
};

var CodeBlock = function CodeBlock(_ref) {
  var className = _ref.className,
      live = _ref.live,
      isManual = _ref.isManual,
      render = _ref.render,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["className", "live", "isManual", "render", "children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(children.trim()),
      editorCode = _useState[0],
      setEditorCode = _useState[1];

  var _ThemeUi$useColorMode = theme_ui__WEBPACK_IMPORTED_MODULE_9__["useColorMode"](),
      _ThemeUi$useColorMode2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ThemeUi$useColorMode, 2),
      mode = _ThemeUi$useColorMode2[0],
      setMode = _ThemeUi$useColorMode2[1];

  var language = className && className.replace(/language-/, ''); // const { onCopy, hasCopied } = useClipboard(editorCode);

  var themes = {
    light: prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_5__["default"],
    dark: prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  var theme = themes[mode];

  var liveProviderProps = _objectSpread({
    theme: theme,
    language: language,
    code: editorCode,
    transformCode: function transformCode(code) {
      return "/** @jsx jsx */\n<>".concat(code, "</>");
    },
    scope: _objectSpread({}, theme_ui__WEBPACK_IMPORTED_MODULE_9__, {}, theme_ui_expansion_pack__WEBPACK_IMPORTED_MODULE_10__, {}, react_icons_md__WEBPACK_IMPORTED_MODULE_11__, {
      Lorem: react_lorem_component__WEBPACK_IMPORTED_MODULE_12___default.a,
      mdx: _mdx_js_react__WEBPACK_IMPORTED_MODULE_8__["mdx"],
      StarIcon: StarIcon,
      images: images
    }),
    noInline: isManual
  }, props);

  var handleCodeChange = function handleCodeChange(newCode) {
    return setEditorCode(newCode.trim());
  };

  if (language.startsWith('js') && Boolean(live)) {
    return __jsx(react_live__WEBPACK_IMPORTED_MODULE_7__["LiveProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, liveProviderProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }), __jsx(LiveCodePreview, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }), __jsx(Box, {
      sx: {
        position: 'relative'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_7__["LiveEditor"], {
      onChange: handleCodeChange,
      p: 20 // @ts-ignore
      ,
      sx: liveEditorStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    })), __jsx(Box, {
      as: react_live__WEBPACK_IMPORTED_MODULE_7__["LiveError"] // @ts-ignore
      ,
      sx: liveErrorStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }));
  }

  if (render) {
    return __jsx("div", {
      sx: {
        marginTop: '40px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_7__["LiveProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, liveProviderProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }), __jsx(LiveCodePreview, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    })));
  }

  return __jsx(react_live__WEBPACK_IMPORTED_MODULE_7__["LiveProvider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    disabled: true
  }, liveProviderProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }), __jsx(Box, {
    as: react_live__WEBPACK_IMPORTED_MODULE_7__["LiveEditor"],
    p: 20 // @ts-ignore
    ,
    sx: liveEditorStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }));
};
CodeBlock.defaultProps = {
  mountStylesheet: false
};

/***/ })

})
//# sourceMappingURL=_app.js.682b08705a6b98280d33.hot-update.js.map