import{S as M,i as P,s as V,k as v,q as B,l as b,m as S,r as H,h as m,n as u,b as L,D as d,u as J,F as q,C,I as R,a as E,y as K,c as G,z as N,A as O,J as T,K as U,L as W,g as w,v as X,d as z,f as Y,B as Q}from"./index.30d36c53.js";import{S as Z}from"./SvelteMarkdown.2146b79f.js";function y(i){let e,t;return{c(){e=v("img"),this.h()},l(s){e=b(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){C(e.src,t=i[0])||u(e,"src",t),u(e,"alt",i[2]),u(e,"class","svelte-d0v6un")},m(s,l){L(s,e,l)},p(s,l){l&1&&!C(e.src,t=s[0])&&u(e,"src",t),l&4&&u(e,"alt",s[2])},d(s){s&&m(e)}}}function x(i){let e,t,s,l=!!i[0]&&y(i);return{c(){e=v("a"),t=v("span"),s=B(i[2]),l&&l.c(),this.h()},l(n){e=b(n,"A",{href:!0,class:!0});var r=S(e);t=b(r,"SPAN",{});var h=S(t);s=H(h,i[2]),h.forEach(m),l&&l.l(r),r.forEach(m),this.h()},h(){u(e,"href",i[1]),u(e,"class","svelte-d0v6un")},m(n,r){L(n,e,r),d(e,t),d(t,s),l&&l.m(e,null)},p(n,[r]){r&4&&J(s,n[2]),n[0]?l?l.p(n,r):(l=y(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null),r&2&&u(e,"href",n[1])},i:q,o:q,d(n){n&&m(e),l&&l.d()}}}function $(i,e,t){let{src:s}=e,{href:l}=e,{label:n}=e;return i.$$set=r=>{"src"in r&&t(0,s=r.src),"href"in r&&t(1,l=r.href),"label"in r&&t(2,n=r.label)},[s,l,n]}class ee extends M{constructor(e){super(),P(this,e,$,x,V,{src:0,href:1,label:2})}}function A(i){let e,t;return{c(){e=v("img"),this.h()},l(s){e=b(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){C(e.src,t=i[1])||u(e,"src",t),u(e,"alt",""),u(e,"class","svelte-1ezj5ie")},m(s,l){L(s,e,l)},p(s,l){l&2&&!C(e.src,t=s[1])&&u(e,"src",t)},d(s){s&&m(e)}}}function F(i){let e,t,s;return t=new ee({props:{href:i[3],label:`GIFs exploring ${i[0]}`,src:i[2]}}),{c(){e=v("div"),K(t.$$.fragment),this.h()},l(l){e=b(l,"DIV",{class:!0});var n=S(e);N(t.$$.fragment,n),n.forEach(m),this.h()},h(){u(e,"class","gif-link-wrapper svelte-1ezj5ie")},m(l,n){L(l,e,n),O(t,e,null),s=!0},p(l,n){const r={};n&8&&(r.href=l[3]),n&1&&(r.label=`GIFs exploring ${l[0]}`),n&4&&(r.src=l[2]),t.$set(r)},i(l){s||(w(t.$$.fragment,l),s=!0)},o(l){z(t.$$.fragment,l),s=!1},d(l){l&&m(e),Q(t)}}}function le(i){let e,t,s,l,n,r,h,k,p,g,a=!!i[1]&&A(i);h=new Z({props:{source:i[4]}});const j=i[7].default,_=R(j,i,i[6],null);let o=!!i[3]&&F(i);return{c(){e=v("div"),t=v("div"),s=v("h1"),l=B(i[0]),n=E(),a&&a.c(),r=E(),K(h.$$.fragment),k=E(),_&&_.c(),p=E(),o&&o.c(),this.h()},l(f){e=b(f,"DIV",{class:!0});var c=S(e);t=b(c,"DIV",{class:!0});var I=S(t);s=b(I,"H1",{});var D=S(s);l=H(D,i[0]),D.forEach(m),n=G(I),a&&a.l(I),I.forEach(m),r=G(c),N(h.$$.fragment,c),k=G(c),_&&_.l(c),p=G(c),o&&o.l(c),c.forEach(m),this.h()},h(){u(t,"class","header svelte-1ezj5ie"),u(e,"class","page-wrapper svelte-1ezj5ie")},m(f,c){L(f,e,c),d(e,t),d(t,s),d(s,l),d(t,n),a&&a.m(t,null),d(e,r),O(h,e,null),d(e,k),_&&_.m(e,null),d(e,p),o&&o.m(e,null),g=!0},p(f,[c]){(!g||c&1)&&J(l,f[0]),f[1]?a?a.p(f,c):(a=A(f),a.c(),a.m(t,null)):a&&(a.d(1),a=null);const I={};c&16&&(I.source=f[4]),h.$set(I),_&&_.p&&(!g||c&64)&&T(_,j,f,f[6],g?W(j,f[6],c,null):U(f[6]),null),f[3]?o?(o.p(f,c),c&8&&w(o,1)):(o=F(f),o.c(),w(o,1),o.m(e,null)):o&&(X(),z(o,1,1,()=>{o=null}),Y())},i(f){g||(w(h.$$.fragment,f),w(_,f),w(o),g=!0)},o(f){z(h.$$.fragment,f),z(_,f),z(o),g=!1},d(f){f&&m(e),a&&a.d(),Q(h),_&&_.d(f),o&&o.d()}}}function te(i,e,t){let s,{$$slots:l={},$$scope:n}=e,{title:r=""}=e,{headerImg:h}=e,{source:k=""}=e,{gifLinkSrc:p}=e,{href:g}=e;return i.$$set=a=>{"title"in a&&t(0,r=a.title),"headerImg"in a&&t(1,h=a.headerImg),"source"in a&&t(5,k=a.source),"gifLinkSrc"in a&&t(2,p=a.gifLinkSrc),"href"in a&&t(3,g=a.href),"$$scope"in a&&t(6,n=a.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&t(4,s=`<style>
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
    ${k}`)},[r,h,p,g,s,k,n,l]}class ne extends M{constructor(e){super(),P(this,e,te,le,V,{title:0,headerImg:1,source:5,gifLinkSrc:2,href:3})}}export{ne as C};
