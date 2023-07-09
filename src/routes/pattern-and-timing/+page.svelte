<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import patternGif from "$lib/images/pattern.gif";
    import ConcernPage from "$lib/components/ConcernPage.svelte";
    const source = `
## Summary
* Pattern: The ability to create and read the same sequence of events multiple times
    * Being a Good Uke
* Timing: the ability to deliberately break a pattern
    * Being a Bad Uke

## Theory

Timing is an established part of BJJ (though often times it is conflated with speed).  Techniques are first learned, then the student is more or less left to figure out timing in live grappling situations.

FJJ prioritizes the fundamentals of timing *before* learning a technique that requires timing.

Timing is defined as the ability to know what your partner is about to do, and adjust yourself to take advantage of it.

This requires a sensitivity to what I call the Cosmic Grappling Background Radiation (because it is hard to detect).  Once players can detect their partner's weight shifts and expectations, they can start to build a repertoire of appropriate responses.

Patterns are necessary because Timing is acting differently than your partner expects.  In order to use Timing, a player must be able to create *expectations*.

Timing requires your partner committing more to an expected engagement than you are.

If you can create Patterns with a partner, then you must be able to
* read weight shifts
* read intentions
* create expectations

## General Use

## Learn to Develop Patterns
The ability to repeat patterns in live movement gives repeated opportunities to look for the weight shifts and develop [affordances](https://youtu.be/RXT5UKKSWzs) around them.

## The Jiu-Jitsu Boson
<p class="definition">A JJB is a repeatable exchange that occurs during live, unrestricted grappling.</p>

The JJB is a hypothetical training tool.  It combines representativeness of full-resistance sparring and the targeted nature of traditional drilling.

The goal is for the Uke to provide the same live situation over and over again, allowing the Tori to get [live repetitions against it](https://youtu.be/s3Vs2Y_cB1k).

This is sort of like positional sparring, but with important differences:
* Positional Sparring has a dictated position or technique.  JJBs ideally happen in a fully open environment.
* Students are encouraged to use Positional Sparring to practice "winning".  Successful creation of JJBs require a flexible relationship with winning.  Players should try to respond effectively, but that is a secondary concern to repeatability.  **If all you can do is freeze up and do nothing, that is a valid JJB (so long as you can repeat it).**  Players heavily invested in winning will generally cause JJBs to collapse.

| feature | Positional Sparring | JJB |
| :---- | :----: | :----: |
| who restricts play area? | Teacher | Players |
| optional full resistance | Yes | Yes |
| winnable? | Yes | No |


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

## Predictions
* Initially players will have difficulty creating Patterns
* Initially players will need to experiment against the same Pattern repeatedly before finding a Timing opportunity
* Initial Timing actions will not be enough to complete a BJJ Technique, will primarily be small bumps and trips
* With experience, players will be able to find Timing opportunities against new Patterns faster.
`;
</script>
<PageWrapper>
    <ConcernPage title="Pattern and Timing" source={source} headerImg={patternGif}/>
</PageWrapper>