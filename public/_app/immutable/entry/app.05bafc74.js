import{S as q,i as B,s as C,a as U,e as d,c as z,b as v,d as h,f as k,g as E,h as g,j as W,o as F,k as G,l as H,m as J,n as D,p,q as K,r as M,u as Q,v as A,w as I,x as R,y as b,z as O,A as L,B as P}from"../chunks/index.30d36c53.js";const X="modulepreload",Y=function(_,t){return new URL(_,t).href},T={},u=function(t,i,n){if(!i||i.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(i.map(l=>{if(l=Y(l,n),l in T)return;T[l]=!0;const e=l.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(!!n)for(let a=r.length-1;a>=0;a--){const m=r[a];if(m.href===l&&(!e||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":X,e||(s.as="script",s.crossOrigin=""),s.href=l,document.head.appendChild(s),e)return new Promise((a,m)=>{s.addEventListener("load",a),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())},nt={};function Z(_){let t,i,n;var r=_[1][0];function l(e){return{props:{data:e[3],form:e[2]}}}return r&&(t=R(r,l(_)),_[12](t)),{c(){t&&b(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&L(t,e,o),v(e,i,o),n=!0},p(e,o){const c={};if(o&8&&(c.data=e[3]),o&4&&(c.form=e[2]),o&2&&r!==(r=e[1][0])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{P(s,1)}),k()}r?(t=R(r,l(e)),e[12](t),b(t.$$.fragment),E(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else r&&t.$set(c)},i(e){n||(t&&E(t.$$.fragment,e),n=!0)},o(e){t&&h(t.$$.fragment,e),n=!1},d(e){_[12](null),e&&g(i),t&&P(t,e)}}}function $(_){let t,i,n;var r=_[1][0];function l(e){return{props:{data:e[3],$$slots:{default:[x]},$$scope:{ctx:e}}}}return r&&(t=R(r,l(_)),_[11](t)),{c(){t&&b(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&L(t,e,o),v(e,i,o),n=!0},p(e,o){const c={};if(o&8&&(c.data=e[3]),o&8215&&(c.$$scope={dirty:o,ctx:e}),o&2&&r!==(r=e[1][0])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{P(s,1)}),k()}r?(t=R(r,l(e)),e[11](t),b(t.$$.fragment),E(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else r&&t.$set(c)},i(e){n||(t&&E(t.$$.fragment,e),n=!0)},o(e){t&&h(t.$$.fragment,e),n=!1},d(e){_[11](null),e&&g(i),t&&P(t,e)}}}function x(_){let t,i,n;var r=_[1][1];function l(e){return{props:{data:e[4],form:e[2]}}}return r&&(t=R(r,l(_)),_[10](t)),{c(){t&&b(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&L(t,e,o),v(e,i,o),n=!0},p(e,o){const c={};if(o&16&&(c.data=e[4]),o&4&&(c.form=e[2]),o&2&&r!==(r=e[1][1])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{P(s,1)}),k()}r?(t=R(r,l(e)),e[10](t),b(t.$$.fragment),E(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else r&&t.$set(c)},i(e){n||(t&&E(t.$$.fragment,e),n=!0)},o(e){t&&h(t.$$.fragment,e),n=!1},d(e){_[10](null),e&&g(i),t&&P(t,e)}}}function V(_){let t,i=_[6]&&y(_);return{c(){t=G("div"),i&&i.c(),this.h()},l(n){t=H(n,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(t);i&&i.l(r),r.forEach(g),this.h()},h(){D(t,"id","svelte-announcer"),D(t,"aria-live","assertive"),D(t,"aria-atomic","true"),p(t,"position","absolute"),p(t,"left","0"),p(t,"top","0"),p(t,"clip","rect(0 0 0 0)"),p(t,"clip-path","inset(50%)"),p(t,"overflow","hidden"),p(t,"white-space","nowrap"),p(t,"width","1px"),p(t,"height","1px")},m(n,r){v(n,t,r),i&&i.m(t,null)},p(n,r){n[6]?i?i.p(n,r):(i=y(n),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(n){n&&g(t),i&&i.d()}}}function y(_){let t;return{c(){t=K(_[7])},l(i){t=M(i,_[7])},m(i,n){v(i,t,n)},p(i,n){n&128&&Q(t,i[7])},d(i){i&&g(t)}}}function tt(_){let t,i,n,r,l;const e=[$,Z],o=[];function c(a,m){return a[1][1]?0:1}t=c(_),i=o[t]=e[t](_);let s=_[5]&&V(_);return{c(){i.c(),n=U(),s&&s.c(),r=d()},l(a){i.l(a),n=z(a),s&&s.l(a),r=d()},m(a,m){o[t].m(a,m),v(a,n,m),s&&s.m(a,m),v(a,r,m),l=!0},p(a,[m]){let w=t;t=c(a),t===w?o[t].p(a,m):(A(),h(o[w],1,1,()=>{o[w]=null}),k(),i=o[t],i?i.p(a,m):(i=o[t]=e[t](a),i.c()),E(i,1),i.m(n.parentNode,n)),a[5]?s?s.p(a,m):(s=V(a),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},i(a){l||(E(i),l=!0)},o(a){h(i),l=!1},d(a){o[t].d(a),a&&g(n),s&&s.d(a),a&&g(r)}}}function et(_,t,i){let{stores:n}=t,{page:r}=t,{constructors:l}=t,{components:e=[]}=t,{form:o}=t,{data_0:c=null}=t,{data_1:s=null}=t;W(n.page.notify);let a=!1,m=!1,w=null;F(()=>{const f=n.page.subscribe(()=>{a&&(i(6,m=!0),i(7,w=document.title||"untitled page"))});return i(5,a=!0),f});function j(f){I[f?"unshift":"push"](()=>{e[1]=f,i(0,e)})}function N(f){I[f?"unshift":"push"](()=>{e[0]=f,i(0,e)})}function S(f){I[f?"unshift":"push"](()=>{e[0]=f,i(0,e)})}return _.$$set=f=>{"stores"in f&&i(8,n=f.stores),"page"in f&&i(9,r=f.page),"constructors"in f&&i(1,l=f.constructors),"components"in f&&i(0,e=f.components),"form"in f&&i(2,o=f.form),"data_0"in f&&i(3,c=f.data_0),"data_1"in f&&i(4,s=f.data_1)},_.$$.update=()=>{_.$$.dirty&768&&n.page.set(r)},[e,l,o,c,s,a,m,w,n,r,j,N,S]}class rt extends q{constructor(t){super(),B(this,t,et,tt,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ot=[()=>u(()=>import("../nodes/0.4cbad519.js"),["..\\nodes\\0.4cbad519.js","..\\chunks\\index.30d36c53.js","..\\chunks\\Contents.e91aa926.js","..\\chunks\\singletons.f1a59788.js","..\\chunks\\stores.9dac3858.js","..\\chunks\\data.4f4a35d0.js","..\\assets\\Contents.af1e10ef.css","..\\assets\\0.7c91f646.css"],import.meta.url),()=>u(()=>import("../nodes/1.f6c29d15.js"),["..\\nodes\\1.f6c29d15.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\chunks\\stores.9dac3858.js","..\\chunks\\singletons.f1a59788.js","..\\assets\\1.37e009bf.css"],import.meta.url),()=>u(()=>import("../nodes/2.b133361d.js"),["..\\nodes\\2.b133361d.js","..\\chunks\\index.30d36c53.js","..\\chunks\\data.4f4a35d0.js","..\\chunks\\Contents.e91aa926.js","..\\chunks\\singletons.f1a59788.js","..\\chunks\\stores.9dac3858.js","..\\assets\\Contents.af1e10ef.css","..\\assets\\2.f15f76ec.css"],import.meta.url),()=>u(()=>import("../nodes/3.a1b46572.js"),["..\\nodes\\3.a1b46572.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css"],import.meta.url),()=>u(()=>import("../nodes/4.a1b46572.js"),["..\\nodes\\4.a1b46572.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css"],import.meta.url),()=>u(()=>import("../nodes/5.7a54268b.js"),["..\\nodes\\5.7a54268b.js","..\\chunks\\index.30d36c53.js"],import.meta.url),()=>u(()=>import("../nodes/6.7a54268b.js"),["..\\nodes\\6.7a54268b.js","..\\chunks\\index.30d36c53.js"],import.meta.url),()=>u(()=>import("../nodes/7.11624017.js"),["..\\nodes\\7.11624017.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\chunks\\SvelteMarkdown.2146b79f.js"],import.meta.url),()=>u(()=>import("../nodes/8.3bde20c0.js"),["..\\nodes\\8.3bde20c0.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css"],import.meta.url),()=>u(()=>import("../nodes/9.a1b46572.js"),["..\\nodes\\9.a1b46572.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css"],import.meta.url),()=>u(()=>import("../nodes/10.d91a4c46.js"),["..\\nodes\\10.d91a4c46.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\chunks\\SvelteMarkdown.2146b79f.js"],import.meta.url),()=>u(()=>import("../nodes/11.ef5e8026.js"),["..\\nodes\\11.ef5e8026.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\assets\\11.b6ae7796.css"],import.meta.url),()=>u(()=>import("../nodes/12.95bc4d99.js"),["..\\nodes\\12.95bc4d99.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\chunks\\SvelteMarkdown.2146b79f.js"],import.meta.url),()=>u(()=>import("../nodes/13.b3f7209b.js"),["..\\nodes\\13.b3f7209b.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\chunks\\SvelteMarkdown.2146b79f.js"],import.meta.url),()=>u(()=>import("../nodes/14.a1b46572.js"),["..\\nodes\\14.a1b46572.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css"],import.meta.url),()=>u(()=>import("../nodes/15.a1b46572.js"),["..\\nodes\\15.a1b46572.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css"],import.meta.url),()=>u(()=>import("../nodes/16.ae33ba55.js"),["..\\nodes\\16.ae33ba55.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\chunks\\SvelteMarkdown.2146b79f.js"],import.meta.url),()=>u(()=>import("../nodes/17.bbeaae2c.js"),["..\\nodes\\17.bbeaae2c.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\chunks\\data.4f4a35d0.js","..\\assets\\17.cea2ce5e.css"],import.meta.url),()=>u(()=>import("../nodes/18.a1b46572.js"),["..\\nodes\\18.a1b46572.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css"],import.meta.url),()=>u(()=>import("../nodes/19.83bccd9e.js"),["..\\nodes\\19.83bccd9e.js","..\\chunks\\index.30d36c53.js","..\\chunks\\PageWrapper.1f9b0c22.js","..\\assets\\PageWrapper.deb6b83b.css","..\\assets\\19.54f4a5a7.css"],import.meta.url),()=>u(()=>import("../nodes/20.0f46e03f.js"),["..\\nodes\\20.0f46e03f.js","..\\chunks\\index.30d36c53.js"],import.meta.url),()=>u(()=>import("../nodes/21.7a54268b.js"),["..\\nodes\\21.7a54268b.js","..\\chunks\\index.30d36c53.js"],import.meta.url)],st=[],_t={"/":[2],"/bridge-and-shrimp":[3],"/connection":[4],"/dimensionality-reduction":[5],"/ecological-dynamics":[6],"/fjj1":[7],"/intro":[8],"/jab-and-cross":[9],"/lts-overview":[10],"/one-image":[11],"/one-sentence":[12],"/one-thousand-words":[13],"/origin-point":[14],"/pattern-and-timing":[15],"/proto-fjj":[16],"/quick-start":[17],"/shotput":[18],"/test-driven-training":[19],"/turtle-space":[20],"/what-is-a-fundamental":[21]},at={handleError:({error:_})=>{console.error(_)}};export{_t as dictionary,at as hooks,nt as matchers,ot as nodes,rt as root,st as server_loads};
