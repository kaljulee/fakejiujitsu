<script>
    import {showCornerMenu} from "../../../stores.js";
    import {page} from '$app/stores.js';

    export let title;
    export let items = [];
    export let index = '';

    export let deprecated = false;

    function closeCornerMenu() {
        showCornerMenu.close();
    }
</script>

<div>
    <span class="title" class:deprecated>{index}. {title.label}</span>
    <ul>
        {#each items as item}
            <li class:deprecated aria-current="{$page.url.pathname === item.slug ? 'page' : undefined}"><a href={item.slug} on:click={closeCornerMenu}>{item.label}</a></li>
        {/each}
    </ul>
</div>

<style>
    :root {
        --item-border: 1px solid lightGray;
    }

    .deprecated {
        text-decoration: line-through;
    }

    .title {
        font-weight: bold;
    }

    li {
        padding: 8px 5px 8px 5px;
        border-top: var(--item-border);
    }

    a {
        color: black;
    }

    li[aria-current='page'] {
        background: #87cefa;
    }

    ul {
        list-style-type: none;
        border: var(--item-border);
        border-radius: 5px;
        padding-left: 0;
    }

    ul li:first-child {
        border-top: none;
    }
</style>
