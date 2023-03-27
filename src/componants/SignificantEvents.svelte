<script>
	import { characterStore } from '../data/store';
	import { Content } from '@smui/paper';
	import { Cell } from '@smui/layout-grid';

	$: character = $characterStore;
</script>

<Cell class="section">
    <h2>Significant Events</h2>
    <div class="subsection">
        {#if character.fateEvents.length > 0}
            {#each character.fateEvents as event, index}
                <Content>
                    <b>{event.title}:</b>
                    {event.type}<br />
                    {event.description}
                    {#if event.type === 'Long Lost Someone'}
                        <div class="sibling">
                            <b>{event.sibling.birthOrder} {event.sibling.gender}</b>
                            {#if event.sibling.fate}
                                <ul>
                                    <li>{event.sibling.fate.fate}</li>
                                    <li>{event.sibling.fate.description}</li>
                                    {#if event.sibling.fate.misfortune}
                                        <li>{event.sibling.fate.misfortune.description}</li>
                                    {/if}
                                    {#if event.sibling.fate.death}
                                        <li>{event.sibling.fate.death.description}</li>
                                    {/if}
                                </ul>
                            {/if}
                        </div>
                    {/if}
                    {#if event.title === 'Made a friend'}
                        <div class="friend">
                            <b>Friend: {event.name}</b>
                            <ul>
                                <li>{event.type}<br /></li>
                                <li>{event.description}</li>
                            </ul>
                            {#if event.heft}
                                <br /><b>Heft:</b>
                                {event.heft.heft}: {event.heft.description}
                            {/if}
                        </div>
                    {/if}
                    {#if event.title === 'Made an enemy' || event.enemy}
                        <div class="enemy">
                            <b>Enemy: {event.name || event.enemy.name}</b>
                            <ul>
                                <li>{event.type}<br /></li>
                                <li>{event.description}</li>
                                <li>
                                    <b>Who hates whom:</b>
                                    {event.enemy && event.enemy.hates.hates}<br />
                                </li>
                                <li>
                                    <b>Intensity level:</b>
                                    {event.enemy && event.enemy.intensity.intensity}<br />
                                </li>
                                {#if event.enemy && event.enemy.animosity}
                                    <li>
                                        <b>Animosity:</b>
                                        {event.enemy.animosity.animosity}<br />
                                        {event.enemy.animosity.description}
                                    </li>
                                {/if}
                            </ul>
                            {#if event.heft}
                                <br /><b>Heft:</b>
                                {event.heft.heft}: {event.heft.description}
                            {/if}
                        </div>
                    {/if}
                </Content>
            {/each}
        {:else}
            <Content><b>None</b></Content>
        {/if}
    </div>
</Cell>