<script>
	import Bubble from './Bubble.svelte';
</script>

<h2>A (Kind of) <span class="hilight">Roadmap!</span></h2>
<div class="bubbles">
	<img src="/line.png" alt="" class="line" />
	<Bubble done={true}>
		<h3 class="header">Genesis Collection</h3>
		<p class="body">
			222 Dachiballs will be released for minting. Each dachiball will include a zombidachi, a
			couple of traits, and maybe even a few $brainz to get you started.
		</p>
	</Bubble>

	<Bubble>
		<h3 class="header">The Grave Yard</h3>
		<p class="body">
			We will be releasing a parts shop where you can buy and sell parts for your zombidachi. This
			will be the first step in creating your own unique zombidachi. We will also be releasing a
			community marketplace where you can buy and sell your zombidachi.
		</p></Bubble
	>
	<Bubble>
		<h3 class="header">My Zombuddy</h3>
		<p class="body">This</p></Bubble
	>
	<Bubble>
		<h3 class="header">The Merch</h3>
		<p class="body">
			Let's show off our zombidachi in the real! This stage will include fully custom and
			semi-custom merch based on some base zombie designs, or the zombidachi you have in your
			wallet. Clothing, stickers, figures and plush are all on the map as well, because everyond
			needs Zombuddy!
		</p>
	</Bubble>
</div>

<style>
	h2 {
		text-align: center;
		margin: 100px 0;
		font-size: 54px;
		font-family: 'Hey Haters', sans-serif;
		font-weight: normal;
		color: #ffffeb;
	}

	.line {
		position: absolute;
		top: 0;
		left: 50%;

		z-index: 10;
	}
	.bubbles {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		left: 0;
		right: 0;
		position: relative;
		height: 1600px;
	}

	.header {
		font-family: 'Hey Haters';
		font-size: 38px;
		margin-bottom: 40px;
		color: #40180e;
	}

	.body {
		font-family: 'Epilogue';
		font-size: 20px;
		margin-top: 0;
		color: #40180e;
	}
</style>
