<script>
	import { characterStore } from '../data/store';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import BasicInfo from './BasicInfo.svelte';
	import Origin from './Origin.svelte';
	import Family from './Family.svelte';
	import SignificantEvents from './SignificantEvents.svelte';
	import Card from '@smui/card';

	$: character = $characterStore;
	$: isLoading = !character;
</script>

{#if isLoading}
	<p>Loading...</p>
{:else}
	<Card color="primary" variant="outlined" class="mdc-theme--primary">
		<div class="characterDescription">
			{#if character}
				<LayoutGrid>
					<Cell class="section">
						<BasicInfo />
					</Cell>
					<Cell class="section">
						<Origin />
					</Cell>
					<Cell class="section">
						<SignificantEvents />
					</Cell>
					<Cell class="section">
						<Family />
					</Cell>
				</LayoutGrid>
			{/if}
		</div>
	</Card>
{/if}
