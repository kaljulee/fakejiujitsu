<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import technique_escape from '$lib/images/technique_escape.png';
    import local_minima from "$lib/images/local_minima.png";
    import new_search_space from "$lib/images/new_search_space.png";
</script>

<PageWrapper>
    <h1>Technique Application: Escaping Local Minima</h1>

    <p>While it is technically possible that given enough time, everyone would invent every technique, it is possible for people to get stuck in <a href="https://ai.stackexchange.com/questions/12607/why-is-a-mix-of-greedy-and-random-usually-best-for-stochastic-local-search">local minimum</a>.</p>
    <p>A player can get stuck around a sub-optimal solution because it requires too much bizarre experimentation to move to the optimal solution.</p>
    <img src={local_minima} alt="stuck in local minima" />
    <span class="caption">Peaks represent unintuitive/ineffective actions, valleys represent intuitive/effective actions</span>

    <p>If she is frustrated with the search and not making any progress, then it can be helpful to use technique to place her on a completely different spot on in the space.</p>

    <img src={technique_escape} alt = "technique" />

    <p>It is important to emphasis to the player that the technique is just a new center of exploration, not the <i>actual optimal solution</i>.</p>

    <img src={new_search_space} alt="new search space"/>
</PageWrapper>

<style>
    img {
        width: 100%;
        height: auto;
        margin: 10px 0;
    }

    .caption {
        display: block;
        margin: auto;
        padding: 0 1em 1em 1em;
        text-align: center;
        font-size: .8em;
        font-style: italic;
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
