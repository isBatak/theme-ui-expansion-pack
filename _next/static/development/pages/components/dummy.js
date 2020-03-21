(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/components/dummy.js"],{

/***/ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/createClass.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/createClass.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/inherits.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/inherits.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/typeof.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@mdx-js/react/dist/esm.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@mdx-js/react/dist/esm.js ***!
  \****************************************************************************************************************************/
/*! exports provided: MDXContext, MDXProvider, mdx, useMDXComponents, withMDXComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXContext", function() { return MDXContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdx", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMDXComponents", function() { return useMDXComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMDXComponents", function() { return withMDXComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2({}, contextComponents, {}, components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
      ref: ref
    }, etc, {
      components: propComponents
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ "../../node_modules/next-seo/lib/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),_interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"DefaultSeo",{enumerable:!0,get:function get(){return _defaultSEO["default"]}}),Object.defineProperty(exports,"NextSeo",{enumerable:!0,get:function get(){return _nextSEO["default"]}}),Object.defineProperty(exports,"ArticleJsonLd",{enumerable:!0,get:function get(){return _article["default"]}}),Object.defineProperty(exports,"ArticleJsonLdProps",{enumerable:!0,get:function get(){return _article.ArticleJsonLdProps}}),Object.defineProperty(exports,"BreadcrumbJsonLd",{enumerable:!0,get:function get(){return _breadcrumb["default"]}}),Object.defineProperty(exports,"BreadCrumbJsonLdProps",{enumerable:!0,get:function get(){return _breadcrumb.BreadCrumbJsonLdProps}}),Object.defineProperty(exports,"FAQPageJsonLd",{enumerable:!0,get:function get(){return _faqPage["default"]}}),Object.defineProperty(exports,"FAQPageJsonLdProps",{enumerable:!0,get:function get(){return _faqPage.FAQPageJsonLdProps}}),Object.defineProperty(exports,"JobPostingJsonLd",{enumerable:!0,get:function get(){return _jobPosting["default"]}}),Object.defineProperty(exports,"JobPostingJsonLdProps",{enumerable:!0,get:function get(){return _jobPosting.JobPostingJsonLdProps}}),Object.defineProperty(exports,"BlogJsonLd",{enumerable:!0,get:function get(){return _blog["default"]}}),Object.defineProperty(exports,"BlogJsonLdProps",{enumerable:!0,get:function get(){return _blog.BlogJsonLdProps}}),Object.defineProperty(exports,"CourseJsonLd",{enumerable:!0,get:function get(){return _course["default"]}}),Object.defineProperty(exports,"CourseJsonLdProps",{enumerable:!0,get:function get(){return _course.CourseJsonLdProps}}),Object.defineProperty(exports,"DatasetJsonLd",{enumerable:!0,get:function get(){return _dataset["default"]}}),Object.defineProperty(exports,"DatasetJsonLdProps",{enumerable:!0,get:function get(){return _dataset.DatasetJsonLdProps}}),Object.defineProperty(exports,"LocalBusinessJsonLd",{enumerable:!0,get:function get(){return _localBusiness["default"]}}),Object.defineProperty(exports,"LocalBusinessJsonLdProps",{enumerable:!0,get:function get(){return _localBusiness.LocalBusinessJsonLdProps}}),Object.defineProperty(exports,"LogoJsonLd",{enumerable:!0,get:function get(){return _logo["default"]}}),Object.defineProperty(exports,"LogoJsonLdProps",{enumerable:!0,get:function get(){return _logo.LogoJsonLdProps}}),Object.defineProperty(exports,"ProductJsonLd",{enumerable:!0,get:function get(){return _product["default"]}}),Object.defineProperty(exports,"ProductJsonLdProps",{enumerable:!0,get:function get(){return _product.ProductJsonLdProps}}),Object.defineProperty(exports,"SocialProfileJsonLd",{enumerable:!0,get:function get(){return _socialProfile["default"]}}),Object.defineProperty(exports,"SocialProfileJsonLdProps",{enumerable:!0,get:function get(){return _socialProfile.SocialProfileJsonLdProps}}),Object.defineProperty(exports,"CorporateContactJsonLd",{enumerable:!0,get:function get(){return _corporateContact["default"]}}),Object.defineProperty(exports,"CorporateContactJsonLdProps",{enumerable:!0,get:function get(){return _corporateContact.CorporateContactJsonLdProps}}),Object.defineProperty(exports,"NewsArticleJsonLd",{enumerable:!0,get:function get(){return _newsarticle["default"]}}),Object.defineProperty(exports,"NewsArticleJsonLdProps",{enumerable:!0,get:function get(){return _newsarticle.NewsArticleJsonLdProps}}),Object.defineProperty(exports,"EventJsonLd",{enumerable:!0,get:function get(){return _event["default"]}}),Object.defineProperty(exports,"EventJsonLdProps",{enumerable:!0,get:function get(){return _event.EventJsonLdProps}}),Object.defineProperty(exports,"DefaultSeoProps",{enumerable:!0,get:function get(){return _types.DefaultSeoProps}}),Object.defineProperty(exports,"NextSeoProps",{enumerable:!0,get:function get(){return _types.NextSeoProps}});var _defaultSEO=_interopRequireDefault(__webpack_require__(/*! ./meta/defaultSEO */ "../../node_modules/next-seo/lib/meta/defaultSEO.js")),_nextSEO=_interopRequireDefault(__webpack_require__(/*! ./meta/nextSEO */ "../../node_modules/next-seo/lib/meta/nextSEO.js")),_article=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/article */ "../../node_modules/next-seo/lib/jsonld/article.js")),_breadcrumb=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/breadcrumb */ "../../node_modules/next-seo/lib/jsonld/breadcrumb.js")),_faqPage=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/faqPage */ "../../node_modules/next-seo/lib/jsonld/faqPage.js")),_jobPosting=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/jobPosting */ "../../node_modules/next-seo/lib/jsonld/jobPosting.js")),_blog=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/blog */ "../../node_modules/next-seo/lib/jsonld/blog.js")),_course=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/course */ "../../node_modules/next-seo/lib/jsonld/course.js")),_dataset=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/dataset */ "../../node_modules/next-seo/lib/jsonld/dataset.js")),_localBusiness=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/localBusiness */ "../../node_modules/next-seo/lib/jsonld/localBusiness.js")),_logo=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/logo */ "../../node_modules/next-seo/lib/jsonld/logo.js")),_product=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/product */ "../../node_modules/next-seo/lib/jsonld/product.js")),_socialProfile=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/socialProfile */ "../../node_modules/next-seo/lib/jsonld/socialProfile.js")),_corporateContact=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/corporateContact */ "../../node_modules/next-seo/lib/jsonld/corporateContact.js")),_newsarticle=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/newsarticle */ "../../node_modules/next-seo/lib/jsonld/newsarticle.js")),_event=_interopRequireWildcard(__webpack_require__(/*! ./jsonld/event */ "../../node_modules/next-seo/lib/jsonld/event.js")),_types=__webpack_require__(/*! ./types */ "../../node_modules/next-seo/lib/types.js");

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/article.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/article.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,ArticleJsonLd=function(a){var b=a.url,c=a.title,d=a.images,e=void 0===d?[]:d,f=a.datePublished,g=a.dateModified,h=void 0===g?null:g,i=a.authorName,j=a.description,k=a.publisherName,l=a.publisherLogo,m="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(b,"\"\n    },\n    \"headline\": \"").concat(c,"\",\n    \"image\": [\n      ").concat(e.map(function(a){return"\"".concat(a,"\"")}),"\n     ],\n    \"datePublished\": \"").concat(f,"\",\n    \"dateModified\": \"").concat(h||f,"\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(i,"\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(k,"\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"").concat(l,"\"\n      }\n    },\n    \"description\": \"").concat(j,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(m),key:"jsonld-article"}))},_default=ArticleJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/blog.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/blog.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,BlogJsonLd=function(a){var b=a.url,c=a.title,d=a.images,e=void 0===d?[]:d,f=a.datePublished,g=a.dateModified,h=void 0===g?null:g,i=a.authorName,j=a.description,k="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(b,"\"\n    },\n    \"headline\": \"").concat(c,"\",\n    \"image\": [\n      ").concat(e.map(function(a){return"\"".concat(a,"\"")}),"\n     ],\n    \"datePublished\": \"").concat(f,"\",\n    \"dateModified\": \"").concat(h||f,"\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(i,"\"\n    },\n    \"description\": \"").concat(j,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(k),key:"jsonld-blog"}))},_default=BlogJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/breadcrumb.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/breadcrumb.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,BreadCrumbJsonLd=function(a){var b=a.itemListElements,c=void 0===b?[]:b,d="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      ".concat(c.map(function(a){return"{\n        \"@type\": \"ListItem\",\n        \"position\": ".concat(a.position,",\n        \"item\": {\n          \"@id\": \"").concat(a.item,"\",\n          \"name\": \"").concat(a.name,"\"\n        }\n      }")}),"\n     ]\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(d),key:"jsonld-breadcrumb"}))},_default=BreadCrumbJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/corporateContact.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/corporateContact.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,formatIfArray=function(a){return Array.isArray(a)?"[".concat(a.map(function(a){return"\"".concat(a,"\"")}),"]"):"\"".concat(a,"\"")},buildContactPoint=function(a){return a.map(function(a){return"{\n    \"@type\": \"ContactPoint\",\n    \"telephone\": \"".concat(a.telephone,"\",\n    \"contactType\": \"").concat(a.contactType,"\"").concat(a.areaServed?",\n    \"areaServed\": ".concat(formatIfArray(a.areaServed)):"").concat(a.availableLanguage?",\n    \"availableLanguage\": ".concat(formatIfArray(a.availableLanguage)):"").concat(a.contactOption?",\n    \"contactOption\": \"".concat(a.contactOption,"\""):"","\n    }")})},CorporateContactJsonLd=function(a){var b=a.url,c=a.logo,d=a.contactPoint,e="{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"".concat(b,"\",\n    ").concat(c?"\"logo\": \"".concat(c,"\","):"","\n    \"contactPoint\": [").concat(buildContactPoint(d),"]\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(e),key:"jsonld-corporate-contact"}))},_default=CorporateContactJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/course.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/course.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,CourseJsonLd=function(a){var b=a.courseName,c=a.description,d=a.providerName,e=a.providerUrl,f="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"".concat(b,"\",\n    \"description\": \"").concat(c,"\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(d,"\"").concat(e?",\n      \"sameAs\": \"".concat(e,"\""):"","\n    }\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(f),key:"jsonld-course"}))},_default=CourseJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/dataset.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/dataset.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,DatasetJsonLd=function(a){var b=a.description,c=a.name,d=a.license,e="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Dataset\",\n    \"description\": \"".concat(b,"\",\n    \"name\": \"").concat(c,"\"").concat(d?",\n        \"license\": \"".concat(d,"\""):"","\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(e),key:"jsonld-dataset"}))},_default=DatasetJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/event.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/event.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),_formatIfArray=_interopRequireDefault(__webpack_require__(/*! ../utils/formatIfArray */ "../../node_modules/next-seo/lib/utils/formatIfArray.js")),_buildAddress=_interopRequireDefault(__webpack_require__(/*! ../utils/buildAddress */ "../../node_modules/next-seo/lib/utils/buildAddress.js")),__jsx=_react["default"].createElement,buildLocation=function(a){return"\n  \"location\": {\n    \"@type\": \"Place\",\n    ".concat((0,_buildAddress["default"])(a.address),"\n    ").concat(a.sameAs?"\"sameAs\": \"".concat(a.sameAs,"\","):"","\n    \"name\": \"").concat(a.name,"\"\n  },\n")},EventJsonLd=function(a){var b=a.name,c=a.startDate,d=a.endDate,e=a.location,f=a.url,g=a.description,h=a.images,i="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Event\",\n    \"startDate\": \"".concat(c,"\",\n    \"endDate\": \"").concat(d,"\",\n    ").concat(buildLocation(e),"\n    ").concat(h?"\"image\":".concat((0,_formatIfArray["default"])(h),","):"","\n    ").concat(f?"\"url\": \"".concat(f,"\","):"","\n    ").concat(g?"\"description\": \"".concat(g,"\","):"","\n    \"name\": \"").concat(b,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(i),key:"jsonld-event"}))},_default=EventJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/faqPage.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/faqPage.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,buildQuestions=function(a){return"\n  ".concat(a.map(function(a){return"{\n      \"@type\": \"Question\",\n      \"name\": \"".concat(a.questionName,"\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"").concat(a.acceptedAnswerText,"\"\n      }\n  }")}))},FAQPageJsonLd=function(a){var b=a.mainEntity,c=void 0===b?[]:b,d="{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [".concat(buildQuestions(c),"]\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(d),key:"jsonld-faq-page"}))},_default=FAQPageJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/jobPosting.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/jobPosting.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,buildBaseSalary=function(a){return"\n  \"baseSalary\": {\n    \"@type\": \"MonetaryAmount\",\n    ".concat(a.currency?"\"currency\": \"".concat(a.currency,"\","):"","\n    \"value\": {\n      \"@type\": \"QuantitativeValue\",\n      ").concat(a.value?"\"value\": \"".concat(a.value,"\","):"","\n      ").concat(a.unitText?"\"unitText\": \"".concat(a.unitText,"\""):"","\n    }\n  },\n")},JobPostingJsonLd=function(a){var b=a.baseSalary,c=a.datePosted,d=a.description,e=a.employmentType,f=a.hiringOrganization,g=a.jobLocation,h=a.applicantLocationRequirements,i=a.jobLocationType,j=a.title,k=a.validThrough,l="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"JobPosting\",\n    ".concat(b?buildBaseSalary(b):"","\n    \"datePosted\": \"").concat(c,"\",\n    \"description\": \"").concat(d,"\",\n    ").concat(e?"\"employmentType\": \"".concat(e,"\","):"","\n    \"hiringOrganization\" : {\n      \"@type\" : \"Organization\",\n      \"name\" : \"").concat(f.name,"\",\n      \"sameAs\" : \"").concat(f.sameAs,"\"\n    },\n    \n    \"jobLocation\": {\n      \"@type\": \"Place\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"addressLocality\": \"").concat(g.addressLocality,"\",\n        \"addressRegion\": \"").concat(g.addressRegion,"\",\n        \"postalCode\" : \"").concat(g.postalCode,"\",\n        \"streetAddress\" : \"").concat(g.streetAddress,"\",\n        \"addressCountry\" : \"").concat(g.addressCountry,"\"\n      }\n    },\n    ").concat(h?" \"applicantLocationRequirements\": {\n        \"@type\": \"Country\",\n        \"name\": \"".concat(h,"\"\n    },"):"","\n    ").concat(i?"\"jobLocationType\": \"".concat(i,"\","):"","\n    ").concat(k?"\"validThrough\": \"".concat(k,"\","):"","\n    \"title\": \"").concat(j,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(l),key:"jsonld-jobPosting"}))},_default=JobPostingJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/localBusiness.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/localBusiness.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),_formatIfArray=_interopRequireDefault(__webpack_require__(/*! ../utils/formatIfArray */ "../../node_modules/next-seo/lib/utils/formatIfArray.js")),_buildAddress=_interopRequireDefault(__webpack_require__(/*! ../utils/buildAddress */ "../../node_modules/next-seo/lib/utils/buildAddress.js")),__jsx=_react["default"].createElement,buildGeo=function(a){return"\n  \"geo\": {\n    \"@type\": \"GeoCoordinates\",\n    \"latitude\": \"".concat(a.latitude,"\",\n    \"longitude\": \"").concat(a.longitude,"\"\n  },\n")},buildRating=function(a){return"\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"".concat(a.ratingValue,"\",\n    \"ratingCount\": \"").concat(a.ratingCount,"\"\n  },\n")},buildOpeningHours=function(a){return"\n  {\n    \"@type\": \"OpeningHoursSpecification\",\n    \"opens\": \"".concat(a.opens,"\",\n    \"closes\": \"").concat(a.closes,"\",\n    ").concat(a.dayOfWeek?"\"dayOfWeek\": ".concat((0,_formatIfArray["default"])(a.dayOfWeek),","):"","\n    ").concat(a.validFrom?"\"validFrom\": \"".concat(a.validFrom,"\","):"","\n    ").concat(a.validThrough?"\"validThrough\": \"".concat(a.validThrough,"\""):"","\n  }\n")},LocalBusinessJsonLd=function(a){var b=a.type,c=a.id,d=a.name,e=a.description,f=a.url,g=a.telephone,h=a.address,i=a.geo,j=a.images,k=a.rating,l=a.priceRange,m=a.sameAs,n=a.openingHours,o="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"".concat(b,"\",\n    \"@id\": \"").concat(c,"\",\n    ").concat(e?"\"description\": \"".concat(e,"\","):"","\n    ").concat(f?"\"url\": \"".concat(f,"\","):"","\n    ").concat(g?"\"telephone\": \"".concat(g,"\","):"","\n    ").concat((0,_buildAddress["default"])(h),"\n    ").concat(i?"".concat(buildGeo(i)):"","\n    ").concat(k?"".concat(buildRating(k)):"","\n    ").concat(l?"\"priceRange\": \"".concat(l,"\","):"","\n    \"image\":").concat((0,_formatIfArray["default"])(j),",\n    ").concat(m?"\"sameAs\": [".concat(m.map(function(a){return"\"".concat(a,"\"")}),"],"):"","\n    ").concat(n?"\"openingHoursSpecification\": ".concat(Array.isArray(n)?"[".concat(n.map(function(a){return"".concat(buildOpeningHours(a))}),"]"):buildOpeningHours(n),","):"","\n    \"name\": \"").concat(d,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(o),key:"jsonld-local-business"}))},_default=LocalBusinessJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/logo.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/logo.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,LogoJsonLd=function(a){var b=a.url,c=a.logo,d="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"".concat(b,"\",\n    \"logo\": \"").concat(c,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(d),key:"jsonld-logo"}))},_default=LogoJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/newsarticle.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/newsarticle.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,NewsArticleJsonLd=function(a){var b=a.url,c=a.title,d=a.images,e=void 0===d?[]:d,f=a.section,g=a.keywords,h=a.datePublished,i=a.dateCreated,j=void 0===i?null:i,k=a.dateModified,l=void 0===k?null:k,m=a.authorName,n=a.description,o=a.body,p=a.publisherName,q=a.publisherLogo,r="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"NewsArticle\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"".concat(b,"\"\n    },\n    \"headline\": \"").concat(c,"\",\n    \"image\": [\n      ").concat(e.map(function(a){return"\"".concat(a,"\"")}),"\n     ],\n    \"articleSection\":\"").concat(f,"\",\n    \"keywords\": \"").concat(g,"\",    \n    \"datePublished\": \"").concat(h,"\",\n    \"dateCreated\": \"").concat(j||h,"\",\n    \"dateModified\": \"").concat(l||h,"\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"").concat(m,"\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"").concat(p,"\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"").concat(q,"\"\n      }\n    },\n    \"description\": \"").concat(n,"\",\n    \"articleBody\": \"").concat(o,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(r),key:"jsonld-newsarticle"}))},_default=NewsArticleJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/product.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/product.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),_formatIfArray=_interopRequireDefault(__webpack_require__(/*! ../utils/formatIfArray */ "../../node_modules/next-seo/lib/utils/formatIfArray.js")),__jsx=_react["default"].createElement,buildBrand=function(a){return"\n  \"brand\": {\n      \"@type\": \"Thing\",\n      \"name\": \"".concat(a,"\"\n    },\n")},buildReviewRating=function(a){return a?"\"reviewRating\": {\n          \"@type\": \"Rating\",\n          ".concat(a.bestRating?"\"bestRating\": \"".concat(a.bestRating,"\","):"","\n          ").concat(a.worstRating?"\"worstRating\": \"".concat(a.worstRating,"\","):"","\n          \"ratingValue\": \"").concat(a.ratingValue,"\"\n        }"):""},buildAuthor=function(a){return"\n  \"author\": {\n      \"@type\": \"".concat(a.type,"\",\n      \"name\": \"").concat(a.name,"\"\n  },\n")},buildPublisher=function(a){return"\n  \"publisher\": {\n      \"@type\": \"".concat(a.type,"\",\n      \"name\": \"").concat(a.name,"\"\n  },\n")},buildReviews=function(a){return"\n\"review\": [\n  ".concat(a.map(function(a){return"{\n      \"@type\": \"Review\",\n      ".concat(a.author?buildAuthor(a.author):"","\n      ").concat(a.publisher?buildPublisher(a.publisher):"","\n      ").concat(a.datePublished?"\"datePublished\": \"".concat(a.datePublished,"\","):"","\n      ").concat(a.reviewBody?"\"reviewBody\": \"".concat(a.reviewBody,"\","):"","\n      ").concat(a.name?"\"name\": \"".concat(a.name,"\","):"","\n      ").concat(buildReviewRating(a.reviewRating),"\n  }")}),"],")},buildAggregateRating=function(a){return"\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"".concat(a.ratingValue,"\",\n      \"reviewCount\": \"").concat(a.reviewCount,"\"\n    },\n")},buildOffers=function(a){return"\n  {\n    \"@type\": \"Offer\",\n    \"priceCurrency\": \"".concat(a.priceCurrency,"\",\n    ").concat(a.priceValidUntil?"\"priceValidUntil\": \"".concat(a.priceValidUntil,"\","):"","\n    ").concat(a.itemCondition?"\"itemCondition\": \"".concat(a.itemCondition,"\","):"","\n    ").concat(a.availability?"\"availability\": \"".concat(a.availability,"\","):"","\n    ").concat(a.url?"\"url\": \"".concat(a.url,"\","):"","\n    ").concat(a.seller?"\n      \"seller\": {\n      \"@type\": \"Organization\",\n      \"name\": \"".concat(a.seller.name,"\"\n    },\n    "):"","\n    \"price\": \"").concat(a.price,"\"\n  }\n")},ProductJsonLd=function(a){var b=a.productName,c=a.images,d=void 0===c?[]:c,e=a.description,f=a.sku,g=a.gtin8,h=a.gtin13,i=a.gtin14,j=a.mpn,k=a.brand,l=a.reviews,m=void 0===l?[]:l,n=a.aggregateRating,o=a.offers,p="{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"Product\",\n    \"image\":".concat((0,_formatIfArray["default"])(d),",\n    ").concat(e?"\"description\": \"".concat(e,"\","):"","\n    ").concat(j?"\"mpn\": \"".concat(j,"\","):"","\n    ").concat(f?"\"sku\": \"".concat(f,"\","):"","\n    ").concat(g?"\"gtin8\": \"".concat(g,"\","):"","\n    ").concat(h?"\"gtin13\": \"".concat(h,"\","):"","\n    ").concat(i?"\"gtin14\": \"".concat(i,"\","):"","\n    ").concat(k?buildBrand(k):"","\n    ").concat(m.length?buildReviews(m):"","\n    ").concat(n?buildAggregateRating(n):"","\n    ").concat(o?"\"offers\": ".concat(Array.isArray(o)?"[".concat(o.map(function(a){return"".concat(buildOffers(a))}),"]"):buildOffers(o),","):"","\n    \"name\": \"").concat(b,"\"\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(p),key:"jsonld-product"}))},_default=ProductJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/jsonld/socialProfile.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/jsonld/socialProfile.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_markup=_interopRequireDefault(__webpack_require__(/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js")),__jsx=_react["default"].createElement,SocialProfileJsonLd=function(a){var b=a.type,c=a.name,d=a.url,e=a.sameAs,f=void 0===e?[]:e,g="{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"".concat(b,"\",\n    \"name\": \"").concat(c,"\",\n    \"url\": \"").concat(d,"\",\n    \"sameAs\": [\n      ").concat(f.map(function(a){return"\"".concat(a,"\"")}),"\n     ]\n  }");return _react["default"].createElement(_head["default"],null,_react["default"].createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,_markup["default"])(g),key:"jsonld-social"}))},_default=SocialProfileJsonLd;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/meta/buildTags.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/meta/buildTags.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js")),_react=_interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),__jsx=_react["default"].createElement,defaults={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},buildTags=function(a){var b=[];a.titleTemplate&&(defaults.templateTitle=a.titleTemplate);var c="";a.title&&(c=a.title,defaults.templateTitle&&(c=defaults.templateTitle.replace(/%s/g,function(){return c})),b.push(_react["default"].createElement("title",{key:"title"},c)));var d=a.noindex||defaults.noindex||a.dangerouslySetAllPagesToNoIndex,e=a.nofollow||defaults.nofollow||a.dangerouslySetAllPagesToNoFollow;if(d||e?(a.dangerouslySetAllPagesToNoIndex&&(defaults.noindex=!0),a.dangerouslySetAllPagesToNoFollow&&(defaults.nofollow=!0),b.push(_react["default"].createElement("meta",{key:"robots",name:"robots",content:"".concat(d?"noindex":"index",",").concat(e?"nofollow":"follow")})),b.push(_react["default"].createElement("meta",{key:"googlebot",name:"googlebot",content:"".concat(d?"noindex":"index",",").concat(e?"nofollow":"follow")}))):(b.push(_react["default"].createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),b.push(_react["default"].createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),a.description&&b.push(_react["default"].createElement("meta",{key:"description",name:"description",content:a.description})),a.mobileAlternate&&b.push(_react["default"].createElement("link",{rel:"alternate",key:"mobileAlternate",media:a.mobileAlternate.media,href:a.mobileAlternate.href})),a.languageAlternates&&0<a.languageAlternates.length&&a.languageAlternates.forEach(function(a){b.push(_react["default"].createElement("link",{rel:"alternate",key:"languageAlternate-".concat(a.hrefLang),hrefLang:a.hrefLang,href:a.href}))}),a.twitter&&(a.twitter.cardType&&b.push(_react["default"].createElement("meta",{key:"twitter:card",name:"twitter:card",content:a.twitter.cardType})),a.twitter.site&&b.push(_react["default"].createElement("meta",{key:"twitter:site",name:"twitter:site",content:a.twitter.site})),a.twitter.handle&&b.push(_react["default"].createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:a.twitter.handle}))),a.facebook&&a.facebook.appId&&b.push(_react["default"].createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:a.facebook.appId})),a.openGraph){if((a.openGraph.url||a.canonical)&&b.push(_react["default"].createElement("meta",{key:"og:url",property:"og:url",content:a.openGraph.url||a.canonical})),a.openGraph.type){var f=a.openGraph.type.toLowerCase();b.push(_react["default"].createElement("meta",{key:"og:type",property:"og:type",content:f})),"profile"===f&&a.openGraph.profile?(a.openGraph.profile.firstName&&b.push(_react["default"].createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:a.openGraph.profile.firstName})),a.openGraph.profile.lastName&&b.push(_react["default"].createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:a.openGraph.profile.lastName})),a.openGraph.profile.username&&b.push(_react["default"].createElement("meta",{key:"profile:username",property:"profile:username",content:a.openGraph.profile.username})),a.openGraph.profile.gender&&b.push(_react["default"].createElement("meta",{key:"profile:gender",property:"profile:gender",content:a.openGraph.profile.gender}))):"book"===f&&a.openGraph.book?(a.openGraph.book.authors&&a.openGraph.book.authors.length&&a.openGraph.book.authors.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"book:author:0".concat(c),property:"book:author",content:a}))}),a.openGraph.book.isbn&&b.push(_react["default"].createElement("meta",{key:"book:isbn",property:"book:isbn",content:a.openGraph.book.isbn})),a.openGraph.book.releaseDate&&b.push(_react["default"].createElement("meta",{key:"book:release_date",property:"book:release_date",content:a.openGraph.book.releaseDate})),a.openGraph.book.tags&&a.openGraph.book.tags.length&&a.openGraph.book.tags.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"book:tag:0".concat(c),property:"book:tag",content:a}))})):"article"===f&&a.openGraph.article?(a.openGraph.article.publishedTime&&b.push(_react["default"].createElement("meta",{key:"article:published_time",property:"article:published_time",content:a.openGraph.article.publishedTime})),a.openGraph.article.modifiedTime&&b.push(_react["default"].createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:a.openGraph.article.modifiedTime})),a.openGraph.article.expirationTime&&b.push(_react["default"].createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:a.openGraph.article.expirationTime})),a.openGraph.article.authors&&a.openGraph.article.authors.length&&a.openGraph.article.authors.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"article:author:0".concat(c),property:"article:author",content:a}))}),a.openGraph.article.section&&b.push(_react["default"].createElement("meta",{key:"article:section",property:"article:section",content:a.openGraph.article.section})),a.openGraph.article.tags&&a.openGraph.article.tags.length&&a.openGraph.article.tags.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"article:tag:0".concat(c),property:"article:tag",content:a}))})):("video.movie"===f||"video.episode"===f||"video.tv_show"===f||"video.other"===f)&&a.openGraph.video&&(a.openGraph.video.actors&&a.openGraph.video.actors.length&&a.openGraph.video.actors.forEach(function(a,c){a.profile&&b.push(_react["default"].createElement("meta",{key:"video:actor:0".concat(c),property:"video:actor",content:a.profile})),a.role&&b.push(_react["default"].createElement("meta",{key:"video:actor:role:0".concat(c),property:"video:actor:role",content:a.role}))}),a.openGraph.video.directors&&a.openGraph.video.directors.length&&a.openGraph.video.directors.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"video:director:0".concat(c),property:"video:director",content:a}))}),a.openGraph.video.writers&&a.openGraph.video.writers.length&&a.openGraph.video.writers.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"video:writer:0".concat(c),property:"video:writer",content:a}))}),a.openGraph.video.duration&&b.push(_react["default"].createElement("meta",{key:"video:duration",property:"video:duration",content:a.openGraph.video.duration.toString()})),a.openGraph.video.releaseDate&&b.push(_react["default"].createElement("meta",{key:"video:release_date",property:"video:release_date",content:a.openGraph.video.releaseDate})),a.openGraph.video.tags&&a.openGraph.video.tags.length&&a.openGraph.video.tags.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"video:tag:0".concat(c),property:"video:tag",content:a}))}),a.openGraph.video.series&&b.push(_react["default"].createElement("meta",{key:"video:series",property:"video:series",content:a.openGraph.video.series})))}(a.openGraph.title||a.title)&&b.push(_react["default"].createElement("meta",{key:"og:title",property:"og:title",content:a.openGraph.title||c})),(a.openGraph.description||a.description)&&b.push(_react["default"].createElement("meta",{key:"og:description",property:"og:description",content:a.openGraph.description||a.description})),a.defaultOpenGraphImageWidth&&(defaults.defaultOpenGraphImageWidth=a.defaultOpenGraphImageWidth),a.defaultOpenGraphImageHeight&&(defaults.defaultOpenGraphImageHeight=a.defaultOpenGraphImageHeight),a.openGraph.images&&a.openGraph.images.length&&a.openGraph.images.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"og:image:0".concat(c),property:"og:image",content:a.url})),a.alt&&b.push(_react["default"].createElement("meta",{key:"og:image:alt0".concat(c),property:"og:image:alt",content:a.alt})),a.width?b.push(_react["default"].createElement("meta",{key:"og:image:width0".concat(c),property:"og:image:width",content:a.width.toString()})):defaults.defaultOpenGraphImageWidth&&b.push(_react["default"].createElement("meta",{key:"og:image:width0".concat(c),property:"og:image:width",content:defaults.defaultOpenGraphImageWidth.toString()})),a.height?b.push(_react["default"].createElement("meta",{key:"og:image:height".concat(c),property:"og:image:height",content:a.height.toString()})):defaults.defaultOpenGraphImageHeight&&b.push(_react["default"].createElement("meta",{key:"og:image:height".concat(c),property:"og:image:height",content:defaults.defaultOpenGraphImageHeight.toString()}))}),a.defaultOpenGraphVideoWidth&&(defaults.defaultOpenGraphVideoWidth=a.defaultOpenGraphVideoWidth),a.defaultOpenGraphVideoHeight&&(defaults.defaultOpenGraphVideoHeight=a.defaultOpenGraphVideoHeight),a.openGraph.videos&&a.openGraph.videos.length&&a.openGraph.videos.forEach(function(a,c){b.push(_react["default"].createElement("meta",{key:"og:video:0".concat(c),property:"og:video",content:a.url})),a.alt&&b.push(_react["default"].createElement("meta",{key:"og:video:alt0".concat(c),property:"og:video:alt",content:a.alt})),a.width?b.push(_react["default"].createElement("meta",{key:"og:video:width0".concat(c),property:"og:video:width",content:a.width.toString()})):defaults.defaultOpenGraphVideoWidth&&b.push(_react["default"].createElement("meta",{key:"og:video:width0".concat(c),property:"og:video:width",content:defaults.defaultOpenGraphVideoWidth.toString()})),a.height?b.push(_react["default"].createElement("meta",{key:"og:video:height".concat(c),property:"og:video:height",content:a.height.toString()})):defaults.defaultOpenGraphVideoHeight&&b.push(_react["default"].createElement("meta",{key:"og:video:height".concat(c),property:"og:video:height",content:defaults.defaultOpenGraphVideoHeight.toString()}))}),a.openGraph.locale&&b.push(_react["default"].createElement("meta",{key:"og:locale",property:"og:locale",content:a.openGraph.locale})),a.openGraph.site_name&&b.push(_react["default"].createElement("meta",{key:"og:site_name",property:"og:site_name",content:a.openGraph.site_name}))}return a.canonical&&b.push(_react["default"].createElement("link",{rel:"canonical",href:a.canonical,key:"canonical"})),a.additionalMetaTags&&0<a.additionalMetaTags.length&&a.additionalMetaTags.forEach(function(a){b.push(_react["default"].createElement("meta",(0,_extends2["default"])({key:a.name?a.name:a.property},a)))}),b},_default=buildTags;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/meta/defaultSEO.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/meta/defaultSEO.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),_interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_react=_interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_buildTags=_interopRequireDefault(__webpack_require__(/*! ./buildTags */ "../../node_modules/next-seo/lib/meta/buildTags.js")),__jsx=_react["default"].createElement,_default=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2["default"])(this,b),(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(b).apply(this,arguments))}return(0,_inherits2["default"])(b,a),(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this.props,b=a.title,c=a.titleTemplate,d=a.dangerouslySetAllPagesToNoIndex,e=a.dangerouslySetAllPagesToNoFollow,f=a.description,g=a.canonical,h=a.facebook,i=a.openGraph,j=a.additionalMetaTags,k=a.twitter,l=a.defaultOpenGraphImageWidth,m=a.defaultOpenGraphImageHeight,n=a.defaultOpenGraphVideoWidth,o=a.defaultOpenGraphVideoHeight,p=a.mobileAlternate,q=a.languageAlternates;return _react["default"].createElement(_head["default"],null,(0,_buildTags["default"])({title:b,titleTemplate:c,dangerouslySetAllPagesToNoIndex:void 0!==d&&d,dangerouslySetAllPagesToNoFollow:void 0!==e&&e,description:f,canonical:g,facebook:h,openGraph:i,additionalMetaTags:j,twitter:k,defaultOpenGraphImageWidth:l,defaultOpenGraphImageHeight:m,defaultOpenGraphVideoWidth:n,defaultOpenGraphVideoHeight:o,mobileAlternate:p,languageAlternates:q}))}}]),b}(_react.Component);exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/meta/nextSEO.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/meta/nextSEO.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),_interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js")),_head=_interopRequireDefault(__webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js")),_react=_interopRequireWildcard(__webpack_require__(/*! react */ "../../node_modules/react/index.js")),_buildTags=_interopRequireDefault(__webpack_require__(/*! ./buildTags */ "../../node_modules/next-seo/lib/meta/buildTags.js")),__jsx=_react["default"].createElement,_default=/*#__PURE__*/function(a){function b(){return(0,_classCallCheck2["default"])(this,b),(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(b).apply(this,arguments))}return(0,_inherits2["default"])(b,a),(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this.props,b=a.title,c=a.noindex,d=a.nofollow,e=a.description,f=a.canonical,g=a.openGraph,h=a.facebook,i=a.twitter,j=a.additionalMetaTags,k=a.titleTemplate,l=a.mobileAlternate,m=a.languageAlternates;return _react["default"].createElement(_head["default"],null,(0,_buildTags["default"])({title:b,noindex:void 0!==c&&c,nofollow:d,description:e,canonical:f,facebook:h,openGraph:g,additionalMetaTags:j,twitter:i,titleTemplate:k,mobileAlternate:l,languageAlternates:m}))}}]),b}(_react.Component);exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/types.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/types.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "../../node_modules/next-seo/lib/utils/buildAddress.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/utils/buildAddress.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default=function(a){return"\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"".concat(a.streetAddress,"\",\n    \"addressLocality\": \"").concat(a.addressLocality,"\",\n    ").concat(a.addressRegion?"\"addressRegion\": \"".concat(a.addressRegion,"\","):"","\n    \"postalCode\": \"").concat(a.postalCode,"\",\n    \"addressCountry\": \"").concat(a.addressCountry,"\"\n  },\n")};exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/utils/formatIfArray.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/utils/formatIfArray.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var formatIfArray=function(a){return Array.isArray(a)?"[".concat(a.map(function(a){return"\"".concat(a,"\"")}),"]"):"\"".concat(a,"\"")},_default=formatIfArray;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next-seo/lib/utils/markup.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next-seo/lib/utils/markup.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var markup=function(a){return{__html:a}},_default=markup;exports["default"]=_default;

/***/ }),

/***/ "../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponents%2Fdummy&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Fcomponents%2Fdummy.mdx!./":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponents%2Fdummy&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Fcomponents%2Fdummy.mdx ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dummy", function() {
      var mod = __webpack_require__(/*! ./src/pages/components/dummy.mdx */ "./src/pages/components/dummy.mdx")
      if(true) {
        module.hot.accept(/*! ./src/pages/components/dummy.mdx */ "./src/pages/components/dummy.mdx", function() {
          if(!next.router.components["/components/dummy"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/components/dummy.mdx */ "./src/pages/components/dummy.mdx")
          next.router.update("/components/dummy", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/amp-context.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/dist/next-server/lib/amp-context.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/amp.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/dist/next-server/lib/amp.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "../../node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/head.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/dist/next-server/lib/head.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "../../node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "../../node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "../../node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "../../node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/side-effect.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/dist/next-server/lib/side-effect.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return (/*#__PURE__*/function (_react_1$Component) {
      _inherits(_class, _react_1$Component);

      _createClass(_class, null, [{
        key: "rewind",
        // Used when server rendering
        value: function rewind() {
          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

        if (isServer) {
          mountedInstances.add(_assertThisInitialized(_this));
          emitChange(_assertThisInitialized(_this));
        }

        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances["delete"](this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return _class;
    }(react_1.Component)
  );
};

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/react/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ../../node_modules/react/index.js from dll-reference dll_36cb91a3dffafa9e9b43 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_36cb91a3dffafa9e9b43 */ "dll-reference dll_36cb91a3dffafa9e9b43"))("../../node_modules/react/index.js");

/***/ }),

/***/ "./src/components/SEO.tsx":
/*!********************************!*\
  !*** ./src/components/SEO.tsx ***!
  \********************************/
/*! exports provided: SEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "../../node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/components/SEO.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SEO = function SEO(_ref) {
  var description = _ref.description,
      title = _ref.title;
  return __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    title: title,
    description: description,
    titleTemplate: "Theme UI Expansion Pack | %s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

/***/ }),

/***/ "./src/pages/components/dummy.mdx":
/*!****************************************!*\
  !*** ./src/pages/components/dummy.mdx ***!
  \****************************************/
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


var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/pages/components/dummy.mdx";
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_SEO__WEBPACK_IMPORTED_MODULE_4__["SEO"], {
    title: "Dummy",
    description: "",
    mdxType: "SEO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Dummy"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Building block for creating skeleton layout."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Import"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), "import { Dummy } from 'theme-ui-expansion-pack';\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Usage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), "<Card>\n  <Text>\n    <Dummy sx={{ width: '500px' }} />\n    <Dummy sx={{ width: '300px' }} />\n    <Dummy sx={{ width: '400px' }} />\n  </Text>\n</Card>\n")));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fcomponents%2Fdummy&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Fcomponents%2Fdummy.mdx ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fcomponents%2Fdummy&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Fcomponents%2Fdummy.mdx! */"../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponents%2Fdummy&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Fcomponents%2Fdummy.mdx!./");


/***/ }),

/***/ "dll-reference dll_36cb91a3dffafa9e9b43":
/*!*******************************************!*\
  !*** external "dll_36cb91a3dffafa9e9b43" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_36cb91a3dffafa9e9b43;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=dummy.js.map