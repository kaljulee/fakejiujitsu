import{S as q,i as j,s as z,k as g,a as $,l as k,m as E,c as y,h as p,C as V,n as v,b as L,D as d,E as le,F as I,G as P,q as H,r as w,u as D,H as J,I as re,y as O,z as C,A as R,J as oe,K as fe,L as ue,g as M,d as S,f as se,B as A,v as ne,p as ce}from"../chunks/index.897d8c03.js";import{s as T,C as me}from"../chunks/Contents.64836d9e.js";import{p as ie}from"../chunks/stores.01842eda.js";import{g as ae,S as G}from"../chunks/data.f36e1ba7.js";const _e=!0,Ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:_e},Symbol.toStringTag,{value:"Module"})),K=""+new URL("../assets/menu.1b970936.svg",import.meta.url).href,Q=""+new URL("../assets/open.ebb31ea0.svg",import.meta.url).href;function he(r){let e;return{c(){e=g("div")},l(l){e=k(l,"DIV",{}),E(e).forEach(p)},m(l,i){L(l,e,i)},p:I,d(l){l&&p(e)}}}function pe(r){let e,l;return{c(){e=g("a"),l=H("Home"),this.h()},l(i){e=k(i,"A",{class:!0,href:!0});var s=E(e);l=w(s,"Home"),s.forEach(p),this.h()},h(){v(e,"class","home-button svelte-15vxitb"),v(e,"href",G.HOME)},m(i,s){L(i,e,s),d(e,l)},p:I,d(i){i&&p(e)}}}function W(r){let e,l,i,s=r[1].label+"",a,_,t,n=r[1].sectionLabel&&X(r);return{c(){e=g("div"),n&&n.c(),l=$(),i=g("span"),a=H(s),_=$(),t=g("hr"),this.h()},l(u){e=k(u,"DIV",{class:!0});var c=E(e);n&&n.l(c),l=y(c),i=k(c,"SPAN",{class:!0});var m=E(i);a=w(m,s),m.forEach(p),_=y(c),t=k(c,"HR",{class:!0}),c.forEach(p),this.h()},h(){v(i,"class","svelte-15vxitb"),v(t,"class","solid svelte-15vxitb"),v(e,"class","location-label svelte-15vxitb")},m(u,c){L(u,e,c),n&&n.m(e,null),d(e,l),d(e,i),d(i,a),d(e,_),d(e,t)},p(u,c){u[1].sectionLabel?n?n.p(u,c):(n=X(u),n.c(),n.m(e,l)):n&&(n.d(1),n=null),c&2&&s!==(s=u[1].label+"")&&D(a,s)},d(u){u&&p(e),n&&n.d()}}}function X(r){let e,l=r[1].sectionLabel+"",i;return{c(){e=g("span"),i=H(l),this.h()},l(s){e=k(s,"SPAN",{class:!0});var a=E(e);i=w(a,l),a.forEach(p),this.h()},h(){v(e,"class","section-label svelte-15vxitb")},m(s,a){L(s,e,a),d(e,i)},p(s,a){a&2&&l!==(l=s[1].sectionLabel+"")&&D(i,l)},d(s){s&&p(e)}}}function ve(r){let e,l,i,s,a,_,t,n;function u(o,f){return o[0].url.pathname!==G.HOME?pe:he}let c=u(r),m=c(r),h=r[1]&&W(r);return{c(){e=g("header"),m.c(),l=$(),h&&h.c(),i=$(),s=g("button"),a=g("img"),this.h()},l(o){e=k(o,"HEADER",{class:!0});var f=E(e);m.l(f),l=y(f),h&&h.l(f),i=y(f),s=k(f,"BUTTON",{class:!0});var b=E(s);a=k(b,"IMG",{src:!0,alt:!0,class:!0}),b.forEach(p),f.forEach(p),this.h()},h(){V(a.src,_=r[2]?Q:K)||v(a,"src",_),v(a,"alt","menu button"),v(a,"class","svelte-15vxitb"),v(s,"class","corner svelte-15vxitb"),v(e,"class","svelte-15vxitb")},m(o,f){L(o,e,f),m.m(e,null),d(e,l),h&&h.m(e,null),d(e,i),d(e,s),d(s,a),t||(n=le(s,"click",r[3]),t=!0)},p(o,[f]){c===(c=u(o))&&m?m.p(o,f):(m.d(1),m=c(o),m&&(m.c(),m.m(e,l))),o[1]?h?h.p(o,f):(h=W(o),h.c(),h.m(e,i)):h&&(h.d(1),h=null),f&4&&!V(a.src,_=o[2]?Q:K)&&v(a,"src",_)},i:I,o:I,d(o){o&&p(e),m.d(),h&&h.d(),t=!1,n()}}}function de(r,e,l){let i,s,a;P(r,ie,t=>l(0,s=t)),P(r,T,t=>l(2,a=t));function _(){T.toggle()}return r.$$.update=()=>{r.$$.dirty&1&&l(1,i=ae(s.url.pathname)[0])},[s,i,a,_]}class be extends q{constructor(e){super(),j(this,e,de,ve,z,{})}}const ge=""+new URL("../assets/insta.eecaea73.svg",import.meta.url).href,ke=""+new URL("../assets/store.903efce6.svg",import.meta.url).href;function Y(r){let e,l;return{c(){e=g("img"),this.h()},l(i){e=k(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){V(e.src,l=r[3])||v(e,"src",l),v(e,"alt","thumbnail"),v(e,"class","svelte-1gpi3ts")},m(i,s){L(i,e,s)},p(i,s){s&8&&!V(e.src,l=i[3])&&v(e,"src",l)},d(i){i&&p(e)}}}function Ee(r){let e,l,i,s,a,_,t=!!r[3]&&Y(r);return{c(){e=g("li"),l=g("a"),t&&t.c(),i=H(r[0]),this.h()},l(n){e=k(n,"LI",{class:!0});var u=E(e);l=k(u,"A",{class:!0,href:!0});var c=E(l);t&&t.l(c),i=w(c,r[0]),c.forEach(p),u.forEach(p),this.h()},h(){v(l,"class",s=J(r[2]?"outside-link":void 0)+" svelte-1gpi3ts"),v(l,"href",r[1]),v(e,"class","svelte-1gpi3ts")},m(n,u){L(n,e,u),d(e,l),t&&t.m(l,null),d(l,i),a||(_=le(l,"click",r[4]),a=!0)},p(n,[u]){n[3]?t?t.p(n,u):(t=Y(n),t.c(),t.m(l,i)):t&&(t.d(1),t=null),u&1&&D(i,n[0]),u&4&&s!==(s=J(n[2]?"outside-link":void 0)+" svelte-1gpi3ts")&&v(l,"class",s),u&2&&v(l,"href",n[1])},i:I,o:I,d(n){n&&p(e),t&&t.d(),a=!1,_()}}}function Le(r,e,l){let{label:i=""}=e,{link:s=""}=e,{outsideLink:a=!1}=e,{pic:_}=e;function t(){T.close()}return r.$$set=n=>{"label"in n&&l(0,i=n.label),"link"in n&&l(1,s=n.link),"outsideLink"in n&&l(2,a=n.outsideLink),"pic"in n&&l(3,_=n.pic)},[i,s,a,_,t]}class U extends q{constructor(e){super(),j(this,e,Le,Ee,z,{label:0,link:1,outsideLink:2,pic:3})}}function Z(r){let e,l,i,s,a,_;l=new U({props:{outsideLink:!0,label:"Store",link:"https://nice-train.square.site",pic:ke}}),s=new U({props:{outsideLink:!0,label:"Instagram",link:"https://instagram.com/nicetrainlab",pic:ge}});let t=r[0].url.pathname!==G.HOME&&x();return{c(){e=g("div"),O(l.$$.fragment),i=$(),O(s.$$.fragment),a=$(),t&&t.c(),this.h()},l(n){e=k(n,"DIV",{class:!0});var u=E(e);C(l.$$.fragment,u),i=y(u),C(s.$$.fragment,u),a=y(u),t&&t.l(u),u.forEach(p),this.h()},h(){v(e,"class","corner-menu svelte-5vma2y")},m(n,u){L(n,e,u),R(l,e,null),d(e,i),R(s,e,null),d(e,a),t&&t.m(e,null),_=!0},p(n,u){n[0].url.pathname!==G.HOME?t?(t.p(n,u),u&1&&M(t,1)):(t=x(),t.c(),M(t,1),t.m(e,null)):t&&(ne(),S(t,1,1,()=>{t=null}),se())},i(n){_||(M(l.$$.fragment,n),M(s.$$.fragment,n),M(t),_=!0)},o(n){S(l.$$.fragment,n),S(s.$$.fragment,n),S(t),_=!1},d(n){n&&p(e),A(l),A(s),t&&t.d()}}}function x(r){let e,l,i,s,a,_;return i=new U({props:{label:"Home",link:G.HOME}}),a=new me({}),{c(){e=g("hr"),l=$(),O(i.$$.fragment),s=$(),O(a.$$.fragment),this.h()},l(t){e=k(t,"HR",{class:!0,style:!0}),l=y(t),C(i.$$.fragment,t),s=y(t),C(a.$$.fragment,t),this.h()},h(){v(e,"class","solid"),ce(e,"margin-bottom","18px")},m(t,n){L(t,e,n),L(t,l,n),R(i,t,n),L(t,s,n),R(a,t,n),_=!0},p:I,i(t){_||(M(i.$$.fragment,t),M(a.$$.fragment,t),_=!0)},o(t){S(i.$$.fragment,t),S(a.$$.fragment,t),_=!1},d(t){t&&p(e),t&&p(l),A(i,t),t&&p(s),A(a,t)}}}function ee(r){let e,l,i,s,a,_,t=r[1].label+"",n,u,c,m,h,o=r[1].sectionLabel&&te(r);return{c(){e=g("div"),l=g("strong"),i=H("Next:"),s=$(),o&&o.c(),a=$(),_=g("span"),n=H(t),u=$(),c=g("a"),m=H("Next →"),this.h()},l(f){e=k(f,"DIV",{class:!0});var b=E(e);l=k(b,"STRONG",{});var N=E(l);i=w(N,"Next:"),N.forEach(p),s=y(b),o&&o.l(b),a=y(b),_=k(b,"SPAN",{});var B=E(_);n=w(B,t),B.forEach(p),b.forEach(p),u=y(f),c=k(f,"A",{class:!0,href:!0});var F=E(c);m=w(F,"Next →"),F.forEach(p),this.h()},h(){v(e,"class","next-description svelte-5vma2y"),v(c,"class","next-button svelte-5vma2y"),v(c,"href",h=r[1].slug)},m(f,b){L(f,e,b),d(e,l),d(l,i),d(e,s),o&&o.m(e,null),d(e,a),d(e,_),d(_,n),L(f,u,b),L(f,c,b),d(c,m)},p(f,b){f[1].sectionLabel?o?o.p(f,b):(o=te(f),o.c(),o.m(e,a)):o&&(o.d(1),o=null),b&2&&t!==(t=f[1].label+"")&&D(n,t),b&2&&h!==(h=f[1].slug)&&v(c,"href",h)},d(f){f&&p(e),o&&o.d(),f&&p(u),f&&p(c)}}}function te(r){let e,l=r[1].sectionLabel+"",i;return{c(){e=g("strong"),i=H(l)},l(s){e=k(s,"STRONG",{});var a=E(e);i=w(a,l),a.forEach(p)},m(s,a){L(s,e,a),d(e,i)},p(s,a){a&2&&l!==(l=s[1].sectionLabel+"")&&D(i,l)},d(s){s&&p(e)}}}function $e(r){let e,l,i,s,a,_,t,n;l=new be({});const u=r[4].default,c=re(u,r,r[3],null);let m=r[2]&&Z(r),h=r[1]&&ee(r);return{c(){e=g("div"),O(l.$$.fragment),i=$(),s=g("main"),c&&c.c(),a=$(),m&&m.c(),_=$(),t=g("footer"),h&&h.c(),this.h()},l(o){e=k(o,"DIV",{class:!0});var f=E(e);C(l.$$.fragment,f),i=y(f),s=k(f,"MAIN",{class:!0});var b=E(s);c&&c.l(b),a=y(b),m&&m.l(b),b.forEach(p),_=y(f),t=k(f,"FOOTER",{class:!0});var N=E(t);h&&h.l(N),N.forEach(p),f.forEach(p),this.h()},h(){v(s,"class","svelte-5vma2y"),v(t,"class","svelte-5vma2y"),v(e,"class","app svelte-5vma2y")},m(o,f){L(o,e,f),R(l,e,null),d(e,i),d(e,s),c&&c.m(s,null),d(s,a),m&&m.m(s,null),d(e,_),d(e,t),h&&h.m(t,null),n=!0},p(o,[f]){c&&c.p&&(!n||f&8)&&oe(c,u,o,o[3],n?ue(u,o[3],f,null):fe(o[3]),null),o[2]?m?(m.p(o,f),f&4&&M(m,1)):(m=Z(o),m.c(),M(m,1),m.m(s,null)):m&&(ne(),S(m,1,1,()=>{m=null}),se()),o[1]?h?h.p(o,f):(h=ee(o),h.c(),h.m(t,null)):h&&(h.d(1),h=null)},i(o){n||(M(l.$$.fragment,o),M(c,o),M(m),n=!0)},o(o){S(l.$$.fragment,o),S(c,o),S(m),n=!1},d(o){o&&p(e),A(l),c&&c.d(o),m&&m.d(),h&&h.d()}}}function ye(r,e,l){let i,s,a;P(r,ie,n=>l(0,s=n)),P(r,T,n=>l(2,a=n));let{$$slots:_={},$$scope:t}=e;return r.$$set=n=>{"$$scope"in n&&l(3,t=n.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&l(1,i=ae(s.url.pathname)[1])},[s,i,a,t,_]}class Ne extends q{constructor(e){super(),j(this,e,ye,$e,z,{})}}export{Ne as component,Ie as universal};
