(this["webpackJsonpmosterr-app"]=this["webpackJsonpmosterr-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(9),n(1)),l=(n(10),n(11),n(12),function(e){return a.createElement("div",{className:"card-container"},a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monsterImage"}),a.createElement("h2",null,e.monster.name),a.createElement("h3",null,e.monster.email))}),i=function(e){var t=e.monsters.filter((function(t){return t.name.toLowerCase().includes(e.searchText)}));return a.createElement("div",{className:"card-list"},t&&t.length>0?t.map((function(e){return a.createElement(l,{key:e.id,monster:e})})):null)},u=(n(13),function(e){var t=e.placeholder,n=e.handleChange;return a.createElement("input",{className:"search",name:"search-box",placeholder:t,onChange:n,type:"search"})});var m=function(){var e=r.a.useState([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=r.a.useState(""),c=Object(s.a)(o,2),l=c[0],m=c[1];return r.a.useEffect((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[n.concat]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(u,{handleChange:function(e){m(e.target.value)},placeholder:"Search Box"}),r.a.createElement(i,{monsters:n,searchText:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.a9429be8.chunk.js.map