(this.webpackJsonpucourse=this.webpackJsonpucourse||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),u=n(7),l=n(6),h=(n(13),n(14),n(15),n(0)),d=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(h.jsx)("h2",{children:e.monster.name}),Object(h.jsx)("p",{children:e.monster.email})]})},j=function(e){return Object(h.jsx)("div",{className:"card-list",children:e.monsters.map((function(e,t){return Object(h.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={monsters:[],searchField:""},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch((function(e){return console.log("Error getting users: ".concat(e))}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField;console.log(this.state.monsters);var c=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Monsters Rolodex"}),Object(h.jsx)(m,{placeholder:"Select monster",handleChange:function(t){e.setState({searchField:t.target.value})}}),Object(h.jsx)(j,{monsters:c})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.4c71454f.chunk.js.map