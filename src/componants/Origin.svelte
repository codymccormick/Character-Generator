<script>
	import { characterStore } from '../data/store';
	import { Content } from '@smui/paper';
	import { Cell } from '@smui/layout-grid';

	$: character = $characterStore;
</script>

<Cell class="section">
    <h2>Origin</h2>
    <div class="subsection">
        <Content
            ><b>Birth Location:</b>
            {character.birthplace}
        </Content>
        <Content
            ><b>Childhood Environment:</b>
            {character.childhoodEnvironment}: {character.childhoodEnvironmentReason}
        </Content>
    </div>
</Cell>