<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import ConcernPage from "$lib/components/ConcernPage.svelte";
    import map from '$lib/images/turtleMapExample.png';
    const source = `
## Summary
* Origin Point is based on [Priit Mihkelson's zero points](https://youtube.com/clip/Ugkx-E8gi1nf8pbZdNuTQaa3ZEzBVyFJ822A).
* The Origin Point is used as a reference for mapping jiu jitsu.
* If you have a path back to the Origin, you are probably safe.
* If you're opponent doesn't have a path back to the Origin, he is probably not safe.

## Navigation units

### The Basic BJJ Navigation Unit: the Technique
The primary navigation unit of BJJ is the Technique (includes positions).  They are understood in reference to each other by differentiation (half-guard is not the same as full guard) and by transition (you can transition to an armbar from bottom closed guard, but not from top closed guard).

Techniques are categorized into submissions, escapes, passes, sweeps, and positions.
Positions are ordered into a hierarchy.  Positions higher up the hierarchy are considered safer.
* example: *Top side control is preferable to Top Half Guard*

Positions are generally considered to be either offensive or defensive in nature.
* example: *Attack from guards, not from Bottom Side Control*
* example: *Defend and escape from bad positions, maintain and attack from good positions*

Players navigate between techniques by means of transition.
* example: *People escape when I go for an armbar from closed guard*

Transitions are described as a series of discrete events in both time and space.
* example: *I got the takedown, then ended up in closed guard, then passed guard into mount, then went for an armbar*

Techniques are generally not reducible or composable, so each must be practiced separately.
* example: *To get good at maintaining Top Mount, Top Half-Guard, and Top Side Control, you must spend time training in each of them*

### The Basic FJJ Navigation Unit: the Point
FJJ has an infinite number of points, all defined by distance and direction from the Origin Point.
If you have the ability to return to the Origin Point, you are safe.  If you do not, you are not safe.

Distance from the Origin Point is defined as distance from [Priit's Defensive BJJ](https://youtu.be/jC6uFGCCLRY).

"Direction" in this context refers to how you are leaving the origin, usually in the form of reaching with a limb.

Origin Point can be summarized as
* keep your inside space (hip to shoulders) clear of opponent controls
* keep your spine aligned such that you can bear weight

Points are smaller and simpler than Techniques, which allows a higher resolution when talking about grappling positions and movements.

Points are a continuous system, there is no equivalent of a "transition" between points, you are just defined to be at different points as you move.


### Nav Unit Comparison
| feature | BJJ | FJJ |
| :----- | :-----: | :-----: |
| basic unit | Technique | point |
| number of units | < 1000 | ∞ |
| unit complexity | high | low |
| unique safety checks | < 1000 | 1 |

## General Use

* Position relative to the Origin is both an offensive and defensive concern.
* Movements toward the Origin promote stability.
* Keeping your path clear to the Origin promotes safety.
* Reaching increases distance from the Origin.
* Distance from the Origin promotes instability.

**Because distance from the Origin is associated with higher risk and more complex problems, mapping is expected to start in the Turtle Trenches.**

As your appetite for risk increases, increase your distance from the Origin.  As a situation begins to feel more risky, decrease yor distance from the Origin.

This can be used as a speed- or intensity-control mechanism.  If things are getting too fast or intense, moving closer to the Origin should help.

Moving further away from the Origin means more reaching, posting, and framing.  This will create more complex grappling configurations, and eventually the equivalent of a BJJ Top Game.

Reaching (distance from Origin) is required in order to effectively block your partner's path back to the Origin.

Blocking your partner's path to the Origin is the foundation of offensive grappling configurations.

**FJJ predicts that you will be successful when you are able to push your lab partner further away from the Origin than you are.**

## BJJ/FJJ Translation Hints

### Turtles All the Way Down
It is expected that an FJJ novice will "lose" all gym rolls.  A BJJ offensive game and a BJJ top game are considered advanced and complex expressions of FJJ, and are build directly on a strong foundation of bottom and defensive game.

### Submissions are Control Positions
The hi-res nature of using points instead of Technique means no transitioning between "position" and "submission".  Because FJJ is blind to the distinction, "submissions" occur only when you are able to keep your partner so far from the Origin, it is trivial to threaten chokes or breaks.

### Defense and Offense Played In All Positions
You must defend your path to the Origin while blocking your partner's.  This is true on bottom and on top, so defense *and* offense can (must?) be played in *all* BJJ positions.
`
</script>
<PageWrapper>
    <ConcernPage source={source} headerImg={map} title="Origin Point"/>
</PageWrapper>