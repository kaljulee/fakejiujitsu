<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import antaeus from "$lib/images/antaeus.jpg";
    import ConcernPage from "$lib/components/ConcernPage.svelte";
    const source = `
FJJ 2 upgrades Connection from an Exception to a Fundamental.
Connection has two components

* connection to ground
* connection to lab partner

Like needed a solid connection between electrical conductors.
`;
</script>
<PageWrapper>
    <ConcernPage source={source}
                 href="https://giphy.com/channel/Regression-to-the-meanest/connection"
                 GifLinklabel="connection gifs"
                src={antaeus}/>
</PageWrapper>