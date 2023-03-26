<script>
	import { characterStore } from '../data/store';
	import Paper, { Content } from '@smui/paper';
	import LayoutGrid, { Cell } from '@smui/layout-grid';

	$: character = $characterStore;
	$: isLoading = !character;
</script>

{#if isLoading}
	<p>Loading...</p>
{:else}
	<Paper color="primary" variant="outlined" class="mdc-theme--primary">
		<div class="characterDescription">
			{#if character}
				<LayoutGrid>
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
					<Cell class="section">
						<h2>Origin</h2>
						<div class="subsection">
							<Content
								><b>Birth Location:</b>
								{character.birthplace}: {character.birthplaceReason}
							</Content>
							<Content
								><b>Childhood Environment:</b>
								{character.childhoodEnvironment}: {character.childhoodEnvironmentReason}
							</Content>
						</div>
					</Cell>
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
				</LayoutGrid>
			{/if}
		</div>
	</Paper>
{/if}

<style>
	.siblings-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 10px;
	}
	.sibling {
		background-color: #f1f1f1;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	ul {
		margin: 0;
		padding-left: 1.5em;
		list-style-type: none;
	}
	li::before {
		content: '•';
		color: #2c3e50;
		display: inline-block;
		position: relative;
		left: -1em;
	}
</style>
