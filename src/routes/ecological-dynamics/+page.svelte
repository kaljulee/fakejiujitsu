<script>

import SvelteMarkdown from "svelte-markdown";
import PageWrapper from "$lib/components/PageWrapper.svelte";
const source = `
# An Critique of the Language of Techniques from an Ecological Dynamics Perspective

[Who has encountered this problem?](https://youtube.com/clip/UgkxPzcrocTevgyUE2umv2qr1fxDScX8SWZa)`;
</script>

<PageWrapper></PageWrapper>
<SvelteMarkdown source={source}/>