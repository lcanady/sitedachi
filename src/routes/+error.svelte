<script>
	import { page } from '$app/stores';
</script>

<main class="wrapper">
	{#if $page.status == 404}
		<img src="error.png" alt="Page not found" />
		<p class="message">Page not found.</p>
	{:else}
		<h1>{$page.status}</h1>
		<p class="message">{$page.error?.message}</p>
	{/if}
</main>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 200px;
	}

	.message {
		margin-top: 20px;
		font-size: 5rem;

		font-family: 'Hey Haters', sans-serif;
		color: #ffffeb;
	}
</style>
