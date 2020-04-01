webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/Head.tsx":
/*!*********************************!*\
  !*** ./src/components/Head.tsx ***!
  \*********************************/
/*! exports provided: Head */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "../../node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "../../node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/components/Head.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Head = function Head(props) {
  var _props$pageContext;

  var title = [props.title, (props === null || props === void 0 ? void 0 : (_props$pageContext = props.pageContext) === null || _props$pageContext === void 0 ? void 0 : _props$pageContext.frontmatter) ? props.pageContext.frontmatter.title : false, (props === null || props === void 0 ? void 0 : props._frontmatter) ? props._frontmatter.title : false].filter(Boolean).join(' – ');

  var _useThemeUI = Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["useThemeUI"])(),
      theme = _useThemeUI.theme;

  return (// <Helmet htmlAttributes={{ lang: 'en-US' }}>
    //   <title>{title}</title>
    //   <meta name="description" content={pkg.description} />
    //   <link rel="icon" type="image/png" href="/icon.png" />
    //   <link rel="apple-touch-icon" type="image/png" href="/icon.png" />
    //   <meta name="twitter:card" content="summary" />
    //   <meta name="twitter:site" content="@jxnblk" />
    //   <meta name="twitter:image" content="https://theme-ui.com/card.png" />
    //   <meta name="twitter:title" content={title} />
    //   <meta name="twitter:description" content={pkg.description} />
    //   <meta name="theme-color" content={theme.colors.background} />
    // </Helmet>
    __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
      title: title,
      description: props.description,
      titleTemplate: "Theme UI Expansion Pack | %s",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }
    })
  );
};

/***/ })

})
//# sourceMappingURL=_app.js.aecf378976c2c2a98e5f.hot-update.js.map