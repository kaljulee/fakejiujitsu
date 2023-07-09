<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import {SLUGS} from "../../data/data.js";
    import ConcernPage from "$lib/components/ConcernPage.svelte";

    const source = `
## Fake Jiu Jitsu 2 is the current Long-Term-Support version of Fake Jiu Jitsu.


## Why do this experiment:
* Techniques and positions can be played poorly.  Despite this, they are the primary reference points we use to teach jiu jitsu.
* Players are generally given a task, then are allowed to move their bodies in any way they choose.  This allows players to trade strong spinal alignment for progress up the BJJ positional hierarchy, resulting in eventual loss of the position.

    * Example: Player puts spine out of position in order to complete a pass from top guard to side control.




## Hypothesis:
* Techniques are used as the primary definer of drills, with the Uke modifying behavior to allow the technique.  This should be reversed, where the situation is the primary definer and specific techniques are just optional solutions.
* Players ignore "hidden jiu jitsu" because they are keenly paying attention to Technique details.
* Players lose position when transitioning to submissions because they differentiating positions, submissions, and transitions.
* Core aspects of the language of BJJ add to the noise, making it harder to pick out the signal.

## Proposition:
* **If** I can continue to improve on the mat while only paying attention to FJJ Concerns
* **Then** there may be ways of talking about grappling that are orthogonal to technique and position, and they may be useful.


## The Experiment:
* Have players *ignore technique and position*
* Define a small set of fundamental concerns
* Train these against these concerns
* Consider Re-introducing technique only after player feels safe in turtle positions
* [Testing Philosophy](${SLUGS.TEST_DRIVEN})

## FJJ2 Concerns
* Concerns are a method of reducing the degrees of freedom by restricting how players are allowed to think about situations.  Instead of cutting off movement options, they redefine grappling such that there’s less things you could be trying to do.  No techniques or positions allowed unless they can be fully translated into the Concerns outlined below.
* FJJ2 List of Concerns
    * [Origin Point](${SLUGS.ORIGIN_POINT})
    * [Bridge and Shrimp](${SLUGS.BRIDGE_SHRIMP})
    * [Shotput](${SLUGS.SHOTPUT})
    * [Connection](${SLUGS.CONNECT})
    * [Pattern and Timing](${SLUGS.PATTERN_TIMING})

## Application
### BJJ approach (DON'T):
1. first learn the technique (motor movements, limb positions, and objectives).
2. then learn "hidden jiu jitsu" weight shifts, pressures, etc

### FJJ2 Approach (DO):
1. first learn "hidden jiu jitsu" wieght shifts, pressures, etc
2. then look at techniques for possible directions to explore

## Predictions:
Training FJJ2 predicts the following events will occur:
* 1+ years playing turtle positions, learning to transition, getting submitted
* Affordances for invading the opponent's Turtle Space will be emerge while trying not to get submitted
* Attacks [similar to this](https://youtu.be/6feW3L4lFmU) are expected to emerge before a top game
* The ability to get up will be built on the turtle positions
* The ability to get up will force your lab partner to wrestle, creating sweep opportunities
* Sweep and Top Position controls will be built on the controls required to get up
* Top Position will emerge without being explicitly trained.  **Top Position can be played entirely as an extension from bottom position**.





### Coming Soon
* more specific Predictions!
* data!
* evidence as to why FJJ2 is not a complete description of jiu jitsu
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
                    <span>This document is still under construction.  Several significant sections are unfinished, and everything will receive updates.</span>
                </li>
                <li><span>There will be changes every couple days for a while, I’ll update this message when the rate of change starts to slow down</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="disclaimer">
        <h1>FJJ2 is not a comprehensive description of how grappling works.</h1>

        <h1><span>It is a <i>set of constraints</i> that replace Technique and Position in BJJ, and a <i>set of predictions</i> on how complex skill-patterns will develop out of them.</span></h1>

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

    @media(max-width: 500px) {
        .state-of-lab {
            padding: 10px 2%;
        }

        .report {
            padding: 10px 5px;
        }
    }
</style>