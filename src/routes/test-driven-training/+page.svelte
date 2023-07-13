<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import tbjj from "$lib/images/trad_learn.jpeg";
    import eco_d from "$lib/images/eco_d_learn.jpeg";
    import tdt from "$lib/images/tdt_learn.jpeg";
</script>

<PageWrapper>
    <p>When describing FJJ, I am usually talking about 1st order principles, models, and predictions.  However, because FJJ has no outside authoritative source of Truth, it requires an unconventional approach to training, which I am calling <strong>Test-Driven Training</strong>.<p/>
    <p>Before explaining what that is, I want to build context (and anticipation!), by presenting descriptions of two common training approaches: Traditional BJJ training (TBJJ) and Ecological Dynamics BJJ training (EDBJJ).</p>
    <p>I realize there is a great deal of variety in how people run their gyms, and I will be doing some (a lot of) good-faith generalizing here.</p>
    <hr/>
    <div class="section-head">
        <h1>Traditional BJJ Training</h1>
        <h2>An information-processing, top down approach to distributing skill</h2>
    </div>
    <div class="img-wrapper"><img src={tbjj} alt="Traditional BJJ Learning"/></div>
    <p>The primary information source is the Professor. Techniques and positions are experienced through three primary
        activties</p>
    <ul>
        <li>class instruction</li>
        <li>no/low resistance drilling</li>
        <li>sparring</li>
    </ul>
    <p>Each activity is most effective when supervised by the Professor, who gives feedback and corrections.</p>
    <p>The student experience does contribute to learning, but the Professor is a necessary source of truth; without his
        corrections, the student is likely to develop malformed and ineffective techniques.</p>
    <p>Generally speaking, TBJJ does not recognize a skill threshold at which a student can question the Professor's teachings.</p>
    <p>There is certainly an understanding that belt-rank does not equal skill, as evidenced by the popular refrain "There are competition blue belts that can take apart hobbyist black belts."</p>
    <p>There is also no shortage of Professors who say "I regularly learn from my students".</p>
    <p>But the scenario of one student telling another "I think the professor is wrong on this point" is uncommon.</p>

    <hr/>
    <div class="section-head">
    <h1>Ecological Dynamics BJJ</h1>
    <h2>A top-down ecological-dynamics approach to generating skill</h2>
    </div>
    <div class="img-wrapper"><img src={eco_d} alt="Ecological Dynamics Learning"/></div>
    <p>Here, the primary source of information is from the player’s experience playing games designed by the coach. The
        coach decides what technique she is trying to get the player to learn, designs a game that encourages behaviors
        that are important to the execution of that technique, then refines the game based on how the player reacts to
        it.</p>
    <p>The player's development is shaped by the coach's games, but the lessons learned are generated primarily from the
        player's personal experience.</p>
    <p>This system has more of an upward-flow of information than TBJJ, as the coaches need to observe the effects their games have on players.  Game refinement usually comes from the coaches observation and judgement, not from player requests.</p>
    <p>In theory there is room for a player to question the coach's games and goals, but in practice this is still unusual.</p>
    <p></p>
    <hr/>
    <div class="section-head">
        <h1>Test-Driven Training</h1>
        <h2>A decentralized, peer-to-peer training scheme</h2>
    </div>
    <div class="img-wrapper"><img src={tdt} alt="Test Driving Learning"/></div>
    <p>The tester has a model which makes predictions that are tested, and a sensor to detect test results.</p>
    <p>The model is the set of principles (i.e., getting underhooks on someone is good).</p>
    <p>The experiment is to try go get underhooks on a lab partner and see what happens.</p>
    <p>The sensor is your body: your athletic control, sensitivity to weight changes, <a href="https://youtu.be/XcIuSxklLzo">awareness of affordances</a>, etc.</p>
    <p>The quality of the information you get is dependent on how finely calibrated both your sensor and lab partner are.</p>
    <p>For example, a novice grappler may find experimental results that are consistent with <i>underhooks not mattering
        at all</i>.</p>
    <p>If this is the data the tester collects, then there is a good chance that either her sensor or lab partner isn't well-calibrated.  (either that or we're all wrong about underhooks)</p>
    <p>The experiments serve the dual functions of testing the model and calibrating the sensor. This means there is a
        certain amount of looseness and guesswork in the system, as both the model and the sensor are possible sources
        of error.</p>
    <p>There are three cycles in TDT:</p>
    <ul>
        <li>model updates</li>
        <li>sensor improvements</li>
        <li>partner feedback</li>
    </ul>
    <p>The partner feedback loop is intended to get observations, as opposed to corrections. The ideal partner will
        avoid statements like "you should do this", instead saying things like "when you do that, I feel this".</p>
</PageWrapper>

<style>

    .section-head {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: cornsilk;
        margin: 15px 0;
        padding: 25px 0;
    }

    .section-head h1 {
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 0px;
        font-size: 25px;
    }

    .section-head h2 {
        margin-top: 0px;
        font-size: 14px;
        margin-bottom: 0;
        text-align: center;
    }

    hr {
        width: 70%;
        padding: 5px 0;
        border: none;
        border-bottom: 1px solid grey;
    }

    .img-wrapper {
        display: flex;
        justify-content: center;
    }

    img {
        width: 100%;
        height: auto;

    }

    @media (min-width: 450px) {
        img {
            width: 75%;
            height: auto;
        }
        .section-head h1 {
            font-size: 32px;
        }
    }

    @media (min-width: 750px) {
        img {
            width: 55%;
            height: auto;
        }
    }
</style>