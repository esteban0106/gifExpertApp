(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(5),a=n.n(c),i=n(2),s=n(0),u=function(t){var e=t.setcategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>0&&(e((function(t){return[a]})),u(""))},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){u(t.target.value)}})})},o=n(7),j=n(4),d=n.n(j),l=n(6),p=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,r,c,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=VME6CMYywojMkNqTBoo9oPXEQ9eFt7RB&q=".concat(encodeURI(e),"&limit=5"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=t.url;return Object(s.jsx)("div",{className:"card animate__flash",children:Object(s.jsx)("img",{src:n,alt:e})})},b=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h2",{children:[" ",e," "]}),a&&Object(s.jsx)("p",{children:"Loading..."}),Object(s.jsx)("div",{className:"card-grid animate__flash",children:c.map((function(t){return Object(s.jsx)(f,Object(o.a)({},t),t.id)}))})]})},h=function(){var t=Object(r.useState)(["javaScript"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(u,{setcategories:c}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(b,{category:t},t)}))})]})};n(14);a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.da881cf2.chunk.js.map