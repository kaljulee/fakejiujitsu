<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import bsGif from "$lib/images/bridge-shrimp.gif";
    import ConcernPage from "$lib/components/ConcernPage.svelte";

    const source = `
## Summary
* Bridge and Shrimp is a attempt to solve the [Degrees of Freedom Problem](https://youtu.be/Fz31R6sgHZ4) by reducing the number of ways a player moves.
* Fake Jiu Jitsu wants to categorized all movements as either a Bridge or a Shrimp.
* If you can alternate between Bridges and Shrimps but your partner can't, you have a significant advantage.

## Theory
FJJ identifies two major movement families, Bridge and Shrimp.  Any serious movement should be as Bridge-like or Shrimp-like as possible.

It is assumed that Bridge and Shrimp are part of a larger set of strong motions.  The high utility of Wim Deputter's [Rock Bottom](https://youtu.be/OssSUNMe__c) is strong evidence of this larger set.

That said, Bridge and Shrimp have proven so useful, they continue to survive as the movement constraints.

Bridge and Shrimp are essentially Wim Deputter's [Hidden Framework](https://youtu.be/VhgRVzHv9r8).

[Bridges can be roughly described as a diagonal torso twist that results in hips forward / shoulder back](https://youtu.be/Cc4ZSQ7C9ko).

[Shrimps can be roughly described as a diagonal torso twist that results shoulder forward/hips back](https://youtu.be/aqf42bsTXnY).


## General Use
Bridges and Shrimps are **tensions**, not **positions**.  Consider the [bicep-curl](https://en.wikipedia.org/wiki/Bicep_curl); there is a start position (straight arm) and end position (bent arm).  The transferable range of motion isn't just a fully bent arm, it's the entire range from straight to bent.

Similarly, you don't need to be at the end of a Bridge or Shrimp in order to be applying it, it is more about the hips-shoulder-spine alignment and the direction of the tension.

If something isn't working, make you movements more Bridge-like or Shrimp-like

Bridges and Shrimp are often complementary tensions- forcing your lab partner to confront one makes her vulnerable to the other.
`
</script>
<PageWrapper>
    <ConcernPage
            title="Bridge and Shrimp"
            source={source}
            href={"https://giphy.com/channel/Regression-to-the-meanest/bridge-and-shrimp"} gifLinkLabel={"Here are some bridge and shrimp gifs"} headerImg= {bsGif}
    />
</PageWrapper>