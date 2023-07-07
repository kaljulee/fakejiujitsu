<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import {SLUGS} from "../../data/data.js";
    import ConcernPage from "$lib/components/ConcernPage.svelte";

    const source = `
## Fake Jiu Jitsu 2 is the current Long-Term-Support version of Fake Jiu Jitsu.


## Why do this experiment:

* Players are generally given a task, then are allowed to move their bodies in any way they choose.  This allows players to trade strong spinal alignment for progress up the BJJ positional hierarchy, resulting in eventual loss of the position.

    * Example: Player puts spine out of position in order to complete a pass from top guard to side control.



## Hypothesis:

* Players ignore "hidden jiu jitsu" because they are keenly paying attention to Technique details.
* Players lose position when transitioning to submissions because they are being thought of as positions and transitions.
* Core aspects of the language of BJJ add to the noise, making it harder to pick out the signal.

## Proposition:
* If I can continue to improve on the mat while only working the listed concerns
* Then there may be ways of talking about grappling that are orthoganol to technique and position, and they may be useful.


## The Experiment:
* Have players *ignore technique and position*
* Define a small set of fundamental concerns
* Train these against these concerns
* Consider Re-introducing technique only after player feels safe in turtle positions
* [Testing Philosophy](${SLUGS.TEST_DRIVEN})

## FJJ2 Concerns
* Concerns are method of reducing the degrees of freedom, letting players chose from a smaller set of options when approaching situations.  But instead of cutting off options, it redefines the fundamentals such that there’s less things you could be trying to do.  No techniques or positions unless they can be fully translated into the concerns outlined below.
* FJJ2 List of Concerns
    * [Origin Point](${SLUGS.ORIGIN_POINT})
    * [Bridge and Shrimp](${SLUGS.BRIDGE_SHRIMP})
    * [Shotput](${SLUGS.SHOTPUT})
    * [Connection](${SLUGS.CONNECT})
    * [Pattern and Timing](${SLUGS.PATTERN_TIMING})

## Application
BJJ approach:
1. first learn the technique (motor movements, limb positions, and objectives).
2. then learn "hidden jiu jitsu" weight shifts, pressures, etc

FJJ2 Approach:
1. first learn "hidden jiu jitsu" wieght shifts, pressures, etc
2. then look at techniques for possible directions to explore

## Predictions:
Training FJJ2 predicts the following events will occur:
* 1+ years playing turtle positions, learning to transition, getting submitted
* Affordances for Invading the opponent's Turtle Space will be highlighted by trying not to get submitted
* Attacks [similar to this](https://youtu.be/6feW3L4lFmU) are expected to emerge
* The ability to get up will be built on the turtle positions
* The ability to get up will force your lab partner to wrestle, creating sweep opportunities
* Top Position controls will be built on the controls required to get up
* Top Position will emerge without being explicitly trained.  Top Position can be played entirely as an extension from bottom position.





### Coming Soon
* Predictions!
* data!
* things my system can’t explain
* videos of some artificial jiu-jitsu emerging from this method.
* higher order principles, excecptions


`;
</script>
<PageWrapper>
    <div class="state-of-lab">
        <span class="s-o-l-header">State of the Lab:</span>
        <div class="s-o-l-message">
            <ul>
                <li><span>Training progress is good relative to expectations.</span></li>
                <li>
                    <span>This document is still under construction, several significant sections just scribbles.</span>
                </li>
                <li><span>There will be changes every couple days for a while, I’ll update this message when the rate of change starts to slow down</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="disclaimer">
        <h1>FJJ2 is not a comprehensive description of how grappling works.</h1>

        <h1>It is a set of constraints that replace Technique and Position in BJJ, and a set of predictions on how complex skill-patterns will develop out of them.</h1>

        <p>I have this in big letters at the top because I sometimes forget this when talking to people, and exaggrate myself into a corner.</p>
    </div>
    <div class="report">

    <ConcernPage source={source}/>
    </div>
</PageWrapper>

<style>
    :root {
        --border: 1px dashed black;
    }

    .report {
        font-family: "Georgia";
        background: cornsilk;
        padding: 10px 25px;
        box-shadow: 10px 10px;
    }

    .state-of-lab {
        display: flex;
        flex-direction: column;
        padding: 10px 10%;
        background: blue;
        font-size: 20px;
        color: white;
        border: var(--border);
    }

    .s-o-l-header {
        justify-content: center;
        font-weight: bold;
        /*border: var(--border);*/
    }

    .s-o-l-message {
        display: flex;
        flex-direction: column;
    }

    .s-o-l-message li {
        font-weight: bold;
        margin: 0 0 15px 0;
    }

    @media(max-width: 480px) {
        .state-of-lab {
            padding: 10px 2%;
        }
    }
</style>