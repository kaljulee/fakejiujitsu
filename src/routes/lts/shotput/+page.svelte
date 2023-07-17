<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import always_shotput from "$lib/images/always_shotput.jpg";
    import ConcernPage from "$lib/components/ConcernPage.svelte";

    const source = `
## Summary
Generally, Shotput is the practice of stealing movement patterns from [Shotput](https://youtu.be/b_iUgvzb1-0) and [Discus](https://youtu.be/0Yx6amEH3Gs).

As it is currently implemented, "Shotput" is driving and turning off of active toes, turning the leg inward.


## Theory:
The sports of shotput and discus have relatively few restrictions on movement and timing.

* action timing is under athlete's control
* no need to defend self from the actions of an opposing player
* pinpoint accuracy not required

These features mean that shotput players can focus on safely generating and transmitting maximum force, without having to make concessions for timing or defense.

## General Use

In general, we should look to make our movements more like shotputter movements, and adjust away from them only when they are leaving us vulnerable to timing attacks or risking our path back to the Origin Point.

In FJJ2, Bridge and Shrimp and Shotput are closely related.  An unopposed Shotput leg-turn should resolve into either a Bridge or a Shrimp.

 ## Predictions
* The movements that the Shotput Concern is trying to find will be
    * [present in](https://youtu.be/BeHdjjIVWTw)
    * [other](https://youtu.be/jZKvJY6gDfg),
    * [similar](https://youtu.be/lX_dm39fkfw)
    * [sport](https://youtu.be/WHIhvxB_cLs)
    * [actions](https://youtu.be/iRYYUPTx2-0).
`;
</script>
<PageWrapper>
    <ConcernPage
            source={source}
            href="https://giphy.com/channel/Regression-to-the-meanest/shotput"
            headerImg={always_shotput}
            title="Shotput"
    />
</PageWrapper>