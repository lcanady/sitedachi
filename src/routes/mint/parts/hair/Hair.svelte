<script lang="ts">
	import Blossom from './Blossom.svelte';
	import Dijin from './Dijin.svelte';
	import Fro from './Fro.svelte';
	import Homie from './Homie.svelte';
	import Iris from './Iris.svelte';
	import Isekai from './Isekai.svelte';
	import Kame from './Kame.svelte';
	import Kpop from './Kpop.svelte';
	import Mess from './Mess.svelte';
	import Part from './Part.svelte';
	import Petunia from './Petunia.svelte';
	import Poppy from './Poppy.svelte';
	import Rose from './Rose.svelte';
	import Sora from './Sora.svelte';
	import Swift from './Swift.svelte';
	import Whisp from './Whisp.svelte';

	export let rand: number;
	export let tint: string;
	export let mid: string;
	export let shade: string;

	$: Hair = [
		Dijin,
		Fro,
		Iris,
		Part,
		Kame,
		Blossom,
		Kpop,
		Rose,
		Mess,
		Whisp,
		Poppy,
		Petunia,
		Swift,
		Isekai,
		Sora,
		Homie
	];
</script>

{#if rand == 0}
	<Dijin {tint} {shade} {mid} />
{:else if rand == 1}
	<Fro {tint} {shade} {mid} />
{:else if rand == 2}
	<Iris {tint} {shade} {mid} />
{:else if rand == 3}
	<Part {tint} {shade} {mid} />
{:else if rand == 6}
	<Kame {tint} {shade} {mid} />
{:else if rand == 5}
	<Blossom {tint} {shade} {mid} />
{:else if rand == 4}
	<Kpop {tint} {shade} {mid} />
{:else if rand == 7}
	<Rose {tint} {shade} {mid} />
{:else if rand == 8}
	<Mess {tint} {shade} {mid} />
{:else if rand == 9}
	<Whisp {tint} {shade} {mid} />
{:else if rand == 10}
	<Poppy {tint} {shade} {mid} />
{:else if rand == 11}
	<Petunia {tint} {shade} {mid} />
{:else if rand == 12}
	<Swift {tint} {shade} {mid} />
{:else if rand == 13}
	<Isekai {tint} {shade} {mid} />
{:else if rand == 14}
	<Sora {tint} {shade} {mid} />
{:else if rand == 15}
	<Homie {tint} {shade} {mid} />
{/if}
