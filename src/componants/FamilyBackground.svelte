<script>
	import { characterStore } from '../data/store';
	import { Content } from '@smui/paper';
	import { Cell } from '@smui/layout-grid';

	$: character = $characterStore;
</script>

<Cell class="section">
    <h2>Family Background</h2>
    <div class="subsection">
        <Content
            ><b>Caretakers:</b>
            {character.caretakersOrigin}: {character.caretakersOriginReason}
        </Content>
        <Content
            ><b>Family Background:</b>
            {character.familyBackground}: {character.familyBackgroundReason}
        </Content>
        {#if character.caretakerStatus.status === 'Misfortune'}
            <Content>
                <b>Caretakers' misfortune:</b><br />
                {#each character.caretakerStatus.misfortune.misfortuneDescription as { parent, eventName, description }}
                    {parent}<br />{eventName}<br />{description}<br /><br />
                {/each}
            </Content>
        {:else if character.caretakerStatus.status === 'Death'}
            <Content>
                <b>Caretakers' Death:</b><br />
                {#each character.caretakerStatus.death.deathDescription as { parent, eventName, description }}
                    {parent}<br />{eventName}<br />{description}<br /><br />
                {/each}
            </Content>
        {:else}
            <h3>{character.caretakerStatus.description}</h3>
        {/if}
    </div>
</Cell>