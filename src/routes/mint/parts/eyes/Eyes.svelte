<script lang="ts">
  import Eyes1 from "./eyes1.svelte";
  import Eyes2 from "./Eyes2.svelte";
  export let female: boolean;
</script>

{#if female == false}
  <Eyes1 />
{:else}
  <Eyes2 />
{/if}
