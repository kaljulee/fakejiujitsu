<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import antaeus from "$lib/images/antaeus.jpg";
    import ConcernPage from "$lib/components/ConcernPage.svelte";
    const source = `
# Summary
Connection is related to Priit Mihkelson's clicks and Matt Thorton's connection.


FJJ 2 upgrades Connection from an Exception to a Concern.  It is the least-well-defined Concern.

Connection has two components
* connection to ground
* connection to lab partner

Connection as an Electrical System:
* Benefits from flush connection surfaces
* Connection to the ground can be established through lab partner

Like needed a solid connection between electrical conductors.
`;
</script>
<PageWrapper>
    <ConcernPage source={source}
                 title="Connection"
                 href="https://giphy.com/channel/Regression-to-the-meanest/connection"
                 GifLinklabel="connection gifs"
                headerImg={antaeus}/>
</PageWrapper>