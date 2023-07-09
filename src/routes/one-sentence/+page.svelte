<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    const source = `
Fake Jiu Jitsu was developed in dialog with Brazilian Jiu Jitsu, so I want to start with a broad definition of BJJ:

<p class="definition">A set of positions (top and bottom) and techniques (offense and defense) learned from a teacher, practiced by a student.</p>

These are the main dimensions on which FJJ is distinguished from BJJ.

In one informal sentence, Fake Jiu Jitsu is:

<p class="definition">An approach to training jiu jitsu that trades the concepts of 'technique' and 'position' for a small set of 1st order concerns, and the higher-order principles derived from them, verified through first-person experience.</p>

Defined through 1st-order concerns, FJJ is
<p class="definition">Using <strong>Turtle Space Control</strong> to maintain your ability to apply alternating <strong>Shotput</strong>-powered <strong>Bridge and Shrimp</strong> movements onto an opponent you are <strong>Connected</strong> to, <strong>Timed</strong> contrary to an established <strong>Pattern.</strong></p>

Defined as an Ecological Dynamics experiment, FJJ is

<p class="definition">A set of constraints that reduces degrees of freedom by imposing restrictions on how you think instead of how you move.</p>

Throughout this document, I'll be referring to Fake Jiu Jitsu as *FJJ* or *FJJ2*.  FJJ2 is the latest version of FJJ, but in general the terms can be used interchangeably.
    `;
</script>
<PageWrapper>
    <SvelteMarkdown source={source}/>
</PageWrapper>