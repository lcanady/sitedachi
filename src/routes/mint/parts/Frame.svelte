<script type="ts">
	export let width = 400;
	export let height = 400;
</script>

<svg {width} {height} viewBox="0 0 2000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
	<slot />
</svg>

<style>
	svg {
		border-radius: 100%;
	}
</style>
