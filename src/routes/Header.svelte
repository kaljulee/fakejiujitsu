<script>
    import {showCornerMenu} from "../stores.js";
    import {page} from '$app/stores';
    import {getNavInfo} from "../data/data.js";
    import menu from '$lib/images/menu.svg';
    import open from '$lib/images/open.svg';

    $: thisPage = getNavInfo($page.url.pathname)[0];

    function toggleCornerMenu() {
        showCornerMenu.toggle();
    };
</script>

<header>
    <!--	<div class="corner">-->
    <!--		<a href="https://kit.svelte.dev">-->
    <!--			<img src={logo} alt="SvelteKit" />-->
    <!--		</a>-->
    <!--	</div>-->

    <!--	<nav>-->
    <!--		<svg viewBox="0 0 2 3" aria-hidden="true">-->
    <!--			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />-->
    <!--		</svg>-->
    <!--		<ul>-->
    <!--			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>-->
    <!--				<a href="/">Home</a>-->
    <!--			</li>-->
    <!--			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>-->
    <!--				<a href="/about">About</a>-->
    <!--			</li>-->
    <!--			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>-->
    <!--				<a href="/sverdle">Sverdle</a>-->
    <!--			</li>-->
    <!--			<li aria-current={$page.url.pathname === '/fjj' ? 'page' : undefined}>-->
    <!--				<a href="/fjj">FJJ</a>-->
    <!--			</li>-->
    <!--		</ul>-->
    <!--		<svg viewBox="0 0 2 3" aria-hidden="true">-->
    <!--			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />-->
    <!--		</svg>-->
    <!--	</nav>-->
    {#if $page.url.pathname !== '/'}<a class="home-button" href="/">Home</a>
        {:else}<div/>{/if}
    {#if thisPage}
        <div class="location-label">
            {#if thisPage.sectionLabel}
                <span class="section-label">{thisPage.sectionLabel}</span>
            {/if}
            <span>{thisPage.label}</span>
            <hr class="solid"/>
        </div>

    {/if}
    <button class="corner" on:click={toggleCornerMenu}>
        <img src={$showCornerMenu ? open: menu} alt="menu button"/>
    </button>
</header>

<style>

    .home-button {
        font-weight: bold;
        padding-left: 5px;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header .location-label {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    header .location-label span {
        font-size: 14px;
        padding: 0 15px;
    }

    header .location-label .section-label {
        font-weight: bold;
        font-size: 10px;
        padding: 0 15px;
    }

    header .location-label hr {
        margin-bottom: 18px;
        width: 100%;
        color: lightGray;
    }

    .corner {
        width: 3em;
        height: 3em;
        border: none;
        background: none;
    }

    .corner a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .corner img {
        width: 2em;
        height: 2em;
        object-fit: contain;
    }

    nav {
        display: flex;
        justify-content: center;
        --background: rgba(255, 255, 255, 0.7);
    }

    svg {
        width: 2em;
        height: 3em;
        display: block;
    }

    path {
        fill: var(--background);
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    li[aria-current='page']::before {
        --size: 6px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--color-theme-1);
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    /*a:hover {*/
    /*    color: var(--color-theme-1);*/
    /*}*/
</style>
