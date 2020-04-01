webpackHotUpdate("static/development/pages/_app.js",{

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
  var title = [props.title, props.pageContext.frontmatter ? props.pageContext.frontmatter.title : false, props._frontmatter ? props._frontmatter.title : false].filter(Boolean).join(' – ');

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

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "../../node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-button */ "./src/components/menu-button.tsx");
/* harmony import */ var _SidebarNavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarNavLink */ "./src/components/SidebarNavLink.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./button */ "./src/components/button.tsx");
/* harmony import */ var _sidebar_mdx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidebar.mdx */ "./src/sidebar.mdx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SideNav */ "./src/components/SideNav.tsx");
/* harmony import */ var _SidebarNavHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarNavHeading */ "./src/components/SidebarNavHeading.tsx");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Head */ "./src/components/Head.tsx");



var _this = undefined,
    _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/components/Layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  var nav = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useColorMode = Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["useColorMode"])(),
      _useColorMode2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useColorMode, 2),
      mode = _useColorMode2[0],
      setMode = _useColorMode2[1];

  var cycleMode = function cycleMode(e) {
    var i = modes.indexOf(mode);
    var next = modes[(i + 1) % modes.length];
    setMode(next);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Styled"].root, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_Head__WEBPACK_IMPORTED_MODULE_11__["Head"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    sx: {
      flexDirection: 'column',
      minHeight: '100vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    as: "header",
    sx: {
      height: 64,
      px: 3,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    sx: {
      alignItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_menu_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      setMenuOpen(function (state) {
        return !state;
      });
      if (!nav.current) return;
      var navLink = nav.current.querySelector('a');
      if (navLink) navLink.focus();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Theme UI Expansion Pack"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    href: "https://github.com/isBatak/theme-ui-expansion-pack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "GitHub"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      ml: 2
    },
    onClick: cycleMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, getModeName(mode)))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: {
      flex: '1 1 auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    sx: {
      display: ['block', 'flex']
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_sidebar_mdx__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["jsx"])("main", {
    id: "content",
    sx: {
      width: '100%',
      minWidth: 0,
      maxWidth: props.fullwidth ? 'none' : 768,
      mx: 'auto',
      px: props.fullwidth ? 0 : 3
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, props.children)))));
};

/***/ })

})
//# sourceMappingURL=_app.js.bc0503b34e6827ae0450.hot-update.js.map