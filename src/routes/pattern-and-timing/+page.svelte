<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    const source = `
Pattern and Timing
* Cosmic Grappling Background Radiation
* Jiu-Jitsu Boson
* Syncopation
* Good Uke/Bad Uke
* Making your opponent commit more than you`;
</script>
<PageWrapper>
    <SvelteMarkdown source={source}/>
</PageWrapper>