<script>
	import { characterStore } from '../data/store';
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';

	$: character = $characterStore;
</script>

<Cell class="section">
	<Card variant="outlined" padded>
		<h2>Family</h2>
		<Content
			><b>Parents:</b>
			<br />Father:{character.parents.father.name}
			<br /> Mother: {character.parents.mother.name}
		</Content>
		<Content
			><b>Caretakers:</b>
			{character.caretakersOrigin}: {character.caretakersOriginReason}
		</Content>
		<Content
			><b>Family Background:</b>
			{character.familyBackground}: {character.familyBackgroundReason}
		</Content>
		{#if character.caretakerStatus.status === 'Misfortune'}
			<Content>
				<b>Caretakers' misfortune:</b><br />
				{#each character.caretakerStatus.misfortune.misfortuneDescription as { parent, eventName, description }}
					{parent}<br />{eventName}<br />{description}<br /><br />
				{/each}
			</Content>
		{:else if character.caretakerStatus.status === 'Death'}
			<Content>
				<b>Caretakers' Death:</b><br />
				{#each character.caretakerStatus.death.deathDescription as { parent, eventName, description }}
					{parent}<br />{eventName}<br />{description}<br /><br />
				{/each}
			</Content>
		{:else}
			<h3>{character.caretakerStatus.description}</h3>
		{/if}
	</Card>
</Cell>
