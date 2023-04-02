<script>
	import { characterStore } from '../data/store';
	import Card, { Content } from '@smui/card';
	$: character = $characterStore;
</script>

<Card variant="outlined" padded>
	<h2>Character Basics</h2>
			<Content><b>Name:</b> {character.name}<br/>
			<br/><b>Age:</b> {character.age}<br/>
			<br/><b>Gender:</b> {character.gender}<br/>
			<br/><b>Race:</b> {character.race.title}<br/>
			<br/><b>Alignment:</b> {character.alignment.title}<br/>
			<br/><b>Class:</b> {character.class.title}<br/>
			<br/><b>Occupation:</b> {character.occupation.title}</Content>
</Card>
