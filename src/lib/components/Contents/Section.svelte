<script>
    export let title;
    export let items = [];
    export let index = '';
</script>

<div>
    <span class="title">{index}. {title.label}</span>
    <ul>
    {#each items as item}
        <li><a href={item.slug}>{item.label}</a></li>
        {/each}
    </ul>
</div>

<style>
    :root {
        --item-border: 1px solid black;
    }
    .title {
        font-weight: bold;
    }
    li {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        border-top: var(--item-border);
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
