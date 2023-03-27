<script>
	import { characterStore } from '../data/store';
	import { Content } from '@smui/paper';
	import { Cell } from '@smui/layout-grid';

	$: character = $characterStore;
</script>

<Cell class="section">
    <h2>Sibling Details</h2>
    <div class="subsection siblings-grid">
        {#if character.siblings.length > 0 && character.siblings[0].gender !== null}
            {#each character.siblings as sibling}
                <div class="sibling">
                    <Content><b>{sibling.birthOrder} {sibling.gender}</b></Content>
                    {#if sibling.fate}
                        <ul>
                            <li>{sibling.fate.fate}</li>
                            <li>{sibling.fate.description}</li>
                            {#if sibling.fate.misfortune}
                                <li>{sibling.fate.misfortune.description}</li>
                            {/if}
                            {#if sibling.fate.death}
                                <li>{sibling.fate.death.description}</li>
                            {/if}
                        </ul>
                    {/if}
                </div>
            {/each}
        {:else}
            <Content><b>None</b></Content>
        {/if}
    </div>
</Cell>

<style>
    .siblings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 10px;
	}
</style>