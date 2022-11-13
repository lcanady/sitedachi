<script>
	export let done = false;
</script>

<div class="wrapper">
	<div class="shadow" />
	<div class="container">
		<div class="{done && 'green'} circle ">
			<img src="/skulls.png" alt="" class="skull" />
		</div>
		<slot />
	</div>
</div>

<style>
	.wrapper {
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		width: 100%;
		position: relative;
	}

	.container {
		position: relative;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		background: #ffffeb;
		border-radius: 30px;
		width: 50%;
		color: #40180e;
		text-align: center;
		padding: 20px 80px;
		z-index: 5000;
		line-height: 28px;
	}

	.shadow {
		position: absolute;
		bottom: -10px;
		width: 50%;
		height: 20px;
		background: #6c1d08;
		border-radius: 30px;
		padding: 0 60px;
		z-index: 4000;
	}

	.green {
		background: #00a388 !important;
	}

	.circle {
		margin-top: -70px;
		height: 124px;
		width: 124px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		background: #c8513a;
	}

	.skull {
		height: 72px;
	}

	.done {
		background: #00a388;
	}

	@media screen and (max-width: 1300px) {
		.wrapper {
			width: 80%;
		}
		.container {
			width: 70%;
		}

		.shadow {
			width: 70%;
		}
	}

	@media screen and (max-width: 760px) {
		.wrapper {
			width: 100%;
		}
		.container {
			border-radius: 0;
			width: 100%;
			padding: 0px;
		}
		.shadow {
			width: 100%;
			border-radius: 0;
			padding: 0;
		}
	}
</style>
