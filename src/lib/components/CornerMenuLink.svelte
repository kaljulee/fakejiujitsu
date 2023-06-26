<script>
    import {showCornerMenu} from "../../stores.js";

    export let label = '';
    export let link = '';
    export let outsideLink = false;
    export let pic;

    function closeCornerMenu() {
        showCornerMenu.close();
    }
</script>
<li>
    <a class = {outsideLink ? 'outside-link' : undefined} href={link} on:click={closeCornerMenu}>
        {#if !!pic}<img src={pic} alt='thumbnail'>{/if}{label}
    </a>
</li>
<style>
    li {
        list-style-type: none;
    }

    a {
        display: flex;
        /*margin-bottom: 8px;*/
        align-items: center;
        height: 25px;
        color: black;
        font-weight: bold;
        font-size: 18px;
    }

    .outside-link {
        font-size: 12px
    }

    a img {
        margin-right: 8px;
        height: 25px;
    }
</style>