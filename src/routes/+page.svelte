<script>
	import Header from '../componants/Header.svelte';
	import StatBlock from '../componants/StatBlock.svelte';
	import Description from '../componants/Description.svelte';
	import Button from '../componants/Button.svelte';
	import { onMount } from 'svelte';
	import { generateCharacter } from '../data/generateCharacter';

	onMount(() => {
		generateCharacter();
	});
</script>

<body>
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
</body>

<style>
	body {
		background-image: url(../../static/pictures/parchment.jpg);
	}
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
