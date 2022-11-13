<script>
	import { page } from '$app/stores';
	import '../styles/fonts.css';
	import { address, loading, magic, menu } from '../store';
	import Spinner from './spinner.svelte';
</script>

<svelte:head>
	<title>Zombidachi</title>
</svelte:head>

<Spinner visible={$loading} />

<main>
	<img
		src="/mobile-menu.png"
		alt="mobile menu"
		class="menu"
		on:keypress={() => {}}
		on:click={() => ($menu = !$menu)}
	/>
	<div class="sky" />
	<img src="/logo.png" alt="" class="logo" />
	<img src="logo-alt.png" alt="" class="logo-alt" />
	<img src="/mobile-menu-alt.png" alt="" class="menu-alt" />
	<div class="menu-open" class:hide={!$menu}>
		<img
			src="/close.png"
			alt=""
			class="close"
			on:click={() => ($menu = false)}
			on:keypress={(e) => {}}
		/>
		<a href="/" class="menulink">Home</a>
		<a href="/roadmap" class="menulink">Roadmap</a>
		<a href="/mission" class="menulink">Mission</a>
	</div>
	<nav>
		<div class="navitem">
			<a href="/" class:menu-active={$page.url.pathname == '/'}>Home</a>
			<img
				src="/underline.png"
				alt="underline"
				class="menublood {$page.url.pathname == '/' && 'active'}"
			/>
		</div>

		<div class="navitem">
			<a href="/misson" class:menu-active={$page.url.pathname == '/misson'}>Misson</a>
			<img
				src="/underline.png"
				alt="underline"
				class="menublood {$page.url.pathname == '/misson' && 'active'}"
			/>
		</div>

		{#if $address}
			<div class="navitem">
				<button
					class="mint"
					on:click={() => {
						$address = '';
						$magic.connect.disconnect();
					}}>Disconnect</button
				>
			</div>
		{/if}
	</nav>
	<div class="content">
		<slot />
	</div>
	<img src="/guts-left.png" alt="left guts" class="guts-left" />
	<img src="/guts-right.png" alt="right guts" class="guts-right" />
</main>

<style>
	:global(body) {
		margin: 0;
		height: 100%;
	}

	.menu-open {
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: url('/blood-right.png') no-repeat, #80311c;
		background-position: right bottom;
		position: fixed;
		z-index: 9000;
	}

	.close {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 30px;
		cursor: pointer;
	}

	.hide {
		display: none;
	}

	a {
		font-family: 'Hey Haters';
		font-size: 24px;
		color: #40180e;
		text-decoration: none;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		height: 100%;
		width: 100vw;
		padding: 0;
		margin: 0;
		background: #99dacf;
		background-size: cover;
		background-position: center;
	}

	.sky {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 300px;
		background: url('/sitebg.png') no-repeat;
		background-size: cover;
		background-position: bottom;
		z-index: 0;
	}

	nav {
		top: 20px;
		right: 150px;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: top;
		justify-content: center;
		margin-top: 50px;
		justify-content: flex-end;
		max-width: 100%;
		min-width: 600px;
	}

	.menu {
		position: absolute;
		right: 50px;
		top: 50px;
		display: none;
		z-index: 200;
	}

	.menu-alt {
		position: absolute;
		right: 50px;
		top: 50px;
		display: none;
		z-index: 100;
	}

	.navitem {
		margin-left: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.menublood {
		width: 11px;
		height: 19px;
		margin-top: -5px;
		display: none;
	}

	.menu-active {
		padding-bottom: 5px;
		border-bottom: 5px #80311c solid;
	}

	.active {
		display: block;
	}

	.content {
		position: relative;
		margin-top: 194px;
		width: 100vw;
		height: 6000px;
		min-height: calc(100vh - 194px);
		background: url(/blood-left.png) no-repeat, url(/blood-right.png) no-repeat #80311c;
		background-position: top left, bottom right;
	}

	.logo {
		position: absolute;
		top: 50px;
		left: 250px;
		z-index: 1;
	}

	.bones {
		position: absolute;
		bottom: 150px;
		right: 100px;
		z-index: 10;
	}

	.guts-left {
		position: absolute;
		top: 100px;
		left: 100px;
		z-index: 500;
	}

	.guts-right {
		position: absolute;
		top: 175px;
		right: 100px;
		z-index: 10;
	}

	.logo-alt {
		position: absolute;
		z-index: 200;
		top: 60px;
		display: none;
	}

	.mint {
		background-color: #c8513a;
		outline: none;
		border: none;
		height: 32px;
		width: 150px;
		font-family: 'hey haters';
		color: #ffffeb;
		font-size: 16px;
		border-radius: 50px;
		margin-top: -5px;
		cursor: pointer;
	}

	@media screen and (max-width: 1430px) {
		nav {
			display: none;
		}
		.menu {
			display: block;
		}

		.logo {
			left: 50px;
		}
	}

	@media screen and (max-width: 780px) {
		.guts-right {
			display: none;
		}

		.blood-right {
			display: none;
		}

		.menu {
			width: 40px;
			top: 20px;
			right: 20px;
		}

		.bones {
			display: none;
		}

		.logo {
			display: none;
		}

		.guts-left {
			display: none;
		}

		.blood {
			display: none;
		}

		.logo-alt {
			display: block;
		}

		.content {
			position: relative;
			margin-top: 0;
		}
	}
</style>
