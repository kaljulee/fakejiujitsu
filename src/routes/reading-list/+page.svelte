<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import SvelteMarkdown from "svelte-markdown";
    const source = `
## Books
* [The Big Bang](https://simonsingh.net/books/big-bang/the-book/)
    * This had a massive impact on how I have decided to approach grappling
* [Move](https://www.youtube.com/playlist?list=PL7jcinNUb4UlIG8OItQAoUsxFYd54cG6f)
    * Nice intro to Ecological Dynamics
* [Graphs, Maps, Trees](https://www.versobooks.com/products/1939-graphs-maps-trees)
    * Interesting example of looking at something (books) from an unusual angle

## YouTube

* [FJJ Reference Playlist](https://youtube.com/playlist?list=PLI8Eo9rfbFnWZUE85C4ExhGCcjUDy-GSE)
    * A collection of videos linked to in this document
* [Rob Gray Ecological Dynamics Playlist](https://youtube.com/playlist?list=PL7jcinNUb4UkEQQX4zNjEPp9lDX9WRRCG)
    * A video intro to Ecological Dynamics

## Websites

* [The Network State](https://thenetworkstate.com/)
    * Greate example of how to present an idea
`;
</script>

<PageWrapper>
    <SvelteMarkdown source={source} />
</PageWrapper>