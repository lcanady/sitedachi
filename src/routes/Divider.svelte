<script type="ts">
	import ConnectButton from './ConnectButton.svelte';
</script>

<div class="divider">
	<div class="divleft">
		<p class="divtitle">Run with the Horde, mint your Dachiball today!.</p>

		<p class="divsubtitle" />
		<ConnectButton />
	</div>
	<img src="/preview.gif" class="preview" alt="Preview" width="545" />
</div>

<style>
	.divider {
		margin-top: 250px;
		display: flex;
		background: #ffffeb;
		padding-left: 260px;
		position: relative;
	}

	.divleft {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-right: 60px;
	}

	.divtitle {
		font-size: 54px;
		font-family: 'hey haters';
		color: #40180e;
		margin-bottom: 60px;
	}

	.preview {
		margin-left: auto;
		object-fit: cover;
	}

	@media screen and (max-width: 1300px) {
		.divider {
			flex-direction: column-reverse;
			padding: 0;
		}

		.preview {
			width: 100%;
		}

		.divtitle {
			text-align: center;
			padding: 10px 40px;
		}

		.divleft {
			padding: 20px;
			display: flex;
			justify-content: center;
			align-items: center;

			padding-bottom: 40px;
		}
	}

	@media screen and (max-width: 600px) {
		.divtitle {
			padding: 0;
		}
	}
</style>
