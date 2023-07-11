const e={HOME:"/",INTRO:"/intro",ONE_IMG:"/one-image",ONE_SENT:"/one-sentence",ONE_THOUSAND:"/one-thousand-words",QUICK_START:"/quick-start",ANECDOTE:"/anecdote",CHATGPT:"/chatgpt",ECO_DYN:"/ecological-dynamics",DIM_REDUC:"/dimensionality-reduction",WAT_FUND:"/what-is-a-fundamental",KOAN:"/koan",MATH_PROOF:"/math-proof",TURTLE_SPACE:"/turtle-space",BRIDGE_SHRIMP:"/bridge-and-shrimp",SHOTPUT:"/shotput",TEST_DRIVEN:"/test-driven-training",ORIGIN_POINT:"/origin-point",JAB_CROSS:"/jab-and-cross",CONNECT:"/connection",PATTERN_TIMING:"/pattern-and-timing",LTS_OVERVIEW:"/lts-overview",FJJ1:"/fjj1",PROTO_FJJ:"/proto-fjj",READING_LIST:"/reading-list"},s=[{title:{label:"Introduction"},items:[{label:"Hello World",slug:e.INTRO},{label:"Fake Jiu Jitsu in One Image",slug:e.ONE_IMG},{label:"Fake Jiu Jitsu in One Sentence",slug:e.ONE_SENT},{label:"Fake Jiu Jitsu in 1000 Words",slug:e.ONE_THOUSAND}]},{title:{label:"Fake Jiu Jitsu 2.0t LTS"},items:[{label:"Overview",slug:e.LTS_OVERVIEW},{label:"Test-Driven Training",slug:e.TEST_DRIVEN},{label:"Origin Point",slug:e.ORIGIN_POINT},{label:"Bridge and Shrimp",slug:e.BRIDGE_SHRIMP},{label:"Shotput",slug:e.SHOTPUT},{label:"Connection",slug:e.CONNECT},{label:"Pattern and Timing",slug:e.PATTERN_TIMING}]},{title:{label:"Justifications"},items:[{label:"Anecdote",slug:e.ANECDOTE},{label:"ChatGPT",slug:e.CHATGPT},{label:"Dimensionality Reduction",slug:e.DIM_REDUC},{label:"Ecological Dynamics",slug:e.ECO_DYN},{label:"Koan",slug:e.KOAN},{label:"Math",slug:e.MATH_PROOF}]},{title:{label:"Deprecated FJJ Versions"},items:[{label:"FJJ v1.0",slug:e.FJJ1},{label:"FJJ v0.1",slug:e.PROTO_FJJ}],deprecated:!0},{title:{label:"Appendix"},items:[{label:"Reading List",slug:e.READING_LIST}]}];function u(){return s.reduce((t,l)=>(l.items?l.items.forEach(a=>{t.push({sectionLabel:l.title.label,label:a.label,slug:a.slug})}):t.push({label:l.title.label,slug:l.slug}),t),[])}const o=u();function T(n){const t=o,l=[],a=t.findIndex(i=>i.slug===n);return a!==-1&&(l.push(t[a]),l.push(t[a+1]),l.push(t[a-1])),l}export{e as S,T as g,s as t};
