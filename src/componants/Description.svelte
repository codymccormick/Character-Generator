<script>
	import { characterStore } from '../data/store';
	import LayoutGrid from '@smui/layout-grid';
	import BasicInfo from './BasicInfo.svelte';
	import Origin from './Origin.svelte';
	import FamilyBackground from './FamilyBackground.svelte';
	import Sibling from './Sibling.svelte';
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
					<BasicInfo />
					<Origin />
					<FamilyBackground />
					<SignificantEvents />
				</LayoutGrid>
			{/if}
		</div>
	</Card>
{/if}
