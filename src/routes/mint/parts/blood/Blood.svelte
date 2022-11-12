<script lang="ts">
  import Blood1 from "./Blood1.svelte";
  import Blood2 from "./Blood2.svelte";
  import Blood3 from "./Blood3.svelte";
  import Blood4 from "./Blood4.svelte";

  export let rand: number;
</script>

{#if rand == 0}
  <Blood1 />
{:else if rand == 1}
  <Blood2 />
{:else if rand == 2}
  <Blood3 />
{:else if rand == 3}
  <Blood4 />
{:else if rand == 4}
  <Blood1 />
{:else if rand == 5}
  <Blood2 />
{:else if rand == 6}
  <Blood3 />
{:else}
  <Blood4 />
{/if}
