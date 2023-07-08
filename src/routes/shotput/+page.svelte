<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import always_shotput from "$lib/images/always_shotput.jpg";
    import ConcernPage from "$lib/components/ConcernPage.svelte";

    const source = `
## Summary
 Generally, Shotput is the practice of stealing movement patterns from Shotput and Discus.

## Theory:
The sports of shotput and discus have relatively few restrictions on movement and timing.

* action timing is under athlete's control
* no need to defend self from the actions of an opposing player
* pinpoint accuracy not required

These features mean that shotput players can focus on safely generating and transmitting force, without having to make concessions for timing or defense purposes.

## General Use

In general, we should look to make our movements more like shotputter movements, and adjust away from it only when adhering to shotput form would leave us vulnerable to timing attacks or risks our path back to the Origin Point.

 In practice, "Shotput" to driving and turning off of the ground in order to generate power.
`;
</script>
<PageWrapper>
    <ConcernPage
            source={source}
            href="https://giphy.com/channel/Regression-to-the-meanest/shotput"
            gifLinkLabel="gifs about shotput"
            headerImg={always_shotput}
            title="Shotput"
    />
</PageWrapper>