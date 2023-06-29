<script>
    import PageWrapper from '$lib/components/PageWrapper.svelte';
    import diagram_blue from '$lib/images/fjj2_whiteblue_wide.svg';

    let displayDo = true;
    $:not = displayDo;

    function toggleList() {
        displayDo = !displayDo;
    }
</script>

<PageWrapper>
    <div class="grid-layout">
        <div class="title-text">
            <span class="x-small-title" style="padding-bottom: 0;">Nice Train Lab presents</span>
            <span class="large-title" style="padding-top: 0;"><strong>Fake Jiu Jitsu 2</strong></span>
            <span class="small-title">Quick-Start Guide</span></div>
        <div class="title-image"><img style="width: 100%;" src={diagram_blue} alt="FJJ2 Symbol"/></div>
    </div>
    <div>
        <div class="button-container">
            <div></div>
            <h2 class="list-title" class:not>Why {displayDo ? '' : 'NOT'} Fake Jiu Jitsu?</h2>
            <button class:not on:click={toggleList}>Why {displayDo ? 'not' : ''} Fake Jiu Jitsu?</button>

        </div>
        {#if displayDo}
            <div class="why-list do">
                <ul>
                    <li>Learning real brazilian jiu-jitsu is hard</li>
                    <ul>
                        <li>many positions to learn</li>
                        <li>many attacks and counters</li>
                        <li>BJJ "Fundamentals" do nothing for white belts</li>
                        <ul>
                            <li>Drill Scissor sweep, still get crushed</li>
                        </ul>
                    </ul>
                    <li>Fake Fundamentals Immediately help white belts</li>
                    <ul>
                        <li>turtle trenches increase pay time</li>
                    </ul>
                    <li>Fake is easier to remember</li>
                    <ul>
                        <li>defense and offense played in all positions</li>
                        <li>no techniques</li>
                        <li>all jiu jitsu build from 7 things</li>
                    </ul>
                    <li>Proven at the lowest level</li>
                    <li>Encourages flat social hierarchy</li>
                    <li>Consistent with Ecological Dynamics</li>
                    <li>Correctly predicts skill development events</li>
                    <li>More fun than real BJJ</li>
                </ul>
            </div>
        {:else}
            <div class="why-list dont">
                <ul>
                    <li>Invented by a fake blue belt</li>
                    <li>Involves 1+ years of turtle work</li>
                    <li>Must regularly "lose" training rolls</li>
                    <li>Encourages flat social hierarchy</li>
                    <li>Lack of techniques or positions can be disorienting</li>
                    <li>Huge body of success from real BJJ</li>
                    <ul>
                        <li>Works at the highest level</li>
                        <li>Taught by subject-matter experts</li>
                    </ul>
                </ul>
            </div>
        {/if}
        <h2>FJJ2 Fundamentals</h2>
        <p>Instead of drilling positions or techniques, drill these:</p>
        <ul>
            <li><a href="/turtle-space">Turtle Space</a></li>
            <ul>
                <li>Defensive structures stolen from Priit Mihkelson</li>
            </ul>
            <li>Bridge and Shrimp</li>
            <ul>
                <li>These are the two primary movements in FJJ2, stolen from Wim Deputter</li>
            </ul>
            <li>Shotput</li>
            <ul>
                <li>This is the main method of power generation in FJJ2, derived by observing shotput and discus form</li>
            </ul>
            <li>
                Connection
            </li>
            <ul>
                <li>This is the ability to create or avoid a rigid connection between your hips and shoulders and your opponent's, see tai chi push hands</li>
            </ul>
            <li>Pattern</li>
            <ul>
                <li>Be able to create and read repeatable reactions in your opponent</li>
            </ul>
            <li>Timing</li>
            <ul>
                <li>Be able to break the established patterns in ways that destabilize your opponent</li>
            </ul>
        </ul>

        <p>Put together, FJJ2 is</p>
        <p class="definition">Using <strong>Turtle Space Control</strong> to maintain your ability to apply alternating <strong>Shotput</strong>-powered <strong>Bridge and Shrimp</strong> movements onto an opponent you are <strong>Connected</strong> to, <strong>Timed</strong> contrary to an established <strong>Pattern</strong>.</p>
        <p>That's it.  FJJ2 asserts that if you get really good at only that, your performance on the mat will be indistinguishable from real BJJ.</p>
        <p>But how do you get good at it?</p>
        <h2>How to Train FJJ2</h2>
        <ol>
            <li>Turtle 101 - Trenches</li>
            <li>Patterns 101 - Being a Good Uke</li>
            <li>Turtle 201 - Estonian Get Ups</li>
            <li>Patterns 201 - Being a Bad Uke</li>
            <li>Grappling Background Radiation Detection</li>
        </ol>
    </div>
    <a href="/intro">For a deeper dive and justification, I recommend starting here.</a>
</PageWrapper>

<style>
    :root {
        font-size: 12px;
    }

    .definition {
        font-size: 16px;
        font-style: italic;
        margin: 5px;
        padding: 5px;
        background: cornsilk;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: right;
        font-size: 8px;
        width: 100px;
        background: none;
        border: none;
        color: blue;
    }

    button.not {
        color: red;
    }

    .button-container {
        display: grid;
        grid-template-columns: 3fr 7fr 3fr;
        width: 100%;
        justify-content: space-around;
    }

    h2 {
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
    }

    .list-title {
        color: red;
    }

    .list-title.not {
        color: blue;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5px;
    }

    .why-list {
        display: flex;
        justify-content: center;
    }

    .do {
        color: midnightblue;
    }

    .dont {
        color: maroon;
    }

    .title-text {
        display: flex;
        flex-direction: column;
    }

    .large-title {
        font-size: 3rem;
    }

    .small-title {
        font-size: 2rem;
    }

    .x-small-title {
        font-size: 8px;
    }

    .title-text span {
        width: max-content;
        padding: 1rem 0;
    }

    .title-image {
        display: flex;
        justify-content: right;
    }

    .title-image img {
        width: 100%;
        height: auto;
    }

    /*.body {*/
    /*    grid-area: body;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    !*align-items: center;*!*/
    /*}*/

    @media (max-width: 500px) {
        .large-title {
            font-size: 20px;
        }

        .small-title {
            font-size: 16px;
        }
    }
</style>