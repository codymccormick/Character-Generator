<script>
	import { characterStore } from '../data/store';
	import Card, { Content } from '@smui/card';
	import Accordion, { Panel, Header, Content as AccordionContent } from '@smui-extra/accordion';

	$: character = $characterStore;
</script>

<Card variant="outlined" padded>
	<h2>Significant Events</h2>
	{#if character.fateEvents.length > 0}
		<Accordion multiple>
			{#each character.fateEvents as event, index}
				<Panel>
					<Header>
						<b>{event.title}:</b>
						{event.type}
					</Header>
					<AccordionContent>
						<div>
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
							{#if event.type === 'Friend'}
								<div class="friend">
									<b>Friend: {event.name}</b>
									<ul>
										<li>{event.type}<br /></li>
										<li>{event.description}</li>
									</ul>
									{#if event.heft}
										<br /><b>Heft:</b>
										{event.heft.title}: {event.heft.description}
									{/if}
								</div>
							{/if}
							{#if event.type === 'Enemy'}
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
										{event.heft.title}: {event.heft.description}
									{/if}
								</div>
							{/if}
						</div>
					</AccordionContent>
				</Panel>
			{/each}
		</Accordion>
	{:else}
		<Content><b>None</b></Content>
	{/if}
</Card>