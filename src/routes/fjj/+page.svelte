<script>
    import Contents from '$lib/components/Contents.svelte';
    import fjj2_diagram_whiteblue from '$lib/images/fjj2_diagram_whiteblue.svg';
</script>
<div class="grid-layout">
    <div class="sidebar">
        <span class="diagram">
            <img src={fjj2_diagram_whiteblue} alt="FJJ2 Diagram"/>
        </span>
    </div>
    <div class="header">
        <h1>Description</h1>
        <p>Fake Jiu Jitsu is an alternative way to think about grappling. It prioritizes experimentation and first
            person experience over top-down instruction.</p>
    </div>
    <div class="contents">
        <Contents/>
    </div>

</div>

<style>
    .diagram img {
        width: 100%;
        display: block;
    }

    .grid-layout {
        display: grid;
        grid-template-areas:
        "sidebar header"
        "sidebar contents"
    }

    .header {
        grid-area: header;
        /*background: green;*/
        border: 1px solid green;
    }

    .sidebar {
        /*background: orange;*/
        border: 1px solid orange;
        grid-area: sidebar;
    }

    .contents {
        /*background: purple;*/
        border: 1px solid purple;
        grid-area: contents;
    }
</style>
