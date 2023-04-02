<script>
	import { characterStore } from '../helpers/store';
	import Card, { Content } from '@smui/card';

	$: character = $characterStore;
</script>

<Card variant="outlined" padded>
	<h2>Origin</h2>
	<Content
		><b>Birth Location</b><br/>
		<br />{character.birthplace.title} {character.birthplace.description}
	</Content>
	<Content
		><b>Childhood Environment</b><br/>
		<br />{character.childhoodEnvironment.title}: {character.childhoodEnvironment.description}
	</Content>
</Card>
