<script>
    import Header from './Header.svelte';
    import {page} from '$app/stores';
    import {showCornerMenu} from '../stores.js';
    import instaSVG from '$lib/images/insta.svg';
    import storeSVG from '$lib/images/store.svg';
    import Contents from '$lib/components/Contents/Contents.svelte';
    import './styles.css';
    import CornerMenuLink from "$lib/components/CornerMenuLink.svelte";
</script>

<div class="app">
    <Header/>
    <main>
        <slot/>
        {#if $showCornerMenu}
            <div class="corner-menu">
<!--                <hr class="solid"/>-->
                <CornerMenuLink outsideLink={true} label="Store" link="https://nice-train.square.site" pic={storeSVG}/>
                <CornerMenuLink outsideLink={true} label="Instagram" link="https://instagram.com/nicetrainlab" pic={instaSVG}/>
                {#if $page.url.pathname !== '/'}
                    <hr class="solid" style="margin-bottom: 18px"/>
                    <CornerMenuLink label="Home" link="/"/>
                    <Contents/>
                {/if}
            </div>
        {/if}
    </main>
    <footer>
<!--        <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>-->
    </footer>
</div>

<style>

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
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }

    footer a {
        font-weight: bold;
    }

    @media (min-width: 480px) {
        footer {
            padding: 12px 0;
        }
    }
</style>
