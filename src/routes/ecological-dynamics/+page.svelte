<script>

import SvelteMarkdown from "svelte-markdown";
import PageWrapper from "$lib/components/PageWrapper.svelte";
const source = `
# An Critique of the Language of Techniques from an Ecological Dynamics Perspective

[Who has encountered this problem?](https://youtube.com/clip/UgkxPzcrocTevgyUE2umv2qr1fxDScX8SWZa)

You are demonstrating a technique in front of the class, and your Uke moves in a way that counters the technique.
* Do you force it, relying on your higher social status to let the Uke know to *stop screwing around and fall over?*
* Do you stop the Uke and correct him, giving the impression the technique only works on compliant partners?
* Do you use "invisible jiu jitsu" to make the Uke give the correct response, then continue on your lesson plan?




`;
</script>

<PageWrapper></PageWrapper>
<SvelteMarkdown source={source}/>