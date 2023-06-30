<script>
    import PageWrapper from '$lib/components/PageWrapper.svelte';
    import diagram_blue from '$lib/images/fjj2_whiteblue_wide.svg';
    import {SLUGS} from '../../data/data';

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
        <div class="why-wrapper">
            <div class="why-list do">
                <h2 class="list-title">Why Fake Jiu Jitsu?</h2>
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
                        <li>turtle trenches increase play time</li>
                    </ul>
                    <li>Fake is easier to remember</li>
                    <ul>
                        <li>defense and offense played in all positions</li>
                        <li>no techniques</li>
                        <li>all jiu jitsu built from 7 things</li>
                    </ul>
                    <li>Proven at the lowest level</li>
                    <li>Encourages flat social hierarchy</li>
                    <li>Consistent with Ecological Dynamics</li>
                    <li>Correctly predicts skill development events</li>
                    <li>More fun than real BJJ</li>
                </ul>
            </div>
            <div class="why-list dont">
                <h2 class="list-title">Why NOT Fake Jiu Jitsu?</h2>
                <ul>
                    <li>Invented by a <a href="https://www.beltchecker.com/profile.php?id=9510">fake blue belt</a></li>
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
        </div>
        <h2>FJJ2 Fundamentals</h2>
        <p>Instead of drilling positions or techniques, drill these:</p>
        <ul class="fundamentals-list">
            <li><a href={SLUGS.TURTLE_SPACE}><h3>Turtle Space</h3></a></li>
            <ul>
                <li>Defensive structures stolen from <a href="https://youtu.be/jC6uFGCCLRY">Priit Mihkelson</a></li>
            </ul>
            <li><h3>Bridge and Shrimp</h3></li>
            <ul>
                <li>These are the two primary movements in FJJ2, stolen from <a href="https://youtu.be/VhgRVzHv9r8">Wim Deputter</a></li>
            </ul>
            <li><h3>Shotput</h3></li>
            <ul>
                <li>This is the main method of power generation in FJJ2, derived by mining <a href="https://youtu.be/b_iUgvzb1-0">shotput</a> and <a href="https://youtu.be/0Yx6amEH3Gs">discus</a> for movement patterns
                </li>
            </ul>
            <li>
                <h3>Connection</h3>
            </li>
            <ul>
                <li>This is the ability to position your body as a strong connector between the ground and your opponent (no example for this yet)
                </li>
            </ul>
            <li><h3>Pattern</h3></li>
            <ul>
                <li>Be able to create and read repeatable reactions in your opponent</li>
            </ul>
            <li><h3>Timing</h3></li>
            <ul>
                <li>Be able to break the established patterns in ways that destabilize your opponent</li>
            </ul>
        </ul>

        <p>Put together, FJJ2 is</p>
        <p class="definition">Using <strong>Turtle Space Control</strong> to maintain your ability to apply alternating
            <strong>Shotput</strong>-powered <strong>Bridge and Shrimp</strong> movements onto an opponent you are
            <strong>Connected</strong> to, <strong>Timed</strong> contrary to an established <strong>Pattern</strong>.
        </p>
        <p>That's it. FJJ2 asserts that if you get really good at only that, your performance on the mat will be
            indistinguishable from real BJJ.</p>
        <p>But how do you get good at it?</p>
        <h2>How to Train FJJ2</h2>
        <ol>
            <li>Turtle 101 - Trenches</li>
            <li>Patterns 101 - Being a Good Uke</li>
            <li>Turtle 201 - Estonian Get Ups</li>
            <li>Patterns 201 - Being a Bad Uke</li>
            <li>Grappling Background Radiation Detection</li>
        </ol>

        <h2>Predictions</h2>
    </div>
    <a href={SLUGS.INTRO} style="font-size: 12px;">For a deeper dive and justification, I recommend starting here.</a>
</PageWrapper>

<style>

    .definition {
        font-size: 18px;
        font-style: italic;
        margin: 5px;
        padding: 5px;
        background: cornsilk;
    }

    ul {
        padding-right: 5px;
    }

    .why-wrapper {
        padding-bottom: 15px;
    }

    h2 {
        display: flex;
        justify-content: center;
        font-size: 16px;
        font-weight: bold;
    }

    h3 {
        font-size: 14px;
    }

    .fundamentals-list {
        /*font-size: 12px;*/
        border-radius: 5px;
        border: 1px solid black;
        /*padding-right: 5px;*/
    }

    .list-title {
        color: red;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5px;
    }

    .why-list {
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid lightblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .why-list h2 {
        color: blue;
        margin-bottom: 0;
    }

    .do {
        /*color: midnightblue;*/
    }

    .dont {
        /*color: maroon;*/
        border: 1px solid lightsalmon;
    }

    .dont h2 {
        color: red;
    }

    .dont a {
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

    @media (max-width: 700px) {
        .large-title {
            font-size: 20px;
        }

        .small-title {
            font-size: 16px;
        }

        .why-list {
            font-size: 12px;
        }

        .fundamentals-list {
            font-size: 12px;
        }
    }
</style>