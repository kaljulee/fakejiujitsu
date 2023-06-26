<script>
    import {createEventDispatcher} from "svelte";

    export let label = '';
    export let link = '';
    const dispatch = createEventDispatcher();
    function closeCornerMenu() {
        dispatch('closeCornerMenu', {});
    }
</script>

<a href={link} on:click={closeCornerMenu}>{label}</a>
