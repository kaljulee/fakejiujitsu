<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import {page} from '$app/stores';
</script>

<PageWrapper>
    <div class="four-oh-four-wrapper">
    <span>404'ed!</span>
    <span>{$page.url}</span>
    <span>{$page.url.pathname}</span>
    </div>
</PageWrapper>

<style>
    .four-oh-four-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>