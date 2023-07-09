<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import patternGif from "$lib/images/pattern.gif";
    import ConcernPage from "$lib/components/ConcernPage.svelte";
    const source = `
## Summary
* Pattern: The ability to create and read the same sequence of events multiple times
    * Being a Good Uke
* Timing: the ability to deliberately break a pattern
    * Being a Bad Uke

## Theory

* Cosmic Grappling Background Radiation
* Jiu-Jitsu Boson
* Syncopation
* Good Uke/Bad Uke
* Making your opponent commit more than you

## BJJ/FJJ Translation Hints
### The cooperative Drill
* Typical BJJ use of a cooperative drill
    * The Tori has an assigned technique to perform, the Uke repeatedly provides the correct conditions for that technique to be the correct choice.  The Tori believes he is learning to perform the technique.
* Typical FJJ use of a cooperative drill
    * The Tori and Uke work together to create a repeating pattern of motion.  The Tori and Uke believe they are learning to read their partner's motions.

### The Uncooperative Drill
Once cooperative movement is relatively easy, the Tori [syncopates](https://youtu.be/NQPcup4sbAE) against the pattern, looking for ways to do so that destabilize the Uke.

[Here is an example](https://youtube.com/clip/UgkxTqlAdjHoJVfGCeQHlFaV5iHWkLk51yiN).

Because Technique is not allowed to be the defining feature of a drill, *conditions* become the organizing feature.

The ability to work together with a partner in creating a pattern of motion *requires* learning how to read your partner's motions.

Reading your partner's motions is required in order to know what technique is appropriate to the situation.
`;
</script>
<PageWrapper>
    <ConcernPage title="Pattern and Timing" source={source} headerImg={patternGif}/>
</PageWrapper>