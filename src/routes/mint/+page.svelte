<script>
	import { generateHash, generateMetadata, metadata } from '../../store';
	import Dachi from './parts/Dachi.svelte';

	$: str = '';
</script>

<div class="wrapper">
	<Dachi />
	<input
		type="text"
		class="input"
		on:keyup={(e) => {
			console.log(generateMetadata(generateHash(e.currentTarget.value || '')));
			$metadata = generateMetadata(generateHash(e.currentTarget.value || ''));
		}}
	/>
</div>

<style>
	.wrapper {
		margin-top: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 40vh;
	}

	.input {
		height: 56px;
		width: 400px;
		border-radius: 100px;
		border: none;
		outline: none;
		padding: 0 20px;
		font-size: 20px;
		font-family: 'Epilogue', sans-serif;
	}
</style>
