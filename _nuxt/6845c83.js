(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{106:function(t,n,r){"use strict";var e=r(107),o=r.n(e);n.default=o.a},107:function(t,n){},136:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return o}));var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-app",{attrs:{dark:""}},[r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!0,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},o=[]},173:function(t,n,r){var content=r(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("6570a8f6",content,!0,{sourceMap:!1})},185:function(t,n,r){"use strict";var e=r(136),o=r(106),c=r(70),l=r(105),f=r.n(l),d=r(251),v=r(254),_=r(253),h=r(252),component=Object(c.a)(o.default,e.a,e.b,!1,null,null,null);n.default=component.exports,f()(component,{VApp:d.a,VContainer:v.a,VFooter:_.a,VMain:h.a})},194:function(t,n,r){r(195),t.exports=r(196)},223:function(t,n,r){"use strict";r(173)},224:function(t,n,r){var e=r(47)(!1);e.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=e},57:function(t,n,r){"use strict";var e={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(223),r(70)),c=r(105),l=r.n(c),f=r(251),component=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);n.a=component.exports;l()(component,{VApp:f.a})}},[[194,6,2,7]]]);