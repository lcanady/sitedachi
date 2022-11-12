<script lang="ts">
	import Gore1 from './Gore1.svelte';
	import Gore2 from './Gore2.svelte';
	import Gore3 from './Gore3.svelte';
	import Gore4 from './Gore4.svelte';
	import Gore5 from './Gore5.svelte';
	import Gore6 from './Gore6.svelte';

	export let rand = 0;

	const Gore = [Gore1, Gore2, Gore3, Gore4, Gore5, Gore6][rand];
</script>

<Gore />
