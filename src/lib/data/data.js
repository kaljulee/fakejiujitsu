
export const CAT = {
    INTRO: {url: '/intro', label: 'Introduction'},
    JUST: {url: '/justification', label: 'Justification'},
    LTS: {url: '/lts', label: 'LTS Version'},
    TECH: {url: '/technique-application', label: 'Technique Application'},
    DEP: {url: '/deprecated', label: 'Deprecated Versions'},
    APP: {url: '/appendix', label: 'Appendix'},
}
export const SLUGS = {
    HOME: '/',
    // intro
    INTRO: `${CAT.INTRO.url}/hello-world`,
    ONE_IMG: `${CAT.INTRO.url}/one-image`,
    ONE_SENT: `${CAT.INTRO.url}/one-sentence`,
    ONE_THOUSAND: `${CAT.INTRO.url}/one-thousand-words`,
    QUICK_START: '/quick-start',
    // training schemes
    // LEARN_OVERVIEW: '/how-to-learn-overview',
    // TBJJ: '/traditional-bjj',
    // EDBJJ: '/ecological-dynamics-bjj',
    // TDT: '/test-driven-training',
    // justifications
    ANECDOTE: `${CAT.JUST.url}/anecdote`,
    CHATGPT: `${CAT.JUST.url}/chatgpt`,
    ECO_DYN: `${CAT.JUST.url}/ecological-dynamics`,
    DIM_REDUC: `${CAT.JUST.url}/dimensionality-reduction`,
    WAT_FUND: `${CAT.JUST.url}/what-is-a-fundamental`,
    KOAN: `${CAT.JUST.url}/koan`,
    MATH_PROOF: `${CAT.JUST.url}/math-proof`,
    // old fundamentals
    TURTLE_SPACE: `${CAT.LTS.url}/turtle-space`,
    BRIDGE_SHRIMP: `${CAT.LTS.url}/bridge-and-shrimp`,
    SHOTPUT: `${CAT.LTS.url}/shotput`,
    // new fundamentals
    TEST_DRIVEN: `${CAT.LTS.url}/test-driven-training`,
    ORIGIN_POINT: `${CAT.LTS.url}/origin-point`,
    JAB_CROSS: '/jab-and-cross',
    CONNECT: `${CAT.LTS.url}/connection`,
    PATTERN_TIMING: `${CAT.LTS.url}/pattern-and-timing`,
    // technique applications
    COHESION: `${CAT.TECH.url}/group-cohesion`,
    CONFIDENCE: `${CAT.TECH.url}/build-confidence`,
    LOCAL_MINIMA: `${CAT.TECH.url}/escape-local-minima`,
    //version pages
    LTS_OVERVIEW: `${CAT.LTS.url}/overview`,
    FJJ1: `${CAT.DEP.url}/fjj1`,
    PROTO_FJJ: `${CAT.DEP.url}/proto-fjj`,
    INFLUENCES: `${CAT.APP.url}/influences`,
}

export const tableOfContents = [
    {
        title: {label: 'Introduction'},
        items: [
            {label: 'Hello World', slug: SLUGS.INTRO},
            {label: 'Fake Jiu Jitsu in One Image', slug: SLUGS.ONE_IMG},
            {label: 'Fake Jiu Jitsu in One Sentence', slug: SLUGS.ONE_SENT},
            {label: 'Fake Jiu Jitsu in 1000 Words', slug: SLUGS.ONE_THOUSAND}
        ],
    },
    {
        title: {label: 'Fake Jiu Jitsu 2.0t LTS'},
        items: [
            {label: 'Overview', slug: SLUGS.LTS_OVERVIEW},
            {label: 'Test-Driven Training', slug: SLUGS.TEST_DRIVEN},
            {label: 'Origin Point', slug: SLUGS.ORIGIN_POINT},
            {label: 'Bridge and Shrimp', slug: SLUGS.BRIDGE_SHRIMP},
            {label: 'Shotput', slug: SLUGS.SHOTPUT},
            {label: 'Connection', slug: SLUGS.CONNECT},
            {label: 'Pattern and Timing', slug: SLUGS.PATTERN_TIMING},
        ]
    },
    {
        title: {label: 'Justifications'},
        items: [
            {label: 'Anecdote', slug: SLUGS.ANECDOTE},
            {label: 'ChatGPT', slug: SLUGS.CHATGPT},
            {label: 'Dimensionality Reduction', slug: SLUGS.DIM_REDUC},
            {label: 'Ecological Dynamics', slug: SLUGS.ECO_DYN},
            {label: 'Koan', slug: SLUGS.KOAN},
            {label: 'Math', slug: SLUGS.MATH_PROOF},
            // {label: 'Fundamentalism', slug: SLUGS.WAT_FUND},
        ]
    },
    {title: {label: 'FJJ Technique Applications'},
    items: [
        {label: 'Escaping Local Minima', slug: SLUGS.LOCAL_MINIMA},
        {label: 'Confidence Building', slug: SLUGS.CONFIDENCE},
    ]},
    {
        title: {label: 'Deprecated FJJ Versions'},
        items: [
            {label: 'FJJ v1.0', slug: SLUGS.FJJ1},
            {label: 'FJJ v0.1', slug: SLUGS.PROTO_FJJ},
        ],
    deprecated: true
    },
    {
        title: {label: 'Appendix'},
        items: [
            {label: 'Influences', slug: SLUGS.INFLUENCES},
    //         {label: 'Glossary', slug: '/glossary'},
    //         {label: 'Supporting Materials', slug: '/supporting-materials'},
        ]
    },
];

function createNavData() {
    const navData = tableOfContents.reduce((acc, section) => {
        if (!!section.items) {
            section.items.forEach(item => {
                acc.push({
                    sectionLabel: section.title.label,
                    label: item.label,
                    slug: item.slug,
                });
            });
        } else {
            acc.push({
                label: section.title.label,
                slug: section.slug,
            })
        }
        return acc;
    }, []);
    return navData;
}

export const navData = createNavData();

// address order is [this, next, last]
export function getNavInfo(slug) {
    const data = navData;
    const slugData = [];
    const slugIndex = data.findIndex(datum => datum.slug === slug);
    if (slugIndex !== -1) {
        slugData.push(data[slugIndex]);
        slugData.push(data[slugIndex + 1]);
        slugData.push(data[slugIndex - 1]);
    }
    return slugData;
}