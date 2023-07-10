<script>

import SvelteMarkdown from "svelte-markdown";
import PageWrapper from "$lib/components/PageWrapper.svelte";
const source = `
# Justification from [Ecological Dynamics](https://youtu.be/XcIuSxklLzo)

[Who has encountered this problem?](https://youtube.com/clip/UgkxPzcrocTevgyUE2umv2qr1fxDScX8SWZa)

You are demonstrating a technique in front of the class, and your Uke moves in a way that counters the technique.
* Do you force it, relying on your social status to let the Uke know to *stop being a bad uke and fall over*?
* Do you stop the Uke and correct him, giving the impression the technique only works in a very narrow set of circumstances?
* Do you use "invisible jiu jitsu" to make the Uke give the correct response, then continue with your lesson?

The reason this situation arises at all is because we are conflating environment and task [constraints](https://youtu.be/cCsezh7ijzs?t=1804).

There are three broad sources of influences (called constraints) on what actions you take:

* Individual – Your body, mind, experience, etc
* Environment – The temperature, floor texture, opponent actions, etc
* Task – What it is goals you are oriented towards

In competition, your *Environment* includes your opponent’s actions, your *Task* includes getting a takedown, and your *Individual* includes your ability to perform a takedown.  Uchi-mata is an effective takedown, so we want to make it available within the Individual constraints.

Because the Environment is continually shifting, we don’t know when or if uchi-mata-friendly conditions will arise.  Forcing an uchi-mata is a stable solution only if you outclass your opponent in athleticism and aggression.  The ability to read your opponent’s movements is necessary to see takedown [affordances](https://www.youtube.com/watch?v=-TUjKAwc9Z8&t=441s), uchi-mata being one of many possible options.

If a drill is linguistically centered on a technique (e.g. “Today we are working on uchi-matas), then that is going to be the focus of the Tori’s attention.

Uchi-mata becomes part of the Task instead of the solution.  The Tori is actively discouraged from investigating whether or not uchi-mata is an appropriate response, and the Uke has the Task constraint of creating the proper conditions for an uchi-mata.  This has low [action-fidelity](https://youtu.be/X_2Y7ofPYYw?t=272) for both participants.

Having the Uke set up an uchi-mata for the Tori is built on an important assumption - that the Uke *can* provide the correct Environment for an uchi-mata.  Many training partners more [Nautilus Machine](https://youtu.be/kfE9Plm8Hks) than [barbell](https://youtu.be/s6JMzeIxdFs).  For any given Tori/Uke pair, the Uke may or may not be able to generate uchi-mata conditions for the Tori.

A better use of our training equipment would be to study the affordances that follow naturally from the Uke's actions.

Linguistically organizing our drills around small collections of Uke actions, instead of Tori techniques allows both participants to engage in more [representative training](https://youtu.be/WR6knysFxlM?t=1120).



`;
</script>

<PageWrapper></PageWrapper>
<SvelteMarkdown source={source}/>