<script>
	import { address, provider } from '../store';
	export const connectMsg = 'Connect Wallet!';
	export const mintMsg = 'Get To The Choppa!!!';
</script>

<button
	on:click={async () => $provider && ($address = (await $provider?.listAccounts())[0])}
	class="mint"
	style="margin-bottom: 20px; max-width: 600px"
	><img src="/skulls.png" alt="" width="50px" />&nbsp;{$address ? mintMsg : connectMsg}
	<img src="shine.png" alt="" class="shine" /></button
>

<style>
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

	.shine {
		position: absolute;
		right: 10px;
		top: 15px;
		opacity: 0.5;
	}
</style>
