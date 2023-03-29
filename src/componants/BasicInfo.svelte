<script>
	import { characterStore } from '../data/store';
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';

	$: character = $characterStore;
</script>

<Cell class="section">
	<Card variant="outlined" padded>
		<h2>Basic Info</h2>
			<Content><b>Name:</b> {character.name}</Content>
			<Content><b>Age:</b> {character.age}</Content>
			<Content><b>Gender:</b> {character.gender}</Content>
			<Content><b>Race:</b> {character.race}</Content>
			<Content><b>Alignment:</b> {character.alignment}</Content>
	</Card>
</Cell>
