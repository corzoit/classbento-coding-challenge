(this["webpackJsonpclassbento-coding-challenge"]=this["webpackJsonpclassbento-coding-challenge"]||[]).push([[0],{31:function(e,t,a){},58:function(e,t){},77:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a(23),s=a.n(r),i=(a(31),a(5)),o=(0,a(1).createContext)(),l=function(){var e=Object(n.useContext)(o),t=e.keywords,a=e.dispatch;return Object(c.jsxs)("header",{className:"mt-3",children:[Object(c.jsx)("h1",{children:"Flickr App"}),Object(c.jsx)("input",{type:"text",className:"form-control",value:t,onChange:function(e){a({type:"update",payload:e.target.value})},placeholder:"Please enter a keyword to search"})]})},d=a(25),u=a(8),j=a.n(u),b=a(24),p=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:return a="https://flickr-api-wrapper.corzo.dev/".concat(encodeURI(t)),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,r=n.items,e.abrupt("return",r.map((function(e){var t=e.author.split(" ")[0];return{title:e.title,link:e.link,image:e.media.m,author:t,description:e.description,dateTaken:e.date_taken,tags:e.tags}})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=(a(33),function(e){var t=e.title,a=e.link,n=e.image,r=(e.description,e.author),s=(e.dateTaken,e.tags),i={backgroundImage:"url(".concat(n,")")};return Object(c.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3 mt-3",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-photo",style:i}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:t}),Object(c.jsx)("p",{className:"card-text card-tags",children:s.split(" ").map((function(e){return Object(c.jsx)("span",{children:e})}))}),Object(c.jsxs)("p",{className:"card-text card-author",children:["By: ",r]}),Object(c.jsx)("a",{href:a,rel:"noreferrer",target:"_blank",className:"btn btn-primary btn-block",children:"View full size"})]})]})})}),m=function(){var e=Object(n.useContext)(o).keywords,t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){s({data:[],loading:!0}),p(e).then((function(e){s({data:e,loading:!1})}))}),[e]),Object(c.jsx)("section",{className:"mt-3",children:Object(c.jsx)("div",{className:"row",children:r.data.map((function(e,t){return Object(c.jsx)(h,Object(d.a)({},e),t+e.dateTaken)}))})})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"update":return t.payload;default:return e}},x=function(){var e=Object(n.useReducer)(f,""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(c.jsxs)(o.Provider,{value:{keywords:a,dispatch:r},children:[Object(c.jsx)(l,{}),Object(c.jsx)(m,{})]})};s.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.f9430094.chunk.js.map