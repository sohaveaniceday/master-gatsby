(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1KMs":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var r=a("Wbzz"),n=a("q1tI"),i=a.n(n),s=a("9eSz"),l=a.n(s),o=a("vOnD"),c=o.b.div.withConfig({displayName:"Pagination__PaginationStyles",componentId:"sc-1gg7s65-0"})(["display:flex;align-content:center;align-items:center;justify-items:center;border:1px solid var(--grey);margin:2rem 0;border-radius:5px;text-align:center;& > *{padding:1rem;flex:1;border-right:1px solid var(--grey);text-decoration:none;&[aria-current],&.current{color:var(--red);}&[disabled]{pointer-events:none;color:var(--grey);}}"]),m=function(e){var t=e.pageSize,a=e.totalCount,n=e.currentPage,s=(e.skip,e.base),l=Math.ceil(a/t),o=n-1,m=n+1,d=m<=l,g=o>=1;return i.a.createElement(c,null,i.a.createElement(r.a,{disabled:!g,to:s+"/"+o},"<- Prev"),Array.from({length:l}).map((function(e,t){return i.a.createElement(r.a,{className:1===n&&0===t?"current":"",key:t,to:s+"/"+(t>0?t+1:"")},t+1," ")})),i.a.createElement(r.a,{disabled:!d,to:s+"/"+m},"Next ->"))},d=a("1Yd/"),g=o.b.div.withConfig({displayName:"slicemasters__SlicemasterGrid",componentId:"mpw29x-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-gap:2rem;"]),p=o.b.div.withConfig({displayName:"slicemasters__SliceMasterStyles",componentId:"mpw29x-1"})(["a{text-decoration:name;}.gatsby-image-wrapper{height:400px;}h2{transform:rotate(-2deg);text-align:center;font-size:4rem;margin-bottom:-2rem;position:relative;z-index:2;}.description{background:var(--yellow);padding:1rem;margin:2rem;margin-top:-6rem;z-index:2;position:relative;transform:rotate(1deg);text-align:center;}"]),u=(t.default=function(e){var t=e.data,a=e.pageContext,n=t.slicemasters.nodes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:"Slicemasters - Page "+(a.currentPage||1)}),i.a.createElement(m,{pageSize:parseInt("4"),totalCount:t.slicemasters.totalCount,currentPage:a.currentPage||1,skip:a.skip,base:"/slicemasters"}),i.a.createElement(g,null,n.map((function(e,t){return i.a.createElement(p,{key:""+e.slug.current+t},i.a.createElement(r.a,{to:"/slicemasters/"+e.slug.current},i.a.createElement("h2",null,i.a.createElement("span",{className:"mark"},e.name))),i.a.createElement(l.a,{fluid:e.image.asset.fluid}),i.a.createElement("p",{className:"description"},e.description))}))))},"3430637731")}}]);
//# sourceMappingURL=component---src-pages-slicemasters-tsx-9329c53189c1d54f47a4.js.map