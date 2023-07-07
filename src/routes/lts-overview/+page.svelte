<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    import {SLUGS} from "../../data/data.js";

    const source = `
<style>
    h1 {
    display: flex;
    align-items: baseline;
    }
</style>
## Fake Jiu Jitsu 2 is the current Long-Term-Support version of Fake Jiu Jitsu.

Fake Jiu Jitsu 2 is an semi-scientific training method for learning jiu jitsu. Instead of taking information from authoritative outside sources, it develops all information in-house, using models and 1st-person experience as the source of truth.
Fake Jiu Jitsu also steals wholesale from real grapplers.  I’m re-inventing enough wheels as it is.

This is a method of reducing the degrees of freedom, letting players chose from a smaller set of options when approaching situations.  But instead of cutting off options, it redefines the fundamentals such that there’s less things you could be trying to do.  No techniques or positions unless they can be fully translated into the above dimensions.


Fake Jiu Jitsu is
* a set of fundamentals,
* plus the more complex principles based on those fundamentals
* and exceptions that are outside the model but so annoyingly useful they can't be ignored

### Sections:

* [Approach to Testing](${SLUGS.TEST_DRIVEN})
* The FJJ2 Fundamentals
    * [Origin Point](${SLUGS.ORIGIN_POINT})
    * [Bridge and Shrimp](${SLUGS.BRIDGE_SHRIMP})
    * [Shotput](${SLUGS.SHOTPUT})
    * [Connection](${SLUGS.CONNECT})
    * [Pattern and Timing](${SLUGS.PATTERN_TIMING})

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
                    <span>This document is still under construction, several significant sections remain unwritten.</span>
                </li>
                <li><span>There will be changes every couple days for a while, I’ll update this message when the rate of change starts to slow down</span>
                </li>
            </ul>
        </div>
    </div>
    <SvelteMarkdown source={source}/>
</PageWrapper>

<style>
    :root {
        --border: 1px dashed black;
    }

    .state-of-lab {
        display: flex;
        flex-direction: column;
        padding: 10px 10%;
        background: cornsilk;
        border: var(--border);
    }

    .s-o-l-header {
        justify-content: center;
        font-weight: bold;
        border: var(--border);
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