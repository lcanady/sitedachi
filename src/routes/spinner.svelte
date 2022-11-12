<script>
	import { fade } from 'svelte/transition';

	export let visible = false;
</script>

<div id="wrapper" class:show={visible} transition:fade={{ duration: 3 }}>
	<div class="bounce">
		<img src="/spinner.png" class="skull" alt="Loading..." />
	</div>
	<div class="shadow" />
	<img src="/logo-alt.png" class="logo" alt="logo" />
	<p class="subtitle">Loading...</p>
</div>

<style>
	.show {
		display: flex !important;
	}

	#wrapper {
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;

		background: rgba(108, 29, 8, 0.95);

		z-index: 7000;
	}

	.shadow {
		width: 50px;
		height: 5px;
		background: #40180e;
		opacity: 0.4;
		border-radius: 100px;
		z-index: 5000;
		animation: blink 2s infinite;
	}

	.subtitle {
		font-size: 24px;
		font-family: 'epilogue';
		color: #ffffeb;
		margin-bottom: 40px;
		font-weight: bold;
		line-height: 34px;
		animation: blink 1s infinite;
	}

	.logo {
		margin-top: 50px;
	}

	.bounce {
		position: relative;
		animation: bounce 2s ease infinite;
		width: 200px;
	}

	.skull {
		width: 100%;
		animation: spin 1s linear infinite;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-40px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
		75% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
