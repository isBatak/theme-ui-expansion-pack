(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+WEx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),u=n("ZVZ0"),i=(c.a.createElement,{}),l="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)(l,Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("hr",null),Object(u.b)("h2",null,"title: Button"),Object(u.b)("h1",null,"Button"),Object(u.b)("p",null,"Primitive button component with variants"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { Button } from 'theme-ui';\n")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<>\n  <Button mr={2}>Beep</Button>\n  <Button variant="secondary">Boop</Button>\n</>\n')),Object(u.b)("h2",null,"Variants"),Object(u.b)("p",null,"Button variants can be defined in the ",Object(u.b)("inlineCode",{parentName:"p"},"theme.buttons")," object.\nThe Button component uses ",Object(u.b)("inlineCode",{parentName:"p"},"theme.buttons.primary")," as its default variant style."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// example theme variants\n{\n  buttons: {\n    primary: {\n      color: 'background',\n      bg: 'primary',\n      '&:hover': {\n        bg: 'text',\n      }\n    },\n    secondary: {\n      color: 'background',\n      bg: 'secondary',\n    },\n  },\n}\n")))}p.isMDXComponent=!0},ESYb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme-ui/button",function(){return n("+WEx")}])},HbGN:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return p}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):u({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,O=b["".concat(c,".").concat(s)]||b[s]||f[s]||a;return n?o.a.createElement(O,u({ref:t},l,{components:n})):o.a.createElement(O,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=O;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"===typeof e?e:r,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["ESYb",0,1]]]);