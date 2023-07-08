<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import shotput from "$lib/images/shotput.gif";
    import ConcernPage from "$lib/components/ConcernPage.svelte";

    const source = `
 Generally, Shotput is the practice of stealing movement patterns from Shotput and Discus.

## Theory:
The sports of shotput and discus have relatively few restrictions on movement and timing.

* action timing is under athlete's control
* no need to defend self from the actions of an opposing player
* pinpoint accuracy not required

These features mean that shotput players can focus on safely generating and transmitting force, without having to make concessions for timing or defense purposes.

In general, we should look to make our movements more like shotputter movements, and adjust away from it only when adhering to shotput form would leave us vulnerable to timing attacks or risks our path back to the Origin Point.
`;
</script>
<PageWrapper>
    <ConcernPage
            source={source}
            href="https://giphy.com/channel/Regression-to-the-meanest/shotput"
            gifLinkLabel="gifs about shotput"
            src={shotput}
    />

</PageWrapper>