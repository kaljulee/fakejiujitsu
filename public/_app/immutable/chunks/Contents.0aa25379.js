import{S as P,i as j,s as x,k as v,q as C,a as F,l as b,m as k,r as q,h as p,c as G,n as m,b as A,D as g,u as S,F as N,M as z,G as U,E as V,e as y,g as E,v as H,f as J,d as M,N as K,y as Q,z as R,A as T,O as W,P as X,B as Y}from"./index.4f401671.js";import{w as Z}from"./singletons.a1a61a9e.js";import{p as $}from"./stores.636f0995.js";import{t as B}from"./data.ffc66a25.js";function ee(){const{subscribe:i,set:e,update:t}=Z(!1);return{subscribe:i,toggle:()=>t(a=>!a),close:()=>e(!1),open:()=>e(!0)}}const te=ee();function D(i,e,t){const a=i.slice();return a[5]=e[t],a}function I(i){let e,t,a=i[5].label+"",l,r,n,o,s;return{c(){e=v("li"),t=v("a"),l=C(a),this.h()},l(_){e=b(_,"LI",{"aria-current":!0,class:!0});var c=k(e);t=b(c,"A",{href:!0,class:!0});var u=k(t);l=q(u,a),u.forEach(p),c.forEach(p),this.h()},h(){m(t,"href",r=i[5].slug),m(t,"class","svelte-2qa554"),m(e,"aria-current",n=i[3].url.pathname===i[5].slug?"page":void 0),m(e,"class","svelte-2qa554")},m(_,c){A(_,e,c),g(e,t),g(t,l),o||(s=V(t,"click",i[4]),o=!0)},p(_,c){c&2&&a!==(a=_[5].label+"")&&S(l,a),c&2&&r!==(r=_[5].slug)&&m(t,"href",r),c&10&&n!==(n=_[3].url.pathname===_[5].slug?"page":void 0)&&m(e,"aria-current",n)},d(_){_&&p(e),o=!1,s()}}}function le(i){let e,t,a,l,r=i[0].label+"",n,o,s,_=i[1],c=[];for(let u=0;u<_.length;u+=1)c[u]=I(D(i,_,u));return{c(){e=v("div"),t=v("span"),a=C(i[2]),l=C(". "),n=C(r),o=F(),s=v("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=b(u,"DIV",{});var h=k(e);t=b(h,"SPAN",{class:!0});var f=k(t);a=q(f,i[2]),l=q(f,". "),n=q(f,r),f.forEach(p),o=G(h),s=b(h,"UL",{class:!0});var d=k(s);for(let w=0;w<c.length;w+=1)c[w].l(d);d.forEach(p),h.forEach(p),this.h()},h(){m(t,"class","title svelte-2qa554"),m(s,"class","svelte-2qa554")},m(u,h){A(u,e,h),g(e,t),g(t,a),g(t,l),g(t,n),g(e,o),g(e,s);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(s,null)},p(u,[h]){if(h&4&&S(a,u[2]),h&1&&r!==(r=u[0].label+"")&&S(n,r),h&26){_=u[1];let f;for(f=0;f<_.length;f+=1){const d=D(u,_,f);c[f]?c[f].p(d,h):(c[f]=I(d),c[f].c(),c[f].m(s,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=_.length}},i:N,o:N,d(u){u&&p(e),z(c,u)}}}function ne(i,e,t){let a;U(i,$,s=>t(3,a=s));let{title:l}=e,{items:r=[]}=e,{index:n=""}=e;function o(){te.close()}return i.$$set=s=>{"title"in s&&t(0,l=s.title),"items"in s&&t(1,r=s.items),"index"in s&&t(2,n=s.index)},[l,r,n,a,o]}class se extends P{constructor(e){super(),j(this,e,ne,le,x,{title:0,items:1,index:2})}}function L(i,e,t){const a=i.slice();return a[0]=e[t],a[2]=t,a}function O(i){let e,t;const a=[i[0],{index:i[2]+1}];let l={};for(let r=0;r<a.length;r+=1)l=K(l,a[r]);return e=new se({props:l}),{c(){Q(e.$$.fragment)},l(r){R(e.$$.fragment,r)},m(r,n){T(e,r,n),t=!0},p(r,n){const o=n&0?W(a,[X(r[0]),a[1]]):{};e.$set(o)},i(r){t||(E(e.$$.fragment,r),t=!0)},o(r){M(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function ae(i){let e,t,a=B,l=[];for(let n=0;n<a.length;n+=1)l[n]=O(L(i,a,n));const r=n=>M(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=y()},l(n){for(let o=0;o<l.length;o+=1)l[o].l(n);e=y()},m(n,o){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(n,o);A(n,e,o),t=!0},p(n,[o]){if(o&0){a=B;let s;for(s=0;s<a.length;s+=1){const _=L(n,a,s);l[s]?(l[s].p(_,o),E(l[s],1)):(l[s]=O(_),l[s].c(),E(l[s],1),l[s].m(e.parentNode,e))}for(H(),s=a.length;s<l.length;s+=1)r(s);J()}},i(n){if(!t){for(let o=0;o<a.length;o+=1)E(l[o]);t=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)M(l[o]);t=!1},d(n){z(l,n),n&&p(e)}}}class ue extends P{constructor(e){super(),j(this,e,null,ae,x,{})}}export{ue as C,te as s};