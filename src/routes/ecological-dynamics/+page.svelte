<script>

import SvelteMarkdown from "svelte-markdown";
import PageWrapper from "$lib/components/PageWrapper.svelte";
const source = `
Coming soon - a justification for FJJ from an [Ecological Dynamics](https://youtu.be/XcIuSxklLzo) perspective
`;
</script>

<PageWrapper></PageWrapper>
<SvelteMarkdown source={source}/>