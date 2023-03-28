<script>
	import { characterStore } from '../data/store';
	import { Cell } from '@smui/layout-grid';
	import Card, { Content } from '@smui/card';

	$: character = $characterStore;
</script>

<Cell class="section">
	<Card variant="outlined" padded>
		<h2>Significant Events</h2>
			{#if character.fateEvents.length > 0}
				{#each character.fateEvents as event, index}
                <Card variant="outlined" padded>
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
						{#if event.title === 'Made an enemy'}
							<div class="enemy">
								<b>Enemy: {event.name}</b>
								<ul>
									<li>{event.type}<br /></li>
									<li>{event.description}</li>
									<li>
										<b>Who hates whom:</b>
										{event.whoHatesWhom.hates}<br />
									</li>
									<li>
										<b>Intensity level:</b>
										{event.intensity.intensity}<br />
									</li>
									<li>
										<b>Animosity:</b>
										{event.animosity.animosity}<br />
										{event.animosity.description}
									</li>
								</ul>
								{#if event.heft}
									<br /><b>Heft:</b>
									{event.heft.heft}: {event.heft.description}
								{/if}
							</div>
						{/if}
					</Content>
                </Card>
				{/each}
			{:else}
				<Content><b>None</b></Content>
			{/if}
	</Card>
</Cell>
