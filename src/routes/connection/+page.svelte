<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import GifLink from "$lib/components/GifLink.svelte";
    const source = `
FJJ 2 upgrades Connection from an Exception to a Fundamental.
Connection has two components

# connection to ground
# connection to lab partner

Like needed a solid connection between electrical conductors.
`;
</script>
<PageWrapper><SvelteMarkdown source={source}/>
<GifLink href="https://giphy.com/channel/Regression-to-the-meanest/connection" label="connection gifs"/></PageWrapper>