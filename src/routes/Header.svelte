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


    .corner img {
        width: 2em;
        height: 2em;
        object-fit: contain;
    }
</style>
