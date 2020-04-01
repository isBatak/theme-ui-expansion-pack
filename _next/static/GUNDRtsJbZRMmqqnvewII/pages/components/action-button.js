(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"H/qI":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/action-button",function(){return n("b1ux")}])},HbGN:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",(function(){return r}))},Km8e:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return p}));var r=n("ERkP"),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=o.a.createContext({}),p=function(t){var e=o.a.useContext(l),n=e;return t&&(n="function"===typeof t?t(e):u({},e,{},t)),n},b=function(t){var e=p(t.components);return o.a.createElement(l.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},O=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),b=p(n),s=r,O=b["".concat(c,".").concat(s)]||b[s]||f[s]||a;return n?o.a.createElement(O,u({ref:e},l,{components:n})):o.a.createElement(O,u({ref:e},l))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var a=n.length,c=new Array(a);c[0]=O;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[s]="string"===typeof t?t:r,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},b1ux:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),u=n("ZVZ0"),i=(c.a.createElement,{}),l="wrapper";function p(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(u.b)(l,Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(u.b)("hr",null),Object(u.b)("p",null,"title: Action Button"),Object(u.b)("h2",null,"description: Enhanced button component with options to show icons and loading state"),Object(u.b)("h1",null,"Action Button"),Object(u.b)("p",null,"Enhanced button with options to show icons and loading state."),Object(u.b)("h2",null,"Import"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { ActionButton } from 'theme-ui-expansion-pack';\n")),Object(u.b)("h2",null,"Usage"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"<ActionButton>Button</ActionButton>\n")),Object(u.b)("h3",null,"Button Variant"),Object(u.b)("p",null,"Use the ",Object(u.b)("inlineCode",{parentName:"p"},"variant")," prop to change the visual style of the Button."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),'<ButtonGroup spacing={4}>\n  <ActionButton variant="primary">Button</ActionButton>\n  <ActionButton variant="secondary">Button</ActionButton>\n</ButtonGroup>\n')),Object(u.b)("h3",null,"Button with Icon"),Object(u.b)("p",null,"You can add left and right icons to the Button components from popular libraries like\n",Object(u.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-icons.netlify.com"}),"react-icons")," and just pass it into the button."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"<ButtonGroup spacing={4}>\n  <ActionButton leftIcon={MdBuild}>Email</ActionButton>\n  <ActionButton rightIcon={MdCall}>Call us</ActionButton>\n</ButtonGroup>\n")),Object(u.b)("h3",null,"Button loading state"),Object(u.b)("p",null,"Pass ",Object(u.b)("inlineCode",{parentName:"p"},"isLoading")," prop to the Button component to show it's loading state."),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"<ButtonGroup spacing={4}>\n  <ActionButton isLoading>Email</ActionButton>\n  <ActionButton isLoading>Submit</ActionButton>\n</ButtonGroup>\n")))}p.isMDXComponent=!0},cxan:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))}},[["H/qI",0,1]]]);