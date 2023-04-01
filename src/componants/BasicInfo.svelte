<script>
	import { characterStore } from '../data/store';
	import Card, { Content } from '@smui/card';
	import DataTable, { Row } from '@smui/data-table';
	$: character = $characterStore;
</script>

<Card variant="outlined" padded>
	<h2>Character Basics</h2>
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
		<Row>
			<Content><b>Class:</b> {character.class.title}</Content>
		</Row>
		<Row>
			<Content><b>Occupation:</b> {character.occupation.title}</Content>
		</Row>
	</DataTable>
</Card>
