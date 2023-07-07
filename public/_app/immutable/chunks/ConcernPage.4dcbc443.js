import{S as p,i as y,s as C,k as h,q as D,l as _,m as g,r as G,h as o,n as c,b as d,D as b,u as I,F as k,C as v,y as S,a as P,z as E,c as z,A as q,g as u,v as M,d as m,f as V,B as A}from"./index.30d36c53.js";import{S as B}from"./SvelteMarkdown.2146b79f.js";function L(i){let e,l;return{c(){e=h("img"),this.h()},l(a){e=_(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){v(e.src,l=i[0])||c(e,"src",l),c(e,"alt",i[2]),c(e,"class","svelte-d0v6un")},m(a,t){d(a,e,t)},p(a,t){t&1&&!v(e.src,l=a[0])&&c(e,"src",l),t&4&&c(e,"alt",a[2])},d(a){a&&o(e)}}}function F(i){let e,l,a,t=!!i[0]&&L(i);return{c(){e=h("a"),l=h("span"),a=D(i[2]),t&&t.c(),this.h()},l(s){e=_(s,"A",{href:!0,class:!0});var n=g(e);l=_(n,"SPAN",{});var r=g(l);a=G(r,i[2]),r.forEach(o),t&&t.l(n),n.forEach(o),this.h()},h(){c(e,"href",i[1]),c(e,"class","svelte-d0v6un")},m(s,n){d(s,e,n),b(e,l),b(l,a),t&&t.m(e,null)},p(s,[n]){n&4&&I(a,s[2]),s[0]?t?t.p(s,n):(t=L(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&2&&c(e,"href",s[1])},i:k,o:k,d(s){s&&o(e),t&&t.d()}}}function N(i,e,l){let{src:a}=e,{href:t}=e,{label:s}=e;return i.$$set=n=>{"src"in n&&l(0,a=n.src),"href"in n&&l(1,t=n.href),"label"in n&&l(2,s=n.label)},[a,t,s]}class j extends p{constructor(e){super(),y(this,e,N,F,C,{src:0,href:1,label:2})}}function w(i){let e,l,a;return l=new j({props:{href:i[1],label:i[2],src:i[0]}}),{c(){e=h("div"),S(l.$$.fragment),this.h()},l(t){e=_(t,"DIV",{class:!0});var s=g(e);E(l.$$.fragment,s),s.forEach(o),this.h()},h(){c(e,"class","gif-link-wrapper svelte-1budku7")},m(t,s){d(t,e,s),q(l,e,null),a=!0},p(t,s){const n={};s&2&&(n.href=t[1]),s&4&&(n.label=t[2]),s&1&&(n.src=t[0]),l.$set(n)},i(t){a||(u(l.$$.fragment,t),a=!0)},o(t){m(l.$$.fragment,t),a=!1},d(t){t&&o(e),A(l)}}}function H(i){let e,l,a,t;l=new B({props:{source:i[3]}});let s=!!i[1]&&w(i);return{c(){e=h("div"),S(l.$$.fragment),a=P(),s&&s.c(),this.h()},l(n){e=_(n,"DIV",{class:!0});var r=g(e);E(l.$$.fragment,r),a=z(r),s&&s.l(r),r.forEach(o),this.h()},h(){c(e,"class","page-wrapper svelte-1budku7")},m(n,r){d(n,e,r),q(l,e,null),b(e,a),s&&s.m(e,null),t=!0},p(n,[r]){const f={};r&8&&(f.source=n[3]),l.$set(f),n[1]?s?(s.p(n,r),r&2&&u(s,1)):(s=w(n),s.c(),u(s,1),s.m(e,null)):s&&(M(),m(s,1,1,()=>{s=null}),V())},i(n){t||(u(l.$$.fragment,n),u(s),t=!0)},o(n){m(l.$$.fragment,n),m(s),t=!1},d(n){n&&o(e),A(l),s&&s.d()}}}function J(i,e,l){let a,{source:t=""}=e,{src:s}=e,{href:n}=e,{gifLinkLabel:r=""}=e;return i.$$set=f=>{"source"in f&&l(4,t=f.source),"src"in f&&l(0,s=f.src),"href"in f&&l(1,n=f.href),"gifLinkLabel"in f&&l(2,r=f.gifLinkLabel)},i.$$.update=()=>{i.$$.dirty&16&&l(3,a=`<style>
        h1 {
        font-weight: bold;
        display: flex;
        align-items: baseline;
    }

    h2 {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 0;
        margin-top: 35px;
    }
    </style>
    ${t}`)},[s,n,r,a,t]}class Q extends p{constructor(e){super(),y(this,e,J,H,C,{source:4,src:0,href:1,gifLinkLabel:2})}}export{Q as C};
