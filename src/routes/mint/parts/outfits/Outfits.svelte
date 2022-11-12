<script lang="ts">
	import Kame from './Kame.svelte';
	import Cropper from './Cropper.svelte';
	import GaelicArmor from './GaelicArmor.svelte';
	import Suit from './Suit.svelte';
	import Tsuki from './Tsuki.svelte';

	import Vneck from './Vneck.svelte';
	import Zoodie from './Zoodie.svelte';
	import ZTron from './ZTron.svelte';

	export let rand: number;
	export let tint: string;
	export let shade: string;
	export let mid: string;
</script>

{#if rand == 0}
	<GaelicArmor {tint} {shade} {mid} />
{:else if rand == 1}
	<Suit {tint} />
{:else if rand == 2}
	<Tsuki {tint} {mid} />
{:else if rand == 3}
	<Cropper {shade} {mid} />
{:else if rand == 4}
	<Kame />
{:else if rand == 5}
	<Vneck {tint} />
{:else if rand == 6}
	<Zoodie {shade} {mid} />
{:else if rand == 7}
	<ZTron {tint} {shade} {mid} />
{/if}
