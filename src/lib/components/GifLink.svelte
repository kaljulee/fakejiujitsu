<script>
    export let src;
    export let href;
    export let label;
</script>

<a href={href}><span>{label}</span>{#if !!src}<img src={src} alt={label}/>{/if}</a>