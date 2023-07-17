<script>
import PageWrapper from "$lib/components/PageWrapper.svelte";
import SvelteMarkdown from "svelte-markdown";
const source = `
# Justification by Koan
There was once a white belt who approached a brown belt and said “I have a competition coming up.  Help me with my judo.”

The brown belt said “you should get grips, push your opponent’s head and shoulders out of position, and steer her around the mat until she falls down or pulls guard.”

After practicing it, the white belt exclaimed “This works so well!  Why aren’t we learning this in class?”

The brown belt looked confused and responded “Because this isn’t judo, it’s just pushing someone.”
`;
</script>

<PageWrapper>
    <SvelteMarkdown source={source} />
</PageWrapper>