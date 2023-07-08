import{S as V,i as y,s as B,k as v,q as F,l as k,m as w,r as H,h as _,n as h,b as E,D as d,u as J,F as z,C as G,I as Q,a as C,y as K,c as D,z as N,A as j,J as R,K as T,L as U,g as I,v as W,d as q,f as X,B as O}from"./index.30d36c53.js";import{S as Y}from"./SvelteMarkdown.2146b79f.js";function A(n){let e,t;return{c(){e=v("img"),this.h()},l(i){e=k(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){G(e.src,t=n[0])||h(e,"src",t),h(e,"alt",n[2]),h(e,"class","svelte-d0v6un")},m(i,l){E(i,e,l)},p(i,l){l&1&&!G(e.src,t=i[0])&&h(e,"src",t),l&4&&h(e,"alt",i[2])},d(i){i&&_(e)}}}function Z(n){let e,t,i,l=!!n[0]&&A(n);return{c(){e=v("a"),t=v("span"),i=F(n[2]),l&&l.c(),this.h()},l(s){e=k(s,"A",{href:!0,class:!0});var a=w(e);t=k(a,"SPAN",{});var g=w(t);i=H(g,n[2]),g.forEach(_),l&&l.l(a),a.forEach(_),this.h()},h(){h(e,"href",n[1]),h(e,"class","svelte-d0v6un")},m(s,a){E(s,e,a),d(e,t),d(t,i),l&&l.m(e,null)},p(s,[a]){a&4&&J(i,s[2]),s[0]?l?l.p(s,a):(l=A(s),l.c(),l.m(e,null)):l&&(l.d(1),l=null),a&2&&h(e,"href",s[1])},i:z,o:z,d(s){s&&_(e),l&&l.d()}}}function p(n,e,t){let{src:i}=e,{href:l}=e,{label:s}=e;return n.$$set=a=>{"src"in a&&t(0,i=a.src),"href"in a&&t(1,l=a.href),"label"in a&&t(2,s=a.label)},[i,l,s]}class x extends V{constructor(e){super(),y(this,e,p,Z,B,{src:0,href:1,label:2})}}function M(n){let e,t,i;return{c(){e=v("div"),t=v("img"),this.h()},l(l){e=k(l,"DIV",{class:!0});var s=w(e);t=k(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(_),this.h()},h(){G(t.src,i=n[1])||h(t,"src",i),h(t,"alt",""),h(t,"class","svelte-7cqutl"),h(e,"class","header svelte-7cqutl")},m(l,s){E(l,e,s),d(e,t)},p(l,s){s&2&&!G(t.src,i=l[1])&&h(t,"src",i)},d(l){l&&_(e)}}}function P(n){let e,t,i;return t=new x({props:{href:n[3],label:n[4],src:n[2]}}),{c(){e=v("div"),K(t.$$.fragment),this.h()},l(l){e=k(l,"DIV",{class:!0});var s=w(e);N(t.$$.fragment,s),s.forEach(_),this.h()},h(){h(e,"class","gif-link-wrapper svelte-7cqutl")},m(l,s){E(l,e,s),j(t,e,null),i=!0},p(l,s){const a={};s&8&&(a.href=l[3]),s&16&&(a.label=l[4]),s&4&&(a.src=l[2]),t.$set(a)},i(l){i||(I(t.$$.fragment,l),i=!0)},o(l){q(t.$$.fragment,l),i=!1},d(l){l&&_(e),O(t)}}}function $(n){let e,t,i,l,s,a,g,b,m,o=!!n[1]&&M(n);a=new Y({props:{source:n[5]}});const L=n[8].default,f=Q(L,n,n[7],null);let c=!!n[3]&&P(n);return{c(){e=v("div"),t=v("h1"),i=F(n[0]),l=C(),o&&o.c(),s=C(),K(a.$$.fragment),g=C(),f&&f.c(),b=C(),c&&c.c(),this.h()},l(r){e=k(r,"DIV",{class:!0});var u=w(e);t=k(u,"H1",{});var S=w(t);i=H(S,n[0]),S.forEach(_),l=D(u),o&&o.l(u),s=D(u),N(a.$$.fragment,u),g=D(u),f&&f.l(u),b=D(u),c&&c.l(u),u.forEach(_),this.h()},h(){h(e,"class","page-wrapper svelte-7cqutl")},m(r,u){E(r,e,u),d(e,t),d(t,i),d(e,l),o&&o.m(e,null),d(e,s),j(a,e,null),d(e,g),f&&f.m(e,null),d(e,b),c&&c.m(e,null),m=!0},p(r,[u]){(!m||u&1)&&J(i,r[0]),r[1]?o?o.p(r,u):(o=M(r),o.c(),o.m(e,s)):o&&(o.d(1),o=null);const S={};u&32&&(S.source=r[5]),a.$set(S),f&&f.p&&(!m||u&128)&&R(f,L,r,r[7],m?U(L,r[7],u,null):T(r[7]),null),r[3]?c?(c.p(r,u),u&8&&I(c,1)):(c=P(r),c.c(),I(c,1),c.m(e,null)):c&&(W(),q(c,1,1,()=>{c=null}),X())},i(r){m||(I(a.$$.fragment,r),I(f,r),I(c),m=!0)},o(r){q(a.$$.fragment,r),q(f,r),q(c),m=!1},d(r){r&&_(e),o&&o.d(),O(a),f&&f.d(r),c&&c.d()}}}function ee(n,e,t){let i,{$$slots:l={},$$scope:s}=e,{title:a=""}=e,{headerImg:g}=e,{source:b=""}=e,{gifLinkSrc:m}=e,{href:o}=e,{gifLinkLabel:L=""}=e;return n.$$set=f=>{"title"in f&&t(0,a=f.title),"headerImg"in f&&t(1,g=f.headerImg),"source"in f&&t(6,b=f.source),"gifLinkSrc"in f&&t(2,m=f.gifLinkSrc),"href"in f&&t(3,o=f.href),"gifLinkLabel"in f&&t(4,L=f.gifLinkLabel),"$$scope"in f&&t(7,s=f.$$scope)},n.$$.update=()=>{n.$$.dirty&64&&t(5,i=`<style>
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
    ${b}`)},[a,g,m,o,L,i,b,s,l]}class se extends V{constructor(e){super(),y(this,e,ee,$,B,{title:0,headerImg:1,source:6,gifLinkSrc:2,href:3,gifLinkLabel:4})}}export{se as C};
