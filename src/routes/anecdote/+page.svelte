<script>

import PageWrapper from "$lib/components/PageWrapper.svelte";
import SvelteMarkdown from "svelte-markdown";
import {SLUGS} from "../../data/data.js";
const source = `
# Justification by Anecdote

There was an IBJJF where I decided I was *going to hit an uchi-mata*.  I [dead drilled](https://youtu.be/imjmLWj5WCU) it after class.  I performed it cleanly during the belt test, the head instructor gave me his secret tips.

During the competition I was able to take multiple shots at uchi-mata, and was countered every time.
Improvements in my form did not translate to getting takedowns (it did contribute to being taken down).

During the pandemic I started training at home with friends.  I stopped trying to do throws and started locking out into a [Shrimp or a Bridge](${SLUGS.BRIDGE_SHRIMP}) while trying to put weight on my partner (lab partners described it as kind of a zombie shuffle).  Over time this has developed into being able to hit small trips on my peers.

3 years practicing uchi-mata led to getting countered and thrown.

3 years of practicing leaning on people like an idiot led to hitting destabilizing trips.
`;
</script>

<PageWrapper>
    <SvelteMarkdown source={source}/>
</PageWrapper>