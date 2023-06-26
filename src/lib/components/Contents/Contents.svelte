<script>
    import {SvelteComponent} from "svelte";
    import Section from "./Section.svelte";
    import {tableOfContents} from "../../../data/data.js";

</script>
{#each tableOfContents as sectionData, i}
    <Section {...sectionData} index={i + 1}/>
{/each}