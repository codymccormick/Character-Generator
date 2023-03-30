<script>
	import { characterStore } from '../data/store';
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';

	$: character = $characterStore;
</script>

<Card variant="outlined" padded>
	<h2>Origin</h2>
	<Content
		><b>Birth Location:</b>
		<br />{character.birthplace}
	</Content>
	<Content
		><b>Childhood Environment:</b>
		<br />{character.childhoodEnvironment}: {character.childhoodEnvironmentReason}
	</Content>
</Card>
