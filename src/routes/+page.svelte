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
	  margin: 0;
	  padding: 0;
	}
  
	.button {
	  margin-bottom: 10px;
	  margin-top: 10px;
	  text-align: center;
	}
  
	main {
	  margin: 0 auto;
	  max-width: 1200px;
	  padding: 0 16px;
	}
  </style>
