<script>
	import { provider, magic, NAGIC_API, address, loading } from '../store';
	import { Magic } from 'magic-sdk';
	import { ConnectExtension } from '@magic-ext/connect';
	import { ethers } from 'ethers';
	import { onMount } from 'svelte';
	import Bubble from './Bubble.svelte';
	import Roadmap from './Roadmap.svelte';
	import ConnectButton from './ConnectButton.svelte';

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
		<button
			style="margin: 20px 0"
			on:click={async () => $provider && ($address = (await $provider?.listAccounts())[0])}
			class="mint-mobile"
			>{$address ? 'Mint a Dachiball!' : 'Connect Wallet!'}
			<img src="shine.png" alt="" class="shine" /></button
		>
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
		<p />
		<button
			on:click={async () => $provider && ($address = (await $provider?.listAccounts())[0])}
			class="mint"
			><img src="/skulls.png" alt="" width="50px" />&nbsp;{$address
				? 'Mint a Dachiball!'
				: 'Connect Wallet!'}
			<img src="shine.png" alt="" class="shine" /></button
		>
	</div>
</div>
<div class="images" />

<Roadmap />
<div class="divider">
	<div class="divleft">
		<p class="divtitle">Run with the Horde, mint your Dachiball today!.</p>

		<p class="divsubtitle" />
		<ConnectButton />
	</div>
	<img src="/preview.gif" class="preview" alt="Preview" width="545" />
</div>

<style>
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

	.mint {
		padding: 20px 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #c8513a;
		outline: none;
		border: none;
		height: 100px;
		min-width: 400px;
		margin-bottom: 100px;
		font-family: 'hey haters';
		color: #ffffeb;
		font-size: 36px;
		border-radius: 50px;
		cursor: pointer;
		position: relative;
	}

	.mint-mobile {
		background-color: #c8513a;
		outline: none;
		border: none;
		height: 56px;
		width: 100%;
		font-family: 'hey haters';
		color: #ffffeb;
		font-size: 24px;
		border-radius: 50px;
		cursor: pointer;
		display: none;
	}

	.shine {
		position: absolute;
		right: 10px;
		top: 15px;
		opacity: 0.5;
	}

	.ball {
		margin-top: 45px;
		width: 450px;
		height: 450px;
	}

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
		margin-bottom: 20px;
	}

	.divsubtitle {
		font-size: 24px;
		font-family: 'epilogue';
		color: #40180e;
		margin-bottom: 40px;
		font-weight: bold;
		line-height: 34px;
	}

	.preview {
		margin-left: auto;
		object-fit: cover;
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

	@media screen and (max-width: 1630px) {
		.right {
			margin-right: 0;
			text-align: center;
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
		.right {
			margin-right: 0px;
			padding: 0 32px;
			margin-top: -30px;
		}

		.left {
			margin-right: 0px;
		}

		.ball {
			width: 100%;
			margin-top: 100px;
		}

		.title-mobile {
			display: block;
			line-height: 3.5rem;
		}

		.mint-mobile {
			display: block;
		}

		.cols {
			left: 0;
			padding: 0;
		}

		.mint {
			width: 80%;
			display: none;
		}

		.shine {
			display: none;
		}

		.title {
			display: none;
		}

		.skull {
			margin-top: 0;
		}
	}
	@media screen and (max-width: 415px) {
		.cols {
			background-color: #6c1d08;
		}
	}
</style>
