(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{HbGN:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m})),t.d(n,"c",(function(){return s}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):u({},n,{},e)),t},p=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},O=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,O=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return t?o.a.createElement(O,u({ref:n},l,{components:t})):o.a.createElement(O,u({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=O;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[b]="string"===typeof e?e:r,c[1]=u;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},kN8B:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),u=t("ZVZ0"),i=(c.a.createElement,{}),l="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(u.b)(l,Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("hr",null),Object(u.b)("h2",null,"title: Progress"),Object(u.b)("h1",null,"Progress"),Object(u.b)("p",null,"Range input element"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { Progress } from 'theme-ui';\n")),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<Progress max={1} value={1 / 2}>\n  50%\n</Progress>\n")),Object(u.b)("h2",null,"Variants"),Object(u.b)("p",null,"Progress variants can be defined anywhere in the ",Object(u.b)("inlineCode",{parentName:"p"},"theme")," object."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// example theme variants\n{\n  styles: {\n    progress: {\n      color: 'red',\n    },\n  },\n}\n// <Progress variant='styles.progress' />\n")))}s.isMDXComponent=!0},vqsN:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme-ui/progress",function(){return t("kN8B")}])}},[["vqsN",0,1]]]);