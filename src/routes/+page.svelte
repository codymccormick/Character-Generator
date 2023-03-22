<script>
	import Header from '../componants/Header.svelte';
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

	<div class=button style="display: flex; justify-content: center;">
		<Button />
	</div>

	<main>
		<div class="smui-layout-grid">
		  <div class="smui-layout-grid__inner">
			<div class="smui-layout-grid__cell">
			  <Description />
			</div>
		  </div>
		</div>
	  </main>
</body>

<style>
	body {
		background-color: #f5f5f5;;
	}

	.button {
		margin-bottom: 10px;
	}
</style>
