import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as I}from"./index-DJO9vBfz.js";const h=({label:i,options:d,value:p,onChange:v,multiple:t,placeholder:b,disabled:y})=>a.jsxs("div",{className:"select-container",children:[a.jsx("label",{className:"select-label",children:i}),a.jsxs("select",{className:`select-field ${t?"select-multiple":""}`,value:p,onChange:v,multiple:t,disabled:y,children:[b&&!t&&a.jsx("option",{className:"select-placeholder",value:"",children:b}),d.map(e=>e.group?a.jsx("optgroup",{label:e.group,children:e.options.map(g=>a.jsx("option",{value:g.value,children:g.label},g.value))},e.group):a.jsx("option",{value:e.value,disabled:e.disabled,children:e.label},e.value))]})]});h.__docgenInfo={description:"",methods:[],displayName:"SelectField"};const $={title:"Components/SelectField",component:h,tags:["autodocs"]},l=i=>{const[d,p]=I.useState(i.value),v=t=>p(t.target.value);return a.jsx(h,{...i,value:d,onChange:v})},s=l.bind({});s.args={label:"Select one or more options",value:"",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]};const n=l.bind({});n.args={label:"Choose multiple options:",value:[],options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],multiple:!0};const o=l.bind({});o.args={label:"Choose an option:",value:"",options:[{label:"Option 1",value:"1"},{label:"Option 2 (Disabled)",value:"2",disabled:!0},{label:"Option 3",value:"3"}]};const r=l.bind({});r.args={label:"Choose an option:",value:"",placeholder:"Select an option",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]};const u=l.bind({});u.args={label:"Choose an option:",value:"",options:[{group:"Group 1",options:[{label:"Option 1.1",value:"1.1"},{label:"Option 1.2",value:"1.2"}]},{group:"Group 2",options:[{label:"Option 2.1",value:"2.1"},{label:"Option 2.2",value:"2.2"}]}]};const c=l.bind({});c.args={label:"Disabled Select:",value:"",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],disabled:!0};var m,S,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = event => setValue(event.target.value);
  return <SelectField {...args} value={value} onChange={handleChange} />;
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,x,V;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = event => setValue(event.target.value);
  return <SelectField {...args} value={value} onChange={handleChange} />;
}`,...(V=(x=n.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var j,F,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = event => setValue(event.target.value);
  return <SelectField {...args} value={value} onChange={handleChange} />;
}`,...(D=(F=o.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var f,N,_;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = event => setValue(event.target.value);
  return <SelectField {...args} value={value} onChange={handleChange} />;
}`,...(_=(N=r.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var G,W,E;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = event => setValue(event.target.value);
  return <SelectField {...args} value={value} onChange={handleChange} />;
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var B,M,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = event => setValue(event.target.value);
  return <SelectField {...args} value={value} onChange={handleChange} />;
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const k=["Basic","MultiSelect","WithDisabledOption","WithPlaceholder","GroupedOptions","DisabledSelect"];export{s as Basic,c as DisabledSelect,u as GroupedOptions,n as MultiSelect,o as WithDisabledOption,r as WithPlaceholder,k as __namedExportsOrder,$ as default};
