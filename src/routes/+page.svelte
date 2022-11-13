<script>
	import { provider, magic, NAGIC_API, address } from '../store';
	import { Magic } from 'magic-sdk';
	import { ConnectExtension } from '@magic-ext/connect';
	import { ethers } from 'ethers';
	import { onMount } from 'svelte';
	import Roadmap from './Roadmap.svelte';
	import ConnectButton from './ConnectButton.svelte';
	import Divider from './Divider.svelte';

	onMount(() => {
		$magic = new Magic(NAGIC_API, {
			network: 'goerli',
			extensions: [new ConnectExtension()]
		});

		$provider = new ethers.providers.Web3Provider($magic.rpcProvider);
	});
	console.log($address);
</script>

<img src="/bloodsplatters2.png" alt="" class="bloodsplatters2" />
<img src="/bloodsplatters3.png" alt="" class="bloodsplatters3" />
<img src="/bloodsplatters4.png" alt="" class="bloodsplatters4" />
<img src="/bloodsplatters5.png" alt="" class="bloodsplatters5" />
<img src="/bloodsplatters6.png" alt="" class="bloodsplatters6" />
<img src="/bloodsplatters7.png" alt="" class="bloodsplatters7" />
<img src="/bones.png" alt="" class="bones" />
<img src="/bones2.png" alt="" class="bones2" />
<img src="/bones3.png" alt="" class="bones3" />
<img src="/bones4.png" alt="" class="bones4" />
<img src="/bones5.png" alt="" class="bones5" />
<img src="/bones6.png" alt="" class="bones6" />

<div class="cols">
	<div class="left">
		<img src="/ball.png" alt="" class="ball" />
	</div>
	<div class="right">
		<p class="title-mobile">
			<span class="hilight">000</span>/222 <span class="hilight">GENESIS</span> Dachiballs
		</p>
		<div class="mobile">
			<ConnectButton />
		</div>
		<p class="title">
			<span class="hilight">000</span>/222 <span class="hilight">GENESIS</span> Dachiballs are ready
			to be collected! Get yours
			<span class="hilight">Now!</span>
		</p>

		<p class="subtitle">
			Each Dachiball contains one (1) random Zombidachi with the never-to-be-repeated <span
				class="hilight">‘Genesis’</span
			>
			trait. Think of it ia your all access pass to the future of the *dachi universe. Also included
			in each Dachiball are a couple of traits, and maybe some $brainz to start you out with! Become
			an OG *dachi holder
			<span class="hilight">today!</span>
		</p>
		<div class="desktop">
			<ConnectButton />
		</div>
	</div>
</div>
<div class="images" />

<Roadmap />
<Divider />

<style>
	.desktop {
		display: block;
		height: 100%;
		align-items: center;
		justify-content: center;
		margin-bottom: 60px;
	}
	.mobile {
		display: none;

		height: 100%;
		width: 100%;
		justify-content: center;
	}
	.bones {
		position: absolute;
		top: 1900px;
		left: 200px;
	}

	.bones2 {
		position: absolute;
		top: 3300px;
		left: 100px;
	}

	.bones3 {
		position: absolute;
		top: 2500px;
		right: 200px;
	}

	.bones4 {
		position: absolute;
		top: 4300px;
		left: 100px;
	}

	.bones5 {
		position: absolute;
		top: 4500px;
		right: 100px;
	}

	.bones6 {
		position: absolute;
		top: 1500px;
		right: 100px;
	}

	.bloodsplatters2 {
		position: absolute;
		right: 0;
		top: 400px;

		z-index: 0;
	}

	.bloodsplatters3 {
		position: absolute;
		left: 100px;
		top: 1500px;

		z-index: 10;
	}

	.bloodsplatters4 {
		position: absolute;
		right: 15px;
		top: 2000px;
		width: 165px;

		z-index: 10;
	}

	.bloodsplatters5 {
		position: absolute;
		left: 0;
		top: 2500px;
		z-index: 0;
	}

	.bloodsplatters6 {
		position: absolute;
		right: 0;
		top: 2800px;
		z-index: 0;
	}

	.bloodsplatters7 {
		position: absolute;
		left: 0;
		top: 3600px;
		z-index: 0;
	}

	.cols {
		display: flex;
		position: relative;
		margin-top: 40px;
		margin-left: 100px;
		z-index: 100;
		max-width: 1300px;
	}

	.left {
		margin-right: 40px;
		z-index: 10000;
	}

	.title {
		font-size: 54px;
		font-family: 'hey haters';

		color: #ffffeb;
		margin-bottom: 20px;
	}

	.title-mobile {
		font-size: 54px;
		font-family: 'hey haters';
		margin-top: 10px;
		color: #ffffeb;
		margin-bottom: 20px;
		display: none;
	}

	.subtitle {
		font-size: 24px;
		font-family: 'epilogue';
		color: #ffffeb;
		margin-bottom: 40px;
		font-weight: bold;
		line-height: 34px;
		z-index: 1000;
	}

	.images {
		position: relative;
		display: flex;
		z-index: 1000;
		width: 100%;
		height: 800px;
		background: url(/zombies.png);
	}

	.ball {
		margin-top: 45px;
		width: 450px;
		height: 450px;
	}

	.skull {
		display: none;
	}

	.shadow {
		background: #40180e;
		height: 10px;
		border-radius: 50%;
		width: 10%;
		opacity: 0.2;
		margin-bottom: 20px;
	}

	@media screen and (min-width: 1930px) {
		.cols {
			max-width: 1600px;
		}
	}

	@media screen and (max-width: 1600px) {
		.cols {
			margin-left: 0;
		}

		.right {
			padding-right: 40px;
		}
	}

	@media screen and (max-width: 1300px) {
		.desktop {
			display: flex;
		}

		.right {
			display: flex;
			padding: 0;
			flex-direction: column;
			margin-right: 0;
			text-align: center;
			justify-content: center;
		}

		.left {
			margin-right: 0;
			text-align: center;
		}

		.cols {
			left: 0;
			padding: 0 40px;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.images {
			display: none;
		}

		.skull {
			display: block;
			margin-top: 60px;
			width: 10%;
			margin-bottom: 30px;
		}
	}

	@media screen and (max-width: 760px) {
		.bloodsplatters2 {
			display: none;
		}

		.bloodsplatters3 {
			display: none;
		}

		.bloodsplatters4 {
			display: none;
		}

		.bloodsplatters5 {
			display: none;
		}

		.bloodsplatters6 {
			display: none;
		}

		.bloodsplatters7 {
			display: none;
		}

		.bones {
			display: none;
		}

		.bones2 {
			display: none;
		}

		.bones3 {
			display: none;
		}

		.bones4 {
			display: none;
		}

		.bones5 {
			display: none;
		}

		.bones6 {
			display: none;
		}

		.right {
			margin-right: 0px;
			padding: 0 32px;
		}

		.mobile {
			display: flex;
		}

		.desktop {
			display: none;
		}

		.left {
			margin-right: 0px;
		}

		.ball {
			width: 100%;
			margin-top: 100px;
		}

		.title-mobile {
			margin-top: 42px;
			display: block;
			line-height: 3.5rem;
		}

		.bloodsplatters7 {
			display: none;
		}

		.cols {
			padding: 0;
			margin-top: 40px;
		}

		.title {
			display: none;
		}

		.skull {
			margin-top: 0;
		}
	}
	@media screen and (max-width: 460px) {
		.bloodsplatters2 {
			display: none;
		}

		.right {
			margin: 0;
			padding: 0 20px;
		}

		.title-mobile {
			font-size: 38px;
			margin-top: -30px;
		}

		.ball {
			width: 80%;
			height: auto;
		}
	}
</style>
