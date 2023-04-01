<script>
	import { characterStore } from '../data/store';
	import Card, { Content } from '@smui/card';
	import DataTable, { Row } from '@smui/data-table';
	$: character = $characterStore;
</script>

<Card variant="outlined" padded>
	<h2>Basic Info</h2>
	<DataTable>
		<Row>
			<Content><b>Name:</b> {character.name}</Content>
		</Row>
		<Row>
			<Content><b>Age:</b> {character.age}</Content>
		</Row>
		<Row>
			<Content><b>Gender:</b> {character.gender}</Content>
		</Row>
		<Row>
			<Content><b>Race:</b> {character.race.title}</Content>
		</Row>
		<Row>
			<Content><b>Alignment:</b> {character.alignment.title}</Content>
		</Row>
	</DataTable>
</Card>
