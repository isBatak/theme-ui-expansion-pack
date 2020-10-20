_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"7k+e":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var o=t("cxan"),r=t("HbGN"),a=t("ERkP"),l=t.n(a),b=t("ZVZ0"),m=t("Uewy"),i=(l.a.createElement,{});function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(o.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("hr",null),Object(b.b)("h2",null,"title: Forms"),Object(b.b)("h1",null,"Forms"),Object(b.b)("p",null,"Several primitive components are included for building accessible forms."),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import {\n  Label,\n  Input,\n  Select,\n  Textarea,\n  Radio,\n  Checkbox,\n  Slider,\n} from 'theme-ui'\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"<Box\n  as='form'\n  onSubmit={e => e.preventDefault()}>\n  <Label htmlFor='username'>Username</Label>\n  <Input\n    name='username'\n    mb={3}\n  />\n  <Label htmlFor='password'>Password</Label>\n  <Input\n    type='password'\n    name='password'\n    mb={3}\n  />\n  <Box>\n    <Label mb={3}>\n      <Checkbox />\n      Remember me\n    </Label>\n  </Box>\n  <Label htmlFor='sound'>Sound</Label>\n  <Select name='sound' mb={3}>\n    <option>Beep</option>\n    <option>Boop</option>\n    <option>Blip</option>\n  </Select>\n  <Label htmlFor='comment'>Comment</Label>\n  <Textarea\n    name='comment'\n    rows='6'\n    mb={3}\n  />\n  <Flex mb={3}>\n    <Label>\n      <Radio name='letter' /> Alpha\n    </Label>\n    <Label>\n      <Radio name='letter' /> Bravo\n    </Label>\n    <Label>\n      <Radio name='letter' /> Charlie\n    </Label>\n  </Flex>\n  <Label>\n    Slider\n  </Label>\n  <Slider mb={3} />\n  <Button>\n    Submit\n  </Button>\n</Box>\n")),Object(b.b)(m.a,{mdxType:"Note"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Tip:"),"\nEach form field needs to include a ",Object(b.b)("inlineCode",{parentName:"p"},"<label>")," element with an ",Object(b.b)("inlineCode",{parentName:"p"},"htmlFor")," prop that matches its field.\nThe entire form should be wrapped in a ",Object(b.b)("inlineCode",{parentName:"p"},"<form>")," element.")),Object(b.b)("h2",null,"Theming"),Object(b.b)("p",null,"Add styles for form elements in the ",Object(b.b)("inlineCode",{parentName:"p"},"theme.forms")," object."),Object(b.b)("pre",null,Object(b.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// example theme\n{\n  forms: {\n    label: {\n      fontSize: 1,\n      fontWeight: 'bold',\n    },\n    input: {\n      borderColor: 'gray',\n      '&:focus': {\n        borderColor: 'primary',\n        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,\n        outline: 'none',\n      },\n    },\n    select: {\n      borderColor: 'gray',\n      '&:focus': {\n        borderColor: 'primary',\n        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,\n        outline: 'none',\n      },\n    },\n    textarea: {\n      borderColor: 'gray',\n      '&:focus': {\n        borderColor: 'primary',\n        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,\n        outline: 'none',\n      },\n    },\n    slider: {\n      bg: 'muted',\n    },\n  },\n}\n")))}c.isMDXComponent=!0},Uewy:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var o=t("cxan"),r=t("ERkP"),a=t.n(r),l=t("oj0F"),b=(a.a.createElement,function(e){return Object(l.c)("aside",Object(o.a)({},e,{sx:{padding:3,bg:"highlight",borderRadius:4,borderLeft:function(e){return"8px solid ".concat(e.colors.primary)},p:{m:0}}}))})},gOVU:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme-ui/forms",function(){return t("7k+e")}])}},[["gOVU",0,1,2]]]);