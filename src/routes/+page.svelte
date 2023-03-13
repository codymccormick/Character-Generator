<script>
	import Header from './Header.svelte';
	import StatBlock from './StatBlock.svelte';
	import Description from './Description.svelte';
	import Button from './Button.svelte';
  </script>
  
  <div>
	<Header />
  </div>

  <div style="text-align: center;">
	<Button />
  </div>
  
  <main style="display: flex;">
	<div style="flex: 1;">
	  <Description />
	</div>
	<div style="flex: 1;">
	  <StatBlock />
	</div>
  </main>