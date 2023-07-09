<script>
    import SvelteMarkdown from "svelte-markdown";
    import GifLink from "$lib/components/GifLink.svelte";

    export let title = '';
    export let headerImg;
    export let source = '';
    export let gifLinkSrc;
    export let href;
    $: _source = `<style>
table {
border: 1px solid black;
}
 th {
text-decoration: underline;
}

td {
border-bottom: 1px dashed gray;
}
        h1 {
        font-weight: bold;
        display: flex;
        align-items: baseline;
    }

    h2, h3, h4 {
            margin-bottom: 0;
    }

    h2 {
        font-weight: bold;
        font-size: 1.2em;
        margin-top: 35px;
    }

    h3 {
        font-size: 1em;
    }

    ul, ol {
    margin-top: 5px;
    }

    </style>
    ${source}`;
</script>
<div class="page-wrapper">
    <div class="header">
    <h1>{title}</h1>
    {#if !!headerImg}
        <img src={headerImg} alt=""/>
    {/if}
    </div>
    <SvelteMarkdown source={_source}/>
    <slot/>
    {#if !!href}
        <div class="gif-link-wrapper">
            <GifLink href={href} label={`GIFs exploring ${title}`} src={gifLinkSrc}/>
        </div>
    {/if}
</div>

<style>

    .page-wrapper {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .gif-link-wrapper {
        width: 50%;
        margin-top: 30px;
        display: flex;
        align-items: center;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .header img {
        width: auto;
        height: auto;
        max-height: 50vh;
        max-width: 80%;
    }

    @media (min-width: 550px) {
        .header {
            padding: 10px 6em;
        }
    }
</style>