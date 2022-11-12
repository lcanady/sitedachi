<script type="ts">
	import Backgrounds from './backgrounds/Backgrounds.svelte';
	import Frame from './Frame.svelte';
	import { colorMatrix, metadata } from '../../../store';
	import Body from './Body.svelte';
	import Outfits from './outfits/Outfits.svelte';
	import Blood from './blood/Blood.svelte';
	import Eyes from './eyes/Eyes.svelte';
	import Hair from './hair/Hair.svelte';
	import Gore from './gore/Gore.svelte';
</script>

<Frame>
	<Backgrounds
		tint={colorMatrix[$metadata.background.color][0]}
		shade={colorMatrix[$metadata.background.color][1]}
		rand={$metadata.background.style}
	/>
	<Body tint={colorMatrix[$metadata.body][0]} />
	<Blood rand={$metadata.blood} />
	<Eyes female={$metadata.eyes} />
	<Hair
		tint={colorMatrix[$metadata.hair.color][0]}
		mid={colorMatrix[$metadata.hair.color][1]}
		shade={colorMatrix[$metadata.hair.color][2]}
		rand={$metadata.hair.style}
	/>
	<Outfits
		tint={colorMatrix[$metadata.outfit.color][0]}
		mid={colorMatrix[$metadata.outfit.color][1]}
		shade={colorMatrix[$metadata.outfit.color][2]}
		rand={$metadata.outfit.style}
	/>
	<Gore rand={$metadata.gore} />
</Frame>
