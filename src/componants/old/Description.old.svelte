<script>
	import { characterStore } from '../data/store';
	import BasicInfo from './BasicInfo.svelte';
	import Family from './Family.svelte';
	import Origin from './Origin.svelte';
	import SignificantEvents from './SignificantEvents.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
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
					<Cell span="6">
						<BasicInfo />
						<Origin />
						<SignificantEvents />
					</Cell>
					<Cell span="6">
						<Family />
					</Cell>
				</LayoutGrid>
			{/if}
		</div>
	</Card>
{/if}
