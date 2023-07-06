<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import gif404 from "$lib/images/fourohfour.gif"
</script>

<PageWrapper>
    <div class="four-oh-four-wrapper">
        <img src={gif404} alt="404 slam"/>
    </div>
</PageWrapper>

<style>
    .four-oh-four-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>