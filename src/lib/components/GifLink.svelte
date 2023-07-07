<script>
    export let src;
    export let href;
    export let label;
</script>

<a href={href}><span>{label}</span>{#if !!src}<img src={src} alt={label}/>{/if}</a>

<style>
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
    img {
        width: 100%;
        height: auto;
    }
</style>