(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"7k+e":function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return p}));var t=o("cxan"),r=o("HbGN"),a=o("ERkP"),l=o.n(a),b=o("ZVZ0"),m=o("Uewy"),i=(l.a.createElement,{}),c="wrapper";function p(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(b.b)(c,Object(t.a)({},i,o,{components:n,mdxType:"MDXLayout"}),Object(b.b)("hr",null),Object(b.b)("h2",null,"title: Forms"),Object(b.b)("h1",null,"Forms"),Object(b.b)("p",null,"Several primitive components are included for building accessible forms."),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import {\n  Label,\n  Input,\n  Select,\n  Textarea,\n  Radio,\n  Checkbox,\n  Slider,\n} from 'theme-ui'\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"<Box\n  as='form'\n  onSubmit={e => e.preventDefault()}>\n  <Label htmlFor='username'>Username</Label>\n  <Input\n    name='username'\n    mb={3}\n  />\n  <Label htmlFor='password'>Password</Label>\n  <Input\n    type='password'\n    name='password'\n    mb={3}\n  />\n  <Box>\n    <Label mb={3}>\n      <Checkbox />\n      Remember me\n    </Label>\n  </Box>\n  <Label htmlFor='sound'>Sound</Label>\n  <Select name='sound' mb={3}>\n    <option>Beep</option>\n    <option>Boop</option>\n    <option>Blip</option>\n  </Select>\n  <Label htmlFor='comment'>Comment</Label>\n  <Textarea\n    name='comment'\n    rows='6'\n    mb={3}\n  />\n  <Flex mb={3}>\n    <Label>\n      <Radio name='letter' /> Alpha\n    </Label>\n    <Label>\n      <Radio name='letter' /> Bravo\n    </Label>\n    <Label>\n      <Radio name='letter' /> Charlie\n    </Label>\n  </Flex>\n  <Label>\n    Slider\n  </Label>\n  <Slider mb={3} />\n  <Button>\n    Submit\n  </Button>\n</Box>\n")),Object(b.b)(m.a,{mdxType:"Note"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Tip:"),"\nEach form field needs to include a ",Object(b.b)("inlineCode",{parentName:"p"},"<label>")," element with an ",Object(b.b)("inlineCode",{parentName:"p"},"htmlFor")," prop that matches its field.\nThe entire form should be wrapped in a ",Object(b.b)("inlineCode",{parentName:"p"},"<form>")," element.")),Object(b.b)("h2",null,"Theming"),Object(b.b)("p",null,"Add styles for form elements in the ",Object(b.b)("inlineCode",{parentName:"p"},"theme.forms")," object."),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// example theme\n{\n  forms: {\n    label: {\n      fontSize: 1,\n      fontWeight: 'bold',\n    },\n    input: {\n      borderColor: 'gray',\n      '&:focus': {\n        borderColor: 'primary',\n        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,\n        outline: 'none',\n      },\n    },\n    select: {\n      borderColor: 'gray',\n      '&:focus': {\n        borderColor: 'primary',\n        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,\n        outline: 'none',\n      },\n    },\n    textarea: {\n      borderColor: 'gray',\n      '&:focus': {\n        borderColor: 'primary',\n        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,\n        outline: 'none',\n      },\n    },\n    slider: {\n      bg: 'muted',\n    },\n  },\n}\n")))}p.isMDXComponent=!0},Uewy:function(e,n,o){"use strict";o.d(n,"a",(function(){return b}));var t=o("cxan"),r=o("ERkP"),a=o.n(r),l=o("OwKP"),b=(a.a.createElement,function(e){return Object(l.c)("aside",Object(t.a)({},e,{sx:{padding:3,bg:"highlight",borderRadius:4,borderLeft:function(e){return"8px solid ".concat(e.colors.primary)},p:{m:0}}}))})},gOVU:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme-ui/forms",function(){return o("7k+e")}])}},[["gOVU",0,1,2]]]);