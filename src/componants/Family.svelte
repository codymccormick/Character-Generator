<script>
	import { characterStore } from '../helpers/store';
	import Card, { Content } from '@smui/card';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	let character;

	$: character = $characterStore;
	
</script>

{#if character}
	<Card variant="outlined" padded>
		<h2>Family</h2>
		<Content>
			<h3>Parents</h3>
			<DataTable>
				<Head>
					<Row>
						<Cell rowspan="3" />
						<Cell>Father</Cell>
						<Cell>Mother</Cell>
					</Row>
				</Head>
				<Body>
					<Row>
						<Cell><b>Name</b></Cell>
						<Cell>{character.parents.father.name}</Cell>
						<Cell>{character.parents.mother.name}</Cell>
					</Row>
					<Row>
						<Cell><b>Age</b></Cell>
						<Cell>{character.parents.father.age}</Cell>
						<Cell>{character.parents.mother.age}</Cell>
					</Row>
					<Row>
						<Cell><b>Status</b></Cell>
						<Cell>
							{#if character.parents.father.caretakerStatus === 'Misfortune'}
								{character.parents.father.events.misfortune.title}: {character.parents.father.events
									.misfortune.description}
							{:else if character.parents.father.caretakerStatus === 'Death'}
								{character.parents.father.events.death.title}: {character.parents.father.events
									.death.description}
							{:else}
								Alive and well
							{/if}
						</Cell>
						<Cell>
							{#if character.parents.mother.caretakerStatus === 'Misfortune'}
								{character.parents.mother.events.misfortune.title}: {character.parents.mother.events
									.misfortune.description}
							{:else if character.parents.mother.caretakerStatus === 'Death'}
								{character.parents.mother.events.death.title}: {character.parents.mother.events
									.death.description}
							{:else}
								Alive and well
							{/if}
						</Cell>
					</Row>
				</Body>
			</DataTable>
		</Content>
		<Content>
			<h3>Siblings</h3>
			{#if character.siblings.length}
				<DataTable>
					<Head>
						<Row>
							<Cell>Name</Cell>
							<Cell>Age</Cell>
							<Cell>Gender</Cell>
							<Cell>Fate</Cell>
							<Cell>Description</Cell>
						</Row>
					</Head>
					<Body>
						{#each character.siblings as sibling}
							<Row>
								<Cell>{sibling.name}</Cell>
								<Cell>{sibling.age} years old</Cell>
								<Cell>{sibling.gender}</Cell>
								<Cell>{sibling.fate.title}</Cell>
								<Cell>
									{sibling.fate.description}
									{#if sibling.fate.misfortune}
										{sibling.fate.misfortune.description}
									{/if}
									{#if sibling.fate.death}
										{sibling.fate.death.description}
									{/if}
								</Cell>
							</Row>
						{/each}
					</Body>
				</DataTable>
			{:else}
				<b>None</b>
			{/if}
		</Content>
	</Card>
{/if}
