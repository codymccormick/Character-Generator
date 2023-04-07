<script>
	import { characterStore } from '../helpers/store';
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
						<b>{event.type}:</b>
						{event.title}
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
									<Card variant="outlined" padded>
										<b>Name:</b>
										{event.name}<br />
										<br /><b>Description:</b>
										{event.description}<br />

										{#if event.heft}
											<br /><b>Heft:</b>
											{event.heft.title}: {event.heft.description}
										{/if}
									</Card>
								</div>
							{/if}
							{#if event.type === 'Enemy'}
								<div class="enemy">
									<Card variant="outlined" padded>
										<b>Name:</b>
										{event.name}<br />
										<br /><b>Animosity:</b>
										{event.animosity.title}<br />
										{event.animosity.description}<br />
										<br /><b>Who hates whom:</b>
										{event.whoHatesWhom.title}<br />
										<br /><b>Intensity level:</b>
										{event.intensity.title}<br />

										{#if event.heft}
											<br /><b>Heft:</b>
											{event.heft.title}: {event.heft.description}
										{/if}
									</Card>
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
