import{S as E,i as I,s as q,k as g,q as M,l as d,m as b,r as V,h as _,n as u,b as k,D as v,u as B,F as p,C as w,I as F,y as A,a as z,z as D,c as C,A as G,J,K,L as N,g as h,v as j,d as m,f as H,B as P}from"./index.30d36c53.js";import{S as O}from"./SvelteMarkdown.2146b79f.js";function S(i){let e,t;return{c(){e=g("img"),this.h()},l(a){e=d(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){w(e.src,t=i[0])||u(e,"src",t),u(e,"alt",i[2]),u(e,"class","svelte-d0v6un")},m(a,s){k(a,e,s)},p(a,s){s&1&&!w(e.src,t=a[0])&&u(e,"src",t),s&4&&u(e,"alt",a[2])},d(a){a&&_(e)}}}function Q(i){let e,t,a,s=!!i[0]&&S(i);return{c(){e=g("a"),t=g("span"),a=M(i[2]),s&&s.c(),this.h()},l(l){e=d(l,"A",{href:!0,class:!0});var n=b(e);t=d(n,"SPAN",{});var c=b(t);a=V(c,i[2]),c.forEach(_),s&&s.l(n),n.forEach(_),this.h()},h(){u(e,"href",i[1]),u(e,"class","svelte-d0v6un")},m(l,n){k(l,e,n),v(e,t),v(t,a),s&&s.m(e,null)},p(l,[n]){n&4&&B(a,l[2]),l[0]?s?s.p(l,n):(s=S(l),s.c(),s.m(e,null)):s&&(s.d(1),s=null),n&2&&u(e,"href",l[1])},i:p,o:p,d(l){l&&_(e),s&&s.d()}}}function R(i,e,t){let{src:a}=e,{href:s}=e,{label:l}=e;return i.$$set=n=>{"src"in n&&t(0,a=n.src),"href"in n&&t(1,s=n.href),"label"in n&&t(2,l=n.label)},[a,s,l]}class T extends E{constructor(e){super(),I(this,e,R,Q,q,{src:0,href:1,label:2})}}function y(i){let e,t,a;return t=new T({props:{href:i[1],label:i[2],src:i[0]}}),{c(){e=g("div"),A(t.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0});var l=b(e);D(t.$$.fragment,l),l.forEach(_),this.h()},h(){u(e,"class","gif-link-wrapper svelte-gti5z5")},m(s,l){k(s,e,l),G(t,e,null),a=!0},p(s,l){const n={};l&2&&(n.href=s[1]),l&4&&(n.label=s[2]),l&1&&(n.src=s[0]),t.$set(n)},i(s){a||(h(t.$$.fragment,s),a=!0)},o(s){m(t.$$.fragment,s),a=!1},d(s){s&&_(e),P(t)}}}function U(i){let e,t,a,s,l;t=new O({props:{source:i[3]}});const n=i[6].default,c=F(n,i,i[5],null);let o=!!i[1]&&y(i);return{c(){e=g("div"),A(t.$$.fragment),a=z(),c&&c.c(),s=z(),o&&o.c(),this.h()},l(r){e=d(r,"DIV",{class:!0});var f=b(e);D(t.$$.fragment,f),a=C(f),c&&c.l(f),s=C(f),o&&o.l(f),f.forEach(_),this.h()},h(){u(e,"class","page-wrapper svelte-gti5z5")},m(r,f){k(r,e,f),G(t,e,null),v(e,a),c&&c.m(e,null),v(e,s),o&&o.m(e,null),l=!0},p(r,[f]){const L={};f&8&&(L.source=r[3]),t.$set(L),c&&c.p&&(!l||f&32)&&J(c,n,r,r[5],l?N(n,r[5],f,null):K(r[5]),null),r[1]?o?(o.p(r,f),f&2&&h(o,1)):(o=y(r),o.c(),h(o,1),o.m(e,null)):o&&(j(),m(o,1,1,()=>{o=null}),H())},i(r){l||(h(t.$$.fragment,r),h(c,r),h(o),l=!0)},o(r){m(t.$$.fragment,r),m(c,r),m(o),l=!1},d(r){r&&_(e),P(t),c&&c.d(r),o&&o.d()}}}function W(i,e,t){let a,{$$slots:s={},$$scope:l}=e,{source:n=""}=e,{src:c}=e,{href:o}=e,{gifLinkLabel:r=""}=e;return i.$$set=f=>{"source"in f&&t(4,n=f.source),"src"in f&&t(0,c=f.src),"href"in f&&t(1,o=f.href),"gifLinkLabel"in f&&t(2,r=f.gifLinkLabel),"$$scope"in f&&t(5,l=f.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(3,a=`<style>
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

    ul {
    margin-top: 5px;
    }

    </style>
    ${n}`)},[c,o,r,a,n,l,s]}class Z extends E{constructor(e){super(),I(this,e,W,U,q,{source:4,src:0,href:1,gifLinkLabel:2})}}export{Z as C};
