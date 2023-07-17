<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";

    const src = `
# Technique Application: Extremely Low Confidence

People come to grappling with different initial degrees of physical literacy.  When a person feels his physical literacy is especially low, he may not believe that he can begin experimenting and paying attention.

In the event that you cannot convince a player that he can start to pay attention, technique can be a useful tool to build initial confidence.

Technique allows a player to start moving on the mat without having any trust in their own perceptions or judgement.

Over time, technique can be used to create high-contrast situations (e.g. perform this armbar while controlling posture, now try it without) where the player can practice noticing differences.

Once the player feels confident that he *can notice* if the same thing is happening multiple times, and that he *can try* to get the same thing to happen multiple times, then you have tricked him into starting FJJ.
`;
</script>

<PageWrapper>
    <SvelteMarkdown source={src} />
</PageWrapper>