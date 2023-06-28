export const tableOfContents = [
    {
        title: {label: 'Introduction'},
        items: [
            {label: 'Hello World', slug: '/intro'},
            {label: 'Fake Jiu Jitsu in One Image', slug: '/one-image'},
            {label: 'Fake Jiu Jitsu in One Sentence', slug: '/one-sentence'},
            {label: 'Quick-Start', slug: 'quick-start'}
        ],
    },
    {
        title: {label: 'Theory'},
        items: [
            {label: 'Ecological Dynamics', slug: '/ecological-dynamics'},
            {label: 'Dimensionality Reduction', slug: '/dimensionality-reduction'},
            {label: 'What is a Fundamental?', slug: 'what-is-a-fundamental'},
        ]
    },
    {
        title: {label: 'Fake Jiu Jitsu 2.0 LTS'},
        items: [
            {label: 'Overview', slug: '/lts-overview'},
            {label: 'Turtle Space', slug: '/turtle-space'},
            {label: 'Bridge and Shrimp', slug: '/bridge-and-shrimp'},
            {label: 'Shotput', slug: '/shotput'},
            {label: 'Connection', slug: '/connection'},
            {label: 'Pattern and Timing', slug: '/pattern-and-timing'},
        ]
    },
    {
        title: {label: 'Deprecated FJJ Versions'},
        items: [
            {label: 'FJJ v1.0', slug: '/fjj1'},
            {label: 'FJJ v0.1', slug: 'proto-fjj'},
        ]
    },
    {
        title: {label: 'Appendix', slug: '/appendix'},
        items: [
            {label: 'Glossary', slug: '/glossary'},
            {label: 'Supporting Materials', slug: '/supporting-materials'},
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