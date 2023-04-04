<script>
	import { characterStore } from '../helpers/store';
	import BasicInfo from './BasicInfo.svelte';
	import Family from './Family.svelte';
	import Origin from './Origin.svelte';
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
			<Family />
				<BasicInfo />
				<Origin />
				<SignificantEvents />
			{/if}
		</div>
	</Card>
{/if}
