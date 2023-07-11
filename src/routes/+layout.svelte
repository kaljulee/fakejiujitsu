<script>
    import Header from './Header.svelte';
    import {page} from '$app/stores';
    import {showCornerMenu} from '../stores.js';
    import {getNavInfo, SLUGS} from '../data/data';
    import instaSVG from '$lib/images/insta.svg';
    import storeSVG from '$lib/images/store.svg';
    import Contents from '$lib/components/Contents/Contents.svelte';
    import './styles.css';
    import CornerMenuLink from "$lib/components/CornerMenuLink.svelte";

    $: nextPage = getNavInfo($page.url.pathname)[1];
    $: lastPage = getNavInfo($page.url.pathname)[2];
</script>

<div class="app">
    <Header/>
    <main>
        <slot/>
        {#if $showCornerMenu}
            <div class="corner-menu">
                <!--                <hr class="solid"/>-->
                <CornerMenuLink outsideLink={true} label="Store" link="https://nice-train.square.site" pic={storeSVG}/>
                <CornerMenuLink outsideLink={true} label="Instagram" link="https://instagram.com/nicetrainlab"
                                pic={instaSVG}/>
                {#if $page.url.pathname !== SLUGS.HOME}
                    <hr class="solid" style="margin-bottom: 18px"/>
                    <CornerMenuLink label="Home" link={SLUGS.HOME}/>
                    <Contents/>
                {/if}
            </div>
        {/if}
    </main>
    <footer>
        {#if lastPage}
            <a class="footer-button" href={lastPage.slug}>
                <span class="footer-arrow">&larr;</span>
                <div class="footer-description">
                    <strong>Back:</strong>
                    <span>{lastPage.label}</span>
                </div>
            </a>
        {/if}
        <div />
        {#if nextPage}
            <a class="footer-button" href={nextPage.slug}>
                <div class="footer-description">
                    <strong>Next:</strong>
                    <span>{nextPage.label}</span>
                </div><span class="footer-arrow">&rarr;</span></a>
        {/if}
    </footer>
</div>

<style>

    :global(.definition) {
        font-size: 18px;
        font-style: italic;
        margin: 5px;
        padding: 5px;
        background: cornsilk;
    }

    :global(.latex) {
        margin: 1em 2em;
        font-size: 1.3em;
    }

    .footer-description {
        display: flex;
        flex-direction: column;
    }

    .footer-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 15px;
        background: black;
        color: white;
        padding: 5px 20px 5px 20px;
        font-size: 12px;
        width: 25%;
    }

    .footer-arrow {
        font-size: 1em;
    }

    .corner-menu {
        background: var(--color-bg-1);
        position: absolute;
        padding: 5px 10px 5px 10px;
        border-radius: 5px;
        right: 10px;
        border: 1px solid black;
    }

    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 1rem 0 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        justify-content: space-between;
        padding: 1rem 20px;
    }

    footer a {
        text-decoration: none;
    }

    @media (max-width: 480px) {
        footer {
            padding: 12px 10px;
        }

        main {
            padding: 0 12px 0 12px;
        }
    }
</style>
