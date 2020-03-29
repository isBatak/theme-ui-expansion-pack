(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

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

/***/ "../../node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "../../node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "../../node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "../../node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "../../node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../../node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "../../node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "../../node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "../../node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "../../node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "../../node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "../../node_modules/@emotion/core/package.json":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/core/package.json ***!
  \*****************************************************************************************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, dependencies, description, devDependencies, files, license, main, module, name, peerDependencies, preconstruct, publishConfig, repository, scripts, types, umd:main, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"@emotion/core@10.0.28\",\"/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack\"]],\"_from\":\"@emotion/core@10.0.28\",\"_id\":\"@emotion/core@10.0.28\",\"_inBundle\":false,\"_integrity\":\"sha512-pH8UueKYO5jgg0Iq+AmCLxBsvuGtvlmiDCOuv8fGNYn3cowFpLN98L8zO56U0H1PjDIyAlXymgL3Wu7u7v6hbA==\",\"_location\":\"/@emotion/core\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@emotion/core@10.0.28\",\"name\":\"@emotion/core\",\"escapedName\":\"@emotion%2fcore\",\"scope\":\"@emotion\",\"rawSpec\":\"10.0.28\",\"saveSpec\":null,\"fetchSpec\":\"10.0.28\"},\"_requiredBy\":[\"/@theme-ui/color-modes\",\"/@theme-ui/components\",\"/@theme-ui/core\",\"/@theme-ui/mdx\",\"/@theme-ui/sidenav\",\"/@theme-ui/theme-provider\",\"/@types/theme-ui__components\"],\"_resolved\":\"https://registry.npmjs.org/@emotion/core/-/core-10.0.28.tgz\",\"_spec\":\"10.0.28\",\"_where\":\"/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack\",\"author\":{\"name\":\"mitchellhamilton\",\"email\":\"mitchell@mitchellhamilton.me\"},\"browser\":{\"./dist/core.cjs.js\":\"./dist/core.browser.cjs.js\",\"./dist/core.esm.js\":\"./dist/core.browser.esm.js\"},\"dependencies\":{\"@babel/runtime\":\"^7.5.5\",\"@emotion/cache\":\"^10.0.27\",\"@emotion/css\":\"^10.0.27\",\"@emotion/serialize\":\"^0.11.15\",\"@emotion/sheet\":\"0.9.4\",\"@emotion/utils\":\"0.11.3\"},\"description\":\"> Simple styling in React.\",\"devDependencies\":{\"@emotion/styled\":\"^10.0.27\",\"@types/react\":\"^16.8.20\",\"dtslint\":\"^0.3.0\",\"emotion\":\"^10.0.27\",\"emotion-server\":\"^10.0.27\",\"emotion-theming\":\"^10.0.27\",\"html-tag-names\":\"^1.1.2\",\"react\":\"^16.5.2\",\"svg-tag-names\":\"^1.1.1\"},\"files\":[\"src\",\"dist\",\"types\"],\"license\":\"MIT\",\"main\":\"dist/core.cjs.js\",\"module\":\"dist/core.esm.js\",\"name\":\"@emotion/core\",\"peerDependencies\":{\"react\":\">=16.3.0\"},\"preconstruct\":{\"umdName\":\"emotionCore\"},\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/emotion-js/emotion/tree/master/packages/core\"},\"scripts\":{\"test:typescript\":\"dtslint types\"},\"types\":\"types/index.d.ts\",\"umd:main\":\"dist/core.umd.min.js\",\"version\":\"10.0.28\"}");

/***/ }),

/***/ "../../node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "../../node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "../../node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../../node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "../../node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "../../node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "../../node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "../../node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "../../node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "../../node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "../../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "../../node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "../../node_modules/@emotion/serialize/dist/serialize.browser.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( true && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( true && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, context, ref) {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if ( true && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(finalTag, newProps);

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),

/***/ "../../node_modules/@emotion/styled/dist/styled.browser.esm.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/styled/dist/styled.browser.esm.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "../../node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"].bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ __webpack_exports__["default"] = (newStyled);


/***/ }),

/***/ "../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "../../node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "../../node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


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

/***/ "../../node_modules/@styled-system/background/dist/index.esm.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/background/dist/index.esm.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: background, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
var background = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (background);


/***/ }),

/***/ "../../node_modules/@styled-system/border/dist/index.esm.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/border/dist/index.esm.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: border, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
config.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
var border = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (border);


/***/ }),

/***/ "../../node_modules/@styled-system/color/dist/index.esm.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/color/dist/index.esm.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: color, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config.bg = config.backgroundColor;
var color = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (color);


/***/ }),

/***/ "../../node_modules/@styled-system/core/dist/index.esm.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/core/dist/index.esm.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: merge, get, createParser, createStyleFunction, system, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return createParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return createStyleFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "system", function() { return system; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "../../node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);

var merge = function merge(a, b) {
  var result = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(result, (_assign = {}, _assign[key] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign2;

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign2 = {}, _assign2[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign3 = {}, _assign3[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};


/***/ }),

/***/ "../../node_modules/@styled-system/css/dist/index.esm.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/css/dist/index.esm.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: get, responsive, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsive", function() { return responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});
var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
        next[media][key] = value[i];
      }
    }

    return next;
  };
};
var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};
/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "../../node_modules/@styled-system/flexbox/dist/index.esm.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/flexbox/dist/index.esm.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: flexbox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return flexbox; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (flexbox);


/***/ }),

/***/ "../../node_modules/@styled-system/grid/dist/index.esm.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/grid/dist/index.esm.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: grid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (grid);


/***/ }),

/***/ "../../node_modules/@styled-system/layout/dist/index.esm.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/layout/dist/index.esm.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");


var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (layout);


/***/ }),

/***/ "../../node_modules/@styled-system/position/dist/index.esm.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/position/dist/index.esm.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: position, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space
  }
};
var position = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (position);


/***/ }),

/***/ "../../node_modules/@styled-system/shadow/dist/index.esm.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/shadow/dist/index.esm.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: shadow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var shadow = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (shadow);


/***/ }),

/***/ "../../node_modules/@styled-system/should-forward-prop/dist/index.esm.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/should-forward-prop/dist/index.esm.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: props, createShouldForwardProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShouldForwardProp", function() { return createShouldForwardProp; });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../../node_modules/@emotion/memoize/dist/memoize.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "../../node_modules/styled-system/dist/index.esm.js");



var all = Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["background"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["buttonStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"]);
var props = all.propNames;
var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
    return Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"])(prop) && !regex.test(prop);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createShouldForwardProp(props));


/***/ }),

/***/ "../../node_modules/@styled-system/space/dist/index.esm.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/space/dist/index.esm.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: margin, padding, space, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber(n)) {
    return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.margin);
var padding = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.padding);
var space = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"])(margin, padding);
/* harmony default export */ __webpack_exports__["default"] = (space);


/***/ }),

/***/ "../../node_modules/@styled-system/typography/dist/index.esm.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/typography/dist/index.esm.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: typography, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (typography);


/***/ }),

/***/ "../../node_modules/@styled-system/variant/dist/index.esm.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/@styled-system/variant/dist/index.esm.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: variant, default, buttonStyle, textStyle, colorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return textStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "../../node_modules/@styled-system/css/dist/index.esm.js");


var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parser;
};
/* harmony default export */ __webpack_exports__["default"] = (variant);
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});


/***/ }),

/***/ "../../node_modules/deepmerge/dist/cjs.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/deepmerge/dist/cjs.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "../../node_modules/next/dist/build/polyfills/object-assign.js":
/*!***************************************************************************************************************************!*\
  !*** delegated ../../node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_36cb91a3dffafa9e9b43 ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_36cb91a3dffafa9e9b43 */ "dll-reference dll_36cb91a3dffafa9e9b43"))("../../node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Findex.mdx!./":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Findex.mdx ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./src/pages/index.mdx */ "./src/pages/index.mdx")
      if(true) {
        module.hot.accept(/*! ./src/pages/index.mdx */ "./src/pages/index.mdx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/index.mdx */ "./src/pages/index.mdx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "../../node_modules/react/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ../../node_modules/react/index.js from dll-reference dll_36cb91a3dffafa9e9b43 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_36cb91a3dffafa9e9b43 */ "dll-reference dll_36cb91a3dffafa9e9b43"))("../../node_modules/react/index.js");

/***/ }),

/***/ "../../node_modules/styled-system/dist/index.esm.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/styled-system/dist/index.esm.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: get, createParser, createStyleFunction, compose, system, margin, padding, space, color, layout, typography, flexbox, border, background, position, grid, shadow, boxShadow, textShadow, variant, buttonStyle, textStyle, colorStyle, borders, width, height, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, display, overflow, overflowX, overflowY, opacity, fontSize, fontFamily, fontWeight, lineHeight, textAlign, fontStyle, letterSpacing, alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, borderWidth, borderStyle, borderColor, borderTop, borderRight, borderBottom, borderLeft, borderRadius, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, zIndex, top, right, bottom, left, style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return minHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return maxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return maxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlign", function() { return verticalAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflowX", function() { return overflowX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflowY", function() { return overflowY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return textAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return fontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return letterSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return alignItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return alignContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return justifyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return justifyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return flexWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return flexDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return flexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return flexShrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return flexBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return justifySelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return alignSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return gridGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return gridColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return gridRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return gridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return gridAutoFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return gridAutoColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return gridAutoRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return gridTemplateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return gridTemplateRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return gridTemplateAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return gridArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImage", function() { return backgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundSize", function() { return backgroundSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundPosition", function() { return backgroundPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundRepeat", function() { return backgroundRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return zIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "../../node_modules/@styled-system/core/dist/index.esm.js");
/* harmony import */ var _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/layout */ "../../node_modules/@styled-system/layout/dist/index.esm.js");
/* harmony import */ var _styled_system_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/color */ "../../node_modules/@styled-system/color/dist/index.esm.js");
/* harmony import */ var _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/typography */ "../../node_modules/@styled-system/typography/dist/index.esm.js");
/* harmony import */ var _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/flexbox */ "../../node_modules/@styled-system/flexbox/dist/index.esm.js");
/* harmony import */ var _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-system/grid */ "../../node_modules/@styled-system/grid/dist/index.esm.js");
/* harmony import */ var _styled_system_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styled-system/border */ "../../node_modules/@styled-system/border/dist/index.esm.js");
/* harmony import */ var _styled_system_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styled-system/background */ "../../node_modules/@styled-system/background/dist/index.esm.js");
/* harmony import */ var _styled_system_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styled-system/position */ "../../node_modules/@styled-system/position/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "system", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"]; });

/* harmony import */ var _styled_system_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styled-system/space */ "../../node_modules/@styled-system/space/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["margin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["padding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["space"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["layout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["typography"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["flexbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "border", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["border"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "background", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["background"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["grid"]; });

/* harmony import */ var _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @styled-system/shadow */ "../../node_modules/@styled-system/shadow/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["shadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @styled-system/variant */ "../../node_modules/@styled-system/variant/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["variant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["buttonStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["textStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["colorStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

 // v4 api shims






















var width = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].width,
    height = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].height,
    minWidth = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].minWidth,
    minHeight = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].minHeight,
    maxWidth = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].maxWidth,
    maxHeight = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].maxHeight,
    size = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].size,
    verticalAlign = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].verticalAlign,
    display = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].display,
    overflow = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflow,
    overflowX = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflowX,
    overflowY = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflowY;
var opacity = _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["default"].opacity;
var fontSize = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontSize,
    fontFamily = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily,
    fontWeight = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontWeight,
    lineHeight = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeight,
    textAlign = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].textAlign,
    fontStyle = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontStyle,
    letterSpacing = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].letterSpacing;
var alignItems = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignItems,
    alignContent = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignContent,
    justifyItems = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifyItems,
    justifyContent = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifyContent,
    flexWrap = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexWrap,
    flexDirection = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexDirection,
    flex = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flex,
    flexGrow = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexGrow,
    flexShrink = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexShrink,
    flexBasis = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexBasis,
    justifySelf = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifySelf,
    alignSelf = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignSelf,
    order = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].order;
var gridGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridGap,
    gridColumnGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridColumnGap,
    gridRowGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridRowGap,
    gridColumn = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridColumn,
    gridRow = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridRow,
    gridAutoFlow = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoFlow,
    gridAutoColumns = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoColumns,
    gridAutoRows = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoRows,
    gridTemplateColumns = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateColumns,
    gridTemplateRows = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateRows,
    gridTemplateAreas = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateAreas,
    gridArea = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridArea;
var borderWidth = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderWidth,
    borderStyle = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderStyle,
    borderColor = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderColor,
    borderTop = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderTop,
    borderRight = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderRight,
    borderBottom = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderBottom,
    borderLeft = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderLeft,
    borderRadius = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderRadius;
var backgroundImage = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundImage,
    backgroundSize = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundSize,
    backgroundPosition = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundPosition,
    backgroundRepeat = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundRepeat;
var zIndex = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].zIndex,
    top = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].top,
    right = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].right,
    bottom = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].bottom,
    left = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].left;

 // v4 style API shim

var style = function style(_ref) {
  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      transformValue = _ref.transformValue,
      scale = _ref.scale,
      properties = _ref.properties;
  var config = {};
  config[prop] = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"])({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parse;
};


/***/ }),

/***/ "../../node_modules/theme-ui/dist/index.esm.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/theme-ui/dist/index.esm.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: jsx, Context, merge, useThemeUI, useColorMode, InitializeColorMode, Styled, components, ThemeProvider, Box, Flex, Grid, Button, Link, Text, Heading, Image, Card, Label, Input, Select, Textarea, Radio, Checkbox, Slider, Field, Progress, Donut, Spinner, Avatar, Badge, Close, Alert, Divider, Embed, AspectRatio, AspectImage, Container, NavLink, Message, IconButton, MenuButton, css, get, BaseStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStyles", function() { return BaseStyles; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "../../node_modules/theme-ui/node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThemeUI", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["useThemeUI"]; });

/* harmony import */ var _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/color-modes */ "../../node_modules/theme-ui/node_modules/@theme-ui/color-modes/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useColorMode", function() { return _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__["useColorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitializeColorMode", function() { return _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__["InitializeColorMode"]; });

/* harmony import */ var _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/mdx */ "../../node_modules/theme-ui/node_modules/@theme-ui/mdx/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Styled", function() { return _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["Styled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["components"]; });

/* harmony import */ var _theme_ui_theme_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/theme-provider */ "../../node_modules/theme-ui/node_modules/@theme-ui/theme-provider/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _theme_ui_theme_provider__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"]; });

/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @theme-ui/components */ "../../node_modules/theme-ui/node_modules/@theme-ui/components/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Box"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Flex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Heading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Donut", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Donut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Avatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Badge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Divider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Embed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AspectRatio", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["AspectRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AspectImage", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["AspectImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Container"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["NavLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["MenuButton"]; });

/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @theme-ui/css */ "../../node_modules/theme-ui/node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__["get"]; });









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

var BaseStyles = function BaseStyles(props) {
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])('div', _objectSpread2({}, props, {
    sx: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      variant: 'styles'
    }
  }));
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../../node_modules/theme-ui/node_modules/@theme-ui/color-modes/dist/index.esm.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/theme-ui/node_modules/@theme-ui/color-modes/dist/index.esm.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: useColorMode, ColorModeProvider, InitializeColorMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useColorMode", function() { return useColorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModeProvider", function() { return ColorModeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeColorMode", function() { return InitializeColorMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/core */ "../../node_modules/theme-ui/node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "../../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/css */ "../../node_modules/theme-ui/node_modules/@theme-ui/css/dist/index.esm.js");





var toVarName = function (key) { return ("--theme-ui-" + key); };

var toVarValue = function (key, value) { return ("var(" + (toVarName(key)) + ", " + value + ")"); };

var join = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.filter(Boolean).join('-');
};

var numberScales = {
  fontWeights: true,
  lineHeights: true
};
var reservedKeys = {
  useCustomProperties: true,
  initialColorModeName: true,
  initialColorMode: true
};

var toPixel = function (key, value) {
  if (typeof value !== 'number') { return value; }
  if (numberScales[key]) { return value; }
  return value + 'px';
}; // convert theme values to custom properties


var toCustomProperties = function (obj, parent, themeKey) {
  var next = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    var value = obj[key];
    var name = join(parent, key);

    if (value && typeof value === 'object') {
      next[key] = toCustomProperties(value, name, key);
      continue;
    }

    if (reservedKeys[key]) {
      next[key] = value;
      continue;
    }

    var val = toPixel(themeKey || key, value);
    next[key] = toVarValue(name, val);
  }

  return next;
};
var objectToVars = function (parent, obj) {
  var vars = {};

  for (var key in obj) {
    if (key === 'modes') { continue; }
    var name = join(parent, key);
    var value = obj[key];

    if (value && typeof value === 'object') {
      vars = Object.assign({}, vars,
        objectToVars(name, value));
    } else {
      vars[toVarName(name)] = value;
    }
  }

  return vars;
}; // create body styles for color modes

var createColorStyles = function (theme) {
  if ( theme === void 0 ) theme = {};

  if (!theme.colors || theme.useBodyStyles === false) { return {}; }

  if (theme.useCustomProperties === false || !theme.colors.modes) {
    return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
      body: {
        color: 'text',
        bg: 'background'
      }
    })(theme);
  }

  var colors = theme.rawColors || theme.colors;
  var modes = colors.modes;
  var styles = objectToVars('colors', colors);
  Object.keys(modes).forEach(function (mode) {
    var key = "&.theme-ui-" + mode;
    styles[key] = objectToVars('colors', modes[mode]);
  });
  return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
    body: Object.assign({}, styles,
      {color: 'text',
      bg: 'background'})
  })(theme);
};

var STORAGE_KEY = 'theme-ui-color-mode';
var storage = {
  get: function (init) {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || init;
    } catch (e) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', e);
    }
  },
  set: function (value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', e);
    }
  }
};

var getMediaQuery = function () {
  var darkQuery = '(prefers-color-scheme: dark)';
  var lightQuery = '(prefers-color-scheme: light)';
  var darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
  var lightMQL = window.matchMedia ? window.matchMedia(lightQuery) : {};
  var dark = darkMQL.media === darkQuery && darkMQL.matches;
  if (dark) { return 'dark'; }
  var light = lightMQL.media === lightQuery && lightMQL.matches;
  if (light) { return 'light'; }
  return 'default';
};

var useColorModeState = function (theme) {
  if ( theme === void 0 ) theme = {};

  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(theme.initialColorModeName || 'default');
  var mode = ref[0];
  var setMode = ref[1]; // initialize state

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var stored = storage.get();
    document.body.classList.remove('theme-ui-' + stored);

    if (!stored && theme.useColorSchemeMediaQuery) {
      var query = getMediaQuery();
      setMode(query);
      return;
    }

    if (!stored || stored === mode) { return; }
    setMode(stored);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (!mode) { return; }
    storage.set(mode);
  }, [mode]);

  if (true) {
    if (theme.colors && theme.colors.modes && Object.keys(theme.colors.modes).indexOf(theme.initialColorModeName) > -1) {
      console.warn('The `initialColorModeName` value should be a unique name' + ' and cannot reference a key in `theme.colors.modes`.');
    }
  }

  return [mode, setMode];
};

var useColorMode = function () {
  var ref = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["useThemeUI"])();
  var colorMode = ref.colorMode;
  var setColorMode = ref.setColorMode;

  if (typeof setColorMode !== 'function') {
    throw new Error("[useColorMode] requires the ColorModeProvider component");
  }

  return [colorMode, setColorMode];
};

var applyColorMode = function (theme, mode) {
  if (!mode) { return theme; }
  var modes = Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["get"])(theme, 'colors.modes', {});
  return _theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["merge"].all({}, theme, {
    colors: Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["get"])(modes, mode, {})
  });
};

var BodyStyles = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["Global"], {
  styles: function (theme) { return createColorStyles(theme); }
}); };

var ColorModeProvider = function (ref) {
  var children = ref.children;

  var outer = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["useThemeUI"])();
  var ref$1 = useColorModeState(outer.theme);
  var colorMode = ref$1[0];
  var setColorMode = ref$1[1];
  var theme = applyColorMode(outer.theme || {}, colorMode);
  var emotionTheme = Object.assign({}, theme);

  if (theme.useCustomProperties !== false) {
    emotionTheme.colors = toCustomProperties(emotionTheme.colors, 'colors');
  }

  var context = Object.assign({}, outer,
    {theme: theme,
    colorMode: colorMode,
    setColorMode: setColorMode});
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Provider, {
    value: emotionTheme
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["Context"].Provider, {
    value: context
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BodyStyles, {
    key: 'color-mode'
  }), children));
};
var noflash = "(function() { try {\n  var mode = localStorage.getItem('theme-ui-color-mode');\n  if (!mode) return\n  document.body.classList.add('theme-ui-' + mode);\n} catch (e) {} })();";
var InitializeColorMode = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])('script', {
  key: 'theme-ui-no-flash',
  dangerouslySetInnerHTML: {
    __html: noflash
  }
}); };


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../../node_modules/theme-ui/node_modules/@theme-ui/components/dist/index.esm.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/theme-ui/node_modules/@theme-ui/components/dist/index.esm.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: Box, Flex, Grid, Button, Link, Text, Heading, Image, Card, Label, Input, Select, Textarea, Radio, Checkbox, Slider, Field, Progress, Donut, Spinner, Avatar, Badge, Close, Alert, Divider, Embed, AspectRatio, AspectImage, Container, NavLink, Message, IconButton, MenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donut", function() { return Donut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return Embed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectRatio", function() { return AspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectImage", function() { return AspectImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/css */ "../../node_modules/theme-ui/node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/should-forward-prop */ "../../node_modules/@styled-system/should-forward-prop/dist/index.esm.js");
/* harmony import */ var _styled_system_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/space */ "../../node_modules/@styled-system/space/dist/index.esm.js");
/* harmony import */ var _styled_system_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/color */ "../../node_modules/@styled-system/color/dist/index.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "../../node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "../../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var shouldForwardProp = Object(_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__["createShouldForwardProp"])(( _styled_system_space__WEBPACK_IMPORTED_MODULE_2__["default"].propNames ).concat( _styled_system_color__WEBPACK_IMPORTED_MODULE_3__["default"].propNames));

var sx = function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(props.sx)(props.theme); };

var base = function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(props.__css)(props.theme); };

var variant = function (ref) {
  var theme = ref.theme;
  var variant = ref.variant;
  var __themeKey = ref.__themeKey; if ( __themeKey === void 0 ) __themeKey = 'variants';

  return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["get"])(theme, __themeKey + '.' + variant, Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["get"])(theme, variant)));
};

var Box = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])('div', {
  shouldForwardProp: shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant, _styled_system_space__WEBPACK_IMPORTED_MODULE_2__["default"], _styled_system_color__WEBPACK_IMPORTED_MODULE_3__["default"], sx, function (props) { return props.css; });

var Flex = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(Box)({
  display: 'flex'
});

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var px = function (n) { return typeof n === 'number' ? n + 'px' : n; };

var widthToColumns = function (width) { return Array.isArray(width) ? width.map(widthToColumns) : !!width && ("repeat(auto-fit, minmax(" + (px(width)) + ", 1fr))"); };

var countToColumns = function (n) { return Array.isArray(n) ? n.map(countToColumns) : !!n && (typeof n === 'number' ? ("repeat(" + n + ", 1fr)") : n); };

var Grid = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var width = ref$1.width;
  var columns = ref$1.columns;
  var gap = ref$1.gap; if ( gap === void 0 ) gap = 3;
  var rest = objectWithoutProperties( ref$1, ["width", "columns", "gap"] );
  var props = rest;

  var gridTemplateColumns = !!width ? widthToColumns(width) : countToColumns(columns);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "grids", __css: {
    display: 'grid',
    gridGap: gap,
    gridTemplateColumns: gridTemplateColumns
  } }));
});

var Button = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "button", variant: "primary" }, props, { __themeKey: "buttons", __css: {
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  fontSize: 'inherit',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  border: 0,
  borderRadius: 4
} })); });

var Link = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "a", variant: "styles.a" }, props, { __themeKey: "links" })); });

var Text = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "text" })); });

var Heading = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "h2", variant: "heading" }, props, { __themeKey: "text", __css: {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
} })); });

var Image = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "img" }, props, { __themeKey: "images", __css: Object.assign({}, {maxWidth: '100%',
  height: 'auto'},
  props.__css) })); });

var Card = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "primary" }, props, { __themeKey: "cards" })); });

var Label = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "label", variant: "label" }, props, { __themeKey: "forms", __css: {
  width: '100%',
  display: 'flex'
} })); });

var Input = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", variant: "input" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent'
} })); });

function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var SVG = (function (ref) {
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1( ref, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size + '', height: size + '', viewBox: "0 0 24 24", fill: "currentcolor" }, props));
});

var getProps = function (test) { return function (props) {
  var next = {};

  for (var key in props) {
    if (test(key || '')) { next[key] = props[key]; }
  }

  return next;
}; };
var MRE = /^m[trblxy]?$/;
var getMargin = getProps(function (k) { return MRE.test(k); });
var omitMargin = getProps(function (k) { return !MRE.test(k); });

var DownArrow = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M7 10l5 5 5-5z" })
  ); };

var Select = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, getMargin(props), { sx: {
  display: 'flex'
} }),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "select", variant: "select" }, omitMargin(props), { __themeKey: "forms", __css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    bg: 'transparent'
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( DownArrow, { sx: {
    ml: -28,
    alignSelf: 'center',
    pointerEvents: 'none'
  } })
  ); });

var Textarea = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "textarea", variant: "textarea" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent'
} })); });

function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var RadioChecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
  ); };

var RadioUnchecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
  ); };

var RadioIcon = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( RadioChecked, Object.assign({}, props, { __css: {
    display: 'none',
    'input:checked ~ &': {
      display: 'block'
    }
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( RadioUnchecked, Object.assign({}, props, { __css: {
    display: 'block',
    'input:checked ~ &': {
      display: 'none'
    }
  } }))
  ); };

var Radio = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var className = ref$1.className;
  var sx = ref$1.sx;
  var variant = ref$1.variant; if ( variant === void 0 ) variant = 'radio';
  var rest = objectWithoutProperties$2( ref$1, ["className", "sx", "variant"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, null,
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "radio" }, props, { sx: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: 'hidden'
  } })),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: RadioIcon, 'aria-hidden': "true", __themeKey: "forms", variant: variant, className: className, sx: sx, __css: {
    // todo: system props??
    mr: 2,
    borderRadius: 9999,
    color: 'gray',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      bg: 'highlight'
    }
  } })
    );
});

function objectWithoutProperties$3 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CheckboxChecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
  ); };

var CheckboxUnchecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })
  ); };

var CheckboxIcon = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( CheckboxChecked, Object.assign({}, props, { __css: {
    display: 'none',
    'input:checked ~ &': {
      display: 'block'
    }
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( CheckboxUnchecked, Object.assign({}, props, { __css: {
    display: 'block',
    'input:checked ~ &': {
      display: 'none'
    }
  } }))
  ); };

var Checkbox = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var className = ref$1.className;
  var sx = ref$1.sx;
  var variant = ref$1.variant; if ( variant === void 0 ) variant = 'checkbox';
  var rest = objectWithoutProperties$3( ref$1, ["className", "sx", "variant"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, null,
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "checkbox" }, props, { sx: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: 'hidden'
  } })),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: CheckboxIcon, 'aria-hidden': "true", __themeKey: "forms", variant: variant, className: className, sx: sx, __css: {
    mr: 2,
    borderRadius: 4,
    color: 'gray',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      color: 'primary',
      bg: 'highlight'
    }
  } })
    );
});

var thumb = {
  appearance: 'none',
  width: 16,
  height: 16,
  bg: 'currentcolor',
  border: 0,
  borderRadius: 9999,
  variant: 'forms.slider.thumb'
};
var Slider = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "range", variant: "slider" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  height: 4,
  my: 2,
  cursor: 'pointer',
  appearance: 'none',
  borderRadius: 9999,
  color: 'inherit',
  bg: 'gray',
  ':focus': {
    outline: 'none',
    color: 'primary'
  },
  '&::-webkit-slider-thumb': thumb,
  '&::-moz-range-thumb': thumb,
  '&::-ms-thumb': thumb
} })); });

function objectWithoutProperties$4 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Field = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var Control = ref$1.as; if ( Control === void 0 ) Control = Input;
  var label = ref$1.label;
  var name = ref$1.name;
  var rest = objectWithoutProperties$4( ref$1, ["as", "label", "name"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, getMargin(props),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Label, { htmlFor: name }, label),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Control, Object.assign({}, { ref: ref, id: name, name: name }, omitMargin(props)))
      );
});

var Progress = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "progress", variant: "styles.progress" }, props, { __css: {
  display: 'block',
  width: '100%',
  height: '4px',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  appearance: 'none',
  color: 'primary',
  bg: 'gray',
  borderRadius: 9999,
  border: 'none',
  '&::-webkit-progress-bar': {
    bg: 'transparent'
  },
  '&::-webkit-progress-value': {
    bg: 'currentcolor'
  },
  '&::-moz-progress-bar': {
    bg: 'currentcolor'
  }
} })); });

function objectWithoutProperties$5 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Donut = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 128;
  var strokeWidth = ref$1.strokeWidth; if ( strokeWidth === void 0 ) strokeWidth = 2;
  var value = ref$1.value; if ( value === void 0 ) value = 0;
  var min = ref$1.min; if ( min === void 0 ) min = 0;
  var max = ref$1.max; if ( max === void 0 ) max = 1;
  var title = ref$1.title;
  var rest = objectWithoutProperties$5( ref$1, ["size", "strokeWidth", "value", "min", "max", "title"] );
  var props = rest;

  var r = 16 - strokeWidth;
  var C = 2 * r * Math.PI;
  var offset = C - (value - min) / (max - min) * C;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "svg", viewBox: "0 0 32 32", width: size, height: size, strokeWidth: strokeWidth, fill: "none", stroke: "currentcolor", role: "img", 'aria-valuenow': value, 'aria-valuemin': min, 'aria-valuemax': max }, props, { __css: {
    color: 'primary'
  } }),
        title && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'title', null, title ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, opacity: 1 / 8 }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, strokeDasharray: C, strokeDashoffset: offset, transform: "rotate(-90 16 16)" })
      );
});

function objectWithoutProperties$6 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var spin = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["keyframes"])({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});
var Spinner = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 48;
  var strokeWidth = ref$1.strokeWidth; if ( strokeWidth === void 0 ) strokeWidth = 4;
  var title = ref$1.title; if ( title === void 0 ) title = 'Loading...';
  var duration = ref$1.duration; if ( duration === void 0 ) duration = 500;
  var rest = objectWithoutProperties$6( ref$1, ["size", "strokeWidth", "max", "title", "duration"] );
  var props = rest;

  var r = 16 - strokeWidth;
  var C = 2 * r * Math.PI;
  var offset = C - 1 / 4 * C;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "svg", viewBox: "0 0 32 32", width: size, height: size, strokeWidth: strokeWidth, fill: "none", stroke: "currentcolor", role: "img" }, props, { __css: {
    color: 'primary',
    overflow: 'visible'
  } }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'title', null, title ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, opacity: 1 / 8 }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: "circle", cx: 16, cy: 16, r: r, strokeDasharray: C, strokeDashoffset: offset, __css: {
      transformOrigin: '50% 50%',
      animationName: spin.toString(),
      animationTimingFunction: 'linear',
      animationDuration: duration + 'ms',
      animationIterationCount: 'infinite'
    } })
      );
});

function objectWithoutProperties$7 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Avatar = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 48;
  var rest = objectWithoutProperties$7( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Image, Object.assign({}, { ref: ref, width: size, height: size, variant: "avatar" }, props, { __css: {
  borderRadius: 9999
} }));
});

var Badge = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "badges", __css: {
  display: 'inline-block',
  verticalAlign: 'baseline',
  fontSize: 0,
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  px: 1,
  borderRadius: 2,
  color: 'white',
  bg: 'primary'
} })); });

function objectWithoutProperties$8 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var IconButton = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 32;
  var rest = objectWithoutProperties$8( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "button", variant: "icon" }, props, { __themeKey: "buttons", __css: {
  appearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 1,
  width: size,
  height: size,
  color: 'inherit',
  bg: 'transparent',
  border: 'none',
  borderRadius: 4
} }));
});

function objectWithoutProperties$9 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var x = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentcolor", viewBox: "0 0 24 24" },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
  );
var Close = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var rest = objectWithoutProperties$9( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( IconButton, Object.assign({}, { ref: ref, title: "Close", 'aria-label': "Close", variant: "close" }, props, { children: x }));
});

var Alert = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "alerts", __css: {
  display: 'flex',
  alignItems: 'center',
  px: 3,
  py: 2,
  fontWeight: 'bold',
  color: 'white',
  bg: 'primary',
  borderRadius: 4
} })); });

var Divider = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "hr", variant: "styles.hr" }, props, { __css: {
  color: 'gray',
  m: 0,
  my: 2,
  border: 0,
  borderBottom: '1px solid'
} })); });

function objectWithoutProperties$a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Embed = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio; if ( ratio === void 0 ) ratio = 16 / 9;
  var src = ref$1.src;
  var frameBorder = ref$1.frameBorder; if ( frameBorder === void 0 ) frameBorder = 0;
  var allowFullScreen = ref$1.allowFullScreen; if ( allowFullScreen === void 0 ) allowFullScreen = true;
  var width = ref$1.width; if ( width === void 0 ) width = 560;
  var height = ref$1.height; if ( height === void 0 ) height = 315;
  var allow = ref$1.allow;
  var rest = objectWithoutProperties$a( ref$1, ["ratio", "src", "frameBorder", "allowFullScreen", "width", "height", "allow"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, props, { __css: {
  width: '100%',
  height: 0,
  paddingBottom: 100 / ratio + '%',
  position: 'relative',
  overflow: 'hidden'
} }),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { ref: ref, as: "iframe", src: src, width: width, height: height, frameBorder: frameBorder, allowFullScreen: allowFullScreen, allow: allow, __css: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  } })
    );
});

function objectWithoutProperties$b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var AspectRatio = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio; if ( ratio === void 0 ) ratio = 4 / 3;
  var children = ref$1.children;
  var rest = objectWithoutProperties$b( ref$1, ["ratio", "children"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { ref: ref, sx: {
  position: 'relative',
  overflow: 'hidden'
} },
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { sx: {
    width: '100%',
    height: 0,
    paddingBottom: 100 / ratio + '%'
  } }),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, props, { __css: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  } }),
        children
      )
    );
});

function objectWithoutProperties$c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var AspectImage = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio;
  var rest = objectWithoutProperties$c( ref$1, ["ratio"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( AspectRatio, { ratio: ratio },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Image, Object.assign({}, { ref: ref }, props, { __css: {
    objectFit: 'cover'
  } }))
  );
});

var Container = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "container" }, props, { __themeKey: "layout", __css: {
  width: '100%',
  maxWidth: 'container',
  mx: 'auto'
} })); });

var NavLink = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Link, Object.assign({}, { ref: ref, variant: "nav" }, props, { __css: {
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'inline-block',
  '&:hover, &:focus, &.active': {
    color: 'primary'
  }
} })); });

var Message = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "messages", __css: {
  padding: 3,
  paddingLeft: function (t) { return t.space[3] - t.space[1]; },
  borderLeftWidth: function (t) { return t.space[1]; },
  borderLeftStyle: 'solid',
  borderLeftColor: 'primary',
  borderRadius: 4,
  bg: 'highlight'
} })); });

var MenuIcon = function (ref) {
  var size = ref.size; if ( size === void 0 ) size = 24;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentcolor", viewBox: "0 0 24 24", sx: {
  display: 'block',
  margin: 0
} },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
  );
};
var MenuButton = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( IconButton, Object.assign({}, { ref: ref, title: "Menu", 'aria-label': "Toggle Menu", variant: "menu" }, props),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( MenuIcon, null )
  ); });


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../../node_modules/theme-ui/node_modules/@theme-ui/core/dist/index.esm.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/theme-ui/node_modules/@theme-ui/core/dist/index.esm.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: jsx, Context, useThemeUI, merge, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemeUI", function() { return useThemeUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "../../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/css */ "../../node_modules/theme-ui/node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ "../../node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core/package.json */ "../../node_modules/@emotion/core/package.json");
var _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @emotion/core/package.json */ "../../node_modules/@emotion/core/package.json", 1);






var getCSS = function (props) {
  if (!props.sx && !props.css) { return undefined; }
  return function (theme) {
    var styles = Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["css"])(props.sx)(theme);
    var raw = typeof props.css === 'function' ? props.css(theme) : props.css;
    return [styles, raw];
  };
};

var parseProps = function (props) {
  if (!props) { return null; }
  var next = {};

  for (var key in props) {
    if (key === 'sx') { continue; }
    next[key] = props[key];
  }

  var css$$1 = getCSS(props);
  if (css$$1) { next.css = css$$1; }
  return next;
};

var jsx$1 = function (type, props) {
  var children = [], len = arguments.length - 2;
  while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

  return _emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"].apply(undefined, [type, parseProps(props) ].concat( children));
};
var Context = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({
  __EMOTION_VERSION__: _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4__["version"],
  theme: null
});
var useThemeUI = function () { return react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(Context); };
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
var FORWARD_REF = canUseSymbol ? Symbol.for('react.forward_ref') : 0xeac7;

var isMergeableObject = function (n) {
  return !!n && typeof n === 'object' && n.$$typeof !== REACT_ELEMENT && n.$$typeof !== FORWARD_REF;
};

var arrayMerge = function (destinationArray, sourceArray, options) { return sourceArray; };

var merge = function (a, b) { return deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(a, b, {
  isMergeableObject: isMergeableObject,
  arrayMerge: arrayMerge
}); };

merge.all = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return deepmerge__WEBPACK_IMPORTED_MODULE_3___default.a.all(args, {
  isMergeableObject: isMergeableObject,
  arrayMerge: arrayMerge
});
};

var BaseProvider = function (ref) {
  var context = ref.context;
  var children = ref.children;

  return jsx$1(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["ThemeContext"].Provider, {
  value: context.theme
}, jsx$1(Context.Provider, {
  value: context,
  children: children
}));
};

function ThemeProvider(ref) {
  var theme = ref.theme;
  var children = ref.children;

  var outer = useThemeUI();

  if (true) {
    if (outer.__EMOTION_VERSION__ !== _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4__["version"]) {
      console.warn('Multiple versions of Emotion detected,', 'and theming might not work as expected.', 'Please ensure there is only one copy of @emotion/core installed in your application.');
    }
  }

  var context = typeof theme === 'function' ? Object.assign({}, outer,
    {theme: theme(outer.theme)}) : merge.all({}, outer, {
    theme: theme
  });
  return jsx$1(BaseProvider, {
    context: context
  }, children);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../../node_modules/theme-ui/node_modules/@theme-ui/css/dist/index.esm.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/theme-ui/node_modules/@theme-ui/css/dist/index.esm.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: get, multiples, scales, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiples", function() { return multiples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scales", function() { return scales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
function get(obj, key, def, p, undef) {
  var path = key && typeof key === 'string' ? key.split('.') : [key];

  for (p = 0; p < path.length; p++) {
    obj = obj ? obj[path[p]] : undef;
  }

  return obj === undef ? def : obj;
}
var defaultBreakpoints = [40, 52, 64].map(function (n) { return n + 'em'; });
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function (scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') { return '-' + n; }
  return Number(n) * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var obj;

  return (Object.assign({}, acc,
  ( obj = {}, obj[curr] = positiveOrNegative, obj )));
}, {});

var responsive = function (styles) { return function (theme) {
  var next = {};
  var breakpoints = theme && theme.breakpoints || defaultBreakpoints;
  var mediaQueries = [null ].concat( breakpoints.map(function (n) { return ("@media screen and (min-width: " + n + ")"); }));

  for (var key in styles) {
    var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
    if (value == null) { continue; }

    if (!Array.isArray(value)) {
      next[key] = value;
      continue;
    }

    for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      var media = mediaQueries[i];

      if (!media) {
        next[key] = value[i];
        continue;
      }

      next[media] = next[media] || {};
      if (value[i] == null) { continue; }
      next[media][key] = value[i];
    }
  }

  return next;
}; };

var css = function (args) {
  if ( args === void 0 ) args = {};

  return function (props) {
  if ( props === void 0 ) props = {};

  var theme = Object.assign({}, defaultTheme,
    ('theme' in props ? props.theme : props));
  var result = {};
  var obj = typeof args === 'function' ? args(theme) : args;
  var styles = responsive(obj)(theme);

  for (var key in styles) {
    var x = styles[key];
    var val = typeof x === 'function' ? x(theme) : x;

    if (key === 'variant') {
      var variant = css(get(theme, val))(theme);
      result = Object.assign({}, result,
        variant);
      continue;
    }

    if (val && typeof val === 'object') {
      result[key] = css(val)(theme);
      continue;
    }

    var prop = key in aliases ? aliases[key] : key;
    var scaleName = prop in scales ? scales[prop] : undefined;
    var scale = get(theme, scaleName, get(theme, prop, {}));
    var transform = get(transforms, prop, get);
    var value = transform(scale, val, val);

    if (multiples[prop]) {
      var dirs = multiples[prop];

      for (var i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value;
      }
    } else {
      result[prop] = value;
    }
  }

  return result;
};
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../../node_modules/theme-ui/node_modules/@theme-ui/mdx/dist/index.esm.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/theme-ui/node_modules/@theme-ui/mdx/dist/index.esm.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: themed, Styled, components, MDXProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styled", function() { return Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider$1; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "../../node_modules/theme-ui/node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/css */ "../../node_modules/theme-ui/node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "../../node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "../../node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdx-js/react */ "../../node_modules/@mdx-js/react/dist/esm.js");







var tags = ['p', 'b', 'i', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'pre', 'code', 'ol', 'ul', 'li', 'blockquote', 'hr', 'em', 'table', 'tr', 'th', 'td', 'em', 'strong', 'del', // mdx
'inlineCode', 'thematicBreak', // other
'div', // theme-ui
'root'];
var aliases = {
  inlineCode: 'code',
  thematicBreak: 'hr',
  root: 'div'
};

var alias = function (n) { return aliases[n] || n; };

var themed = function (key) { return function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["css"])(Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["get"])(props.theme, ("styles." + key)))(props.theme); }; };
var Styled = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])('div')(themed('div'));
var components = {};
tags.forEach(function (tag) {
  components[tag] = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(alias(tag))(themed(tag));
  Styled[tag] = components[tag];
});

var createComponents = function (comps) {
  var next = Object.assign({}, components);
  Object.keys(comps).forEach(function (key) {
    next[key] = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(comps[key])(themed(key));
  });
  return next;
};

var MDXProvider$1 = function (ref) {
  var components = ref.components;
  var children = ref.children;

  var outer = Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__["useMDXComponents"])();
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__["MDXProvider"], {
    components: createComponents(Object.assign({}, outer,
      components)),
    children: children
  });
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "../../node_modules/theme-ui/node_modules/@theme-ui/theme-provider/dist/index.esm.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/node_modules/theme-ui/node_modules/@theme-ui/theme-provider/dist/index.esm.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider$1; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "../../node_modules/theme-ui/node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/color-modes */ "../../node_modules/theme-ui/node_modules/@theme-ui/color-modes/dist/index.esm.js");
/* harmony import */ var _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/mdx */ "../../node_modules/theme-ui/node_modules/@theme-ui/mdx/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "../../node_modules/@emotion/core/dist/core.browser.esm.js");





function get(obj, key, def, p, undef) {
  var path = key && typeof key === 'string' ? key.split('.') : [key];

  for (p = 0; p < path.length; p++) {
    obj = obj ? obj[path[p]] : undef;
  }

  return obj === undef ? def : obj;
}

var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function (scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);

  if (typeof n === 'string') {
    return '-' + n;
  }

  return Number(n) * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var obj;
  return Object.assign({}, acc, (obj = {}, obj[curr] = positiveOrNegative, obj));
}, {});

var responsive = function (styles) {
  return function (theme) {
    var next = {};
    var breakpoints = theme && theme.breakpoints || defaultBreakpoints;
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];

      if (value == null) {
        continue;
      }

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};

        if (value[i] == null) {
          continue;
        }

        next[media][key] = value[i];
      }
    }

    return next;
  };
};

var css = function (args) {
  if (args === void 0) { args = {}; }
  return function (props) {
    if (props === void 0) { props = {}; }
    var theme = Object.assign({}, defaultTheme, 'theme' in props ? props.theme : props);
    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = Object.assign({}, result, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = key in aliases ? aliases[key] : key;
      var scaleName = prop in scales ? scales[prop] : undefined;
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

var BodyStyles = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["Global"], {
  styles: function (theme) {
    if (theme.useBodyStyles === false || theme.styles && !theme.styles.root) { return false; }
    var boxSizing = theme.useBorderBox === false ? null : 'border-box';
    return css({
      '*': {
        boxSizing: boxSizing
      },
      body: {
        margin: 0,
        variant: 'styles.root'
      }
    })(theme);
  }
}); };

var ThemeProvider$1 = function (ref) {
  var theme = ref.theme;
  var components = ref.components;
  var children = ref.children;

  var outer = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["useThemeUI"])();

  if (typeof outer.setColorMode === 'function') {
    return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
      theme: theme
    }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["MDXProvider"], {
      components: components,
      children: children
    }));
  }

  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
    theme: theme
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__["ColorModeProvider"], null, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(BodyStyles), Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["MDXProvider"], {
    components: components,
    children: children
  })));
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./src/pages/index.mdx":
/*!*****************************!*\
  !*** ./src/pages/index.mdx ***!
  \*****************************/
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
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "../../node_modules/theme-ui/dist/index.esm.js");


var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/theme-ui-expansion-pack/packages/docs/src/pages/index.mdx";
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Theme UI Expansion Pack"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Findex.mdx ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Findex.mdx! */"../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fivicabatinic%2FDocuments%2Fprojects%2FDEV_PLAYGROUND%2Ftheme-ui-expansion-pack%2Fpackages%2Fdocs%2Fsrc%2Fpages%2Findex.mdx!./");


/***/ }),

/***/ "dll-reference dll_36cb91a3dffafa9e9b43":
/*!*******************************************!*\
  !*** external "dll_36cb91a3dffafa9e9b43" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_36cb91a3dffafa9e9b43;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map