(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={Form:"Input_Form__2wd_6",Label:"Input_Label__1tSf4",Input:"Input_Input__6gLzx"}},20:function(t){t.exports=JSON.parse("{}")},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(10),o=n.n(s),i=(n(19),n(13)),u=n(4),l=n(5),b=n(7),h=n(6),j=n(11),m=n(2),f=n.n(m),d=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.Form,children:[Object(a.jsxs)("label",{className:f.a.Label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange,className:f.a.Input})]}),Object(a.jsxs)("label",{className:f.a.Label,children:["Number",Object(a.jsx)("input",{type:"text",name:"number",value:n,onChange:this.handleChange,className:f.a.Input})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),p=(n(20),n(8)),O=n.n(p),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:O.a.List,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:O.a.Item,children:[Object(a.jsxs)("p",{className:O.a.Text,children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){n(e)},children:"Delete"})]},e)}))})},C=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:f.a.Label,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,className:f.a.Input})]})},g=n(12),v=n.n(g),_=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.some((function(t){return t.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contact"));else{var c={id:v.a.generate(),name:n,number:a};t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=(t.name,t.number,t.filter),n=t.contacts,c=this.getVisibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(d,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),n.length>0?Object(a.jsx)(C,{value:e,onChange:this.changeFilter}):Object(a.jsx)("p",{children:"Your phonebook is empty"}),Object(a.jsx)(x,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),L()},8:function(t,e,n){t.exports={List:"ContactList_List__kgjt1",Item:"ContactList_Item__Ytb26",Text:"ContactList_Text__jAsfu"}}},[[29,1,2]]]);
//# sourceMappingURL=main.55b04458.chunk.js.map