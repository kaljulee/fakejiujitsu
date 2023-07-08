<script>
    import SvelteMarkdown from "svelte-markdown";
    import GifLink from "$lib/components/GifLink.svelte";

    export let title = '';
    export let headerImg;
    export let source = '';
    export let gifLinkSrc;
    export let href;
    export let gifLinkLabel = '';
    $: _source = `<style>
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

    ul {
    margin-top: 5px;
    }

    </style>
    ${source}`;
</script>
<div class="page-wrapper">
    <h1>{title}</h1>
    {#if !!headerImg}
        <div class="header"><img src={headerImg} alt=""/></div>
    {/if}
    <SvelteMarkdown source={_source}/>
    <slot/>
    {#if !!href}
        <div class="gif-link-wrapper">
            <GifLink href={href} label={gifLinkLabel} src={gifLinkSrc}/>
        </div>
    {/if}
</div>

<style>

    .page-wrapper {
        display: flex;
        flex-direction: column;
        padding: 10px;
        /*align-items: center;*/
    }

    .gif-link-wrapper {
        width: 50%;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header {
        padding: 10px 4em;
        display: flex;
        align-items: center;
    }

    .header img {
        width: 100%;
        height: auto;
    }

    @media (min-width: 550px) {
        .header {
            padding: 10px 6em;
        }
    }
</style>