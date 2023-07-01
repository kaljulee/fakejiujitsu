<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import tbjj from "$lib/images/trad_learn.jpeg";
    import eco_d from "$lib/images/eco_d_learn.jpeg";
    import tdt from "$lib/images/tdt_learn.jpeg";
</script>

<PageWrapper>
    <p>FJJ uses a test-driven training (TDT) method.<p/>
    <p>Before explaining what that is, I want to build context (and anticipation), by presenting descriptions of Traditional BJJ training
        (TBJJ) and Ecological Dynamics BJJ training (EDBJJ).</p>
    <p>Here is a diagram showing the flow of information in TBJJ:</p>
    <img src={tbjj} alt="Traditional BJJ Learning"/>
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
    <p>Next is the Ecological Dynamics approach I see most often in a BJJ context:</p>
    <img src={eco_d} alt="Ecological Dynamics Learning"/>
    <p>Here, the primary source of information is from the student’s experience playing games designed by the coach.  The coach decides what technique she is trying to get the player to learn, designs a game that encourages behaviors that are important to the execution of that technique, then refines the game based on how the player reacts to it.</p>
    <p>The player's development is shaped by the coach's games, but the lessons learned are generated primarily from the player's personal experience.</p>
    <p>Finally, Test-Driven Training:</p>
    <img src={tdt} alt="Test Driving Learning" />
    <p>The tester has a model, which makes predictions that are tested in experiments, and a sensor to detect test results.</p>
    <p>The model is the set of principles (i.e., getting underhooks on someone is good).</p>
    <p>The experiment is to try go get underhooks on someone and see what happens.</p>
    <p>The sensor is your body: your athletic control, sensitivity to weight changes, awareness of affordances, etc.</p>
    <p>The quality of the information you get is dependent on how finely calibrated your sensor is.</p>
    <p>For example, a novice grappler may find experimental results that are consistent with <i>underhooks not mattering at all</i>.</p>
    <p>If this is the data the tester collects, then there is a good chance that her sensor isn't well-calibrated yet.  (either that or we're all wrong about underhooks)</p>
    <p>The experiments serve the dual functions of testing the model and calibrating the sensor.  This means there is a certain amount of looseness and guesswork in the system, as both the model and the sensor are possible sources of error.</p>
    <p>There are three cycles in TDT:</p>
    <ul>
        <li>model updates</li>
        <li>sensor improvements</li>
        <li>partner feedback</li>
    </ul>
    <p>The partner feedback loop, is not about getting corrections, it is getting observations.  The ideal partner will avoid statements like "you should do this", instead saying things like "when you do this, I feel this opportunity (or constraint)".</p>
</PageWrapper>

<style>
    img {
        width: 100%;
        height: auto;
    }
</style>