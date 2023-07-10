export const SLUGS = {
    HOME: '/',
    // intro
    INTRO: '/intro',
    ONE_IMG: '/one-image',
    ONE_SENT: '/one-sentence',
    ONE_THOUSAND: '/one-thousand-words',
    QUICK_START: '/quick-start',
    // training schemes
    // LEARN_OVERVIEW: '/how-to-learn-overview',
    // TBJJ: '/traditional-bjj',
    // EDBJJ: '/ecological-dynamics-bjj',
    // TDT: '/test-driven-training',
    // justifications
    ANECDOTE: '/anecdote',
    ECO_DYN: '/ecological-dynamics',
    DIM_REDUC: '/dimensionality-reduction',
    WAT_FUND: '/what-is-a-fundamental',
    KOAN: '/koan',
    MATH_PROOF: '/math-proof',
    // old fundamentals
    TURTLE_SPACE: '/turtle-space',
    BRIDGE_SHRIMP: '/bridge-and-shrimp',
    SHOTPUT: '/shotput',
    // new fundamentals
    TEST_DRIVEN: '/test-driven-training',
    ORIGIN_POINT: '/origin-point',
    JAB_CROSS: '/jab-and-cross',
    CONNECT: '/connection',
    PATTERN_TIMING: '/pattern-and-timing',
    //version pages
    LTS_OVERVIEW: '/lts-overview',
    FJJ1: '/fjj1',
    PROTO_FJJ: '/proto-fjj',
    READING_LIST: '/reading-list',
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
            {label: 'Ecological Dynamics', slug: SLUGS.ECO_DYN},
            {label: 'Koan', slug: SLUGS.KOAN},
            {label: 'Math', slug: SLUGS.MATH_PROOF},
            // {label: 'Dimensionality Reduction', slug: SLUGS.DIM_REDUC},
            // {label: 'Fundamentalism', slug: SLUGS.WAT_FUND},
        ]
    },
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
            {label: 'Reading List', slug: SLUGS.READING_LIST},
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