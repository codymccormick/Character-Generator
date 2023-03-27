<script>
	import { characterStore } from '../data/store';
	import { Content } from '@smui/paper';
	import { Cell } from '@smui/layout-grid';

	$: character = $characterStore;
</script>

<Cell class="section">
    <h2>Basic Info</h2>
    <div class="subsection">
        <Content>
            <b>Name:</b>
            {character.name}
        </Content>
        <Content>
            <b>Age:</b>
            {character.age}
        </Content>
        <Content>
            <b>Gender:</b>
            {character.gender}
        </Content>
        <Content>
            <b>Race:</b>
            {character.race}
        </Content>
    </div>
</Cell>