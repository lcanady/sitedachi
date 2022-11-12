<script lang="ts">
  import Bg1 from "./BG1.svelte";
  import Bg2 from "./BG2.svelte";

  export let tint: string;
  export let rand: number;
  export let shade: string;
</script>

{#if rand == 0}
  <Bg1 {tint} {shade} />
{:else if rand == 1}
  <Bg2 {tint} {shade} />
{:else}
  <Bg1 {tint} {shade} />
{/if}
