import{S as L,i as y,s as B,k as b,q as C,a as j,l as v,m as k,r as D,h as d,c as z,n as g,b as N,D as m,u as S,F as J,M as P,G,E as Q,e as M,g as E,v as U,f as V,d as q,N as H,y as K,z as R,A as T,O as W,P as X,B as Y}from"./index.897d8c03.js";import{w as Z}from"./singletons.a1b7e119.js";import{p as $}from"./stores.754681b0.js";function ee(){const{subscribe:o,set:e,update:t}=Z(!1);return{subscribe:o,toggle:()=>t(l=>!l),close:()=>e(!1),open:()=>e(!0)}}const te=ee(),w=[{title:{label:"Quick Start"},items:[{label:"Introduction",slug:"/intro"},{label:"Fake Jiu Jitsu in One Image",slug:"/one-image"},{label:"Fake Jiu Jitsu in One Sentence",slug:"/one-sentence"}]}];function le(){return w.reduce((e,t)=>(t.items?t.items.forEach(l=>{e.push({sectionLabel:t.title.label,label:l.label,slug:l.slug})}):e.push({label:t.title.label,slug:t.slug}),e),[])}const ne=le();function fe(o){const e=ne,t=[],l=e.findIndex(n=>n.slug===o);return l!==-1&&(t.push(e[l]),t.push(e[l+1])),t}function O(o,e,t){const l=o.slice();return l[5]=e[t],l}function x(o){let e,t,l=o[5].label+"",n,r,a,i,s;return{c(){e=b("li"),t=b("a"),n=C(l),this.h()},l(h){e=v(h,"LI",{"aria-current":!0,class:!0});var c=k(e);t=v(c,"A",{href:!0,class:!0});var u=k(t);n=D(u,l),u.forEach(d),c.forEach(d),this.h()},h(){g(t,"href",r=o[5].slug),g(t,"class","svelte-2qa554"),g(e,"aria-current",a=o[3].url.pathname===o[5].slug?"page":void 0),g(e,"class","svelte-2qa554")},m(h,c){N(h,e,c),m(e,t),m(t,n),i||(s=Q(t,"click",o[4]),i=!0)},p(h,c){c&2&&l!==(l=h[5].label+"")&&S(n,l),c&2&&r!==(r=h[5].slug)&&g(t,"href",r),c&10&&a!==(a=h[3].url.pathname===h[5].slug?"page":void 0)&&g(e,"aria-current",a)},d(h){h&&d(e),i=!1,s()}}}function ae(o){let e,t,l,n,r=o[0].label+"",a,i,s,h=o[1],c=[];for(let u=0;u<h.length;u+=1)c[u]=x(O(o,h,u));return{c(){e=b("div"),t=b("span"),l=C(o[2]),n=C(". "),a=C(r),i=j(),s=b("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=v(u,"DIV",{});var _=k(e);t=v(_,"SPAN",{class:!0});var f=k(t);l=D(f,o[2]),n=D(f,". "),a=D(f,r),f.forEach(d),i=z(_),s=v(_,"UL",{class:!0});var p=k(s);for(let I=0;I<c.length;I+=1)c[I].l(p);p.forEach(d),_.forEach(d),this.h()},h(){g(t,"class","title svelte-2qa554"),g(s,"class","svelte-2qa554")},m(u,_){N(u,e,_),m(e,t),m(t,l),m(t,n),m(t,a),m(e,i),m(e,s);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(s,null)},p(u,[_]){if(_&4&&S(l,u[2]),_&1&&r!==(r=u[0].label+"")&&S(a,r),_&26){h=u[1];let f;for(f=0;f<h.length;f+=1){const p=O(u,h,f);c[f]?c[f].p(p,_):(c[f]=x(p),c[f].c(),c[f].m(s,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=h.length}},i:J,o:J,d(u){u&&d(e),P(c,u)}}}function se(o,e,t){let l;G(o,$,s=>t(3,l=s));let{title:n}=e,{items:r=[]}=e,{index:a=""}=e;function i(){te.close()}return o.$$set=s=>{"title"in s&&t(0,n=s.title),"items"in s&&t(1,r=s.items),"index"in s&&t(2,a=s.index)},[n,r,a,l,i]}class re extends L{constructor(e){super(),y(this,e,se,ae,B,{title:0,items:1,index:2})}}function A(o,e,t){const l=o.slice();return l[0]=e[t],l[2]=t,l}function F(o){let e,t;const l=[o[0],{index:o[2]+1}];let n={};for(let r=0;r<l.length;r+=1)n=H(n,l[r]);return e=new re({props:n}),{c(){K(e.$$.fragment)},l(r){R(e.$$.fragment,r)},m(r,a){T(e,r,a),t=!0},p(r,a){const i=a&0?W(l,[X(r[0]),l[1]]):{};e.$set(i)},i(r){t||(E(e.$$.fragment,r),t=!0)},o(r){q(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function oe(o){let e,t,l=w,n=[];for(let a=0;a<l.length;a+=1)n[a]=F(A(o,l,a));const r=a=>q(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=M()},l(a){for(let i=0;i<n.length;i+=1)n[i].l(a);e=M()},m(a,i){for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(a,i);N(a,e,i),t=!0},p(a,[i]){if(i&0){l=w;let s;for(s=0;s<l.length;s+=1){const h=A(a,l,s);n[s]?(n[s].p(h,i),E(n[s],1)):(n[s]=F(h),n[s].c(),E(n[s],1),n[s].m(e.parentNode,e))}for(U(),s=l.length;s<n.length;s+=1)r(s);V()}},i(a){if(!t){for(let i=0;i<l.length;i+=1)E(n[i]);t=!0}},o(a){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)q(n[i]);t=!1},d(a){P(n,a),a&&d(e)}}}class he extends L{constructor(e){super(),y(this,e,null,oe,B,{})}}export{he as C,fe as g,te as s};
