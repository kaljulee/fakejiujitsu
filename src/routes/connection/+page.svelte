<script>
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import antaeus from "$lib/images/antaeus.jpg";
    import ConcernPage from "$lib/components/ConcernPage.svelte";
    const source = `
## Summary
Connection is related to Priit Mihkelson's clicks and Matt Thornton's [connection](https://youtu.be/J-zwTwtxOWo).

## Theory
FJJ 2 upgrades Connection from an Exception to a Concern.  It is the least-well-defined Concern.

Connection has two components

* connection to ground
* connection to lab partner

Connection as an Electrical System:

* Benefits from flush connection surfaces
* Connection to the ground can be established through lab partner

## Examples
* [Andy Bisek double underhook](https://youtube.com/clip/UgkxTAF8pw7V2FOlArdkYWUpylmm5Peoq7pN)
* [Toes on the mat](https://youtube.com/clip/Ugkxxgn36k6s8UMXs3-ok-nD7lKpzvOTs2f4)
* [Tai Chi push hands](https://youtu.be/2y_2RyTkiQI)

## General Use

* Active toes are necessary for FJJ2 Connection
* Wim Deputter's [Mannequin Arm](https://youtu.be/t0Iz6dY10kk) is cited as evidence that extended limb position and tensions are important to Connection
`;
</script>
<PageWrapper>
    <ConcernPage source={source}
                 title="Connection"
                 href="https://giphy.com/channel/Regression-to-the-meanest/connection"
                headerImg={antaeus}/>
</PageWrapper>