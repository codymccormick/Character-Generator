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
				<b>Father:</b>
				{character.parents.father.name}
				{#if character.parents.father.caretakerStatus === 'Misfortune'}
					<br />Age: {character.parents.father.age}
					<br /><br />Misfortune
					<br />
					{character.parents.father.events.misfortune.description}
				{:else if character.parents.father.caretakerStatus === 'Death'}
				<br /><br />Dead
					<br />
					{character.parents.father.events.death.description}
				{:else}
					Age: {character.parents.father.age}
					<br /><br />Alive and well
				{/if}
				<br /><br /> <b>Mother:</b>
				{character.parents.mother.name}
				{#if character.parents.mother.caretakerStatus === 'Misfortune'}
					<br />Age: {character.parents.mother.age}
					<br /><br />Misfortune
					<br />
					{character.parents.mother.events.misfortune.description}
				{:else if character.parents.mother.caretakerStatus === 'Death'}
				<br /><br />Dead
					<br />
					{character.parents.mother.events.death.description}
				{:else}
					Age: {character.parents.mother.age}
					<br /><br />Alive and well
				{/if}
			</Content>
		</Card>
	{/if}
</Cell>
