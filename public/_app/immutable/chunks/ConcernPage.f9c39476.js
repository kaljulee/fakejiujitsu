import{S as y,i as A,s as F,k as m,q as M,l as d,m as p,r as P,h as _,n as h,b as v,D as b,u as V,F as E,C as z,I as N,a as w,y as B,c as S,z as H,A as J,J as O,K as Q,L as R,g as k,v as T,d as I,f as U,B as K}from"./index.2c6af615.js";import{S as W}from"./SvelteMarkdown.3abca1a5.js";function G(f){let e,i;return{c(){e=m("img"),this.h()},l(t){e=d(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){z(e.src,i=f[0])||h(e,"src",i),h(e,"alt",f[2]),h(e,"class","svelte-d0v6un")},m(t,l){v(t,e,l)},p(t,l){l&1&&!z(e.src,i=t[0])&&h(e,"src",i),l&4&&h(e,"alt",t[2])},d(t){t&&_(e)}}}function X(f){let e,i,t,l=!!f[0]&&G(f);return{c(){e=m("a"),i=m("span"),t=M(f[2]),l&&l.c(),this.h()},l(s){e=d(s,"A",{href:!0,class:!0});var n=p(e);i=d(n,"SPAN",{});var o=p(i);t=P(o,f[2]),o.forEach(_),l&&l.l(n),n.forEach(_),this.h()},h(){h(e,"href",f[1]),h(e,"class","svelte-d0v6un")},m(s,n){v(s,e,n),b(e,i),b(i,t),l&&l.m(e,null)},p(s,[n]){n&4&&V(t,s[2]),s[0]?l?l.p(s,n):(l=G(s),l.c(),l.m(e,null)):l&&(l.d(1),l=null),n&2&&h(e,"href",s[1])},i:E,o:E,d(s){s&&_(e),l&&l.d()}}}function Y(f,e,i){let{src:t}=e,{href:l}=e,{label:s}=e;return f.$$set=n=>{"src"in n&&i(0,t=n.src),"href"in n&&i(1,l=n.href),"label"in n&&i(2,s=n.label)},[t,l,s]}class Z extends y{constructor(e){super(),A(this,e,Y,X,F,{src:0,href:1,label:2})}}function C(f){let e,i,t=!!f[0]&&j(f),l=!!f[1]&&D(f);return{c(){e=m("div"),t&&t.c(),i=w(),l&&l.c(),this.h()},l(s){e=d(s,"DIV",{class:!0});var n=p(e);t&&t.l(n),i=S(n),l&&l.l(n),n.forEach(_),this.h()},h(){h(e,"class","header svelte-1ezj5ie")},m(s,n){v(s,e,n),t&&t.m(e,null),b(e,i),l&&l.m(e,null)},p(s,n){s[0]?t?t.p(s,n):(t=j(s),t.c(),t.m(e,i)):t&&(t.d(1),t=null),s[1]?l?l.p(s,n):(l=D(s),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(s){s&&_(e),t&&t.d(),l&&l.d()}}}function j(f){let e,i;return{c(){e=m("h1"),i=M(f[0])},l(t){e=d(t,"H1",{});var l=p(e);i=P(l,f[0]),l.forEach(_)},m(t,l){v(t,e,l),b(e,i)},p(t,l){l&1&&V(i,t[0])},d(t){t&&_(e)}}}function D(f){let e,i;return{c(){e=m("img"),this.h()},l(t){e=d(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){z(e.src,i=f[1])||h(e,"src",i),h(e,"alt",""),h(e,"class","svelte-1ezj5ie")},m(t,l){v(t,e,l)},p(t,l){l&2&&!z(e.src,i=t[1])&&h(e,"src",i)},d(t){t&&_(e)}}}function q(f){let e,i,t;return i=new Z({props:{href:f[3],label:`GIFs exploring ${f[0]}`,src:f[2]}}),{c(){e=m("div"),B(i.$$.fragment),this.h()},l(l){e=d(l,"DIV",{class:!0});var s=p(e);H(i.$$.fragment,s),s.forEach(_),this.h()},h(){h(e,"class","gif-link-wrapper svelte-1ezj5ie")},m(l,s){v(l,e,s),J(i,e,null),t=!0},p(l,s){const n={};s&8&&(n.href=l[3]),s&1&&(n.label=`GIFs exploring ${l[0]}`),s&4&&(n.src=l[2]),i.$set(n)},i(l){t||(k(i.$$.fragment,l),t=!0)},o(l){I(i.$$.fragment,l),t=!1},d(l){l&&_(e),K(i)}}}function $(f){let e,i,t,l,s,n,o=(!!f[0]||!!f[1])&&C(f);t=new W({props:{source:f[4]}});const g=f[7].default,u=N(g,f,f[6],null);let r=!!f[3]&&q(f);return{c(){e=m("div"),o&&o.c(),i=w(),B(t.$$.fragment),l=w(),u&&u.c(),s=w(),r&&r.c(),this.h()},l(a){e=d(a,"DIV",{class:!0});var c=p(e);o&&o.l(c),i=S(c),H(t.$$.fragment,c),l=S(c),u&&u.l(c),s=S(c),r&&r.l(c),c.forEach(_),this.h()},h(){h(e,"class","page-wrapper svelte-1ezj5ie")},m(a,c){v(a,e,c),o&&o.m(e,null),b(e,i),J(t,e,null),b(e,l),u&&u.m(e,null),b(e,s),r&&r.m(e,null),n=!0},p(a,[c]){a[0]||a[1]?o?o.p(a,c):(o=C(a),o.c(),o.m(e,i)):o&&(o.d(1),o=null);const L={};c&16&&(L.source=a[4]),t.$set(L),u&&u.p&&(!n||c&64)&&O(u,g,a,a[6],n?R(g,a[6],c,null):Q(a[6]),null),a[3]?r?(r.p(a,c),c&8&&k(r,1)):(r=q(a),r.c(),k(r,1),r.m(e,null)):r&&(T(),I(r,1,1,()=>{r=null}),U())},i(a){n||(k(t.$$.fragment,a),k(u,a),k(r),n=!0)},o(a){I(t.$$.fragment,a),I(u,a),I(r),n=!1},d(a){a&&_(e),o&&o.d(),K(t),u&&u.d(a),r&&r.d()}}}function x(f,e,i){let t,{$$slots:l={},$$scope:s}=e,{title:n=""}=e,{headerImg:o}=e,{source:g=""}=e,{gifLinkSrc:u}=e,{href:r}=e;return f.$$set=a=>{"title"in a&&i(0,n=a.title),"headerImg"in a&&i(1,o=a.headerImg),"source"in a&&i(5,g=a.source),"gifLinkSrc"in a&&i(2,u=a.gifLinkSrc),"href"in a&&i(3,r=a.href),"$$scope"in a&&i(6,s=a.$$scope)},f.$$.update=()=>{f.$$.dirty&32&&i(4,t=`<style>
table {
border: 1px solid black;
}
 th {
text-decoration: underline;
}

td {
border-bottom: 1px dashed gray;
}
        h1 {
        font-weight: bold;
        display: flex;
        align-items: baseline;
    }

    h2, h3, h4 {
            margin-bottom: 0;
    }

    h2 {
        font-weight: bold;
        font-size: 1.2em;
        margin-top: 35px;
    }

    h3 {
        font-size: 1em;
    }

    ul, ol {
    margin-top: 5px;
    }

    </style>
    ${g}`)},[n,o,u,r,t,g,s,l]}class te extends y{constructor(e){super(),A(this,e,x,$,F,{title:0,headerImg:1,source:5,gifLinkSrc:2,href:3})}}export{te as C};
