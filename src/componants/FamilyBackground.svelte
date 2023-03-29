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
	{#if character}
		<Card variant="outlined" padded>
			<h2>Family</h2>
			<Content
				><b>Parents:</b>
				<br />Father: {character.parents.father.name}
				<br />Age: {character.parents.father.age}
				<br /> Mother: {character.parents.mother.name}
				<br />Age: {character.parents.mother.age}
			</Content>
			<Content>
				<b>Parents' Status:</b><br />
				{#if character.parents.father.caretakerStatus === 'Misfortune' || character.parents.father.caretakerStatus === 'Death'}
				<Content>
					Dad: {character.parents.father.caretakerStatus === 'Misfortune'
						? 'Misfortune'
						: 'Death'}
					<br />
					{character.parents.father.event ? character.parents.father.event.description : ''}
				</Content>
				{/if}
				{#if character.parents.mother.caretakerStatus === 'Misfortune' || character.parents.mother.caretakerStatus === 'Death'}
				<Content>
					Mom: {character.parents.mother.caretakerStatus === 'Misfortune'
						? 'Misfortune' 
						: 'Death'}
					{character.parents.mother.event ? character.parents.mother.event.description : ''}
				</Content>
				{/if}
				{#if character.parents.father.caretakerStatus.status === 'Alive and well' && character.parents.mother.caretakerStatus.status === 'Alive and well'}
					Your parents or guardians are both doing well.
				{/if}
			</Content>
		</Card>
	{/if}
</Cell>
