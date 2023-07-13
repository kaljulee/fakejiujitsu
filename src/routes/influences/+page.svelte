<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    const source = `
When I'm not training in the lab or other underground facility, you can find me at [10th Planet Springfield](https://10thplanetspringfieldma.com/).  It's a great gym: very friendly, nice facility, excellent training program.  If you're in the area, you should check it out!

## Books
* [The Big Bang](https://simonsingh.net/books/big-bang/the-book/)
    * This had a massive impact on how I have decided to approach grappling
* [Move](https://www.youtube.com/playlist?list=PL7jcinNUb4UlIG8OItQAoUsxFYd54cG6f)
    * Nice intro to Ecological Dynamics
* [Graphs, Maps, Trees](https://www.versobooks.com/products/1939-graphs-maps-trees)
    * Interesting example of playing with data and dimensionality in an unusual context (literature)
* [Envisioning Infomration](https://www.edwardtufte.com/tufte/books_ei)
    * When I'm not sure how to visually organize information, I usually steal something from here

## YouTube
* [FJJ Reference Playlist](https://youtube.com/playlist?list=PLI8Eo9rfbFnWZUE85C4ExhGCcjUDy-GSE)
    * A collection of videos linked to in this document
* [Rob Gray Ecological Dynamics Playlist](https://youtube.com/playlist?list=PL7jcinNUb4UkEQQX4zNjEPp9lDX9WRRCG)
    * A video intro to Ecological Dynamics
* [Priit Mihkelson](https://www.youtube.com/@DefensiveBJJ)
    * Heavily influenced Origin Point
* [Wim Deputter](https://www.youtube.com/@WimDeputterBJJ)
    * Heavily influenced Bridge and Shrimp
* [Aaron Jannetti](https://www.youtube.com/@aaronj428)
    * I like the way he talks about feeling energy transfers, etc

## Podcasts
* [Combat Learning Podcast](https://www.combatlearning.com/)
* [History on Fire *episodes on Bruce Lee*](http://historyonfirepodcast.com/episodes/2022/1/17/episode-77-bruce-lee-part-1)

## Websites

* [The Network State](https://thenetworkstate.com/)
    * Greate example of how to present an idea
`;
</script>

<PageWrapper>
    <SvelteMarkdown source={source} />
</PageWrapper>