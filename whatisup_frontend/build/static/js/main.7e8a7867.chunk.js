(this.webpackJsonpwhatisup_frontend=this.webpackJsonpwhatisup_frontend||[]).push([[0],{13:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(15),s=n.n(c),i=(n(26),n.p,n(13),n(9)),l=n(1),r=n(16),o=n(17),j=n(21),u=n(20),h=[{title:"Home",url:"/home",cName:"nav-links"},{title:"Data",url:"/data",cName:"nav-links"}],d=(n(27),n(2)),b=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"navbar-items",children:[Object(d.jsx)("h1",{className:"navbar-logo",children:"WhatIsUp?"}),Object(d.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(d.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:h.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))})]})}}]),n}(a.Component);var m=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"page-body",children:Object(d.jsx)("h1",{className:"page-welcome-message"})})]})};var f=function(){return Object(d.jsx)(i.a,{basename:"/home",children:Object(d.jsx)(l.a,{exact:!0,path:"/",component:m})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};s.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.7e8a7867.chunk.js.map