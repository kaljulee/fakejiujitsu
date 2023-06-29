<script>
    import {SLUGS} from '../data/data';
    import Contents from '$lib/components/Contents/Contents.svelte';
    import label_blue from '$lib/images/label_blue.svg';
    import symbol_blue from '$lib/images/symbol_blue.svg';
</script>

<div class="grid-layout">
    <div class="sidebar">
        <span class="fjj-diagram">
            <img src={symbol_blue} alt="FJJ2 Diagram"/>
        </span>
        <div class="quick-start">
            <span>In a hurry?  You can check out the</span>
            <a href={SLUGS.QUICK_START}>Quick-Start Guide</a>
        </div>
    </div>
    <div class="contents">
        <div class="header">
            <span class="fjj-label">
                <img src={label_blue} alt="Fake Jiu Jitsu System 2.0T"/>
            </span>
            <p>How to create synthetic jiu jitsu</p>
        </div>
        <Contents/>
    </div>

</div>

<style>
    .fjj-diagram img {
        width: 100%;
        display: block;
    }

    .fjj-label img {
        display: block;
        width: 100%;
    }

    .quick-start {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
        font-size: 12px;
    }

    .quick-start a {
        color: blue;
    }

    .grid-layout {
        display: grid;
        column-gap: 5px;
        grid-template-areas:
        "sidebar sidebar contents contents contents"
    }

    .header {
        grid-area: header;
        /*background: green;*/
        /*border: 1px solid green;*/
    }

    .sidebar {
        padding: 5px 15px;
        /*background: orange;*/
        /*border: 1px solid orange;*/
        /*grid-area: sidebar;*/
    }

    .contents {
        /*background: purple;*/
        /*border: 1px solid purple;*/
        grid-area: contents;
    }

    @media (max-width: 700px) {
        .grid-layout {
            grid-template-areas:
        "sidebar contents contents";
        }
        .sidebar {
            padding: 5px 15px 5px 0;
        }
    }
</style>
