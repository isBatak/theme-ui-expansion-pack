(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{pm38:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button",function(){return n("q3rD")}])},q3rD:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var a=n("cxan"),b=n("HbGN"),l=n("ERkP"),o=n.n(l),i=n("ZVZ0"),r=n("1Yd/"),c=(o.a.createElement,{}),p="wrapper";function u(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(i.b)(p,Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)(r.a,{title:"Button",description:"Button component is used to trigger an action or event, such as submitting a\nform, opening a Dialog, canceling an action, or performing a delete operation.",mdxType:"SEO"}),Object(i.b)("h1",null,"Button"),Object(i.b)("p",null,"Button component is used to trigger an action or event, such as submitting a\nform, opening a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/modal"}),"Dialog"),", canceling an action, or performing a delete\noperation."),Object(i.b)("h2",null,"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Button } from 'theme-ui-expansion-pack';\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Button>Button</Button>\n")),Object(i.b)("h3",null,"Button Sizes"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the button. You can set the value to\n",Object(i.b)("inlineCode",{parentName:"p"},"xs"),", ",Object(i.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<ButtonGroup spacing={4}>\n  <Button size="xs">Button</Button>\n  <Button size="sm">Button</Button>\n  <Button size="md">Button</Button>\n  <Button size="lg">Button</Button>\n</ButtonGroup>\n')),Object(i.b)("h3",null,"Button Variant"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"variant")," prop to change the visual style of the Button. You can set the\nvalue to ",Object(i.b)("inlineCode",{parentName:"p"},"solid"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ghost"),", ",Object(i.b)("inlineCode",{parentName:"p"},"outline"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"link"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<ButtonGroup spacing={4}>\n  <Button variant="primary">Button</Button>\n  <Button variant="secondary">Button</Button>\n</ButtonGroup>\n')),Object(i.b)("h3",null,"Button with Icon"),Object(i.b)("p",null,"You can add left and right icons to the Button components from popular libraries like\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-icons.netlify.com"}),"react-icons")," and just pass it into the button."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// -> import {MdBuild , MdCall} from "react-icons/md"\n<ButtonGroup spacing={4}>\n  <Button leftIcon={MdBuild}>Email</Button>\n  <Button rightIcon={MdCall}>Call us</Button>\n</ButtonGroup>\n')),Object(i.b)("h3",null,"Button loading state"),Object(i.b)("p",null,"Pass ",Object(i.b)("inlineCode",{parentName:"p"},"isLoading")," prop to the Button component to show it's loading state. You\ncan optionally pass ",Object(i.b)("inlineCode",{parentName:"p"},"loadingText")," prop, if you do, the button will show a\nspinner and the loading text. Otherwise, the button will take the width of the\ntext label and show only the spinner"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ButtonGroup spacing={4}>\n  <Button isLoading>Email</Button>\n  <Button isLoading>Submit</Button>\n</ButtonGroup>\n")),Object(i.b)("h2",null,"Accessibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Button has ",Object(i.b)("inlineCode",{parentName:"li"},"role")," button."),Object(i.b)("li",{parentName:"ul"},"When Button has focus, ",Object(i.b)("kbd",null,"Space")," and ",Object(i.b)("kbd",null,"Enter")," activates it.")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Props"),Object(i.b)("p",null,"The Button composes the ",Object(i.b)("inlineCode",{parentName:"p"},"PseudoBox")," component so you can pass props for\n",Object(i.b)("inlineCode",{parentName:"p"},"PseudoBox"),". These are props related to the Button component."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"aria-label")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The label of the button")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"variantColor")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The color of the button. Use a color key passed in ",Object(i.b)("inlineCode",{parentName:"td"},"theme.colors"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"variant")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"outline"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ghost"),", ",Object(i.b)("inlineCode",{parentName:"td"},"unstyled")," , ",Object(i.b)("inlineCode",{parentName:"td"},"link")," , ",Object(i.b)("inlineCode",{parentName:"td"},"solid")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"solid")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The variant of the button style to use.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"isDisabled")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the button will be disabled.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"isLoading")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the button will show a spinner.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"loadingText")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The label to show in the button when ",Object(i.b)("inlineCode",{parentName:"td"},"isLoading")," is true. If no text is passed, it only shows the spinner")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"size")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"td"},"md"),", ",Object(i.b)("inlineCode",{parentName:"td"},"lg")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"md")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The size of the button.")))))}u.isMDXComponent=!0}},[["pm38",0,1,2]]]);