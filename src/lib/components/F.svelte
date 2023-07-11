<script>
    import Mathy from "$lib/components/Mathy.svelte";
    export let invert = false;
    $: withParens = $$slots.default;
    console.log($$slots)
</script>

<Mathy>
    <span class:withParens> F</span>
    {#if invert}<sup>-1</sup>{/if}
    {#if $$slots.default}<span class="paren">(</span>{/if}
    <slot></slot>
    {#if $$slots.default}<span class="paren">) </span>{/if}
</Mathy>

<style>
    :root {
        --spacing: -0.2em;
    }
    .paren {
        font-style: normal;
        /*letter-spacing: var(--spacing);*/
    }

    .withParens {
        letter-spacing: var(--spacing);
    }

</style>