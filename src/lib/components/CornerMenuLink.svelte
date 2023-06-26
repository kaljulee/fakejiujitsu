<script>
    import {showCornerMenu} from "../../stores.js";

    export let label = '';
    export let link = '';
    function closeCornerMenu() {
    showCornerMenu.close();
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