<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import {SLUGS} from "../../data/data.js";
</script>

<PageWrapper>
    <p>Hello, and thank you for your interest in Fake Jiu Jitsu! Sometime in 2020 I stopped trying to actually learn
        Brazilian Jiu Jitsu, and started just faking it.</p>
    <p>This document is my attempt to express my ideas clearly, both for my own growth and to help any other grapplers
        asking the forbidden questions of BJJ.</p>
    <p>There are four sections, each divided into subsections:
    <p>
    <ol>
        <li><a href={SLUGS.ONE_SENT}>An introduction to FJJ</a></li>
        <li><a href={SLUGS.LTS_OVERVIEW}>The current state of FJJ</a></li>
        <li><a href={SLUGS.ECO_DYN}>My justifications for this project</a></li>
        <li><a href={SLUGS.FJJ1}>list of old FJJ formulations.</a></li>
    </ol>

    <p>My goal is to have each of these sections independently readable, so you can skip to whatever section is most interesting.</p>

</PageWrapper>