export const SLUGS = {
    HOME: '/',
    // intro
    INTRO: '/intro',
    ONE_IMG: '/one-image',
    ONE_SENT: '/one-sentence',
    TEST_DRIVEN: '/test-driven-training',
    QUICK_START: '/quick-start',
    // theory
    ECO_DYN: '/ecological-dynamics',
    DIM_REDUC: '/dimensionality-reduction',
    WAT_FUND: '/what-is-a-fundamental',
    // old fundamentals
    TURTLE_SPACE: '/turtle-space',
    BRIDGE_SHRIMP: '/bridge-and-shrimp',
    SHOTPUT: '/shotput',
    // new fundamentals
    ORIGIN_POINT: '/origin-point',
    JAB_CROSS: '/jab-and-cross',
    CONNECT: '/connection',
    PATTERN_TIMING: '/pattern-and-timing',
    //version pages
    LTS_OVERVIEW: '/lts-overview',
}

export const tableOfContents = [
    {
        title: {label: 'Introduction'},
        items: [
            {label: 'Hello World', slug: SLUGS.INTRO},
            {label: 'Fake Jiu Jitsu in One Image', slug: SLUGS.ONE_IMG},
            {label: 'Fake Jiu Jitsu in One Sentence', slug: SLUGS.ONE_SENT},
            {label: 'Test-Driven Training', slug: SLUGS.TEST_DRIVEN}
        ],
    },
    {
        title: {label: 'Theory'},
        items: [
            {label: 'Ecological Dynamics', slug: SLUGS.ECO_DYN},
            {label: 'Dimensionality Reduction', slug: SLUGS.DIM_REDUC},
            {label: 'What is a Fundamental?', slug: SLUGS.WAT_FUND},
        ]
    },
    {
        title: {label: 'Fake Jiu Jitsu 2.0t LTS'},
        items: [
            {label: 'Overview', slug: SLUGS.LTS_OVERVIEW},
            {label: 'Origin Point', slug: SLUGS.ORIGIN_POINT},
            {label: 'Jab and Cross', slug: SLUGS.JAB_CROSS},
            {label: 'Shotput', slug: SLUGS.SHOTPUT},
            {label: 'Connection', slug: SLUGS.CONNECT},
            {label: 'Pattern and Timing', slug: SLUGS.PATTERN_TIMING},
        ]
    },
    // {
    //     title: {label: 'Deprecated FJJ Versions'},
    //     items: [
    //         {label: 'FJJ v1.0', slug: '/fjj1'},
    //         {label: 'FJJ v0.1', slug: 'proto-fjj'},
    //     ]
    // },
    // {
    //     title: {label: 'Appendix', slug: '/appendix'},
    //     items: [
    //         {label: 'Glossary', slug: '/glossary'},
    //         {label: 'Supporting Materials', slug: '/supporting-materials'},
    //     ]
    // },
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

export function getNavInfo(slug) {
    const data = navData;
    const slugData = [];
    const slugIndex = data.findIndex(datum => datum.slug === slug);
    if (slugIndex !== -1) {
        slugData.push(data[slugIndex]);
        slugData.push(data[slugIndex + 1]);
    }
    return slugData;
}