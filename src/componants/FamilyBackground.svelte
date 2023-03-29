<script>
	import { characterStore } from '../data/store';
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';

	let character;

	$: {
		characterStore.subscribe(($characterStore) => {
			character = $characterStore;
		});
	}
</script>

<Cell class="section">
	{#if character}
		<Card variant="outlined" padded>
			<h2>Family</h2>
			<Content>
				<b>Parents:</b>
				<br />Father: {character.parents.father.name}
				<br />Age: {character.parents.father.age}
				<br /> Mother: {character.parents.mother.name}
				<br />Age: {character.parents.mother.age}
			</Content>
			<Content>
				<b>Parents' Status:</b><br />
				<Content>
					<b>Dad:</b>
					{#if character.parents.father.caretakerStatus === 'Misfortune'}
						Misfortune
						<br />
						{character.parents.father.events.misfortune.description}
					{:else if character.parents.father.caretakerStatus === 'Death'}
						Death
						<br />
						{character.parents.father.events.death.description}
					{:else}
						Alive and well
					{/if}
					<br />
				</Content>
				<Content>
					<b>Mom:</b>
					{#if character.parents.mother.caretakerStatus === 'Misfortune'}
						Misfortune
						<br />
						{character.parents.mother.events.misfortune.description}
					{:else if character.parents.mother.caretakerStatus === 'Death'}
						Death
						<br />
						{character.parents.mother.events.death.description}
					{:else}
						Alive and well
					{/if}
				</Content>
			</Content>
		</Card>
	{/if}
</Cell>
