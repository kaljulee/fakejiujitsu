<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import bsGif from "$lib/images/bridge-shrimp.gif";
    import GifLink from "$lib/components/GifLink.svelte";
    import ConcernPage from "$lib/components/ConcernPage.svelte";

    const source = `
# Bridge and Shrimp
* Bridge and Shrimp is a attempt to solve the [Degrees of Freedom Problem](https://youtu.be/Fz31R6sgHZ4) by reducing the number of ways a player moves.

* Fake Jiu Jitsu wants to categorized all movements as either a Bridge or a Shrimp.

* [This steals heavily from Wim Deputter's hip escape (shrimp) and shoulder escape (baby bridge).](https://youtu.be/VhgRVzHv9r8)

`
</script>
<PageWrapper>
    <ConcernPage
            source={source}
            href={"https://giphy.com/channel/Regression-to-the-meanest/bridge-and-shrimp"} gifLinkLabel={"Here are some bridge and shrimp gifs"} src={bsGif}
    />
</PageWrapper>