import{S as U,i as q,s as j,k as g,a as $,l as k,m as L,c as y,h as p,C as G,n as v,b as E,D as d,E as te,F as O,G as V,q as N,r as S,u as D,H as F,I as re,y as M,z as R,A,J as ae,K as oe,L as fe,g as w,d as I,f as le,B as H,v as se,p as ue}from"../chunks/index.e665341b.js";import{s as P,g as ne,C as ce}from"../chunks/Contents.67bf1eb2.js";import{p as ie}from"../chunks/stores.35826c6c.js";const _e=!0,Ne=Object.freeze(Object.defineProperty({__proto__:null,prerender:_e},Symbol.toStringTag,{value:"Module"})),J=""+new URL("../assets/menu.1b970936.svg",import.meta.url).href,K=""+new URL("../assets/open.ebb31ea0.svg",import.meta.url).href;function me(a){let e;return{c(){e=g("div")},l(l){e=k(l,"DIV",{}),L(e).forEach(p)},m(l,i){E(l,e,i)},d(l){l&&p(e)}}}function he(a){let e,l;return{c(){e=g("a"),l=N("Home"),this.h()},l(i){e=k(i,"A",{class:!0,href:!0});var s=L(e);l=S(s,"Home"),s.forEach(p),this.h()},h(){v(e,"class","home-button svelte-15vxitb"),v(e,"href","/")},m(i,s){E(i,e,s),d(e,l)},d(i){i&&p(e)}}}function Q(a){let e,l,i,s=a[1].label+"",r,_,t,n=a[1].sectionLabel&&W(a);return{c(){e=g("div"),n&&n.c(),l=$(),i=g("span"),r=N(s),_=$(),t=g("hr"),this.h()},l(c){e=k(c,"DIV",{class:!0});var u=L(e);n&&n.l(u),l=y(u),i=k(u,"SPAN",{class:!0});var h=L(i);r=S(h,s),h.forEach(p),_=y(u),t=k(u,"HR",{class:!0}),u.forEach(p),this.h()},h(){v(i,"class","svelte-15vxitb"),v(t,"class","solid svelte-15vxitb"),v(e,"class","location-label svelte-15vxitb")},m(c,u){E(c,e,u),n&&n.m(e,null),d(e,l),d(e,i),d(i,r),d(e,_),d(e,t)},p(c,u){c[1].sectionLabel?n?n.p(c,u):(n=W(c),n.c(),n.m(e,l)):n&&(n.d(1),n=null),u&2&&s!==(s=c[1].label+"")&&D(r,s)},d(c){c&&p(e),n&&n.d()}}}function W(a){let e,l=a[1].sectionLabel+"",i;return{c(){e=g("span"),i=N(l),this.h()},l(s){e=k(s,"SPAN",{class:!0});var r=L(e);i=S(r,l),r.forEach(p),this.h()},h(){v(e,"class","section-label svelte-15vxitb")},m(s,r){E(s,e,r),d(e,i)},p(s,r){r&2&&l!==(l=s[1].sectionLabel+"")&&D(i,l)},d(s){s&&p(e)}}}function pe(a){let e,l,i,s,r,_,t,n;function c(o,f){return o[0].url.pathname!=="/"?he:me}let u=c(a),h=u(a),m=a[1]&&Q(a);return{c(){e=g("header"),h.c(),l=$(),m&&m.c(),i=$(),s=g("button"),r=g("img"),this.h()},l(o){e=k(o,"HEADER",{class:!0});var f=L(e);h.l(f),l=y(f),m&&m.l(f),i=y(f),s=k(f,"BUTTON",{class:!0});var b=L(s);r=k(b,"IMG",{src:!0,alt:!0,class:!0}),b.forEach(p),f.forEach(p),this.h()},h(){G(r.src,_=a[2]?K:J)||v(r,"src",_),v(r,"alt","menu button"),v(r,"class","svelte-15vxitb"),v(s,"class","corner svelte-15vxitb"),v(e,"class","svelte-15vxitb")},m(o,f){E(o,e,f),h.m(e,null),d(e,l),m&&m.m(e,null),d(e,i),d(e,s),d(s,r),t||(n=te(s,"click",a[3]),t=!0)},p(o,[f]){u!==(u=c(o))&&(h.d(1),h=u(o),h&&(h.c(),h.m(e,l))),o[1]?m?m.p(o,f):(m=Q(o),m.c(),m.m(e,i)):m&&(m.d(1),m=null),f&4&&!G(r.src,_=o[2]?K:J)&&v(r,"src",_)},i:O,o:O,d(o){o&&p(e),h.d(),m&&m.d(),t=!1,n()}}}function ve(a,e,l){let i,s,r;V(a,ie,t=>l(0,s=t)),V(a,P,t=>l(2,r=t));function _(){P.toggle()}return a.$$.update=()=>{a.$$.dirty&1&&l(1,i=ne(s.url.pathname)[0])},[s,i,r,_]}class de extends U{constructor(e){super(),q(this,e,ve,pe,j,{})}}const be=""+new URL("../assets/insta.eecaea73.svg",import.meta.url).href,ge=""+new URL("../assets/store.903efce6.svg",import.meta.url).href;function X(a){let e,l;return{c(){e=g("img"),this.h()},l(i){e=k(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){G(e.src,l=a[3])||v(e,"src",l),v(e,"alt","thumbnail"),v(e,"class","svelte-1gpi3ts")},m(i,s){E(i,e,s)},p(i,s){s&8&&!G(e.src,l=i[3])&&v(e,"src",l)},d(i){i&&p(e)}}}function ke(a){let e,l,i,s,r,_,t=!!a[3]&&X(a);return{c(){e=g("li"),l=g("a"),t&&t.c(),i=N(a[0]),this.h()},l(n){e=k(n,"LI",{class:!0});var c=L(e);l=k(c,"A",{class:!0,href:!0});var u=L(l);t&&t.l(u),i=S(u,a[0]),u.forEach(p),c.forEach(p),this.h()},h(){v(l,"class",s=F(a[2]?"outside-link":void 0)+" svelte-1gpi3ts"),v(l,"href",a[1]),v(e,"class","svelte-1gpi3ts")},m(n,c){E(n,e,c),d(e,l),t&&t.m(l,null),d(l,i),r||(_=te(l,"click",a[4]),r=!0)},p(n,[c]){n[3]?t?t.p(n,c):(t=X(n),t.c(),t.m(l,i)):t&&(t.d(1),t=null),c&1&&D(i,n[0]),c&4&&s!==(s=F(n[2]?"outside-link":void 0)+" svelte-1gpi3ts")&&v(l,"class",s),c&2&&v(l,"href",n[1])},i:O,o:O,d(n){n&&p(e),t&&t.d(),r=!1,_()}}}function Le(a,e,l){let{label:i=""}=e,{link:s=""}=e,{outsideLink:r=!1}=e,{pic:_}=e;function t(){P.close()}return a.$$set=n=>{"label"in n&&l(0,i=n.label),"link"in n&&l(1,s=n.link),"outsideLink"in n&&l(2,r=n.outsideLink),"pic"in n&&l(3,_=n.pic)},[i,s,r,_,t]}class T extends U{constructor(e){super(),q(this,e,Le,ke,j,{label:0,link:1,outsideLink:2,pic:3})}}function Y(a){let e,l,i,s,r,_;l=new T({props:{outsideLink:!0,label:"Store",link:"https://nice-train.square.site",pic:ge}}),s=new T({props:{outsideLink:!0,label:"Instagram",link:"https://instagram.com/nicetrainlab",pic:be}});let t=a[0].url.pathname!=="/"&&Z();return{c(){e=g("div"),M(l.$$.fragment),i=$(),M(s.$$.fragment),r=$(),t&&t.c(),this.h()},l(n){e=k(n,"DIV",{class:!0});var c=L(e);R(l.$$.fragment,c),i=y(c),R(s.$$.fragment,c),r=y(c),t&&t.l(c),c.forEach(p),this.h()},h(){v(e,"class","corner-menu svelte-8xvg8k")},m(n,c){E(n,e,c),A(l,e,null),d(e,i),A(s,e,null),d(e,r),t&&t.m(e,null),_=!0},p(n,c){n[0].url.pathname!=="/"?t?c&1&&w(t,1):(t=Z(),t.c(),w(t,1),t.m(e,null)):t&&(se(),I(t,1,1,()=>{t=null}),le())},i(n){_||(w(l.$$.fragment,n),w(s.$$.fragment,n),w(t),_=!0)},o(n){I(l.$$.fragment,n),I(s.$$.fragment,n),I(t),_=!1},d(n){n&&p(e),H(l),H(s),t&&t.d()}}}function Z(a){let e,l,i,s,r,_;return i=new T({props:{label:"Home",link:"/"}}),r=new ce({}),{c(){e=g("hr"),l=$(),M(i.$$.fragment),s=$(),M(r.$$.fragment),this.h()},l(t){e=k(t,"HR",{class:!0,style:!0}),l=y(t),R(i.$$.fragment,t),s=y(t),R(r.$$.fragment,t),this.h()},h(){v(e,"class","solid"),ue(e,"margin-bottom","18px")},m(t,n){E(t,e,n),E(t,l,n),A(i,t,n),E(t,s,n),A(r,t,n),_=!0},i(t){_||(w(i.$$.fragment,t),w(r.$$.fragment,t),_=!0)},o(t){I(i.$$.fragment,t),I(r.$$.fragment,t),_=!1},d(t){t&&p(e),t&&p(l),H(i,t),t&&p(s),H(r,t)}}}function x(a){let e,l,i,s,r,_,t=a[1].label+"",n,c,u,h,m,o=a[1].sectionLabel&&ee(a);return{c(){e=g("div"),l=g("strong"),i=N("Next:"),s=$(),o&&o.c(),r=$(),_=g("span"),n=N(t),c=$(),u=g("a"),h=N("Next →"),this.h()},l(f){e=k(f,"DIV",{class:!0});var b=L(e);l=k(b,"STRONG",{});var C=L(l);i=S(C,"Next:"),C.forEach(p),s=y(b),o&&o.l(b),r=y(b),_=k(b,"SPAN",{});var z=L(_);n=S(z,t),z.forEach(p),b.forEach(p),c=y(f),u=k(f,"A",{class:!0,href:!0});var B=L(u);h=S(B,"Next →"),B.forEach(p),this.h()},h(){v(e,"class","next-description svelte-8xvg8k"),v(u,"class","next-button svelte-8xvg8k"),v(u,"href",m=a[1].slug)},m(f,b){E(f,e,b),d(e,l),d(l,i),d(e,s),o&&o.m(e,null),d(e,r),d(e,_),d(_,n),E(f,c,b),E(f,u,b),d(u,h)},p(f,b){f[1].sectionLabel?o?o.p(f,b):(o=ee(f),o.c(),o.m(e,r)):o&&(o.d(1),o=null),b&2&&t!==(t=f[1].label+"")&&D(n,t),b&2&&m!==(m=f[1].slug)&&v(u,"href",m)},d(f){f&&p(e),o&&o.d(),f&&p(c),f&&p(u)}}}function ee(a){let e,l=a[1].sectionLabel+"",i;return{c(){e=g("strong"),i=N(l)},l(s){e=k(s,"STRONG",{});var r=L(e);i=S(r,l),r.forEach(p)},m(s,r){E(s,e,r),d(e,i)},p(s,r){r&2&&l!==(l=s[1].sectionLabel+"")&&D(i,l)},d(s){s&&p(e)}}}function Ee(a){let e,l,i,s,r,_,t,n;l=new de({});const c=a[4].default,u=re(c,a,a[3],null);let h=a[2]&&Y(a),m=a[1]&&x(a);return{c(){e=g("div"),M(l.$$.fragment),i=$(),s=g("main"),u&&u.c(),r=$(),h&&h.c(),_=$(),t=g("footer"),m&&m.c(),this.h()},l(o){e=k(o,"DIV",{class:!0});var f=L(e);R(l.$$.fragment,f),i=y(f),s=k(f,"MAIN",{class:!0});var b=L(s);u&&u.l(b),r=y(b),h&&h.l(b),b.forEach(p),_=y(f),t=k(f,"FOOTER",{class:!0});var C=L(t);m&&m.l(C),C.forEach(p),f.forEach(p),this.h()},h(){v(s,"class","svelte-8xvg8k"),v(t,"class","svelte-8xvg8k"),v(e,"class","app svelte-8xvg8k")},m(o,f){E(o,e,f),A(l,e,null),d(e,i),d(e,s),u&&u.m(s,null),d(s,r),h&&h.m(s,null),d(e,_),d(e,t),m&&m.m(t,null),n=!0},p(o,[f]){u&&u.p&&(!n||f&8)&&ae(u,c,o,o[3],n?fe(c,o[3],f,null):oe(o[3]),null),o[2]?h?(h.p(o,f),f&4&&w(h,1)):(h=Y(o),h.c(),w(h,1),h.m(s,null)):h&&(se(),I(h,1,1,()=>{h=null}),le()),o[1]?m?m.p(o,f):(m=x(o),m.c(),m.m(t,null)):m&&(m.d(1),m=null)},i(o){n||(w(l.$$.fragment,o),w(u,o),w(h),n=!0)},o(o){I(l.$$.fragment,o),I(u,o),I(h),n=!1},d(o){o&&p(e),H(l),u&&u.d(o),h&&h.d(),m&&m.d()}}}function $e(a,e,l){let i,s,r;V(a,ie,n=>l(0,s=n)),V(a,P,n=>l(2,r=n));let{$$slots:_={},$$scope:t}=e;return a.$$set=n=>{"$$scope"in n&&l(3,t=n.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&l(1,i=ne(s.url.pathname)[1])},[s,i,r,t,_]}class Se extends U{constructor(e){super(),q(this,e,$e,Ee,j,{})}}export{Se as component,Ne as universal};
