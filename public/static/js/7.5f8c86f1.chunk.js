(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{40:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(47);t.a=function(e){var t=e.className,a=e.style,n=e.children;return r.a.createElement("div",{className:"card ".concat(t),style:a},n)}},47:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(45),r=a.n(n),c=a(46),l=a(6),o=a(0),s=a.n(o),i=a(1);function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=a(40),p=a(42),f=a(56),E=(a(63),function(e){var t=e.className,a=e.style,n=e.center,r=e.zoom,c=Object(o.useRef)(null);return Object(o.useEffect)((function(){if(c.current){var e=new window.google.maps.Map(c.current,{center:n,zoom:r});new window.google.maps.Marker({position:n,map:e})}}),[n,r]),s.a.createElement("div",{ref:c,className:"map ".concat(t),style:a})}),d=a(48),v=a(13),h=a(8),b=a(49),O=(a(64),function(e){var t=e.id,a=e.image,n=e.title,i=e.address,u=e.description,O=e.coordinates,g=e.creator,j=e.onDelete,k=Object(b.a)(),w=k.isLoading,y=k.error,C=k.sendRequest,N=k.clearError,_=Object(o.useContext)(h.a),x=Object(o.useState)(!1),D=Object(l.a)(x,2),L=D[0],S=D[1],I=Object(o.useState)(!1),P=Object(l.a)(I,2),z=P[0],A=P[1],M=function(){return S(!1)},T=function(){return A(!1)},F=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!1),e.prev=1,e.next=4,C("".concat("https://tourplaces-mern.herokuapp.com/","/api/places/").concat(t),"DELETE",null,{Authorization:"Bearer ".concat(_.token)});case 4:j(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{error:y,onClear:N}),s.a.createElement(f.a,{show:L,onCancel:M,header:i,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(p.a,{onClick:M},"CLOSE")},s.a.createElement("div",{className:"map-container"},s.a.createElement(E,{center:O,zoom:16}))),s.a.createElement(f.a,{show:z,onCancel:T,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{inverse:!0,onClick:T},"CANCEL"),s.a.createElement(p.a,{danger:!0,onClick:F},"DELETE"))},s.a.createElement("p",null,"Do you want to proceed and delete this place?")),s.a.createElement("li",{className:"place-item"},s.a.createElement(m.a,{className:"place-item__content"},w&&s.a.createElement(v.a,{asOverlay:!0}),s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("https://tourplaces-mern.herokuapp.com/","/").concat(a),alt:n})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,n),s.a.createElement("h3",null,i),s.a.createElement("p",null,u)),s.a.createElement("div",{className:"place-item__actions"},s.a.createElement(p.a,{inverse:!0,onClick:function(){return S(!0)}},"VIEW ON MAP"),_.userId===g&&s.a.createElement(p.a,{to:"/places/".concat(t)},"EDIT"),_.userId===g&&s.a.createElement(p.a,{danger:!0,onClick:function(){return A(!0)}},"DELETE")))))}),g=(a(65),function(e){var t=e.items,a=e.onDelete;return 0===t.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(m.a,null,s.a.createElement("h2",null,"No Places found. Maybe create one?"),s.a.createElement(p.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:"place-list"},t.map((function(e){var t=e.id,n=u(e,["id"]);return s.a.createElement(O,Object.assign({key:t,id:t},n,{onDelete:a}))})))});t.default=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],u=Object(b.a)(),m=u.isLoading,p=u.sendRequest,f=u.error,E=u.clearError,h=Object(i.h)().uid;Object(o.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("".concat("https://tourplaces-mern.herokuapp.com/","/api/places/user/").concat(h));case 3:t=e.sent,n(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[p,h]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{error:f,onClear:E}),m&&s.a.createElement("div",{className:"center"},s.a.createElement(v.a,null)),!m&&s.a.createElement(g,{items:a,onDelete:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=7.5f8c86f1.chunk.js.map