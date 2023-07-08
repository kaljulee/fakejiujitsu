<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import patternGif from "$lib/images/pattern.gif";
    import ConcernPage from "$lib/components/ConcernPage.svelte";
    const source = `
## Summary

## General Use

* Cosmic Grappling Background Radiation
* Jiu-Jitsu Boson
* Syncopation
* Good Uke/Bad Uke
* Making your opponent commit more than you`;
</script>
<PageWrapper>
    <ConcernPage title="Pattern and Timing" source={source} headerImg={patternGif}/>
</PageWrapper>