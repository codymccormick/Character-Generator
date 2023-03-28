<script>
	import { characterStore } from '../data/store';
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';

	let character;

	// Subscribe to the characterStore and update the character
	// whenever the store value changes
	$: {
		characterStore.subscribe(($characterStore) => {
			character = $characterStore;
		});
	}
</script>

<Cell class="section">
	{#if character && character.parents}
		<Card variant="outlined" padded>
			<h2>Family</h2>
			<Content
				><b>Parents:</b>
				<br />Father: {character.parents.father.name}
				<br />{character.parents.father.age}
				<br /> Mother: {character.parents.mother.name}
				<br />{character.parents.mother.age}
			</Content>
			{#if character.caretaker}
			<Content
				><b>Caretakers:</b>
				<br />father: {character.caretakers.father.name}
				<br />mother: {character.caretakers.mother.name}
			</Content>
			{/if}
			<Content
				><b>Family Background:</b>
				{character.familyBackground}: {character.familyBackgroundReason}
			</Content>
			{#if character.parents.status === 'Misfortune'}
				<Content>
					<b>Parents' misfortune:</b><br />
					{#each character.parents.misfortune.misfortuneDescription as { parent, eventName, description }}
						{parent}<br />{eventName}<br />{description}<br /><br />
					{/each}
				</Content>
			{:else if character.parents.status === 'Death'}
				<Content>
					<b>Parents' Death:</b><br />
					{#each character.parents.death.deathDescription as { parent, eventName, description }}
						{parent}<br />{eventName}<br />{description}<br /><br />
					{/each}
				</Content>
				{:else}
				<h3>{character.parents.description}</h3>
			{/if}
		</Card>
	{/if}
</Cell>
