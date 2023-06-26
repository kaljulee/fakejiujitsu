<script>
    import {createEventDispatcher} from "svelte";

    export let label = '';
    export let link = '';
    const dispatch = createEventDispatcher();
    function closeCornerMenu() {
        dispatch('closeCornerMenu', {});
    }
</script>
<li>
<a href={link} on:click={closeCornerMenu}>{label}</a>
</li>
<style>
    li {
        list-style-type: none;
    }
    a {
        color: black;
        font-weight: bold;
    }
</style>