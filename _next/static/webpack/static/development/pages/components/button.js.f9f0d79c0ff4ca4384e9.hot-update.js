webpackHotUpdate("static/development/pages/components/button.js",{

/***/ "./src/pages/components/button.mdx":
/*!*****************************************!*\
  !*** ./src/pages/components/button.mdx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "../../node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SEO */ "./src/components/SEO.tsx");


var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/pages/components/button.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */



var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_SEO__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Button",
    description: "Button component is used to trigger an action or event, such as submitting a\nform, opening a Dialog, canceling an action, or performing a delete operation.",
    mdxType: "SEO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Button"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Button component is used to trigger an action or event, such as submitting a\nform, opening a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/modal"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), "Dialog"), ", canceling an action, or performing a delete\noperation."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Import"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), "import { Button } from 'theme-ui-expansion-pack';\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Usage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), "<Button>Button</Button>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Button Sizes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "size"), " prop to change the size of the button. You can set the value to\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "xs"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "sm"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "md"), ", or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "lg"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), "<ButtonGroup spacing={4}>\n  <Button variantColor=\"teal\" size=\"xs\">\n    Button\n  </Button>\n  <Button variantColor=\"teal\" size=\"sm\">\n    Button\n  </Button>\n  <Button variantColor=\"teal\" size=\"md\">\n    Button\n  </Button>\n  <Button variantColor=\"teal\" size=\"lg\">\n    Button\n  </Button>\n</ButtonGroup>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Button Variant"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "variant"), " prop to change the visual style of the Button. You can set the\nvalue to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "solid"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "ghost"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "outline"), ", or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "link"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "<ButtonGroup spacing={4}>\n  <Button variantColor=\"teal\" variant=\"solid\">\n    <Lorem count={2} />\n  </Button>\n  <Button variantColor=\"teal\" variant=\"outline\">\n    Button\n  </Button>\n  <Button variantColor=\"teal\" variant=\"ghost\">\n    Button\n  </Button>\n  <Button variantColor=\"teal\" variant=\"link\">\n    Button\n  </Button>\n</ButtonGroup>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Button with Icon"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "You can add left and right icons to the Button components.\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/icon"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), "See how to add icons"), " to your project"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), "<ButtonGroup spacing={4}>\n  <Button leftIcon={MdBuild}>Email</Button>\n  <Button rightIcon={MdCall}>Call us</Button>\n</ButtonGroup>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "You can also use icons from popular libraries like\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://react-icons.netlify.com"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), "react-icons"), " and just pass it into the button."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), "// -> import {MdBuild , MdCall} from \"react-icons/md\"\n<Box>\n  <Button>\n    <MdBuild /> Settings\n  </Button>\n  <Button>\n    <MdCall /> Call us\n  </Button>\n</Box>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Button loading state"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Pass ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "isLoading"), " prop to the Button component to show it's loading state. You\ncan optionally pass ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "loadingText"), " prop, if you do, the button will show a\nspinner and the loading text. Otherwise, the button will take the width of the\ntext label and show only the spinner"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), "<ButtonGroup spacing={4}>\n  <Button isLoading variantColor=\"teal\" variant=\"solid\">\n    Email\n  </Button>\n  <Button isLoading loadingText=\"Submitting\" variantColor=\"teal\" variant=\"outline\">\n    Submit\n  </Button>\n</ButtonGroup>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Accessibility"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Button has ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "role"), " button."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "When Button has focus, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("kbd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Space"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("kbd", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Enter"), " activates it.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Props"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "The Button composes the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "PseudoBox"), " component so you can pass props for\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "PseudoBox"), ". These are props related to the Button component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("thead", {
    parentName: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "thead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), "Name"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), "Type"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), "Default"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), "Description"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tbody", {
    parentName: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "aria-label")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "string")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), "The label of the button")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "variantColor")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "string")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), "The color of the button. Use a color key passed in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "theme.colors"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "variant")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "outline"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "ghost"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "unstyled"), " , ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "link"), " , ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "solid")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "solid")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), "The variant of the button style to use.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "isDisabled")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "boolean")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), "If ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "true"), ", the button will be disabled.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "isLoading")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "boolean")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), "If ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "true"), ", the button will show a spinner.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "loadingText")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "string")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }), "The label to show in the button when ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "isLoading"), " is true. If no text is passed, it only shows the spinner")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    parentName: "tbody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "size")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "sm"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "md"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "lg")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "td",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "md")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "tr"
  }, {
    "align": null
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), "The size of the button.")))));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=button.js.f9f0d79c0ff4ca4384e9.hot-update.js.map