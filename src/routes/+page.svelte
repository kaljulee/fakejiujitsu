<script>
    import {SLUGS} from "../data/data.js";
    import label_blue from '$lib/images/label_blue.svg';
    import symbol_blue from '$lib/images/symbol_blue.svg';
    import Contents from "$lib/components/Contents/Contents.svelte";
</script>

<svelte:head>
    <meta property="og:site_name" content="Fake Jiu Jitsu"/>
    <meta property="og:description" content="how to create synthetic jiu jitsu" />
    <meta property="og:title" content="Fake Jiu Jitsu"/>
    <meta property="og:locale" content="en"/>
    <meta property="og:url" content="https://fakejiujitsu.com"/>
    <meta property="og:image" content="https://fakejiujitsu.com/social_share3.png"/>
    <meta property="og:image:width" content="450"/>
    <meta property="og:image:height" content="336"/>
    <meta property="og:type" content="website"/>
</svelte:head>

<div class="grid-layout">
    <div class="image">
        <span class="fjj-diagram">
            <img src={symbol_blue} alt="FJJ2 Diagram"/>
        </span></div>
    <div class="header">
        <div class="header">
            <span class="fjj-label">
                <img src={label_blue} alt="Fake Jiu Jitsu System 2.0T"/>
            </span>
        <p><span class="avoid-wrap">How to create</span> <span class="avoid-wrap">synthetic jiu jitsu</span></p>
    </div></div>
    <div class="quick-start"><span>In a hurry?  You can check out the</span>
        <a href={SLUGS.QUICK_START}>Quick-Start Guide</a></div>
    <div class="content">        <Contents/>
    </div>
</div>

<style>

    .avoid-wrap {
        display: inline-block;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 5px;
        grid-template-areas:
                "image header"
                "image content"
                "quickstart content"
                "... content";
    }
    .image {
        /*border: 1px solid green;*/
        grid-area: image;
    }
    .quick-start {
        padding-top: 15px;
        grid-area: quickstart;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .quick-start a {
        color: blue;
    }
    .header {
        /*border: 1px solid blue;*/
        grid-area: header;
    }

    .header p {
        padding-bottom: 25px;
    }

    .content {
        grid-area: content;
        /*border: 1px solid purple;*/
    }

    @media (max-width: 500px) {
        .grid-layout {
            grid-template-areas:
        "image header"
        "quickstart quickstart"
        "content content";
        }

        .header p {
            font-size: 12px;
        }

        .quick-start {
            font-size: 12px;
            padding-bottom: 15px;
        }
    }
</style>