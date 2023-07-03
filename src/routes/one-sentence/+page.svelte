<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    const source = `
In one informal sentence, Fake Jiu Jitsu is:

<p class="definition">An approach to training jiu jitsu that trades the concepts of 'technique' and 'position' for a small set of 1st order principles, and the higher-order principles derived from them, verified through first-person experience.</p>

This definition is in contrast to Brazilian Jiu Jitsu, which can be described as

<p class="definition">A set of positions (top and bottom) and techniques (offense and defense) learned from a teacher, practiced by a student.</p>

There is very little room to talk about BJJ without referring to technique and position; they are fundamental to the language of BJJ.

Defined through its 1st-order principles, FJJ is
<p class="definition">Using <strong>Turtle Space Control</strong> to maintain your ability to apply alternating <strong>Shotput</strong>-powered <strong>Bridge and Shrimp</strong> movements onto an opponent you are <strong>Connected</strong> to, <strong>Timed</strong> contrary to an established <strong>Pattern.</strong></p>

Throughout this document, I'll be referring to Fake Jiu Jitsu as *FJJ* or *FJJ2*.  FJJ2 is the latest version of FJJ, but in general the terms can be used interchangeably.
    `;
</script>
<PageWrapper>
    <SvelteMarkdown source={source}/>
</PageWrapper>