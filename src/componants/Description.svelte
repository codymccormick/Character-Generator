<script>
	import { characterStore } from '../data/store';
	import Paper, { Content } from '@smui/paper';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import BasicInfo from './BasicInfo.svelte';
	import Origin from './Origin.svelte';
	import FamilyBackground from './FamilyBackground.svelte';
	import Sibling from './Sibling.svelte';
	import SignificantEvents from './SignificantEvents.svelte';

	$: character = $characterStore;
	$: isLoading = !character;
</script>

{#if isLoading}
	<p>Loading...</p>
{:else}
	<Paper color="primary" variant="outlined" class="mdc-theme--primary">
		<div class="characterDescription">
			{#if character}
				<LayoutGrid>
					<BasicInfo />
					<Origin />
					<FamilyBackground />
					<Sibling />
					<SignificantEvents />
				</LayoutGrid>
			{/if}
		</div>
	</Paper>
{/if}
