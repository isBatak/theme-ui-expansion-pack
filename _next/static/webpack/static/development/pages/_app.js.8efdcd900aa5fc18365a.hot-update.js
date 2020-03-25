webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../theme-ui-expansion-pack/dist/theme-ui-expansion-pack.cjs.development.js":
/*!**********************************************************************************!*\
  !*** ../theme-ui-expansion-pack/dist/theme-ui-expansion-pack.cjs.development.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var React__default = _interopDefault(React);
var themeUi = __webpack_require__(/*! theme-ui */ "../../node_modules/theme-ui/dist/index.esm.js");
var components = __webpack_require__(/*! @theme-ui/components */ "../../node_modules/@theme-ui/components/dist/index.esm.js");

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

var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      isLoading = _ref.isLoading,
      sx = _ref.sx,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["leftIcon", "rightIcon", "isLoading", "sx", "children"]);

  return React__default.createElement(themeUi.Button, Object.assign({
    ref: ref,
    sx: _extends({
      position: 'relative',
      px: 4,
      py: [3, 2]
    }, sx)
  }, rest), React__default.createElement(themeUi.Text, {
    as: "span",
    style: {
      visibility: isLoading ? 'hidden' : undefined
    },
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, leftIcon && React__default.createElement(themeUi.Box, {
    as: leftIcon,
    mr: 2
  }), children, rightIcon && React__default.createElement(themeUi.Box, {
    as: rightIcon,
    ml: 2
  })), isLoading && React__default.createElement(themeUi.Text, {
    as: "span",
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }, React__default.createElement(themeUi.Spinner, {
    size: 24,
    sx: {
      color: 'currentColor'
    }
  })));
});

var ButtonGroup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var sx = _ref.sx,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
      rest = _objectWithoutPropertiesLoose(_ref, ["sx", "spacing"]);

  return React__default.createElement(themeUi.Box, Object.assign({
    ref: ref,
    sx: _extends({
      display: 'flex',
      '& > * + *': {
        ml: spacing
      }
    }, sx)
  }, rest));
});

var Dummy = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var sx = _ref.sx,
      rest = _objectWithoutPropertiesLoose(_ref, ["sx"]);

  return React__default.createElement(components.Box, Object.assign({
    as: "span",
    ref: ref,
    sx: _extends({
      bg: 'neutral',
      height: '1rem',
      borderRadius: '2px',
      display: 'inline-block',
      lineHeight: 'inherit',
      maxWidth: '100%'
    }, sx)
  }, rest), "\xA0");
});

var validStackComponents = ['div', 'ol', 'ul'];
var Stack = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'div' : _ref$component,
      children = _ref.children,
      spacing = _ref.spacing,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      _ref$dividers = _ref.dividers,
      dividers = _ref$dividers === void 0 ? false : _ref$dividers,
      rest = _objectWithoutPropertiesLoose(_ref, ["component", "children", "spacing", "align", "dividers"]);

  if ( !validStackComponents.includes(component)) {
    throw new Error("Invalid Stack component: " + component);
  }

  var stackItems = React.Children.toArray(children);
  var isList = component === 'ol' || component === 'ul';
  var stackItemComponent = isList ? 'li' : 'div';
  return React__default.createElement(themeUi.Box, Object.assign({
    ref: ref
  }, rest), stackItems.map(function (child, index) {
    return React__default.createElement(themeUi.Box, {
      as: stackItemComponent,
      key: index,
      sx: !dividers ? {
        display: 'flex',
        flexDirection: 'column',
        alignItems: align,
        pb: spacing,
        '&:last-of-type': {
          pb: 'none'
        }
      } : undefined
    }, dividers && index > 0 ? React__default.createElement(themeUi.Box, {
      sx: {
        py: spacing,
        width: '100%'
      }
    }, React__default.createElement(themeUi.Divider, null)) : null, child);
  }));
});

/**
 *
 * @param {any} value - The content to add to clipboard
 */

var copyToClipboard = function copyToClipboard(value) {
  var _document, _document$getSelectio, _document2, _document2$getSelecti;

  var el = document.createElement('textarea');
  el.value = value;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el); // @ts-ignore

  var selected = ((_document = document) === null || _document === void 0 ? void 0 : (_document$getSelectio = _document.getSelection()) === null || _document$getSelectio === void 0 ? void 0 : _document$getSelectio.rangeCount) > 0 ? (_document2 = document) === null || _document2 === void 0 ? void 0 : (_document2$getSelecti = _document2.getSelection()) === null || _document2$getSelecti === void 0 ? void 0 : _document2$getSelecti.getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    var _document3, _document3$getSelecti, _document4, _document4$getSelecti;

    (_document3 = document) === null || _document3 === void 0 ? void 0 : (_document3$getSelecti = _document3.getSelection()) === null || _document3$getSelecti === void 0 ? void 0 : _document3$getSelecti.removeAllRanges();
    (_document4 = document) === null || _document4 === void 0 ? void 0 : (_document4$getSelecti = _document4.getSelection()) === null || _document4$getSelecti === void 0 ? void 0 : _document4$getSelecti.addRange(selected);
  }
};

var useClipboard = function useClipboard(value) {
  var _useState = React.useState(false),
      hasCopied = _useState[0],
      setHasCopied = _useState[1];

  var onCopy = function onCopy() {
    copyToClipboard(value);
    setHasCopied(true);
    setTimeout(function () {
      return setHasCopied(false);
    }, 1500);
  };

  return {
    value: value,
    onCopy: onCopy,
    hasCopied: hasCopied
  };
};

var globalId = 0;

var genId = function genId() {
  return globalId + 1;
};

var useId = function useId() {
  var _useState = React.useState(null),
      id = _useState[0],
      setId = _useState[1];

  React.useEffect(function () {
    return setId(genId());
  }, []);
  return id;
};

exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Dummy = Dummy;
exports.Stack = Stack;
exports.useClipboard = useClipboard;
exports.useId = useId;
//# sourceMappingURL=theme-ui-expansion-pack.cjs.development.js.map


/***/ })

})
//# sourceMappingURL=_app.js.8efdcd900aa5fc18365a.hot-update.js.map