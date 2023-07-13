<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import F from '$lib/components/F.svelte';
    import Mathy from '$lib/components/Mathy.svelte';
    import XY from "./XY.svelte";
    import T from "./T.svelte";
    import shapes from "$lib/images/shapes.png";
    import split from "$lib/images/split.png";
    import split_with_scramble from "$lib/images/split_with_scramble.png";
    import labeled from "$lib/images/labeled.png";
    import labeled_no_outline from "$lib/images/labeled_no_outline.png";
    import sorted from "$lib/images/sorted.png";
</script>

<PageWrapper>
    <h1>Justification by <a href="https://en.wikipedia.org/wiki/Dimensionality_reduction">Dimensionality Reduction</a>
    </h1>

    <p>Whenever we move, every muscle in our body has some amount of tension in it. This is a very large number of
        dimensions (one per muscle). These can be listed as a set of values, one for each muscle tension.
    </p>

    <p class="latex">[
        <T sub="1"/>
        ,
        <T sub="2"/>
        , ...
        <T sub="n"/>
        ]
    </p>

    <p>Coordinating them into a coherent movement has been called the <a href="https://youtu.be/Fz31R6sgHZ4?t=106">Degrees
        of Freedom</a> problem.</p>
    <p>When discussing grappling, there are twice as many muscle tension values (one for Uke, one for Tori).</p>

    <p class="latex">[
        <T sub="u1"/>
        ,
        <T sub="u2"/>
        , …
        <T sub="un"/>
        , …
        <T sub="t1"/>
        ,
        <T sub="t2"/>
        , …
        <T sub="tn"/>
        ]
    </p>

    <p>In order to have a complete picture, we also need to variables for intentions and understanding of what is going
        on.
        There will be a unique vector for every possible event in a grappling match.</p>
    <p>I call this entire set the Complete Grappling Space (CGS).</p>

    <p>The CGS is an impossible, unwieldy system. Two grapplers navigate through it continuously over time.
        In order to talk about it, we collapse this high-dimension system into one with a manageable number of
        dimensions.</p>

    <p>BJJ does this with techniques and positions. Sets of CGS vectors are grouped into things like Kimura and Mount.
        Anything that does not fit into a technique or a position goes into the catch-all bucket “scramble".</p>

    <p>We can imagine a function
        <Mathy>F</Mathy>
        that takes a CGS vector <Mathy>V<sub>cgs</sub></Mathy> and gives us two values that, when plotted, group these technique vectors together.
    </p>
    <p class="latex">
        <F>V<sub>cgs</sub></F>
        =
        <XY/>
    </p>

    <p>This hypothetical function groups BJJ techniques into regions, like the image below.</p>

    <img src={shapes} alt="technique map" />

    <p>These regions are groups of CGS vectors, creating one
        <XY/>
        point per vector. We can add an approximation of these vectors
        by filling the regions with symbols representing the individual vectors it is made up of.
    </p>

    <img src={split} alt="technique instances" />

    <p>All other BJJ techniques and positions would be on the map somewhere, but limiting the scope to these three is
        sufficient for this example.
        Anything outside of the technique regions is scramble.</p>

    <img src={split_with_scramble} alt="technique and scramble instances" />

    <p>Each CGS vector includes intentions and understanding, so each one can be coded as good, bad, or ok for the
        grappler traversing the map.</p>

    <img src={labeled} alt="instances labeled by effectiveness" />

    <p>We can drop the area outlines and just have a field of vectors.</p>

    <img src={labeled_no_outline} alt="instances labeled, no outline" />

    <p>When we center our lessons on techniques, we are encouraging students to primarily stay within the technique
        areas. These areas are mixes of good, bad, and ok vectors.</p>

    <p>If you were to throw a dart at the field and wanted to hit a specific technique, you would have a clear target area.</p>

    <p>If you wanted to hit a good vector instead of an ok or bad one, it would be considerably
        harder.</p>

    <p>We could imagine a very similar function <Mathy>G</Mathy>, which trades grouping by technique for organizing good-ok-bad onto
        the
        <Mathy>y</Mathy>
        axis.
    </p>
    <img src={sorted} alt="sorted by effectiveness" />
    <p><Mathy>G</Mathy> makes it difficult to aim for a specific technique, but it is much easier to aim for a good vector.</p>

    <p><strong>FJJ is an attempt to be more
        <Mathy>G</Mathy>
        -like than
        <F/>
        -like in how we think about grappling.</strong>
    </p>
</PageWrapper>

<style>
    img {
        width: 100%;
        height: auto;
        margin: 10px 0;
    }

    @media (min-width: 500px) {
        img {
            height: 75vh;
            width: auto;
            display: block;
            margin: 10px auto;
        }
    }
</style>