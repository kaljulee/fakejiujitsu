<script>
    import {showCornerMenu} from "../../../stores.js";

    export let title;
    export let items = [];
    export let index = '';

    function closeCornerMenu() {
        showCornerMenu.close();
    }
</script>

<div>
    <span class="title">{index}. {title.label}</span>
    <ul>
        {#each items as item}
            <li><a href={item.slug} on:click={closeCornerMenu}>{item.label}</a></li>
        {/each}
    </ul>
</div>

<style>
    :root {
        --item-border: 1px solid lightGray;
    }

    .title {
        font-weight: bold;
    }

    li {
        /*padding-top: 8px;*/
        /*padding-bottom: 8px;*/
        /*padding-left: 5px;*/
        padding: 8px 5px 8px 5px;
        border-top: var(--item-border);
    }

    a {
        color: black;
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
