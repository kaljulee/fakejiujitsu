<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import {SLUGS, tableOfContents} from "$lib/data/data.js";
</script>

<PageWrapper>
    <p>Hello, and thank you for your interest in Fake Jiu Jitsu! Sometime in 2020 I stopped trying to actually learn
        Brazilian Jiu Jitsu, and started just faking it.</p>
    <p>This document is my attempt to express my ideas clearly, both for my own growth and to help any other grapplers
        asking the forbidden questions of BJJ.</p>
    <p>There are {tableOfContents.length} sections, each divided into subsections:
    <p>
    <ol>
        {#each tableOfContents as contents }
            <li><a href={contents.items[0].slug}>{contents.title.label}</a></li>
        {/each}
    </ol>

    <p>My goal is to have each of these sections independently readable, so you can skip to whatever section is most
        interesting.</p>

</PageWrapper>