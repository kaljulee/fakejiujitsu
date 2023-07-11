<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import Ao from "./Ao.svelte";
    import F from "$lib/components/F.svelte";
    import T from "./T.svelte";
    import Mathy from "$lib/components/Mathy.svelte";
</script>

<PageWrapper>
    <h1>Justification by Mathematical Proof</h1>
    <p>Techniques work only when your opponent presents opportunities for them (unless you are athletically superior to your opponent). It is possible to induce your opponent to give specific opportunities,
        but exactly how you do that depends on the opportunities currently available.</p>
    <p>Your opponent’s actions are an independent variable, and the optimal technique is dependent on their actions.</p>
    <p>We can posit some function <F /> that takes an opponent action <Ao /> and returns the
        correct technique <T />.</p>
    <p class="latex"><Mathy><T /> = <F><Ao /></F></Mathy></p>
    <p>When drilling is focused on a technique, we invert this. The technique becomes the independent variable, set by
        the instructor. The dependent variable is now the Uke’s actions, as he tries to feed the right opponent-action
        to the Tori.</p>
    <p class="latex"><Mathy><Ao /> = <F invert={true}><T /></F></Mathy></p>
    <p>This <F invert={true}/> function is inconsistent with our goals - we are not trying to train the Uke to let someone uchi-mata him.</p>
    <p>Instead of keeping <T /> constant, we should keep <Ao /> constant (but <a href="https://youtu.be/imjmLWj5WCU">live</a>).</p>
    <p>This way the Tori is practicing applying the function <F /> to a relatively small range of varying <Ao /> values. Small
        variations in <Ao /> can cause significant changes in <T />, so we shouldn’t be prescribing a specific <T /> for the
        drill.</p>
    <p>The function <F /> is representative, as we have already defined it as such.</p>
    <p>Therefore, in order to practice the representative function <F />, we should structure our drills around carefully
        constrained sets of <Ao />.</p>

</PageWrapper>