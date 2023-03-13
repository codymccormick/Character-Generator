<script>
	import Header from '../lib/componants/Header.svelte';
	import StatBlock from '../lib/componants/StatBlock.svelte';
	import Description from '../lib/componants/Description.svelte';
	import Button from '../lib/componants/Button.svelte';
	import { onMount } from 'svelte';
	import { generateCharacter } from '../lib/scripts/generateCharacter';

	onMount(() => {
		generateCharacter();
	});

</script>

<div>
	<Header />
</div>

<div style="display: flex; justify-content: center;">
	<Button />
</div>

<main class="container">
	<div class="center">
		<div>
			<Description />
		</div>
	</div>
	<div class="right">
		<StatBlock />
	</div>
</main>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		margin-right: -20rem;
	}
	.right {
		margin-left: auto;
	}
</style>
