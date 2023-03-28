<script>
	import { characterStore } from '../data/store';
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';

	$: character = $characterStore;
</script>

<Cell class="section">
	<Card variant="outlined" padded>
		<h2>Origin</h2>
			<Content
				><b>Birth Location:</b>
				{character.birthplace}
			</Content>
			<Content
				><b>Childhood Environment:</b>
				{character.childhoodEnvironment}: {character.childhoodEnvironmentReason}
			</Content>
	</Card>
</Cell>
