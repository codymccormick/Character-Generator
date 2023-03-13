<script>
	import Header from './Header.svelte';
	import StatBlock from './StatBlock.svelte';
	import Description from './Description.svelte';
  </script>
  
  <div>
	<Header />
  </div>
  
  <main style="display: flex;">
	<div style="flex: 1;">
	  <Description />
	</div>
	<div style="flex: 1;">
	  <StatBlock />
	</div>
  </main>